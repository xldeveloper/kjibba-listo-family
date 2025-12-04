import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fra kaos til kontroll: Familieorganisering i 2025 | listo.family",
  description:
    "Hvordan moderne familier holder orden på alt – fra middager til aktiviteter. Praktiske tips for travel hverdag.",
  keywords: [
    "familieorganisering",
    "familiekalender",
    "planlegge familie",
    "travel hverdag",
    "familie app",
    "organisere familien",
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
          alt="Glad familie som planlegger sammen"
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
            Fra kaos til kontroll: Familieorganisering i 2025
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Organisering
            </span>
            <span>7 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-05">5. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-blue-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            &quot;Var det i dag Emma hadde fotball?&quot; – &quot;Hvem skulle handle?&quot; – 
            &quot;Jeg trodde du hentet!&quot; Hvis dette høres kjent ut, er du ikke 
            alene. Moderne familieliv er komplisert. Men det trenger ikke 
            være kaotisk.
          </p>

          <p>
            Med jobb, aktiviteter, venner, lekser og alt annet som skjer, 
            er det lett å miste oversikten. Denne guiden gir deg konkrete 
            strategier for å få kontroll over familiens hverdag.
          </p>

          {/* Problem section */}
          <div className="my-12 p-6 bg-red-50 rounded-2xl border-l-4 border-red-400">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🧠 Problemet med &quot;i hodet&quot;
            </h2>
            <p className="text-gray-600 mb-4">
              De fleste familier holder informasjonen fordelt mellom foreldre 
              som prøver å huske alt. Problemene er mange:
            </p>
            <ul className="text-gray-700 mb-0 space-y-2">
              <li>Informasjon går tapt når én er opptatt</li>
              <li>Dobbeltbooking av barn til to steder samtidig</li>
              <li>Den ene gjør alltid mer enn den andre</li>
              <li>Stress fra å konstant huske &quot;hva var det nå igjen?&quot;</li>
            </ul>
          </div>

          <p>
            <strong>Løsningen</strong> er å flytte informasjonen ut av hodet 
            og inn i et system som alle kan se.
          </p>

          {/* Four pillars */}
          <div className="my-12 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-charcoal mt-0 flex items-center gap-2">
              🏛️ De fire pilarene i familieorganisering
            </h2>
            <p className="text-gray-600 mb-0">Alt du trenger for å få kontroll</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-charcoal mb-2">1. Kalender</h3>
              <p className="text-gray-600 m-0">
                <strong>Hva skjer når?</strong> Alle aktiviteter, legeavtaler, 
                fødselsdager på ett sted. Begge foreldre har tilgang.
              </p>
            </div>
            <div className="bg-salmon-50 rounded-xl p-6">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="font-bold text-charcoal mb-2">2. Måltider</h3>
              <p className="text-gray-600 m-0">
                <strong>Hva spiser vi?</strong> En ukentlig middagsplan sparer 
                deg for daglig beslutningsstress og impulshandling.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="font-bold text-charcoal mb-2">3. Handleliste</h3>
              <p className="text-gray-600 m-0">
                <strong>Hva trenger vi?</strong> En delt liste som alle kan 
                legge til i. Når noen handler, sjekker de listen.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-charcoal mb-2">4. Oppgaver</h3>
              <p className="text-gray-600 m-0">
                <strong>Hvem gjør hva?</strong> Husarbeid, lekser, ærender – 
                en tydelig fordeling gjør at alle vet sitt ansvar.
              </p>
            </div>
          </div>

          <figure className="my-10">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80"
              alt="Familie som planlegger uken sammen"
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full h-64"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              15 minutter planlegging søndag = mye mindre stress hele uken
            </figcaption>
          </figure>

          <div className="my-10 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-charcoal mt-0 flex items-center gap-2">
              💡 Søndagens 15 minutter
            </h3>
            <p className="text-gray-700 mb-0">
              Sett av 15 minutter hver søndag til å gå gjennom uken. 
              Sjekk kalenderen, planlegg middager, fordel oppgaver. 
              Denne lille investeringen gir enorm avkastning i form av 
              redusert stress resten av uken.
            </p>
          </div>

          <h2>Fallgruver å unngå</h2>

          <div className="space-y-4 my-8 not-prose">
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔀</span>
                <p className="font-bold text-charcoal m-0">For mange systemer</p>
              </div>
              <p className="text-gray-600 m-0">
                Kalender i Google, handleliste på papir, oppgaver i hodet... 
                Jo flere steder, jo vanskeligere å holde oversikt.
                <br /><strong>Løsning:</strong> Samle så mye som mulig på ett sted.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎯</span>
                <p className="font-bold text-charcoal m-0">Perfeksjonisme</p>
              </div>
              <p className="text-gray-600 m-0">
                Et uperfekt system som brukes er bedre enn et perfekt system 
                som ignoreres. Start enkelt. Juster underveis.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">👤</span>
                <p className="font-bold text-charcoal m-0">Bare én person gjør jobben</p>
              </div>
              <p className="text-gray-600 m-0">
                Hvis bare én forelder oppdaterer, har du ikke løst problemet.
                <br /><strong>Løsning:</strong> Begge må delta. Del opp ansvaret.
              </p>
            </div>
          </div>

          <h2>Start lite, bygg videre</h2>

          <p>
            Du trenger ikke implementere alt på én gang. Her er en 
            gradvis tilnærming:
          </p>

          <div className="space-y-4 my-8 not-prose">
            {[
              { uke: 1, title: "Delt kalender", desc: "Legg inn alle aktiviteter" },
              { uke: 2, title: "Delt handleliste", desc: "Prøv å holde den oppdatert" },
              { uke: 3, title: "Middagsplanlegging", desc: "Start med 3-4 dager" },
              { uke: 4, title: "Fordel oppgaver", desc: "Gi faste ansvarsområder" },
            ].map((step) => (
              <div key={step.uke} className="flex gap-4 items-start">
                <span className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  U{step.uke}
                </span>
                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600 m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Etter en måned har du et fungerende system. Ikke perfekt, 
            men fungerende. Og det er målet.
          </p>

          <h2>Når familien protesterer</h2>

          <p>
            &quot;Vi har aldri trengt dette før!&quot; Endring møter alltid 
            motstand. Her er noen tips:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
            {[
              { icon: "💬", title: "Forklar hvorfor", desc: "Mindre stress for alle, ikke mer kontroll" },
              { icon: "🙋", title: "Involver alle", desc: "La barna velge oppgaver de vil ha" },
              { icon: "⏳", title: "Gi det tid", desc: "Det tar 2-3 uker før det føles naturlig" },
              { icon: "🎉", title: "Feir suksesser", desc: "\"Se, vi glemte ingenting denne uken!\"" },
            ].map((tip) => (
              <div key={tip.title} className="p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl mb-2">{tip.icon}</div>
                <p className="font-bold text-charcoal m-0 mb-1">{tip.title}</p>
                <p className="text-gray-600 text-sm m-0">{tip.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mt-0 text-white">
              Alt familien trenger – på ett sted
            </h3>
            <p className="text-blue-100 mb-6">
              listo.family samler middagsplan, handleliste og oppgaver i én enkel 
              app. Delt med hele familien, oppdatert i sanntid.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-cream-50 transition-colors"
            >
              Prøv listo.family gratis →
            </Link>
          </div>

          <h2>Oppsummering</h2>

          <p>
            Familieorganisering handler ikke om å være perfekt. Det 
            handler om å redusere friksjon, unngå konflikter og frigjøre 
            tid til det som faktisk betyr noe: å være sammen.
          </p>

          <p>
            Med et enkelt system på plass kan du bytte ut &quot;hvem skulle 
            gjøre det?&quot; med &quot;allerede fikset&quot;. Og det er verdt 15 
            minutter på søndag. 🙌
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

        {/* Related articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-charcoal mb-6">Les også</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blogg/smart-handleliste-app" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-blue-600">
                Smart handleliste: Aldri glem melken igjen
              </p>
              <p className="text-sm text-gray-500">5 min lesetid</p>
            </Link>
            <Link href="/blogg/gjoremal-for-barn" className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="font-medium text-charcoal group-hover:text-blue-600">
                Gjøremål for barn: Slik lærer du barna ansvar
              </p>
              <p className="text-sm text-gray-500">5 min lesetid</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
