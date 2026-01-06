import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Handleliste App Gratis | Delt handleliste med familien | listo.family",
    description:
        "Norges smarteste handleliste-app! ✓ Del handlelisten med familien i sanntid ✓ Automatisk fra ukemenyen ✓ Sortert etter butikk ✓ Gratis. Last ned nå!",
    keywords: [
        "handleliste app",
        "handleliste app gratis",
        "delt handleliste",
        "smart handleliste",
        "handleliste familie",
        "digital handleliste",
        "handleliste synk",
        "beste handleliste app",
        "gratis handleliste",
        "handleliste deling",
        "handleapp",
        "mathandel app",
    ],
    alternates: {
        canonical: "/handleliste",
    },
    openGraph: {
        title: "Handleliste App Gratis | listo.family",
        description:
            "Del handlelisten med familien i sanntid. Automatisk generert fra ukemenyen. Sortert etter butikkens layout.",
        url: "https://listo.family/handleliste",
        siteName: "listo.family",
        locale: "nb_NO",
        type: "website",
        images: [
            {
                url: "/images/og-handleliste.png",
                width: 1200,
                height: 630,
                alt: "listo.family handleliste app - Del handlelisten med familien",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Handleliste App Gratis | listo.family",
        description: "Del handlelisten med familien i sanntid. Gratis og smart!",
        images: ["/images/og-handleliste.png"],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Er Listo handleliste-app gratis?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Listo handleliste er helt gratis å bruke. Du kan opprette ubegrenset antall lister, dele med familien, og synkronisere på tvers av alle enheter uten å betale noe.",
            },
        },
        {
            "@type": "Question",
            name: "Kan hele familien dele samme handleliste?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutt! Det er hele poenget med Listo. Alle familiemedlemmer kan legge til varer, krysse av det som er handlet, og se oppdateringer i sanntid. Perfekt for når en handler mens andre er hjemme.",
            },
        },
        {
            "@type": "Question",
            name: "Hvordan fungerer automatisk handleliste fra ukemenyen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Når du planlegger middager i Listo, legges alle ingrediensene automatisk til handlelisten. Du slipper å skrive inn hver ingrediens manuelt - alt samles på ett sted, sortert og klart til handling.",
            },
        },
        {
            "@type": "Question",
            name: "Sorteres handlelisten etter butikkens layout?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Listo grupperer varene automatisk etter kategori (frukt/grønt, meieri, kjøtt osv.), slik at du kan handle mer effektivt og slipper å gå frem og tilbake i butikken.",
            },
        },
        {
            "@type": "Question",
            name: "Fungerer handleliste-appen offline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, du kan se og bruke handlelisten din selv uten internett. Endringer synkroniseres automatisk når du er tilbake online.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Hjem",
            item: "https://listo.family",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Handleliste",
            item: "https://listo.family/handleliste",
        },
    ],
};

export default function HandlelisteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
