import { ExternalLink } from "lucide-react";
import Image from "next/image";

export type SideEventProps = {
  date: string;
  link: string;
  name: string;
  thumbnail: string;
  detail: string;
  tags?: string[];
  sponsors: string[];
};

const SideEvent = ({
  date,
  link,
  name,
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
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="text-xl font-bold underline underline-offset-2 inline align-middle">
            {name}
          </h3>
          <ExternalLink className="inline size-5 mx-1 mt-1 align-middle" />
        </a>
        <Image
          src={thumbnail}
          alt={name}
          width={800}
          height={600}
          className="w-full md:max-w-xl"
        />
        <p className="leading-7 md:text-lg md:leading-8">{detail}</p>
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
        <p className="md:text-lg">スポンサー: {sponsors.join("、 ")}</p>
      </div>
    </div>
  );
};

export default SideEvent;
