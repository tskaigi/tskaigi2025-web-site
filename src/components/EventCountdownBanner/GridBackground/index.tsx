export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-[-50%] w-[200%] h-[200%] opacity-15 bg-[length:42px_42px] lg:bg-[length:55px_55px]"
      style={{
        backgroundImage: `
            linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
            linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)
          `,
        mask: `radial-gradient(
            ellipse 40% 50% at center,
            black 0%,
            black 20%,
            transparent 50%
          )`,
        WebkitMask: `radial-gradient(
            ellipse 40% 50% at center,
            black 0%,
            black 20%,
            transparent 50%
          )`,
      }}
    />
  );
}
