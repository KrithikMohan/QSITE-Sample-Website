window.Home = function Home({ navigateTo }) {
  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* ── HERO SECTION (Clean, elevated, no atom, no animations) ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
        {/* Subtle Background Radial Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_35%,rgba(34,211,238,0.12)_0%,transparent_65%)]" />

        {/* Hero Title */}
        <h1 className="relative z-10 text-[clamp(42px,7vw,72px)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white max-w-4xl mx-auto">
          QSITE <span className="text-cyan-400">2026</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="relative z-10 text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Conference Overview
        </p>

        {/* Registration & Poster Submission Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <button
            onClick={() => handleNav("registration")}
            className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-3.5 rounded-md font-extrabold text-[15px] transition-all cursor-pointer w-full sm:w-auto text-center shadow-lg"
          >
            Registration
          </button>
          <button
            onClick={() => handleNav("schedule")}
            className="border border-cyan-400/40 text-cyan-300 hover:bg-white/5 px-8 py-3.5 rounded-md font-extrabold text-[15px] transition-all cursor-pointer w-full sm:w-auto text-center"
          >
            Poster Submission
          </button>
        </div>
      </section>

      {/* ── 1400px CONTAINER FOR BODY SKELETON SECTIONS (UQA Style) ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-12 pb-24 space-y-16">
        {/* Conference Overview (Empty skeleton) */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-8">
            Conference Overview
          </h2>
          <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Conference Overview Placeholder ]
          </div>
        </section>

        <hr className="border-none border-t border-white/10" />

        {/* Past Metrics (Empty skeleton) */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-8">
            Past Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 rounded-xl border border-dashed border-white/15 flex items-center justify-center text-slate-500 font-mono text-xs"
              >
                [ Metric {i} ]
              </div>
            ))}
          </div>
        </section>

        <hr className="border-none border-t border-white/10" />

        {/* Introduction to the Quantum Coalition (Empty skeleton) */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-8">
            Introduction to Quantum Coalition
          </h2>
          <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Quantum Coalition Introduction Placeholder ]
          </div>
        </section>
      </div>
    </div>
  );
};
