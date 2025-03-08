import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const specificCommercialData = {
  販売業者: <p>一般社団法人 TSKaigi Association</p>,
  所在地: <p>東京都中央区東日本橋2-4-10 701</p>,
  メールアドレス: (
    <p>
      info<span className="hidden">dummy@text</span>@tskaigi.org
    </p>
  ),
  電話番号: <p>請求があった場合、遅滞なく開示します。</p>,
  運営統括責任者: <p>竹下義晃</p>,
  // 販売価格: "チケット販売ページをご確認ください",
  // 受付可能な決済手段: "クレジットカード",
  // 代金の支払い時期:
  //   "ご利用のクレジットカードの締め日や契約内容により異なります。ご利用されるカード会社までお問い合わせください。",
  引渡時期: (
    <p>
      TSKaigi 2025の開催期間は
      <span className="font-bold px-1">2025年5月23日から5月24日</span>
      です。お申し込み完了後、イベント当日に会場または指定の方法にてサービスを提供いたします。
    </p>
  ),
  "交換および返品（返金ポリシー）": (
    <p>
      お客様都合により参加をキャンセルする場合は、EventHub上からキャンセルください。所定の手数料を引いたうえでご返金いたします。
    </p>
  ),
  追加手数料等の追加料金: (
    <p>
      インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にて別途ご用意いただく必要があります。（金額は、お客様が契約した各事業者が定める通り）
    </p>
  ),
};

const SpecificCommercialPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-blue-light-100 pt-16 pb-10 md:px-8 flex-1">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-light-500 text-center py-10 md:py-16">
          特定商取引法に基づく表記
        </h1>
        <div className="bg-white p-6 md:rounded-xl max-w-screen-xl mx-auto">
          <table>
            <tbody>
              {Object.entries(specificCommercialData).map(([key, value]) => (
                <tr key={key} className="flex flex-col py-3 md:block">
                  <th className="p-2 border-gray-300 text-sm md:text-base md:w-36 text-left lg:w-72">
                    {key}
                  </th>
                  <td className="p-2 border-gray-300 md:pl-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpecificCommercialPage;
