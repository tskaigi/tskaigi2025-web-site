import Image from "next/image";
import Link from "next/link";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/talks",
    label: "タイムテーブル",
  },
  {
    href: "/sponsors",
    label: "スポンサー",
  },
  {
    href: "/side-events",
    label: "サイドイベント",
  },
  {
    href: "/code-of-conduct",
    label: "行動規範",
  },
  {
    href: "/specific-commercial",
    label: "特定商取引法に基づく表記",
  },
];

const Footer = () => {
  return (
    <footer className="text-white text-sm">
      <div className="px-10 py-16 flex flex-col gap-x-16 gap-y-10 max-w-5xl mx-auto md:flex-row md:p-16 lg:gap-x-24">
        <div className="flex flex-col gap-6 lg:w-72">
          <Image src="/logo-white.svg" alt="TSKaigi" width={126} height={41} />
          <p>一般社団法人 TSKaigi Association</p>
        </div>

        <div className="flex flex-col gap-3 lg:w-72">
          <p className="font-bold">ページ一覧</p>
          <ul className="flex flex-col gap-2.5 pl-3">
            {links.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 lg:w-72">
          <p className="font-bold">公式アカウント</p>
          <ul className="flex flex-col gap-2.5 pl-3">
            <li>
              <Link
                href="https://x.com/tskaigi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                公式X
              </Link>
            </li>
            <li>
              <Link
                href="https://tskaigi.hatenablog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@tskaigi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                公式Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
