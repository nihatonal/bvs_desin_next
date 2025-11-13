import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { PlanProvider } from "@/lib/PlanContext";
import ParallaxWrapper from "@/lib/ParallaxWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = "https://www.bravixcreative.com";
const locales: Locale[] = ["tr", "en", "ru"];


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale }); // ✅ düzeltildi

  return (
    <html lang={locale}>
      <head>
        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/${locale}/`} />

        {/* Hreflang */}
        {locales.map((lng) => (
          <link key={lng} rel="alternate" hrefLang={lng} href={`${siteUrl}/${lng}/`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PlanProvider>
            <ParallaxWrapper>
              <div className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}>
                <Header />
                {children}
                <Footer />
              </div>
            </ParallaxWrapper>
          </PlanProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
