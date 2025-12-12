import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hyttetur uten stress: Den ultimate pakkelisten | listo.family",
    description:
        "Aldri glem tannbørsten på hytta igjen. Lær hvordan digitale pakkelister gjør hytteturen til en drøm – ikke et mareritt.",
    keywords: [
        "pakkeliste hytte",
        "hyttetur forberedelser",
        "hva ta med hytta",
        "huskeliste hytte",
        "pakkeliste familie",
        "hytte planlegging",
        "hyttetur barn",
        "helgetur familie",
    ],
};

export default function Article() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <Image
                    src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=1600&q=80"
                    alt="Norsk hytte i snølandskap"
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
                        Hyttetur uten stress: Den ultimate pakkelisten
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                        <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Steder & Lister
                        </span>
                        <span>5 min lesetid</span>
                        <span>•</span>
                        <time dateTime="2024-12-13">13. desember 2024</time>
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-4 py-12">
                <div className="prose prose-lg prose-gray max-w-none">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-sky-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                        &quot;Glemte vi oppladerne?&quot; &quot;Hvor er barnas bleier?&quot; &quot;Hadde vi ikke
                        strømpebukser her oppe?&quot; Kjente scener fra hytteturen? Det trenger
                        ikke være sånn.
                    </p>

                    {/* User story box */}
                    <div className="my-12 p-6 bg-sky-50 rounded-2xl border-l-4 border-sky-400">
                        <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
                            🏔️ Møt familien Nordli
                        </h2>
                        <p className="text-gray-700 mb-0">
                            Hver fredag i januar pakker familien Nordli bilen for helg på
                            Kvamskogen. Og hver gang den samme diskusjonen: &quot;Har vi ullundertøy
                            til alle? Hva med brødskiver til frokost? Husket du reservenøklene?&quot;
                            Resultatet: Stressede foreldre og irriterte barn – før de i det hele
                            tatt har kommet seg av gårde.
                        </p>
                    </div>

                    <h2>Det klassiske problemet</h2>

                    <p>
                        Nordmenn elsker hytta. Men pakking til hyttetur kan være en prøvelse:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                        <div className="bg-red-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">🧥</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Hva er der fra før?</h3>
                            <p className="text-gray-600 m-0">
                                Er det ullundertøy i skapet, eller tok vi det med hjem sist?
                            </p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">📝</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Listen forsvinner</h3>
                            <p className="text-gray-600 m-0">
                                Pakkelisten fra sist ligger et sted – ingen vet hvor
                            </p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">🔧</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Vedlikehold glemmes</h3>
                            <p className="text-gray-600 m-0">
                                &quot;Å ja, vi skulle jo fikse den kranene&quot; – tre år på rad
                            </p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6">
                            <div className="text-3xl mb-3">🚗</div>
                            <h3 className="text-lg font-bold text-charcoal mb-2">Bilen glemt</h3>
                            <p className="text-gray-600 m-0">
                                Kjettinger, startkabel, skyvere... har vi det i bilen?
                            </p>
                        </div>
                    </div>

                    <h2>Løsningen: Stedsbaserte huskelister</h2>

                    <p>
                        Tenk deg at hytta har sin egen digitale mappe i telefonen.
                        Fire typer lister som alltid er oppdatert:
                    </p>

                    <div className="space-y-6 my-8 not-prose">
                        <div className="flex gap-4 items-start bg-sky-50 p-5 rounded-xl">
                            <span className="text-3xl">📦</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Inventar – Hva finnes på hytta?</h3>
                                <p className="text-gray-600">
                                    Ullundertøy størrelse 4-10, 3 par skisko, førstehjelpsskrin,
                                    strøsand, 2 l parafin. Du vet alltid hva som er der oppe.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-sky-50 p-5 rounded-xl">
                            <span className="text-3xl">🎒</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Pakkeliste – Hva må med?</h3>
                                <p className="text-gray-600">
                                    Det som alltid må med fra hjem til hytte: medisiner, fersk mat,
                                    oppladere, barnas favorittbøker. Sjekk av underveis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-sky-50 p-5 rounded-xl">
                            <span className="text-3xl">✅</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Før avreise – Hva må gjøres?</h3>
                                <p className="text-gray-600">
                                    Slå av hovedstrøm, stenge vannet, sette ut frostbeskyttelse,
                                    tømme kjøleskap, låse alle vinduer. Glem aldri noe kritisk.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-sky-50 p-5 rounded-xl">
                            <span className="text-3xl">🔧</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Vedlikehold – Hva må fikses?</h3>
                                <p className="text-gray-600">
                                    Ting som må handles eller repareres: ny termostat, bestille
                                    ved, etterfylle parafin, male vinduet mot vest.
                                </p>
                            </div>
                        </div>
                    </div>

                    <figure className="my-10">
                        <Image
                            src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&q=80"
                            alt="Familie på skitur foran hytte"
                            width={1200}
                            height={600}
                            className="rounded-2xl object-cover w-full h-64"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-3">
                            Med riktig forberedelse kan dere fokusere på det viktige: kvalitetstid sammen
                        </figcaption>
                    </figure>

                    <h2>Familien Nordlis nye rutine</h2>

                    <p>
                        Etter å ha satt opp stedsbaserte lister, ble fredagene helt annerledes:
                    </p>

                    <div className="space-y-4 my-8 not-prose">
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Torsdag kveld: 5 minutter</h3>
                                <p className="text-gray-600">
                                    Mamma åpner &quot;Kvamskogen&quot; i appen, skroller gjennom pakkelisten.
                                    Legger til &quot;skismøring&quot; fordi værmeldingen viser nysnø.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Fredag morgen: Sjekkliste</h3>
                                <p className="text-gray-600">
                                    Barna hjelper til med å krysse av på pakkelisten. Det blir en
                                    lek – hvem finner tingene først?
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                            <div>
                                <h3 className="font-bold text-charcoal text-lg mb-1">Søndag: Avreise-sjekk</h3>
                                <p className="text-gray-600">
                                    Før de drar: Før avreise-listen. Vann stengt ✓ Strøm av ✓
                                    Vinduer lukket ✓ Søppel med ✓
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2>Ikke bare hytta</h2>

                    <p>
                        Det samme prinsippet fungerer overalt:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-4xl mb-2 block">⛵</span>
                            <p className="font-bold text-charcoal">Båten</p>
                            <p className="text-sm text-gray-600">Sikkerhetsutstyr, vinterlagring</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-4xl mb-2 block">🏡</span>
                            <p className="font-bold text-charcoal">Landstedet</p>
                            <p className="text-sm text-gray-600">Hagearbeid, vedlikehold</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-4xl mb-2 block">🚗</span>
                            <p className="font-bold text-charcoal">Bilen</p>
                            <p className="text-sm text-gray-600">Førstehjelpsskrin, vinterdekk</p>
                        </div>
                    </div>

                    <h2>Et par tips fra erfarne hyttefolsk</h2>

                    <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
                        {[
                            { icon: "📸", title: "Ta bilder av inventaret", desc: "Dokumenter hva som er der – enklere forsikringssak" },
                            { icon: "🔄", title: "Oppdater etter hver tur", desc: "Tok du med noe hjem? Oppdater inventarlisten" },
                            { icon: "👨‍👩‍👧", title: "La hele familien bidra", desc: "Barna kan legge til det de savner" },
                            { icon: "📅", title: "Sesongbaserte lister", desc: "Sommerpakkeliste vs vinterpakkeliste" },
                        ].map((tip) => (
                            <div key={tip.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                <span className="text-2xl">{tip.icon}</span>
                                <div>
                                    <p className="font-semibold text-charcoal m-0">{tip.title}</p>
                                    <p className="text-sm text-gray-600 m-0">{tip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="my-12 p-8 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl text-white text-center">
                        <h3 className="text-2xl font-bold mt-0 text-white">
                            Klar for stressfrie hytteturer?
                        </h3>
                        <p className="text-sky-100 mb-6">
                            listo.family lar deg opprette uendelig mange steder med egne
                            lister. Kvamskogen, båten, mormors hus – alt på ett sted.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
                        >
                            Prøv listo.family gratis →
                        </Link>
                    </div>

                    <h2>Oppsummering</h2>

                    <p>
                        Hyttetur skal være avkobling – ikke logistikk-maraon. Med
                        stedsbaserte huskelister:
                    </p>

                    <ul>
                        <li>Vet du alltid hva som er på hytta</li>
                        <li>Glemmer aldri kritiske pakk-ting</li>
                        <li>Husker vedlikehold som må gjøres</li>
                        <li>Kan fokusere på kvalitetstid i stedet for bekymringer</li>
                    </ul>

                    <p>
                        Familien Nordli har nå en egen tradisjon: Den som glemmer noe
                        (som ikke sto på listen) må gjøre oppvasken. Det skjer sjelden. 🏔️
                    </p>
                </div>

                {/* Author */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                            <span className="text-sky-600 font-bold">L</span>
                        </div>
                        <div>
                            <p className="font-medium text-charcoal">Listo-teamet</p>
                            <p className="text-sm text-gray-500">
                                Tips og inspirasjon for travle familier
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related articles */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-charcoal mb-6">Les også</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/blogg/familieorganisering" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-charcoal group-hover:text-sky-600">
                                Fra kaos til kontroll: Familieorganisering i 2025
                            </p>
                            <p className="text-sm text-gray-500">7 min lesetid</p>
                        </Link>
                        <Link href="/blogg/delt-omsorg-middagsplanlegging" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <p className="font-medium text-charcoal group-hover:text-sky-600">
                                Middagsplanlegging med delt omsorg
                            </p>
                            <p className="text-sm text-gray-500">6 min lesetid</p>
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
