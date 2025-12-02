import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vintermiddager: 15 lune retter for kalde dager | Listo",
  description:
    "Oppdag 15 deilige vintermiddager som varmer fra innsiden. Fra klassiske gryteretter til moderne favoritter – perfekt for mørke vinterkvelder.",
  keywords: [
    "vintermiddager",
    "vintermat",
    "lune retter",
    "gryteretter",
    "varmende mat",
    "middag om vinteren",
    "suppe oppskrifter",
    "comfort food",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80"
          alt="Varm gryte på et vinterbord"
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
            Vintermiddager: 15 lune retter for kalde dager
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Sesong
            </span>
            <span>6 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-02">2. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-blue-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Når temperaturen synker og dagene blir kortere, er det få ting 
            som slår en dampende, varmende middag. Her er 15 vintermiddager 
            som vil gjøre de kaldeste dagene litt koseligre.
          </p>

          <p>
            Vintermiddager handler om comfort food – mat som varmer fra 
            innsiden, fyller huset med gode dufter, og samler familien 
            rundt bordet. Fra tradisjonsrike norske retter til 
            internasjonale favoritter – her er vår guide til vinteren.
          </p>

          {/* Supper section */}
          <div className="my-12 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🍲 Varmende supper
            </h2>
            <p className="text-gray-600 mb-0">
              Ingenting varmer som en god suppe
            </p>
          </div>

          <div className="space-y-6 my-8">
            {[
              {
                nr: 1,
                name: "Ertestuing med lettsaltet svinekjøtt",
                desc: "En norsk klassiker som har varmet nordmenn i generasjoner. Næringsrik, mettende og utrolig god.",
                time: "2 timer (passiv koking)",
              },
              {
                nr: 2,
                name: "Løksuppe med ostegratinerte brødskiver",
                desc: "Fransk klassiker som passer perfekt til norsk vinter. Karamellisert løk i kraft, toppet med smeltet ost.",
                time: "45 minutter",
              },
              {
                nr: 3,
                name: "Tom Kha Gai – thailandsk kyllingsuppe",
                desc: "Krydret og kremet kokosuppe med galangal og sitrongress. Varmer kropp og sjel.",
                time: "30 minutter",
              },
              {
                nr: 4,
                name: "Klassisk grønnsaksuppe med kjøttboller",
                desc: "Mors beste oppskrift. Rotgrønnsaker, gode kjøttboller og masse kjærlighet.",
                time: "1 time",
              },
            ].map((dish) => (
              <div key={dish.nr} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {dish.nr}
                </span>
                <div>
                  <h3 className="font-bold text-charcoal m-0">{dish.name}</h3>
                  <p className="text-gray-600 m-0 text-sm mt-1">{dish.desc}</p>
                  <p className="text-blue-600 text-xs mt-2 m-0">⏱️ {dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gryteretter section */}
          <div className="my-12 p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🥘 Langkokte gryteretter
            </h2>
            <p className="text-gray-600 mb-0">
              Mat som har fått tiden den fortjener
            </p>
          </div>

          <figure className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=1200&q=80"
              alt="Langkokt gryte med kjøtt og grønnsaker"
              width={1200}
              height={500}
              className="rounded-2xl object-cover w-full h-64"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Langkoking gir mørt kjøtt og dype smaker
            </figcaption>
          </figure>

          <div className="space-y-6 my-8">
            {[
              {
                nr: 5,
                name: "Boeuf Bourguignon",
                desc: "Fransk storhusholdning på sitt beste. Oksekjøtt langkokt i rødvin med løk, gulrøtter og sopp.",
                time: "3 timer",
              },
              {
                nr: 6,
                name: "Coq au Vin",
                desc: "Kylling i rødvin med bacon, løk og champignon. Comfort food fra Frankrike.",
                time: "2 timer",
              },
              {
                nr: 7,
                name: "Fårikål",
                desc: "DEN norske høstklassikeren som er like god hele vinteren. Lam, kål og pepper – så enkelt, så godt.",
                time: "2-3 timer",
              },
              {
                nr: 8,
                name: "Chili con carne",
                desc: "Krydret texmex-gryte med kjøttdeig, bønner og masse smak. Server med ris eller tortillas.",
                time: "1 time",
              },
              {
                nr: 9,
                name: "Marokkansk lammegryte",
                desc: "Eksotisk og aromatisk med aprikoser, mandler og harissa. Reise for smaksløkene.",
                time: "2-3 timer",
              },
            ].map((dish) => (
              <div key={dish.nr} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {dish.nr}
                </span>
                <div>
                  <h3 className="font-bold text-charcoal m-0">{dish.name}</h3>
                  <p className="text-gray-600 m-0 text-sm mt-1">{dish.desc}</p>
                  <p className="text-orange-600 text-xs mt-2 m-0">⏱️ {dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ovnsbakte section */}
          <div className="my-12 p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🔥 Ovnsbakte favoritter
            </h2>
            <p className="text-gray-600 mb-0">
              Når ovnsvarmen gjør halve jobben
            </p>
          </div>

          <div className="space-y-6 my-8">
            {[
              {
                nr: 10,
                name: "Lasagne",
                desc: "Lag etter lag med kjøttsaus, bechamel og ost. Den ultimate fredagsmiddagen eller søndagskosen.",
                time: "1.5 timer",
              },
              {
                nr: 11,
                name: "Ovnsbakt laks med rotgrønnsaker",
                desc: "Alt i ett form. Laks på en seng av gulrøtter, pastinakk og søtpotet. Enkelt og næringsrikt.",
                time: "45 minutter",
              },
              {
                nr: 12,
                name: "Gratinerte poteter med pølser",
                desc: "Kremete poteter med fløte, hvitløk og timian. Serverert med gode pølser. Ren nostalgikost.",
                time: "1 time",
              },
              {
                nr: 13,
                name: "Moussaka",
                desc: "Gresk auberginegrateng med kjøttdeig og kremete topping. Middelhavets svar på lasagne.",
                time: "1.5 timer",
              },
            ].map((dish) => (
              <div key={dish.nr} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {dish.nr}
                </span>
                <div>
                  <h3 className="font-bold text-charcoal m-0">{dish.name}</h3>
                  <p className="text-gray-600 m-0 text-sm mt-1">{dish.desc}</p>
                  <p className="text-red-600 text-xs mt-2 m-0">⏱️ {dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Raske section */}
          <div className="my-12 p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              ⚡ Raske vinterfavoritter
            </h2>
            <p className="text-gray-600 mb-0">
              For travle hverdager – ferdig på 30 minutter
            </p>
          </div>

          <div className="space-y-6 my-8">
            {[
              {
                nr: 14,
                name: "Kremet pasta med bacon og sopp",
                desc: "Carbonara-inspirert pasta med stekt bacon, sopp og parmesan. Klar på 20 minutter.",
                time: "20 minutter",
              },
              {
                nr: 15,
                name: "Pannekaker med hjemmelaget fyll",
                desc: "Pannekaker er ikke bare til dessert! Fyll med skinke og ost, spinat og ricotta, eller rester fra kjøleskapet.",
                time: "25 minutter",
              },
            ].map((dish) => (
              <div key={dish.nr} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {dish.nr}
                </span>
                <div>
                  <h3 className="font-bold text-charcoal m-0">{dish.name}</h3>
                  <p className="text-gray-600 m-0 text-sm mt-1">{dish.desc}</p>
                  <p className="text-green-600 text-xs mt-2 m-0">⏱️ {dish.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips section */}
          <h2>🧊 Tips for vinterkoking</h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              {
                title: "Lag dobbel porsjon",
                desc: "Gryteretter blir ofte bedre på dag 2. Frys ned resten til en travel dag.",
              },
              {
                title: "Bruk rotgrønnsaker",
                desc: "Gulrøtter, kålrot, pastinakk – billige, næringsrike og perfekte til langkoking.",
              },
              {
                title: "Start tidlig",
                desc: "Langkokte retter trenger tid. Sett gryta på mens du gjør andre ting.",
              },
              {
                title: "Varm opp tallerkenene",
                desc: "En liten detalj som gjør stor forskjell – maten holder seg varm lenger.",
              },
            ].map((tip, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-charcoal m-0 text-base">{tip.title}</h3>
                <p className="text-gray-600 m-0 text-sm mt-1">{tip.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              Planlegg vinterens middager med Listo
            </h3>
            <p className="text-blue-100 mb-6">
              Sett opp ukemenyen med lune vintermiddager. Listo lager 
              handlelisten automatisk og hjelper deg holde styr på favorittene.
            </p>
            <Link
              href="/middagsplanlegger"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv Listo gratis →
            </Link>
          </div>

          <h2>Oppsummering</h2>

          <p>
            Vintermiddager trenger ikke være kompliserte. Det handler om 
            å velge retter som passer årstiden – mat som varmer, metter, 
            og gir hele familien noe å glede seg til. Enten du velger en 
            langkokt gryte, en rask pasta, eller en klassisk norsk suppe, 
            er nøkkelen å lage mat med kjærlighet.
          </p>

          <p>
            <strong>God appetitt – og god vinter! ❄️</strong>
          </p>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">L</span>
            </div>
            <div>
              <p className="font-medium text-charcoal">Listo-teamet</p>
              <p className="text-sm text-gray-500">
                Tips og inspirasjon for travle familier
              </p>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-charcoal mb-6">Les også</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blogg/hva-skal-vi-ha-til-middag" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-blue-600">
                Hva skal vi ha til middag? 30 enkle middagsideer
              </p>
              <p className="text-sm text-gray-500">8 min lesetid</p>
            </Link>
            <Link href="/blogg/batch-cooking-guide" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-blue-600">
                Batch cooking: Lag mat til hele uken på én dag
              </p>
              <p className="text-sm text-gray-500">7 min lesetid</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
