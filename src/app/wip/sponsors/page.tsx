import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Company from "./_components/company";
import SponsorHeading from "./_components/sponserHeading";
import companies from "./companies";
import type { SponsorClass } from "./type";

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-light-100 pt-16 py-10">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10">
          スポンサー一覧
        </h1>

        <div className="bg-white p-6 flex flex-col gap-6">
          {Object.entries(companies).map(([key, value]) => {
            return (
              <div key={key}>
                <SponsorHeading variant={key as SponsorClass} />

                <ul>
                  {value.map((company) => (
                    <li key={company.name}>
                      <Company {...company} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
