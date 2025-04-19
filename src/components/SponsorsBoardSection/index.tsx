import { studentSupportSponsorList } from "@/constants/studentSupportSponsorList";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { sponsorList } from "../../constants/sponsorList";
import { SponsorsBoardItem } from "./SponsorsBoardItem";
import { SponsorsBoardTitle } from "./SponsorsBoardTitle";

export function SponsorsBoardSection({ isWip = false }: { isWip?: boolean }) {
  return (
    <section className="md:px-10 bg-blue-light-100">
      <h2 className="pt-10 pb-8 lg:pt-16 lg:pb-10 flex flex-col md:flex-row md:justify-center md:gap-2 text-24 md:text-32 leading-normal md:leading-[42px] text-center font-bold font-noto">
        <span>TSKaigi 2025</span>
        <span>スポンサー各社</span>
      </h2>

      {/* プラチナスポンサー */}
      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-blue-purple-600 after:bg-blue-purple-600">
          <h3 className="text-blue-purple-600 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
            Platinum Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-6 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto">
          {sponsorList.platinum.map(
            (sponsor) =>
              // 企業確認済みかつロゴ画像がある場合、またはwipページの時アイテムを表示
              ((sponsor.isTenantChecked && sponsor.logoImage) || isWip) && (
                <SponsorsBoardItem
                  key={sponsor.id}
                  className={cn(
                    "w-full h-full",
                    sponsor.addPadding ? "p-8" : "p-4",
                  )}
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  width={389}
                  height={192}
                />
              ),
          )}
        </div>
      </div>

      {/* ゴールドスポンサー */}
      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-yellow-600 after:bg-yellow-600">
          <h3 className="text-yellow-600 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
            Gold Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-6 md:px-0 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl mx-auto">
          {sponsorList.gold.map(
            (sponsor) =>
              // 企業確認済みかつロゴ画像がある場合、またはwipページの時アイテムを表示
              ((sponsor.isTenantChecked && sponsor.logoImage) || isWip) && (
                <SponsorsBoardItem
                  key={sponsor.id}
                  className={cn(
                    "w-full h-full",
                    sponsor.addPadding ? "p-8" : "p-4",
                  )}
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  width={288}
                  height={144}
                />
              ),
          )}
        </div>
      </div>

      {/* シルバースポンサー */}
      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-blue-light-500 after:bg-blue-light-500">
          <h3 className="text-blue-light-500 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
            Silver Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-6 md:px-0 grid gap-3 md:gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full max-w-7xl mx-auto">
          {sponsorList.silver.map(
            (sponsor) =>
              // 企業確認済みかつロゴ画像がある場合、またはwipページの時アイテムを表示
              ((sponsor.isTenantChecked && sponsor.logoImage) || isWip) && (
                <SponsorsBoardItem
                  key={sponsor.id}
                  className={cn(
                    "w-full h-full",
                    sponsor.addPadding ? "p-4" : "p-2",
                  )}
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  width={227}
                  height={112}
                />
              ),
          )}
        </div>
      </div>

      {/* ブロンズスポンサー */}
      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-orange-600 after:bg-orange-600">
          <h3 className="text-orange-600 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
            Bronze Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-6 md:px-0 grid gap-2 md:gap-4 grid-cols-4 md:grid-cols-5 lg:grid-cols-6 w-full max-w-7xl mx-auto">
          {sponsorList.bronze.map(
            (sponsor) =>
              // 企業確認済みかつロゴ画像がある場合、またはwipページの時アイテムを表示
              ((sponsor.isTenantChecked && sponsor.logoImage) || isWip) && (
                <SponsorsBoardItem
                  key={sponsor.id}
                  className={cn(
                    "w-full h-full",
                    sponsor.addPadding ? "p-4" : "p-2",
                  )}
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  width={186}
                  height={96}
                />
              ),
          )}
        </div>
      </div>

      {/* 学生支援スポンサー */}
      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-green-600 after:bg-green-600">
          <h3 className="text-green-600 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
            学生支援
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 flex flex-col items-center gap-2 md:gap-4 w-full max-w-7xl mx-auto">
          <div className="flex justify-center gap-2 md:gap-4 w-full">
            {studentSupportSponsorList.high.map((sponsor) => (
              <Link
                href={sponsor.logoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video w-[22%] md:w-[18%] lg:w-[16%]"
                key={sponsor.id}
              >
                <Image
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  width={186}
                  height={96}
                  className={cn(
                    "object-contain rounded-[10px] bg-white w-full h-full",
                    sponsor.addPadding ? "p-4" : "p-2",
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2 md:gap-4 w-full">
            {studentSupportSponsorList.medium.map((sponsor) => (
              <Link
                href={sponsor.logoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video w-[20%] md:w-[16%] lg:w-[14%]"
                key={sponsor.id}
              >
                <Image
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  width={186}
                  height={96}
                  className={cn(
                    "object-contain rounded-[10px] bg-white w-full h-full",
                    sponsor.addPadding ? "p-4" : "p-2",
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2 md:gap-4 w-full">
            {studentSupportSponsorList.low.map((sponsor) => (
              <Link
                href={sponsor.logoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video w-[18%] md:w-[14%] lg:w-[12%]"
                key={sponsor.id}
              >
                <Image
                  src={sponsor.logoImage}
                  alt={sponsor.name}
                  width={186}
                  height={96}
                  className={cn(
                    "object-contain rounded-[10px] bg-white w-full h-full",
                    sponsor.addPadding ? "p-4" : "p-2",
                  )}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
