import { TALK_TYPE, TRACK, usernames } from "@/constants/talkList";
import { getTalk } from "@/utils/getTalk";
import { shouldDisplaySpeakerInfo } from "@/utils/shouldDisplaySpeakerInfo";
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentProps } from "react";

import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export async function generateStaticParams() {
  return usernames;
}

const description = "TSKaigi 2025 のスピーカー、トーク情報です。";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const talk = getTalk(username);

  return {
    title: talk.title,
    description,
    twitter: {
      title: talk.title,
      description,
      images: [
        {
          url: `/ogp/talks/${talk.speaker.username}.png`,
        },
      ],
    },
    openGraph: {
      title: talk.title,
      description,
      images: [
        {
          url: `/ogp/talks/${talk.speaker.username}.png`,
        },
      ],
    },
  };
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
  a: ({ node, href, ...props }) => {
    if (!href) return null;
    return (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-link-light hover:underline"
        href={href}
        {...props}
      />
    );
  },
  ul: ({ node, ...props }) => (
    <ul className="text-gray-700 list-disc list-inside pl-6" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="text-gray-700 list-decimal list-inside pl-6" {...props} />
  ),
  pre: ({ node, ...props }) => (
    <pre className="bg-gray-100 p-4 rounded-lg text-wrap" {...props} />
  ),
};

export default async function TalkDetailPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const talk = getTalk(username);

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
            src={`/ogp/talks/${talk.speaker.username}.png`}
            alt={talk.title}
          />
        </div>

        <div className="px-6 md:px-8 lg:px-10 flex flex-col gap-1">
          <div className="text-lg">{TALK_TYPE[talk.talkType].name}</div>
          <div className="text-2xl font-bold">{talk.title}</div>
          <div className="text-lg font-bold">
            {talk.eventDate} / {talk.time} （{TRACK[talk.track].name}）
          </div>
        </div>

        {/* トーク説明文 */}
        <div className="px-6 md:px-8 lg:px-10 gap-6 flex flex-col md:text-lg">
          <Markdown components={components} remarkPlugins={[remarkBreaks]}>
            {talk.overview}
          </Markdown>
        </div>

        {/* スピーカー情報 */}
        {shouldDisplaySpeakerInfo(talk.talkType) && (
          <div className="mt-4 px-6 md:px-8 lg:px-10">
            <div className="bg-blue-light-200 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* アイコン */}
                <div className="w-[180px] md:w-[220px] aspect-square shrink-0 rounded-full overflow-hidden">
                  <img
                    src={`/talks/speaker/${
                      talk.speaker.profileImagePath || "dummy.png"
                    }`}
                    alt={talk.speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {/* 名前 */}
                  <p className="font-bold text-22">{talk.speaker.name}</p>

                  {/* 自己紹介 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-700 text-16 md:text-18">
                      {talk.speaker.affiliation}
                      {talk.speaker.affiliation &&
                        talk.speaker.position &&
                        " / "}
                      {talk.speaker.position}
                    </p>
                    <p className="text-gray-700 text-16 md:text-18">
                      {talk.speaker.bio}
                    </p>
                    {talk.speaker.additionalLink && (
                      <Link
                        href={talk.speaker.additionalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 text-16 md:text-18 underline break-all"
                      >
                        {talk.speaker.additionalLink}
                      </Link>
                    )}
                  </div>

                  {/* SNSリンク */}
                  <div className="flex gap-2 mt-2">
                    {talk.speaker.xId && (
                      <Link
                        href={`https://x.com/${talk.speaker.xId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/talks/sns/x-logo.png"
                          alt="X"
                          width={36}
                          height={36}
                        />
                      </Link>
                    )}
                    {talk.speaker.githubId && (
                      <Link
                        href={`https://github.com/${talk.speaker.githubId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/talks/sns/github-logo.png"
                          alt="GitHub"
                          width={36}
                          height={36}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
