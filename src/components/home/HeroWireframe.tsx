import React from "react";
import Link from "next/link";
import { Sparkles, FileText, Calendar, MapPin, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Badge } from "@/components/ui/Badge";

export function HeroWireframe() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Status / Edition pill */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <Badge variant="cyan">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            {siteConfig.edition} Conference Preview
          </Badge>
          <Badge variant="purple">
            <Calendar className="w-3 h-3 text-purple-400" />
            {siteConfig.dates.display}
          </Badge>
          <Badge variant="neutral">
            <MapPin className="w-3 h-3 text-slate-400" />
            {siteConfig.location.city}
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          The Premier Canadian <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
            Student Quantum Conference.
          </span>
        </h1>

        {/* Subtitle / Mission */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {siteConfig.tagline}. Bridging students, researchers, and quantum innovators across algorithms, security, and hardware engineering.
        </p>

        {/* In-Site Preview CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
          <Link
            href="#registration-preview"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register [Preview]</span>
          </Link>

          <Link
            href="#poster-preview"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/15 hover:border-cyan-400/40 font-medium text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Submit Poster [Preview]</span>
          </Link>
        </div>

        {/* Skeleton Note */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          <span>All buttons link directly to in-site preview placeholders below</span>
        </div>
      </div>
    </section>
  );
}
