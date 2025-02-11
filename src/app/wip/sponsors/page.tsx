import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Company from "./_components/company";
import companies from "./_companies";

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-light-100 pt-16 py-10">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10">
          スポンサー一覧
        </h1>

        <ul className="bg-white">
          {companies.map((company) => (
            <li>
              <Company {...company} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
