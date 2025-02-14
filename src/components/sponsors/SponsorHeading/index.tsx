import type { SponsorClass } from "@/app/wip/sponsors/type";

const borderColor: { [key in SponsorClass]: string } = {
  Platinum: "border-blue-purple-600",
  Gold: "border-yellow-600",
  Silver: "border-blue-light-500",
  Bronze: "border-orange-600",
};

const textColor: { [key in SponsorClass]: string } = {
  Platinum: "text-blue-purple-600",
  Gold: "text-yellow-600",
  Silver: "text-blue-light-500",
  Bronze: "text-orange-600",
};

const SponsorHeading = ({ variant }: { variant: SponsorClass }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <hr className={`flex-1 border-t ${borderColor[variant]}`} />
      <h2
        className={`font-bold text-2xl ${textColor[variant]} md:text-3xl lg:text-3xl`}
      >
        {variant} Sponsors
      </h2>
      <hr className={`flex-1 border-t ${borderColor[variant]}`} />
    </div>
  );
};

export default SponsorHeading;
