import { Caution } from "@/components/AnnouncementSection/Notes/Caution";

export function Announcement() {
  return (
    <section
      className="bg-white w-full flex flex-col gap-3 justify-center rounded-lg md:rounded-2xl px-6 py-5 md:px-8 md:py-6 mb-8 md:mb-10"
      role="alert"
      aria-labelledby="alert_description"
    >
      <span id="alert_description" className="sr-only">
        運営からのお知らせ
      </span>
      <Caution>TSKaigi 2025は終了しました。</Caution>
      <Caution>ご参加いただいた皆さん、ありがとうございました。</Caution>
    </section>
  );
}
