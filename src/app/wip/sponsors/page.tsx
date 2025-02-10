import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Company from "./_components/company";

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-light-100 pt-24">
        <ul className="bg-white">
          <li>
            <Company />
          </li>
          <li>
            <Company />
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
