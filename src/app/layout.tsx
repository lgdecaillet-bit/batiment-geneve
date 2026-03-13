import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import { site } from "@/lib/config";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

const title = "(Nom Entreprise) — Plâtrerie & Peinture Genève | Isolation & Rénovation";
const description =
  "Entreprise de plâtrerie, peinture, gypserie, isolation et rénovation à Genève. Devis gratuit sous 48h.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl || "https://example.com"),
  title,
  description,
  keywords: [
    "plâtrerie genève",
    "peinture genève",
    "isolation genève",
    "gypserie genève",
    "rénovation genève",
    "entreprise bâtiment genève",
    "plâtrier peintre genève",
    "devis peinture genève",
    "isolation thermique genève",
    "isolation acoustique genève",
    "rénovation appartement genève",
    "peintre bâtiment genève",
    "crépi façade genève",
    "faux plafond genève",
    "cloison sèche genève",
    "papier peint genève",
    "ravalement façade genève",
    "devis gratuit bâtiment genève",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Plâtrerie, peinture et rénovation à Genève",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${instrumentSerif.variable} ${interTight.variable}`}>
      <head>
        <meta name="geo.region" content="CH-GE" />
        <meta name="geo.placename" content="Genève" />
        <meta name="geo.position" content="46.2044;6.1432" />
        <meta name="ICBM" content="46.2044, 6.1432" />
        <SchemaMarkup />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
