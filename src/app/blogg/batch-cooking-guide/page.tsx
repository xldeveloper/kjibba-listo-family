import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batch cooking: Lag mat for en hel uke på én dag | Listo",
  description:
    "Lær kunsten å forberede måltider på forhånd. Perfekt for travle familier som vil spise hjemmelaget mat hver dag.",
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
          alt="Meal prep med matbokser og forberedt mat"
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
            Batch cooking: Lag mat for en hel uke på én dag
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Meal Prep
            </span>
            <span>7 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-01">1. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-purple-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Tenk deg å komme hjem fra jobb og ha ferdig middag klar på 10
            minutter. Med batch cooking er det mulig – og enklere enn du
            tror.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            Hva er batch cooking?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Batch cooking handler om å forberede store mengder mat på én gang,
            som du fordeler på flere måltider gjennom uken. Du forbereder
            komponenter som gjør hverdagsmiddagene raskere.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-4 my-10 not-prose">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-bold text-gray-900 mb-1">Spar tid</h3>
              <p className="text-gray-600 text-sm">2-3 timer søndag = 5+ timer spart i uken</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="text-3xl mb-2">😌</div>
              <h3 className="font-bold text-gray-900 mb-1">Mindre stress</h3>
              <p className="text-gray-600 text-sm">Ingen panisk &quot;hva skal vi spise?&quot;</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="text-3xl mb-2">🥗</div>
              <h3 className="font-bold text-gray-900 mb-1">Sunnere valg</h3>
              <p className="text-gray-600 text-sm">Hjemmelaget mat i stedet for takeaway</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold text-gray-900 mb-1">Billigere</h3>
              <p className="text-gray-600 text-sm">Mindre matsvinn og færre impulsive kjøp</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            Kom i gang: Nybegynnerguiden
          </h2>

          <div className="space-y-6 my-8 not-prose">
            <div className="flex gap-4 items-start">
              <span className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">1</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Velg din batch cooking-dag</h3>
                <p className="text-gray-600">De fleste velger søndag. Du trenger 2-3 timer sammenhengende tid.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Planlegg ukemenyen</h3>
                <p className="text-gray-600">Se etter overlapp. Kan du bruke samme grunnlag til flere retter?</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Handle smart</h3>
                <p className="text-gray-600">Kjøp alt du trenger på én handletur. Tenk på proteiner og basisvarer.</p>
              </div>
            </div>
          </div>

          <figure className="my-10 not-prose">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80"
                alt="Ferske ingredienser til batch cooking"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Ferske ingredienser klar for en produktiv matlagingsøkt
            </figcaption>
          </figure>

          <blockquote className="my-10 not-prose border-l-4 border-purple-500 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent">
            <p className="text-xl font-medium text-gray-800 italic">
              &quot;Ikke forbered alt til ferdig. Grønnsaker til salat bør kuttes samme dag, mens ris og proteiner holder seg fint i 3-4 dager.&quot;
            </p>
            <cite className="text-purple-600 text-sm font-semibold mt-2 block">— Pro-tips</cite>
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            Hva bør du batch cooke?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-xl">✓</span> Perfekt for batch cooking
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Proteiner: Kylling, kjøttboller, pulled pork</li>
                <li>• Karbohydrater: Ris, quinoa, bakte poteter</li>
                <li>• Sauser: Tomatsaus, pesto, dressinger</li>
                <li>• Supper og gryteretter</li>
                <li>• Belgfrukter: Kikerter, linser, bønner</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-2xl">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-xl">✗</span> Unngå å batch cooke
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Sprø ting (blir myke)</li>
                <li>• Fersk salat (visner)</li>
                <li>• Stekt fisk (tørker ut)</li>
                <li>• Pasta i saus (blir grøtete)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            En typisk batch cooking-søndag
          </h2>

          <div className="my-8 not-prose bg-gray-50 rounded-2xl p-6">
            <div className="text-center mb-6">
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Tidslinje: 2,5 timer
              </span>
            </div>
            <div className="space-y-4">
              {[
                { time: "0:00", task: "Sett på ovnen. Legg kyllinglår og rotgrønnsaker på brett." },
                { time: "0:10", task: "Kok opp stor gryte ris." },
                { time: "0:15", task: "Start tomatsaus på komfyren." },
                { time: "0:30", task: "Form kjøttboller, legg på brett." },
                { time: "0:45", task: "Bytt ut kylling med kjøttboller i ovnen." },
                { time: "1:00", task: "Del opp kylling, porsjonér." },
                { time: "1:15", task: "Kok egg og pasta." },
                { time: "1:45", task: "Porsjonér alt i beholdere." },
                { time: "2:00", task: "Rydd kjøkkenet, skriv lapper på beholdere." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-mono text-purple-600 font-bold w-12">{item.time}</span>
                  <div className="flex-1 bg-white p-3 rounded-lg shadow-sm text-sm">{item.task}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            Oppbevaring og holdbarhet
          </h2>

          <div className="my-8 not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-purple-100">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">Matvare</th>
                  <th className="text-left p-3 font-semibold">Kjøleskap</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Fryser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white"><td className="p-3">Kokt kylling</td><td className="p-3">3-4 dager</td><td className="p-3">2-3 måneder</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Kjøttboller</td><td className="p-3">3-4 dager</td><td className="p-3">2-3 måneder</td></tr>
                <tr className="bg-white"><td className="p-3">Kokt ris</td><td className="p-3">3-4 dager</td><td className="p-3">1 måned</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Tomatsaus</td><td className="p-3">5-7 dager</td><td className="p-3">3 måneder</td></tr>
                <tr className="bg-white"><td className="p-3 rounded-bl-lg">Suppe/gryte</td><td className="p-3">3-4 dager</td><td className="p-3 rounded-br-lg">2-3 måneder</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl p-8 my-12 text-center not-prose">
            <h3 className="text-2xl font-bold text-white mb-3">
              Klar for enklere middagshverdag?
            </h3>
            <p className="text-purple-100 mb-6">
              Listo hjelper deg planlegge ukemenyen og genererer handlelisten automatisk.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors shadow-lg"
            >
              Prøv Listo gratis →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
