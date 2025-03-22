type SectionGradationProps = {
  children: React.ReactNode;
  classNames?: string;
};

export const SectionGradation = ({
  children,
  classNames,
}: SectionGradationProps) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, rgba(133, 196, 255, 0.6) 0%, rgba(202, 230, 255, 0.6) 5.28%, rgba(233, 245, 255, 0.6) 8.92%)",
      }}
      className={`relative z-10 ${classNames ? classNames : ""}`}
    >
      {children}
    </section>
  );
};
