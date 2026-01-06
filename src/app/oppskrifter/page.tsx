"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    BookOpen,
    Download,
    Sparkles,
    ArrowRight,
    Check,
    Users,
    ShoppingCart,
    Search,
    Heart,
    Scale,
    Globe,
} from "lucide-react";

export default function Oppskrifter() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-salmon-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-salmon-200/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-40 w-80 h-80 bg-magic-200/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-salmon-100 text-salmon-700 rounded-full text-sm font-medium mb-6">
                                <BookOpen className="w-4 h-4" />
                                Din digitale kokebok
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                                Alle oppskrifter{" "}
                                <span className="gradient-text-salmon">på ett sted</span>
                            </h1>

                            <p className="text-xl text-charcoal-light mb-8 leading-relaxed">
                                Med Listo samler du alle familiens favorittoppskrifter i én app.
                                Importer fra nettsider, lagre dine egne, og del med familien.
                                Aldri mer lete etter den oppskriften du så på Instagram.
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
                                    Importer fra nettsider
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Ubegrenset lagring
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
                                            src="/screenshots/recipe.png"
                                            alt="listo.family oppskrifter"
                                            width={320}
                                            height={693}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="absolute -left-8 top-24 bg-white rounded-squircle p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">📥</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Oppskrift importert!</p>
                                            <p className="text-sm text-charcoal-light">fra matprat.no</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-4 bottom-36 bg-white rounded-squircle p-4 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">⭐</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Familiens favoritt</p>
                                            <p className="text-sm text-charcoal-light">Lasagne</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 bg-salmon-100 text-salmon-700 rounded-full text-sm font-medium mb-4">
                            Funksjoner
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Din personlige oppskriftssamling
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Download,
                                title: "Importer fra nettsider",
                                description: "Lim inn en lenke fra matblogger, Instagram, eller oppskriftssider. AI-en henter automatisk ingredienser og fremgangsmåte.",
                                color: "salmon",
                            },
                            {
                                icon: BookOpen,
                                title: "Lagre egne oppskrifter",
                                description: "Legg inn mormors hemmelige oppskrift eller dine egne kreasjoner. Med bilder, ingredienser, og steg-for-steg.",
                                color: "listo",
                            },
                            {
                                icon: Users,
                                title: "Del med familien",
                                description: "Hele familien har tilgang til oppskriftssamlingen. Alle kan legge til favoritter og foreslå middager.",
                                color: "magic",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-cream-50 rounded-squircle p-8 hover:shadow-lg transition-shadow">
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
                                icon: Scale,
                                title: "Juster porsjoner",
                                description: "Skal du lage mat til 8 i stedet for 4? Listo justerer alle ingredienser automatisk.",
                                color: "sky",
                            },
                            {
                                icon: ShoppingCart,
                                title: "Automatisk handleliste",
                                description: "Legg oppskriften til middagsplanen, så legges alle ingredienser automatisk til handlelisten.",
                                color: "salmon",
                            },
                            {
                                icon: Search,
                                title: "Søk og filtrer",
                                description: "Finn oppskrifter raskt med søk, eller filtrer på kategori, tid, eller ingredienser.",
                                color: "listo",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-cream-50 rounded-squircle p-8 hover:shadow-lg transition-shadow">
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

            {/* Import Sources */}
            <section className="py-20 bg-cream-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 bg-magic-100 text-magic-700 rounded-full text-sm font-medium mb-4">
                            <Globe className="w-4 h-4 inline mr-2" />
                            Import
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Importer fra dine favorittkilder
                        </h2>
                        <p className="text-xl text-charcoal-light">
                            Listo fungerer med de fleste oppskriftssider og blogger. Bare lim inn lenken!
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "Matprat.no",
                            "Tine.no",
                            "Trines Matblogg",
                            "Meny.no",
                            "Kiwi.no",
                            "Instagram",
                            "TikTok",
                            "YouTube",
                            "Pinterest",
                            "Og mange flere...",
                        ].map((source, i) => (
                            <div
                                key={i}
                                className="px-6 py-3 bg-white rounded-full shadow-sm text-charcoal font-medium"
                            >
                                {source}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Slik enkelt er det
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                step: "1",
                                title: "Finn en oppskrift",
                                description: "Se en oppskrift du liker på en nettside, Instagram, eller TikTok.",
                            },
                            {
                                step: "2",
                                title: "Lim inn lenken",
                                description: "Kopier lenken og lim inn i Listo. AI-en gjør resten.",
                            },
                            {
                                step: "3",
                                title: "Bruk den!",
                                description: "Oppskriften er klar med ingredienser, fremgangsmåte, og handleliste.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-salmon-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                                <p className="text-charcoal-light">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-cream-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center">
                        Ofte stilte spørsmål
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Hvordan importerer jeg oppskrifter fra nettsider?",
                                a: "Det er superenkelt! Bare lim inn lenken til oppskriften i Listo, så henter AI-en automatisk ingredienser, fremgangsmåte, og bilder. Fungerer med de fleste norske og internasjonale matblogger.",
                            },
                            {
                                q: "Kan jeg lagre mine egne oppskrifter?",
                                a: "Absolutt! Du kan legge inn dine egne oppskrifter manuelt med ingredienser, fremgangsmåte, og bilder. Perfekt for mormors hemmelige oppskrifter eller dine egne kreasjoner.",
                            },
                            {
                                q: "Justeres ingrediensene automatisk når jeg endrer porsjoner?",
                                a: "Ja! Bare velg hvor mange porsjoner du vil lage, så justerer Listo alle ingrediensene automatisk. Smart når du skal lage mat til mange, eller bare til deg selv.",
                            },
                            {
                                q: "Kan hele familien dele oppskriftene?",
                                a: "Ja! Alle oppskrifter du lagrer i Listo er tilgjengelige for hele familien. Dere kan ha en felles oppskriftssamling som alle kan bidra til og bruke.",
                            },
                            {
                                q: "Genereres handleliste automatisk fra oppskriften?",
                                a: "Ja! Når du legger en oppskrift til middagsplanen, legges alle ingrediensene automatisk til handlelisten. Du slipper å skrive inn alt manuelt.",
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
            <section className="py-20 bg-gradient-to-r from-salmon-500 to-salmon-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Klar til å samle alle oppskriftene?
                    </h2>
                    <p className="text-xl text-salmon-100 mb-8">
                        Start din digitale kokebok i dag. Importer favorittene, del med familien,
                        og lag mat uten stress.
                    </p>
                    <Link
                        href="/#beta"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-cream-50 text-salmon-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                    >
                        <Heart className="w-5 h-5" />
                        Start gratis nå
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
