const { useState } = window.React || React;

window.Navbar = function Navbar({ currentPage, navigateTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
    { id: "support", label: "Support" },
  ];

  const handleNav = (id) => {
    setIsMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(id);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 h-[72px] flex items-center justify-between">
        {/* ── Brand Text (No Logo) ── */}
        <button
          onClick={() => handleNav("home")}
          className="font-bold text-xl tracking-tight text-white hover:text-cyan-400 transition-colors focus:outline-none cursor-pointer"
        >
          <span className="text-cyan-400">Q-SITE</span> 2026
        </button>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleNav("home")}
            className="px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] cursor-pointer"
          >
            Register
          </button>
        </nav>

        {/* ── Mobile Menu Toggle ── */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-[#030712]/95 border-b border-white/10 px-6 py-5 space-y-3 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`py-2 text-left text-base font-medium transition-colors ${
                    isActive ? "text-cyan-400 font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => handleNav("home")}
              className="w-full py-2.5 rounded-full bg-cyan-400 text-black text-xs font-bold tracking-wide"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
