import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batch cooking: Lag mat for en hel uke på én dag | Listo",
  description:
    "Lær kunsten å forberede måltider på forhånd. Perfekt for travle familier som vil spise hjemmelaget mat hver dag.",
};

export default function Article() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link
          href="/blogg"
          className="text-orange-600 hover:text-orange-700 mb-8 inline-block"
        >
          ← Tilbake til bloggen
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Batch cooking: Lag mat for en hel uke på én dag
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>7 min lesetid</span>
          <span>•</span>
          <time dateTime="2024-12-01">1. desember 2024</time>
        </div>

        <div className="prose prose-lg prose-orange max-w-none">
          <p className="lead text-xl text-gray-600">
            Tenk deg å komme hjem fra jobb og ha ferdig middag klar på 10
            minutter. Med batch cooking er det mulig – og enklere enn du
            tror.
          </p>

          <h2>Hva er batch cooking?</h2>
          <p>
            Batch cooking handler om å forberede store mengder mat på én gang,
            som du fordeler på flere måltider gjennom uken. Det er ikke det
            samme som meal prep der alt er ferdig i bokser – her forbereder
            du komponenter som gjør hverdagsmiddagene raskere.
          </p>

          <h2>Fordelene med batch cooking</h2>
          <ul>
            <li>
              <strong>Spar tid:</strong> 2-3 timer på søndag = 5+ timer spart
              i uken
            </li>
            <li>
              <strong>Mindre stress:</strong> Ingen panisk &quot;hva skal vi spise?&quot;
            </li>
            <li>
              <strong>Sunnere valg:</strong> Hjemmelaget mat i stedet for
              takeaway
            </li>
            <li>
              <strong>Billigere:</strong> Mindre matsvinn og færre impulsive
              kjøp
            </li>
          </ul>

          <h2>Kom i gang: Nybegynnerguiden</h2>

          <h3>Steg 1: Velg din batch cooking-dag</h3>
          <p>
            De fleste velger søndag, men velg en dag som passer deg. Du
            trenger 2-3 timer sammenhengende tid.
          </p>

          <h3>Steg 2: Planlegg ukemenyen</h3>
          <p>
            Bestem hva du skal lage, og se etter overlapp. Kan du bruke
            samme grunnlag til flere retter?
          </p>
          <ul>
            <li>Stekt kylling → Rester til salat og wraps</li>
            <li>Kjøttdeig → Tacos tirsdag, pasta torsdag</li>
            <li>Kokt ris → Wok onsdag, ris til fredag</li>
          </ul>

          <h3>Steg 3: Handle smart</h3>
          <p>
            Kjøp alt du trenger på én handletur. Tenk på:
          </p>
          <ul>
            <li>Proteiner som tåler noen dager i kjøleskapet</li>
            <li>Grønnsaker som holder seg (kål, gulrøtter, løk)</li>
            <li>Basisvarer (ris, pasta, belgfrukter)</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
            <p className="font-semibold text-orange-800">💡 Pro-tips</p>
            <p className="text-orange-700">
              Ikke forbered alt til ferdig. Grønnsaker til salat bør kuttes
              samme dag, mens ris og proteiner holder seg fint i 3-4 dager.
            </p>
          </div>

          <h2>Hva bør du batch cooke?</h2>

          <h3>Perfekt for batch cooking:</h3>
          <ul>
            <li><strong>Proteiner:</strong> Kylling, kjøttboller, pulled pork, kokte egg</li>
            <li><strong>Karbohydrater:</strong> Ris, quinoa, pasta, bakte poteter</li>
            <li><strong>Sauser:</strong> Tomatsaus, pesto, dressinger</li>
            <li><strong>Supper og gryteretter:</strong> Smaker ofte bedre dag 2</li>
            <li><strong>Belgfrukter:</strong> Kikerter, linser, bønner</li>
          </ul>

          <h3>Unngå å batch cooke:</h3>
          <ul>
            <li>Sprø ting (blir myke)</li>
            <li>Fersk salat (visner)</li>
            <li>Stekt fisk (tørker ut)</li>
            <li>Pasta i saus (blir grøtete)</li>
          </ul>

          <h2>En typisk batch cooking-søndag</h2>

          <p><strong>Tid: 2,5 timer</strong></p>

          <ol>
            <li>
              <strong>0:00</strong> – Sett på ovnen. Legg kyllinglår og
              rotgrønnsaker på brett.
            </li>
            <li>
              <strong>0:10</strong> – Kok opp stor gryte ris.
            </li>
            <li>
              <strong>0:15</strong> – Start tomatsaus på komfyren.
            </li>
            <li>
              <strong>0:30</strong> – Form kjøttboller, legg på brett.
            </li>
            <li>
              <strong>0:45</strong> – Bytt ut kylling med kjøttboller i ovnen.
            </li>
            <li>
              <strong>1:00</strong> – Del opp kylling, porsjonér.
            </li>
            <li>
              <strong>1:15</strong> – Kok egg og pasta.
            </li>
            <li>
              <strong>1:45</strong> – Porsjonér alt i beholdere.
            </li>
            <li>
              <strong>2:00</strong> – Rydd kjøkkenet, skriv lapper på beholdere.
            </li>
          </ol>

          <h2>Oppbevaring og holdbarhet</h2>

          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Matvare</th>
                <th className="text-left">Kjøleskap</th>
                <th className="text-left">Fryser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kokt kylling</td>
                <td>3-4 dager</td>
                <td>2-3 måneder</td>
              </tr>
              <tr>
                <td>Kjøttboller</td>
                <td>3-4 dager</td>
                <td>2-3 måneder</td>
              </tr>
              <tr>
                <td>Kokt ris</td>
                <td>3-4 dager</td>
                <td>1 måned</td>
              </tr>
              <tr>
                <td>Tomatsaus</td>
                <td>5-7 dager</td>
                <td>3 måneder</td>
              </tr>
              <tr>
                <td>Suppe/gryte</td>
                <td>3-4 dager</td>
                <td>2-3 måneder</td>
              </tr>
            </tbody>
          </table>

          <h2>Slik gjør Listo batch cooking enklere</h2>
          <p>
            Med Listo kan du planlegge uken med retter som deler ingredienser.
            Appen foreslår automatisk hvilke komponenter du kan batch cooke
            og genererer handleliste tilpasset metoden.
          </p>

          <div className="bg-gray-100 rounded-xl p-6 my-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Klar for enklere middagshverdag?
            </p>
            <Link
              href="/"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Prøv Listo gratis
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
