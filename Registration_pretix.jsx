const { useEffect } = window.React || React;

window.Registration = function Registration({ navigateTo }) {
  useEffect(() => {
    // Dynamically inject Pretix CSS stylesheet if not already present
    const cssId = "pretix-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://pretix.eu/qc/qsite-usa-2027/widget/v2.css";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }

    // Dynamically inject Pretix JS script if not already present
    const scriptId = "pretix-widget-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "https://pretix.eu/widget/v2.en.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

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
        <section className="relative text-center max-w-4xl mx-auto pt-6 pb-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse"></span>
            Official Registration
          </div>
          
          <h1 className="text-[clamp(34px,5.5vw,56px)] font-black tracking-tight leading-[1.1] mb-6 text-white">
            Register for{" "}
            <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Q-SITE USA 2027
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-light max-w-2xl mx-auto mb-4">
            Select your ticket tier below. Registration is free for undergraduate and graduate students.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-sky-300/90">
            <span>📅 March 3–5, 2027</span>
            <span>•</span>
            <span>📍 University of Maryland</span>
            <span>•</span>
            <span>🎟️ Free Student Tickets Available</span>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* ── WIDGET CONTAINER ── */}
        <div className="max-w-4xl mx-auto bg-[#140c2a]/70 rounded-2xl border border-purple-500/20 p-6 sm:p-10 backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)]"> 

          {/* Pretix Web Component */}
          <div className="pretix-widget-wrapper font-sans text-slate-900">
            <pretix-widget event="https://pretix.eu/qc/qsite-usa-2027/"></pretix-widget>
          </div>

          <noscript>
            <div className="p-6 rounded-xl bg-purple-950/60 border border-sky-400/40 text-center space-y-3">
              <p className="text-slate-200 text-sm">
                JavaScript is disabled in your browser. To access our ticket shop without JavaScript, please click below:
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pretix.eu/qc/qsite-usa-2027/"
                className="inline-block px-6 py-2.5 rounded-lg bg-sky-400 text-slate-950 font-bold text-xs"
              >
                Access Pretix Ticket Shop ↗
              </a>
            </div>
          </noscript>

          {/* Direct Shop Link Accent Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 mb-8 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-sky-300 text-base">⚡</span>
              <span>Having trouble loading the embedded ticket shop?</span>
            </div>
            <a
              href="https://pretix.eu/qc/qsite-usa-2027/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-sky-400/10 hover:bg-sky-400/20 text-sky-300 border border-sky-400/30 font-bold transition-all cursor-pointer whitespace-nowrap"
            >
              Open Ticket Shop in New Tab ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
