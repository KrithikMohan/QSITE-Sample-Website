window.Home = function Home({ navigateTo }) {
  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const metrics = [
    { value: "350+", label: "Student & Academic Attendees", sublabel: "Undergraduate, graduate & PhD cohorts" },
    { value: "25+", label: "Distinguished Speakers", sublabel: "Pioneering industry leaders & faculty" },
    { value: "18+", label: "Partner Universities", sublabel: "Canadian & global quantum research hubs" },
    { value: "100%", label: "Open & Student-Driven", sublabel: "Organized by and for the quantum community" },
  ];

  const ticketTiers = [
    {
      name: "Student Pass [Preview]",
      badge: "In-Site Preview",
      status: "Registration Opening Soon",
      desc: "Full access for undergraduate, graduate, and doctoral students from any recognized institution.",
      perks: [
        "Access to all keynote addresses & research tracks",
        "Eligible for poster submission & awards showcase",
        "Networking reception with industry quantum leaders",
        "Conference kit & student hackathon entry",
      ],
    },
    {
      name: "Academic & Researcher Pass [Preview]",
      badge: "In-Site Preview",
      status: "Registration Opening Soon",
      desc: "Designed for faculty, postdocs, laboratory directors, and university quantum group delegates.",
      perks: [
        "Priority seating at keynote panels & technical sessions",
        "Access to poster judging & symposium breakout rooms",
        "Faculty roundtable networking breakfast",
        "Digital access to conference proceedings & recordings",
      ],
    },
    {
      name: "Industry Delegate Pass [Preview]",
      badge: "In-Site Preview",
      status: "Registration Opening Soon",
      desc: "For corporate scientists, quantum venture partners, engineering recruiters, and startup founders.",
      perks: [
        "Admission to all executive panels & exhibitor floor",
        "Access to curated student resume & poster directory",
        "Dedicated corporate recruiting lounge pass",
        "Recognition in printed & digital conference catalog",
      ],
    },
  ];

  const posterTracks = [
    "Track A: Quantum Computation & Software Algorithms",
    "Track B: Quantum Communications & Cryptographic Security",
    "Track C: Quantum Materials, Devices & Cryogenic Hardware",
    "Track D: Quantum Education & Open Science Frameworks",
  ];

  const posterGuidelines = [
    "Open to original student research, ongoing thesis work, and undergraduate capstones.",
    "Posters accepted across Quantum Hardware, Algorithms, Cryptography, and Applied Sensing.",
    "Accepted presenters assigned a dedicated exhibition time slot and display easel.",
    "Eligible for Best Theoretical Poster and Best Experimental Demo awards evaluated by faculty.",
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-14 md:pt-24 md:pb-20 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.15)]">
              ✨ 2026 Conference Preview
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-purple-950/40 text-purple-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
              📅 Dates: Announced Soon
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-slate-800/60 text-slate-300 border border-white/10">
              📍 Toronto, Ontario & Virtual
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            The Premier Canadian <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Student Quantum Conference.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Canada's premier student-centric quantum conference. Bridging students, researchers, and quantum innovators across algorithms, security, and hardware engineering.
          </p>

          {/* In-Site Preview CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
            <button
              onClick={() => scrollToAnchor("registration-preview")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>✨</span>
              <span>Register [Preview]</span>
            </button>

            <button
              onClick={() => scrollToAnchor("poster-preview")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/15 hover:border-cyan-400/40 font-medium text-sm transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>📄</span>
              <span>Submit Poster [Preview]</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-cyan-400 animate-bounce">↓</span>
            <span>All buttons link directly to in-site preview placeholders below</span>
          </div>
        </div>
      </section>

      {/* ── METRICS OVERVIEW ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Conference Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Community & Academic Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 text-center flex flex-col justify-between"
            >
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 font-mono mb-2">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {m.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO TO QUANTUM COALITION & Q-SITE ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 relative border-cyan-500/20">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                About Q-SITE & Quantum Coalition
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Accelerating Undergraduate & Graduate Access to Quantum Technology.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Founded to provide university students with early, high-impact exposure to quantum information science and engineering, <strong>Q-SITE</strong> creates a collaborative forum connecting students, academic research labs, and industry leaders.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              In collaboration with the <strong>Quantum Coalition</strong>, the conference bridges theoretical foundations with hands-on experimental research, opening pathways into quantum algorithms, cryogenic hardware, quantum communication protocols, and sensing technologies.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Quantum Computing & Algorithms</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Software simulations, complexity, and quantum circuit synthesis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 shrink-0">
                  🛡️
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Cryptography & Quantum Security</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Post-quantum cryptography standards and QKD key exchange systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-400 shrink-0">
                  🌊
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Hardware & Metrology</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Superconducting, neutral atom, and precision quantum sensors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 shrink-0">
                  👥
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Student & Academic Synergy</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Direct recruitment, research matchmaking, and student poster showcases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-SITE TICKET TIER PREVIEW ── */}
      <section id="registration-preview" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
            ✨ In-Site Registration Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Conference Registration Passes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-2">
            Preview of ticket tiers and inclusions for Q-SITE 2026. This is a skeleton wireframe; registration has not opened yet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ticketTiers.map((tier, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    {tier.badge}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Tier {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {tier.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-medium">
                    Includes:
                  </span>
                  {tier.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-cyan-400 shrink-0">✓</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                <button
                  disabled
                  className="w-full py-3 px-4 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs text-center cursor-not-allowed select-none"
                >
                  {tier.status}
                </button>
                <span className="text-[10px] text-center text-slate-500 font-mono">
                  No external links • In-site wireframe preview
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IN-SITE POSTER SUBMISSION PREVIEW ── */}
      <section id="poster-preview" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-purple-950/40 text-purple-300 border border-purple-500/30">
            📄 In-Site Poster Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Research Poster Submission
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-2">
            Guidelines and track preview for student research presentations at Q-SITE 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Guidelines */}
          <div className="glass-panel rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>🏆</span>
              <span>Submission Guidelines & Criteria</span>
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {posterGuidelines.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-purple-400 shrink-0">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl dashed-wireframe flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>ℹ️ Abstract Portal: Opening Soon</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                Preview Mode
              </span>
            </div>
          </div>

          {/* Tracks */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Accepted Research Tracks
              </h3>
              <div className="space-y-3 mb-6">
                {posterTracks.map((track, idx) => (
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
          </div>
        </div>
      </section>
    </div>
  );
};
