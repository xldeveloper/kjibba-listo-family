import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barnevennlige middager hele familien vil elske | Listo",
  description:
    "Sliter du med kresne barn? Her er oppskrifter og triks som får selv de mest skeptiske til å spise.",
};

export default function Article() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1600&q=80"
          alt="Familie som lager mat sammen med barn"
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
            Barnevennlige middager hele familien vil elske
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Familie
            </span>
            <span>5 min lesetid</span>
            <span>•</span>
            <time dateTime="2024-12-01">1. desember 2024</time>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-pink-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            &quot;Jeg liker det ikke!&quot; – Kjenner du igjen utsagnet? Å lage mat som
            både barn og voksne liker kan føles som en umulig oppgave. Men
            med riktige strategier er det enklere enn du tror.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-pink-500 rounded-full"></span>
            Hvorfor er barn så kresne?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Det er faktisk helt naturlig at barn er skeptiske til ny mat. Det
            er en overlevelsesmekanisme fra steinalderen – ukjent mat kunne
            være farlig. De fleste barn vokser av seg dette, men det krever
            tålmodighet.
          </p>

          {/* Highlight box */}
          <div className="my-10 not-prose bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-3xl">
            <div className="text-5xl font-bold mb-2">10-15</div>
            <p className="text-pink-100">
              ganger må et barn ofte smake en ny matvare før de aksepterer den
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-pink-500 rounded-full"></span>
            Gyldne regler for familievennlige middager
          </h2>

          <div className="space-y-6 my-8 not-prose">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">1. Involver barna</h3>
              <p className="text-gray-600">
                Barn som er med på å lage maten, spiser oftere maten. La dem
                vaske grønnsaker, røre i gryten, eller velge mellom to retter.
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">2. Server komponentene separat</h3>
              <p className="text-gray-600">
                Mange barn liker ikke at maten &quot;blandes&quot;. I stedet for å lage
                ferdig wok, server kylling, ris og grønnsaker ved siden av
                hverandre.
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">3. Ikke lag egen barnemat</h3>
              <p className="text-gray-600">
                Det er fristende å lage pølser til barna og noe annet til de
                voksne. Men da lærer de aldri å like variert mat.
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">4. Vær et godt forbilde</h3>
              <p className="text-gray-600">
                Barn hermer etter foreldrene. Spis den samme maten, vis at du
                liker det, og unngå å kommentere negativt.
              </p>
            </div>
          </div>

          <figure className="my-10 not-prose">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
                alt="Fargerik og barnevennlig mat"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-500 mt-3">
              Fargerik mat er mer appellerende for barn
            </figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-pink-500 rounded-full"></span>
            10 middager barn (nesten) alltid liker
          </h2>

          <div className="grid md:grid-cols-2 gap-3 my-8 not-prose">
            {[
              { num: 1, name: "Tacos", desc: "La alle bygge sin egen" },
              { num: 2, name: "Pasta med kjøttsaus", desc: "En klassiker som aldri feiler" },
              { num: 3, name: "Pannekaker", desc: "Hvem sa det bare er til frokost?" },
              { num: 4, name: "Hjemmelagde pizzaer", desc: "Barna velger egen topping" },
              { num: 5, name: "Kjøttboller med potetmos", desc: "Klassisk husmannskost" },
              { num: 6, name: "Fish and chips", desc: "Fiskepinner teller også" },
              { num: 7, name: "Kyllingsuppe", desc: "Mild og varmende" },
              { num: 8, name: "Nudler med kylling", desc: "Raskere enn takeaway" },
              { num: 9, name: "Byggerisgryten", desc: "Enkel og mettende" },
              { num: 10, name: "Grateng", desc: "Alt smaker bedre med ost" },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {item.num}
                </span>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="my-10 not-prose border-l-4 border-pink-500 pl-6 py-4 bg-gradient-to-r from-pink-50 to-transparent">
            <p className="text-xl font-medium text-gray-800 italic">
              💡 Skjult grønnsaker-trikset: Blend gulrot og squash inn i tomatsausen, eller ha spinat i smoothien!
            </p>
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-pink-500 rounded-full"></span>
            Hvordan introdusere nye matvarer
          </h2>
          <ul className="space-y-2 my-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Kombiner med noe kjent:</strong> Ny grønnsak ved siden av favorittretten</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Små porsjoner:</strong> En bitteliten smakebit er mindre skremmende</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Ingen press:</strong> &quot;Du trenger ikke spise det, men smak gjerne&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Ros forsøket:</strong> &quot;Så fint at du smakte!&quot; – uansett resultat</span>
            </li>
          </ul>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 my-12 text-center not-prose">
            <h3 className="text-2xl font-bold text-white mb-3">
              Trenger du inspirasjon til barnevennlige middager?
            </h3>
            <p className="text-pink-100 mb-6">
              Listo kan foreslå retter hele familien vil like.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg"
            >
              Prøv Listo gratis →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
