import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SideEvent from "@/components/SideEvent";
import { sideEventList } from "@/constants/sideEventList";

const SideEventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-blue-light-100 pt-16 flex-1">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10">
          サイドイベント
        </h1>
        <div className="bg-white p-6 flex flex-col gap-6">
          <p>
            TSKaigiのスポンサー企業によって実施される、TSKaigiのサイドイベントをご紹介します。ご参加お待ちしております！
            <br />※ 正確な情報は各イベントページをご確認ください。
          </p>

          {sideEventList.map((event, i) => (
            <SideEvent key={i} {...event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SideEventsPage;
