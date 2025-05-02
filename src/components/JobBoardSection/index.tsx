import { sponsorList } from "@/constants/sponsorList";
import Image from "next/image";
import Link from "next/link";

type JobBoard = {
  imagePath: string;
  link: string;
  companyName: string;
};

export function JobBoardSection() {
  const sponsorListWithJobBoard = [
    ...sponsorList.platinum,
    ...sponsorList.gold,
    ...sponsorList.silver,
  ].filter((sponsor) => sponsor.jobBoard !== undefined);

  const jobBoardList: JobBoard[] = sponsorListWithJobBoard.map((sponsor) => ({
    imagePath: sponsor.jobBoard?.imagePath || "",
    link: sponsor.jobBoard?.link || "",
    companyName: sponsor.name,
  }));

  return (
    <section className="pt-10 md:pt-20 pb-10 px-6 md:pb-20 md:px-10 bg-blue-light-100">
      <h2 className="text-24 md:text-32 leading-normal md:leading-[48px] text-center font-bold pb-8 md:pb-10">
        JOB BOARD
      </h2>

      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobBoardList.map((jobBoard, index) => (
          <Link
            key={`job-board-${jobBoard.link}-${index}`}
            href={jobBoard.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={jobBoard.imagePath}
              alt={`${jobBoard.companyName}のジョブボード`}
              width={1200}
              height={600}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
