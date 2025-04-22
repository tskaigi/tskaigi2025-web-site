type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return (
    <main className="bg-blue-light-100 pt-16 py-10 md:px-8 flex-1">
      {children}
    </main>
  );
}
