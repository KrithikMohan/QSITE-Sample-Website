"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Logo Placeholder */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl dashed-wireframe flex items-center justify-center group-hover:border-cyan-400/80 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all">
            <span className="text-[9px] font-mono text-cyan-400 font-bold tracking-tighter">
              [LOGO]
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                {siteConfig.edition}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline-block truncate max-w-[220px]">
              Quantum Conference
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((item) => {
            const isActive = pathname === item.href;

            if (item.isCta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-3 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.55)] transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all relative",
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <MobileNav />
      </div>
    </header>
  );
}
