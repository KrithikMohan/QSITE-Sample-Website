import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} ${siteConfig.edition} — ${siteConfig.fullName}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030712] text-slate-200 antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
        {/* Ambient background glow orbs */}
        <div
          className="ambient-glow-cyan top-[-10vw] left-[-15vw] opacity-70"
          aria-hidden="true"
        />
        <div
          className="ambient-glow-purple top-[40vh] right-[-15vw] opacity-50"
          aria-hidden="true"
        />
        <div
          className="ambient-glow-cyan bottom-[-10vw] left-[20vw] opacity-40"
          aria-hidden="true"
        />

        {/* Persistent Sticky Navbar Shell */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 pt-[72px] relative z-10">{children}</main>

        {/* Standard Footer Shell */}
        <Footer />
      </body>
    </html>
  );
}
