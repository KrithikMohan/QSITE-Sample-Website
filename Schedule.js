window.Schedule = function Schedule({ navigateTo }) {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[120px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-cyan-400">
          Schedule
        </h1>
        <p className="text-[18px] sm:text-[20px] text-slate-400 mb-12 leading-relaxed max-w-3xl">
          Chronological agenda mapping out keynote talks, breakout panels, and poster exhibition times for QSITE 2026.
        </p>

        {/* ── EMPTY AGENDA SLOTS (UQA Style) ── */}
        <div className="space-y-12">
          {/* Keynote Talks Slot */}
          <section>
            <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
              Keynote Talks
            </h2>
            <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Keynote Talks Agenda Placeholder ]
            </div>
          </section>

          <hr className="border-none border-t border-white/10" />

          {/* Breakout Panels Slot */}
          <section>
            <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
              Breakout Panels
            </h2>
            <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Breakout Panels Agenda Placeholder ]
            </div>
          </section>

          <hr className="border-none border-t border-white/10" />

          {/* Poster Exhibition Slot */}
          <section>
            <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
              Poster Exhibition
            </h2>
            <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Poster Exhibition Agenda Placeholder ]
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
