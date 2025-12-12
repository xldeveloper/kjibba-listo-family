import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllArticles, categoryColors } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Blogg - Tips for måltidsplanlegging | listo.family",
  description:
    "Les våre beste tips om måltidsplanlegging, handlelistetriks og hvordan du sparer tid og penger på matlaging.",
};

export default function BlogPage() {
  const articles = getAllArticles();

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
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`${categoryColors[articles[0].categoryColor] || 'bg-gray-500'} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {articles[0].category}
                </span>
                {articles[0].isNew && (
                  <span className="bg-gradient-to-r from-listo-500 to-listo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NY
                  </span>
                )}
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
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`${categoryColors[article.categoryColor] || 'bg-gray-500'} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {article.category}
                    </span>
                    {article.isNew && (
                      <span className="bg-gradient-to-r from-listo-500 to-listo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        NY
                      </span>
                    )}
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
