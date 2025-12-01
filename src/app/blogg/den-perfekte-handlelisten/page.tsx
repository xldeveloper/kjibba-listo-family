import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Den perfekte handlelisten – slik handler du smartere | Listo",
  description:
    "En god handleliste er nøkkelen til effektiv handling. Lær hvordan du organiserer listen for å spare tid og penger i butikken.",
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
          Den perfekte handlelisten – slik handler du smartere
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>4 min lesetid</span>
          <span>•</span>
          <time dateTime="2024-12-01">1. desember 2024</time>
        </div>

        <div className="prose prose-lg prose-orange max-w-none">
          <p className="lead text-xl text-gray-600">
            Alle vet at de burde handle med liste. Men forskjellen mellom en
            tilfeldig liste og en godt organisert liste kan spare deg 30
            minutter i butikken – hver eneste uke.
          </p>

          <h2>Hvorfor fungerer ikke vanlige handlelister?</h2>
          <p>
            De fleste skriver handlelisten i tilfeldig rekkefølge: &quot;Melk,
            brød, agurk, yoghurt, løk, ost...&quot; Resultatet? Du går frem og
            tilbake i butikken og glemmer halvparten.
          </p>

          <h2>Den optimale strukturen</h2>
          <p>
            Organiser listen etter butikkens avdelinger. De fleste butikker
            følger samme mønster:
          </p>

          <ol>
            <li><strong>Frukt og grønt</strong> – Ofte først i butikken</li>
            <li><strong>Brød og bakevarer</strong></li>
            <li><strong>Meieri</strong> – Melk, ost, yoghurt</li>
            <li><strong>Kjøtt og fisk</strong></li>
            <li><strong>Frysevarer</strong> – Ta til slutt så det holder seg kaldt</li>
            <li><strong>Tørrvarer</strong> – Pasta, ris, hermetikk</li>
            <li><strong>Husholdning</strong> – Vaskemidler, toalettpapir</li>
          </ol>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
            <p className="font-semibold text-orange-800">💡 Tips</p>
            <p className="text-orange-700">
              Lær deg rekkefølgen i din faste butikk. Etter noen ganger skriver
              du automatisk listen i riktig rekkefølge.
            </p>
          </div>

          <h2>Før du skriver listen</h2>

          <h3>1. Sjekk kjøleskap og skap</h3>
          <p>
            Ta 2 minutter og sjekk hva du har. Mange handler dobbelt fordi de
            ikke sjekker hjemme først.
          </p>

          <h3>2. Gå gjennom ukemenyen</h3>
          <p>
            Hvis du har planlagt middagene (og det bør du!), gå gjennom hver
            oppskrift og noter ingrediensene du mangler.
          </p>

          <h3>3. Tenk på frokost, lunsj og snacks</h3>
          <p>
            Det er lett å bare fokusere på middag. Husk havregryn, brød, frukt
            til matpakken og snacks til ungene.
          </p>

          <h2>Smarte handleliste-triks</h2>

          <h3>Skriv mengde</h3>
          <p>
            &quot;Løk&quot; er uklart. &quot;3 løk&quot; er presist. Da vet du nøyaktig hva du
            trenger og slipper å gjette i butikken.
          </p>

          <h3>Merk det viktigste</h3>
          <p>
            Sett en stjerne (*) ved ting du absolutt ikke kan glemme. Resten
            kan du klare deg uten til neste handletur.
          </p>

          <h3>Ha en fast basisliste</h3>
          <p>
            Noen ting kjøper du nesten hver uke: melk, brød, egg, frukt. Ha
            en fast liste du kopierer og bygger på.
          </p>

          <h3>Del listen med familien</h3>
          <p>
            Bruk en felles app eller del et dokument. Da kan alle legge til
            ting de trenger, og hvem som helst kan handle.
          </p>

          <h2>Digitalt vs. papir</h2>

          <h3>Papir:</h3>
          <ul>
            <li>✓ Enkelt og raskt</li>
            <li>✓ Ingen app å åpne</li>
            <li>✗ Glemmes hjemme</li>
            <li>✗ Vanskelig å dele</li>
          </ul>

          <h3>App:</h3>
          <ul>
            <li>✓ Alltid med deg</li>
            <li>✓ Kan deles med familien</li>
            <li>✓ Husker tidligere kjøp</li>
            <li>✗ Må ha telefon tilgjengelig</li>
          </ul>

          <h2>Unngå impulshandling</h2>
          <p>
            Butikkene er designet for å friste deg. Slik holder du deg til
            listen:
          </p>
          <ul>
            <li><strong>Handle mett:</strong> Sulten = dårlige valg</li>
            <li><strong>Sett tidsbegrensning:</strong> &quot;Jeg skal være ferdig på 20 minutter&quot;</li>
            <li><strong>Unngå spesialavdelinger:</strong> Gå ikke innom godteri&quot;gangen&quot; hvis det ikke står på listen</li>
            <li><strong>Hold deg til ytterkantene:</strong> Der er de sunne, ubearbeidede varene</li>
          </ul>

          <h2>Slik hjelper Listo</h2>
          <p>
            Listo genererer handlelisten automatisk fra ukemenyen din. Listen
            er organisert etter butikkavdeling og kan deles med hele familien.
            Du kan også legge til egne varer og huske favoritter.
          </p>

          <div className="bg-gray-100 rounded-xl p-6 my-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Slipp å skrive handleliste manuelt
            </p>
            <p className="text-gray-600 mb-4">
              Listo lager listen for deg basert på hva du skal lage.
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
