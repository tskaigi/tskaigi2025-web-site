import { GridBackground } from "./GridBackground";

export function MainContent() {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center gap-10 text-center">
      <GridBackground />

      <img
        src="/logo.svg"
        className="absolute top-6 left-6 w-40 lg:w-64 lg:top-10 lg:left-10"
        alt="logo"
      />

      <div className="text-2xl font-semibold space-y-1">
        <time dateTime="2025-05-23">5/23, 5/24</time>
        <p>ベルサール神田</p>
      </div>

      <h1 className="text-5xl font-bold text-primary w-96 lg:w-full">
        TSKaigi 2025 Coming Soon
      </h1>
    </div>
  );
}
