"use client";

import type { Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import StructuredData from "@/components/StructuredData";
import "../globals.css";
import type { ReactNode } from "react";

export default function ClientLayout({
  children,
  locale,
  dict,
}: {
  children: ReactNode;
  locale: Locale;
  dict: Record<string, unknown>;
}) {
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;450;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
        <meta name="theme-color" content="#1a1a2e" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.className=localStorage.getItem('w2c-theme')==='light'?'theme-light':''}catch(e){document.documentElement.className=''}`,
          }}
        />
      </head>
      <body>
        <LocaleProvider locale={locale} dict={dict}>
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
