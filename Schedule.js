window.Schedule = function Schedule({ navigateTo }) {
  return (
    <div className="min-h-screen text-slate-100 font-sans animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[100px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-cyan-400">
          Schedule
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl mb-12 leading-relaxed">
          Chronological agenda mapping out keynote talks, breakout panels, and poster exhibition times.
        </p>

        {/* Chronological Agenda Skeleton Slots */}
        <div className="space-y-8">
          {/* Keynote Talks Slot */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">
              Keynote Talks
            </h2>
            <div className="w-full min-h-[140px] rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Keynote Talks Agenda Placeholder ]
            </div>
          </div>

          <hr className="border-none border-t border-white/10" />

          {/* Breakout Panels Slot */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">
              Breakout Panels
            </h2>
            <div className="w-full min-h-[140px] rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Breakout Panels Agenda Placeholder ]
            </div>
          </div>

          <hr className="border-none border-t border-white/10" />

          {/* Poster Exhibition Slot */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">
              Poster Exhibition
            </h2>
            <div className="w-full min-h-[140px] rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Poster Exhibition Agenda Placeholder ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
