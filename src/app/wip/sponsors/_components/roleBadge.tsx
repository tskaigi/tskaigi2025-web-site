import type { SponsorRole } from "../type";

const bgColor: { [key in SponsorRole]: string } = {
  Platinum: "bg-blue-purple-600",
  Gold: "bg-yellow-600",
  Silver: "bg-blue-light-500",
  Bronze: "bg-orange-600",
  Coffee: "bg-black-500",
};

const roleBadge = ({ variant }: { variant: SponsorRole }) => {
  return (
    <span
      className={`font-bold text-sm text-white px-3 py-1 rounded-s rounded-e ${bgColor[variant]}`}
    >
      {variant}
    </span>
  );
};

export default roleBadge;
