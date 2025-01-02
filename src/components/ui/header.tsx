import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 flex items-center justify-between p-4 md:px-6">
      <Link href="/" className="text-blue-600 font-bold text-xl">
        <Image
          src="/logo.svg"
          alt="TSKaigi"
          width={98}
          height={36}
          className="w-[78px] h-[28px] md:w-[98px] md:h-[36px]"
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm font-bold">
          <li>
            <Link
              href="#mission"
              className="text-link-light hover:text-link-dark"
            >
              ミッション
            </Link>
          </li>
          <li>
            <Link
              href="#proposal"
              className="text-link-light hover:text-link-dark"
            >
              プロポーザル募集
            </Link>
          </li>
          <li>
            <Link
              href="#sponsors"
              className="text-link-light hover:text-link-dark"
            >
              スポンサー一覧
            </Link>
          </li>
          <li>
            <Link
              href="#staff"
              className="text-link-light hover:text-link-dark"
            >
              スタッフ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
