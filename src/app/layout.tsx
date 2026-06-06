import type { Metadata } from "next";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@/components/ui/Analytics";
import "./globals.css";

const BASE_URL = "https://w2ctech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "W2C Tech — Web to Cloud · Software, AI & Cloud",
    template: "%s | W2C Tech",
  },
  description:
    "Custom software, AI systems, and cloud for ambitious companies across the EU, US and India. Founded 2020. Senior team, scalable solutions.",
  keywords: [
    "software development", "AI systems", "cloud computing", "devops",
    "staff augmentation", "web development", "W2C Tech", "India", "EU",
  ],
  authors: [{ name: "W2C Tech" }],
  creator: "W2C Tech",
  publisher: "W2C Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "W2C Tech",
    title: "W2C Tech — Web to Cloud · Software, AI & Cloud",
    description:
      "Custom software, AI systems, and cloud for ambitious companies across the EU, US and India.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "W2C Tech — Web to Cloud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "W2C Tech — Web to Cloud · Software, AI & Cloud",
    description:
      "Custom software, AI systems, and cloud for ambitious companies across the EU, US and India.",
    images: ["/og-image.svg"],
    creator: "@w2ctech",
  },
  alternates: {
    canonical: BASE_URL,
    languages: { en: `${BASE_URL}/en`, de: `${BASE_URL}/de`, fr: `${BASE_URL}/fr` },
  },
  icons: { icon: "/favicon.svg", apple: "/icon.svg" },
  manifest: "/manifest.webmanifest",
  category: "technology",
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
        <Analytics />
        {children}
      </body>
    </html>
  );
}
