const { useState, useEffect } = window.React || React;

function QSITEApp() {
  const [currentPage, setCurrentPage] = useState("home");

  // Hash-based router sync (matching umd-uqa pattern)
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace("#", "");
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
    handleHashChange();
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
    <div className="min-h-screen text-slate-100 bg-[#030712] relative flex flex-col selection:bg-cyan-500/30 selection:text-white font-sans">
      {/* ── PERSISTENT STICKY NAVBAR ── */}
      {window.Navbar && (
        <window.Navbar currentPage={currentPage} navigateTo={navigateTo} />
      )}

      {/* ── MAIN PAGE ROUTER ── */}
      <main className="flex-1 pt-[72px]">
        {currentPage === "home" && window.Home && <window.Home navigateTo={navigateTo} />}
        {currentPage === "schedule" && window.Schedule && <window.Schedule navigateTo={navigateTo} />}
        {currentPage === "sponsors" && window.Sponsors && <window.Sponsors navigateTo={navigateTo} />}
        {currentPage === "support" && window.Support && <window.Support navigateTo={navigateTo} />}

        {/* Fallback if a component is missing */}
        {(!window[currentPage.charAt(0).toUpperCase() + currentPage.slice(1)] &&
          !["home", "schedule", "sponsors", "support"].includes(currentPage)) && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
            <button
              onClick={() => navigateTo("home")}
              className="mt-4 px-6 py-2.5 rounded-full bg-cyan-400 text-black font-semibold text-xs"
            >
              Return Home
            </button>
          </div>
        )}
      </main>

      {/* ── STANDARD FOOTER WITH EXTERNAL LINKS & COPYRIGHT ── */}
      <footer className="border-t border-white/10 bg-[#020617] mt-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-400 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-bold text-white">Q-SITE 2026</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>© 2026 Quantum Science, Information Technology and Engineering Conference. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="https://quantumcoalition.io" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              Quantum Coalition
            </a>
            <a href="https://qsiteconf.ca" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              qsiteconf.ca
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Final React 18 mount
const root = window.ReactDOM.createRoot(document.getElementById("root"));
root.render(<QSITEApp />);
