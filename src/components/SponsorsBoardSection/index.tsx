import { SponsorsBoardItem } from "./SponsorsBoardItem";

export function SponsorsBoardSection() {
  return (
    <section className="px-10 bg-blue-light-100">
      <h2 className="pt-16 pb-10 text-2xl text-center font-bold font-noto sm:text-[32px]">
        <span className="inline-block pr-2">TSKaigi 2025</span>
        <span className="inline-block">スポンサー各社</span>
      </h2>

      <SponsorsBoardItem
        title="Platinum Sponsors"
        titleClassName="text-blue-purple-600 before:bg-blue-purple-600 after:bg-blue-purple-600"
      >
        <div className="text-center">placeholder</div>
      </SponsorsBoardItem>

      <SponsorsBoardItem
        title="Gold Sponsors"
        titleClassName="text-yellow-600 before:bg-yellow-600 after:bg-yellow-600"
      >
        <div className="text-center">placeholder</div>
      </SponsorsBoardItem>

      <SponsorsBoardItem
        title="Silver Sponsors"
        titleClassName="text-blue-light-500 before:bg-blue-light-500 after:bg-blue-light-500"
      >
        <div className="text-center">placeholder</div>
      </SponsorsBoardItem>

      <div className="flex">
        <SponsorsBoardItem
          itemClassName="w-1/2 pr-6"
          title="Event Platform"
          titleClassName="text-black-400 before:bg-black-400 after:bg-black-400"
        >
          <div className="text-center">placeholder</div>
        </SponsorsBoardItem>
        <SponsorsBoardItem
          itemClassName="w-1/2"
          title="Refreshment"
          titleClassName="text-black-400 before:bg-black-400 after:bg-black-400"
        >
          <div className="text-center">placeholder</div>
        </SponsorsBoardItem>
      </div>

      <div className="flex">
        <SponsorsBoardItem
          itemClassName="w-1/2 pr-6"
          title="Coffee"
          titleClassName="text-black-400 before:bg-black-400 after:bg-black-400"
        >
          <div className="text-center">placeholder</div>
        </SponsorsBoardItem>
        <SponsorsBoardItem
          itemClassName="w-1/2"
          title="Beer"
          titleClassName="text-black-400 before:bg-black-400 after:bg-black-400"
        >
          <div className="text-center">placeholder</div>
        </SponsorsBoardItem>
      </div>

      <SponsorsBoardItem
        title="Bronze Sponsors"
        titleClassName="text-orange-600 before:bg-orange-600 after:bg-orange-600"
      >
        <div className="text-center">placeholder</div>
      </SponsorsBoardItem>
    </section>
  );
}
