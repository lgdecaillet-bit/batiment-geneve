import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const title = "Entreprise de Bâtiment Genève | Plâtrerie, Peinture, Isolation & Rénovation";
const description =
  "Entreprise de bâtiment à Genève spécialisée en plâtrerie, peinture, isolation et rénovation complète. Devis gratuit sous 48h. Plus de 500 projets réalisés dans le canton de Genève.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  keywords: [
    "entreprise bâtiment genève",
    "peinture genève",
    "plâtrerie genève",
    "isolation genève",
    "rénovation appartement genève",
    "rénovation genève",
    "façade genève",
    "devis bâtiment genève",
    "travaux rénovation genève",
    "plâtrier peintre genève",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: siteConfig.name,
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Entreprise de bâtiment à Genève — plâtrerie, peinture, isolation et rénovation",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${outfit.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
