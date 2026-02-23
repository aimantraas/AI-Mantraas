"use client";

import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ElectricBackground } from "@/components/electric-background";
import { WhatsAppModal } from "@/components/whatsapp-modal";
import { useState } from "react";

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleConnectClick = () => {
    setIsConnectModalOpen(true);
  };

  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} bg-electric-950 font-body text-white`}>
        <ElectricBackground />
        <Navbar onConnectClick={handleConnectClick} />
        <main className="relative z-10 pt-24">{children}</main>
        <WhatsAppModal
          isOpen={isConnectModalOpen}
          onClose={() => setIsConnectModalOpen(false)}
        />
      </body>
    </html>
  );
}
