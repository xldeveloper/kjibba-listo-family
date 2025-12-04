import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg - Tips for måltidsplanlegging | listo.family",
  description:
    "Les våre beste tips om måltidsplanlegging, handlelistetriks og hvordan du sparer tid og penger på matlaging.",
};

const articles = [
  {
    slug: "dele-handleliste-familie",
    title: "Dele handlelisten med familien: Slik fungerer det",
    excerpt:
      "Slutt på dobbelthandling og glemte varer. Lær hvordan en delt handleliste gjør familielivet enklere.",
    date: "2024-12-06",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    category: "Handleliste",
    categoryColor: "teal",
  },
  {
    slug: "familieorganisering",
    title: "Fra kaos til kontroll: Familieorganisering i 2025",
    excerpt:
      "Hvordan moderne familier holder orden på alt – fra middager til aktiviteter. Praktiske tips for travel hverdag.",
    date: "2024-12-05",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    category: "Organisering",
    categoryColor: "blue",
  },
  {
    slug: "gjoremal-for-barn",
    title: "Gjøremål for barn: Slik lærer du barna ansvar hjemme",
    excerpt:
      "Barn som bidrar hjemme lærer viktige ferdigheter. Her er hvordan du fordeler oppgaver og gjør det gøy.",
    date: "2024-12-04",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
    category: "Familie",
    categoryColor: "purple",
  },
  {
    slug: "smart-handleliste-app",
    title: "Smart handleliste: Aldri glem melken igjen",
    excerpt:
      "En smart handleliste-app kan spare deg for tid, penger og frustrasjon. Slik velger du riktig app for familien.",
    date: "2024-12-03",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    category: "Handleliste",
    categoryColor: "teal",
  },
  {
    slug: "hva-skal-vi-ha-til-middag",
    title: "Hva skal vi ha til middag? 30 enkle middagsideer",
    excerpt:
      "Sliter du med å finne ut hva dere skal ha til middag? Her er 30 enkle middagsforslag som hele familien vil elske.",
    date: "2024-12-02",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    category: "Middagsideer",
    categoryColor: "listo",
  },
  {
    slug: "vintermiddager",
    title: "Vintermiddager: 15 lune retter for kalde dager",
    excerpt:
      "Oppdag 15 deilige vintermiddager som varmer fra innsiden. Fra klassiske gryteretter til moderne favoritter.",
    date: "2024-12-02",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    category: "Sesong",
    categoryColor: "blue",
  },
  {
    slug: "sunn-mat-pa-budsjett",
    title: "Sunn mat på budsjett: 15 tips for å spise sunt og billig",
    excerpt:
      "Lær hvordan du lager næringsrik, velsmakende mat som familien elsker – uten å tømme lommeboka.",
    date: "2024-12-02",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
    category: "Økonomi",
    categoryColor: "green",
  },
  {
    slug: "slik-planlegger-du-ukemenyen",
    title: "Slik planlegger du ukemenyen – en komplett guide",
    excerpt:
      "Lær hvordan du planlegger ukens middager på under 15 minutter. Spar tid, penger og stress med disse enkle stegene.",
    date: "2024-12-01",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    category: "Planlegging",
    categoryColor: "orange",
  },
  {
    slug: "spar-penger-pa-matbudsjettet",
    title: "10 tips for å spare penger på matbudsjettet",
    excerpt:
      "Praktiske råd for å kutte matkostnadene uten å gå på kompromiss med kvalitet eller smak.",
    date: "2024-12-01",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    category: "Økonomi",
    categoryColor: "green",
  },
  {
    slug: "barnevennlige-middager",
    title: "Barnevennlige middager hele familien vil elske",
    excerpt:
      "Sliter du med kresne barn? Her er oppskrifter og triks som får selv de mest skeptiske til å spise.",
    date: "2024-12-01",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
    category: "Familie",
    categoryColor: "pink",
  },
  {
    slug: "batch-cooking-guide",
    title: "Batch cooking: Lag mat for en hel uke på én dag",
    excerpt:
      "Lær kunsten å forberede måltider på forhånd. Perfekt for travle familier som vil spise hjemmelaget mat.",
    date: "2024-12-01",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    category: "Meal Prep",
    categoryColor: "purple",
  },
  {
    slug: "den-perfekte-handlelisten",
    title: "Den perfekte handlelisten – slik handler du smartere",
    excerpt:
      "En god handleliste er nøkkelen til effektiv handling. Lær hvordan du organiserer listen for å spare tid i butikken.",
    date: "2024-12-01",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    category: "Handling",
    categoryColor: "blue",
  },
];

const categoryColors: Record<string, string> = {
  orange: "bg-orange-500",
  green: "bg-green-500",
  pink: "bg-pink-500",
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  listo: "bg-listo-500",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/"
            className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            <span>←</span> Tilbake til forsiden
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blogg</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl">
            Tips og triks for enklere måltidsplanlegging, smartere handling og mer tid til det som betyr noe.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Featured Article */}
        <Link href={`/blogg/${articles[0].slug}`} className="block group mb-16">
          <article className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`${categoryColors[articles[0].categoryColor]} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {articles[0].category}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{articles[0].readTime} lesetid</span>
                <span>•</span>
                <time dateTime={articles[0].date}>
                  {new Date(articles[0].date).toLocaleDateString("nb-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">{articles[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-4 transition-all">
                Les artikkelen <span>→</span>
              </span>
            </div>
          </article>
        </Link>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.slice(1).map((article) => (
            <Link href={`/blogg/${article.slug}`} key={article.slug} className="group">
              <article className="h-full">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${categoryColors[article.categoryColor]} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span>{article.readTime} lesetid</span>
                  <span>•</span>
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("nb-NO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600">{article.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
