const coreStaffList = [
  {
    name: "takezoux2",
    image: "/coreStaff/takezoux2.jpg",
    href: "https://x.com/takezoux2",
  },
  {
    name: "meso",
    image: "/coreStaff/meso.jpg",
    href: "https://x.com/meso",
  },
  {
    name: "berlysia",
    image: "/coreStaff/berlysia.jpg",
    href: "https://x.com/berlysia",
  },
  {
    name: "niwa-takeru",
    image: "/coreStaff/niwa-takeru.jpg",
    href: "https://x.com/niwa_takeru",
  },
];

export function CoreStaffSection() {
  return (
    <section className="pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 lg:text-28 leading-normal text-center font-bold pb-8 md:pb-10">
        コアスタッフ
      </h2>
      <ul className="grid grid-cols-[repeat(2,120px)] md:grid-cols-[repeat(2,144px)] lg:grid-cols-[repeat(4,144px)] justify-center gap-x-14 gap-y-8 px-10">
        {coreStaffList.map(({ name, image, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 aspect-square"
            >
              <img
                src={image}
                alt={`${name} アイコン`}
                className="w-full h-full object-cover rounded-full overflow-hidden"
              />
              <p className="text-16 leading-7">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
