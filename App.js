const { useState, useEffect } = window.React || React;

function QSITEApp() {
  const [currentPage, setCurrentPage] = useState("home");

  // Hash-based router sync (matching umd-uqa pattern)
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace("#", "");
      // If it is an anchor on the home page like registration-preview or poster-preview
      if (rawHash === "registration-preview" || rawHash === "poster-preview") {
        setCurrentPage("home");
        setTimeout(() => {
          const el = document.getElementById(rawHash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return;
      }
      const pageId = rawHash || "home";
      setCurrentPage(pageId);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Sync on initial load
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    const cleanId = (pageId || "home").replace("#", "");
    setCurrentPage(cleanId);
    if (window.location.hash !== `#${cleanId}`) {
      window.location.hash = cleanId;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen text-slate-200 bg-[#030712] relative flex flex-col selection:bg-cyan-500/30 selection:text-white">
      {/* ── AMBIENT QUANTUM BACKGROUND GLOW ORBS ── */}
      <div className="ambient-glow-cyan top-[-10vw] left-[-15vw] opacity-70" aria-hidden="true" />
      <div className="ambient-glow-purple top-[40vh] right-[-15vw] opacity-50" aria-hidden="true" />
      <div className="ambient-glow-cyan bottom-[-10vw] left-[20vw] opacity-40" aria-hidden="true" />

      {/* ── PERSISTENT STICKY NAVBAR ── */}
      {window.Navbar && (
        <window.Navbar currentPage={currentPage} navigateTo={navigateTo} />
      )}

      {/* ── MAIN CONTENT ROUTER ── */}
      <main className="flex-1 pt-[72px] relative z-10">
        {currentPage === "home" && window.Home && <window.Home navigateTo={navigateTo} />}
        {currentPage === "schedule" && window.Schedule && <window.Schedule navigateTo={navigateTo} />}
        {currentPage === "sponsors" && window.Sponsors && <window.Sponsors navigateTo={navigateTo} />}
        {currentPage === "support" && window.Support && <window.Support navigateTo={navigateTo} />}

        {/* Fallback if a component is still initializing */}
        {(!window[currentPage.charAt(0).toUpperCase() + currentPage.slice(1)] &&
          !["home", "schedule", "sponsors", "support"].includes(currentPage)) && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
            <p className="text-sm text-slate-400 mb-6">The requested section does not exist in the skeleton.</p>
            <button
              onClick={() => navigateTo("home")}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs"
            >
              Return to Home Overview
            </button>
          </div>
        )}
      </main>

      {/* ── GLOBAL FOOTER ── */}
      <footer className="border-t border-white/10 bg-[#020617] relative z-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Info */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl dashed-wireframe flex items-center justify-center">
                  <span className="text-[9px] font-mono text-cyan-400 font-bold">
                    [LOGO]
                  </span>
                </div>
                <div>
                  <div className="text-base font-bold text-white tracking-tight">
                    Q-SITE 2026
                  </div>
                  <div className="text-xs text-slate-400">
                    Quantum Science, Information Technology and Engineering Conference
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Bridging academia, student innovation, and industry across quantum computation, cryptographic protocols, sensing devices, and quantum engineering systems.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-white/[0.02] text-slate-400 border border-dashed border-white/20">
                  Skeleton Preview Edition
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo("home")} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Home Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("schedule")} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Conference Schedule
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("sponsors")} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Partners & Sponsors
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("support")} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    FAQ & Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
                Community & Affiliations
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"></span>
                  <span>Quantum Coalition Affiliate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60"></span>
                  <span>U of T Student Initiative</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <span>Canada Quantum Network</span>
                </li>
                <li className="pt-2 text-xs font-mono text-slate-500">
                  Contact: organizers@qsiteconf.ca [Placeholder]
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <div>
              © 2026 Q-SITE Conference. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-600">Pure In-Site Skeleton Wireframe</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-500/60">No External Forms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Final React 18 mount
const root = window.ReactDOM.createRoot(document.getElementById("root"));
root.render(<QSITEApp />);
