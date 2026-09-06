"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function SupportFaqWireframe() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-3">
        <HelpCircle className="w-4 h-4 text-cyan-400" />
        <Badge variant="cyan">Frequently Asked Questions</Badge>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Logistics & Participation FAQ
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-8">
        Answers to key questions regarding conference format, eligibility, student participation, and logistics.
      </p>

      <div className="space-y-3">
        {siteConfig.faq.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <Card
              key={idx}
              variant="glass"
              className={cn(
                "p-0 transition-all border-white/10 overflow-hidden",
                isOpen && "border-cyan-500/40 bg-slate-900/60"
              )}
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10 shrink-0">
                    {item.category}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                  {item.answer}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
