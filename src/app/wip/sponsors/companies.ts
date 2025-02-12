import type { CompanyProps } from "./_components/company";
import type { SponsorClass } from "./type";

const companies: { [key in SponsorClass]: CompanyProps[] } = {
  Platinum: [
    {
      name: "一般社団法人 TSKaigi",
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
    {
      name: "一般社団法人 TSKaigi",
    },
  ],
  Gold: [
    {
      name: "一般社団法人 TSKaigi",
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
  ],
  Silver: [
    {
      name: "一般社団法人 TSKaigi",
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
  ],
  Bronze: [
    {
      name: "一般社団法人 TSKaigi",
      links: [
        { title: "リンク1", href: "/" },
        { title: "リンク2", href: "/" },
      ],
    },
  ],
};

export default companies;
