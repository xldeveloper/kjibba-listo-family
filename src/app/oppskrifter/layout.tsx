import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oppskrift App | Lagre og importer oppskrifter | listo.family",
    description:
        "Samle alle oppskriftene dine på ett sted! ✓ Importer fra nettsider ✓ Lagre familiens favoritter ✓ Juster porsjoner automatisk ✓ Generer handleliste. Gratis!",
    keywords: [
        "oppskrift app",
        "lagre oppskrifter app",
        "importere oppskrifter",
        "digital kokebok",
        "oppskrifter app gratis",
        "oppskriftssamling",
        "organiser oppskrifter",
        "oppskriftsbok app",
        "favorittoppskrifter",
        "oppskrifter familie",
        "kokebok app",
    ],
    alternates: {
        canonical: "/oppskrifter",
    },
    openGraph: {
        title: "Oppskrift App | listo.family",
        description:
            "Samle alle familiens oppskrifter på ett sted. Importer fra nettsider, juster porsjoner, og generer handleliste automatisk.",
        url: "https://listo.family/oppskrifter",
        siteName: "listo.family",
        locale: "nb_NO",
        type: "website",
        images: [
            {
                url: "/images/og-oppskrifter.png",
                width: 1200,
                height: 630,
                alt: "listo.family - Din digitale kokebok",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Oppskrift App | listo.family",
        description: "Samle alle oppskriftene dine på ett sted. Importer, organiser, og del med familien!",
        images: ["/images/og-oppskrifter.png"],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Hvordan importerer jeg oppskrifter fra nettsider?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Det er superenkelt! Bare lim inn lenken til oppskriften i Listo, så henter AI-en automatisk ingredienser, fremgangsmåte, og bilder. Fungerer med de fleste norske og internasjonale matblogger.",
            },
        },
        {
            "@type": "Question",
            name: "Kan jeg lagre mine egne oppskrifter?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutt! Du kan legge inn dine egne oppskrifter manuelt med ingredienser, fremgangsmåte, og bilder. Perfekt for mormors hemmelige oppskrifter eller dine egne kreasjoner.",
            },
        },
        {
            "@type": "Question",
            name: "Justeres ingrediensene automatisk når jeg endrer porsjoner?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Bare velg hvor mange porsjoner du vil lage, så justerer Listo alle ingrediensene automatisk. Smart når du skal lage mat til mange, eller bare til deg selv.",
            },
        },
        {
            "@type": "Question",
            name: "Kan hele familien dele oppskriftene?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Alle oppskrifter du lagrer i Listo er tilgjengelige for hele familien. Dere kan ha en felles oppskriftssamling som alle kan bidra til og bruke.",
            },
        },
        {
            "@type": "Question",
            name: "Genereres handleliste automatisk fra oppskriften?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Når du legger en oppskrift til middagsplanen, legges alle ingrediensene automatisk til handlelisten. Du slipper å skrive inn alt manuelt.",
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
            name: "Oppskrifter",
            item: "https://listo.family/oppskrifter",
        },
    ],
};

export default function OppskrifterLayout({
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
