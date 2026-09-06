import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Cpu, ShieldCheck, Waves, Users } from "lucide-react";

export function IntroWireframe() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Card variant="glass" className="p-8 sm:p-12 relative border-cyan-500/20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="cyan">About Q-SITE & Quantum Coalition</Badge>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Accelerating Undergraduate & Graduate Access to Quantum Technology.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Founded to provide university students with early, high-impact exposure to quantum information science and engineering, <strong>Q-SITE</strong> creates a collaborative forum connecting students, academic research labs, and industry leaders.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            In collaboration with the <strong>Quantum Coalition</strong>, the conference bridges theoretical foundations with hands-on experimental research, opening pathways into quantum algorithms, cryogenic hardware, quantum communication protocols, and sensing technologies.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Quantum Computing & Algorithms</h4>
                <p className="text-xs text-slate-400 mt-0.5">Software simulations, complexity, and quantum circuit synthesis.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Cryptography & Quantum Security</h4>
                <p className="text-xs text-slate-400 mt-0.5">Post-quantum cryptography standards and QKD key exchange systems.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-400 shrink-0">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Hardware & Metrology</h4>
                <p className="text-xs text-slate-400 mt-0.5">Superconducting, neutral atom, and precision quantum sensors.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Student & Academic Synergy</h4>
                <p className="text-xs text-slate-400 mt-0.5">Direct recruitment, research matchmaking, and student poster showcases.</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
