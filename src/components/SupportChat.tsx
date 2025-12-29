'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronDown, Mail, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    sources?: { id: string; title: string }[];
    escalate?: boolean;
    escalateEmail?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.listo.family';

export default function SupportChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showEscalation, setShowEscalation] = useState(false);
    const [escalationEmail, setEscalationEmail] = useState('');
    const [escalationMessage, setEscalationMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    // Initial greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                role: 'assistant',
                content: 'Hei! 👋 Jeg er Listo Support. Hva kan jeg hjelpe deg med i dag?',
                timestamp: new Date()
            }]);
        }
    }, [isOpen, messages.length]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            content: input.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/support/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage.content,
                    history: messages.map(m => ({ role: m.role, content: m.content })),
                    language: 'nb'
                })
            });

            if (!response.ok) throw new Error('Chat request failed');

            const data = await response.json();

            const assistantMessage: Message = {
                role: 'assistant',
                content: data.response,
                timestamp: new Date(),
                sources: data.sources,
                escalate: data.escalate,
                escalateEmail: data.escalateEmail
            };

            setMessages(prev => [...prev, assistantMessage]);

        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Beklager, noe gikk galt. Prøv igjen eller send oss en e-post på support@listo.family.',
                timestamp: new Date(),
                escalate: true,
                escalateEmail: 'support@listo.family'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEscalate = async () => {
        if (!escalationMessage.trim()) return;

        setIsLoading(true);
        try {
            await fetch(`${API_URL}/api/support/escalate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: escalationEmail || null,
                    message: escalationMessage,
                    history: messages.map(m => ({ role: m.role, content: m.content }))
                })
            });

            setShowEscalation(false);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Takk! Vi har mottatt meldingen din${escalationEmail ? ` og vil svare til ${escalationEmail}` : ''} så raskt som mulig.`,
                timestamp: new Date()
            }]);
            setEscalationEmail('');
            setEscalationMessage('');
        } catch {
            alert('Kunne ikke sende melding. Prøv igjen.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Floating button when closed
    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                aria-label="Åpne chat"
            >
                <MessageCircle className="w-6 h-6" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Trenger du hjelp?
                </span>
            </button>
        );
    }

    // Minimized state
    if (isMinimized) {
        return (
            <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-72">
                <button
                    onClick={() => setIsMinimized(false)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-gray-900">Listo Support</div>
                            <div className="text-xs text-gray-500">{messages.length} meldinger</div>
                        </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                </button>
            </div>
        );
    }

    // Full chat window
    return (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <div className="font-semibold text-white">Listo Support</div>
                        <div className="text-xs text-white/70">Vi svarer vanligvis med en gang</div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsMinimized(true)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Minimer"
                    >
                        <ChevronDown className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Lukk"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[85%] p-3 rounded-2xl ${message.role === 'user'
                                    ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-br-md'
                                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md'
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

                            {/* Escalation suggestion */}
                            {message.escalate && message.role === 'assistant' && (
                                <button
                                    onClick={() => setShowEscalation(true)}
                                    className="mt-3 flex items-center gap-2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                                >
                                    <Mail className="w-4 h-4" />
                                    Kontakt menneskelig support
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                                <span className="text-sm text-gray-500">Tenker...</span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Escalation form */}
            {showEscalation && (
                <div className="p-4 border-t border-gray-200 bg-purple-50">
                    <div className="text-sm font-medium text-gray-700 mb-2">Send melding til support</div>
                    <input
                        type="email"
                        placeholder="Din e-post (valgfritt)"
                        value={escalationEmail}
                        onChange={(e) => setEscalationEmail(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-200 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea
                        placeholder="Beskriv problemet ditt..."
                        value={escalationMessage}
                        onChange={(e) => setEscalationMessage(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-200 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-20"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowEscalation(false)}
                            className="flex-1 py-2 text-sm text-gray-600 hover:text-gray-800"
                        >
                            Avbryt
                        </button>
                        <button
                            onClick={handleEscalate}
                            disabled={!escalationMessage.trim() || isLoading}
                            className="flex-1 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sender...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}

            {/* Input */}
            {!showEscalation && (
                <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Skriv en melding..."
                            className="flex-1 p-3 text-sm bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors"
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!input.trim() || isLoading}
                            className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            aria-label="Send"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
