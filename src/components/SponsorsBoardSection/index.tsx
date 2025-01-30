import { sponsorList } from "../../constants/sponsorList";
import { SponsorsBoardItem } from "./SponsorsBoardItem";
import { SponsorsBoardTitle } from "./SponsorsBoardTitle";

export function SponsorsBoardSection() {
  return (
    <section className="md:px-10 bg-blue-light-100">
      <h2 className="pt-10 pb-8 lg:pt-16 lg:pb-10 flex flex-col md:flex-row md:justify-center md:gap-2 text-24 md:text-32 leading-normal md:leading-[42px] text-center font-bold font-noto">
        <span>TSKaigi 2025</span>
        <span>スポンサー各社</span>
      </h2>

      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-blue-purple-600 after:bg-blue-purple-600">
          <h3 className="text-blue-purple-600 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
            Platinum Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-4 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-3 place-items-center">
          {sponsorList.platinum.map((sponsor) => (
            <SponsorsBoardItem
              key={sponsor.id}
              className={`w-[343px] md:w-[218px] lg:w-[389px] h-[162px] md:h-[192px] ${sponsor.addPadding ? "p-8" : "p-2"}`}
              src={sponsor.logoImage}
              alt={sponsor.name}
              href={sponsor.logoLink}
              width={389}
              height={192}
            />
          ))}
        </div>
      </div>

      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-yellow-600 after:bg-yellow-600">
          <h3 className="text-yellow-600 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
            Gold Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-4 md:px-0 grid gap-4 grid-cols-2 md:grid-cols-4 place-items-center">
          {sponsorList.gold.map((sponsor) => (
            <SponsorsBoardItem
              key={sponsor.id}
              className={`w-[163px] md:w-[160px] lg:w-[288px] h-[144px] ${sponsor.addPadding ? "p-8" : "p-2"}`}
              src={sponsor.logoImage}
              alt={sponsor.name}
              href={sponsor.logoLink}
              width={288}
              height={144}
            />
          ))}
        </div>
      </div>

      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-blue-light-500 after:bg-blue-light-500">
          <h3 className="text-blue-light-500 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
            Silver Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-4 md:px-0 grid gap-4 grid-cols-3 md:grid-cols-5 place-items-center">
          {sponsorList.silver.map((sponsor) => (
            <SponsorsBoardItem
              key={sponsor.id}
              className={`w-[106px] md:w-[124px] lg:w-[227px] h-[112px] ${sponsor.addPadding ? "p-2" : "p-1"}`}
              src={sponsor.logoImage}
              alt={sponsor.name}
              href={sponsor.logoLink}
              width={227}
              height={112}
            />
          ))}
        </div>
      </div>

      <div className="pb-8 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-orange-600 after:bg-orange-600">
          <h3 className="text-orange-600 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
            Bronze Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="pt-6 px-4 md:px-0 grid gap-2 md:gap-4 grid-cols-4 md:grid-cols-6 place-items-center">
          {sponsorList.bronze.map((sponsor) => (
            <SponsorsBoardItem
              key={sponsor.id}
              className={`w-[79px] md:w-[101px] lg:w-[186px] h-[96px] ${sponsor.addPadding ? "p-2" : "p-1"}`}
              src={sponsor.logoImage}
              alt={sponsor.name}
              href={sponsor.logoLink}
              width={186}
              height={96}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
