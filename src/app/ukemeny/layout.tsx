import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ukemeny Planlegger | Ukens middager planlagt | listo.family",
    description:
        "Planlegg ukemenyen på 5 minutter! ✓ 7 dagers middager ✓ Automatisk handleliste ✓ AI-forslag ✓ Del med familien. Si farvel til 'hva skal vi ha til middag?' Gratis!",
    keywords: [
        "ukemeny",
        "ukemeny planlegger",
        "ukemeny familie",
        "ukemeny middag",
        "ukens middag",
        "ukesplan mat",
        "ukesplan middag",
        "planlegge ukemeny",
        "ukemeny app",
        "ukemeny gratis",
        "ukemeny inspirasjon",
        "ukemeny tips",
    ],
    alternates: {
        canonical: "/ukemeny",
    },
    openGraph: {
        title: "Ukemeny Planlegger | listo.family",
        description:
            "Planlegg hele ukens middager på 5 minutter. Automatisk handleliste og AI-forslag for varierte ukemenyer.",
        url: "https://listo.family/ukemeny",
        siteName: "listo.family",
        locale: "nb_NO",
        type: "website",
        images: [
            {
                url: "/images/og-ukemeny.png",
                width: 1200,
                height: 630,
                alt: "listo.family ukemeny - Planlegg ukens middager",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ukemeny Planlegger | listo.family",
        description: "Planlegg ukemenyen på 5 minutter. AI-forslag og automatisk handleliste!",
        images: ["/images/og-ukemeny.png"],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Hvordan planlegger jeg en ukemeny med Listo?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Det er superenkelt! Velg oppskrifter for hver dag i uken ved å dra og slippe, eller la AI-en foreslå middager basert på hva familien liker. Hele ukemenyen kan være ferdig på 5 minutter.",
            },
        },
        {
            "@type": "Question",
            name: "Kan AI-en foreslå ukemeny for meg?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! AI-en lærer hva familien din liker og kan foreslå en komplett ukemeny med varierte middager. Du kan enkelt bytte ut retter du ikke ønsker.",
            },
        },
        {
            "@type": "Question",
            name: "Lages handlelisten automatisk fra ukemenyen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Når ukemenyen er satt, samles alle ingredienser automatisk i en handleliste. Listen er sortert etter kategori så du handler mer effektivt.",
            },
        },
        {
            "@type": "Question",
            name: "Kan hele familien se ukemenyen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutt! Alle familiemedlemmer ser ukemenyen i appen. Ingen flere spørsmål om 'hva skal vi ha til middag?' - alle vet hva som er planen.",
            },
        },
        {
            "@type": "Question",
            name: "Kan jeg gjenbruke ukemenyer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja! Lagre ukemenyer du liker og gjenbruk dem senere. Perfekt for travle uker når du vil bruke en ukemeny som har fungert godt før.",
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
            name: "Ukemeny",
            item: "https://listo.family/ukemeny",
        },
    ],
};

export default function UkemenyLayout({
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
