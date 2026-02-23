"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onConnectClick?: () => void;
}

const links = [{ href: "#SAARTHI", label: "SAARTHI" }];

export function Navbar({ onConnectClick }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-electric-500/15 bg-[#050915]/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span 
            className="font-heading font-bold tracking-[0.14em] text-white transition-all duration-300 group-hover:text-electric-300"
            style={{
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)'
            }}
          >
            AI MANTRAAS
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full border border-electric-500/25 bg-electric-900/25 p-1">
          {links.map((link) => {
            const active = pathname === link.href || (link.href.startsWith("#") && pathname === "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-electric-500/25 shadow-neon" />
                )}
                {link.label}
              </Link>
            );
          })}
          </div>
          <button
            onClick={onConnectClick}
            className="relative inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400 opacity-90 blur-lg transition duration-300"></span>
            <span className="relative flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Connect with us
            </span>
          </button>
          <Link
            href="#waitlist"
            className="relative inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400 opacity-90 blur-lg transition duration-300"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400"></span>
            <span className="relative px-2">Join Waitlist</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
