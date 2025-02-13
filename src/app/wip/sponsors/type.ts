export type SponsorClass = "Platinum" | "Gold" | "Silver" | "Bronze";
export type SponsorRole = SponsorClass | "Coffee";
export type ExternalLinkProps = { title: string; href: string };
export type CompanyProps = {
  name: string;
  overview: string[];
  roles: SponsorRole[];
  links?: ExternalLinkProps[];
};
