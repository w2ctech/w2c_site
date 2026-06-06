import type { Metadata, Viewport } from "next";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@/components/ui/Analytics";
import { WebVitalsReporter } from "@/components/ui/WebVitals";
import {
  BASE_URL,
  SITE_NAME,
  TWITTER_HANDLE,
  UNIVERSAL_KEYWORDS,
  KEYWORDS_ANALYTICS,
  localeAlternates,
} from "@/lib/seo";
import "./globals.css";

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION;
const YANDEX_VERIFICATION = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
const PINTEREST_VERIFICATION = process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION;
const FACEBOOK_DOMAIN_VERIFICATION = process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION;

const TITLE = "W2C Tech — Web to Cloud · Software, AI & Cloud Consulting";
const DESCRIPTION =
  "W2C Tech is a software consulting company delivering custom software development, AI integration, cloud architecture, DevOps, search & data engineering, and IT staff augmentation for ambitious companies across the EU, US and India. Founded 2020.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | W2C Tech",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: Array.from(new Set([...UNIVERSAL_KEYWORDS, ...KEYWORDS_ANALYTICS])),
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Software Consulting, AI Consulting, Cloud Consulting",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE", "fr_FR"],
    url: BASE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "W2C Tech — Web to Cloud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.svg"],
    creator: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
  },
  alternates: {
    canonical: BASE_URL,
    languages: localeAlternates(""),
    types: {
      "application/rss+xml": `${BASE_URL}/rss.xml`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    ...(GOOGLE_VERIFICATION ? { google: GOOGLE_VERIFICATION } : {}),
    ...(YANDEX_VERIFICATION ? { yandex: YANDEX_VERIFICATION } : {}),
    other: {
      ...(BING_VERIFICATION ? { "msvalidate.01": BING_VERIFICATION } : {}),
      ...(PINTEREST_VERIFICATION ? { "p:domain_verify": PINTEREST_VERIFICATION } : {}),
      ...(FACEBOOK_DOMAIN_VERIFICATION
        ? { "facebook-domain-verification": FACEBOOK_DOMAIN_VERIFICATION }
        : {}),
    },
  },
  other: {
    "msapplication-TileColor": "#1a1a2e",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://snap.licdn.com" />
        <link rel="dns-prefetch" href="https://static.hotjar.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;450;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{document.documentElement.className=localStorage.getItem('w2c-theme')==='light'?'theme-light':''}catch(e){document.documentElement.className=''}`}
        </Script>
        <Analytics />
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}
