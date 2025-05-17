import { communityEventList } from "@/constants/communityEventList";
import { communityList } from "@/constants/communityList";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CommutityPage = () => {
  return (
    <main className="bg-blue-light-100 pt-16 pb-10 md:px-8 flex-1">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-light-500 text-center py-10 md:py-16">
        コミュニティ
      </h1>
      <div className="bg-white p-6 md:rounded-xl max-w-screen-xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-24 font-bold">コミュニティ日本地図</h2>

          <Image
            src={"/"}
            width={1600}
            height={900}
            alt=""
            className="bg-gray-100"
          />

          {Object.entries(communityList).map(([area, communities]) => (
            <div className="w-full flex flex-col gap-4 items-start" key={area}>
              <h3 className="bg-yellow-100 text-lg font-bold text-center py-2 w-full">
                {area}
              </h3>
              {communities.map((community) => (
                <Link
                  href={community.link}
                  className="px-5 text-link-light underline underline-offset-2 flex items-center gap-1"
                  key={community.name}
                >
                  {community.name}
                  <ExternalLink size={16} className="translate-y-0.5" />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <h2 className="text-24 font-bold">コミュニティカレンダー</h2>

          {Object.entries(communityEventList).map(([month, events]) => (
            <div className="w-full flex flex-col gap-4" key={month}>
              <h3 className="bg-yellow-100 text-lg font-bold text-center py-2">
                {month}
              </h3>
              {events.map((event) => (
                <Link
                  href={event.link}
                  className="px-5 text-link-light underline underline-offset-2 flex items-center gap-1"
                  key={event.name}
                >
                  {event.name}
                  <ExternalLink size={16} className="translate-y-0.5" />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CommutityPage;
