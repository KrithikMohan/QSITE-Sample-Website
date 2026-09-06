"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/[0.03] transition-colors"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-[73px] bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {siteConfig.navLinks.map((item) => {
              const isActive = pathname === item.href;
              if (item.isCta) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="mt-2 w-full py-3 px-4 rounded-xl bg-cyan-500/90 text-black font-semibold text-center text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "text-cyan-400 bg-cyan-950/30 border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
