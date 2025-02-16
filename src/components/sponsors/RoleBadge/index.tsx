import type { SponsorRole } from "@/constants/sponsorList";

const bgColor: { [key in SponsorRole]: string } = {
  platinum: "bg-blue-purple-600",
  gold: "bg-yellow-600",
  silver: "bg-blue-light-500",
  bronze: "bg-orange-600",
};

const roleBadge = ({ role }: { role: SponsorRole }) => {
  return (
    <span
      className={`font-bold text-sm text-white px-3 py-1 rounded-s rounded-e ${bgColor[role]}`}
    >
      {`${role[0].toUpperCase()}${role.slice(1)}`}
    </span>
  );
};

export default roleBadge;
