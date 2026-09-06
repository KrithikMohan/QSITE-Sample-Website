import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl dashed-wireframe flex items-center justify-center">
                <span className="text-[9px] font-mono text-cyan-400 font-bold">
                  [LOGO]
                </span>
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">
                  {siteConfig.name} {siteConfig.edition}
                </div>
                <div className="text-xs text-slate-400">
                  {siteConfig.fullName}
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-1">
              <Badge variant="wireframe">Skeleton Preview Edition</Badge>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Conference Schedule
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Partners & Sponsors
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  FAQ & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* External / Organizing Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Community & Affiliations
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"></span>
                <span>Quantum Coalition Affiliate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60"></span>
                <span>U of T Student Initiative</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>Canada Quantum Network</span>
              </li>
              <li className="pt-2 text-xs font-mono text-slate-500">
                Contact: {siteConfig.contact.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {siteConfig.edition} {siteConfig.name} Conference. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Pure In-Site Skeleton Wireframe</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-500/60">No External Forms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
