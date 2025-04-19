type SponsorClass = "high" | "medium" | "low";
type StudentSupportSponsor = {
  id: string;
  name: string;
  logoImage: string;
  logoLink: string;
  addPadding?: boolean;
};

export const studentSupportSponsorList: {
  [key in SponsorClass]: StudentSupportSponsor[];
} = {
  high: [
    {
      id: "G07",
      name: "トグルホールディングス株式会社",
      logoImage: "/sponsors/toggle.png",
      logoLink: "https://toggle.co.jp/",
    },
  ],
  medium: [
    {
      id: "S14",
      name: "株式会社TOKIUM",
      logoImage: "/sponsors/tokium.jpg",
      logoLink: "https://corp.tokium.jp/",
      addPadding: true,
    },
    {
      id: "S12",
      name: "株式会社ドワンゴ",
      logoImage: "/sponsors/dwango.png",
      logoLink: "https://dwango.co.jp/",
    },
  ],
  low: [
    {
      id: "G01",
      name: "レバレジーズ株式会社",
      logoImage: "/sponsors/leverages.jpg",
      logoLink: "https://recruit.leverages.jp/recruit/engineer/",
    },
    {
      id: "P06",
      name: "株式会社TwoGate",
      logoImage: "/sponsors/twogate.svg",
      logoLink: "https://twogate.com/",
    },
  ],
};
