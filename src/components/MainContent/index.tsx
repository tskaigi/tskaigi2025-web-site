"use client";

export function MainContent() {
  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          backgroundImage: `
            linear-gradient(#144BDB 2px, transparent 2px),
            linear-gradient(90deg, #144BDB 2px, transparent 2px)
          `,
          backgroundSize: "55px 55px",
          opacity: 0.15,
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
      <div className="relative" data-testid="content-wrapper">
        <img
          src="/logo.svg"
          className="absolute top-6 lg:top-10 left-6 lg:left-10 w-40 lg:w-64"
          alt="logo"
        />
      </div>
    </div>
  );
}
