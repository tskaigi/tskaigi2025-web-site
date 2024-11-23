"use client";

export function MainContent() {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
            linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)
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
      <div className="relative flex flex-col items-center justify-center min-h-screen gap-10 text-center">
        <img
          src="/logo.svg"
          className="absolute top-6 lg:top-10 left-6 lg:left-10 w-40 lg:w-64"
          alt="logo"
        />
        <div className="flex flex-col gap-1 text-2xl font-semibold">
          <p>5/23, 5/24</p>
          <p>ベルサール神田</p>
        </div>
        <h1 className="text-5xl font-bold text-primary">
          TSKaigi 2025 Coming Soon
        </h1>
      </div>
    </div>
  );
}
