import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-blue-light-100 pt-16 py-10 md:px-8">{children}</main>
      <Footer />
    </>
  );
}
