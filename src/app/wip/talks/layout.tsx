import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
