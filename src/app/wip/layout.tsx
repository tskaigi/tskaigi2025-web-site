import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default function WipLayout({ children }: Props) {
  return <>{children}</>;
}
