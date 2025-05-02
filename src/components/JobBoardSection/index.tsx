import { sponsorList } from "@/constants/sponsorList";

export function JobBoardSection() {
  const jobBoardList = [
    ...sponsorList.platinum.filter((sponsor) => sponsor.jobBoard).map((sponsor) => sponsor.jobBoard),
    ...sponsorList.gold.filter((sponsor) => sponsor.jobBoard).map((sponsor) => sponsor.jobBoard),
    ...sponsorList.silver.filter((sponsor) => sponsor.jobBoard).map((sponsor) => sponsor.jobBoard),
  ];

  console.log(jobBoardList);

  return (
    <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 md:text-32 leading-normal md:leading-[48px] text-center font-bold pb-8 md:pb-10">
        ジョブボード
      </h2>
    </section>
  );
}
