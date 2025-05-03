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
  imgSrc: string | undefined;
};
const ImageCard = ({ name, imgSrc }: ImageCardProps) => {
  const DefaultImage = () => {
    return (
      <div className="flex justify-center items-center w-36 h-36 bg-white rounded-full">
        <svg
          width="52"
          height="39"
          viewBox="0 0 52 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`${name}のデフォルトアイコン`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.6678 13.2801C37.8907 12.5743 39.2649 12.2306 40.7661 12.2306C41.9006 12.2306 43.1083 12.208 44.1962 12.208C45.1602 12.208 45.9417 11.4298 45.9417 10.47V7.67029C45.9417 6.81141 46.6543 6.11523 47.5337 6.11523H49.5806C50.4599 6.11523 51.1726 6.81141 51.1726 7.67029C51.1723 10.4684 51.1726 13.2663 51.1726 16.0644C51.1726 16.9486 50.5098 17.6784 49.6518 17.7882H41.159C40.7005 17.7882 40.3088 17.9001 39.9606 18.1155C39.5917 18.3438 39.3093 18.6339 39.101 18.993C38.9132 19.3569 38.8194 19.743 38.8194 20.1641C38.8194 20.6113 38.9144 21.0058 39.0968 21.3625C39.3039 21.7001 39.575 21.9808 39.9197 22.2089C40.2663 22.4017 40.6608 22.5044 41.1233 22.5044H43.5532C45.1853 22.5044 46.6426 22.8199 47.8913 23.4909C49.1445 24.1516 50.1251 25.0761 50.8072 26.2613C51.5132 27.4472 51.8549 28.793 51.8549 30.2712C51.8549 31.965 51.5097 33.5132 50.783 34.8204C50.0894 36.0868 49.1207 37.0877 47.8854 37.8055L47.8826 37.8069L47.88 37.8085C46.6626 38.5049 45.2954 38.8437 43.8019 38.8437H32.2458C31.2736 38.8437 30.4761 38.062 30.4761 37.0865V35.0946C30.4761 34.1191 31.2736 33.3373 32.2458 33.3373H43.2687C43.7286 33.3373 44.1694 33.2308 44.5595 32.9851C44.9563 32.735 45.2495 32.4241 45.4564 32.0484L45.4597 32.0423L45.4633 32.0364C45.6979 31.6252 45.8063 31.2157 45.8063 30.7955C45.8063 30.3025 45.6972 29.8797 45.4919 29.5073C45.0614 28.7258 44.2202 28.2885 43.3399 28.2885L41.0161 28.3117C39.4845 28.3117 38.0781 27.9995 36.8164 27.3558L36.8058 27.3506L36.7955 27.345C35.5626 26.6753 34.5753 25.7445 33.8483 24.561C33.1047 23.3503 32.7506 21.9441 32.7506 20.378C32.7506 18.819 33.0896 17.4111 33.7982 16.184C34.4951 14.9537 35.4546 13.9805 36.6678 13.2801Z"
            fill="url(#paint0_linear_2131_2083)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.2037 0H1.68747C0.691027 0 0 0.846767 0 1.74227V3.69361C0 4.58921 0.691027 5.43586 1.68747 5.43586C5.16017 5.43586 8.63298 5.4361 12.1056 5.4361C13.0694 5.4361 13.8508 6.21409 13.8508 7.17407C13.8508 15.1859 13.8654 23.1979 13.8734 31.2099C13.8734 32.6065 14.172 33.9013 14.7838 35.0766L14.7873 35.0836L14.7911 35.0905C15.4261 36.2616 16.3097 37.2081 17.4347 37.9154L17.4413 37.9196L17.4481 37.9238C18.5962 38.6188 19.9178 38.9529 21.3788 38.9569H23.0932C23.9048 38.9569 24.5629 38.3221 24.5629 37.539V34.9393C24.5629 34.1561 23.9048 33.5048 23.0932 33.5048H21.4389C20.9271 33.5048 20.5556 33.3236 20.2495 32.9958C19.9201 32.6429 19.7576 32.2364 19.7576 31.7267C19.7678 23.5498 19.7868 15.3732 19.7868 7.1964C19.7868 6.23666 20.5683 5.45843 21.5321 5.45843C26.7229 5.45843 31.9853 5.43586 37.2037 5.43586C38.2001 5.43586 38.8911 4.58921 38.8911 3.69361V1.74227C38.8911 0.846767 38.2001 0 37.2037 0Z"
            fill="url(#paint1_linear_2131_2083)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2131_2083"
              x1="39.4598"
              y1="6.11523"
              x2="50.6339"
              y2="40.1169"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0653878" stopColor="#96B8FD" />
              <stop offset="0.366472" stopColor="#1249D8" />
              <stop offset="0.69" stopColor="#1249D8" />
              <stop offset="1" stopColor="#3DE8FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2131_2083"
              x1="5.72011e-08"
              y1="1.01922"
              x2="38.8873"
              y2="5.35804"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.055" stopColor="#63D0FF" />
              <stop offset="0.468184" stopColor="#1249D8" />
              <stop offset="0.676929" stopColor="#1249D8" />
              <stop offset="0.955" stopColor="#FF86B9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-auto rounded-full overflow-hidden"
        />
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
