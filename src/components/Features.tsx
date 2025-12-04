"use client";

import {
  Calendar,
  CalendarDays,
  ShoppingCart,
  BookOpen,
  Users,
  Sparkles,
  Bell,
  CheckSquare,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Ukeplanlegger",
    description:
      "Se hele uken i ett blikk: middager, aktiviteter og oppgaver. Dra og slipp for å organisere.",
    color: "salmon",
  },
  {
    icon: CheckSquare,
    title: "Oppgaveliste",
    description:
      "Fordel hverdagsoppgaver mellom familiemedlemmer. \"Ta ut søpla\", \"Vaske klær\" – alltid oversikt over hvem som gjør hva.",
    color: "listo",
  },
  {
    icon: CalendarDays,
    title: "Aktivitetskalender",
    description:
      "Fotballtrening, foreldremøte, bursdager – hold styr på familiens faste og spontane aktiviteter.",
    color: "sky",
  },
  {
    icon: ShoppingCart,
    title: "Smart handleliste",
    description:
      "Automatisk sortert etter butikkens layout. Hele familien kan legge til varer i sanntid.",
    color: "salmon",
  },
  {
    icon: BookOpen,
    title: "Oppskriftsbibliotek",
    description:
      "Importer fra hvilken som helst nettside eller ta bilde av kokeboken. AI-en digitaliserer alt.",
    color: "magic",
  },
  {
    icon: Users,
    title: "Familiesynk",
    description:
      "Alle ser endringer umiddelbart. Tildel ansvar for middager, oppgaver og aktiviteter.",
    color: "listo",
  },
  {
    icon: Sparkles,
    title: "AI-forslag",
    description:
      "Personlige måltidsforslag basert på hva dere liker, aktiviteter den dagen, og hvor mye tid dere har.",
    color: "magic",
  },
  {
    icon: Bell,
    title: "Smarte påminnelser",
    description:
      "Morgenbriefing med dagens program. Påminnelser om oppgaver og aktiviteter. (Kommer snart)",
    color: "alert",
  },
];

const colorClasses = {
  salmon: {
    bg: "bg-salmon-100",
    icon: "text-salmon-600",
    border: "border-salmon-200",
  },
  sky: {
    bg: "bg-sky-100",
    icon: "text-sky-600",
    border: "border-sky-200",
  },
  magic: {
    bg: "bg-magic-100",
    icon: "text-magic-600",
    border: "border-magic-200",
  },
  listo: {
    bg: "bg-listo-100",
    icon: "text-listo-600",
    border: "border-listo-200",
  },
  alert: {
    bg: "bg-alert-100",
    icon: "text-alert-600",
    border: "border-alert-200",
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-listo-100 text-listo-700 rounded-full text-sm font-medium mb-4">
            Funksjoner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Middager, oppgaver og aktiviteter – alt på ett sted
          </h2>
          <p className="text-lg text-charcoal-light">
            Fra ukens middagsplanlegging til hvem som tar ut søpla og når fotballtreningen starter – 
            listo.family gir hele familien full oversikt.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group p-6 rounded-squircle border ${colors.border} bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-squircle-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
