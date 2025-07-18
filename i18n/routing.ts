import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "tr", "ru"],

  // Used when no locale matches
  defaultLocale: "tr",
  pathnames: {
    "/contact": {
      en: "/contact-me",
      tr: "/iletisim",
      ru: "/kontakt",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
