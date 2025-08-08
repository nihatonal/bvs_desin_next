import "./globals.css";
import Script from "next/script";
import { AnalyticsTracker } from "./AnalyticsTracker";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#9F8CFD" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                {/* Google Analytics: gtag.js */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics" strategy="afterInteractive">
                    {`
                       window.dataLayer = window.dataLayer || [];
                       function gtag(){dataLayer.push(arguments);}
                       gtag('js', new Date());
           
                       gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                         send_page_view: false,
                         allow_google_signals: true,
                         cookie_flags: 'SameSite=None;Secure'
                       });
                    `}
                </Script>
            </head>
            <body>
                {children}
                <AnalyticsTracker />
            </body>
        </html>
    );
}
