import { staffList } from "@/constants/staffList";

export function StaffSection() {
  return (
    <section className="pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 md:text-28 leading-normal md:leading-[42px] text-center font-bold pb-8 md:pb-10">
        スタッフ一覧
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,120px)] md:grid-cols-[repeat(4,120px)] lg:grid-cols-[repeat(5,120px)] justify-center gap-x-14 gap-y-8 px-10">
        {staffList.map(({ name, image, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <img
                src={image}
                alt={`${name} アイコン`}
                className="w-full h-auto rounded-full overflow-hidden"
              />
              <p className="text-16 leading-7">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
