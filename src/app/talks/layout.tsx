import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | TSKaigi 2025",
    default: "タイムテーブル | TSKaigi 2025",
  },
  twitter: {
    title: {
      template: "%s | TSKaigi 2025",
      default: "タイムテーブル | TSKaigi 2025",
    },
  },
  openGraph: {
    title: {
      template: "%s | TSKaigi 2025",
      default: "タイムテーブル | TSKaigi 2025",
    },
  },
};

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
