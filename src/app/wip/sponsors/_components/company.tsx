import Image from "next/image";
import type { CompanyProps } from "../type";
import ExternalLink from "./externalLink";
import RoleBadge from "./roleBadge";

const Company = ({ name, overview, roles, links }: CompanyProps) => {
  return (
    <div className="flex flex-col gap-x-8 gap-y-6 md:flex-row md:items-start">
      <Image
        src={"/"}
        alt={name}
        width={1280}
        height={640}
        className="bg-gray-200 w-1/3 flex-shrink-0"
      />

      <div className="flex flex-col gap-6 text-base md:text-lg">
        <div className="flex gap-2">
          {roles.map((role) => {
            return <RoleBadge key={role} variant={role} />;
          })}
        </div>

        <p className="font-bold text-xl md:text-2xl">{name}</p>

        {overview.map((text) => (
          <p key={text} className="whitespace-pre-wrap leading-8">
            {text}
          </p>
        ))}

        {links && (
          <ul className="list-disc list-inside">
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
