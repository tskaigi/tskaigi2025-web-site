import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タイムテーブル",
  twitter: {
    title: "タイムテーブル",
  },
  openGraph: {
    title: "タイムテーブル",
  },
};

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
