"use client";

export function ElectricBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(47,129,255,0.42),transparent_38%),radial-gradient(circle_at_75%_18%,rgba(82,198,255,0.28),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(15,85,255,0.35),transparent_35%),linear-gradient(180deg,#02040e_0%,#030815_55%,#040d1f_100%)]" />
      <div className="absolute -inset-24 opacity-60 blur-3xl animate-drift bg-[conic-gradient(from_180deg_at_50%_50%,rgba(26,95,255,.18),rgba(10,153,255,.06),rgba(26,95,255,.18))]" />
      {Array.from({ length: 20 }).map((_, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-electric-400/70 shadow-neon animate-pulse"
          style={{
            width: `${idx % 2 === 0 ? 4 : 2}px`,
            height: `${idx % 2 === 0 ? 4 : 2}px`,
            top: `${4 + (idx * 5) % 92}%`,
            left: `${(idx * 8) % 96}%`,
            opacity: 0.2,
            animationDelay: `${idx * 0.2}s`,
            animationDuration: `${3 + (idx % 3)}s`
          }}
        />
      ))}
    </div>
  );
}
