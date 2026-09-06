window.Home = function Home({ navigateTo }) {
  return (
    <div className="w-full animate-fade-in">
      {/* ── HERO HEADER ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 overflow-hidden pt-20 pb-16">
        {/* Subtle Background Radial Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_45%,rgba(34,211,238,0.12)_0%,transparent_65%)]" />

        {/* ── QUANTUM ORBITAL SVG (Modeled after UQA visual with Quantum Coalition palette) ── */}
        <div className="relative z-10 mb-8 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
          <svg
            viewBox="0 0 200 200"
            className="w-[240px] sm:w-[300px] md:w-[360px] h-[240px] sm:h-[300px] md:h-[360px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
          >
            {/* Nucleus */}
            <circle cx="100" cy="100" r="6" fill="#ffffff" />
            <circle cx="100" cy="100" r="14" fill="#22d3ee" opacity="0.25" />

            {/* Orbit 1 */}
            <ellipse cx="100" cy="100" rx="82" ry="30" fill="none" stroke="#22d3ee" strokeWidth="1.2" opacity="0.45" />
            <circle cx="182" cy="100" r="3.5" fill="#22d3ee">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Orbit 2 */}
            <g transform="rotate(60 100 100)">
              <ellipse cx="100" cy="100" rx="82" ry="30" fill="none" stroke="#a855f7" strokeWidth="1.2" opacity="0.45" />
              <circle cx="182" cy="100" r="3.5" fill="#a855f7">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="11s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Orbit 3 */}
            <g transform="rotate(-60 100 100)">
              <ellipse cx="100" cy="100" rx="82" ry="30" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity="0.45" />
              <circle cx="182" cy="100" r="3.5" fill="#ffffff">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>

        {/* Hero Title */}
        <h1 className="relative z-10 text-[clamp(32px,5vw,60px)] font-extrabold tracking-tight leading-[1.15] mb-6 text-white max-w-4xl mx-auto">
          Q-SITE 2026
        </h1>
        <p className="relative z-10 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Quantum Science, Information Technology and Engineering Conference
        </p>

        {/* Registration & Poster Submission Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <button className="px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer w-full sm:w-auto">
            Registration
          </button>
          <button className="px-8 py-3.5 rounded-full border border-cyan-400/40 hover:border-cyan-400 text-cyan-300 hover:bg-cyan-950/20 font-bold text-sm transition-all cursor-pointer w-full sm:w-auto">
            Poster Submission
          </button>
        </div>
      </section>

      {/* ── EMPTY SKELETON SECTIONS (UQA Style 1400px Container) ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 space-y-16">
        {/* Conference Overview */}
        <section>
          <h2 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6">
            Conference Overview
          </h2>
          <div className="w-full min-h-[160px] rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Conference Overview Placeholder ]
          </div>
        </section>

        <hr className="border-none border-t border-white/10" />

        {/* Past Metrics */}
        <section>
          <h2 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6">
            Past Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-32 rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex flex-col items-center justify-center text-slate-500 font-mono text-xs p-4 text-center"
              >
                <span>[ Metric {i} ]</span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-none border-t border-white/10" />

        {/* Introduction to Quantum Coalition */}
        <section className="pb-12">
          <h2 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6">
            Introduction to Quantum Coalition
          </h2>
          <div className="w-full min-h-[160px] rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Quantum Coalition Introduction Placeholder ]
          </div>
        </section>
      </div>
    </div>
  );
};
