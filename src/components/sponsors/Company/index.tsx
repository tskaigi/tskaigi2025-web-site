import type { Sponsor } from "@/constants/sponsorList";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "../ExternalLink";
import RoleBadge from "../RoleBadge";

type Props = Sponsor & {
  isWip: boolean;
};

const Company = ({
  name,
  logoImage,
  logoImageForSponsorsPage,
  overview,
  roles,
  links,
  detailPageId,
  isWip,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-3 md:flex-row md:items-start md:gap-x-8 lg:gap-x-10">
      {isWip ? (
        <Link
          href={`/wip/sponsors/${detailPageId}`}
          className="flex-shrink-0 md:w-1/3 lg:w-1/4"
        >
          <Image
            src={logoImageForSponsorsPage || logoImage}
            alt={name}
            width={1280}
            height={640}
            className="w-full aspect-video lg:aspect-video object-contain"
          />
        </Link>
      ) : (
        <Image
          src={logoImageForSponsorsPage || logoImage}
          alt={name}
          width={1280}
          height={640}
          className="flex-shrink-0 md:w-1/3 lg:w-1/4 aspect-video lg:aspect-video object-contain"
        />
      )}

      <div className="flex flex-col gap-y-3">
        <div className="flex gap-2">
          {roles?.map((role) => {
            return <RoleBadge key={role} role={role} />;
          })}
        </div>

        <div className="flex flex-col gap-y-6 text-base md:text-lg">
          <p className="font-bold text-xl md:text-2xl lg:text-[28px]">{name}</p>

          {overview?.map((text) => (
            <p key={text} className="whitespace-pre-wrap leading-8">
              {text}
            </p>
          ))}

          {links && (
            <ul className="list-disc list-inside flex flex-col gap-y-2">
              {links.map((link) => (
                <li key={link.title} className="marker:text-xs">
                  <ExternalLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Company;
