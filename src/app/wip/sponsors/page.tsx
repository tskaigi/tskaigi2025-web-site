import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import Company from "./_components/company";
import SponsorHeading from "./_components/sponserHeading";
import companies from "./companies";
import type { SponsorClass } from "./type";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-light-100 pt-16 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16">
          スポンサー一覧
        </h1>

        <div className="bg-white p-6 flex flex-col gap-10 max-w-screen-xl mx-auto md:rounded-xl lg:p-10">
          {Object.entries(companies).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-col gap-12">
                <SponsorHeading variant={key as SponsorClass} />

                <ul className="flex flex-col gap-6">
                  {value.map((company, idx, value) => (
                    <li key={company.name} className="flex flex-col gap-6">
                      <Company {...company} />
                      {idx !== value.length - 1 && (
                        <hr className="border-t-2 border-black-200" />
                      )}
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
