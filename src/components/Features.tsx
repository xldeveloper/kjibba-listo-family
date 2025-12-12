"use client";

import {
  Calendar,
  CalendarDays,
  ShoppingCart,
  BookOpen,
  Users,
  Sparkles,
  CheckSquare,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Ukeplanlegger",
    description:
      "Se hele uken i ett blikk med planlagte middager. Konfetti-feiring når hele uken er planlagt! 🎉",
    color: "salmon",
  },
  {
    icon: ShoppingCart,
    title: "Smart handleliste",
    description:
      "AI-sortert etter butikkens layout. Porsjoner beregnes automatisk basert på hvem som spiser hjemme.",
    color: "salmon",
  },
  {
    icon: Users,
    title: "Hvem spiser hjemme?",
    description:
      "Perfekt for delt omsorg. Samværsplan for barn, gjester til middag, og bortreiser – alt håndteres automatisk.",
    color: "listo",
    isNew: true,
  },
  {
    icon: CheckSquare,
    title: "Familieoppgaver",
    description:
      "Fordel hverdagsoppgaver med fleksibel gjentakelse. \"Fresh Start\" fjerner backlog-skam med ett klikk.",
    color: "listo",
  },
  {
    icon: BookOpen,
    title: "Oppskriftsbibliotek",
    description:
      "Importer fra nett, ta bilde av kokeboken, eller skriv inn manuelt. Rate oppskrifter så AI-en lærer hva familien liker.",
    color: "magic",
  },
  {
    icon: Sparkles,
    title: "AI-assistent",
    description:
      "Chat om middagsforslag, generer ukeplaner, og få hjelp tilpasset familiens preferanser og travle dager.",
    color: "magic",
  },
  {
    icon: CalendarDays,
    title: "Familiekalender",
    description:
      "Ferier, hytteturer, jobbreiser og gjester. Påvirker porsjonsberegning og hvem som spiser hjemme automatisk.",
    color: "sky",
    isNew: true,
  },
  {
    icon: MapPin,
    title: "Steder & huskelister",
    description:
      "Hytte-pakkelister, båt-inventar, vedlikeholdslister. Aldri glem hva du skal ta med til Kvamskogen igjen!",
    color: "alert",
    isNew: true,
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
                className={`group p-6 rounded-squircle border ${colors.border} bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative`}
              >
                {(feature as { isNew?: boolean }).isNew && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-listo-500 to-listo-600 text-white text-xs font-bold rounded-full shadow-md">
                    NY
                  </span>
                )}
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
