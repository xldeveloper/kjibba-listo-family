import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barnevennlige middager hele familien vil elske | Listo",
  description:
    "Sliter du med kresne barn? Her er oppskrifter og triks som får selv de mest skeptiske til å spise.",
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
          Barnevennlige middager hele familien vil elske
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>5 min lesetid</span>
          <span>•</span>
          <time dateTime="2024-12-01">1. desember 2024</time>
        </div>

        <div className="prose prose-lg prose-orange max-w-none">
          <p className="lead text-xl text-gray-600">
            &quot;Jeg liker det ikke!&quot; – Kjenner du igjen utsagnet? Å lage mat som
            både barn og voksne liker kan føles som en umulig oppgave. Men
            med riktige strategier er det enklere enn du tror.
          </p>

          <h2>Hvorfor er barn så kresne?</h2>
          <p>
            Det er faktisk helt naturlig at barn er skeptiske til ny mat. Det
            er en overlevelsesmekanisme fra steinalderen – ukjent mat kunne
            være farlig. De fleste barn vokser av seg dette, men det krever
            tålmodighet.
          </p>
          <p>
            <strong>Visste du?</strong> Barn må ofte smake en ny matvare 10-15
            ganger før de aksepterer den.
          </p>

          <h2>Gyldne regler for familievennlige middager</h2>

          <h3>1. Involver barna</h3>
          <p>
            Barn som er med på å lage maten, spiser oftere maten. La dem
            vaske grønnsaker, røre i gryten, eller velge mellom to retter.
          </p>

          <h3>2. Server komponentene separat</h3>
          <p>
            Mange barn liker ikke at maten &quot;blandes&quot;. I stedet for å lage
            ferdig wok, server kylling, ris og grønnsaker ved siden av
            hverandre. La barna sette sammen selv.
          </p>

          <h3>3. Ikke lag egen barnemat</h3>
          <p>
            Det er fristende å lage pølser til barna og noe annet til de
            voksne. Men da lærer de aldri å like variert mat. Lag heller
            én middag som fungerer for alle, med noen tilpasninger.
          </p>

          <h3>4. Vær et godt forbilde</h3>
          <p>
            Barn hermer etter foreldrene. Spis den samme maten, vis at du
            liker det, og unngå å kommentere negativt på egen mat.
          </p>

          <h2>10 middager barn (nesten) alltid liker</h2>

          <ol>
            <li>
              <strong>Tacos</strong> – La alle bygge sin egen
            </li>
            <li>
              <strong>Pasta med kjøttsaus</strong> – En klassiker som aldri
              feiler
            </li>
            <li>
              <strong>Pannekaker</strong> – Hvem sa at det bare er til frokost?
            </li>
            <li>
              <strong>Hjemmelagde pizzaer</strong> – Barna velger egen topping
            </li>
            <li>
              <strong>Kjøttboller med potetmos</strong> – Klassisk husmannskost
            </li>
            <li>
              <strong>Fish and chips</strong> – Fiskepinner teller også
            </li>
            <li>
              <strong>Kyllingsuppe</strong> – Mild og varmende
            </li>
            <li>
              <strong>Nudler med kylling</strong> – Raskere enn takeaway
            </li>
            <li>
              <strong>Byggerisgryten</strong> – Enkel og mettende
            </li>
            <li>
              <strong>Grateng</strong> – Alt smaker bedre med ost på toppen
            </li>
          </ol>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
            <p className="font-semibold text-orange-800">💡 Skjult grønnsaker-trikset</p>
            <p className="text-orange-700">
              Blend gulrot og squash inn i tomatsausen, eller ha spinat i
              smoothien. Perfekt for å få inn ekstra grønnsaker uten klaging.
            </p>
          </div>

          <h2>Hvordan introdusere nye matvarer</h2>
          <p>
            Når du vil prøve noe nytt, følg disse stegene:
          </p>
          <ul>
            <li>
              <strong>Kombiner med noe kjent:</strong> Ny grønnsak ved siden
              av favorittretten
            </li>
            <li>
              <strong>Små porsjoner:</strong> En bitteliten smakebit er mindre
              skremmende
            </li>
            <li>
              <strong>Ingen press:</strong> &quot;Du trenger ikke spise det, men
              smak gjerne&quot;
            </li>
            <li>
              <strong>Ros forsøket:</strong> &quot;Så fint at du smakte!&quot; – uansett
              resultat
            </li>
          </ul>

          <h2>Når barn virkelig nekter</h2>
          <p>
            Noen ganger hjelper ingenting. Da er det greit å velge kampene
            sine. Sørg for at det alltid er noe på bordet barnet kan spise
            (brød, ris, pasta), men ikke lag alternativ middag.
          </p>
          <p>
            Sultne barn spiser – og ingen barn har tatt skade av å gå litt
            sultne til sengs en gang eller to.
          </p>

          <h2>La Listo hjelpe</h2>
          <p>
            Med Listo kan du markere retter som barnevennlige og få forslag
            tilpasset hele familien. Appen husker hva barna liker og foreslår
            lignende oppskrifter.
          </p>

          <div className="bg-gray-100 rounded-xl p-6 my-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Trenger du inspirasjon til barnevennlige middager?
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
