import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { WebsiteJsonLd, OrganizationJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casinoguide.example.com"),
  title: {
    default: "CasinoGuide – Expert Casino Game Reviews & Download Guides",
    template: "%s | CasinoGuide",
  },
  description:
    "Expert reviews, download guides, winning strategies, and the latest bonuses for India's top online casino games. Trusted by 1 million+ players.",
  keywords: [
    "online casino games india",
    "casino game reviews",
    "aviator game download",
    "teen patti gold",
    "online rummy",
    "casino bonus india",
  ],
  authors: [{ name: "CasinoGuide Editorial Team" }],
  creator: "CasinoGuide",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "CasinoGuide",
    title: "CasinoGuide – Expert Casino Game Reviews & Download Guides",
    description:
      "Expert reviews, download guides, and strategies for India's top online casino games.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CasinoGuide – Expert Casino Game Reviews",
    description: "Expert reviews and download guides for India's top casino games.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

