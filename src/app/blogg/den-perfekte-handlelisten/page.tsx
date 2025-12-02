import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Den perfekte handlelisten – slik handler du smartere | Listo",
  description:
    "En god handleliste er nøkkelen til effektiv handling. Lær hvordan du organiserer listen for å spare tid og penger i butikken.",
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=80"
          alt="Handleliste og dagligvarer"
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
            Den perfekte handlelisten – slik handler du smartere
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Handling
            </span>
            <span>4 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-01">1. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-blue-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Alle vet at de burde handle med liste. Men forskjellen mellom en
            tilfeldig liste og en godt organisert liste kan spare deg 30
            minutter i butikken – hver eneste uke.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Hvorfor fungerer ikke vanlige handlelister?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            De fleste skriver handlelisten i tilfeldig rekkefølge: &quot;Melk,
            brød, agurk, yoghurt, løk, ost...&quot; Resultatet? Du går frem og
            tilbake i butikken og glemmer halvparten.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Den optimale strukturen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Organiser listen etter butikkens avdelinger. De fleste butikker
            følger samme mønster:
          </p>

          {/* Store layout */}
          <div className="my-10 not-prose">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🥬", name: "Frukt & grønt", order: 1, color: "green" },
                { icon: "🥖", name: "Brød", order: 2, color: "amber" },
                { icon: "🥛", name: "Meieri", order: 3, color: "blue" },
                { icon: "🥩", name: "Kjøtt & fisk", order: 4, color: "red" },
                { icon: "🧊", name: "Frysevarer", order: 5, color: "cyan" },
                { icon: "🍝", name: "Tørrvarer", order: 6, color: "orange" },
                { icon: "🧴", name: "Husholdning", order: 7, color: "purple" },
              ].map((item) => (
                <div key={item.order} className={`bg-${item.color}-50 p-4 rounded-xl text-center relative`}>
                  <span className="absolute -top-2 -left-2 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {item.order}
                  </span>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-sm font-medium text-gray-800">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="my-10 not-prose border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent">
            <p className="text-xl font-medium text-gray-800 italic">
              &quot;Lær deg rekkefølgen i din faste butikk. Etter noen ganger skriver du automatisk listen i riktig rekkefølge.&quot;
            </p>
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Før du skriver listen
          </h2>

          <div className="space-y-4 my-8 not-prose">
            <div className="flex gap-4 items-start bg-gray-50 p-5 rounded-xl">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">1</span>
              <div>
                <h3 className="font-bold text-gray-900">Sjekk kjøleskap og skap</h3>
                <p className="text-gray-600 text-sm">Ta 2 minutter og sjekk hva du har. Mange handler dobbelt fordi de ikke sjekker hjemme først.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-50 p-5 rounded-xl">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-gray-900">Gå gjennom ukemenyen</h3>
                <p className="text-gray-600 text-sm">Gå gjennom hver oppskrift og noter ingrediensene du mangler.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-50 p-5 rounded-xl">
              <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-gray-900">Tenk på frokost, lunsj og snacks</h3>
                <p className="text-gray-600 text-sm">Husk havregryn, brød, frukt til matpakken og snacks til ungene.</p>
              </div>
            </div>
          </div>

          <figure className="my-10 not-prose">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
                alt="Organisert dagligvarebutikk"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              En organisert handleliste gjør butikkbesøket raskere
            </figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Smarte handleliste-triks
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">📝 Skriv mengde</h3>
              <p className="text-gray-600 text-sm">&quot;Løk&quot; er uklart. &quot;3 løk&quot; er presist. Da vet du nøyaktig hva du trenger.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">⭐ Merk det viktigste</h3>
              <p className="text-gray-600 text-sm">Sett en stjerne ved ting du absolutt ikke kan glemme.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">📋 Fast basisliste</h3>
              <p className="text-gray-600 text-sm">Ha en fast liste med ukentlige kjøp du kopierer og bygger på.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">👨‍👩‍👧 Del med familien</h3>
              <p className="text-gray-600 text-sm">Bruk en felles app så alle kan legge til ting de trenger.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Digitalt vs. papir
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="border-2 border-gray-200 p-6 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">📄 Papir</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-green-600"><span>✓</span> Enkelt og raskt</li>
                <li className="flex items-center gap-2 text-green-600"><span>✓</span> Ingen app å åpne</li>
                <li className="flex items-center gap-2 text-red-500"><span>✗</span> Glemmes hjemme</li>
                <li className="flex items-center gap-2 text-red-500"><span>✗</span> Vanskelig å dele</li>
              </ul>
            </div>
            <div className="border-2 border-blue-500 bg-blue-50 p-6 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">📱 App</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-green-600"><span>✓</span> Alltid med deg</li>
                <li className="flex items-center gap-2 text-green-600"><span>✓</span> Kan deles med familien</li>
                <li className="flex items-center gap-2 text-green-600"><span>✓</span> Husker tidligere kjøp</li>
                <li className="flex items-center gap-2 text-red-500"><span>✗</span> Må ha telefon tilgjengelig</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Unngå impulshandling
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Butikkene er designet for å friste deg. Slik holder du deg til listen:
          </p>
          <ul className="space-y-2 my-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Handle mett:</strong> Sulten = dårlige valg</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Sett tidsbegrensning:</strong> &quot;Jeg skal være ferdig på 20 minutter&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Unngå fristelser:</strong> Gå ikke innom godterigangen hvis det ikke står på listen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Hold deg til ytterkantene:</strong> Der er de sunne, ubearbeidede varene</span>
            </li>
          </ul>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 my-12 text-center not-prose">
            <h3 className="text-2xl font-bold text-white mb-3">
              Slipp å skrive handleliste manuelt
            </h3>
            <p className="text-blue-100 mb-6">
              Listo lager listen automatisk fra ukemenyen din, organisert etter butikkavdeling.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Prøv Listo gratis →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
