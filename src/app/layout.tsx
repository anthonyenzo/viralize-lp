import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viralize AI | Crie Conteúdo Viral em Segundos",
  description: "A plataforma all-in-one para criadores de conteúdo digital. Posts visuais, Reels automatizados e downloads sem marca d'água.",
  keywords: ["marketing digital", "automação", "reels", "shorts", "tiktok", "inteligência artificial", "viralize"],
  authors: [{ name: "Anthony Enzo" }],
  openGraph: {
    title: "Viralize AI | Crie Conteúdo Viral em Segundos",
    description: "Domine as redes sociais com automações e IA de ponta.",
    url: "https://viralizeaimachine.com",
    siteName: "Viralize AI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viralize AI Machine",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viralize AI | Crie Conteúdo Viral em Segundos",
    description: "Domine as redes sociais com automações e IA de ponta.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-white selection:bg-primary/30 selection:text-primary`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
