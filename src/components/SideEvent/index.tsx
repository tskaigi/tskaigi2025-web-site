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
    <div className="flex flex-col gap-4 pb-8">
      <h2 className="text-2xl font-bold">{date}</h2>
      <hr className="border border-black-200" />
      <div className="flex flex-col gap-5">
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="text-xl font-bold underline underline-offset-2 inline align-middle">
            {name}
          </h3>
          <ExternalLink className="inline size-5 mx-1 mt-1 align-middle" />
        </a>

        <Image src={thumbnail} alt={name} width={800} height={600} />
        <p className="leading-7">{detail} </p>
        {tags && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-blue-light-500 text-xs px-3 py-1 text-white rounded-md"
              >
                # {tag}
              </div>
            ))}
          </div>
        )}
        <p>スポンサー: {sponsors.join("、 ")}</p>
      </div>
    </div>
  );
};

export default SideEvent;
