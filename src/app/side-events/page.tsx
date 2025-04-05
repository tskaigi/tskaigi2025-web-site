import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SideEvent from "@/components/SideEvent";
import { sideEventList } from "@/constants/sideEventList";

const SideEventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-blue-light-100 pt-16 pb-10 flex-1 md:px-8 md:pb-16">
        <h1 className="text-2xl font-bold text-blue-light-500 text-center py-10 md:py-16">
          サイドイベント
        </h1>
        <div className="bg-white p-6 flex flex-col gap-6 md:rounded-xl md:p-8 lg:p-10">
          <p className="md:text-lg">
            TSKaigiのスポンサー企業によって実施される、TSKaigiのサイドイベントをご紹介します。ご参加お待ちしております！
            <br />※ 正確な情報は各イベントページをご確認ください。
          </p>

          <div className="flex flex-col gap-6 md:gap-0">
            {sideEventList.map((event) => (
              <SideEvent key={event.name} {...event} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SideEventsPage;
