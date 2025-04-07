import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export default function TalkLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
