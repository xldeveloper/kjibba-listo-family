import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 tips for å spare penger på matbudsjettet | Listo",
  description:
    "Praktiske råd for å kutte matkostnadene uten å gå på kompromiss med kvalitet eller smak. Spar tusenvis av kroner i året.",
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
          10 tips for å spare penger på matbudsjettet
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>6 min lesetid</span>
          <span>•</span>
          <time dateTime="2024-12-01">1. desember 2024</time>
        </div>

        <div className="prose prose-lg prose-orange max-w-none">
          <p className="lead text-xl text-gray-600">
            Matutgifter er en av de største postene i familiebudsjettet. Med
            noen enkle grep kan du kutte kostnadene betydelig – uten at det går
            utover smak eller kvalitet.
          </p>

          <h2>1. Planlegg ukemenyen</h2>
          <p>
            Dette er det viktigste tipset av alle. Når du vet hva du skal lage,
            kjøper du kun det du trenger. Impulshandling er matbudsjettets
            største fiende.
          </p>
          <p>
            <strong>Besparelse:</strong> Familier som planlegger sparer i
            gjennomsnitt 20-30% på mat.
          </p>

          <h2>2. Handle med liste – og hold deg til den</h2>
          <p>
            En handleliste er bare nyttig hvis du faktisk følger den. Gå til
            butikken mett, og unngå å la deg friste av tilbud du ikke trenger.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
            <p className="font-semibold text-orange-800">💡 Tips</p>
            <p className="text-orange-700">
              Organiser handlelisten etter butikkens layout. Da handler du
              raskere og unngår å vandre rundt og bli fristet.
            </p>
          </div>

          <h2>3. Sjekk kjøleskapet før du handler</h2>
          <p>
            Overraskende mange glemmer å sjekke hva de allerede har hjemme. Ta
            et raskt bilde av kjøleskapet før du drar, så unngår du å kjøpe
            dobbelt.
          </p>

          <h2>4. Kjøp sesongvarer</h2>
          <p>
            Frukt og grønnsaker i sesong er billigere og smaker bedre. Norske
            jordbær i juni er rimeligere enn importerte i januar – og mye
            bedre.
          </p>
          <ul>
            <li><strong>Vår:</strong> Asparges, rabarbra, nye poteter</li>
            <li><strong>Sommer:</strong> Bær, tomater, agurk, mais</li>
            <li><strong>Høst:</strong> Epler, plommer, kål, rotgrønnsaker</li>
            <li><strong>Vinter:</strong> Kål, gulrøtter, potet, løk</li>
          </ul>

          <h2>5. Ikke kast mat</h2>
          <p>
            Nordmenn kaster i snitt 42 kilo mat per person per år. Det tilsvarer
            tusenvis av kroner rett i søpla. Spis restene, frys ned det du ikke
            rekker å spise, og vær kreativ med det som nærmer seg datoen.
          </p>

          <h2>6. Lag mer fra bunnen</h2>
          <p>
            Ferdigmat og halvfabrikata er praktisk, men dyrt. En hjemmelaget
            tomatsaus koster en brøkdel av den ferdigkjøpte – og smaker bedre.
          </p>
          <p>
            Start enkelt: Lag egen salatdressing, marinader eller grønnsaksbuljong.
          </p>

          <h2>7. Kjøp større pakker (når det lønner seg)</h2>
          <p>
            Storpakker er ofte billigere per kilo, men bare hvis du faktisk
            bruker alt. Frys ned det du ikke bruker med en gang.
          </p>
          <p>
            <strong>Pass på:</strong> Sjekk kiloprisen – noen ganger er den
            lille pakken faktisk billigere.
          </p>

          <h2>8. Prøv billigere proteinkilder</h2>
          <p>
            Kjøtt er ofte den dyreste ingrediensen. Prøv å ha noen vegetariske
            dager, eller bruk rimeligere alternativer:
          </p>
          <ul>
            <li>Belgfrukter (linser, bønner, kikerter)</li>
            <li>Egg</li>
            <li>Kyllinglår i stedet for bryst</li>
            <li>Svinekjøtt i stedet for okse</li>
            <li>Frossen fisk</li>
          </ul>

          <h2>9. Sammenlign priser</h2>
          <p>
            Prisforskjellene mellom butikkene kan være store. Bruk apper som
            viser tilbud, eller ha en fast &quot;billigbutikk&quot; for basisvarer.
          </p>

          <h2>10. Lag lunsj hjemmefra</h2>
          <p>
            Å kjøpe lunsj ute koster fort 100-150 kr dagen. Med rester fra
            middagen eller en enkel matpakke sparer du tusenvis i måneden.
          </p>

          <h2>Oppsummering</h2>
          <p>
            Du trenger ikke gjøre alt på en gang. Start med ett eller to tips,
            og bygg på etter hvert. Selv små endringer gir stor effekt over
            tid.
          </p>

          <div className="bg-gray-100 rounded-xl p-6 my-8 text-center">
            <p className="text-lg font-semibold mb-4">
              La Listo hjelpe deg med måltidsplanlegging
            </p>
            <p className="text-gray-600 mb-4">
              Automatisk ukemeny og handleliste som hjelper deg spare tid og
              penger.
            </p>
            <Link
              href="/"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Kom i gang gratis
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
