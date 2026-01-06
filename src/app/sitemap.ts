import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

// Automatisk hent alle bloggposter fra filsystemet
function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "src/app/blogg");

  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory() && entry.name !== "page.tsx")
      .map(entry => entry.name);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://listo.family";
  const blogSlugs = getBlogSlugs();

  // Statiske sider
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/middagsplanlegger`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/handleliste`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/familieapp`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/oppskrifter`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ukemeny`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamiske bloggposter - genereres automatisk fra mapper
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${baseUrl}/blogg/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
