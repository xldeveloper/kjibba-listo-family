import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slik planlegger du ukemenyen – en komplett guide | Listo",
  description:
    "Lær hvordan du planlegger ukens middager på under 15 minutter. Spar tid, penger og stress med disse enkle stegene.",
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
          Slik planlegger du ukemenyen – en komplett guide
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>5 min lesetid</span>
          <span>•</span>
          <time dateTime="2024-12-01">1. desember 2024</time>
        </div>

        <div className="prose prose-lg prose-orange max-w-none">
          <p className="lead text-xl text-gray-600">
            Spørsmålet &quot;Hva skal vi ha til middag?&quot; er kanskje det mest stilte
            spørsmålet i norske hjem. Med en god ukemeny slipper du å tenke på
            det – og du sparer både tid og penger.
          </p>

          <h2>Hvorfor planlegge ukemenyen?</h2>
          <p>
            En gjennomtenkt ukemeny gir deg flere fordeler enn du kanskje tror:
          </p>
          <ul>
            <li>
              <strong>Spar tid:</strong> Ingen mer grubling foran kjøleskapet
              klokken 17
            </li>
            <li>
              <strong>Spar penger:</strong> Du handler kun det du trenger og
              kaster mindre mat
            </li>
            <li>
              <strong>Spis sunnere:</strong> Med en plan er det lettere å få inn
              variert kost
            </li>
            <li>
              <strong>Mindre stress:</strong> Du vet alltid hva som skal på
              bordet
            </li>
          </ul>

          <h2>Steg 1: Finn din planleggingsdag</h2>
          <p>
            Velg en fast dag i uken for planlegging. Mange foretrekker søndag
            kveld eller mandag morgen. Det viktigste er at det passer inn i din
            rutine.
          </p>
          <p>
            Sett av 10-15 minutter – det er alt du trenger når du får øvelse.
          </p>

          <h2>Steg 2: Sjekk kalenderen</h2>
          <p>Før du planlegger, ta en titt på ukens aktiviteter:</p>
          <ul>
            <li>Hvilke dager er travle med aktiviteter?</li>
            <li>Har dere gjester eller skal bort?</li>
            <li>Er det noen som spiser borte?</li>
          </ul>
          <p>
            Travle dager krever enkle middager. Rolige dager kan du eksperimentere mer.
          </p>

          <h2>Steg 3: Bygg menyen din</h2>
          <p>En god ukemeny har variasjon. Tenk på:</p>
          <ul>
            <li>
              <strong>Proteinkilder:</strong> Veksle mellom kjøtt, fisk, kylling
              og vegetar
            </li>
            <li>
              <strong>Tilberedningsmetoder:</strong> Gryte, ovn, panne, wok
            </li>
            <li>
              <strong>Tidskrevende vs. enkle:</strong> Balanser mellom dem
            </li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
            <p className="font-semibold text-orange-800">💡 Tips fra Listo</p>
            <p className="text-orange-700">
              Ha 3-4 &quot;go-to&quot; middager som familien alltid liker. Disse kan du
              falle tilbake på når inspirasjonen mangler.
            </p>
          </div>

          <h2>Steg 4: Lag handlelisten</h2>
          <p>
            Når menyen er klar, er det tid for handlelisten. Gå gjennom hver
            oppskrift og noter ingrediensene du mangler. Organiser listen etter
            butikkens avdelinger for raskere handling.
          </p>

          <h2>Steg 5: Gjør det til en vane</h2>
          <p>
            De første ukene krever litt mer innsats, men etter 3-4 uker blir det
            en naturlig del av rutinen. Snart vil du lure på hvordan du klarte
            deg uten!
          </p>

          <h2>Slik hjelper Listo deg</h2>
          <p>
            Med Listo-appen blir måltidsplanlegging enda enklere. Appen kan:
          </p>
          <ul>
            <li>Foreslå middager basert på familiens preferanser</li>
            <li>Automatisk generere handlelister fra ukemenyen</li>
            <li>Tilpasse seg sesong og tilbud</li>
            <li>Huske hva familien liker (og ikke liker)</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-6 my-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Klar for enklere måltidsplanlegging?
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
