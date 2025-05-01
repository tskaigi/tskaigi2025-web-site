import { personalSponsorList } from "@/constants/personalSponsorList";

type SponsorContainerProps = {
  link: string | undefined;
  children: React.ReactNode;
};

const SponsorContainer = ({ link, children }: SponsorContainerProps) => {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2"
      >
        {children}
      </a>
    );
  }

  return <div className="flex flex-col items-center gap-2">{children}</div>;
};

type ImageCardProps = {
  name: string;
  imgSrc: string;
};
const ImageCard = ({ name, imgSrc }: ImageCardProps) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-auto rounded-full overflow-hidden"
      />
    </div>
  );
};

const PersonalSponsorsSection = () => {
  return (
    <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 md:text-32 leading-normal md:leading-[48px] text-center font-bold pb-8 md:pb-10">
        個人スポンサー
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,120px)] md:grid-cols-[repeat(4,144px)] lg:grid-cols-[repeat(5,144px)] justify-center gap-x-14 gap-y-8 px-4">
        {personalSponsorList
          // TODO: ImageCard に画像がない場合、tskaigi default の画像を出す
          .filter((s) => typeof s.imgSrc === "string")
          .map(({ name, link, imgSrc }) => (
            <li key={name}>
              <SponsorContainer link={link}>
                <ImageCard name={name} imgSrc={imgSrc as string} />
                <p className="text-lg font-bold">{name}</p>
              </SponsorContainer>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default PersonalSponsorsSection;
