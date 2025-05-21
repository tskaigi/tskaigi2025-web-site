import CommunityMap from "@/components/CommunityMap";
import { communityEventList } from "@/constants/communityEventList";
import { communityList } from "@/constants/communityList";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コミュニティ",
  twitter: {
    title: "コミュニティ",
  },
  openGraph: {
    title: "コミュニティ",
  },
};

const CommunityPage = () => {
  return (
    <main className="bg-blue-light-100 pt-16 pb-10 md:px-8 flex-1">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-light-500 text-center py-10 md:py-16">
        コミュニティ
      </h1>
      <div className="bg-white p-6 md:rounded-xl max-w-screen-xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-24 font-bold">コミュニティ日本地図</h2>

          <CommunityMap className="w-full h-auto" />

          {Object.entries(communityList).map(
            ([area, { label, communities }]) => (
              <div
                className="w-full flex flex-col gap-4 items-start"
                key={area}
              >
                <h3
                  className="bg-yellow-100 text-lg font-bold text-center py-2 w-full"
                  id={area}
                >
                  {label}
                </h3>
                {communities.length > 0 ? (
                  communities.map((community) => (
                    <Link
                      href={community.link}
                      target="_blank"
                      className="px-5 text-link-light underline underline-offset-2 flex items-center gap-1"
                      key={community.name}
                    >
                      {community.name}
                      <ExternalLink size={16} className="translate-y-0.5" />
                    </Link>
                  ))
                ) : (
                  <p className="px-5  text-black">
                    コミュニティ情報募集中！TSKaigi
                    2025会場で掲示しているコミュニティ日本地図に直接書き込みできます
                  </p>
                )}
              </div>
            ),
          )}
        </div>

        <div className="flex flex-col items-center gap-8">
          <h2 className="text-24 font-bold">イベント予定カレンダー</h2>

          {Object.entries(communityEventList).map(([month, events]) => (
            <div className="w-full flex flex-col gap-4" key={month}>
              <h3 className="bg-yellow-100 text-lg font-bold text-center py-2">
                {month}
              </h3>
              {events.map((event) => (
                <div className="px-5 flex items-center gap-4" key={event.name}>
                  <div className="bg-green-100 px-4 py-2 rounded-md min-w-32 text-center text-black text-14">
                    {event.schedule}
                  </div>
                  <Link
                    href={event.link}
                    target="_blank"
                    className="text-blue-500 flex items-center gap-1"
                  >
                    {event.name}
                    <ExternalLink size={16} className="translate-y-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p>
          ※ コミュニティ日本地図で使用している地図画像は、
          <a
            href="https://x.com/kabipanotoko"
            target="_blank"
            rel="noreferrer"
            className="text-link-light"
          >
            kabipanotoko
          </a>
          さんの作品「
          <a
            href="https://www.kabipan.com/geography/whitemap/"
            target="_blank"
            rel="noreferrer"
            className="text-link-light"
          >
            日本の白地図
          </a>
          」（
          <a
            href="https://creativecommons.org/licenses/by-nc/2.1/jp/"
            target="_blank"
            rel="noreferrer"
            className="text-link-light"
          >
            CC BY-NC 2.1JP
          </a>
          ）を改変して作成したもので、
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noreferrer"
            className="text-link-light"
          >
            CC BY-NC 4.0 International
          </a>
          のもとに提供されています。
        </p>
      </div>
    </main>
  );
};

export default CommunityPage;
