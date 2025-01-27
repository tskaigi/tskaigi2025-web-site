type Props = {
  children: React.ReactNode;
  titleClassName: string;
};

export function SponsorsBoardTitle({ children, titleClassName }: Props) {
  return (
    <div
      className={`
        py-2.5 flex items-center
        before:content-[''] before:grow before:h-[1px] before:mr-[12px] md:before:mr-[24px] 
        after:content-[''] after:grow after:h-[1px] after:ml-[12px] md:after:ml-[24px] 
        ${titleClassName}
      `}
    >
      {children}
    </div>
  );
}
