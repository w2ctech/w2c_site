import type { Metadata } from "next";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "W2C Tech — Web to Cloud",
  description: "Custom software, AI systems, and cloud — built to scale.",
  icons: { icon: "/favicon.svg", apple: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;450;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{document.documentElement.className=localStorage.getItem('w2c-theme')==='light'?'theme-light':''}catch(e){document.documentElement.className=''}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
