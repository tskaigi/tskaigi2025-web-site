import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type CompanyProps = {
  name: string;
  links?: { title: string; href: string }[];
};

const Company = ({ name, links }: CompanyProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={"/"}
        alt={name}
        width={1280}
        height={640}
        className="bg-gray-200"
      />
      <p className="font-bold text-xl">{name}</p>
      <p className="text-base">こちらに紹介文が入ります</p>
      <p>
        こちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入ります
      </p>

      {links && (
        <ul className="list-disc list-inside">
          {links.map(({ title, href }) => {
            return (
              <li key={title} className="marker:text-xs">
                <Link
                  href={href}
                  className="text-link-light underline underline-offset-2 decoration-1 decoration-link-light"
                >
                  {title}
                  <ArrowUpRightFromSquare
                    size={16}
                    className="inline relative left-2"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Company;
