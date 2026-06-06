import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://w2ctech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "w2ctech - Digital Agency That Thrives on Your Success",
    template: "%s | w2ctech",
  },
  description:
    "We are a team of 40 web experts with over 12 years of experience in website building and marketing. Web design, development, and digital marketing services to help businesses grow online.",
  keywords: [
    "web design",
    "web development",
    "digital marketing",
    "website building",
    "SEO",
    "w2ctech",
    "Los Angeles web agency",
    "custom websites",
  ],
  authors: [{ name: "w2ctech" }],
  creator: "w2ctech",
  publisher: "w2ctech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "w2ctech",
    title: "w2ctech - Digital Agency That Thrives on Your Success",
    description:
      "Team of 40 web experts with 12+ years experience. Web design, development, and digital marketing to help businesses grow online.",
    images: [
      {
        url: `${BASE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "w2ctech - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "w2ctech - Digital Agency That Thrives on Your Success",
    description:
      "Team of 40 web experts with 12+ years experience. Web design, development, and digital marketing services.",
    images: [`${BASE_URL}/og-image.svg`],
    creator: "@w2ctech",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "technology",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
