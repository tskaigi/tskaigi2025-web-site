import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TalkLayout({ children }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      {children}
      <Footer />
    </Suspense>
  );
}
