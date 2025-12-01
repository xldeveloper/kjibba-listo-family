import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg - Tips for måltidsplanlegging | Listo",
  description:
    "Les våre beste tips om måltidsplanlegging, handlelistetriks og hvordan du sparer tid og penger på matlaging.",
};

const articles = [
  {
    slug: "slik-planlegger-du-ukemenyen",
    title: "Slik planlegger du ukemenyen – en komplett guide",
    excerpt:
      "Lær hvordan du planlegger ukens middager på under 15 minutter. Spar tid, penger og stress med disse enkle stegene.",
    date: "2024-12-01",
    readTime: "5 min",
  },
  {
    slug: "spar-penger-pa-matbudsjettet",
    title: "10 tips for å spare penger på matbudsjettet",
    excerpt:
      "Praktiske råd for å kutte matkostnadene uten å gå på kompromiss med kvalitet eller smak.",
    date: "2024-12-01",
    readTime: "6 min",
  },
  {
    slug: "barnevennlige-middager",
    title: "Barnevennlige middager hele familien vil elske",
    excerpt:
      "Sliter du med kresne barn? Her er oppskrifter og triks som får selv de mest skeptiske til å spise.",
    date: "2024-12-01",
    readTime: "5 min",
  },
  {
    slug: "batch-cooking-guide",
    title: "Batch cooking: Lag mat for en hel uke på én dag",
    excerpt:
      "Lær kunsten å forberede måltider på forhånd. Perfekt for travle familier som vil spise hjemmelaget mat.",
    date: "2024-12-01",
    readTime: "7 min",
  },
  {
    slug: "den-perfekte-handlelisten",
    title: "Den perfekte handlelisten – slik handler du smartere",
    excerpt:
      "En god handleliste er nøkkelen til effektiv handling. Lær hvordan du organiserer listen for å spare tid i butikken.",
    date: "2024-12-01",
    readTime: "4 min",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-700 mb-8 inline-block"
        >
          ← Tilbake til forsiden
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blogg</h1>
        <p className="text-xl text-gray-600 mb-12">
          Tips og triks for enklere måltidsplanlegging og smartere handling.
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/blogg/${article.slug}`}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
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
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
