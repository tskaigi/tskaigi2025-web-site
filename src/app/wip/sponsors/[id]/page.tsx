import ExternalLink from "@/components/sponsors/ExternalLink";
import RoleBadge from "@/components/sponsors/RoleBadge";
import { sponsorId } from "@/constants/sponsorList";
import { getWipSponsor } from "@/utils/getSponsor";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return sponsorId;
}

export async function generateMetadata({
  params,
}: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const sponsor = getWipSponsor(id);

  return {
    twitter: {
      title: sponsor.name,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.detailPageId}.png`,
        },
      ],
    },
    openGraph: {
      title: sponsor.name,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.detailPageId}.png`,
        },
      ],
    },
  };
}

export default async function SponserDetailPage({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sponsor = getWipSponsor(id);

  return (
    <main>
      <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16 md:text-3xl lg:text-4xl">
        スポンサー詳細
      </h1>

      {sponsor && (
        <div className="bg-white p-6 flex flex-col gap-10 max-w-screen-xl mx-auto md:rounded-xl lg:p-10">
          <div>
            <img
              width="800"
              height="400"
              className="w-full max-w-[800px] h-auto max-h-[400px] mx-auto object-contain"
              src={sponsor.logoImage}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              {sponsor.roles.map((role) => (
                <RoleBadge key={role} role={role} />
              ))}
            </div>

            <p className="font-bold text-xl md:text-2xl lg:text-[28px]">
              {sponsor.name}
            </p>

            {sponsor.overview?.map((overview) => (
              <p key={overview} className="whitespace-pre-wrap">
                {overview}
              </p>
            ))}
          </div>

          <ul className="list-disc list-inside flex flex-col gap-y-2">
            {sponsor.links?.map((link) => (
              <li key={link.title}>
                <ExternalLink title={link.title} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
