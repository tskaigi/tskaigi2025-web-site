import { ExternalLink } from "lucide-react";

export const VenueInformation = () => {
  return (
    <section className="flex flex-col items-center text-center my-[24px] md:my-[40px] lg:my-[64px] bg-white px-[24px] md:px-[40px] lg:px-[40ox] rounded-lg">
      <div className="py-[32px]">
        <div className="space-y-1 mb-8 px-6">
          <h2>
            開催:
            <span className="text-[18px] lg:text-[20px] md:text-[20px] font-bold">
              2025年5月23日-24日 2Days
            </span>
          </h2>
          <p>
            会場:
            <a
              href="https://www.bellesalle.co.jp/shisetsu/tokyo/bs_kanda/"
              className="inline-flex items-center text-link-light"
            >
              ベルサール神田
              <ExternalLink className="ml-2 text-link-light" />
            </a>
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.373481111958!2d139.765497!3d35.693167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c04e343e62b%3A0x2692b8958204057a!2z44OZ44Or44K144O844Or56We55Sw!5e0!3m2!1sja!2sjp!4v1737291027030!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            className="border-0 w-[327px] h-[380px] md:w-[608px] md:h-[380px] lg:w-[660px] lg:h-[380px]"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ベルサール神田のGoogle map の情報"
          />
        </div>
      </div>
    </section>
  );
};
