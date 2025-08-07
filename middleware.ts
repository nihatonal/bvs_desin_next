import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Apply middleware only to internationalized paths and exclude static files
    "/((?!_next|favicon.ico|manifest.json|icons|robots.txt|sitemap.xml).*)",
  ],
};
