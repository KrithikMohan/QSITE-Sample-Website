window.Registration = function Registration({ navigateTo }) {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[120px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-cyan-400">
          Registration
        </h1>
        <p className="text-[18px] sm:text-[20px] text-slate-400 mb-12 leading-relaxed max-w-3xl">
          Registration passes and attendee enrollment for QSITE 2026.
        </p>

        {/* ── EMPTY REGISTRATION SKELETON SECTIONS ── */}
        <div className="space-y-12">
          {/* Passes & Tiers Placeholder */}
          <section>
            <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
              Pass Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="min-h-[180px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex flex-col items-center justify-center text-slate-500 font-mono text-sm p-6 text-center"
                >
                  <span className="font-sans font-bold text-slate-300 mb-1">Pass Tier {i}</span>
                  <span>[ Pass Information Placeholder ]</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-none border-t border-white/10" />

          {/* Registration Form / Portal Placeholder */}
          <section>
            <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
              Registration Form
            </h2>
            <div className="w-full min-h-[220px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
              [ Registration Portal Placeholder ]
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
