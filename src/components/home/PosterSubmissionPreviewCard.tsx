import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileCode, Award, CheckCircle2, AlertCircle } from "lucide-react";

export function PosterSubmissionPreviewCard() {
  return (
    <section
      id="poster-preview"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      <div className="text-center mb-12">
        <Badge variant="purple">
          <FileCode className="w-3 h-3 text-purple-400" />
          In-Site Poster Preview
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Research Poster Submission
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-2">
          Guidelines and track preview for student research presentations at Q-SITE 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Guidelines */}
        <Card variant="glass" className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">
              Submission Guidelines & Criteria
            </h3>
          </div>
          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            {siteConfig.posterSubmission.guidelines.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl dashed-wireframe flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <AlertCircle className="w-4 h-4 text-cyan-400" />
              <span>Abstract Portal: Opening Soon</span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
              Preview Mode
            </span>
          </div>
        </Card>

        {/* Tracks */}
        <Card variant="glass" className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Accepted Research Tracks
            </h3>
            <div className="space-y-3 mb-6">
              {siteConfig.posterSubmission.tracks.map((track, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {track}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    Track 0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <button
              disabled
              className="w-full py-3 px-4 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs text-center cursor-not-allowed select-none"
            >
              Submit Poster Abstract [Disabled Preview Stub]
            </button>
            <p className="text-[10px] text-center text-slate-500 font-mono mt-2">
              No external forms • Purely layout wireframe
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
