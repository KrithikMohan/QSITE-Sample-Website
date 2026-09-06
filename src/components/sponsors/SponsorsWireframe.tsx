import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DashedPlaceholder } from "@/components/ui/DashedPlaceholder";
import { ShieldCheck, Check, Sparkles, Building2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function SponsorsWireframe() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="cyan">
          <Building2 className="w-3 h-3 text-cyan-400" />
          Partnership Wireframe
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Sponsors & Industry Partners [Preview]
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Outreach structure for prospective industry and laboratory partners, featuring tier benefits and confirmed sponsor logo showcases.
        </p>
      </div>

      {/* Prospective Partner Tier Breakdown */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Partnership Tiers & Benefits
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Comparative overview of sponsor engagement tiers for Q-SITE 2026.
            </p>
          </div>
          <Badge variant="wireframe">In-Site Skeleton</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.sponsorTiers.map((tier, idx) => (
            <Card
              key={idx}
              variant={tier.isFeatured ? "glow" : "glass"}
              className={cn(
                "p-6 sm:p-8 flex flex-col justify-between relative",
                tier.isFeatured && "border-cyan-500/40"
              )}
            >
              {tier.isFeatured && (
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-500 text-black text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    Premier
                  </span>
                </div>
              )}

              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 block mb-2">
                  {tier.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-6">
                  {tier.tierName}
                </h3>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-medium">
                    Package Inclusions:
                  </span>
                  {tier.perks.map((perk, perkIdx) => (
                    <div key={perkIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                <button
                  disabled
                  className="w-full py-2.5 px-4 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs text-center cursor-not-allowed select-none"
                >
                  Contact Outreach Team [Preview Stub]
                </button>
                <span className="text-[10px] text-center text-slate-500 font-mono">
                  Purely in-site wireframe • No external forms
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* In-Site Prospectus Preview Card */}
      <div className="mb-20">
        <Card variant="glass" className="p-8 sm:p-10 border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-purple-400" />
              <Badge variant="purple">In-Site Prospectus Preview</Badge>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {siteConfig.prospectusPreview.title}
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {siteConfig.prospectusPreview.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {siteConfig.prospectusPreview.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl dashed-wireframe flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <span>Full PDF Prospectus: Available when outreach launches officially</span>
              <span className="text-[10px] text-cyan-400">[Zero File Downloads in Skeleton]</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Confirmed Sponsor Skeleton Grid */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">
            Confirmed Sponsors & Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Display grid showcasing confirmed partners, corporate sponsors, and laboratory affiliates.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {siteConfig.sponsorLogos.map((item) => (
            <DashedPlaceholder
              key={item.id}
              label={item.name}
              sublabel={`${item.tier} Tier Slot`}
              icon={<ShieldCheck className="w-5 h-5" />}
              className="h-28"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
