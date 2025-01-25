import { SponsorsBoardTitle } from "./SponsorsBoardTitle";

export function SponsorsBoardSection() {
  return (
    <section className="md:px-10 bg-blue-light-100">
      <h2 className="max-w-xs md:max-w-none pt-10 pb-8 lg:pt-16 lg:pb-10 mx-auto text-24 md:text-32 leading-normal md:leading-[42px] text-center font-bold font-noto">
        <span className="inline-block pr-2">TSKaigi 2025</span>
        <span className="inline-block">スポンサー各社</span>
      </h2>

      <div className="pb-10 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-blue-purple-600 after:bg-blue-purple-600">
          <h3 className="text-blue-purple-600 text-22 md:text-28 leading-normal md:leading-[42px] text-center font-bold font-noto">
            Platinum Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="text-center">placeholder</div>
      </div>

      <div className="pb-10 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-yellow-600 after:bg-yellow-600">
          <h3 className="text-yellow-600 text-22 md:text-28 leading-normal md:leading-[42px] text-center font-bold font-noto">
            Gold Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="text-center">placeholder</div>
      </div>

      <div className="pb-10 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-blue-light-500 after:bg-blue-light-500">
          <h3 className="text-blue-light-500 text-22 md:text-28 leading-normal md:leading-[42px] text-center font-bold font-noto">
            Silver Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="text-center">placeholder</div>
      </div>

      <div className="flex gap-3 md:gap-6">
        <div className="w-1/2 pb-10 flex flex-col">
          <SponsorsBoardTitle titleClassName="before:bg-black-400 after:bg-black-400">
            <h3 className="text-black-400 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
              Event Platform
            </h3>
          </SponsorsBoardTitle>
          <div className="text-center">placeholder</div>
        </div>

        <div className="w-1/2 pb-10 flex flex-col">
          <SponsorsBoardTitle titleClassName="before:bg-black-400 after:bg-black-400">
            <h3 className="text-black-400 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
              Refreshment
            </h3>
          </SponsorsBoardTitle>
          <div className="text-center">placeholder</div>
        </div>
      </div>

      <div className="flex gap-3 md:gap-6">
        <div className="w-1/2 pb-10 flex flex-col">
          <SponsorsBoardTitle titleClassName="before:bg-black-400 after:bg-black-400">
            <h3 className="text-black-400 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
              Coffee
            </h3>
          </SponsorsBoardTitle>
          <div className="text-center">placeholder</div>
        </div>

        <div className="w-1/2 pb-10 flex flex-col">
          <SponsorsBoardTitle titleClassName="before:bg-black-400 after:bg-black-400">
            <h3 className="text-black-400 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
              Beer
            </h3>
          </SponsorsBoardTitle>
          <div className="text-center">placeholder</div>
        </div>
      </div>

      <div className="pb-10 flex flex-col">
        <SponsorsBoardTitle titleClassName="before:bg-orange-400 after:bg-orange-400">
          <h3 className="text-orange-600 text-16 md:text-28 leading-[28.8px] md:leading-[42px] font-bold font-noto">
            Bronze Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="text-center">placeholder</div>
      </div>
    </section>
  );
}
