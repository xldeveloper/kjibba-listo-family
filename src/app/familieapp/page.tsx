"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Users,
    Calendar,
    ShoppingCart,
    ListChecks,
    Sparkles,
    ArrowRight,
    Check,
    Heart,
    Clock,
    Bell,
    Smartphone,
    ChefHat,
} from "lucide-react";

export default function Familieapp() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-magic-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-magic-200/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-40 w-80 h-80 bg-listo-200/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-magic-100 text-magic-700 rounded-full text-sm font-medium mb-6">
                                <Users className="w-4 h-4" />
                                Familieapp for Norge
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                                Én app for{" "}
                                <span className="gradient-text-magic">hele familien</span>
                            </h1>

                            <p className="text-xl text-charcoal-light mb-8 leading-relaxed">
                                Listo samler alt familien trenger på ett sted: Middagsplanlegger,
                                handleliste, og oppgavefordeling. Alt synkroniseres i sanntid,
                                så alle vet hva som skjer.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/#beta"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-magic-500 to-magic-600 hover:from-magic-600 hover:to-magic-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Prøv gratis nå
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-charcoal-light">
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Gratis å starte
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    Ubegrenset familiemedlemmer
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-listo-500" />
                                    iOS, Android & Web
                                </span>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <div className="relative w-80 animate-float">
                                <div className="bg-charcoal rounded-[3rem] p-3 shadow-2xl">
                                    <div className="bg-cream-50 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                                        <Image
                                            src="/screenshots/planner.png"
                                            alt="listo.family - familieappen"
                                            width={320}
                                            height={693}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="absolute -left-8 top-16 bg-white rounded-squircle p-4 shadow-xl animate-float" style={{ animationDelay: "0.5s" }}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">👨‍👩‍👧‍👦</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Familie Hansen</p>
                                            <p className="text-sm text-charcoal-light">4 medlemmer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-4 bottom-40 bg-white rounded-squircle p-4 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">✅</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Rydde rommet</p>
                                            <p className="text-sm text-charcoal-light">Markus - fullført!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All-in-one Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 bg-listo-100 text-listo-700 rounded-full text-sm font-medium mb-4">
                            Alt på ett sted
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Én app - uendelig med muligheter
                        </h2>
                        <p className="text-xl text-charcoal-light">
                            Listo er designet for moderne familier som vil ha oversikt uten å sjonglere 10 forskjellige apper.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: ChefHat,
                                title: "Middagsplanlegger",
                                description: "Planlegg hele ukens middager på minutter. AI foreslår retter basert på hva familien liker.",
                                color: "salmon",
                                link: "/middagsplanlegger",
                            },
                            {
                                icon: ShoppingCart,
                                title: "Delt handleliste",
                                description: "Automatisk fra middagsplanen. Del med familien og se oppdateringer i sanntid.",
                                color: "listo",
                                link: "/handleliste",
                            },
                            {
                                icon: ListChecks,
                                title: "Gjøremål",
                                description: "Fordel oppgaver til familiemedlemmer. Barna ser sine gjøremål i sin egen profil.",
                                color: "magic",
                                link: "#",
                            },
                            {
                                icon: Calendar,
                                title: "Ukeoversikt",
                                description: "Se hele ukens plan på ett sted. Middag, gjøremål, og hvem som er ansvarlig.",
                                color: "sky",
                                link: "/ukemeny",
                            },
                        ].map((feature, i) => (
                            <Link
                                key={i}
                                href={feature.link}
                                className="group bg-cream-50 rounded-squircle p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-squircle-sm flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                                </div>
                                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-listo-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-charcoal-light">{feature.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Family Benefits */}
            <section className="py-20 bg-cream-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Laget for familier som deg
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Spar tid hver dag",
                                description: "Slutt å spørre \"hva skal vi ha til middag\" og \"hvem gjør hva\". Alt er planlagt og synkronisert.",
                            },
                            {
                                icon: Heart,
                                title: "Mindre stress",
                                description: "Når alle vet hva som skjer, blir hverdagen roligere. Ingen overraskelser, ingen glemte gjøremål.",
                            },
                            {
                                icon: Users,
                                title: "Alle bidrar",
                                description: "Barna ser sine oppgaver, de voksne deler ansvaret. Familien fungerer bedre som et team.",
                            },
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white rounded-squircle p-8 shadow-sm">
                                <div className="w-14 h-14 bg-listo-100 rounded-full flex items-center justify-center mb-6">
                                    <benefit.icon className="w-7 h-7 text-listo-600" />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">{benefit.title}</h3>
                                <p className="text-charcoal-light leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 bg-magic-100 text-magic-700 rounded-full text-sm font-medium mb-4">
                            Funksjoner
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                            Alt familien trenger
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Users, text: "Ubegrenset familiemedlemmer" },
                            { icon: Bell, text: "Varsler for gjøremål" },
                            { icon: Smartphone, text: "Fungerer på alle enheter" },
                            { icon: Sparkles, text: "AI-assistanse" },
                            { icon: Calendar, text: "Ukesplanlegger" },
                            { icon: ShoppingCart, text: "Smart handleliste" },
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-cream-50 rounded-xl">
                                <div className="w-10 h-10 bg-listo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-5 h-5 text-listo-600" />
                                </div>
                                <span className="font-medium text-charcoal">{feature.text}</span>
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
                                q: "Hva er Listo familieapp?",
                                a: "Listo er en komplett familieapp som hjelper norske familier med å organisere hverdagen. Den kombinerer middagsplanlegger, handleliste, og oppgavefordeling i én app - alt synkronisert i sanntid for hele familien.",
                            },
                            {
                                q: "Er Listo familieapp gratis?",
                                a: "Ja! Grunnfunksjonene i Listo er helt gratis. Du kan planlegge middager, dele handlelister, og administrere gjøremål uten å betale. Premium-funksjoner som AI-assistanse er tilgjengelig mot en liten månedskostnad.",
                            },
                            {
                                q: "Hvor mange familiemedlemmer kan bruke appen?",
                                a: "Det er ingen grense! Du kan invitere alle i familien - foreldre, barn, besteforeldre - alle kan delta. Hver person kan ha sin egen profil og se oppgaver som er tildelt dem.",
                            },
                            {
                                q: "Fungerer familieappen på alle enheter?",
                                a: "Ja! Listo fungerer på iPhone, Android, nettbrett og som webapp på PC/Mac. Alt synkroniseres automatisk mellom alle enheter, så familien alltid er oppdatert.",
                            },
                            {
                                q: "Kan barn bruke familieappen?",
                                a: "Absolutt! Barn kan ha egne profiler og se gjøremål som er tildelt dem. Det er en fin måte å lære barn ansvar og gi dem oversikt over hva de skal bidra med i hverdagen.",
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
            <section className="py-20 bg-gradient-to-r from-magic-500 to-magic-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Klar til å organisere familien?
                    </h2>
                    <p className="text-xl text-magic-100 mb-8">
                        Bli med tusenvis av norske familier som allerede har fått en enklere hverdag med Listo.
                    </p>
                    <Link
                        href="/#beta"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-cream-50 text-magic-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                    >
                        <Users className="w-5 h-5" />
                        Start gratis nå
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
