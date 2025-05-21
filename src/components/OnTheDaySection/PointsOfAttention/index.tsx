import { Caution } from "../Notes/Caution";

/**
 * @description 諸注意事項
 */
export function PointsOfAttention() {
  return (
    <div className="flex flex-col p-6 border border-blue-500 rounded-xl gap-3">
      <Caution>
        会場にはwifi(id,passはお手持ちのリーフレット参照)がありますのでご自由にお使いください。ただし、遅延を避けるためdocker
        pull等、負荷が懸念される操作はご遠慮ください。
      </Caution>
      <Caution>
        各トラックルーム、最前列のカバー付きの椅子は個人スポンサーの優先席です。個人スポンサーの優先入場時にTシャツの確認をさせていただいております。
      </Caution>
      <Caution>
        本日は記録のために、カメラマンが撮影を行っています。個別対応はできかねますので、あらかじめご了承ください。
      </Caution>
      <Caution>
        地下一階のホワイエ(エスカレーターを降りた場所)は、飲食禁止エリアとなっています。各トラックのルーム内や、休憩室でお済ませください。
      </Caution>
      <Caution>
        受付は会場2Fにございます。必ず受付をお済ませのうえ、ご入場ください。
      </Caution>
      <Caution>
        1日目に受付をお済ませの方は、2日目の受付は不要です。ただし、ネックストラップは必ずご着用ください。
      </Caution>
    </div>
  );
}
