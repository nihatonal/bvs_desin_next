import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Ana sayfa ve dil path'leriyle eşleş, ancak bazı statik dosyaları hariç tut
    "/((?!_next|favicon.ico|manifest.json|icons|robots.txt|sitemap.xml).*)",
  ],
};
