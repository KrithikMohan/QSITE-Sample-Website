const { useState } = window.React || React;

window.PosterSubmission = function PosterSubmission({ navigateTo }) {
  // Replace this placeholder with your actual Google Form embed URL:
  // (In Google Forms: click "Send" -> click the "<>" embed tab -> copy the src URL)
  const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdiLxB0urQ-SKtVL0ZzPNiPHEDrDy8Q178VOETmGNb-tcC7Dw/viewform?embedded=true";

  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#090514] via-[#110a26] to-[#0a0618] text-slate-100 font-sans animate-fade-in selection:bg-purple-500 selection:text-white pt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-12 pb-24 space-y-12">
        
        {/* ── HEADER HERO ── */}
        <section className="relative text-center max-w-3xl mx-auto pt-6 pb-2">
          
          <h1 className="text-[clamp(34px,5.5vw,56px)] font-black tracking-tight leading-[1.1] mb-6 text-white">
            Undergraduate Research &{" "}
            <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">
              Poster Session
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-light max-w-2xl mx-auto mb-4">
            Showcase your quantum computing research, REU projects, or independent study at Q-SITE USA 2027 at the University of Maryland.
          </p>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* ── GUIDELINES & INFORMATION BOXES ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#140c2a]/70 rounded-xl p-6 border border-purple-500/20 backdrop-blur-md space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-300">Eligibility</div>
            <h4 className="text-lg font-bold text-white">Undergraduate Focus</h4>
            <p className="text-slate-300/80 text-xs leading-relaxed font-light">
              Open to 1st–4th year undergraduates and recent graduates presenting research performed during their undergraduate studies.
            </p>
          </div>

          <div className="bg-[#140c2a]/70 rounded-xl p-6 border border-purple-500/20 backdrop-blur-md space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-300">Format & Topics</div>
            <h4 className="text-lg font-bold text-white">Broad Quantum STEM</h4>
            <p className="text-slate-300/80 text-xs leading-relaxed font-light">
            Any quantum-related research is welcome, with a focus on showcasing how undergraduates can begin undertaking research.
            </p>
          </div>

          <div className="bg-[#140c2a]/70 rounded-xl p-6 border border-purple-500/20 backdrop-blur-md space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-300">Talk Selection</div>
            <h4 className="text-lg font-bold text-white">Student Lightning Talks</h4>
            <p className="text-slate-300/80 text-xs leading-relaxed font-light">
              Select submissions will be invited to give a 10-15 minute oral presentation during the Day 2 Student Research session.
            </p>
          </div>
        </div>

        {/* ── EMBEDDED GOOGLE FORM CONTAINER ── */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#140c2a]/70 rounded-2xl border border-purple-500/20 p-4 sm:p-8 backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)] space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-purple-500/20">
              <div>
                <h3 className="text-xl font-bold text-white">Poster & Abstract Submission Form</h3>
                <p className="text-xs text-slate-400">Please fill out all required fields below.</p>
              </div>
              <a
                href={GOOGLE_FORM_EMBED_URL.replace("?embedded=true", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-white bg-purple-900/40 hover:bg-purple-900/60 px-4 py-2 rounded-lg border border-purple-500/30 transition-all"
              >
                Open Form in New Tab ↗
              </a>
            </div>

            {/* Google Form iFrame Container */}
            <div className="w-full rounded-xl overflow-hidden bg-white/5 border border-purple-500/20 min-h-[750px] relative">
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full h-[800px] rounded-xl"
                title="Q-SITE USA 2027 Poster Submission Form"
              >
                Loading submission form…
              </iframe>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
