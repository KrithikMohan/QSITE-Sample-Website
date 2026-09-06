const { useRef, useEffect, useState } = window.React || React;

window.Home = function Home({ navigateTo }) {
  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  // UQA Atom Game / Animation refs
  const shakeWrapperRef = useRef(null);
  const atomGroupRef = useRef(null);
  const particlesRef = useRef(null);
  const dotRefs = useRef([]);
  const hitAreaRefs = useRef([]);
  const electronsRef = useRef([]);
  const gameActiveRef = useRef(true);
  const spawnTimeRef = useRef(0);
  const rafRef = useRef(null);

  const ORBIT_DEFS = [
    { dur: 6, phase: 0 },
    { dur: 9, phase: (2 / 9) * Math.PI * 2 },
    { dur: 7, phase: (4 / 7) * Math.PI * 2 },
  ];
  const TOTAL_ELECTRONS = ORBIT_DEFS.length;

  const [hitCount, setHitCount] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const buildElectrons = () => {
    electronsRef.current = ORBIT_DEFS.map((def) => ({
      speed: (2 * Math.PI) / def.dur,
      phase: def.phase,
      hit: false,
    }));
    spawnTimeRef.current = performance.now();
    gameActiveRef.current = true;
    setHitCount(0);
    setStatusMessage(null);
  };

  useEffect(() => {
    buildElectrons();

    const animate = (now) => {
      const elapsed = (now - spawnTimeRef.current) / 1000;
      const rx = 82;
      const ry = 30;

      electronsRef.current.forEach((el, i) => {
        const dot = dotRefs.current[i];
        const hitArea = hitAreaRefs.current[i];
        if (!dot || !hitArea) return;

        const theta = el.hit ? el.frozenTheta : el.phase + el.speed * elapsed;
        const x = 100 + rx * Math.cos(theta);
        const y = 100 + ry * Math.sin(theta);

        dot.setAttribute("cx", x);
        dot.setAttribute("cy", y);
        hitArea.setAttribute("cx", x);
        hitArea.setAttribute("cy", y);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleElectronHit = (index) => {
    if (!gameActiveRef.current) return;
    const el = electronsRef.current[index];
    if (el.hit) return;

    el.hit = true;
    const elapsed = (performance.now() - spawnTimeRef.current) / 1000;
    el.frozenTheta = el.phase + el.speed * elapsed;

    const dot = dotRefs.current[index];
    if (dot) {
      dot.setAttribute("fill", "#22d3ee");
      dot.setAttribute("r", "6");
    }

    const nextCount = hitCount + 1;
    setHitCount(nextCount);
    setHintVisible(true);

    if (nextCount === TOTAL_ELECTRONS) {
      triggerDecoherence();
    }
  };

  const triggerDecoherence = () => {
    gameActiveRef.current = false;
    setStatusMessage("Decoherence pulse complete");

    const wrapper = shakeWrapperRef.current;
    const group = atomGroupRef.current;
    if (wrapper) {
      wrapper.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) both";
    }

    spawnParticles();

    setTimeout(() => {
      if (wrapper) wrapper.style.animation = "";
      if (group) {
        group.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-out";
        group.style.transform = "scale(0.2)";
        group.style.opacity = "0";
      }
    }, 450);

    setTimeout(() => {
      buildElectrons();
      dotRefs.current.forEach((dot) => {
        if (dot) {
          dot.setAttribute("fill", "#ffffff");
          dot.setAttribute("r", "4");
        }
      });
      if (group) {
        group.style.transition = "transform 0.5s cubic-bezier(.2,.8,.3,1), opacity 0.5s ease-in";
        group.style.transform = "rotate(90deg) scale(1)";
        group.style.opacity = "1";
      }
    }, 900);
  };

  const spawnParticles = () => {
    const layer = particlesRef.current;
    if (!layer) return;
    const NS = "http://www.w3.org/2000/svg";
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const dist = 40 + Math.random() * 50;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      const p = document.createElementNS(NS, "circle");
      p.setAttribute("cx", 100);
      p.setAttribute("cy", 100);
      p.setAttribute("r", 1.5 + Math.random() * 1.5);
      p.setAttribute("fill", Math.random() > 0.5 ? "#22d3ee" : "#a855f7");
      p.style.transition = "transform 0.7s ease-out, opacity 0.7s ease-out";
      p.style.transform = "translate(0px,0px)";
      p.style.opacity = "1";
      layer.appendChild(p);
      requestAnimationFrame(() => {
        p.style.transform = `translate(${dx}px,${dy}px)`;
        p.style.opacity = "0";
      });
      setTimeout(() => p.remove(), 750);
    }
  };

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* ── HERO SECTION (Identical structure to UQA Hero) ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-28 sm:pt-32 text-center px-5 sm:px-8 md:px-10 overflow-hidden">
        {/* Background Gradient Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_45%,rgba(34,211,238,0.12)_0%,transparent_65%)]" />

        {/* ATOM VISUAL: Interactive Qubit/Electron SVG */}
        <div className="relative z-10 mb-8 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          <svg
            viewBox="0 0 200 200"
            className="w-[280px] sm:w-[350px] md:w-[420px] h-[280px] sm:h-[350px] md:h-[420px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
          >
            <g ref={shakeWrapperRef} transform="translate(0,0)">
              <g
                ref={atomGroupRef}
                style={{ transformOrigin: "100px 100px", transform: "rotate(90deg)", opacity: 1 }}
              >
                {/* Nucleus */}
                <circle cx="100" cy="100" r="7" fill="#ffffff" />
                <circle cx="100" cy="100" r="14" fill="#22d3ee" opacity="0.25" />

                {[0, 1, 2].map((i) => {
                  const rotation = i === 0 ? 0 : i === 1 ? 60 : -60;
                  const strokeColor = i === 0 ? "#22d3ee" : i === 1 ? "#a855f7" : "#38bdf8";
                  return (
                    <g key={i} transform={rotation ? `rotate(${rotation} 100 100)` : undefined}>
                      <ellipse cx="100" cy="100" rx="82" ry="30" fill="none" stroke={strokeColor} strokeWidth="1.2" opacity="0.4" />
                      <circle
                        ref={(el) => (hitAreaRefs.current[i] = el)}
                        r="14"
                        fill="transparent"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleElectronHit(i)}
                      >
                        <title>Apply microwave pulse</title>
                      </circle>
                      <circle
                        ref={(el) => (dotRefs.current[i] = el)}
                        r="4"
                        fill="#ffffff"
                        style={{ pointerEvents: "none", transition: "fill 0.15s ease, r 0.15s ease" }}
                      />
                    </g>
                  );
                })}
              </g>
            </g>
            <g ref={particlesRef} />
          </svg>

          {/* Faint status line */}
          <div
            className="text-center text-[11px] font-medium tracking-wide text-cyan-400 mt-1 transition-opacity duration-300"
            style={{ opacity: (hintVisible && hitCount < TOTAL_ELECTRONS) || statusMessage ? 0.8 : 0 }}
          >
            {statusMessage ? statusMessage : `${hitCount}/${TOTAL_ELECTRONS} pulses locked`}
          </div>
        </div>

        {/* Hero Typography (Do NOT expand out QSITE) */}
        <h1 className="relative z-10 text-[clamp(32px,5vw,60px)] font-light leading-[1.18] mb-8 text-white max-w-4xl mx-auto">
          QSITE <strong className="font-extrabold text-cyan-400">2026</strong>
        </h1>

        {/* Hero Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto items-stretch sm:items-center justify-center">
          <button
            onClick={() => handleNav("registration")}
            className="bg-cyan-400 text-black px-7 py-3 rounded-md font-extrabold text-[14px] hover:bg-cyan-300 transition-all cursor-pointer w-full sm:w-auto text-center shadow-lg"
          >
            Registration
          </button>
          <button
            onClick={() => handleNav("schedule")}
            className="border border-cyan-400/40 text-cyan-300 px-7 py-3 rounded-md font-extrabold text-[14px] hover:bg-white/5 transition-all cursor-pointer w-full sm:w-auto text-center"
          >
            Poster Submission
          </button>
        </div>
      </section>

      {/* ── 1400px CONTAINER FOR BODY SKELETON SECTIONS (UQA Style) ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 pb-24 space-y-16">
        {/* Conference Overview (Empty skeleton) */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-8">
            Conference Overview
          </h2>
          <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Conference Overview Placeholder ]
          </div>
        </section>

        <hr className="border-none border-t border-white/10" />

        {/* Past Metrics (Empty skeleton) */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-8">
            Past Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 rounded-xl border border-dashed border-white/15 flex items-center justify-center text-slate-500 font-mono text-xs"
              >
                [ Metric {i} ]
              </div>
            ))}
          </div>
        </section>

        <hr className="border-none border-t border-white/10" />

        {/* Introduction to the Quantum Coalition (Empty skeleton) */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-8">
            Introduction to Quantum Coalition
          </h2>
          <div className="w-full min-h-[140px] rounded-xl border border-dashed border-white/15 flex items-center justify-center text-slate-500 font-mono text-sm">
            [ Quantum Coalition Introduction Placeholder ]
          </div>
        </section>
      </div>
    </div>
  );
};
