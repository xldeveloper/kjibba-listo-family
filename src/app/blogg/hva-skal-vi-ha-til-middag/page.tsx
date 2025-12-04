import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hva skal vi ha til middag? 30 enkle middagsideer | listo.family",
  description:
    "Sliter du med å finne ut hva dere skal ha til middag? Her er 30 enkle middagsforslag som hele familien vil elske – sortert etter tid og vanskelighetsgrad.",
  keywords: [
    "hva skal vi ha til middag",
    "middagsideer",
    "enkle middager",
    "hva skal jeg lage til middag",
    "middag i dag",
    "raske middager",
    "familievennlige middager",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
          alt="Familie spiser middag sammen"
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
            Hva skal vi ha til middag? 30 enkle middagsideer
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-listo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Middagsideer
            </span>
            <span>8 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-02">2. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-listo-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            &quot;Hva skal vi ha til middag?&quot; Det er kanskje det mest stilte 
            spørsmålet i norske hjem. Hver dag, rundt klokken fire, begynner 
            hodebry-sesongent i tusenvis av familier. Men det trenger ikke være sånn.
          </p>

          <p>
            Vi har samlet 30 enkle middagsideer som hele familien vil like – fra 
            15-minutters kvikkfikser til søndagskos som tar litt mer tid. Uansett 
            hvor travel hverdagen er, finner du noe her.
          </p>

          {/* Quick fixes section */}
          <div className="my-12 p-6 bg-listo-50 rounded-2xl border-l-4 border-listo-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              ⚡ Raske middager (15-20 minutter)
            </h2>
            <p className="text-gray-600 mb-0">For de travle hverdagene</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { nr: 1, name: "Pasta med pesto og cherrytomater", time: "15 min" },
              { nr: 2, name: "Omelett med ost og skinke", time: "10 min" },
              { nr: 3, name: "Wraps med kylling og salat", time: "15 min" },
              { nr: 4, name: "Stekt ris med egg og grønnsaker", time: "20 min" },
              { nr: 5, name: "Toast med avokado og speilegg", time: "10 min" },
              { nr: 6, name: "Quesadillas med bønner og ost", time: "15 min" },
              { nr: 7, name: "Nudler med teriyaki-saus", time: "15 min" },
              { nr: 8, name: "Pølse med lompe og tilbehør", time: "10 min" },
              { nr: 9, name: "Pannekaker (både søte og salte)", time: "20 min" },
              { nr: 10, name: "BLT-sandwich (bacon, salat, tomat)", time: "15 min" },
            ].map((dish) => (
              <div key={dish.nr} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-listo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {dish.nr}
                </span>
                <div>
                  <p className="font-medium text-charcoal m-0">{dish.name}</p>
                  <p className="text-sm text-gray-500 m-0">{dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Medium section */}
          <div className="my-12 p-6 bg-salmon-50 rounded-2xl border-l-4 border-salmon-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🍳 Klassiske hverdagsmiddager (30-45 minutter)
            </h2>
            <p className="text-gray-600 mb-0">Når du har litt mer tid</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { nr: 11, name: "Kjøttdeig med makaroni og tomatsaus", time: "30 min" },
              { nr: 12, name: "Kyllingfilet med ris og grønnsaker", time: "35 min" },
              { nr: 13, name: "Fish and chips (ovnsbakt)", time: "40 min" },
              { nr: 14, name: "Taco (fredagsfavoritt!)", time: "30 min" },
              { nr: 15, name: "Pizza (på ferdig bunn)", time: "25 min" },
              { nr: 16, name: "Wok med biff og grønnsaker", time: "30 min" },
              { nr: 17, name: "Fiskegrateng", time: "45 min" },
              { nr: 18, name: "Karbonadedeig med løk og brun saus", time: "35 min" },
              { nr: 19, name: "Pølsegryte med paprika", time: "30 min" },
              { nr: 20, name: "Laks med søtpoteter", time: "35 min" },
            ].map((dish) => (
              <div key={dish.nr} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-salmon-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {dish.nr}
                </span>
                <div>
                  <p className="font-medium text-charcoal m-0">{dish.name}</p>
                  <p className="text-sm text-gray-500 m-0">{dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image break */}
          <figure className="my-12">
            <Image
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80"
              alt="Hjemmelaget taco med friske grønnsaker"
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full h-64"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Taco fredag er en klassiker som aldri går av moten
            </figcaption>
          </figure>

          {/* Weekend section */}
          <div className="my-12 p-6 bg-magic-50 rounded-2xl border-l-4 border-magic-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              👨‍🍳 Helgemiddager (45+ minutter)
            </h2>
            <p className="text-gray-600 mb-0">For søndagskos og hygge</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { nr: 21, name: "Lasagne", time: "1 time" },
              { nr: 22, name: "Pulled pork i langpanne", time: "3+ timer (passiv)" },
              { nr: 23, name: "Hjemmelaget burger", time: "45 min" },
              { nr: 24, name: "Svinekoteletter med epler og fløte", time: "50 min" },
              { nr: 25, name: "Ovnsbakt kylling med rotgrønnsaker", time: "1 time" },
              { nr: 26, name: "Bacalao (norsk tradisjon)", time: "1 time" },
              { nr: 27, name: "Grillmat (når sesongen tillater)", time: "1 time" },
              { nr: 28, name: "Søndagsstek med brun saus", time: "1.5 time" },
              { nr: 29, name: "Hjemmelaget pasta carbonara", time: "45 min" },
              { nr: 30, name: "Thai-inspirert curry", time: "50 min" },
            ].map((dish) => (
              <div key={dish.nr} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-magic-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {dish.nr}
                </span>
                <div>
                  <p className="font-medium text-charcoal m-0">{dish.name}</p>
                  <p className="text-sm text-gray-500 m-0">{dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips section */}
          <h2 className="flex items-center gap-3 mt-16">
            <span className="text-3xl">💡</span>
            Slik unngår du &quot;hva skal vi ha&quot;-spørsmålet for godt
          </h2>

          <p>
            Den beste løsningen på det daglige spørsmålet er faktisk ganske enkel: 
            <strong>planlegg ukemenyen på forhånd</strong>. Her er hvorfor det fungerer:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-charcoal mt-0 mb-3">🕐 Spar tid</h3>
              <p className="text-gray-600 m-0">
                15 minutter planlegging søndag = null stress resten av uken
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-charcoal mt-0 mb-3">💰 Spar penger</h3>
              <p className="text-gray-600 m-0">
                Handler kun det du trenger, mindre impulshandling
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-charcoal mt-0 mb-3">🥗 Spis sunnere</h3>
              <p className="text-gray-600 m-0">
                Lettere å sikre variasjon og næringsrik mat
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-charcoal mt-0 mb-3">🗑️ Mindre svinn</h3>
              <p className="text-gray-600 m-0">
                Mat planlegges og brukes opp i stedet for å råtne
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-listo-500 to-listo-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              La listo.family hjelpe deg med middagsplanleggingen
            </h3>
            <p className="text-listo-100 mb-6">
              Vår AI-drevne middagsplanlegger foreslår middager, lager handlelister 
              automatisk, og synkroniserer med hele familien. Gratis å prøve!
            </p>
            <Link
              href="/middagsplanlegger"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-listo-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv listo.family gratis →
            </Link>
          </div>

          <h2>Hvordan velge riktig middag?</h2>

          <p>
            Når du står der og lurer på hva dere skal ha til middag, tenk på disse tre tingene:
          </p>

          <ol className="space-y-4">
            <li>
              <strong>Hvor mye tid har du?</strong> Travle dager = enkle retter fra 
              15-minutters-listen. Rolige dager = prøv noe nytt.
            </li>
            <li>
              <strong>Hva har du i kjøleskapet?</strong> Sjekk hva som må brukes opp 
              snart, og velg en rett som passer.
            </li>
            <li>
              <strong>Hva spiste dere i går?</strong> Variasjon er viktig. Hadde dere 
              pasta i går, velg noe annet i dag.
            </li>
          </ol>

          <h2>Oppsummering</h2>

          <p>
            &quot;Hva skal vi ha til middag?&quot; trenger ikke være et stressende spørsmål. 
            Med litt planlegging og en god liste med favorittmiddager blir hverdagen 
            mye enklere. Bruk listen over som inspirasjon, og vurder å planlegge 
            ukemenyen på forhånd – det er den beste investering i familiens hverdag.
          </p>

          <p>
            <strong>Lykke til med middagslagingen! 🍽️</strong>
          </p>
        </div>

        {/* Author/Share */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-listo-100 rounded-full flex items-center justify-center">
                <span className="text-listo-600 font-bold">L</span>
              </div>
              <div>
                <p className="font-medium text-charcoal">Listo-teamet</p>
                <p className="text-sm text-gray-500">
                  Tips og inspirasjon for travle familier
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-charcoal mb-6">Les også</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blogg/slik-planlegger-du-ukemenyen" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-listo-600">
                Slik planlegger du ukemenyen – en komplett guide
              </p>
              <p className="text-sm text-gray-500">5 min lesetid</p>
            </Link>
            <Link href="/blogg/barnevennlige-middager" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-listo-600">
                10 barnevennlige middager som alle liker
              </p>
              <p className="text-sm text-gray-500">4 min lesetid</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
