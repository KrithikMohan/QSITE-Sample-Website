const { useState } = window.React || React;

window.Navbar = function Navbar({ currentPage, navigateTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
    { id: "support", label: "Support" },
    { id: "registration", label: "Registration" },
  ];

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(id);
    } else {
      window.location.hash = id;
    }
  };

  const isItemActive = (id) => currentPage === id;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-white/10 font-sans">
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 h-[72px] flex items-center justify-between">
        {/* ── Brand Text (No logo, do NOT expand out QSITE) ── */}
        <button
          onClick={() => handleLinkClick("home")}
          className="text-left font-extrabold text-xl sm:text-2xl tracking-tight text-white hover:text-cyan-400 transition-colors focus:outline-none cursor-pointer"
        >
          QSITE
        </button>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isItemActive(item.id)
                    ? "text-cyan-400 font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleLinkClick("registration")}
            className="px-6 py-2.5 rounded-md bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs tracking-wide transition-all shadow-md cursor-pointer"
          >
            Registration
          </button>
        </div>

        {/* ── Mobile Menu Toggle Button (Identical to UQA) ── */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center relative">
              <span
                className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2 bg-cyan-400" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-cyan-400" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Drawer (Identical to UQA) ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-5 py-4 border-t border-white/10 space-y-3 bg-[#030712]/95 animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2.5 rounded-xl text-left font-semibold text-base transition-colors flex items-center justify-between ${
                  isItemActive(item.id)
                    ? "bg-cyan-950/40 text-cyan-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isItemActive(item.id) && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => handleLinkClick("registration")}
              className="w-full py-2.5 px-4 rounded-md font-extrabold text-xs bg-cyan-400 text-black hover:bg-cyan-300 transition-all flex items-center justify-center"
            >
              Registration
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
