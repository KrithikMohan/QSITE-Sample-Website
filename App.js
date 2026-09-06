const { useState, useEffect } = window.React || React;

function QSITEWebsite() {
  const [currentPage, setCurrentPage] = useState("home");

  // Hash router sync (identical to UQA pattern)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (id) => {
    const cleanId = (id || "home").replace("#", "");
    setCurrentPage(cleanId);
    if (window.location.hash !== `#${cleanId}`) {
      window.location.hash = cleanId;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans bg-[#030712] flex flex-col selection:bg-cyan-500/30 selection:text-white">
      {/* ── NAVBAR (Identical UQA structure & behavior) ── */}
      {window.Navbar && (
        <window.Navbar currentPage={currentPage} navigateTo={navigateTo} />
      )}

      {/* ── MAIN PAGE ROUTER ── */}
      <main className="pt-[72px] flex-1">
        {currentPage === "home" && window.Home && <window.Home navigateTo={navigateTo} />}
        {currentPage === "schedule" && window.Schedule && <window.Schedule navigateTo={navigateTo} />}
        {currentPage === "sponsors" && window.Sponsors && <window.Sponsors navigateTo={navigateTo} />}
        {currentPage === "support" && window.Support && <window.Support navigateTo={navigateTo} />}
        {currentPage === "registration" && window.Registration && <window.Registration navigateTo={navigateTo} />}

        {/* Fallback display */}
        {(!window[currentPage.charAt(0).toUpperCase() + currentPage.slice(1)] &&
          !["home", "schedule", "sponsors", "support", "registration"].includes(currentPage)) && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
            <button
              onClick={() => navigateTo("home")}
              className="mt-4 px-6 py-2.5 rounded-md bg-cyan-400 text-black font-extrabold text-xs"
            >
              Return to Home
            </button>
          </div>
        )}
      </main>

      {/* ── FOOTER (UQA structure, no expanded name) ── */}
      <footer className="bg-[#020617] border-t border-white/10 mt-16">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-sm">
          <p>© 2026 QSITE</p>
          <div className="flex items-center gap-6 text-xs">
            <a
              href="https://quantumcoalition.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Quantum Coalition
            </a>
            <a
              href="https://qsiteconf.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              qsiteconf.ca
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// React 18 mount
const root = window.ReactDOM.createRoot(document.getElementById("root"));
root.render(<QSITEWebsite />);
