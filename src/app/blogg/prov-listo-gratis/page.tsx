import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prøv Listo gratis i 14 dager – Familieappen uten risiko | listo.family",
    description:
        "Start med 14 dagers full tilgang til Listo.family helt gratis. Ingen kredittkort kreves. Middagsplanlegger, handlelister og familiekalender for hele familien.",
    keywords: [
        "gratis familieapp",
        "gratis prøveperiode app",
        "prøv middagsplanlegger gratis",
        "familieapp trial",
        "handleliste app gratis",
        "gratis ukemeny app",
        "familieorganisering gratis",
    ],
};

export default function Article() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
                    alt="Glad familie rundt kjøkkenbordet"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
                    <Link
                        href="/blogg"
                        className="text-white/80 hover:text-white mb-4 inline-flex items-center gap-2 text-sm font-medium"
                    >
                        <span>←</span> Tilbake til bloggen
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Prøv Listo gratis i 14 dager – ingen kredittkort kreves
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                        <span className="bg-salmon-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Kom i gang
                        </span>
                        <span>3 min lesetid</span>
                        <span>•</span>
                        <time dateTime="2024-12-27">27. desember 2025</time>
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-4 py-12">
                <div className="prose prose-lg prose-gray max-w-none">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-salmon-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                        Vi vet at det er vanskelig å vite om en app passer for din familie før du har prøvd den. Derfor gir vi deg 14 dager til å teste alt – helt gratis.
                    </p>

                    <h2>Hva får du i prøveperioden?</h2>

                    <p>
                        I 14 dager får du full tilgang til alle Listo-funksjoner:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                        <div className="bg-listo-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">🍽️</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Middagsplanlegger</h3>
                            <p className="text-gray-600 m-0">
                                AI-genererte ukemenyer tilpasset familiens preferanser
                            </p>
                        </div>
                        <div className="bg-listo-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">🛒</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Handlelister</h3>
                            <p className="text-gray-600 m-0">
                                Delt handleliste som synkroniserer i sanntid
                            </p>
                        </div>
                        <div className="bg-listo-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">✅</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Oppgaver</h3>
                            <p className="text-gray-600 m-0">
                                Fordel gjøremål mellom familiemedlemmer
                            </p>
                        </div>
                        <div className="bg-listo-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">📅</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Kalender</h3>
                            <p className="text-gray-600 m-0">
                                Felles oversikt over barnas aktiviteter og avtaler
                            </p>
                        </div>
                    </div>

                    <h2>Ingen kredittkort – ingen risiko</h2>

                    <p>
                        Vi tror på produktet vårt, og vil at du skal oppleve verdien før du bestemmer deg. Derfor:
                    </p>

                    <ul>
                        <li>Du trenger <strong>ikke</strong> oppgi kredittkortinfo for å starte</li>
                        <li>Prøveperioden avsluttes automatisk etter 14 dager</li>
                        <li>Ingen skjulte kostnader eller automatiske trekk</li>
                        <li>Du velger selv om du vil fortsette</li>
                    </ul>

                    <div className="my-12 p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                        <h3 className="text-xl font-bold text-charcoal mt-0">✅ Vårt løfte</h3>
                        <p className="text-gray-700 mb-0">
                            Etter 14 dager får du en e-post med spørsmål om du vil fortsette.
                            Svarer du ikke, skjer det ingenting – du mister bare tilgang til Premium-funksjonene.
                        </p>
                    </div>

                    <h2>Slik kommer du i gang</h2>

                    <div className="space-y-6 my-8 not-prose">
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-salmon-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Registrer deg</h3>
                                <p className="text-gray-600">
                                    Oppgi navn og e-post. Det tar under 30 sekunder.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-salmon-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Åpne webappen</h3>
                                <p className="text-gray-600">
                                    Fungerer på alle enheter – PC, Mac, mobil og nettbrett. Ingen nedlasting nødvendig.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-salmon-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Inviter familien</h3>
                                <p className="text-gray-600">
                                    Del en invitasjonslink så alle får tilgang til de samme listene.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-salmon-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Nyt en enklere hverdag</h3>
                                <p className="text-gray-600">
                                    Planlegg middager, del handlelister og hold styr på gjøremål.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="my-12 p-8 bg-gradient-to-r from-salmon-500 to-magic-500 rounded-2xl text-white text-center">
                        <h3 className="text-2xl font-bold mt-0 text-white">
                            Klar til å prøve?
                        </h3>
                        <p className="text-white/90 mb-6">
                            Start din 14-dagers gratis prøveperiode nå. Ingen kredittkort kreves.
                        </p>
                        <Link
                            href="/#beta"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-salmon-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
                        >
                            Start gratis prøveperiode →
                        </Link>
                    </div>

                    <h2>Hva skjer etter prøveperioden?</h2>

                    <p>
                        Etter 14 dager kan du velge ett av våre abonnementer:
                    </p>

                    <ul>
                        <li><strong>Månedlig:</strong> 69,- per måned</li>
                        <li><strong>Årlig:</strong> 689,- per år (spar 17%)</li>
                        <li><strong>Founders Pass:</strong> 990,- for 5 års tilgang (begrenset antall)</li>
                    </ul>

                    <p>
                        Eller du kan fortsette med gratisversjonen som har begrenset funksjonalitet.
                    </p>
                </div>

                {/* Author */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-salmon-100 rounded-full flex items-center justify-center">
                            <span className="text-salmon-600 font-bold">L</span>
                        </div>
                        <div>
                            <p className="font-medium text-charcoal">Listo-teamet</p>
                            <p className="text-sm text-gray-500">
                                Tips og inspirasjon for smarte familier
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related articles */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-charcoal mb-6">Les også</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/blogg/familieapp-alle-plattformer" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-charcoal group-hover:text-salmon-600">
                                Familieapp på tvers av plattformer
                            </p>
                            <p className="text-sm text-gray-500">4 min lesetid</p>
                        </Link>
                        <Link href="/blogg/slik-planlegger-du-ukemenyen" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-charcoal group-hover:text-salmon-600">
                                Slik planlegger du ukemenyen uten stress
                            </p>
                            <p className="text-sm text-gray-500">5 min lesetid</p>
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
