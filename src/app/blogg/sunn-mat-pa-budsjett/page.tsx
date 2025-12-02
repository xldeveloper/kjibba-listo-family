import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunn mat på budsjett: 15 tips for å spise sunt og billig | Listo",
  description:
    "Lær hvordan du lager sunn mat uten å sprenge budsjettet. 15 konkrete tips for norske familier som vil spise bedre og spare penger.",
  keywords: [
    "sunn mat på budsjett",
    "billig sunn mat",
    "spise sunt billig",
    "sunn middag billig",
    "sunn mat student",
    "billige sunne oppskrifter",
    "sunn mat tips",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&q=80"
          alt="Friske grønnsaker og sunn mat"
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
            Sunn mat på budsjett: 15 tips for å spise sunt og billig
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Økonomi
            </span>
            <span>7 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-02">2. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-green-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Det er en myte at sunn mat må være dyrt. Med litt kunnskap og 
            smarte valg kan du lage næringsrik, velsmakende mat som familien 
            elsker – uten å tømme lommeboka. Her er 15 konkrete tips.
          </p>

          <div className="my-10 p-6 bg-green-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <span className="text-4xl">💰</span>
              <div>
                <p className="font-bold text-green-800 m-0 text-lg">
                  Visste du?
                </p>
                <p className="text-green-700 m-0">
                  En norsk familie kan spare 2000-4000 kr/mnd på matbudsjettet 
                  bare ved å planlegge bedre og handle smart.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
            Planlegg måltider for en hel uke
          </h2>

          <p>
            Det viktigste enkelttipset for å spare penger og spise sunt er 
            <strong>ukemenyplanlegging</strong>. Når du vet hva du skal lage 
            hver dag, handler du kun det du trenger og unngår impulsive 
            (ofte usunne) valg.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 my-6">
            <p className="font-semibold text-charcoal m-0">🎯 Listo-tips:</p>
            <p className="text-gray-600 m-0">
              Bruk en middagsplanlegger som Listo til å sette opp ukemenyen. 
              Den lager automatisk handleliste fra oppskriftene dine.
            </p>
          </div>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
            Kjøp sesongbaserte grønnsaker og frukt
          </h2>

          <p>
            Grønnsaker og frukt i sesong er både billigere og mer næringsrike. 
            Norske gulrøtter om høsten, jordbær om sommeren, og kål om vinteren 
            gir mest verdi for pengene.
          </p>

          <figure className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=1200&q=80"
              alt="Sesongbaserte grønnsaker på et bord"
              width={1200}
              height={500}
              className="rounded-2xl object-cover w-full h-56"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Sesongbasert mat smaker bedre og koster mindre
            </figcaption>
          </figure>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
            Bruk belgfrukter som proteinkilde
          </h2>

          <p>
            Linser, bønner og kikerter er <strong>ekstremt rimelige</strong> 
            sammenlignet med kjøtt, og de er fulle av protein, fiber og 
            næringsstoffer. En pose tørkede linser koster rundt 30 kr og 
            gir 6-8 porsjoner.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              { name: "Røde linser", price: "~30 kr/pk", protein: "9g/100g" },
              { name: "Kikerter", price: "~15 kr/boks", protein: "8g/100g" },
              { name: "Svarte bønner", price: "~15 kr/boks", protein: "8g/100g" },
              { name: "Grønne linser", price: "~30 kr/pk", protein: "9g/100g" },
            ].map((item) => (
              <div key={item.name} className="bg-green-50 rounded-xl p-4 text-center">
                <p className="font-bold text-green-800 m-0">{item.name}</p>
                <p className="text-sm text-green-600 m-0">{item.price}</p>
                <p className="text-xs text-gray-500 m-0">{item.protein}</p>
              </div>
            ))}
          </div>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</span>
            Frys ned og bruk rester
          </h2>

          <p>
            Matsvinn er både dyrt og dårlig for miljøet. Frys ned matrester, 
            lag større porsjoner til mealprep, og bruk opp det du har før 
            du handler nytt.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">5</span>
            Velg fullkornsprodukter
          </h2>

          <p>
            Fullkorn metter bedre enn hvite karbohydrater, så du spiser mindre. 
            Fullkornsris, -pasta og -brød koster ofte det samme, men gir mye 
            mer næring og metthet.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">6</span>
            Lag mat fra bunnen
          </h2>

          <p>
            Ferdigmat og halvfabrikata koster mye mer enn råvarer. En 
            hjemmelaget tomatsaus til pasta koster en brøkdel av ferdigkjøpt, 
            og smaker bedre. Bonusen: du vet hva som er i maten.
          </p>

          <div className="my-10 p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-bold text-charcoal mt-0 mb-4">
              Prissammenligning: Hjemmelaget vs. ferdig
            </h3>
            <div className="space-y-3">
              {[
                { item: "Tomatsaus (4 porsjoner)", homemade: "~15 kr", store: "~40 kr" },
                { item: "Hummus (300g)", homemade: "~10 kr", store: "~35 kr" },
                { item: "Granola (500g)", homemade: "~25 kr", store: "~60 kr" },
                { item: "Pizzabunn (2 stk)", homemade: "~8 kr", store: "~30 kr" },
              ].map((item) => (
                <div key={item.item} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-charcoal">{item.item}</span>
                  <div className="flex gap-4">
                    <span className="text-green-600 font-medium">{item.homemade}</span>
                    <span className="text-gray-400">{item.store}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">7</span>
            Handle med handleliste – alltid
          </h2>

          <p>
            Å handle uten liste er den raskeste veien til å bruke for mye 
            penger på ting du ikke trenger. Med en handleliste holder du 
            fokus og unngår impulskjøp.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">8</span>
            Kjøp egg – naturens superfood
          </h2>

          <p>
            Egg er en av de billigste kildene til høykvalitets protein. 
            Et brett med 12 egg koster rundt 40-50 kr og gir mange måltider: 
            frokost, lunsj, middag, og baking.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">9</span>
            Bruk fryste grønnsaker
          </h2>

          <p>
            Frosne grønnsaker er like næringsrike som ferske (ofte mer, fordi 
            de fryses rett etter høsting), holder mye lenger, og koster 
            betydelig mindre.
          </p>

          <figure className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&q=80"
              alt="Frosne grønnsaker"
              width={1200}
              height={500}
              className="rounded-2xl object-cover w-full h-56"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Frosne grønnsaker er en smart investering
            </figcaption>
          </figure>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">10</span>
            Batch-lag supper og gryteretter
          </h2>

          <p>
            Supper og gryteretter er perfekte for budsjettmåltider. De 
            strekker ingredienser langt, bruker billige råvarer, og kan 
            lages i store porsjoner til flere måltider.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">11</span>
            Sammenlign kilopriser
          </h2>

          <p>
            Ikke la deg lure av pakningsstørrelser. Se alltid på kiloprisen 
            for å finne beste verdi. Større pakninger er ofte (men ikke 
            alltid) billigere per kilo.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">12</span>
            Velg billigere proteinkilder
          </h2>

          <p>
            Kyllinglår er billigere enn kyllingbryst. Svinekjøtt er 
            billigere enn biff. Fryst fisk er billigere enn fersk. 
            Næringsverdien er ofte den samme eller bedre.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold text-blue-800 mt-0 mb-3">
              🐟 Fryst vs. fersk fisk
            </h3>
            <p className="text-blue-700 m-0">
              Fryst torsk og sei koster ofte under halvparten av fersk, og 
              fordi den fryses umiddelbart etter fangst, er næringsverdien 
              faktisk høyere enn &quot;fersk&quot; fisk som har ligget i 
              kjøledisken i flere dager.
            </p>
          </div>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">13</span>
            Drikk vann
          </h2>

          <p>
            Brus, juice og andre sukkerholdige drikker er både dyre og 
            usunne. Vann er gratis (nesten) og det sunneste du kan drikke. 
            Spar hundrevis av kroner i måneden.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">14</span>
            Dyrk egne urter
          </h2>

          <p>
            Ferske urter fra butikken koster 25-35 kr per pakke og 
            holder bare noen dager. En urtepotte på vinduskarmen koster 
            30-40 kr og gir urter i måneder.
          </p>

          <h2 className="flex items-center gap-3">
            <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">15</span>
            Unngå å handle sulten
          </h2>

          <p>
            Det klassiske rådet – fordi det fungerer! Handler du sulten, 
            kjøper du mer, dyrere, og ofte usunnere. Spis noe før du drar, 
            eller handle på nett.
          </p>

          {/* Summary */}
          <div className="my-12 p-8 bg-green-50 rounded-2xl border border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mt-0">
              Oppsummert: Sunn mat trenger ikke være dyrt
            </h2>
            <ul className="space-y-2 text-green-800">
              <li>✅ Planlegg ukemenyen og handle med liste</li>
              <li>✅ Velg sesongbasert og norske råvarer</li>
              <li>✅ Bruk belgfrukter, egg og rimelige proteinkilder</li>
              <li>✅ Lag mat fra bunnen og frys ned rester</li>
              <li>✅ Bruk fryste grønnsaker og sammenlign priser</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              Start med ukemenyplanlegging
            </h3>
            <p className="text-green-100 mb-6">
              Det første steget til å spare penger og spise sunnere er å 
              planlegge måltidene. Listo gjør det enkelt med automatiske 
              handlelister og AI-forslag.
            </p>
            <Link
              href="/middagsplanlegger"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv Listo gratis →
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">L</span>
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
            <Link href="/blogg/spar-penger-pa-matbudsjettet" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-green-600">
                Spar penger på matbudsjettet: 7 effektive strategier
              </p>
              <p className="text-sm text-gray-500">6 min lesetid</p>
            </Link>
            <Link href="/blogg/batch-cooking-guide" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-green-600">
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
