import { personalSponsorList } from "@/constants/personalSponsorList";
import Image from "next/image";

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
  imgSrc: string | undefined;
};
const ImageCard = ({ name, imgSrc }: ImageCardProps) => {
  const DefaultImage = () => {
    return (
      <div className="flex justify-center items-center w-36 h-36 bg-white rounded-full p-8 md:p-10 lg:p-10">
        <Image
          src="/defaultIcon.svg"
          alt="TSKaigi"
          width={256}
          height={256}
          className="w-full"
        />
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-full aspect-square rounded-full overflow-hidden">
      {imgSrc ? (
        <img src={imgSrc} alt={name} className="w-full h-auto" />
      ) : (
        <DefaultImage />
      )}
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
          .map(({ name, link, imgSrc }) => (
            <li key={name}>
              <SponsorContainer link={link}>
                <ImageCard name={name} imgSrc={imgSrc} />
                <p className="text-lg font-bold text-center">{name}</p>
              </SponsorContainer>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default PersonalSponsorsSection;
