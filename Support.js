window.Support = function Support({ navigateTo }) {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[120px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-cyan-400">
          Support
        </h1>
        <p className="text-[18px] sm:text-[20px] text-slate-400 mb-12 leading-relaxed max-w-3xl">
          Logistics FAQ and direct contact channels for the organizing team.
        </p>

        {/* ── LOGISTICS FAQ SECTION ── */}
        <section className="mb-16">
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
            Logistics FAQ
          </h2>
          <div className="w-full min-h-[160px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Logistics FAQ Placeholder ]
          </div>
        </section>

        <hr className="border-none border-t border-white/10 mb-16" />

        {/* ── DIRECT CONTACT CHANNELS SECTION ── */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
            Direct Contact Channels
          </h2>
          <div className="w-full min-h-[160px] rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Organizing Team Direct Contact Channels Placeholder ]
          </div>
        </section>
      </div>
    </div>
  );
};
