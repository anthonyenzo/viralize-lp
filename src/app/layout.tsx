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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.location.hostname === 'viralizeaimachine.com') {
                  var path = window.location.pathname;
                  if (path === '/login' || path === '/registrar' || path === '/painel') {
                    window.location.href = 'https://app.viralizeaimachine.com' + path + window.location.search;
                  }
                }
              })();
            `,
          }}
        />
      </head>
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
