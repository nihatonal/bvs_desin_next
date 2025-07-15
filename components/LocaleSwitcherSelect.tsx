"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { slugMap } from "@/utils/slugMap";
import { projectSlugMapping } from "@/utils/projectSlugMapping";

type Locale = "tr" | "en" | "ru";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

const locales: Locale[] = ["tr", "en", "ru"];

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    const pathSegments = pathname.split("/").filter(Boolean);
    // Örn:
    // Legal sayfa: ['tr', 'hizmet-sartlari']
    // Proje detay: ['tr', 'projects', 'monihomes', '1']

    let currentLocale: Locale = "tr";
    if (locales.includes(pathSegments[0] as Locale)) {
      currentLocale = pathSegments[0] as Locale;
    }

    let newPathname = "";

    if (pathSegments.length === 2) {
      // Legal sayfa veya 2 segmentli route: /[locale]/[slug]
      const currentSlug = pathSegments[1];

      // slugMap içinden currentSlug karşılığı bul
      const foundEntry = Object.entries(slugMap).find(
        ([, value]) => value[currentLocale] === currentSlug
      );

      if (foundEntry) {
        // Yeni locale slug
        const newSlug = foundEntry[1][nextLocale as Locale];
        newPathname = `/${nextLocale}/${newSlug}`;
      } else {
        // Slug bulunamazsa olduğu gibi değiştir
        newPathname = `/${nextLocale}/${currentSlug}`;
      }
    } else if (
      pathSegments.length === 4 &&
      pathSegments[1] === "project"
    ) {
      // Proje detay sayfası: /[locale]/projects/[slug]/[id]
      const currentId = pathSegments[3];

      // projectSlugMapping'den yeni locale slug'ı bul
      const newSlug = projectSlugMapping[currentId]?.[nextLocale as Locale];

      if (newSlug) {
        newPathname = `/${nextLocale}/project/${newSlug}/${currentId}`;
      } else {
        // Eğer bulunamazsa fallback URL
        newPathname = `/${nextLocale}/project/${pathSegments[2]}/${currentId}`;
      }
    } else {
      // Diğer sayfalar için sadece locale değiştir
      // Orjinal path segments'ten locale kısmını değiştir
      const restSegments = pathSegments.slice(1).join("/");
      newPathname = `/${nextLocale}/${restSegments}`;
    }

    // Scroll konumunu koru
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scrollY", window.scrollY.toString());
    }

    router.replace(newPathname);
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[60px] h-8 px-3 pl-1 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-[#d4cde4] border border-1 border-purple z-[9999]">
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="cursor-pointer">
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
