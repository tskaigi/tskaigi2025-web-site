const mockSponsorList = Array(9)
  .fill({
    name: "スポンサー名",
    description: "",
    logoImage: "/logo.svg",
    logoLink: "/",
    links: [{ href: "/", text: "公式サイト" }],
  })
  .map((sponsor) => ({ ...sponsor, id: Math.random().toString(36) }));

export const sponsorList = {
  platinum: mockSponsorList.slice(0, 4),
  gold: mockSponsorList.slice(0, 7),
  silver: mockSponsorList.slice(0, 7),
  bronze: mockSponsorList,
  eventPlatform: mockSponsorList.slice(0, 1),
  refreshment: mockSponsorList.slice(0, 1),
  coffee: mockSponsorList.slice(0, 1),
  beer: mockSponsorList.slice(0, 1),
};
