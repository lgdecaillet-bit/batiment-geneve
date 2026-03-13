import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Entreprise de Bâtiment Genève | Plâtrerie, Peinture, Isolation",
  description:
    "Plâtrerie, peinture, isolation et rénovation complète. Des professionnels qualifiés, des résultats irréprochables, dans tout le canton de Genève.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
