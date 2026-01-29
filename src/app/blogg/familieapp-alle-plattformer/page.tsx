import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Familie-webapp på tvers av alle enheter: PC, Mac, mobil og nettbrett | listo.family",
    description:
        "Listo.family synkroniserer familien på alle enheter. Fungerer som webapp i nettleseren på PC, Mac, mobil og nettbrett. Én konto, hele familien, alle plattformer.",
    keywords: [
        "familie webapp",
        "webapp alle enheter",
        "synkroniser familie",
        "familie app alle plattformer",
        "handleliste synkronisering",
        "familiekalender webapp",
        "cross platform familie",
        "familieplanlegger",
    ],
};

export default function Article() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80"
                    alt="Familie bruker app på forskjellige enheter"
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
                        Familie-webapp på tvers av alle enheter: Slik synkroniserer dere hverdagen
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                        <span className="bg-listo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Plattformer
                        </span>
                        <span>4 min lesetid</span>
                        <span>•</span>
                        <time dateTime="2024-12-27">27. desember 2025</time>
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-4 py-12">
                <div className="prose prose-lg prose-gray max-w-none">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-listo-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                        Mor bruker iPhone, far har Windows-PC, og barna sitter på iPad. Hvordan får man hele familien på samme side? Med en webapp som fungerer i alle nettlesere.
                    </p>

                    <h2>Utfordringen: Alle bruker forskjellige enheter</h2>

                    <p>
                        Moderne familier har ofte en blanding av enheter. Noen foretrekker Mac, andre liker Windows, og mange bruker også mobil eller nettbrett. En familieapp som krever nedlasting og bare fungerer på én plattform ekskluderer nesten alltid noen.
                    </p>

                    <div className="my-12 p-6 bg-listo-50 rounded-2xl border-l-4 border-listo-400">
                        <h3 className="text-xl font-bold text-charcoal mt-0">🌐 Listo som webapp</h3>
                        <p className="text-gray-700 mb-0">
                            Listo.family er en webapp som fungerer i alle moderne nettlesere. Ingen nedlasting nødvendig – bare åpne nettleseren og logg inn. Én konto gir hele familien tilgang, uansett hvilken enhet de bruker.
                        </p>
                    </div>

                    <h2>Hvilke enheter støttes?</h2>

                    <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                            <div className="text-4xl mb-3">💻</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">PC & Mac</h3>
                            <p className="text-gray-600 m-0 text-sm">
                                Fullt funksjonell i Chrome, Safari, Edge og Firefox.
                            </p>
                            <span className="inline-block mt-3 px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">
                                Tilgjengelig
                            </span>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6 text-center">
                            <div className="text-4xl mb-3">📱</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Mobil</h3>
                            <p className="text-gray-600 m-0 text-sm">
                                Optimalisert for mobil – fungerer i Safari, Chrome og andre mobilnettlesere.
                            </p>
                            <span className="inline-block mt-3 px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-semibold">
                                Tilgjengelig
                            </span>
                        </div>
                        <div className="bg-listo-50 rounded-xl p-6 text-center">
                            <div className="text-4xl mb-3">📲</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Nettbrett</h3>
                            <p className="text-gray-600 m-0 text-sm">
                                Perfekt for iPad, Android-brett og andre nettbrett.
                            </p>
                            <span className="inline-block mt-3 px-3 py-1 bg-listo-200 text-listo-800 rounded-full text-xs font-semibold">
                                Tilgjengelig
                            </span>
                        </div>
                    </div>

                    <h2>Synkronisering i sanntid</h2>

                    <p>
                        Det som gjør Listo unikt er at alt synkroniseres i sanntid. Når mor legger til melk på handlelisten, ser far det umiddelbart på sin telefon. Når barna fullfører en oppgave, oppdateres det hos alle.
                    </p>

                    <ul>
                        <li><strong>Handlelister:</strong> Del og oppdater i sanntid</li>
                        <li><strong>Ukemeny:</strong> Alle ser hva som er til middag</li>
                        <li><strong>Oppgaver:</strong> Fordel gjøremål mellom familiemedlemmer</li>
                        <li><strong>Kalender:</strong> Felles oversikt over aktiviteter</li>
                    </ul>

                    <h2>Én betaling, hele familien</h2>

                    <p>
                        Med Listo betaler én person, og hele familien får tilgang. Ingen separate kontoer eller betalinger for hvert familiemedlem. Dette sparer både penger og bry.
                    </p>

                    <div className="my-12 p-6 bg-salmon-50 rounded-2xl">
                        <h3 className="text-xl font-bold text-charcoal mt-0">💰 Priser</h3>
                        <ul className="text-gray-700 mb-0">
                            <li><strong>14 dager gratis:</strong> Prøv alt uten forpliktelser</li>
                            <li><strong>Månedlig:</strong> 69,- per måned</li>
                            <li><strong>Årlig:</strong> 689,- per år (spar 17%)</li>
                            <li><strong>Founders Pass:</strong> 990,- for 5 års tilgang</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="my-12 p-8 bg-gradient-to-r from-listo-500 to-listo-600 rounded-2xl text-white text-center">
                        <h3 className="text-2xl font-bold mt-0 text-white">
                            Prøv Listo gratis i 14 dager
                        </h3>
                        <p className="text-listo-100 mb-6">
                            Start med full tilgang for hele familien. Ingen kredittkort kreves.
                        </p>
                        <Link
                            href="/#beta"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-listo-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
                        >
                            Start gratis prøveperiode →
                        </Link>
                    </div>

                    <h2>Fungerer det på iPhone og Android?</h2>

                    <p>
                        Ja! Listo er en webapp som fungerer i alle mobile nettlesere – Safari på iPhone/iPad, Chrome på Android, og alle andre moderne nettlesere. Du trenger ikke laste ned noe fra App Store eller Google Play.
                    </p>

                    <p>
                        Åpne bare app.listo.family i nettleseren din, så er du i gang. Du kan også legge til en snarvei på hjemmeskjermen for rask tilgang.
                    </p>
                </div>

                {/* Author */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-listo-100 rounded-full flex items-center justify-center">
                            <span className="text-listo-600 font-bold">L</span>
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
                        <Link href="/blogg/dele-handleliste-familie" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-charcoal group-hover:text-listo-600">
                                Slik deler du handlelisten med familien
                            </p>
                            <p className="text-sm text-gray-500">4 min lesetid</p>
                        </Link>
                        <Link href="/blogg/familieorganisering" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-charcoal group-hover:text-listo-600">
                                Familieorganisering: Slik får dere hverdagen til å gå opp
                            </p>
                            <p className="text-sm text-gray-500">6 min lesetid</p>
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
