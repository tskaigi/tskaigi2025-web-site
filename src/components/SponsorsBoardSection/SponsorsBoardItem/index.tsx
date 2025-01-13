type Props = {
  children: React.ReactNode;
  title: string;
  titleClassName: string;
  itemClassName?: string;
};

export function SponsorsBoardItem({
  children,
  title,
  titleClassName,
  itemClassName,
}: Props) {
  return (
    <div
      className={`pb-10 flex flex-col ${itemClassName ? itemClassName : ""}`}
    >
      <h3
        className={`
          py-2.5 flex items-center text-[22px] text-center border-spacing-2 font-bold font-noto md:text-[28px] 
          before:content-[''] before:grow before:h-[1px] before:mr-6 
          after:content-[''] after:grow after:h-[1px] after:ml-6 
          ${titleClassName}
        `}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
