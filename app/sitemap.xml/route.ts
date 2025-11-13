import { NextResponse } from "next/server";
import { getAllProjects, getProjectById } from "@/constants/portfolioData";

const siteUrl = "https://www.bravixcreative.com";
const locales = ["en", "tr", "ru"] as const;
type Locale = (typeof locales)[number];

const legalPaths: Record<
  "terms" | "privacy" | "cookie",
  Record<Locale, string>
> = {
  terms: {
    tr: "hizmet-sartlari",
    en: "terms-of-service",
    ru: "usloviya-obsluzhivaniya",
  },
  privacy: {
    tr: "gizlilik-politikasi",
    en: "privacy-policy",
    ru: "politika-konfid",
  },
  cookie: {
    tr: "cerez-politikasi",
    en: "cookie-policy",
    ru: "politika-cookie",
  },
};

export async function GET() {
  const urls: {
    loc: string;
    lastmod?: string;
    alternates?: Record<string, string>;
  }[] = [];
  const now = new Date().toISOString();

  // 1️⃣ Ana sayfalar
  locales.forEach((locale) => {
    const loc = `${siteUrl}/${locale}/`;
    const alternates: Record<string, string> = {};
    locales.forEach((lng) => (alternates[lng] = `${siteUrl}/${lng}/`));
    alternates["x-default"] = `${siteUrl}/en/`;
    urls.push({ loc, lastmod: now, alternates });
  });

  // 2️⃣ Legal sayfalar
  locales.forEach((locale) => {
    Object.keys(legalPaths).forEach((key) => {
      const path = legalPaths[key as keyof typeof legalPaths][locale];
      const loc = `${siteUrl}/${locale}/${path}/`;
      const alternates: Record<string, string> = {};
      locales.forEach((lng) => {
        const altPath = legalPaths[key as keyof typeof legalPaths][lng];
        alternates[lng] = `${siteUrl}/${lng}/${altPath}/`;
      });
      alternates["x-default"] = alternates["en"];
      urls.push({ loc, lastmod: now, alternates });
    });
  });

  // 3️⃣ Portfolio projeleri
  const allProjects = getAllProjects();
  locales.forEach((locale) => {
    allProjects.forEach((project) => {
      const proj = getProjectById(project.id, locale);
      if (!proj) return;
      const loc = `${siteUrl}/${locale}/project/${proj.slug}/${project.id}/`;
      const alternates: Record<string, string> = {};
      locales.forEach((lng) => {
        const p = getProjectById(project.id, lng);
        if (p)
          alternates[
            lng
          ] = `${siteUrl}/${lng}/project/${p.slug}/${project.id}/`;
      });
      alternates["x-default"] = alternates["en"];
      urls.push({ loc, lastmod: now, alternates });
    });
  });

  // 4️⃣ XML oluşturma
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(({ loc, lastmod, alternates }) => {
    const alternateLinks = alternates
      ? Object.entries(alternates)
          .map(
            ([lng, href]) =>
              `    <xhtml:link rel="alternate" hreflang="${lng}" href="${href}" />`
          )
          .join("\n")
      : "";
    return `<url>
  <loc>${loc}</loc>
  ${lastmod ? `  <lastmod>${lastmod}</lastmod>` : ""}
${alternateLinks ? alternateLinks + "\n" : ""}  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`;
  })
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-cache, no-store, must-revalidate", // Her istekte güncel sitemap
    },
  });
}
