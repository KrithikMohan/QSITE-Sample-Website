window.Sponsors = function Sponsors({ navigateTo }) {
  const tiers = [
    {
      name: "Platinum Partner [Preview]",
      badge: "Top Tier Showcase",
      isFeatured: true,
      perks: [
        "Keynote introduction remarks & dedicated breakout workshop slot",
        "Prime double-wide exhibition booth in central hall foyer",
        "Exclusive access to full attendee opt-in resume database",
        "Prominent logo placement on website shell, badges & banner",
        "Title sponsor of the Poster Session & Hackathon Grand Prize",
      ],
    },
    {
      name: "Gold Partner [Preview]",
      badge: "Featured Partner",
      isFeatured: false,
      perks: [
        "Dedicated standard exhibition booth in sponsor networking gallery",
        "Access to student resume book & designated recruiter table",
        "Logo spotlight on conference web shell & physical signage",
        "Sponsorship acknowledgement during morning plenary address",
        "Up to 5 complimentary full-access industry delegate passes",
      ],
    },
    {
      name: "Silver Partner [Preview]",
      badge: "Supporting Partner",
      isFeatured: false,
      perks: [
        "Branded exhibitor table in quantum demonstration pavilion",
        "Logo included on official conference website and schedule guide",
        "Recognition during afternoon breakout sessions",
        "Up to 2 complimentary industry delegate passes",
        "Opportunity to include collateral inside attendee welcome bags",
      ],
    },
  ];

  const prospectusHighlights = [
    "Direct recruiting pipeline to leading undergraduate, masters & PhD candidates",
    "Brand elevation in Canada's foremost student-driven quantum research community",
    "Interactive booth spaces for live SDK, cloud quantum, or hardware demos",
    "Opportunities to deliver technical breakout workshops and plenary remarks",
  ];

  const sponsorLogos = [
    { id: "sp-1", tier: "Platinum", name: "Platinum Sponsor Slot 1" },
    { id: "sp-2", tier: "Platinum", name: "Platinum Sponsor Slot 2" },
    { id: "sp-3", tier: "Gold", name: "Gold Sponsor Slot 1" },
    { id: "sp-4", tier: "Gold", name: "Gold Sponsor Slot 2" },
    { id: "sp-5", tier: "Gold", name: "Gold Sponsor Slot 3" },
    { id: "sp-6", tier: "Silver", name: "Silver Sponsor Slot 1" },
    { id: "sp-7", tier: "Silver", name: "Silver Sponsor Slot 2" },
    { id: "sp-8", tier: "Silver", name: "Silver Sponsor Slot 3" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
          🏢 Partnership Wireframe
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Sponsors & Industry Partners [Preview]
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Outreach structure for prospective industry and laboratory partners, featuring tier benefits and confirmed sponsor logo showcases.
        </p>
      </div>

      {/* Tiers Breakdown */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Partnership Tiers & Benefits
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Comparative overview of sponsor engagement tiers for Q-SITE 2026.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.03] text-slate-400 border border-dashed border-white/20">
            In-Site Skeleton
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                tier.isFeatured ? "border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.08)]" : "border-white/10"
              }`}
            >
              {tier.isFeatured && (
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-500 text-black text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    Premier
                  </span>
                </div>
              )}

              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 block mb-2">
                  {tier.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-6">
                  {tier.name}
                </h3>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-medium">
                    Package Inclusions:
                  </span>
                  {tier.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-cyan-400 shrink-0">✓</span>
                      <span className="leading-relaxed">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                <button
                  disabled
                  className="w-full py-2.5 px-4 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs text-center cursor-not-allowed select-none"
                >
                  Contact Outreach Team [Preview Stub]
                </button>
                <span className="text-[10px] text-center text-slate-500 font-mono">
                  Purely in-site wireframe • No external forms
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prospectus Preview Card */}
      <div className="mb-20">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-purple-950/40 text-purple-300 border border-purple-500/30">
                📄 In-Site Prospectus Preview
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Sponsorship Package Overview [Preview]
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Connect your organization with Canada's top emerging quantum talent, university researchers, and faculty delegates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {prospectusHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <span className="text-cyan-400 shrink-0">✨</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl dashed-wireframe flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <span>Full PDF Prospectus: Available when outreach launches officially</span>
              <span className="text-[10px] text-cyan-400">[Zero File Downloads in Skeleton]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmed Sponsor Grid */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">
            Confirmed Sponsors & Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Display grid showcasing confirmed partners, corporate sponsors, and laboratory affiliates.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sponsorLogos.map((item) => (
            <div
              key={item.id}
              className="dashed-wireframe rounded-xl flex flex-col items-center justify-center p-4 text-center select-none group h-28"
            >
              <div className="mb-2 text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                🛡️
              </div>
              <span className="text-xs font-mono font-medium text-slate-300 group-hover:text-white transition-colors tracking-wide">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                {item.tier} Tier Slot
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
