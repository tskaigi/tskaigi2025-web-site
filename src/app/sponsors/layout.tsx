import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-blue-light-100 pt-16 py-10 md:px-8 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
