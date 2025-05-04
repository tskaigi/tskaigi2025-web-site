import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "行動規範",
  twitter: {
    title: "行動規範",
  },
  openGraph: {
    title: "行動規範",
  },
  robots: "noindex, nofollow",
};

const CodeOfConductPage = () => {
  return (
    <main className="bg-blue-light-100 pt-16 py-10 md:px-8">
      <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16 md:text-3xl lg:text-4xl">
        TSKaigi行動規範
      </h1>
      <div className="bg-white p-6 flex flex-col gap-6 max-w-screen-xl mx-auto md:rounded-xl lg:p-10 text-lg">
        <section>
          <p>
            TSKaigiに参加するすべての人は下記の行動規範を守ることを求められます。主催者はこの行動規範をカンファレンス、パーティ、交流会に適用します。すべての人にとって安全な場所を提供するため、聴講者、登壇者、スポンサー、主催スタッフ含めたすべての参加者にご協力をお願いします。
          </p>
        </section>
        <section>
          <p>
            私たちは、性別、性的指向、障害、人種、民族、宗教、年齢に関係なく、全ての参加者を受け入れる環境作りに努めています。私たちは、考え方や経験の多様性を尊重します。
          </p>
        </section>
        <section>
          <p>
            参加者は、敬意を持って建設的に意見を交換することが奨励されます。私たちは、オープンな対話と、異なる視点を尊重した交流を大切にします。
          </p>
        </section>
        <section>
          <p>いかなる種類のハラスメントも容認されません。これには、</p>
          <ul className="list-disc pl-6 py-2">
            <li>攻撃的な暴言</li>
            <li>意図的な脅迫</li>
            <li>ストーカー行為</li>
            <li>嫌がらせのような写真撮影や録音</li>
            <li>継続的な話の妨害</li>
            <li>不適切な身体的接触</li>
            <li>好ましくない性的嫌がらせ</li>
            <li>以上のような行為を推奨したり、擁護したりすること</li>
          </ul>
          <p>などが含まれます。</p>
        </section>
        <section>
          <p>
            当カンファレンスの参加者、講演者、スポンサー、ボランティアはすべて、この行動規範を守ることに同意しなければなりません。主催者は大会期間中、この規範を徹底します。
          </p>
        </section>
        <section>
          <p>
            参加者が本規範に違反する行為を行った場合、私たちは、違反者への警告、または払い戻しなしのカンファレンスからの除名など、適切と思われる措置を取ることができます。
          </p>
        </section>
        <section>
          <p>
            ハラスメントを受けている場合、または他の誰かがハラスメントを受けていることに気づいた場合、あるいはその他の懸念事項がある場合は、直ちにカンファレンススタッフまたは
            <a
              href="mailto:coc@tskaigi.org?subject=お問い合わせ"
              className="text-link-light underline"
              aria-label="メールで連絡"
            >
              coc@tskaigi.org
            </a>
            までご連絡ください。
          </p>
        </section>
        <section>
          <p>
            トラブルを最小限に抑えるため
            <span className="text-orange-500 font-bold">
              絶対に個人で対応しないでください。
            </span>
            警備員や警察への連絡などを含め、安心してカンファレンスに参加できるようにお手伝いさせていただきます。
          </p>
        </section>
        <section>
          <p>
            TSKaigiは、すべての人に安全で快適な、そして利用しやすい経験を提供することに専心しています。すべての参加者にとって前向きで充実したカンファレンスとなるよう、共に取り組んでいきましょう。
          </p>
        </section>
      </div>
    </main>
  );
};

export default CodeOfConductPage;
