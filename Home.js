window.Home = function Home({ navigateTo }) {
  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#090514] via-[#110a26] to-[#0a0618] text-slate-100 font-sans animate-fade-in selection:bg-blue-500 selection:text-white">
      {/* ── HERO SECTION ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 pt-20 pb-20 sm:pt-28 sm:pb-24 overflow-hidden">
        {/* Ambient Radial Background Glows (Ice Blue + Quantum Purple) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18)_0%,rgba(125,211,252,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none" />
        {/* Brand Logo Integration - Enhanced Scale & Glow */}
        <div className="relative z-10 mb-8 flex justify-center">
          <img 
            src="/images/QSITE_logo_new.svg" 
            alt="Q-SITE USA Logo" 
            className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_35px_rgba(125,211,252,0.35)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Hero Title with Ice Blue to Purple Gradient Accent */}
        <h1 className="relative z-10 text-[clamp(44px,7.5vw,76px)] font-black tracking-tight leading-[1.08] mb-6 text-white max-w-4xl mx-auto">
          Q-SITE USA{" "}
          <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            2027
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="relative z-10 text-lg sm:text-2xl text-slate-300/90 max-w-full mx-auto mb-10 leading-relaxed font-normal">
          Pathways into Quantum <span className="text-blue-400 mx-2">•</span> March 3–5, 2027 <span className="text-blue-400 mx-2">•</span> University of Maryland
        </p>

        {/* Registration & Poster Submission Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <button
            onClick={() => handleNav("registration")}
            className="bg-sky-400 hover:bg-sky-300 text-slate-950 px-8 py-3.5 rounded-lg font-extrabold text-[15px] transition-all cursor-pointer w-full sm:w-auto text-center shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] active:scale-95"
          >
            Registration
          </button>
          <button
            onClick={() => handleNav("poster-submission")}
            className="border border-sky-300/40 text-sky-200 hover:bg-blue-900/30 hover:border-blue-400/60 px-8 py-3.5 rounded-lg font-extrabold text-[15px] transition-all cursor-pointer w-full sm:w-auto text-center backdrop-blur-md active:scale-95"
          >
            Poster Submission
          </button>
        </div>
      </section>

      {/* ── 1400px CONTAINER FOR BODY SECTIONS ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-12 pb-24 space-y-16">
        
        {/* Conference Overview */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-[15px] font-extrabold tracking-[0.22em] uppercase text-sky-200">
              Conference Overview
            </h2>
          </div>

          <div className="bg-[#140c2a]/70 rounded-2xl border border-blue-500/20 p-6 sm:p-10 space-y-8 backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)]">
            <div className="w-full">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                Building Early-Career Pathways into Quantum Technology
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                The Quantum Science, Information, Technology, and Engineering conference (Q-SITE)
                is an undergraduate-organized quantum computing conference which has been held
                at the Unversities of Toronto and Vancouver since 2022. This year, <strong className="text-white font-semibold"> Q-SITE USA 2027</strong>
                makes its U.S. debut at the University of Maryland, a hub of quantum science. The goal of this conference is to
                help undergraduate students launch their careers and explore opportunities in quantum computing 
                by connecting with academic and industry leaders.
              </p>
            </div>

            {/* 3-Day Program Trajectory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Day 1 */}
              <div className="bg-[#1c1238]/60 rounded-xl p-6 border border-blue-400/15 space-y-3 hover:border-sky-400/40 transition-colors group">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300 group-hover:text-sky-200">Day 1 • Wed, Mar 3</div>
                <h4 className="text-xl font-bold text-white">Foundations & Careers</h4>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  "Quantum 101" introductory sessions, Workforce Keynote, "My Day-to-Day in Quantum" lightning talks, and guided UMD quantum lab tours.
                </p>
              </div>

              {/* Day 2 */}
              <div className="bg-[#1c1238]/60 rounded-xl p-6 border border-blue-400/15 space-y-3 hover:border-sky-400/40 transition-colors group">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300 group-hover:text-sky-200">Day 2 • Thu, Mar 4</div>
                <h4 className="text-xl font-bold text-white">Research & Skills</h4>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  Hardware platform keynotes, hands-on tool workshops (IBM, Xanadu, IonQ), REU & research entry guidance, and student research presentations.
                </p>
              </div>

              {/* Day 3 */}
              <div className="bg-[#1c1238]/60 rounded-xl p-6 border border-blue-400/15 space-y-3 hover:border-sky-400/40 transition-colors group">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300 group-hover:text-sky-200">Day 3 • Fri, Mar 5</div>
                <h4 className="text-xl font-bold text-white">Industry & Workforce</h4>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  Graduate school panel, resume & technical interview prep workshops, and the Quantum Career & Grad School Fair.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Past Metrics */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]"></span>
            <h2 className="text-[15px] font-extrabold tracking-[0.22em] uppercase text-sky-300">
              Past Metrics & Network Reach
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#140c2a]/70 rounded-xl border border-blue-500/20 p-6 text-center flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-sky-400/40 transition-colors">
              <span className="text-4xl sm:text-5xl font-black text-sky-300 mb-1 drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]">587+</span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium">Q-SITE Registrations</span>
            </div>
            <div className="bg-[#140c2a]/70 rounded-xl border border-blue-500/20 p-6 text-center flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-sky-400/40 transition-colors">
              <span className="text-4xl sm:text-5xl font-black text-sky-300 mb-1 drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]">15+</span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium">Partner Universities</span>
            </div>
            <div className="bg-[#140c2a]/70 rounded-xl border border-blue-500/20 p-6 text-center flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-sky-400/40 transition-colors">
              <span className="text-4xl sm:text-5xl font-black text-sky-300 mb-1 drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]">2,100+</span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium">Past Event Participants</span>
            </div>
            <div className="bg-[#140c2a]/70 rounded-xl border border-blue-500/20 p-6 text-center flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-sky-400/40 transition-colors">
              <span className="text-4xl sm:text-5xl font-black text-sky-300 mb-1 drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]">500</span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium">Expected UMD Attendees</span>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Introduction to Quantum Coalition */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]"></span>
            <h2 className="text-[15px] font-extrabold tracking-[0.22em] uppercase text-sky-300">
              Introduction to Quantum Coalition
            </h2>
          </div>

          <div className="bg-[#140c2a]/70 rounded-2xl border border-blue-500/20 p-6 sm:p-10 space-y-6 backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)]">
            <div className="space-y-4 w-full">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                An International Network for Undergraduate Quantum Talent
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Founded in 2020 by student leaders at Yale and Stanford, the <strong className="text-sky-200 font-semibold">Quantum Coalition</strong> is an 
                undergraduate-led non-profit organization uniting student quantum computing groups across 15+ universities in the U.S. and Canada.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our mission is to build community, democratize quantum education resources, and create direct recruitment pipelines with industry leaders. Our track record includes hosting international hackathons and research-athons such as <strong className="text-slate-200">QCHack</strong> (2,100+ participants), <strong className="text-slate-200">S.Q.U.I.D.</strong>, <strong className="text-slate-200">Q.R.I.S.E.</strong>, and <strong className="text-slate-200">F.L.I.Q.</strong> (organized in collaboration with the UN International Telecommunication Union).
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
