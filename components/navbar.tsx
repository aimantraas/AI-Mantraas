"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [{ href: "#SAARTHI", label: "SAARTHI" }];

export function Navbar() {
  const pathname = usePathname();
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-electric-500/15 bg-[#050915]/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div
            className={`relative overflow-hidden rounded-2xl border border-electric-400/35 bg-electric-900/70 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] group-hover:border-electric-400/70 ${
              logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              width: 'clamp(44px, 8vw, 60px)',
              height: 'clamp(44px, 8vw, 60px)'
            }}
          >
            <Image 
              src="/ailogo.png" 
              alt="AI Mantraas Logo" 
              fill 
              sizes="(max-width: 768px) 40px, 56px"
              className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-110" 
              priority
              onLoad={() => setLogoLoaded(true)}
            />
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-electric-400/10 to-transparent pointer-events-none" />
          </div>
          <span 
            className={`font-heading font-bold tracking-[0.14em] text-white transition-all duration-300 group-hover:text-electric-300 ${
              logoLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
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
