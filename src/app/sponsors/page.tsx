import { SponsorsBoardItem } from "@/components/SponsorsBoardSection/SponsorsBoardItem";
import Company from "@/components/sponsors/Company";
import SponsorHeading from "@/components/sponsors/SponsorHeading";
import { type SponsorClass, sponsorList } from "@/constants/sponsorList";
import { cn } from "@/lib/utils";

const SponsorsPage = () => {
  return (
    <main className="bg-blue-light-100 pt-16 py-10 md:px-8">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>

      <div className="bg-white p-6 flex flex-col gap-10 max-w-screen-xl mx-auto md:rounded-xl lg:p-10">
        {Object.entries(sponsorList).map(([key, value]) => {
          return (
            <div key={key} className="flex flex-col gap-12">
              <SponsorHeading variant={key as SponsorClass} />

              {key !== "bronze" ? (
                <ul className="flex flex-col gap-6">
                  {value.map(
                    (company, idx, value) =>
                      // 企業確認済みかつロゴ画像がある場合のみアイテムを表示
                      company.isTenantChecked &&
                      company.logoImage && (
                        <li key={company.name} className="flex flex-col gap-6">
                          <Company isWip={false} {...company} />
                          {idx !== value.length - 1 && (
                            <hr className="border-t-2 border-black-200" />
                          )}
                        </li>
                      )
                  )}
                </ul>
              ) : (
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {value.map(
                    (company, idx, value) =>
                      // 企業確認済みかつロゴ画像がある場合のみアイテムを表示
                      company.isTenantChecked &&
                      company.logoImage && (
                        <li key={company.name}>
                          <SponsorsBoardItem
                            key={company.id}
                            className={cn(
                              "w-full h-[96px]",
                              company.addPadding ? "p-4" : "p-2"
                            )}
                            src={company.logoImage}
                            alt={company.name}
                            href={company.logoLink}
                            width={211}
                            height={96}
                          />
                        </li>
                      )
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SponsorsPage;
