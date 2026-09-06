import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";

export function MetricsWireframe() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          Conference Impact
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Community & Academic Metrics
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteConfig.metrics.map((metric, idx) => (
          <Card key={idx} hover variant="glass" className="flex flex-col justify-between text-center p-6">
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 font-mono mb-2">
              {metric.value}
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {metric.sublabel}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
