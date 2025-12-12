// Shared blog article data used by both BlogPreview and /blogg page

export interface BlogArticle {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    categoryColor: string;
    isNew?: boolean;
    isFeatured?: boolean;
}

export const articles: BlogArticle[] = [
    // === NEW ARTICLES (will be prioritized on front page) ===
    {
        slug: "ai-middagsplanlegger",
        title: "AI som middagsassistent: Slik foreslår appen perfekte middager",
        excerpt:
            "Sliter du med 'hva skal vi ha til middag?' Lær hvordan AI-basert middagsplanlegging tar hensyn til familiens preferanser og travle kalendere.",
        date: "2024-12-13",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        category: "AI & Teknologi",
        categoryColor: "purple",
        isNew: true,
        isFeatured: true,
    },
    {
        slug: "delt-omsorg-middagsplanlegging",
        title: "Middagsplanlegging med delt omsorg: Slik fungerer det",
        excerpt:
            "Har du barn som bor to steder? Lær hvordan smart middagsplanlegging gjør hverdagen enklere for hele familien.",
        date: "2024-12-13",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
        category: "Familielogistikk",
        categoryColor: "listo",
        isNew: true,
    },
    {
        slug: "hyttetur-pakkeliste",
        title: "Hyttetur uten stress: Den ultimate pakkelisten",
        excerpt:
            "Aldri glem tannbørsten på hytta igjen. Lær hvordan digitale pakkelister gjør hytteturen til en drøm.",
        date: "2024-12-13",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=800&q=80",
        category: "Steder & Lister",
        categoryColor: "blue",
        isNew: true,
    },

    // === STANDARD ARTICLES ===
    {
        slug: "dele-handleliste-familie",
        title: "Dele handlelisten med familien: Slik fungerer det",
        excerpt:
            "Slutt på dobbelthandling og glemte varer. Lær hvordan en delt handleliste gjør familielivet enklere.",
        date: "2024-12-06",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
        category: "Handleliste",
        categoryColor: "teal",
    },
    {
        slug: "familieorganisering",
        title: "Fra kaos til kontroll: Familieorganisering i 2025",
        excerpt:
            "Hvordan moderne familier holder orden på alt – fra middager til aktiviteter. Praktiske tips for travel hverdag.",
        date: "2024-12-05",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        category: "Organisering",
        categoryColor: "blue",
    },
    {
        slug: "gjoremal-for-barn",
        title: "Gjøremål for barn: Slik lærer du barna ansvar hjemme",
        excerpt:
            "Barn som bidrar hjemme lærer viktige ferdigheter. Her er hvordan du fordeler oppgaver og gjør det gøy.",
        date: "2024-12-04",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
        category: "Familie",
        categoryColor: "purple",
    },
    {
        slug: "smart-handleliste-app",
        title: "Smart handleliste: Aldri glem melken igjen",
        excerpt:
            "En smart handleliste-app kan spare deg for tid, penger og frustrasjon. Slik velger du riktig app for familien.",
        date: "2024-12-03",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
        category: "Handleliste",
        categoryColor: "teal",
    },
    {
        slug: "hva-skal-vi-ha-til-middag",
        title: "Hva skal vi ha til middag? 30 enkle middagsideer",
        excerpt:
            "Sliter du med å finne ut hva dere skal ha til middag? Her er 30 enkle middagsforslag som hele familien vil elske.",
        date: "2024-12-02",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        category: "Middagsideer",
        categoryColor: "listo",
    },
    {
        slug: "vintermiddager",
        title: "Vintermiddager: 15 lune retter for kalde dager",
        excerpt:
            "Oppdag 15 deilige vintermiddager som varmer fra innsiden. Fra klassiske gryteretter til moderne favoritter.",
        date: "2024-12-02",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        category: "Sesong",
        categoryColor: "blue",
    },
    {
        slug: "sunn-mat-pa-budsjett",
        title: "Sunn mat på budsjett: 15 tips for å spise sunt og billig",
        excerpt:
            "Lær hvordan du lager næringsrik, velsmakende mat som familien elsker – uten å tømme lommeboka.",
        date: "2024-12-02",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
        category: "Økonomi",
        categoryColor: "green",
    },
    {
        slug: "slik-planlegger-du-ukemenyen",
        title: "Slik planlegger du ukemenyen – en komplett guide",
        excerpt:
            "Lær hvordan du planlegger ukens middager på under 15 minutter. Spar tid, penger og stress med disse enkle stegene.",
        date: "2024-12-01",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
        category: "Planlegging",
        categoryColor: "orange",
    },
    {
        slug: "spar-penger-pa-matbudsjettet",
        title: "10 tips for å spare penger på matbudsjettet",
        excerpt:
            "Praktiske råd for å kutte matkostnadene uten å gå på kompromiss med kvalitet eller smak.",
        date: "2024-12-01",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        category: "Økonomi",
        categoryColor: "green",
    },
    {
        slug: "barnevennlige-middager",
        title: "Barnevennlige middager hele familien vil elske",
        excerpt:
            "Sliter du med kresne barn? Her er oppskrifter og triks som får selv de mest skeptiske til å spise.",
        date: "2024-12-01",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
        category: "Familie",
        categoryColor: "pink",
    },
    {
        slug: "batch-cooking-guide",
        title: "Batch cooking: Lag mat for en hel uke på én dag",
        excerpt:
            "Lær kunsten å forberede måltider på forhånd. Perfekt for travle familier som vil spise hjemmelaget mat.",
        date: "2024-12-01",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        category: "Meal Prep",
        categoryColor: "purple",
    },
    {
        slug: "den-perfekte-handlelisten",
        title: "Den perfekte handlelisten – slik handler du smartere",
        excerpt:
            "En god handleliste er nøkkelen til effektiv handling. Lær hvordan du organiserer listen for å spare tid i butikken.",
        date: "2024-12-01",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
        category: "Handling",
        categoryColor: "blue",
    },
];

// Category colors mapping
export const categoryColors: Record<string, string> = {
    orange: "bg-orange-500",
    green: "bg-green-500",
    pink: "bg-pink-500",
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    teal: "bg-teal-500",
    listo: "bg-listo-500",
};

// Helper functions for selecting articles

/** Get articles for the front page preview - prioritizes new/featured articles */
export function getFrontPageArticles(count: number = 3): BlogArticle[] {
    // First, get featured articles
    const featured = articles.filter(a => a.isFeatured);

    // Then, get new articles (not already featured)
    const newArticles = articles.filter(a => a.isNew && !a.isFeatured);

    // Combine and take first `count`
    const prioritized = [...featured, ...newArticles];

    if (prioritized.length >= count) {
        return prioritized.slice(0, count);
    }

    // Fill remaining with other articles
    const remaining = articles.filter(a => !a.isNew && !a.isFeatured);
    return [...prioritized, ...remaining].slice(0, count);
}

/** Get rotated articles based on current day (changes daily) */
export function getDailyRotatedArticles(count: number = 3): BlogArticle[] {
    const dayOfYear = Math.floor(
        (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );

    // Always include at least 1 new article if available
    const newArticles = articles.filter(a => a.isNew);
    const regularArticles = articles.filter(a => !a.isNew);

    // Rotate regular articles based on day
    const rotationIndex = dayOfYear % regularArticles.length;
    const rotated = [
        ...regularArticles.slice(rotationIndex),
        ...regularArticles.slice(0, rotationIndex),
    ];

    // Mix: 1 new + 2 rotated (or adjust as needed)
    if (newArticles.length > 0) {
        const newIndex = dayOfYear % newArticles.length;
        return [newArticles[newIndex], ...rotated.slice(0, count - 1)];
    }

    return rotated.slice(0, count);
}

/** Get all articles sorted by date (newest first) */
export function getAllArticles(): BlogArticle[] {
    return [...articles].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
