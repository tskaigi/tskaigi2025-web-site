import type { SponsorClass } from "@/constants/sponsorList";

const borderColor: { [key in SponsorClass]: string } = {
  platinum: "border-blue-purple-600",
  gold: "border-yellow-600",
  silver: "border-blue-light-500",
  bronze: "border-orange-600",
};

const textColor: { [key in SponsorClass]: string } = {
  platinum: "text-blue-purple-600",
  gold: "text-yellow-600",
  silver: "text-blue-light-500",
  bronze: "text-orange-600",
};

const SponsorHeading = ({ variant }: { variant: SponsorClass }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <hr className={`flex-1 border-t ${borderColor[variant]}`} />
      <h2
        className={`font-bold text-2xl ${textColor[variant]} md:text-3xl lg:text-3xl`}
      >
        {`${variant[0].toUpperCase()}${variant.slice(1)}`} Sponsors
      </h2>
      <hr className={`flex-1 border-t ${borderColor[variant]}`} />
    </div>
  );
};

export default SponsorHeading;
