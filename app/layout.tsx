import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Oraculo LuzComAromas",
    template: "%s | Oraculo LuzComAromas"
  },
  description:
    "Um portal mistico de bem-estar com cristais, tarot e rituais aromaticos para iluminar escolhas.",
  keywords: ["tarot", "cristais", "bem-estar", "aromaterapia", "oraculo"],
  openGraph: {
    title: "Oraculo LuzComAromas",
    description:
      "Experiencias misticas para alinhar intuicao, energia e autocuidado.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <div className="min-h-screen overflow-hidden">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
