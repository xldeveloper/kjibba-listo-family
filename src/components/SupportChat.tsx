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

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://listo.family';

// T014: Mobile breakpoint detection threshold
const MOBILE_BREAKPOINT = 768;
// T034: Maximum messages to retain per FR-033
const MAX_CONTEXT_MESSAGES = 10;
// T033: Session storage key
const SESSION_STORAGE_KEY = 'listo-support-chat-history';

// T041: Maximum message length
const MAX_MESSAGE_LENGTH = 2000;

export default function SupportChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showEscalation, setShowEscalation] = useState(false);
    const [escalationEmail, setEscalationEmail] = useState('');
    const [escalationMessage, setEscalationMessage] = useState('');
    // T029: Email consent checkbox state
    const [emailConsent, setEmailConsent] = useState(false);
    // T014: Mobile detection state
    const [isMobile, setIsMobile] = useState(false);
    // T039: Track keyboard visibility for mobile
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const chatBubbleRef = useRef<HTMLButtonElement>(null);

    // T033: Load messages from sessionStorage on mount
    const [isInitialized, setIsInitialized] = useState(false);
    
    useEffect(() => {
        try {
            const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                // Restore messages with Date objects
                const restored = parsed.map((m: any) => ({
                    ...m,
                    timestamp: new Date(m.timestamp)
                }));
                setMessages(restored);
            }
        } catch {
            // Ignore parse errors
        }
        setIsInitialized(true);
    }, []);

    // T033: Save messages to sessionStorage when they change
    useEffect(() => {
        if (messages.length > 0) {
            try {
                // T034: Limit to MAX_CONTEXT_MESSAGES
                const toStore = messages.slice(-MAX_CONTEXT_MESSAGES);
                sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(toStore));
            } catch {
                // Ignore storage errors (e.g., quota exceeded)
            }
        }
    }, [messages]);

    // T014: Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        
        // Initial check
        checkMobile();
        
        // Listen for resize
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // T039: Keyboard avoidance - adjust for virtual keyboard on mobile
    useEffect(() => {
        if (!isMobile || typeof window === 'undefined' || !window.visualViewport) return;

        const handleViewportResize = () => {
            const visualViewport = window.visualViewport;
            if (visualViewport) {
                // Calculate keyboard height by comparing viewport height to window height
                const keyboardVisible = window.innerHeight - visualViewport.height > 100;
                setKeyboardHeight(keyboardVisible ? window.innerHeight - visualViewport.height : 0);
            }
        };

        window.visualViewport.addEventListener('resize', handleViewportResize);
        return () => window.visualViewport?.removeEventListener('resize', handleViewportResize);
    }, [isMobile]);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when chat opens (NFR-015: Focus management)
    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    // Initial greeting (only after initialization to avoid overwriting restored messages)
    // T043: Include privacy message on first interaction
    useEffect(() => {
        if (isOpen && isInitialized && messages.length === 0) {
            setMessages([{
                role: 'assistant',
                content: 'Hei! 👋 Jeg er Listo Support. Hva kan jeg hjelpe deg med i dag?\n\n💬 *Chat er anonym. Vi lagrer ikke samtaler.*',
                timestamp: new Date()
            }]);
        }
    }, [isOpen, isInitialized, messages.length]);

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
            // T057: 30s client-side timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000);

            const response = await fetch(`${API_URL}/api/support/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage.content,
                    history: messages.map(m => ({ role: m.role, content: m.content })),
                    language: 'nb'
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

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
            // T057: Friendly timeout message
            const isTimeout = error instanceof Error && error.name === 'AbortError';
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: isTimeout 
                    ? 'Beklager, forespørselen tok for lang tid. Prøv igjen, eller kontakt oss på support@listo.family.'
                    : 'Beklager, noe gikk galt. Prøv igjen eller send oss en e-post på support@listo.family.',
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
        // T029: Require consent if email is provided
        if (escalationEmail && !emailConsent) {
            alert('Du må godta at vi lagrer e-posten din for å sende melding med e-post.');
            return;
        }

        setIsLoading(true);
        try {
            await fetch(`${API_URL}/api/support/escalate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: emailConsent ? escalationEmail : null,
                    message: escalationMessage,
                    history: messages.map(m => ({ role: m.role, content: m.content })),
                    emailConsent: emailConsent
                })
            });

            setShowEscalation(false);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Takk! Vi har mottatt meldingen din${escalationEmail && emailConsent ? ` og vil svare til ${escalationEmail}` : ''} så raskt som mulig (svar innen 24 timer på hverdager).`,
                timestamp: new Date()
            }]);
            setEscalationEmail('');
            setEscalationMessage('');
            setEmailConsent(false);
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

    // T046: Handle Escape key to close widget
    const handleEscapeKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            // T049: Return focus to chat bubble when closing
            chatBubbleRef.current?.focus();
        }
    };

    // T045: Floating button when closed (with ARIA label)
    if (!isOpen) {
        return (
            <button
                ref={chatBubbleRef}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-magic-500 hover:bg-magic-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group min-w-[44px] min-h-[44px]"
                aria-label="Åpne kundestøtte-chat"
                aria-haspopup="dialog"
            >
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-charcoal px-3 py-1.5 rounded-squircle text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" aria-hidden="true">
                    Trenger du hjelp?
                </span>
            </button>
        );
    }

    // Minimized state (not shown on mobile fullscreen) - T020: squircle styling
    if (isMinimized && !isMobile) {
        return (
            <div className="fixed bottom-6 right-6 z-50 bg-white rounded-squircle shadow-2xl border border-charcoal/10 overflow-hidden w-72">
                <button
                    onClick={() => setIsMinimized(false)}
                    className="w-full flex items-center justify-between p-4 hover:bg-cream-50 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-magic-500 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-charcoal">Listo Support</div>
                            <div className="text-xs text-charcoal-light">{messages.length} meldinger</div>
                        </div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-charcoal-light rotate-180" />
                </button>
            </div>
        );
    }

    // T015: Full chat window - fullscreen on mobile (<768px), floating on desktop
    // T020: Use squircle and design system colors
    // T039: Apply keyboard avoidance offset on mobile
    // T045, T046: Accessibility - dialog role and keyboard handling
    return (
        <div 
            role="dialog"
            aria-label="Kundestøtte-chat"
            aria-modal="true"
            onKeyDown={handleEscapeKey}
            className={`fixed z-50 bg-cream-50 flex flex-col overflow-hidden transition-all duration-300 ease-out
                ${isMobile 
                    ? 'inset-0 rounded-none animate-in slide-in-from-bottom' 
                    : 'bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-squircle shadow-2xl border border-charcoal/10'
                }`}
            style={isMobile && keyboardHeight > 0 ? { paddingBottom: `${keyboardHeight}px` } : undefined}
        >
            {/* Header - T019: magic-500 gradient for AI features */}
            <div className="bg-gradient-to-r from-magic-500 to-magic-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                        <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-white" id="chat-title">Listo Support ✨</h2>
                        <div className="text-xs text-white/70">Vi svarer vanligvis med en gang</div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    {/* T036: Hide minimize button on mobile, show close button prominently */}
                    {!isMobile && (
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Minimer"
                        >
                            <ChevronDown className="w-5 h-5 text-white" />
                        </button>
                    )}
                    {/* T038: Ensure minimum 44x44px touch target */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`hover:bg-white/10 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${isMobile ? 'p-3' : 'p-2'}`}
                        aria-label="Lukk"
                    >
                        <X className={`text-white ${isMobile ? 'w-6 h-6' : 'w-5 h-5'}`} aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Messages - T021: cream-50 background, charcoal text, T047: aria-live for announcements */}
            <div 
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream-50"
                role="log"
                aria-live="polite"
                aria-label="Chat-meldinger"
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[85%] p-3 rounded-squircle ${message.role === 'user'
                                    ? 'bg-magic-500 text-white rounded-br-md'
                                    : 'bg-white text-charcoal shadow-sm border border-charcoal/10 rounded-bl-md'
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

                            {/* Escalation suggestion - T028: Show support email and response time */}
                            {message.escalate && message.role === 'assistant' && (
                                <div className="mt-3 pt-3 border-t border-charcoal/10">
                                    <p className="text-xs text-charcoal-light mb-2">
                                        Du kan også kontakte oss direkte på <strong>support@listo.family</strong> (svar innen 24 timer på hverdager)
                                    </p>
                                    <button
                                        onClick={() => setShowEscalation(true)}
                                        className="flex items-center gap-2 text-xs text-magic-600 hover:text-magic-700 font-medium"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Send melding til support
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-charcoal p-3 rounded-squircle rounded-bl-md shadow-sm border border-charcoal/10">
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin text-magic-500" />
                                <span className="text-sm text-charcoal-light">Tenker...</span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Escalation form - T022: magic colors, T028/T029: email consent */}
            {showEscalation && (
                <div className="p-4 border-t border-charcoal/10 bg-magic-50">
                    <div className="text-sm font-medium text-charcoal mb-1">Send melding til support</div>
                    <p className="text-xs text-charcoal-light mb-3">Vi svarer innen 24 timer på hverdager.</p>
                    <input
                        type="email"
                        placeholder="Din e-post (valgfritt - for svar)"
                        value={escalationEmail}
                        onChange={(e) => setEscalationEmail(e.target.value)}
                        className="w-full p-2 text-sm border border-charcoal/20 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-magic-500"
                    />
                    {/* T029: Email consent checkbox - only show when email is entered */}
                    {escalationEmail && (
                        <label className="flex items-start gap-2 mb-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={emailConsent}
                                onChange={(e) => setEmailConsent(e.target.checked)}
                                className="mt-0.5 w-4 h-4 rounded border-charcoal/30 text-magic-500 focus:ring-magic-500"
                            />
                            <span className="text-xs text-charcoal-light">
                                Jeg godtar at listo.family lagrer e-posten min for å kunne svare på henvendelsen
                            </span>
                        </label>
                    )}
                    <textarea
                        placeholder="Beskriv problemet ditt..."
                        value={escalationMessage}
                        onChange={(e) => setEscalationMessage(e.target.value)}
                        className="w-full p-2 text-sm border border-charcoal/20 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-magic-500 resize-none h-20"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={() => { setShowEscalation(false); setEmailConsent(false); }}
                            className="flex-1 py-2 text-sm text-charcoal-light hover:text-charcoal"
                        >
                            Avbryt
                        </button>
                        <button
                            onClick={handleEscalate}
                            disabled={!escalationMessage.trim() || isLoading}
                            className="flex-1 py-2 text-sm bg-listo-500 text-white rounded-lg hover:bg-listo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sender...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}

            {/* Input - T022: listo-500 send button, T041: character limit */}
            {!showEscalation && (
                <div className="p-4 border-t border-charcoal/10 bg-white">
                    {/* T041: Show character count warning when approaching limit */}
                    {input.length > MAX_MESSAGE_LENGTH * 0.8 && (
                        <div className={`text-xs mb-2 ${input.length >= MAX_MESSAGE_LENGTH ? 'text-red-500' : 'text-charcoal-light'}`}>
                            {input.length}/{MAX_MESSAGE_LENGTH} tegn
                            {input.length >= MAX_MESSAGE_LENGTH && ' - meldingen er for lang'}
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => {
                                // T041: Enforce character limit
                                if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
                                    setInput(e.target.value);
                                }
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Skriv en melding..."
                            className="flex-1 p-3 text-sm bg-cream-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-magic-500 focus:bg-white transition-colors text-charcoal placeholder:text-charcoal-light"
                            disabled={isLoading}
                            maxLength={MAX_MESSAGE_LENGTH}
                        />
                        {/* T038: Ensure minimum 44x44px touch target for send button */}
                        {/* T042: Disable when empty or loading */}
                        <button
                            onClick={sendMessage}
                            disabled={!input.trim() || isLoading || input.length > MAX_MESSAGE_LENGTH}
                            className="p-3 bg-listo-500 hover:bg-listo-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Send"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    {/* T044: Privacy link in footer */}
                    <div className="text-center mt-2">
                        <a 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-charcoal-light hover:text-charcoal underline"
                        >
                            Les vår personvernerklæring
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
