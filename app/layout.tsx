import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ElectricBackground } from "@/components/electric-background";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "700", "800", "900"]
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "AI MANTRAAS | Coming Soon",
  description: "AI MANTRAAS is launching a premium automation and AI learning ecosystem."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} bg-electric-950 font-body text-white`}>
        <ElectricBackground />
        <Navbar />
        <main className="relative z-10 pt-24">{children}</main>
      </body>
    </html>
  );
}
