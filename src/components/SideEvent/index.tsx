import { ExternalLink } from "lucide-react";
import Image from "next/image";

export type SideEventProps = {
  date: string;
  name: string;
  link: string;
  isClosed?: boolean;
  thumbnail: string;
  detail: string;
  tags?: string[];
  sponsors: string[];
};

const SideEvent = ({
  date,
  name,
  link,
  isClosed = false,
  thumbnail,
  detail,
  tags,
  sponsors,
}: SideEventProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      <h2 className="text-2xl">
        <span className="font-bold pr-1">{date.split(" ")[0]}</span>
        <br className="hidden md:block" />
        {date.split(" ")[1]}
      </h2>
      <hr className="border border-black-200 block h-auto" />
      <div className="flex flex-col gap-5 pb-8 md:pb-24">
        <h3>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-bold underline underline-offset-2 inline align-middle"
          >
            {name}
            <ExternalLink className="inline size-5 ml-2 align-middle" />
          </a>
          {isClosed && (
            <span className="bg-black-400 text-white px-3 py-1 text-xs font-bold rounded-md align-middle ml-2 mt-1 inline-block">
              終了済み
            </span>
          )}
        </h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-5">
            <Image
              src={thumbnail}
              alt={name}
              width={800}
              height={600}
              className="w-full md:max-w-xl lg:min-w-96"
            />
            <p className="leading-7 md:text-lg md:leading-8 lg:hidden">
              {detail}
            </p>
            {tags && (
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <p
                    key={tag}
                    className="bg-blue-light-500 text-xs font-bold px-3 py-1 text-white rounded-md"
                  >
                    # {tag}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <p className="leading-7 md:text-lg md:leading-8 hidden lg:inline">
              {detail}
            </p>
            <p className="md:text-lg lg:text-base lg:text-right">
              スポンサー: {sponsors.join("、 ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideEvent;
