import Image from "next/image";
import type { CompanyProps } from "../type";
import ExternalLink from "./externalLink";
import RoleBadge from "./roleBadge";

const Company = ({ name, imageSrc, overview, roles, links }: CompanyProps) => {
  return (
    <div className="flex flex-col gap-y-6 md:flex-row md:items-start md:gap-x-8 lg:gap-x-10">
      <Image
        src={imageSrc || "/"}
        alt={name}
        width={1280}
        height={640}
        className="flex-shrink-0 md:w-1/3 lg:w-1/4 md:aspect-video lg:aspect-video object-contain"
      />

      <div className="flex flex-col gap-6 text-base md:text-lg">
        <div className="flex gap-2">
          {roles.map((role) => {
            return <RoleBadge key={role} variant={role} />;
          })}
        </div>

        <p className="font-bold text-xl md:text-2xl lg:text-3xl">{name}</p>

        {overview.map((text) => (
          <p key={text} className="whitespace-pre-wrap leading-8">
            {text}
          </p>
        ))}

        {links && (
          <ul className="list-disc list-inside flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.title} className="marker:text-xs">
                <ExternalLink {...link} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Company;
