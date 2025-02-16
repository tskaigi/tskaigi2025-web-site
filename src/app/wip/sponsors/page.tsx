import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Company from "@/components/sponsors/Company";
import SponsorHeading from "@/components/sponsors/SponsorHeading";
import { type SponsorClass, sponsorList } from "@/constants/sponsorList";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-light-100 pt-16 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16 md:text-3xl lg:text-4xl">
          スポンサー一覧
        </h1>

        <div className="bg-white p-6 flex flex-col gap-10 max-w-screen-xl mx-auto md:rounded-xl lg:p-10">
          {Object.entries(sponsorList).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-col gap-12">
                <SponsorHeading variant={key as SponsorClass} />

                {key !== "bronze" ? (
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
                ) : (
                  <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
                    {value.map((company, idx, value) => (
                      <li key={company.name}>
                        <Image
                          src={company.logoImage}
                          alt={company.name}
                          width={1280}
                          height={640}
                          className="object-contain aspect-video"
                        />
                      </li>
                    ))}
                  </ul>
                )}
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
