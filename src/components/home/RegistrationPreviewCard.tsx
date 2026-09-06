import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check, Sparkles, ShieldAlert } from "lucide-react";

export function RegistrationPreviewCard() {
  return (
    <section
      id="registration-preview"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      <div className="text-center mb-12">
        <Badge variant="cyan">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          In-Site Registration Preview
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Conference Registration Passes
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-2">
          Preview of ticket tiers and inclusions for Q-SITE 2026. This is a skeleton wireframe; registration has not opened yet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteConfig.ticketTiers.map((tier, idx) => (
          <Card
            key={idx}
            variant="glass"
            className="flex flex-col justify-between p-6 sm:p-8 border-white/10 hover:border-cyan-500/40 relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {tier.badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  Tier {idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-medium">
                  Includes:
                </span>
                {tier.perks.map((perk, perkIdx) => (
                  <div key={perkIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
              <button
                disabled
                className="w-full py-3 px-4 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs text-center cursor-not-allowed select-none flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
                <span>{tier.status}</span>
              </button>
              <span className="text-[10px] text-center text-slate-500 font-mono">
                No external links • In-site wireframe preview
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
