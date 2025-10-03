import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://www.bravixcreative.com"; // kendi domain adın

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

  const portfolioData: Record<Locale, { id: string; slug: string }[]> = {
    en: [
      { id: "1001", slug: "apart-hotel-website-and-admin-panel" },
      { id: "1002", slug: "vineyard-investment-website" },
      { id: "1003", slug: "the-glass-hut-cabin-website" },
      { id: "1004", slug: "mindfulness-app-landing-page" },
      { id: "1005", slug: "creator-flow-dashboard-ui" },
      { id: "1006", slug: "fast-food-restaurant" },
    ],
    tr: [
      { id: "1001", slug: "apart-otel-web-sitesi-ve-yonetici-paneli" },
      { id: "1002", slug: "bag-yatirim-web-sitesi" },
      { id: "1003", slug: "the-glass-hut-kabin-tanitim-sitesi" },
      { id: "1004", slug: "mindfulness-uygulama-tanitim-sitesi" },
      { id: "1005", slug: "yaratici-akis-paneli-arayuzu" },
      { id: "1006", slug: "fast-food-restoran-web-sitesi" },
    ],
    ru: [
      { id: "1001", slug: "veb-sayt-apart-otelya-i-administrativnaya-panel" },
      { id: "1002", slug: "veb-sayt-investiciy-v-vinodelni" },
      { id: "1003", slug: "the-glass-hut-sayt-dlya-steklyannogo-domika" },
      { id: "1004", slug: "celevaya-stranica-prilozheniya-dlya-meditacii" },
      { id: "1005", slug: "panel-upravleniya-creator-flow-ui" },
      { id: "1006", slug: "sayt-fastfud-restorana" },
    ],
  };

  const urls: string[] = [];

  // 1. Ana sayfalar
  for (const locale of locales) {
    urls.push(`${baseUrl}/${locale}`);
  }

  // 2. Legal sayfalar
  for (const locale of locales) {
    for (const key of Object.keys(legalPaths) as (keyof typeof legalPaths)[]) {
      const path = legalPaths[key][locale];
      urls.push(`${baseUrl}/${locale}/${path}`);
    }
  }

  // 3. Portfolio sayfaları
  for (const locale of locales) {
    for (const project of portfolioData[locale]) {
      urls.push(`${baseUrl}/${locale}/portfolio/${project.slug}/${project.id}`);
    }
  }

  // 4. XML formatına çevir
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
