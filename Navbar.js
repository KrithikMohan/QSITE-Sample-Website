const { useState } = window.React || React;

window.Navbar = function Navbar({ currentPage, navigateTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
    { id: "support", label: "Support" },
    { id: "poster-submission", label: "Poster Submission" },
  ];

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(id);
    } else {
      window.location.hash = id;
    }
  };

  const isItemActive = (id) =>
    currentPage === id ||
    (id === "poster-submission" &&
      (currentPage === "poster-submission" || currentPage === "poster"));

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0618]/90 backdrop-blur-md border-b border-blue-500/20 font-sans">
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 h-[72px] flex items-center justify-between">
        {/* ── Logo Image (QSITE_logo_new.svg) ── */}
        <button
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-3 focus:outline-none cursor-pointer group"
        >
          <img
            src="/images/QSITE_icon.svg"
            alt="QSITE USA Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-sm font-medium transition-all cursor-pointer ${
                  isItemActive(item.id)
                    ? "text-sky-300 font-bold "
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleLinkClick("registration")}
            className="px-6 py-2.5 rounded-full bg-sky-400 text-slate-950 font-extrabold text-xs tracking-wide transition-all hover:bg-sky-300 hover:scale-105 cursor-pointer"
          >
            Registration
          </button>
        </div>

        {/* ── Mobile Menu Toggle Button ── */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            className="p-2.5 rounded-[4px] bg-blue-950/30 hover:bg-blue-900/40 text-white border border-blue-500/20 transition-colors focus:outline-none cursor-pointer"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center relative">
              <span
                className={`h-0.5 w-6 bg-white rounded-[4px] transition-all duration-300 transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2 bg-sky-300" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white rounded-[4px] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white rounded-[4px] transition-all duration-300 transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-sky-300" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-5 py-4 border-t border-blue-500/20 space-y-3 bg-[#0a0618]/95 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2.5 rounded-[4px] text-left font-semibold text-base transition-colors flex items-center justify-between cursor-pointer ${
                  isItemActive(item.id)
                    ? "bg-blue-950/50 text-sky-300 border border-blue-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-blue-500/20">
            <button
              onClick={() => handleLinkClick("registration")}
              className="w-full py-2.5 px-4 rounded-[4px] font-extrabold text-xs bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all flex items-center justify-center cursor-pointer"
            >
              Registration
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
