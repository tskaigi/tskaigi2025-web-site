export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-15 bg-[length:42px_42px] lg:bg-[length:55px_55px] -z-10"
      style={{
        backgroundImage: `
            linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
            linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)
          `,
        mask: `radial-gradient(
            ellipse 70% 60% at center,
            black 20%,
            black 20%,
            transparent 60%
          )`,
        WebkitMask: `radial-gradient(
            ellipse 70% 60% at center,
            black 20%,
            black 20%,
            transparent 60%
          )`,
      }}
    />
  );
}
