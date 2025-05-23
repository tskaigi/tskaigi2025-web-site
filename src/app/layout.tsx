import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TSKaigi 2025",
    default: "TSKaigi 2025",
  },
  metadataBase: new URL("https://2025.tskaigi.org/"),
  description:
    "TSKaigiは日本最大級のTypeScriptをテーマとした技術カンファレンスです。2025/5/23 (金) - 24 (土) の日程で開催します。",
  applicationName: "TSKaigi 2025",
  authors: [
    {
      name: "一般社団法人TSKaigi Association",
      url: "https://association.tskaigi.org/",
    },
  ],
  keywords: [
    "TypeScript",
    "TSKaigi",
    "TS会議",
    "カンファレンス",
    "イベント",
    "オンライン",
  ],
  publisher: "TSKaigi.org",
  robots: "index, follow",
  twitter: {
    title: {
      template: "%s | TSKaigi 2025",
      default: "TSKaigi 2025",
    },
    description:
      "TSKaigiは、日本最大級のTypeScriptをテーマとした技術カンファレンスです",
    card: "summary_large_image",
    site: "@tskaigi",
    creator: "@tskaigi",
    images: ["/banner.jpg"],
  },
  openGraph: {
    title: {
      template: "%s | TSKaigi 2025",
      default: "TSKaigi 2025",
    },
    url: "https://2025.tskaigi.org/",
    description:
      "TSKaigiは日本最大級のTypeScriptをテーマとした技術カンファレンスです。2025/5/23 (金) - 24 (土) の日程で開催します。",
    type: "website",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${outfit.variable} ${notoSansJP.variable} font-noto`}>
        <Suspense>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
