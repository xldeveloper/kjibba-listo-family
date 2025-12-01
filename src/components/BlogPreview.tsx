"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "slik-planlegger-du-ukemenyen",
    title: "Slik planlegger du ukemenyen",
    excerpt:
      "Lær hvordan du planlegger ukens middager på under 15 minutter. Spar tid, penger og stress.",
    readTime: "5 min",
  },
  {
    slug: "spar-penger-pa-matbudsjettet",
    title: "10 tips for å spare penger på mat",
    excerpt:
      "Praktiske råd for å kutte matkostnadene uten å gå på kompromiss med kvalitet.",
    readTime: "6 min",
  },
  {
    slug: "barnevennlige-middager",
    title: "Barnevennlige middager",
    excerpt:
      "Sliter du med kresne barn? Her er oppskrifter og triks som fungerer.",
    readTime: "5 min",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-listo-100 rounded-full text-listo-700 font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Fra bloggen
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Tips for enklere måltidshverdag
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Les våre beste artikler om måltidsplanlegging, handling og
            familievennlige middager.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blogg/${article.slug}`}
              className="group bg-cream-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-listo-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-charcoal-light mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-light/70">
                  {article.readTime} lesetid
                </span>
                <span className="text-listo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Les mer
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-listo-500 text-listo-600 font-semibold rounded-full hover:bg-listo-500 hover:text-white transition-all"
          >
            Se alle artikler
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
