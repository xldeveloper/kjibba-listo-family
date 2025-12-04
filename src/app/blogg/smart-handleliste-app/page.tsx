import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart handleliste: Aldri glem melken igjen | listo.family",
  description:
    "En smart handleliste-app kan spare deg for tid, penger og frustrasjon. Slik velger du riktig app for familien.",
  keywords: [
    "handleliste app",
    "smart handleliste",
    "handleapp",
    "dele handleliste",
    "beste handleliste app",
    "gratis handleliste",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
          alt="Handlekurv med dagligvarer i butikk"
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
            Smart handleliste: Aldri glem melken igjen
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Handleliste
            </span>
            <span>5 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-03">3. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-emerald-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Det er torsdag ettermiddag. Du har akkurat vært på butikken. 
            Du pakker ut posene, og så ser du det: Kjøleskapet er tomt for 
            melk. Igjen. Hadde du bare hatt en bedre måte å huske på...
          </p>

          <p>
            En smart handleliste-app er løsningen. Men med så mange 
            alternativer der ute, hvordan velger du riktig? Og hva er 
            egentlig forskjellen på en vanlig notatapp og en dedikert 
            handleliste?
          </p>

          {/* Why section */}
          <div className="my-12 p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🤔 Hvorfor trenger du en handleliste-app?
            </h2>
            <p className="text-gray-600 mb-0">Det handler om mer enn å bare huske melken</p>
          </div>

          <p>
            De fleste av oss har forsøkt med papirlapper. De fungerer – 
            til du glemmer dem hjemme. Eller til partneren din handler 
            uten å vite hva du har skrevet ned.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-bold text-charcoal mb-2">Spar tid</h3>
              <p className="text-gray-600 text-sm m-0">
                Færre turer til butikken når du husker alt første gang
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-charcoal mb-2">Spar penger</h3>
              <p className="text-gray-600 text-sm m-0">
                Handler kun det du trenger, mindre impulskjøp
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">😌</div>
              <h3 className="font-bold text-charcoal mb-2">Mindre stress</h3>
              <p className="text-gray-600 text-sm m-0">
                Aldri mer &quot;hva var det jeg skulle ha?&quot;
              </p>
            </div>
          </div>

          <h2>Hva gjør en handleliste-app &quot;smart&quot;?</h2>

          <p>
            En vanlig notatapp lar deg skrive ned varer. En smart 
            handleliste-app gjør mye mer:
          </p>

          <div className="space-y-4 my-8 not-prose">
            {[
              { icon: "👥", title: "Deling", desc: "Hele familien ser og kan legge til i samme liste" },
              { icon: "🔄", title: "Synkronisering", desc: "Oppdateringer vises i sanntid på alle enheter" },
              { icon: "📂", title: "Kategorisering", desc: "Varer sorteres automatisk etter butikkavdeling" },
              { icon: "📝", title: "Hukommelse", desc: "Appen husker varer du ofte kjøper" },
              { icon: "✅", title: "Avkryssing", desc: "Kryss av varer underveis, de forsvinner ikke" },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <p className="font-bold text-charcoal m-0">{feature.title}</p>
                  <p className="text-gray-600 m-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Slik bruker du handlelisten effektivt</h2>

          <figure className="my-10">
            <Image
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80"
              alt="Person som handler med telefon i hånden"
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full h-64"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Med appen i hånden blir handleturen raskere og mer effektiv
            </figcaption>
          </figure>

          <div className="my-12 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-charcoal mt-0 flex items-center gap-2">
              💡 Gullregelen
            </h3>
            <p className="text-gray-700 mb-0 text-lg">
              <strong>Når du tar siste av noe, legg det til på listen med én gang.</strong> 
              Ikke vent. Ikke &quot;husk det senere&quot;. Gjør det nå.
            </p>
          </div>

          <h3>Før handleturen</h3>
          <ul>
            <li>Sjekk kjøleskapet og fryseren</li>
            <li>Tenk gjennom ukens middager</li>
            <li>Legg til varer du mangler</li>
            <li>Dele listen med partner/familie</li>
          </ul>

          <h3>I butikken</h3>
          <ul>
            <li>Følg listen – ikke bli fristet av tilbud du ikke trenger</li>
            <li>Kryss av varer etter hvert</li>
            <li>Hvis du kommer på noe: Legg det til for neste gang</li>
          </ul>

          <h3>Etter handleturen</h3>
          <ul>
            <li>Tøm listen for kryssede varer</li>
            <li>Legg til ting du oppdaget var tomt</li>
          </ul>

          <h2>Koble handleliste med middagsplanlegging</h2>

          <p>
            Den smarteste måten å bruke handlelisten på? 
            <strong> Koble den med middagsplanen.</strong>
          </p>

          <p>
            Når du vet hva du skal lage til middag hele uken, vet du 
            også hva du trenger å handle. Ingen flere panikkturer 
            til butikken klokken 17:00 fordi du mangler en ingrediens.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-bold text-charcoal mb-3">Uten middagsplan</h3>
              <ul className="text-gray-600 space-y-2 m-0 list-none p-0">
                <li>❌ Handler dag for dag</li>
                <li>❌ Glemmer ingredienser</li>
                <li>❌ Stress hver ettermiddag</li>
                <li>❌ Mer matsvinn</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-bold text-charcoal mb-3">Med middagsplan</h3>
              <ul className="text-gray-600 space-y-2 m-0 list-none p-0">
                <li>✅ Handler én gang i uken</li>
                <li>✅ Alt du trenger er på listen</li>
                <li>✅ Vet alltid hva du skal lage</li>
                <li>✅ Mindre svinn</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              Handleliste + middagsplan = perfekt match
            </h3>
            <p className="text-emerald-100 mb-6">
              listo.family kombinerer smart handleliste med ukentlig middagsplanlegger. 
              Planlegg middager, så legges ingrediensene automatisk til handlelisten.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv listo.family gratis →
            </Link>
          </div>

          <h2>Oppsummering</h2>

          <p>
            En smart handleliste-app er en liten endring som gir stor 
            effekt. Du sparer tid, penger og frustrasjon. Og best av 
            alt: Du glemmer aldri melken igjen.
          </p>

          <p>
            <strong>Tips:</strong> Velg en app som hele familien kan bruke 
            sammen. Fordelen med deling er at alle kan bidra – og alle 
            ser hva som trengs. 🛒
          </p>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-emerald-600 font-bold">L</span>
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
            <Link href="/blogg/dele-handleliste-familie" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-emerald-600">
                Dele handlelisten med familien: Slik fungerer det
              </p>
              <p className="text-sm text-gray-500">4 min lesetid</p>
            </Link>
            <Link href="/blogg/slik-planlegger-du-ukemenyen" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-emerald-600">
                Slik planlegger du ukemenyen – en komplett guide
              </p>
              <p className="text-sm text-gray-500">5 min lesetid</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
