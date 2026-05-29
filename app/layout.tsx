import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colteumgroup.com"),
  title: {
    default: "Colteum — Modern Product Studio. Nairobi.",
    template: "%s | Colteum",
  },
  description:
    "Colteum is a Nairobi-based product studio building growth-ready websites, brand systems, content engines, custom software, and frontier-tech infrastructure for modern businesses worldwide.",
  keywords: [
    "Colteum",
    "product studio",
    "web development Nairobi",
    "brand systems",
    "Web3 development",
    "growth engine",
    "crypto research",
    "Nairobi",
    "Kenya",
    "Africa",
  ],
  authors: [{ name: "Colteum Limited" }],
  creator: "Colteum Limited",
  publisher: "Colteum Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://colteumgroup.com",
    siteName: "Colteum",
    title: "Colteum — Modern Product Studio. Nairobi.",
    description:
      "Colteum is a Nairobi-based product studio building growth-ready websites, brand systems, content engines, custom software, and frontier-tech infrastructure for modern businesses worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Colteum — Modern Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colteum — Modern Product Studio. Nairobi.",
    description:
      "Colteum is a Nairobi-based product studio building growth-ready websites, brand systems, content engines, custom software, and frontier-tech infrastructure for modern businesses worldwide.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://colteumgroup.com/#organization",
      name: "Colteum Limited",
      url: "https://colteumgroup.com",
      logo: "https://colteumgroup.com/logo.png",
      description:
        "Colteum is a Nairobi-based product studio building growth-ready websites, brand systems, content engines, custom software, and frontier-tech infrastructure for modern businesses worldwide.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: "Worldwide",
      sameAs: [
        // TODO: add social profile URLs
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@colteumgroup.com",
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://colteumgroup.com/#website",
      url: "https://colteumgroup.com",
      name: "Colteum",
      publisher: { "@id": "https://colteumgroup.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <div className="animated-bg" aria-hidden="true" />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <CTABand />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
