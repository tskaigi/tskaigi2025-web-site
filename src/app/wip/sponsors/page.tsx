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
      <main className="bg-blue-light-100 pt-16 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16">
          スポンサー一覧
        </h1>

        <div className="bg-white p-6 flex flex-col gap-6 md:rounded-xl">
          {Object.entries(companies).map(([key, value]) => {
            return (
              <>
                <SponsorHeading key={key} variant={key as SponsorClass} />

                <ul key={key} className="flex flex-col gap-6">
                  {value.map((company) => (
                    <li key={company.name}>
                      <Company {...company} />
                    </li>
                  ))}
                </ul>
              </>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
