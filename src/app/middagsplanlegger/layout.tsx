import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis Middagsplanlegger for Familier | listo.family",
  description:
    "Planlegg ukens middager på under 5 minutter med listo.family. Automatisk handleliste, AI-forslag, og sanntidssynk med hele familien. Gratis i beta!",
  keywords: [
    "middagsplanlegger",
    "gratis middagsplanlegger",
    "ukemeny",
    "måltidsplanlegger",
    "middagsplanlegger app",
    "hva skal vi ha til middag",
    "ukemeny planlegger",
    "måltidsplan",
    "familiens middagsplanlegger",
    "middagsplanlegging",
    "ukeplan middag",
    "middag planlegger",
  ],
  alternates: {
    canonical: "/middagsplanlegger",
  },
  openGraph: {
    title: "Gratis Middagsplanlegger for Familier | listo.family",
    description:
      "Planlegg ukens middager på under 5 minutter. Automatisk handleliste og AI-forslag.",
    url: "https://listo.family/middagsplanlegger",
    siteName: "listo.family",
    locale: "nb_NO",
    type: "website",
  },
};

export default function MiddagsplanleggerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
