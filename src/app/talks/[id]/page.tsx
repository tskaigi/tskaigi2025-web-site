import { talkIds } from "@/constants/talkList";
import { getTalk } from "@/utils/getTalk";
import type { ComponentProps } from "react";

import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export async function generateStaticParams() {
  return talkIds;
}

const components: ComponentProps<typeof Markdown>["components"] = {
  h1: ({ node, ...props }) => (
    <h1 className="text-2xl font-bold text-blue-light-500" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-xl font-bold text-blue-light-500" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-lg font-bold text-blue-light-500" {...props} />
  ),
  pre: ({ node, ...props }) => (
    <pre className="bg-gray-100 p-4 rounded-lg text-wrap" {...props} />
  ),
};

export default async function TalkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const talk = getTalk(id);

  return (
    <main className="bg-blue-light-100 pt-16 pb-10 md:py-16 md:px-8 lg:px-10">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16 md:text-3xl lg:text-4xl">
        トーク
      </h1>

      <div className="bg-white flex flex-col gap-6 max-w-screen-xl mx-auto md:rounded-xl pb-6 md:pb-8 lg:pb-10">
        {/* トーク OGP */}
        <div className="bg-black-100 flex justify-center md:mt-8 md:mx-8 lg:mt-10 lg:mx-10">
          <img
            width="730"
            height="383"
            className="w-full max-w-[730px] h-auto max-h-[383px] mx-auto object-contain"
            src={`/ogp/talks/${talk.id}.png`}
            alt="logo"
          />
        </div>

        {/* トーク説明文 */}
        <div className="px-6 md:px-8 lg:px-10 gap-6 flex flex-col md:text-lg">
          {talk.overview && (
            <Markdown components={components} remarkPlugins={[remarkBreaks]}>
              {talk.overview}
            </Markdown>
          )}
        </div>

        {/* スピーカー情報 */}
        {/* FIXME: デザイン未調整 */}
        {/* <div className="pt-8 p-10">
          <div className="bg-blue-light-200 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={`/talks/speaker/${talk.id}.jpg`}
                  alt={talk.speakerName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-lg">{talk.speakerName}</p>
                <div className="flex gap-2 mt-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
