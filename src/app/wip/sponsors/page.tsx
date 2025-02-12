import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

import { SponsorsBoardTitle } from "@/components/SponsorsBoardSection/SponsorsBoardTitle";
import type { Sponsor } from "@/constants/sponsorList";
import { sponsorList } from "@/constants/sponsorList";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

const GenerateSponserTag = (name: string, classes: string[]) => {
  return () => (
    <span
      className={`py-1 px-3 font-bold text-[14px] rounded-[4px] ${classes.join(" ")}`}
    >
      {name}
    </span>
  );
};

export const PlatinumSponsorTag = GenerateSponserTag("Platinum", [
  "bg-blue-600",
  "text-14",
  "text-white",
]);

export const GoldSponsorTag = GenerateSponserTag("Gold", [
  "bg-yellow-600",
  "text-14",
  "text-white",
]);

export const SilverSponsorTag = GenerateSponserTag("Silver", [
  "bg-blue-500",
  "text-14",
  "text-white",
]);

type SponsorItemProps = {
  sponsor: Sponsor;
  Tag: () => JSX.Element;
};

const introductionFixture = `
こちらに紹介文が入ります

こちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入ります
`;

const linkFixture: Sponsor["links"] = [
  {
    text: "リンク1",
    href: "https://2025.tskaigi.org/",
  },
  {
    text: "リンク2",
    href: "https://2025.tskaigi.org/",
  },
  {
    text: "リンク3",
    href: "https://2025.tskaigi.org/",
  },
];

const SponsorItem = ({ sponsor, Tag }: SponsorItemProps) => {
  return (
    <div className="py-6 flex">
      <div className="py-6 flex items-start shrink-0">
        <Image
          src={sponsor.logoImage}
          alt={sponsor.name}
          width={300}
          height={150}
          className="object-contain rounded-[10px] bg-white"
        />
      </div>
      <div className="py-6 ml-[32px] flex-start">
        <div className="mb-4">
          <Tag />
        </div>
        <div>
          <h3 className="font-bold text-[28px]">{sponsor.name}</h3>
          <div className="text-[18px] whitespace-pre-line">
            {sponsor.introduction || introductionFixture}
          </div>
          <ul className="mt-4">
            {(sponsor.links || linkFixture)?.map((link) => (
              <li key={link.text} className="list-disc last:mb-0 mb-2">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-link-light underline"
                >
                  {link.text}
                  <ExternalLink
                    className="ml-2 text-link-light size-5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function SponsorList() {
  return (
    <>
      <Header />
      <main className="py-16 px-10 bg-blue-100">
        <div>
          <div className="my-16 text-center">
            <h1 className="text-32 text-blue-500 font-bold">スポンサー一覧</h1>
          </div>
          <div className="py-16 px-10 bg-white">
            <SponsorsBoardTitle titleClassName="before:bg-blue-purple-600 after:bg-blue-purple-600">
              <h2 className="text-blue-purple-600 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
                Platinum Sponsors
              </h2>
            </SponsorsBoardTitle>
            <div>
              {sponsorList.platinum.map((platinumSponsor, index) => {
                return (
                  <div key={platinumSponsor.id}>
                    <SponsorItem
                      sponsor={platinumSponsor}
                      Tag={PlatinumSponsorTag}
                    />
                    {index < sponsorList.platinum.length - 1 && (
                      <hr className="my-4 border-t border-black-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-16 px-10 bg-white">
            <SponsorsBoardTitle titleClassName="before:bg-yellow-600 after:bg-yellow-600">
              <h2 className="text-yellow-600 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
                Gold Sponsors
              </h2>
            </SponsorsBoardTitle>
            <div>
              {sponsorList.gold.map((goldSponsor, index) => {
                return (
                  <div key={goldSponsor.id}>
                    <SponsorItem sponsor={goldSponsor} Tag={GoldSponsorTag} />
                    {index < sponsorList.gold.length - 1 && (
                      <hr className="my-4 border-t border-black-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-16 px-10 bg-white">
            <SponsorsBoardTitle titleClassName="before:bg-blue-500 after:bg-blue-500">
              <h2 className="text-blue-500 text-22 md:text-28 leading-normal md:leading-[42px] font-bold font-noto">
                Silver Sponsors
              </h2>
            </SponsorsBoardTitle>
            <div>
              {sponsorList.silver.map((silverSponsor, index) => {
                return (
                  <div key={silverSponsor.id}>
                    <SponsorItem
                      sponsor={silverSponsor}
                      Tag={SilverSponsorTag}
                    />
                    {index < sponsorList.silver.length - 1 && (
                      <hr className="my-4 border-t border-black-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
