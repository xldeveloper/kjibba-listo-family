"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { ArrowLeft, Shield } from "lucide-react";
import AdminNav from "@/components/admin/AdminNav";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAW6ksZsDokqRAIpczXI030u_esWHOVe0Q",
    authDomain: "listo-6443c.firebaseapp.com",
    projectId: "listo-6443c",
    storageBucket: "listo-6443c.firebasestorage.app",
    messagingSenderId: "616905600919",
    appId: "1:616905600919:web:d5e5c9f8a7b6c4d3e2f1a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Admin emails
const ADMIN_EMAILS = ["kjibba@gmail.com"];

// Types
export interface UserRegistration {
    id: string;
    email: string;
    displayName: string;
    createdAt: string;
    registeredAt: Timestamp;
    source: string;
}

export interface BetaInterest {
    id: string;
    name: string;
    email: string;
    familySize: string;
    createdAt: Timestamp;
    source: string;
    status?: "interested" | "invited" | "registered";
    invitedAt?: Timestamp;
}

export interface BugReport {
    id: string;
    title: string;
    description: string;
    userId: string;
    userEmail: string;
    userName: string;
    familyId?: string;
    deviceInfo: {
        platform: 'ios' | 'android' | 'web';
        appVersion: string;
    };
    status: 'new' | 'in-progress' | 'resolved' | 'closed';
    createdAt: Timestamp;
    resolvedAt?: Timestamp;
    adminNotes?: string;
}

// Context
interface AdminContextType {
    users: UserRegistration[];
    betaInterests: BetaInterest[];
    bugReports: BugReport[];
    lastRefresh: Date;
    db: ReturnType<typeof getFirestore>;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function useAdminData() {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdminData must be used within AdminLayout");
    }
    return context;
}

// Helper functions
export const formatDate = (timestamp: Timestamp | string) => {
    if (!timestamp) return "Ukjent";
    const date = timestamp instanceof Timestamp
        ? timestamp.toDate()
        : new Date(timestamp);
    return new Intl.DateTimeFormat("nb-NO", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
};

export const timeAgo = (timestamp: Timestamp | string) => {
    if (!timestamp) return "";
    const date = timestamp instanceof Timestamp
        ? timestamp.toDate()
        : new Date(timestamp);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 60) return "akkurat nå";
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min siden`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} timer siden`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)} dager siden`;
    return formatDate(timestamp);
};

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<UserRegistration[]>([]);
    const [betaInterests, setBetaInterests] = useState<BetaInterest[]>([]);
    const [bugReports, setBugReports] = useState<BugReport[]>([]);
    const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

    // Check auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (user && ADMIN_EMAILS.includes(user.email || "")) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Subscribe to user registrations
    useEffect(() => {
        if (!isAdmin) return;
        const q = query(collection(db, "user_registrations"), orderBy("registeredAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const userList: UserRegistration[] = [];
            snapshot.forEach((doc) => {
                userList.push({ id: doc.id, ...doc.data() } as UserRegistration);
            });
            setUsers(userList);
            setLastRefresh(new Date());
        });
        return () => unsubscribe();
    }, [isAdmin]);

    // Subscribe to beta interests
    useEffect(() => {
        if (!isAdmin) return;
        const q = query(collection(db, "beta_interest"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const interests: BetaInterest[] = [];
            snapshot.forEach((doc) => {
                interests.push({ id: doc.id, ...doc.data() } as BetaInterest);
            });
            setBetaInterests(interests);
            setLastRefresh(new Date());
        });
        return () => unsubscribe();
    }, [isAdmin]);

    // Subscribe to bug reports
    useEffect(() => {
        if (!isAdmin) return;
        const q = query(collection(db, "bugReports"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reports: BugReport[] = [];
            snapshot.forEach((doc) => {
                reports.push({ id: doc.id, ...doc.data() } as BugReport);
            });
            setBugReports(reports);
            setLastRefresh(new Date());
        });
        return () => unsubscribe();
    }, [isAdmin]);

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-listo-500" />
            </div>
        );
    }

    // Not logged in
    if (!currentUser) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white rounded-squircle shadow-xl p-8 border border-charcoal/5 text-center">
                    <Shield className="w-16 h-16 text-charcoal/20 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-charcoal mb-2">Admin-tilgang kreves</h2>
                    <p className="text-charcoal-light mb-6">Du må logge inn med en admin-konto for å se denne siden.</p>
                    <Link
                        href="/login"
                        className="block w-full py-3 px-6 bg-gradient-to-r from-listo-500 to-listo-600 hover:from-listo-600 hover:to-listo-700 text-white font-semibold rounded-squircle-sm shadow-lg hover:shadow-xl transition-all text-center"
                    >
                        Logg inn
                    </Link>
                </div>
            </div>
        );
    }

    // Not admin
    if (!isAdmin) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white rounded-squircle shadow-xl p-8 border border-charcoal/5 text-center">
                    <Shield className="w-16 h-16 text-red-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-charcoal mb-2">Ingen tilgang</h2>
                    <p className="text-charcoal-light mb-6">Kontoen din ({currentUser.email}) har ikke admin-tilgang.</p>
                    <Link
                        href="/"
                        className="block w-full py-3 px-6 border border-charcoal/10 text-charcoal font-medium rounded-squircle-sm hover:bg-cream-50 transition-colors text-center"
                    >
                        Tilbake til forsiden
                    </Link>
                </div>
            </div>
        );
    }

    // Admin layout
    return (
        <AdminContext.Provider value={{ users, betaInterests, bugReports, lastRefresh, db }}>
            <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
                {/* Header */}
                <header className="bg-white border-b border-charcoal/10 sticky top-0 z-10">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-charcoal-light hover:text-charcoal transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Tilbake
                                </Link>
                                <div className="h-6 w-px bg-charcoal/10" />
                                <h1 className="text-xl font-bold text-charcoal flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-listo-500" />
                                    Admin Dashboard
                                </h1>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-charcoal-light">
                                <span>{currentUser.email}</span>
                                <button
                                    onClick={() => auth.signOut()}
                                    className="text-red-500 hover:text-red-600 font-medium"
                                >
                                    Logg ut
                                </button>
                            </div>
                        </div>
                        <AdminNav />
                    </div>
                </header>

                <main className="max-w-6xl mx-auto px-6 py-8">
                    {children}
                </main>

                <footer className="text-center text-sm text-charcoal/50 py-8">
                    💡 Data hentes fra Firestore collections • Sist oppdatert: {lastRefresh.toLocaleTimeString("nb-NO")}
                </footer>
            </div>
        </AdminContext.Provider>
    );
}
