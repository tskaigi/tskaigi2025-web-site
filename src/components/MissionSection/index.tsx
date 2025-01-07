import { Decoration } from "../Decoration";

export function MissionSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, rgba(133, 196, 255, 0.6) 0%, rgba(202, 230, 255, 0.6) 5.28%, rgba(233, 245, 255, 0.6) 8.92%)",
      }}
      className="relative -mt-8 -z-10 md:-mt-16 lg:-mt-24"
    >
      <div className="p-6 flex flex-col justify-center md:p-10 lg:max-w-[940px] lg:mx-auto lg:py-10">
        <h2 className="text-sm text-center md:text-lg">MISSION</h2>

        <p className="text-blue-500 text-xl font-bold text-center mt-1 lg:mt-4 md:text-2xl lg:text-3xl">
          学び、繋がり、
          <span className="text-2xl md:text-4xl lg:text-[42px] font-noto">”型”</span>
          を破ろう
        </p>
        <div className="flex justify-center mt-4 lg:mt-6">
          <Decoration />
        </div>
        <div className="mt-6 text-base leading-7 md:text-lg lg:mt-10">
          <p>
            TSKaigiは、日本最大級のTypeScriptをテーマとした技術カンファレンスです。
          </p>
          <p>
            コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。
          </p>
          <p>
            新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigiを開催します。
          </p>
        </div>
      </div>
    </section>
  );
}
