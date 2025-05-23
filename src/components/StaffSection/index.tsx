import { type Staff, staffList } from "@/constants/staffList";
import { useMemo } from "react";

export function StaffSection() {
  const sortedStaffList = useMemo(() => {
    const alphabetStaff: Staff[] = [];
    const japaneseStaff: Staff[] = [];

    for (const staff of staffList) {
      if (/^[a-zA-Z]/.test(staff.name)) {
        alphabetStaff.push(staff);
      } else {
        japaneseStaff.push(staff);
      }
    }

    alphabetStaff.sort((a, b) => a.name.localeCompare(b.name, "en"));
    japaneseStaff.sort((a, b) => a.name.localeCompare(b.name, "ja"));

    return [...alphabetStaff, ...japaneseStaff];
  }, []);

  return (
    <section className="pb-10 md:pb-20 bg-blue-light-100">
      <h2 className="text-24 lg:text-28 leading-normal text-center font-bold pb-8 md:pb-10">
        スタッフ一覧
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,120px)] md:grid-cols-[repeat(4,120px)] lg:grid-cols-[repeat(5,120px)] justify-center gap-x-14 gap-y-14 md:gap-y-8 px-4">
        {sortedStaffList.map(({ name, image, href }) => (
          <li key={name}>
            <LinkOrBox href={href}>
              <img
                src={image}
                alt={`${name} アイコン`}
                className="w-full h-full object-cover rounded-full overflow-hidden aspect-square"
              />
              <p className="text-16 leading-7 text-center">{name}</p>
            </LinkOrBox>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LinkOrBox({
  children,
  href,
}: { children: React.ReactNode; href: Staff["href"] }) {
  return href === "" ? (
    <div className="flex flex-col items-center gap-2">{children}</div>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2"
    >
      {children}
    </a>
  );
}
