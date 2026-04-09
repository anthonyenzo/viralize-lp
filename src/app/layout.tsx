import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
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
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '830240032781729');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-white selection:bg-primary/30 selection:text-primary`}
      >
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=830240032781729&ev=PageView&noscript=1"
          />
        </noscript>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
