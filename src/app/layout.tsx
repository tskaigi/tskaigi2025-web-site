import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import type React from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${outfit.variable} ${notoSansJP.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
