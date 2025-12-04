import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gjøremål for barn: Slik lærer du barna ansvar hjemme | listo.family",
  description:
    "Barn som bidrar hjemme lærer viktige ferdigheter. Her er hvordan du fordeler oppgaver og gjør det gøy.",
  keywords: [
    "gjøremål barn",
    "husarbeid barn",
    "fordele oppgaver familie",
    "barn ansvar",
    "familieoppgaver",
    "lommepenger husarbeid",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1600&q=80"
          alt="Barn som hjelper til med oppgaver hjemme"
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
            Gjøremål for barn: Slik lærer du barna ansvar hjemme
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Familie
            </span>
            <span>5 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-04">4. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-purple-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            &quot;Kan jeg få iPad?&quot; – &quot;Har du ryddet rommet ditt?&quot; – &quot;Nei...&quot; 
            Denne samtalen kjenner de fleste foreldre igjen. Men hva om 
            gjøremål kunne bli en naturlig del av hverdagen – uten mas?
          </p>

          <p>
            Forskning viser at barn som bidrar hjemme utvikler bedre 
            selvtillit, ansvarsfølelse og samarbeidsevner. De lærer at 
            familien er et lag der alle bidrar.
          </p>

          {/* Age groups */}
          <div className="my-12 p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              👶 Alderssvarende oppgaver
            </h2>
            <p className="text-gray-600 mb-0">
              Nøkkelen er å gi oppgaver som passer barnets alder
            </p>
          </div>

          {/* Age 3-5 */}
          <div className="my-8 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-lg">3-5</span>
              <h3 className="text-xl font-bold text-charcoal">De små hjelperne</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {["Legge leker tilbake i kassen", "Bære tallerken til oppvaskmaskinen", "Mate kjæledyr (med hjelp)", "Sortere sokker etter farge"].map((task) => (
                <div key={task} className="flex items-center gap-2 p-3 bg-pink-50 rounded-lg">
                  <span className="text-pink-500">✓</span>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Age 6-8 */}
          <div className="my-8 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">6-8</span>
              <h3 className="text-xl font-bold text-charcoal">Mer selvstendighet</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {["Re sengen", "Dekke bordet", "Tørke støv", "Sortere søppel", "Hjelpe til med matlaging"].map((task) => (
                <div key={task} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Age 9-12 */}
          <div className="my-8 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">9-12</span>
              <h3 className="text-xl font-bold text-charcoal">Ekte ansvar</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {["Lage enkel middag", "Vaske badet", "Støvsuge", "Passe yngre søsken (kort tid)", "Handle etter handleliste"].map((task) => (
                <div key={task} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          <h2>Fra mas til system</h2>

          <p>
            Problemet med gjøremål er ofte ikke barna – det er at vi må 
            minne dem på det igjen og igjen. Et synlig system fjerner 
            behovet for mas.
          </p>

          <figure className="my-10">
            <Image
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80"
              alt="Familie som planlegger oppgaver sammen"
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full h-64"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Når oppgavene er tydelige, vet barna hva som forventes
            </figcaption>
          </figure>

          <div className="my-10 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-charcoal mt-0 flex items-center gap-2">
              💡 Tips: Gjør det synlig
            </h3>
            <p className="text-gray-700 mb-0">
              Bruk en felles familieapp der både barn og voksne ser dagens 
              oppgaver. Når barnet krysser av selv, føler de mestring.
            </p>
          </div>

          <h2>Faste oppgaver vs. rotasjon</h2>

          <p>
            Noen familier gir hvert barn faste oppgaver: &quot;Emma dekker alltid 
            bordet, Oscar rydder alltid av.&quot; Andre roterer ukentlig.
          </p>

          <p>
            Begge fungerer. Det viktigste er <strong>forutsigbarhet</strong>. 
            Barna skal vite hva som forventes uten at du må forklare det 
            hver dag.
          </p>

          <h2>Når det ikke fungerer</h2>

          <p>
            Noen dager nekter barna. Det er normalt. Her er noen strategier:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
            {[
              { icon: "🤝", title: "Gjør det sammen først", desc: "Vis hvordan, gjør det morsomt" },
              { icon: "⏰", title: "Sett en tidsgrense", desc: "\"Dette tar 5 minutter, så er du ferdig\"" },
              { icon: "📱", title: "Konsekvenser, ikke straff", desc: "\"Skjermtid kommer etter oppgavene\"" },
              { icon: "⭐", title: "Ros innsats, ikke resultat", desc: "\"Så flink du er til å hjelpe!\"" },
            ].map((tip) => (
              <div key={tip.title} className="p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl mb-2">{tip.icon}</div>
                <p className="font-bold text-charcoal m-0 mb-1">{tip.title}</p>
                <p className="text-gray-600 text-sm m-0">{tip.desc}</p>
              </div>
            ))}
          </div>

          <h2>Belønning eller ikke?</h2>

          <p>
            Dette er et kontroversielt tema. Noen mener lommepenger for 
            oppgaver lærer verdien av arbeid. Andre mener bidrag til 
            familien ikke skal &quot;kjøpes&quot;.
          </p>

          <div className="my-8 p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-bold text-charcoal mt-0 mb-4">En mellomting som fungerer:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">📋</span>
                <p className="m-0 text-gray-700">
                  <strong>Grunnleggende oppgaver</strong> (re seng, rydde rom) er forventet uten belønning
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💵</span>
                <p className="m-0 text-gray-700">
                  <strong>Ekstraoppgaver</strong> (vaske bil, luke) kan gi lommepenger
                </p>
              </div>
            </div>
          </div>

          <h2>Gjør det til en vane</h2>

          <p>
            Det tar 66 dager i snitt å danne en ny vane. Vær konsekvent de 
            første ukene, selv når det føles slitsomt. Etter hvert blir det 
            bare &quot;sånn vi gjør det&quot;.
          </p>

          <p>
            Og husk: <strong>Perfeksjon er ikke målet.</strong> En halvveis 
            redd seng er bedre enn ingen redd seng. Ros innsatsen, juster 
            teknikken gradvis.
          </p>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              Hold oversikt over familiens gjøremål
            </h3>
            <p className="text-purple-100 mb-6">
              Med listo.family kan du tildele oppgaver til hvert familiemedlem og se 
              hvem som har gjort hva – uten mas.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv listo.family gratis →
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold">L</span>
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
            <Link href="/blogg/barnevennlige-middager" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-purple-600">
                Barnevennlige middager hele familien vil elske
              </p>
              <p className="text-sm text-gray-500">5 min lesetid</p>
            </Link>
            <Link href="/blogg/familieorganisering" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-purple-600">
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
