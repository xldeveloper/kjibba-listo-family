"use client";

import { Check, Sparkles, Gift, Heart } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-listo-100 text-listo-700 rounded-full text-sm font-medium mb-4">
            Priser
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Gratis under beta
          </h2>
          <p className="text-lg text-charcoal-light">
            listo.family er helt gratis så lenge vi er i beta. Etter lansering kommer vi til å ha
            en rimelig abonnementsmodell – og beta-testere får eksklusiv rabatt.
          </p>
        </div>

        {/* Single card - Beta offer */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-squircle p-8 bg-gradient-to-br from-charcoal to-charcoal-dark text-white shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold bg-salmon-500 text-white">
              Beta-tilbud
            </div>

            {/* Plan info */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">
                Full tilgang
              </h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-white">Gratis</span>
              </div>
              <p className="mt-2 text-white/70">
                Så lenge beta-perioden varer
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {[
                "AI-drevet måltidsplanlegging",
                "Ubegrenset oppskrifter",
                "Smart handleliste med butikkmodus",
                "Ubegrenset familiemedlemmer",
                "Sanntidssynkronisering",
                "Magisk import fra URL og bilde",
                "Manuell oppskrift-oppretting",
                "Ingen kortinformasjon kreves",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-listo-400" />
                  <span className="text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#beta"
              className="block w-full text-center py-3 px-6 rounded-full font-semibold transition-all bg-white text-charcoal hover:bg-cream-100 shadow-lg"
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Meld interesse
            </Link>
          </div>
        </div>

        {/* Future pricing hint */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white border border-charcoal/10 rounded-squircle p-6">
            <h4 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-listo-500" />
              Hva skjer etter beta?
            </h4>
            <p className="text-charcoal-light text-sm mb-4">
              Vi planlegger en rimelig abonnementsmodell med både månedlig og årlig betaling.
              Prisen blir konkurransedyktig – sannsynligvis rundt en kopp kaffe i måneden.
            </p>
            <div className="flex items-start gap-3 bg-listo-50 rounded-lg p-4">
              <Heart className="w-5 h-5 text-salmon-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal">
                <strong>Beta-testere får:</strong> Eksklusiv rabatt, innflytelse på funksjoner,
                og vår evige takknemlighet for å ha vært med fra starten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
