import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colteumgroup.com"),
  title: {
    default:
      "Colteum Limited — Modern Digital Infrastructure for African Businesses",
    template: "%s | Colteum Limited",
  },
  description:
    "Colteum is a Nairobi-based product studio. We design and ship growth-ready web platforms, brand systems, growth engines, content systems, and custom software — productized, founder-led, delivered in days.",
  keywords: [
    "product studio",
    "Nairobi",
    "Kenya",
    "Africa",
    "web development",
    "brand systems",
    "growth engine",
    "Web3",
    "digital infrastructure",
  ],
  authors: [{ name: "Jude Baraka", url: "https://colteumgroup.com/about" }],
  creator: "Colteum Limited",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://colteumgroup.com",
    siteName: "Colteum Limited",
    title:
      "Colteum Limited — Modern Digital Infrastructure for African Businesses",
    description:
      "Nairobi-based product studio. Growth-ready web platforms, brand systems, and custom software — delivered in days.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Colteum Limited — Built lean. Shipped fast.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Colteum Limited — Modern Digital Infrastructure for African Businesses",
    description: "Nairobi-based product studio. Built lean. Shipped fast.",
    creator: "@colteumgroup",
    images: ["/images/og-default.jpg"],
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
      "@type": "Organization",
      "@id": "https://colteumgroup.com/#organization",
      name: "Colteum Limited",
      url: "https://colteumgroup.com",
      logo: "https://colteumgroup.com/images/logos/colteum.svg",
      description:
        "Nairobi-based product studio shipping growth-ready web platforms, brand systems, growth engines, and custom software for African businesses.",
      foundingDate: "2023",
      founder: {
        "@type": "Person",
        name: "Jude Baraka",
        jobTitle: "Founder",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+254746089499",
          contactType: "customer service",
          email: "hello@colteumgroup.com",
          areaServed: ["KE", "EAC"],
          availableLanguage: "English",
        },
      ],
      sameAs: [
        "https://linkedin.com/company/colteum",
        "https://twitter.com/colteumgroup",
        "https://instagram.com/colteumgroup",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://colteumgroup.com/#localbusiness",
      name: "Colteum Limited",
      image: "https://colteumgroup.com/images/og-default.jpg",
      url: "https://colteumgroup.com",
      telephone: "+254746089499",
      email: "hello@colteumgroup.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      priceRange: "KES 50,000–250,000+",
      openingHours: "Mo-Fr 08:00-18:00",
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
      className={`${inter.variable} ${interTight.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0D0D0F] text-white antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
