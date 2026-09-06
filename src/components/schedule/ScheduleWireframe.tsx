"use client";

import React, { useState } from "react";
import { scheduleData } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, Mic, Users, Presentation, Coffee, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScheduleWireframe() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentDay = scheduleData[activeDayIdx];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Keynote":
        return <Mic className="w-3.5 h-3.5 text-cyan-400" />;
      case "Panel":
        return <Users className="w-3.5 h-3.5 text-purple-400" />;
      case "Poster":
        return <Presentation className="w-3.5 h-3.5 text-sky-400" />;
      case "Networking":
        return <Coffee className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="cyan">
          <Calendar className="w-3 h-3 text-cyan-400" />
          Agenda Wireframe
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Conference Schedule [Preview]
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Chronological agenda mapping out keynote talks, technical breakout panels, and student poster exhibition sessions.
        </p>
      </div>

      {/* Day Tab Switcher */}
      <div className="flex justify-center mb-10">
        <div className="p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
          {scheduleData.map((day, idx) => {
            const isActive = activeDayIdx === idx;
            return (
              <button
                key={day.day}
                onClick={() => setActiveDayIdx(idx)}
                className={cn(
                  "px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2",
                  isActive
                    ? "bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <span>{day.day}</span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-2 py-0.5 rounded",
                    isActive ? "bg-black/20 text-black font-bold" : "bg-white/5 text-slate-400"
                  )}
                >
                  Preview
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Day Theme Notice */}
      <div className="mb-8 p-4 rounded-xl dashed-wireframe flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
            {currentDay.day} Focus Track
          </span>
          <span className="text-sm font-semibold text-white">
            {currentDay.theme}
          </span>
        </div>
        <Badge variant="wireframe">Times: TBA • Zero Hardcoded Dates</Badge>
      </div>

      {/* Chronological Sessions Timeline */}
      <div className="space-y-4">
        {currentDay.sessions.map((session, idx) => (
          <Card
            key={session.id}
            variant="glass"
            className="p-6 sm:p-7 border-white/10 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Time slot & type */}
            <div className="md:w-1/4 shrink-0 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{session.timeSlot}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                  {getTypeIcon(session.type)}
                  <span>{session.type}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  #{idx + 1}
                </span>
              </div>
            </div>

            {/* Session content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                  {session.track}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                {session.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {session.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="text-slate-500">Speaker:</span>
                <span className="text-slate-300 px-2 py-0.5 rounded bg-white/[0.03] border border-dashed border-white/15">
                  {session.speakerPlaceholder}
                </span>
              </div>
            </div>

            {/* Action/Location stub */}
            <div className="md:w-44 shrink-0 flex flex-col items-start md:items-end justify-center pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
              <div className="w-full text-center py-2 px-3 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-[11px] font-mono text-slate-500">
                Room TBA • Stream Live
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
