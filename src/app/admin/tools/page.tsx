"use client";

import { useState } from "react";
import { Wrench, Trash2, Database, AlertTriangle, AlertCircle, CheckCircle, Eye, Play, XCircle, Users, RefreshCw, UserPlus } from "lucide-react";

// ─── Delete User Section ──────────────────────────────────────
function DeleteUserSection() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        success: boolean;
        message: string;
        details?: any;
    } | null>(null);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setResult({ success: false, message: "E-post kan ikke være tom" });
            return;
        }

        if (!confirm(`Er du SIKKER på at du vil slette brukeren:\n\n${email}\n\nDette kan ikke angres!`)) {
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/admin/delete-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim().toLowerCase() }),
            });

            const data = await response.json();

            if (response.ok) {
                setResult({ success: true, message: `Bruker ${email} slettet!`, details: data });
                setEmail("");
            } else {
                setResult({ success: false, message: data.error || "Noe gikk galt", details: data });
            }
        } catch (error: any) {
            setResult({ success: false, message: error.message || "Nettverksfeil" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-squircle shadow-lg border border-charcoal/5 p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-salmon-100 flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-salmon-600" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-charcoal">Slett bruker</h2>
                    <p className="text-sm text-charcoal-light">Sletter Firebase Auth + Firestore-data permanent</p>
                </div>
            </div>

            <form onSubmit={handleDelete} className="flex gap-3 mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="bruker@example.com"
                    className="flex-1 px-4 py-2 border border-charcoal/20 rounded-squircle-sm focus:border-salmon-500 focus:ring-2 focus:ring-salmon-500/20 outline-none"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading || !email.trim()}
                    className="px-6 py-2 bg-salmon-500 hover:bg-salmon-600 text-white font-medium rounded-squircle-sm transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                    {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <Trash2 className="w-4 h-4" />
                    )}
                    Slett
                </button>
            </form>

            {result && (
                <div className={`p-3 rounded-squircle-sm flex items-start gap-2 ${result.success ? "bg-listo-50 border border-listo-200" : "bg-salmon-50 border border-salmon-200"}`}>
                    {result.success ? (
                        <CheckCircle className="w-4 h-4 text-listo-600 mt-0.5 shrink-0" />
                    ) : (
                        <XCircle className="w-4 h-4 text-salmon-600 mt-0.5 shrink-0" />
                    )}
                    <div className="flex-1 text-sm">
                        <p className={result.success ? "text-listo-900" : "text-salmon-900"}>{result.message}</p>
                        {result.details && (
                            <details className="mt-2">
                                <summary className="text-xs text-charcoal-light cursor-pointer">Vis detaljer</summary>
                                <pre className="mt-1 text-xs bg-charcoal/5 p-2 rounded overflow-x-auto">
                                    {JSON.stringify(result.details, null, 2)}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Migrations Section ───────────────────────────────────────
function MigrationsSection() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [action, setAction] = useState<string>("");

    const runMigration = async (actionType: "dry-run" | "fix" | "verify") => {
        setLoading(true);
        setAction(actionType);
        setResult(null);

        try {
            const response = await fetch("/api/admin/fix-journey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    adminEmail: "kjibba@gmail.com",
                    action: actionType,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Migration failed");
            }

            setResult(data);
        } catch (error: any) {
            setResult({ success: false, error: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-squircle shadow-lg border border-charcoal/5 p-6">
            <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-charcoal">Journey Consistency Fix</h2>
                    <p className="text-sm text-charcoal-light mb-3">
                        Synkroniserer journey-tracking med faktisk brukerstatus.
                    </p>
                    <ul className="list-disc list-inside text-xs text-charcoal-light space-y-1 mb-4">
                        <li>Brukere med <code className="bg-charcoal/5 px-1 rounded">familyId</code> uten <code className="bg-charcoal/5 px-1 rounded">journey.familyCreatedAt</code></li>
                        <li>Brukere med fullført onboarding uten <code className="bg-charcoal/5 px-1 rounded">journey.onboardingCompletedAt</code></li>
                        <li>Brukere uten <code className="bg-charcoal/5 px-1 rounded">journey</code>-objekt</li>
                    </ul>

                    <div className="flex gap-2">
                        <button
                            onClick={() => runMigration("verify")}
                            disabled={loading}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 text-sm"
                        >
                            <Eye className="w-3.5 h-3.5" />
                            {loading && action === "verify" ? "Sjekker..." : "Sjekk status"}
                        </button>
                        <button
                            onClick={() => runMigration("dry-run")}
                            disabled={loading}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors disabled:opacity-50 text-sm"
                        >
                            <Play className="w-3.5 h-3.5" />
                            {loading && action === "dry-run" ? "Kjører..." : "Dry Run"}
                        </button>
                        <button
                            onClick={() => runMigration("fix")}
                            disabled={loading}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-listo-500 text-white rounded-lg hover:bg-listo-600 transition-colors disabled:opacity-50 text-sm"
                        >
                            <Database className="w-3.5 h-3.5" />
                            {loading && action === "fix" ? "Fikser..." : "Kjør migrering"}
                        </button>
                    </div>
                </div>
            </div>

            {result && (
                <div className={`mt-4 p-3 rounded-squircle-sm border ${result.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                    <div className="flex items-start gap-2">
                        {result.success ? (
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        ) : (
                            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                        )}
                        <div className="flex-1 text-sm">
                            <p className={result.success ? "text-green-900 font-medium" : "text-red-900 font-medium"}>
                                {result.success ? result.message : `Error: ${result.error}`}
                            </p>
                            {result.success && result.action === "verify" && result.result && (
                                <div className="mt-2 space-y-1 text-xs text-charcoal-light">
                                    <p>✅ Konsistente: <strong>{result.result.consistent}</strong></p>
                                    <p>⚠️ Inkonsistente: <strong>{result.result.inconsistent}</strong></p>
                                    {result.result.issues?.length > 0 && (
                                        <details className="mt-2">
                                            <summary className="cursor-pointer text-orange-700 font-medium">
                                                Vis problemer ({result.result.issues.length})
                                            </summary>
                                            <ul className="mt-1 space-y-0.5 pl-4">
                                                {result.result.issues.map((issue: any, i: number) => (
                                                    <li key={i}><strong>{issue.email}</strong>: {issue.problem}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    )}
                                </div>
                            )}
                            {result.success && (result.action === "dry-run" || result.action === "fix") && result.result && (
                                <div className="mt-2 space-y-1 text-xs text-charcoal-light">
                                    <p>📊 Totalt: <strong>{result.result.totalUsers}</strong></p>
                                    <p>🏠 Familie fikset: <strong>{result.result.fixedFamily}</strong></p>
                                    <p>✔️ Onboarding fikset: <strong>{result.result.fixedOnboarding}</strong></p>
                                    <p>🔧 Journey opprettet: <strong>{result.result.fixedMultiple}</strong></p>
                                    {result.result.errors > 0 && <p>❌ Feil: <strong>{result.result.errors}</strong></p>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Sync Auth Users Section ──────────────────────────────────
function SyncAuthUsersSection() {
    const [loading, setLoading] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const [scanResult, setScanResult] = useState<any>(null);
    const [syncResult, setSyncResult] = useState<any>(null);

    const scanOrphans = async () => {
        setLoading(true);
        setScanResult(null);
        setSyncResult(null);
        try {
            const res = await fetch("/api/admin/sync-auth-users?adminEmail=kjibba@gmail.com");
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setScanResult(data);
        } catch (err: any) {
            setScanResult({ success: false, error: err.message });
        } finally {
            setLoading(false);
        }
    };

    const runSync = async (action: "dry-run" | "sync", uids?: string[]) => {
        setSyncing(true);
        setSyncResult(null);
        try {
            const res = await fetch("/api/admin/sync-auth-users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ adminEmail: "kjibba@gmail.com", action, uids }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setSyncResult(data);
            // Refresh scan after real sync
            if (action === "sync") setTimeout(scanOrphans, 1000);
        } catch (err: any) {
            setSyncResult({ success: false, error: err.message });
        } finally {
            setSyncing(false);
        }
    };

    return (
        <div className="bg-white rounded-squircle shadow-lg border border-charcoal/5 p-6">
            <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-listo-100 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-listo-600" />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-charcoal">Synk Auth → Firestore</h2>
                    <p className="text-sm text-charcoal-light mb-3">
                        Finner Firebase Auth-brukere som mangler <code className="bg-charcoal/5 px-1 rounded">users/&#123;uid&#125;</code>-dokument
                        og oppretter dem med riktig struktur.
                    </p>

                    <button
                        onClick={scanOrphans}
                        disabled={loading}
                        className="flex items-center gap-1.5 px-4 py-2 bg-listo-500 text-white rounded-lg hover:bg-listo-600 transition-colors disabled:opacity-50 text-sm font-medium"
                    >
                        {loading ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                        {loading ? "Skanner..." : "Skann for manglende bruker-docs"}
                    </button>
                </div>
            </div>

            {/* Scan results */}
            {scanResult && !scanResult.success && (
                <div className="mt-4 p-3 rounded-squircle-sm bg-red-50 border border-red-200">
                    <div className="flex items-center gap-2 text-sm text-red-900">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <p>{scanResult.error}</p>
                    </div>
                </div>
            )}

            {scanResult?.success && (
                <div className="mt-4 space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-charcoal/5 rounded-lg p-3 text-center">
                            <p className="text-2xl font-bold text-charcoal">{scanResult.totalAuthUsers}</p>
                            <p className="text-xs text-charcoal-light">Auth-brukere</p>
                        </div>
                        <div className="bg-listo-50 rounded-lg p-3 text-center">
                            <p className="text-2xl font-bold text-listo-600">{scanResult.synced}</p>
                            <p className="text-xs text-charcoal-light">Har users-doc</p>
                        </div>
                        <div className={`rounded-lg p-3 text-center ${scanResult.orphans > 0 ? "bg-amber-50" : "bg-green-50"}`}>
                            <p className={`text-2xl font-bold ${scanResult.orphans > 0 ? "text-amber-600" : "text-green-600"}`}>
                                {scanResult.orphans}
                            </p>
                            <p className="text-xs text-charcoal-light">Mangler doc</p>
                        </div>
                    </div>

                    {/* Orphan list */}
                    {scanResult.orphans > 0 && (
                        <div className="border border-amber-200 rounded-lg overflow-hidden">
                            <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-medium text-amber-900">
                                        {scanResult.orphans} bruker{scanResult.orphans > 1 ? "e" : ""} uten Firestore-doc
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => runSync("dry-run")}
                                        disabled={syncing}
                                        className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors disabled:opacity-50"
                                    >
                                        {syncing ? "..." : "Dry Run"}
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (!confirm(`Oppretter ${scanResult.orphans} manglende user-docs. Fortsett?`)) return;
                                            runSync("sync");
                                        }}
                                        disabled={syncing}
                                        className="text-xs px-2.5 py-1 bg-listo-500 text-white rounded hover:bg-listo-600 transition-colors disabled:opacity-50 flex items-center gap-1"
                                    >
                                        <UserPlus className="w-3 h-3" />
                                        {syncing ? "Synker..." : "Opprett alle"}
                                    </button>
                                </div>
                            </div>

                            <div className="divide-y divide-charcoal/5 max-h-64 overflow-y-auto">
                                {scanResult.orphanList.map((orphan: any) => (
                                    <div key={orphan.uid} className="px-4 py-2.5 flex items-center gap-3 text-sm">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs shrink-0">
                                            {orphan.email?.[0]?.toUpperCase() || "?"}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-charcoal truncate">
                                                {orphan.displayName || orphan.email || orphan.uid}
                                            </p>
                                            <div className="flex items-center gap-3 text-xs text-charcoal-light">
                                                {orphan.email && <span>{orphan.email}</span>}
                                                <span>Auth: {orphan.providers.join(", ")}</span>
                                                <span>Opprettet: {new Date(orphan.createdAt).toLocaleDateString("nb-NO")}</span>
                                            </div>
                                        </div>
                                        {orphan.hasBetaInterest && (
                                            <span className="px-2 py-0.5 bg-magic-100 text-magic-700 text-xs rounded-full whitespace-nowrap">
                                                Beta-interesse
                                            </span>
                                        )}
                                        <button
                                            onClick={() => {
                                                if (!confirm(`Opprett doc for ${orphan.email || orphan.uid}?`)) return;
                                                runSync("sync", [orphan.uid]);
                                            }}
                                            disabled={syncing}
                                            className="text-xs px-2 py-1 bg-listo-100 text-listo-700 rounded hover:bg-listo-200 transition-colors disabled:opacity-50"
                                        >
                                            Synk
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {scanResult.orphans === 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                            <p className="text-sm text-green-900">Alle Firebase Auth-brukere har tilhørende Firestore-docs.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Sync result */}
            {syncResult && (
                <div className={`mt-4 p-3 rounded-squircle-sm border ${syncResult.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                    <div className="flex items-start gap-2">
                        {syncResult.success ? (
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        ) : (
                            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                        )}
                        <div className="text-sm flex-1">
                            <p className={syncResult.success ? "text-green-900 font-medium" : "text-red-900 font-medium"}>
                                {syncResult.message || syncResult.error}
                            </p>
                            {syncResult.success && syncResult.details?.length > 0 && (
                                <details className="mt-2">
                                    <summary className="text-xs text-charcoal-light cursor-pointer">
                                        Vis detaljer ({syncResult.details.length})
                                    </summary>
                                    <ul className="mt-1 space-y-0.5 text-xs text-charcoal-light">
                                        {syncResult.details.map((d: any, i: number) => (
                                            <li key={i}>
                                                <strong>{d.email || d.uid}</strong>: {d.action}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────
export default function ToolsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <Wrench className="w-7 h-7 text-charcoal" />
                <h1 className="text-2xl font-bold text-charcoal">Verktøy</h1>
            </div>

            <SyncAuthUsersSection />
            <DeleteUserSection />
            <MigrationsSection />

            <div className="bg-blue-50 border border-blue-200 rounded-squircle p-4">
                <p className="text-sm text-blue-900">
                    📚 <strong>Dokumentasjon:</strong> Se{" "}
                    <code className="bg-blue-100 px-2 py-0.5 rounded text-xs">
                        NyeListo/docs/revision/batch-minus-1-data-consistency.md
                    </code>{" "}
                    for detaljer om datainkonsistenser.
                </p>
            </div>
        </div>
    );
}
