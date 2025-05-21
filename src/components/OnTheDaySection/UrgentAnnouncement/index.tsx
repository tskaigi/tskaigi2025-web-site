import { Caution } from "@/components/OnTheDaySection/Notes/Caution";
import { LinkText } from "@/components/OnTheDaySection/Notes/LinkText";

/**
 * @description
 * 緊急のお知らせを表示するコンポーネント。緊急時以外は表示しない。
 */
export function UrgentAnnouncement({
  isVisible,
}: {
  /**コンポーネントを表示するかどうか */
  isVisible: boolean;
}) {
  if (!isVisible) return null;

  return (
    <section
      className="bg-white w-full flex flex-col gap-3 justify-center rounded-lg md:rounded-2xl px-6 py-5 md:px-8 md:py-6"
      role="alert"
      aria-labelledby="alert_description"
    >
      <span id="alert_description" className="sr-only">
        緊急のお知らせ
      </span>
      <Caution>
        ダミーの緊急のお知らせです。詳細は
        <LinkText href="https://example.com" target="_blank">
          こちら
        </LinkText>
        詳細はダミーの緊急のお知らせです。
        をご覧ください。ダミーの緊急のお知らせです。詳細はダミーの緊急のお知らせです。詳細はダミーの緊急のお知らせです。
      </Caution>
      <Caution>
        <LinkText href="https://example.com" target="_blank">
          ダミーの緊急のお知らせです。
        </LinkText>
      </Caution>
    </section>
  );
}
