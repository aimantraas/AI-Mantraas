import Link from "next/link";

type NeonButtonProps = {
  href: string;
  label: string;
};

export function NeonButton({ href, label }: NeonButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-xl border border-electric-400/60 bg-electric-500/15 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-neon transition duration-300 hover:-translate-y-[1px] hover:bg-electric-400/25 hover:animate-pulse-glow active:translate-y-0"
    >
      {label}
    </Link>
  );
}
