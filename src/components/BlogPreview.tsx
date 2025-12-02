"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "hva-skal-vi-ha-til-middag",
    title: "Hva skal vi ha til middag? 30 ideer",
    excerpt:
      "Sliter du med å finne ut hva dere skal ha? Her er 30 enkle middagsforslag.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    category: "Middagsideer",
    categoryColor: "bg-listo-500",
  },
  {
    slug: "vintermiddager",
    title: "15 lune vintermiddager",
    excerpt:
      "Oppdag deilige vintermiddager som varmer fra innsiden på kalde dager.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    category: "Sesong",
    categoryColor: "bg-blue-500",
  },
  {
    slug: "sunn-mat-pa-budsjett",
    title: "Sunn mat på budsjett",
    excerpt:
      "15 tips for å lage næringsrik mat uten å tømme lommeboka.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80",
    category: "Økonomi",
    categoryColor: "bg-green-500",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-listo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-charcoal-light mb-4 line-clamp-2 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-charcoal-light/70">
                    {article.readTime} lesetid
                  </span>
                  <span className="text-listo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                    Les mer
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
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
