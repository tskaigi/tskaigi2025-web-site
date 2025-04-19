import { personalSponsorList } from "@/constants/personalSponsorList";

const PersonalSponsorsSection = () => {
  return (
    <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 md:text-32 leading-normal md:leading-[48px] text-center font-bold pb-8 md:pb-10">
        個人スポンサー
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,120px)] md:grid-cols-[repeat(4,144px)] lg:grid-cols-[repeat(5,144px)] justify-center gap-x-14 gap-y-8 px-4">
        {personalSponsorList.map(({ name, link, imgSrc }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-auto rounded-full overflow-hidden"
              />
              <p className="text-lg font-bold">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalSponsorsSection;
