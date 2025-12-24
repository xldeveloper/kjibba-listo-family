"use client";

import { useEffect, useState } from "react";
import { Sparkles, Zap, Database, TrendingUp, RefreshCw, DollarSign, Clock, BarChart3 } from "lucide-react";

interface AIStats {
    period: {
        startDate: string;
        endDate: string;
        days: number;
    };
    totals: {
        requests: number;
        cacheHits: number;
        cacheMisses: number;
        errors: number;
        cacheHitRate: number;
    };
    byEndpoint: Record<string, {
        requests: number;
        cacheHits: number;
        avgResponseMs: number;
    }>;
    costSavings: {
        estimatedWithoutCache: number;
        estimatedWithCache: number;
        saved: number;
        savedPercent: number;
    };
    dailyBreakdown: Array<{
        date: string;
        requests: number;
        cacheHits: number;
    }>;
}

function ProgressBar({ value, color = "bg-listo-500" }: { value: number; color?: string }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className={`h-2.5 rounded-full ${color} transition-all duration-500`}
                style={{ width: `${Math.min(value, 100)}%` }}
            />
        </div>
    );
}

function StatCard({ 
    title, 
    value, 
    subtitle, 
    icon: Icon, 
    iconColor = "text-listo-500",
    iconBg = "bg-listo-100"
}: { 
    title: string; 
    value: string | number; 
    subtitle?: string;
    icon: typeof Sparkles;
    iconColor?: string;
    iconBg?: string;
}) {
    return (
        <div className="bg-white rounded-squircle p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${iconBg} rounded-squircle-sm flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className="font-medium text-charcoal-light">{title}</h3>
            </div>
            <div className="text-3xl font-bold text-charcoal mb-1">
                {value}
            </div>
            {subtitle && (
                <p className="text-sm text-charcoal-light">{subtitle}</p>
            )}
        </div>
    );
}

export default function AIStatsPage() {
    const [stats, setStats] = useState<AIStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
    const [days, setDays] = useState(7);

    const fetchStats = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://app.listo.family/api/admin/ai-stats?days=${days}`, {
                headers: {
                    'X-Admin-Key': 'listo-admin-2024'
                }
            });

            if (!res.ok) throw new Error('Failed to fetch AI stats');

            const data = await res.json();
            setStats(data);
            setLastUpdate(new Date());
            setError(null);
        } catch (err) {
            setError('Kunne ikke hente AI-statistikk');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, [days]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('nb-NO', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 2 
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-magic-500" />
                    <div>
                        <h1 className="text-2xl font-display font-bold text-charcoal">AI Statistikk</h1>
                        <p className="text-charcoal-light text-sm">Cache-ytelse og kostnadsbesparelse</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                        className="px-3 py-2 border border-gray-200 rounded-squircle-sm text-sm"
                    >
                        <option value={7}>Siste 7 dager</option>
                        <option value={14}>Siste 14 dager</option>
                        <option value={30}>Siste 30 dager</option>
                    </select>
                    <button
                        onClick={fetchStats}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-charcoal text-white rounded-squircle-sm hover:bg-charcoal-light transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        Oppdater
                    </button>
                </div>
            </div>

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-squircle p-4">
                    <p className="text-red-700">{error}</p>
                </div>
            )}

            {/* Loading State */}
            {loading && !stats && (
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-listo-500" />
                </div>
            )}

            {/* Stats */}
            {stats && (
                <>
                    {/* Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            title="Totale forespørsler"
                            value={stats.totals.requests.toLocaleString('nb-NO')}
                            subtitle={`Siste ${stats.period.days} dager`}
                            icon={Zap}
                            iconColor="text-magic-500"
                            iconBg="bg-magic-100"
                        />
                        <StatCard
                            title="Cache Hit Rate"
                            value={`${stats.totals.cacheHitRate}%`}
                            subtitle={`${stats.totals.cacheHits} treff / ${stats.totals.cacheMisses} miss`}
                            icon={Database}
                            iconColor="text-listo-500"
                            iconBg="bg-listo-100"
                        />
                        <StatCard
                            title="Kostnader spart"
                            value={formatCurrency(stats.costSavings.saved)}
                            subtitle={`${stats.costSavings.savedPercent}% reduksjon`}
                            icon={DollarSign}
                            iconColor="text-green-600"
                            iconBg="bg-green-100"
                        />
                        <StatCard
                            title="Feilrate"
                            value={stats.totals.errors}
                            subtitle={`${((stats.totals.errors / Math.max(stats.totals.requests, 1)) * 100).toFixed(1)}% av forespørsler`}
                            icon={TrendingUp}
                            iconColor="text-red-500"
                            iconBg="bg-red-100"
                        />
                    </div>

                    {/* Cache Performance */}
                    <div className="bg-white rounded-squircle p-6 border border-gray-100">
                        <h3 className="font-semibold text-charcoal flex items-center gap-2 mb-4">
                            <Database className="w-5 h-5 text-listo-500" />
                            Cache-ytelse per endepunkt
                        </h3>
                        <div className="space-y-4">
                            {Object.entries(stats.byEndpoint).map(([endpoint, data]) => {
                                const hitRate = data.requests > 0 
                                    ? Math.round((data.cacheHits / data.requests) * 100) 
                                    : 0;
                                return (
                                    <div key={endpoint} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium text-charcoal">{endpoint}</span>
                                                <span className="text-charcoal-light text-sm ml-2">
                                                    ({data.requests} forespørsler)
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm text-charcoal-light">
                                                    <Clock className="w-3 h-3 inline mr-1" />
                                                    {data.avgResponseMs}ms snitt
                                                </span>
                                                <span className="font-semibold text-listo-600">
                                                    {hitRate}% hit
                                                </span>
                                            </div>
                                        </div>
                                        <ProgressBar 
                                            value={hitRate} 
                                            color={hitRate > 70 ? 'bg-listo-500' : hitRate > 40 ? 'bg-yellow-500' : 'bg-red-500'} 
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Daily Breakdown */}
                    <div className="bg-white rounded-squircle p-6 border border-gray-100">
                        <h3 className="font-semibold text-charcoal flex items-center gap-2 mb-4">
                            <BarChart3 className="w-5 h-5 text-magic-500" />
                            Daglig aktivitet
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left text-charcoal-light border-b">
                                        <th className="pb-2 font-medium">Dato</th>
                                        <th className="pb-2 font-medium text-right">Forespørsler</th>
                                        <th className="pb-2 font-medium text-right">Cache hits</th>
                                        <th className="pb-2 font-medium text-right">Hit rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.dailyBreakdown.map((day) => {
                                        const hitRate = day.requests > 0 
                                            ? Math.round((day.cacheHits / day.requests) * 100) 
                                            : 0;
                                        return (
                                            <tr key={day.date} className="border-b border-gray-50">
                                                <td className="py-3 font-medium text-charcoal">
                                                    {new Date(day.date).toLocaleDateString('nb-NO', { 
                                                        weekday: 'short', 
                                                        day: 'numeric', 
                                                        month: 'short' 
                                                    })}
                                                </td>
                                                <td className="py-3 text-right text-charcoal-light">
                                                    {day.requests}
                                                </td>
                                                <td className="py-3 text-right text-charcoal-light">
                                                    {day.cacheHits}
                                                </td>
                                                <td className="py-3 text-right">
                                                    <span className={`font-medium ${
                                                        hitRate > 70 ? 'text-listo-600' : 
                                                        hitRate > 40 ? 'text-yellow-600' : 'text-red-600'
                                                    }`}>
                                                        {hitRate}%
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Cost Analysis */}
                    <div className="bg-gradient-to-br from-listo-50 to-listo-100 rounded-squircle p-6 border border-listo-200">
                        <h3 className="font-semibold text-charcoal flex items-center gap-2 mb-4">
                            <DollarSign className="w-5 h-5 text-listo-600" />
                            Kostnadsanalyse
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm text-charcoal-light mb-1">Estimert uten cache</p>
                                <p className="text-2xl font-bold text-charcoal">
                                    {formatCurrency(stats.costSavings.estimatedWithoutCache)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-charcoal-light mb-1">Estimert med cache</p>
                                <p className="text-2xl font-bold text-charcoal">
                                    {formatCurrency(stats.costSavings.estimatedWithCache)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-charcoal-light mb-1">Totalt spart</p>
                                <p className="text-2xl font-bold text-listo-600">
                                    {formatCurrency(stats.costSavings.saved)}
                                    <span className="text-lg ml-2">({stats.costSavings.savedPercent}%)</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between text-sm text-charcoal-light">
                        <span>
                            Periode: {new Date(stats.period.startDate).toLocaleDateString('nb-NO')} - {new Date(stats.period.endDate).toLocaleDateString('nb-NO')}
                        </span>
                        <span>
                            Sist oppdatert: {lastUpdate?.toLocaleTimeString('nb-NO')}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}
