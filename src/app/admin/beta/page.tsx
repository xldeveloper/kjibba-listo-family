"use client";

import { useState } from "react";
import Link from "next/link";
import { doc, updateDoc } from "firebase/firestore";
import { Sparkles, Mail, Send, Check, UserPlus, Filter } from "lucide-react";
import { useAdminData, formatDate, timeAgo, BetaInterest } from "../layout";

type StatusFilter = "all" | "interested" | "invited" | "registered";

export default function BetaPage() {
    const { betaInterests, db } = useAdminData();
    const [filter, setFilter] = useState<StatusFilter>("all");

    const filteredInterests = betaInterests.filter(interest => {
        if (filter === "all") return true;
        if (filter === "interested") return !interest.status || interest.status === "interested";
        return interest.status === filter;
    });

    const sendInvitation = async (interest: BetaInterest) => {
        const subject = encodeURIComponent("🎉 Du er invitert til Listo beta!");
        const body = encodeURIComponent(`Hei ${interest.name}!

Takk for at du vil teste Listo! Du er nå invitert til vår closed beta.

Klikk her for å opprette din konto:
https://listo.family/signup?email=${encodeURIComponent(interest.email)}

Etter registrering kan du:
• Bruke web-versjonen på app.listo.family
• Laste ned Android-appen (kommer snart på Google Play)

Har du spørsmål? Bare svar på denne e-posten!

Velkommen til Listo! 🎉

– Kjetil`);

        window.open(`mailto:${interest.email}?subject=${subject}&body=${body}`);

        try {
            await updateDoc(doc(db, "beta_interest", interest.id), {
                status: "invited",
                invitedAt: new Date(),
            });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const getStatusBadge = (status?: string) => {
        switch (status) {
            case "invited":
                return (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <Send className="w-3 h-3" />
                        Invitert
                    </span>
                );
            case "registered":
                return (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Registrert
                    </span>
                );
            default:
                return (
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <UserPlus className="w-3 h-3" />
                        Ny
                    </span>
                );
        }
    };

    // Stats
    const stats = {
        total: betaInterests.length,
        interested: betaInterests.filter(b => !b.status || b.status === "interested").length,
        invited: betaInterests.filter(b => b.status === "invited").length,
        registered: betaInterests.filter(b => b.status === "registered").length,
    };

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
                <button
                    onClick={() => setFilter("all")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "all" ? "bg-magic-100 ring-2 ring-magic-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-charcoal">{stats.total}</p>
                    <p className="text-sm text-charcoal-light">Totalt</p>
                </button>
                <button
                    onClick={() => setFilter("interested")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "interested" ? "bg-yellow-100 ring-2 ring-yellow-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-yellow-600">{stats.interested}</p>
                    <p className="text-sm text-charcoal-light">Nye</p>
                </button>
                <button
                    onClick={() => setFilter("invited")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "invited" ? "bg-blue-100 ring-2 ring-blue-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-blue-600">{stats.invited}</p>
                    <p className="text-sm text-charcoal-light">Invitert</p>
                </button>
                <button
                    onClick={() => setFilter("registered")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "registered" ? "bg-green-100 ring-2 ring-green-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-green-600">{stats.registered}</p>
                    <p className="text-sm text-charcoal-light">Registrert</p>
                </button>
            </div>

            {/* List */}
            <div className="bg-white rounded-squircle shadow-lg border border-charcoal/5 overflow-hidden">
                <div className="px-6 py-4 border-b border-charcoal/10 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-charcoal flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-magic-500" />
                        Beta-interesserte
                    </h2>
                    <span className="text-sm text-charcoal-light flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Viser {filteredInterests.length} av {stats.total}
                    </span>
                </div>

                {filteredInterests.length === 0 ? (
                    <div className="p-12 text-center text-charcoal-light">
                        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p>Ingen beta-interesserte i denne kategorien.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-charcoal/5">
                        {filteredInterests.map((interest) => (
                            <div
                                key={interest.id}
                                className="px-6 py-4 hover:bg-cream-50 transition-colors flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-magic-400 to-magic-600 flex items-center justify-center text-white font-bold">
                                    {interest.name?.[0]?.toUpperCase() || "?"}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="font-medium text-charcoal truncate">
                                            {interest.name}
                                        </p>
                                        {getStatusBadge(interest.status)}
                                        <span className="px-2 py-0.5 bg-charcoal/5 text-charcoal-light text-xs rounded-full">
                                            {interest.familySize} pers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-charcoal-light">
                                        <span className="flex items-center gap-1 truncate">
                                            <Mail className="w-3 h-3" />
                                            {interest.email}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="text-right text-sm">
                                        <p className="text-charcoal">{timeAgo(interest.createdAt)}</p>
                                        <p className="text-charcoal-light text-xs">{formatDate(interest.createdAt)}</p>
                                    </div>

                                    {interest.status !== "registered" && (
                                        <button
                                            onClick={() => sendInvitation(interest)}
                                            className={`px-3 py-1.5 rounded-squircle-sm text-sm font-medium flex items-center gap-1.5 transition-colors ${interest.status === "invited"
                                                    ? "bg-charcoal/5 text-charcoal-light hover:bg-charcoal/10"
                                                    : "bg-listo-500 text-white hover:bg-listo-600"
                                                }`}
                                            title={interest.status === "invited" ? "Send på nytt" : "Send invitasjon"}
                                        >
                                            <Send className="w-3.5 h-3.5" />
                                            {interest.status === "invited" ? "Send igjen" : "Inviter"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
