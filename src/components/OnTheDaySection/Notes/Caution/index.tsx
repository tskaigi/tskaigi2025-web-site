type Props = {
  children: React.ReactNode;
};

export function Caution({ children }: Props) {
  return (
    <p className="flex gap-3 items-start" role="alert">
      <span className="text-blue-500" aria-hidden="true">
        －
      </span>
      <span>{children}</span>
    </p>
  );
}
