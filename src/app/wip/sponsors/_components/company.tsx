import Link from "next/link";
import Image from "next/image";

const Company = () => {
  return (
    <>
      <Image
        src={"/"}
        alt="会社名"
        width={600}
        height={400}
        className="bg-gray-200"
      />
      <p>一般社団法人 TSKaigi</p>
      <p>こちらに紹介文が入ります</p>
      <p>
        こちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入りますこちらに紹介文が入ります
      </p>
      <ul>
        <li>
          <Link href={"/"}>リンク</Link>
        </li>
        <li>
          <Link href={"/"}>リンク</Link>
        </li>
        <li>
          <Link href={"/"}>リンク</Link>
        </li>
      </ul>
    </>
  );
};

export default Company;
