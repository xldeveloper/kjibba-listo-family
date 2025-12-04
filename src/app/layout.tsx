import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "listo.family – Familiens smarte hverdagsassistent",
  description:
    "listo.family er en AI-drevet app for måltidsplanlegging, handlelister og familieorganisering. Gjør hverdagen enklere for hele familien.",
  keywords: [
    "måltidsplanlegging",
    "handleliste",
    "oppskrifter",
    "familie",
    "AI",
    "middag",
    "ukeplan",
    "middagsplanlegger",
    "ukemeny",
    "matplanlegging",
  ],
  authors: [{ name: "listo.family" }],
  metadataBase: new URL("https://listo.family"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/listo-logo.svg",
    apple: "/images/listo-logo.svg",
  },
  openGraph: {
    title: "listo.family – Familiens smarte hverdagsassistent",
    description:
      "Aldri lur på hva dere skal ha til middag igjen. listo.family planlegger, handler og inspirerer.",
    url: "https://listo.family",
    siteName: "listo.family",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "listo.family – Familiens smarte hverdagsassistent",
    description:
      "Aldri lur på hva dere skal ha til middag igjen. listo.family planlegger, handler og inspirerer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "listo.family",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "AI-drevet familieapp for måltidsplanlegging, handlelister og oppskrifter.",
  url: "https://listo.family",
  author: {
    "@type": "Organization",
    name: "listo.family",
    url: "https://listo.family",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "NOK",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={inter.variable}>
      <head>
        <script
          defer
          src="https://analytics.listo.family/script.js"
          data-website-id="1b61f65c-a9f0-473d-856b-a1ac47f61c0f"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
