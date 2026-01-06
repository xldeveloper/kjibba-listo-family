"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Calendar,
    Sparkles,
    ArrowRight,
    Check,
    ShoppingCart,
    Clock,
    Users,
    RefreshCw,
    Zap,
    Heart,
} from "lucide-react";

const weekDays = [
    { day: "Mandag", meal: "Kyllingwok", emoji: "🍗" },
    { day: "Tirsdag", meal: "Fiskesuppe", emoji: "🐟" },
    { day: "Onsdag", meal: "Taco", emoji: "🌮" },
    { day: "Torsdag", meal: "Pasta Carbonara", emoji: "🍝" },
    { day: "Fredag", meal: "Pizza", emoji: "🍕" },
    { day: "Lørdag", meal: "Biff med poteter", emoji: "🥩" },
    { day: "Søndag", meal: "Kylling og ris", emoji: "🍛" },
];

export default function Ukemeny() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-listo-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-listo-200/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-40 w-80 h-80 bg-salmon-200/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-listo-100 text-listo-700 rounded-full text-sm font-medium mb-6">
                                <Calendar className="w-4 h-4" />
                                Ukemeny planlegger
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                                Ukemenyen planlagt på{" "}
                                <span className="gradient-text-magic">5 minutter</span>
                            </h1>

                            <p className="text-xl text-charcoal-light mb-8 leading-relaxed">
                                Si farvel til det daglige spørsmålet &quot;hva skal vi ha til middag?&quot;
                                Med Listo planlegger du hele ukemenyen på minutter, og alle i
                                familien vet hva som er planen.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/#beta"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-listo-500 to-listo-600 hover:from-listo-600 hover:to-listo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Prøv gratis nå
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-charcoal-light">
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    AI-forslag
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Automatisk handleliste
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Del med familien
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Week Preview Card */}
                            <div className="bg-white rounded-squircle p-6 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-charcoal text-lg">Ukemeny</h3>
                                    <span className="text-sm text-charcoal-light">Uke 2, 2026</span>
                                </div>
                                <div className="space-y-3">
                                    {weekDays.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-4 p-3 bg-cream-50 rounded-xl hover:bg-listo-50 transition-colors"
                                        >
                                            <span className="text-2xl">{item.emoji}</span>
                                            <div className="flex-1">
                                                <p className="text-sm text-charcoal-light">{item.day}</p>
                                                <p className="font-medium text-charcoal">{item.meal}</p>
                                            </div>
                                            <Check className="w-5 h-5 text-listo-500" />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                                    <span className="text-sm text-charcoal-light">7 middager planlagt</span>
                                    <span className="text-sm font-medium text-listo-600">Komplett ✓</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Hvorfor planlegge ukemenyen?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Clock,
                                title: "Spar tid",
                                description: "Ingen daglig tenking på middag. Alt er planlagt på forhånd.",
                            },
                            {
                                icon: ShoppingCart,
                                title: "Spar penger",
                                description: "Handle målrettet og unngå impulskjøp og matsvinn.",
                            },
                            {
                                icon: Heart,
                                title: "Sunnere mat",
                                description: "Planlagt mat betyr varierte og gjennomtenkte måltider.",
                            },
                            {
                                icon: Users,
                                title: "Mindre stress",
                                description: "Alle vet hva som skal lages. Ingen diskusjoner.",
                            },
                        ].map((benefit, i) => (
                            <div key={i} className="text-center p-6 bg-cream-50 rounded-squircle">
                                <div className="w-14 h-14 bg-listo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-7 h-7 text-listo-600" />
                                </div>
                                <h3 className="font-bold text-charcoal mb-2">{benefit.title}</h3>
                                <p className="text-sm text-charcoal-light">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-cream-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 bg-magic-100 text-magic-700 rounded-full text-sm font-medium mb-4">
                            Funksjoner
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Slik planlegger du ukemenyen
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Sparkles,
                                title: "AI-forslag",
                                description: "La AI-en foreslå en komplett ukemeny basert på hva familien liker, sesongens råvarer, og hva dere har spist før.",
                                color: "magic",
                            },
                            {
                                icon: RefreshCw,
                                title: "Dra og slipp",
                                description: "Velg oppskrifter fra samlingen din og dra dem til ønsket dag. Bytt enkelt om hvis planene endrer seg.",
                                color: "listo",
                            },
                            {
                                icon: ShoppingCart,
                                title: "Automatisk handleliste",
                                description: "Når ukemenyen er satt, genereres handlelisten automatisk med alle ingredienser du trenger.",
                                color: "salmon",
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

            {/* Example Week */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Inspirasjon til ukemenyen
                        </h2>
                        <p className="text-xl text-charcoal-light">
                            Her er et eksempel på en variert ukemeny for hele familien
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
                        {weekDays.map((item, i) => (
                            <div
                                key={i}
                                className="bg-cream-50 rounded-squircle p-4 text-center hover:bg-listo-50 transition-colors"
                            >
                                <p className="text-sm font-medium text-charcoal-light mb-2">{item.day}</p>
                                <span className="text-4xl block mb-2">{item.emoji}</span>
                                <p className="font-bold text-charcoal text-sm">{item.meal}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/#beta"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-listo-100 text-listo-700 font-semibold rounded-full hover:bg-listo-200 transition-colors"
                        >
                            <Zap className="w-5 h-5" />
                            Lag din egen ukemeny
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-cream-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center">
                        Ofte stilte spørsmål om ukemeny
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Hvordan planlegger jeg en ukemeny med Listo?",
                                a: "Det er superenkelt! Velg oppskrifter for hver dag i uken ved å dra og slippe, eller la AI-en foreslå middager basert på hva familien liker. Hele ukemenyen kan være ferdig på 5 minutter.",
                            },
                            {
                                q: "Kan AI-en foreslå ukemeny for meg?",
                                a: "Ja! AI-en lærer hva familien din liker og kan foreslå en komplett ukemeny med varierte middager. Du kan enkelt bytte ut retter du ikke ønsker.",
                            },
                            {
                                q: "Lages handlelisten automatisk fra ukemenyen?",
                                a: "Ja! Når ukemenyen er satt, samles alle ingredienser automatisk i en handleliste. Listen er sortert etter kategori så du handler mer effektivt.",
                            },
                            {
                                q: "Kan hele familien se ukemenyen?",
                                a: "Absolutt! Alle familiemedlemmer ser ukemenyen i appen. Ingen flere spørsmål om 'hva skal vi ha til middag?' - alle vet hva som er planen.",
                            },
                            {
                                q: "Kan jeg gjenbruke ukemenyer?",
                                a: "Ja! Lagre ukemenyer du liker og gjenbruk dem senere. Perfekt for travle uker når du vil bruke en ukemeny som har fungert godt før.",
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white rounded-squircle p-6 border border-charcoal/10">
                                <h3 className="font-bold text-charcoal mb-2">{faq.q}</h3>
                                <p className="text-charcoal-light">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-listo-500 to-listo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Klar til å planlegge ukemenyen?
                    </h2>
                    <p className="text-xl text-listo-100 mb-8">
                        Prøv Listo gratis og opplev hvor enkelt det er å ha kontroll på
                        familiens middager. Si farvel til &quot;hva skal vi ha til middag?&quot;
                    </p>
                    <Link
                        href="/#beta"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-cream-50 text-listo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                    >
                        <Calendar className="w-5 h-5" />
                        Start gratis nå
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
