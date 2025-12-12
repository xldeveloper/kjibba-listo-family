"use client";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { Bug, Mail, Filter, Smartphone, Globe, Apple } from "lucide-react";
import { useAdminData, formatDate, timeAgo } from "../layout";

type StatusFilter = "all" | "new" | "in-progress" | "resolved" | "closed";

export default function BugsPage() {
    const { bugReports, db } = useAdminData();
    const [filter, setFilter] = useState<StatusFilter>("all");

    const filteredBugs = bugReports.filter(bug => {
        if (filter === "all") return true;
        return bug.status === filter;
    });

    const stats = {
        total: bugReports.length,
        new: bugReports.filter(b => b.status === "new").length,
        inProgress: bugReports.filter(b => b.status === "in-progress").length,
        resolved: bugReports.filter(b => b.status === "resolved").length,
        closed: bugReports.filter(b => b.status === "closed").length,
    };

    const updateStatus = async (bugId: string, newStatus: string) => {
        try {
            await updateDoc(doc(db, "bugReports", bugId), {
                status: newStatus,
                ...(newStatus === "resolved" ? { resolvedAt: new Date() } : {}),
            });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const getPlatformIcon = (platform?: string) => {
        switch (platform) {
            case "ios":
                return <Apple className="w-4 h-4" />;
            case "android":
                return <Smartphone className="w-4 h-4" />;
            default:
                return <Globe className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "new":
                return "bg-red-100 text-red-700";
            case "in-progress":
                return "bg-yellow-100 text-yellow-700";
            case "resolved":
                return "bg-green-100 text-green-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "new":
                return "Ny";
            case "in-progress":
                return "Under arbeid";
            case "resolved":
                return "Løst";
            default:
                return "Lukket";
        }
    };

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-5 gap-4">
                <button
                    onClick={() => setFilter("all")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "all" ? "bg-red-100 ring-2 ring-red-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-charcoal">{stats.total}</p>
                    <p className="text-sm text-charcoal-light">Totalt</p>
                </button>
                <button
                    onClick={() => setFilter("new")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "new" ? "bg-red-100 ring-2 ring-red-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-red-600">{stats.new}</p>
                    <p className="text-sm text-charcoal-light">Nye</p>
                </button>
                <button
                    onClick={() => setFilter("in-progress")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "in-progress" ? "bg-yellow-100 ring-2 ring-yellow-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
                    <p className="text-sm text-charcoal-light">Pågående</p>
                </button>
                <button
                    onClick={() => setFilter("resolved")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "resolved" ? "bg-green-100 ring-2 ring-green-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-green-600">{stats.resolved}</p>
                    <p className="text-sm text-charcoal-light">Løst</p>
                </button>
                <button
                    onClick={() => setFilter("closed")}
                    className={`p-4 rounded-squircle-sm text-center transition-all ${filter === "closed" ? "bg-gray-100 ring-2 ring-gray-400" : "bg-white"
                        }`}
                >
                    <p className="text-2xl font-bold text-gray-600">{stats.closed}</p>
                    <p className="text-sm text-charcoal-light">Lukket</p>
                </button>
            </div>

            {/* List */}
            <div className="bg-white rounded-squircle shadow-lg border border-charcoal/5 overflow-hidden">
                <div className="px-6 py-4 border-b border-charcoal/10 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-charcoal flex items-center gap-2">
                        <Bug className="w-5 h-5 text-red-500" />
                        Bugreports
                    </h2>
                    <span className="text-sm text-charcoal-light flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Viser {filteredBugs.length} av {stats.total}
                    </span>
                </div>

                {filteredBugs.length === 0 ? (
                    <div className="p-12 text-center text-charcoal-light">
                        <Bug className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p>Ingen bugreports i denne kategorien.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-charcoal/5">
                        {filteredBugs.map((bug) => (
                            <div key={bug.id} className="px-6 py-4 hover:bg-cream-50 transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                            <p className="font-medium text-charcoal">{bug.title}</p>
                                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(bug.status)}`}>
                                                {getStatusLabel(bug.status)}
                                            </span>
                                            <span className="px-2 py-0.5 bg-charcoal/5 text-charcoal-light text-xs rounded-full flex items-center gap-1">
                                                {getPlatformIcon(bug.deviceInfo?.platform)}
                                                {bug.deviceInfo?.platform} v{bug.deviceInfo?.appVersion}
                                            </span>
                                        </div>
                                        <p className="text-sm text-charcoal-light line-clamp-2 mb-2">
                                            {bug.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-charcoal-light">
                                            <span className="flex items-center gap-1">
                                                <Mail className="w-3 h-3" />
                                                {bug.userEmail}
                                            </span>
                                            <span>{bug.userName}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="text-right text-sm">
                                            <p className="text-charcoal">{timeAgo(bug.createdAt)}</p>
                                            <p className="text-charcoal-light text-xs">{formatDate(bug.createdAt)}</p>
                                        </div>

                                        <select
                                            value={bug.status}
                                            onChange={(e) => updateStatus(bug.id, e.target.value)}
                                            className="px-2 py-1 text-xs border border-charcoal/10 rounded-md bg-white"
                                        >
                                            <option value="new">Ny</option>
                                            <option value="in-progress">Under arbeid</option>
                                            <option value="resolved">Løst</option>
                                            <option value="closed">Lukket</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
