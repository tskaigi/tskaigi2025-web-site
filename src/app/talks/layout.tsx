import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | TSKaigi 2025",
    default: "タイムテーブル",
  },
  twitter: {
    title: {
      template: "%s | TSKaigi 2025",
      default: "タイムテーブル",
    },
  },
  openGraph: {
    title: {
      template: "%s | TSKaigi 2025",
      default: "タイムテーブル",
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
