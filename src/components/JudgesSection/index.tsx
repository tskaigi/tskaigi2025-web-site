const judgesList = [
  {
    name: "うひょ",
    image: "/judges/uhyo.jpg",
    href: "https://x.com/uhyo_",
  },
  {
    name: "Quramy",
    image: "/judges/quramy.png",
    href: "https://x.com/Quramy",
  },
  {
    name: "hiroppy",
    image: "/judges/hiroppy.png",
    href: "https://x.com/about_hiroppy",
  },
];

export function JudgesSection() {
  return (
    <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 md:text-32 leading-normal md:leading-[48px] text-center font-bold pb-8 md:pb-10">
        トーク&LT審査員
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,192px)] md:grid-cols-[repeat(auto-fit,224px)] justify-center gap-x-14 gap-y-8 px-10">
        {judgesList.map(({ name, image, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={image}
                alt=""
                className="w-full h-auto rounded-full overflow-hidden"
              />
              <p className="text-lg font-bold">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
