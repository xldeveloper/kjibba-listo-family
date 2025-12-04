import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dele handlelisten med familien: Slik fungerer det | listo.family",
  description:
    "Slutt på dobbelthandling og glemte varer. Lær hvordan en delt handleliste gjør familielivet enklere.",
  keywords: [
    "dele handleliste",
    "felles handleliste",
    "handleliste familie",
    "delt innkjøpsliste",
    "samarbeid handleapp",
    "handleliste app",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=80"
          alt="Familie som handler sammen i butikken"
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
            Dele handlelisten med familien: Slik fungerer det
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Handleliste
            </span>
            <span>4 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-06">6. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-teal-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            &quot;Jeg kjøpte melk.&quot; – &quot;Jeg også!&quot; Resultatet: To liter melk 
            i kjøleskapet, men fortsatt ingen smør. En delt handleliste 
            løser dette problemet én gang for alle.
          </p>

          {/* Problem statement */}
          <div className="my-12 p-6 bg-red-50 rounded-2xl border-l-4 border-red-400">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              😫 Kjenner du deg igjen?
            </h2>
            <ul className="text-gray-700 mb-0 space-y-2">
              <li>Partner kjøpte det samme som deg</li>
              <li>Kom hjem uten den ene tingen du faktisk trengte</li>
              <li>Lappen på kjøleskapet ble glemt hjemme</li>
              <li>&quot;Jeg trodde DU skulle handle&quot;</li>
            </ul>
          </div>

          <h2>Hvorfor dele handlelisten?</h2>

          <p>
            I mange familier handler én person mesteparten av maten. Men 
            hvem som helst kan oppdage at noe mangler: barnet som bruker 
            siste tannpasta, partneren som tømmer kaffeposene.
          </p>

          <p>
            Med en delt handleliste kan alle legge til varer. Og når 
            noen er innom butikken, ser de alt som trengs – uansett 
            hvem som la det til.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Ingen dobbelthandling</h3>
              <p className="text-gray-600 m-0">
                Når én kjøper melk, ser alle det med én gang
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Ingen glemte varer</h3>
              <p className="text-gray-600 m-0">
                Alt du trenger er samlet på ett sted
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Alle kan bidra</h3>
              <p className="text-gray-600 m-0">
                Tenåringen legger til det de trenger selv
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Spontan handling</h3>
              <p className="text-gray-600 m-0">
                Forbi butikken? Sjekk listen og fiks det
              </p>
            </div>
          </div>

          <h2>Fra papir til digital</h2>

          <p>
            Papirlapper på kjøleskapet har fungert i generasjoner. Men 
            de har en stor svakhet: <strong>De er ikke med deg i butikken.</strong>
          </p>

          <figure className="my-10">
            <Image
              src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1200&q=80"
              alt="Person som sjekker handleliste på telefonen i butikken"
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full h-64"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Med telefonen har du alltid handlelisten med deg
            </figcaption>
          </figure>

          <p>
            Med en digital handleliste i telefonen har du alltid 
            oversikten. Partneren din legger til egg mens du står i 
            butikken? Du ser det med én gang.
          </p>

          {/* How to section */}
          <div className="my-12 p-6 bg-teal-50 rounded-2xl border-l-4 border-teal-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🚀 Slik kommer du i gang
            </h2>
            <p className="text-gray-600 mb-0">Tre enkle steg til delt handleliste</p>
          </div>

          <div className="space-y-6 my-8 not-prose">
            <div className="flex gap-4 items-start">
              <span className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</span>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-1">Velg ett verktøy</h3>
                <p className="text-gray-600">
                  Det viktigste er at begge foreldre (og gjerne tenåringer) 
                  har appen installert og faktisk bruker den.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-1">Gjør det til en vane</h3>
                <p className="text-gray-600">
                  Regelen er enkel: <strong>Når du tar siste av noe, legg 
                  det til på listen.</strong> Ikke vent, ikke &quot;husk det 
                  senere&quot;. Legg det til med én gang.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-1">Sjekk listen før du handler</h3>
                <p className="text-gray-600">
                  Før du går til butikken, ta en titt. Kanskje partneren la 
                  til noe for 10 minutter siden.
                </p>
              </div>
            </div>
          </div>

          <h2>Tips for effektiv deling</h2>

          <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
            {[
              { icon: "📂", title: "Kategoriser varene", desc: "Sorter etter butikkavdeling for raskere handling" },
              { icon: "📝", title: "Legg til detaljer", desc: "\"Yoghurt, jordbær, 4-pack\" unngår misforståelser" },
              { icon: "✓", title: "Kryss av underveis", desc: "Hold oversikten og unngå å gå forbi noe" },
              { icon: "🍽️", title: "Koble med middagsplan", desc: "Legg til ingredienser når du planlegger uken" },
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

          <h2>Vanlige utfordringer</h2>

          <div className="space-y-4 my-8">
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-charcoal mb-2">&quot;Jeg glemmer å legge til&quot;</p>
              <p className="text-gray-600 m-0">
                <strong>Løsning:</strong> Ha appen på hjemskjermen. Jo færre trykk, jo større 
                sjanse for at det faktisk skjer.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-charcoal mb-2">&quot;Partneren min bruker det ikke&quot;</p>
              <p className="text-gray-600 m-0">
                <strong>Løsning:</strong> Snakk om fordelene. Gi det tid – det tar 2-3 uker å bygge en ny vane.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-bold text-charcoal mb-2">&quot;Listen blir rotete&quot;</p>
              <p className="text-gray-600 m-0">
                <strong>Løsning:</strong> Slett kryssede varer jevnlig, eller velg en app som gjør det automatisk.
              </p>
            </div>
          </div>

          <h2>For de unge i familien</h2>

          <p>
            Tenåringer kan være overraskende flinke til å bruke delte 
            lister – de er jo vant til apper. La dem legge til det de 
            trenger (innenfor rimelighetens grenser).
          </p>

          <p>
            <strong>Bonus:</strong> Det lærer dem å tenke fremover og ta ansvar for 
            egne behov.
          </p>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              Del handlelisten med familien din i dag
            </h3>
            <p className="text-teal-100 mb-6">
              listo.family gjør det enkelt å dele handlelister – og mye mer. 
              Middagsplanlegger, oppgaver og handlelist på ett sted.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv listo.family gratis →
            </Link>
          </div>

          <h2>Oppsummering</h2>

          <p>
            En delt handleliste er kanskje den enkleste endringen du 
            kan gjøre for å forbedre familielogistikken. Det tar 
            sekunder å sette opp, og fordelene merkes med én gang.
          </p>

          <p>
            Ingen flere &quot;jeg trodde du kjøpte det&quot;. Ingen flere 
            dobbeltposer med melk. Bare en enkel, delt oversikt som 
            gjør hverdagen litt lettere. 🛒
          </p>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold">L</span>
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
            <Link href="/blogg/smart-handleliste-app" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-teal-600">
                Smart handleliste: Aldri glem melken igjen
              </p>
              <p className="text-sm text-gray-500">5 min lesetid</p>
            </Link>
            <Link href="/blogg/familieorganisering" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-teal-600">
                Fra kaos til kontroll: Familieorganisering i 2025
              </p>
              <p className="text-sm text-gray-500">7 min lesetid</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
