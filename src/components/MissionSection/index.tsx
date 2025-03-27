import { Decoration } from "../Decoration";
import { VenueInformation } from "../VenueInformation";

function MissionSessionContent() {
  return (
    <div className="p-6 flex flex-col justify-center md:p-10 lg:max-w-[940px] lg:mx-auto lg:py-16">
      <h2 className="text-sm text-center md:text-lg">MISSION</h2>

      <p className="text-blue-500 text-xl font-bold text-center mt-1 lg:mt-4 md:text-2xl lg:text-3xl">
        学び、繋がり、
        <span className="text-2xl md:text-4xl lg:text-[42px] font-noto">
          ”型”
        </span>
        を破ろう
      </p>
      <div className="flex justify-center mt-4 lg:mt-6">
        <Decoration />
      </div>
      <div className="mt-6 text-16 md:text-18 lg:mt-10 leading-[1.8]">
        <p>
          2024年に産声をあげ、大盛況のうちに幕を閉じた TSKaigi
          を今年も開催します！
        </p>
        <br />
        <p>
          私たちは、誰かの発表を聞くだけでなく、他の誰かに向けて発表することもまた学びの一つだと考えています。
          参加者、登壇者、スタッフ、スポンサーをはじめ、TSKaigi
          に関わるすべての人たちが互いに学び合い、新たな繋がりを生み出し、型にとらわれないエンジニアとして生き生きと活躍できる世界を目指します。
          その実現に向け、今年は会場を中野から神田へ移し、2日間開催とすることで、大幅にパワーアップしました。
        </p>
        <br />
        <p>
          TypeScript
          に関するあらゆるテーマを扱う国内最大級のカンファレンスとして、まさに「型破り」なイベントを目指し成長を続ける
          TSKaigi にご期待ください。
        </p>
      </div>
      <VenueInformation />
    </div>
  );
}

export function MissionSection() {
  return (
    <section className="bg-blue-light-100">
      <MissionSessionContent />
    </section>
  );
}
