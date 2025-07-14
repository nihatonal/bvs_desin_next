import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import TermsOfService from "@/components/legal/TermsOfService";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import CookiePolicy from "@/components/legal/CookiePolicy";
import { slugMap } from "@/utils/slugMap";
// type Locale = "tr" | "en" | "ru";

type Props = {
  params: Promise<{ locale: string; slug: string; }>;
};

const routeMap: Record<string, keyof typeof slugMap> = {};

Object.entries(slugMap).forEach(([canonical, langs]) => {
  Object.entries(langs).forEach(([locale, slug]) => {
    routeMap[`${locale}/${slug}`] = canonical as keyof typeof slugMap;
  });
});

export async function generateStaticParams() {
  const slugs = [];

  for (const [locale, map] of Object.entries(routeMap)) {
    for (const slug of Object.keys(map)) {
      slugs.push({ locale, slug });
    }
  }

  return slugs;
}

// 🛠️ BURASI HATAYI DÜZELTEN YER
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params; // 👈 await şart
  const pageKey = routeMap[`${locale}/${slug}`];
  if (!pageKey) return notFound();

  const t = await getTranslations({ locale, namespace: pageKey });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale, slug } = await params; // 👈 burada await şart
  const pageKey = routeMap[`${locale}/${slug}`];

  switch (pageKey) {
    case "terms-of-service":
      return <TermsOfService />;
    case "privacy-policy":
      return <PrivacyPolicy />;
    case "cookie-policy":
      return <CookiePolicy />;
    default:
      notFound();
  }
}
