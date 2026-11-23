window.Sponsors = function Sponsors({ navigateTo }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090514] via-[#110a26] to-[#0a0618] text-slate-100 font-sans animate-fade-in selection:bg-blue-500 selection:text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[120px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-sky-300">
          Sponsors
        </h1>
        <p className="text-[18px] sm:text-[20px] text-slate-400 mb-12 leading-relaxed max-w-3xl">
          Outreach section for prospective partners with tier information, plus a logo showcase for confirmed sponsors.
        </p>

        {/* ── PARTNER OUTREACH & TIER INFORMATION ── */}
        <section className="mb-16">
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-sky-300 mb-6">
            Partnership Tiers & Outreach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Platinum Tier", "Gold Tier", "Silver Tier"].map((tier, idx) => (
              <div
                key={idx}
                className="min-h-[200px] rounded-[4px] border border-dashed border-blue-500/30 bg-[#140c2a]/70 p-6 flex flex-col items-center justify-center text-center text-slate-500 font-mono text-sm backdrop-blur-md"
              >
                <span className="text-base font-bold text-slate-300 mb-2 font-sans">{tier}</span>
                <span>[ Tier Information Placeholder ]</span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-none border-t border-blue-500/20 mb-16" />

        {/* ── LOGO SHOWCASE FOR CONFIRMED SPONSORS ── */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-sky-300 mb-6">
            Confirmed Sponsors Logo Showcase
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-28 rounded-[4px] border border-dashed border-blue-500/30 bg-[#140c2a]/70 flex items-center justify-center text-slate-500 font-mono text-xs text-center p-4"
              >
                [ Sponsor Logo {i} ]
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
