type Props = {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export function LinkText({ children, href, target }: Props) {
  return (
    <a className="text-blue-600" href={href} target={target}>
      {children}
    </a>
  );
}
