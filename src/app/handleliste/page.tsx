"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    ShoppingCart,
    Users,
    Sparkles,
    ArrowRight,
    Check,
    RefreshCw,
    Smartphone,
    Clock,
    ListChecks,
    Zap,
} from "lucide-react";

export default function Handleliste() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-salmon-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-salmon-200/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-40 w-80 h-80 bg-listo-200/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-salmon-100 text-salmon-700 rounded-full text-sm font-medium mb-6">
                                <ShoppingCart className="w-4 h-4" />
                                Gratis handleliste-app
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                                Handleliste som{" "}
                                <span className="gradient-text-salmon">hele familien deler</span>
                            </h1>

                            <p className="text-xl text-charcoal-light mb-8 leading-relaxed">
                                Listo er den smarte handleliste-appen som synkroniserer i sanntid
                                med hele familien. Automatisk generert fra ukemenyen, sortert
                                etter butikken, og alltid oppdatert.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/#beta"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-salmon-500 to-salmon-600 hover:from-salmon-600 hover:to-salmon-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Prøv gratis nå
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-charcoal-light">
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    100% gratis
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Synk i sanntid
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Del med familien
                                </span>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <div className="relative w-80 animate-float">
                                <div className="bg-charcoal rounded-[3rem] p-3 shadow-2xl">
                                    <div className="bg-cream-50 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                                        <Image
                                            src="/screenshots/shopping.png"
                                            alt="listo.family handleliste app"
                                            width={320}
                                            height={693}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="absolute -left-8 top-20 bg-white rounded-squircle p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🛒</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Liste oppdatert!</p>
                                            <p className="text-sm text-charcoal-light">+3 varer lagt til</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-4 bottom-32 bg-white rounded-squircle p-4 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">✓</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Melk krysset av</p>
                                            <p className="text-sm text-charcoal-light">av Mamma</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Slik var handlelisten før...
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Problems */}
                        <div className="bg-red-50 rounded-squircle p-8 border border-red-100">
                            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                                <span className="text-2xl">😫</span> Uten delt handleliste
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "\"Kan du kjøpe melk?\" - og så glemmer du det",
                                    "Papir-lapper som blir igjen hjemme",
                                    "To som handler - ingen vet hva den andre kjøpte",
                                    "Skriver samme varer hver uke på nytt",
                                    "Glemmer ingredienser til middagen",
                                ].map((problem, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-800">
                                        <span className="text-red-400 mt-1">✕</span>
                                        {problem}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div className="bg-listo-50 rounded-squircle p-8 border border-listo-100">
                            <h3 className="text-xl font-bold text-listo-700 mb-6 flex items-center gap-2">
                                <span className="text-2xl">✨</span> Med Listo handleliste
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Alle ser listen - oppdateres i sanntid",
                                    "Alltid tilgjengelig på mobilen",
                                    "Se hvem som la til hva, og hva som er handlet",
                                    "Ingredienser legges til automatisk fra middagsplanen",
                                    "Varene sorteres etter butikkens kategorier",
                                ].map((solution, i) => (
                                    <li key={i} className="flex items-start gap-3 text-listo-800">
                                        <Check className="w-5 h-5 text-listo-500 mt-0.5 flex-shrink-0" />
                                        {solution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section className="py-20 bg-cream-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 bg-salmon-100 text-salmon-700 rounded-full text-sm font-medium mb-4">
                            Funksjoner
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Alt du trenger i en handleliste-app
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Del med familien",
                                description: "Inviter alle familiemedlemmer til samme liste. Alle kan legge til, fjerne og krysse av varer.",
                                color: "salmon",
                            },
                            {
                                icon: RefreshCw,
                                title: "Synk i sanntid",
                                description: "Når noen legger til eller krysser av en vare, ser alle det umiddelbart. Perfekt når en handler.",
                                color: "listo",
                            },
                            {
                                icon: ListChecks,
                                title: "Automatisk fra middagsplan",
                                description: "Planlegg ukens middager, og alle ingredienser legges automatisk til handlelisten.",
                                color: "magic",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white rounded-squircle p-8 shadow-sm hover:shadow-lg transition-shadow">
                                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-squircle-sm flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                                <p className="text-charcoal-light leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {[
                            {
                                icon: Smartphone,
                                title: "Alltid med deg",
                                description: "Fungerer på mobil, nettbrett og PC. Handlelisten er alltid tilgjengelig - også offline.",
                                color: "sky",
                            },
                            {
                                icon: Zap,
                                title: "Smart kategorisering",
                                description: "Varene sorteres automatisk etter type (meieri, frukt, kjøtt), så du handler mer effektivt.",
                                color: "salmon",
                            },
                            {
                                icon: Clock,
                                title: "Spar tid i butikken",
                                description: "Slipp å gå frem og tilbake. Med smart sortering finner du alt raskere.",
                                color: "listo",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white rounded-squircle p-8 shadow-sm hover:shadow-lg transition-shadow">
                                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-squircle-sm flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                                <p className="text-charcoal-light leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center">
                        Ofte stilte spørsmål om handleliste-appen
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Er Listo handleliste-app gratis?",
                                a: "Ja! Listo handleliste er helt gratis å bruke. Du kan opprette ubegrenset antall lister, dele med familien, og synkronisere på tvers av alle enheter uten å betale noe.",
                            },
                            {
                                q: "Kan hele familien dele samme handleliste?",
                                a: "Absolutt! Det er hele poenget med Listo. Alle familiemedlemmer kan legge til varer, krysse av det som er handlet, og se oppdateringer i sanntid. Perfekt for når en handler mens andre er hjemme.",
                            },
                            {
                                q: "Hvordan fungerer automatisk handleliste fra ukemenyen?",
                                a: "Når du planlegger middager i Listo, legges alle ingrediensene automatisk til handlelisten. Du slipper å skrive inn hver ingrediens manuelt - alt samles på ett sted, sortert og klart til handling.",
                            },
                            {
                                q: "Sorteres handlelisten etter butikkens layout?",
                                a: "Ja! Listo grupperer varene automatisk etter kategori (frukt/grønt, meieri, kjøtt osv.), slik at du kan handle mer effektivt og slipper å gå frem og tilbake i butikken.",
                            },
                            {
                                q: "Fungerer handleliste-appen offline?",
                                a: "Ja, du kan se og bruke handlelisten din selv uten internett. Endringer synkroniseres automatisk når du er tilbake online.",
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-cream-50 rounded-squircle p-6 border border-charcoal/10">
                                <h3 className="font-bold text-charcoal mb-2">{faq.q}</h3>
                                <p className="text-charcoal-light">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-salmon-500 to-salmon-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Klar for en smartere handleliste?
                    </h2>
                    <p className="text-xl text-salmon-100 mb-8">
                        Last ned Listo og del handlelisten med familien på sekunder.
                        Aldri mer &quot;glemte du melken?&quot;
                    </p>
                    <Link
                        href="/#beta"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-cream-50 text-salmon-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        Start gratis nå
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
