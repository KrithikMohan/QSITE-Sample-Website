const { useState } = window.React || React;

window.Navbar = function Navbar({ currentPage, navigateTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
    { id: "support", label: "Support" },
  ];

  const handleLinkClick = (pageId) => {
    setIsMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(pageId);
    } else {
      window.location.hash = pageId;
    }
  };

  const handleRegisterClick = () => {
    setIsMobileMenuOpen(false);
    if (currentPage !== "home") {
      handleLinkClick("home");
      setTimeout(() => {
        const el = document.getElementById("registration-preview");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("registration-preview");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* ── Logo Placeholder ── */}
        <button
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl dashed-wireframe flex items-center justify-center group-hover:border-cyan-400/80 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all">
            <span className="text-[9px] font-mono text-cyan-400 font-bold tracking-tighter">
              [LOGO]
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Q-SITE
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                2026
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline-block truncate max-w-[220px]">
              Quantum Conference
            </span>
          </div>
        </button>

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all relative ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </button>
            );
          })}

          <button
            onClick={handleRegisterClick}
            className="ml-3 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.55)] transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>✨</span>
            <span>Register [Preview]</span>
          </button>
        </nav>

        {/* ── Mobile Hamburger Toggle ── */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/[0.03] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-3 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium text-left transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/30 border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleRegisterClick}
            className="w-full py-3 px-4 rounded-xl bg-cyan-500 text-black font-semibold text-center text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2"
          >
            <span>✨</span>
            <span>Register [Preview]</span>
          </button>
        </div>
      )}
    </header>
  );
};
