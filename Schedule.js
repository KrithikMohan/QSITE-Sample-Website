const { useState } = window.React || React;

window.Schedule = function Schedule({ navigateTo }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const days = [
    {
      day: "Day 1",
      theme: "Quantum Theory, Cryptography & Algorithms",
      sessions: [
        {
          timeSlot: "Morning Plenary (Time TBA)",
          title: "Opening Remarks & Presidential Keynote Address",
          track: "Keynote Track",
          type: "Keynote",
          desc: "Welcome address mapping the Canadian quantum ecosystem and university research roadmap.",
          speaker: "Keynote Speaker [To Be Announced]",
        },
        {
          timeSlot: "Mid-Morning Technical (Time TBA)",
          title: "Breakout Panel: Post-Quantum Cryptography & Practical QKD Networks",
          track: "Quantum Security",
          type: "Panel",
          desc: "Evaluating NIST post-quantum standards, quantum key distribution infrastructure, and network challenges.",
          speaker: "Panel of 4 Research Specialists",
        },
        {
          timeSlot: "Early Afternoon (Time TBA)",
          title: "Poster Exhibition Session A: Algorithms & Simulation",
          track: "Poster Track",
          type: "Poster",
          desc: "Interactive poster showcase with student presenters detailing algorithmic advances and hybrid VQE methods.",
          speaker: "Student Researchers & Faculty Evaluators",
        },
        {
          timeSlot: "Late Afternoon (Time TBA)",
          title: "Industry & Academic Networking Reception",
          track: "Networking",
          type: "Networking",
          desc: "Informal networking in the main glass atrium connecting students with lab leaders and industry delegates.",
          speaker: "All Attendees & Sponsors",
        },
      ],
    },
    {
      day: "Day 2",
      theme: "Quantum Hardware, Sensing & Engineering",
      sessions: [
        {
          timeSlot: "Morning Keynote (Time TBA)",
          title: "Architectures of Quantum Coherence: Superconducting vs. Neutral Atoms",
          track: "Hardware Track",
          type: "Keynote",
          desc: "An in-depth survey of competing quantum computing modalities, error mitigation, and scaling roadmaps.",
          speaker: "Hardware Pioneer [To Be Announced]",
        },
        {
          timeSlot: "Mid-Morning Panel (Time TBA)",
          title: "Breakout Panel: Quantum Sensing in Extreme Environments",
          track: "Quantum Sensing",
          type: "Panel",
          desc: "From NV-center magnetometry to cold-atom gravimeters: bridging experimental physics into commercial sensors.",
          speaker: "Panel of Industry & Lab Researchers",
        },
        {
          timeSlot: "Early Afternoon (Time TBA)",
          title: "Poster Exhibition Session B: Hardware & Physical Devices",
          track: "Poster Track",
          type: "Poster",
          desc: "Student demonstrations, fabrication poster displays, cryogenic engineering, and photonics setups.",
          speaker: "Student Researchers & Experimental Teams",
        },
        {
          timeSlot: "Late Afternoon (Time TBA)",
          title: "Closing Ceremony & Poster Award Presentations",
          track: "Plenary Track",
          type: "Keynote",
          desc: "Presentation of Best Poster awards, Hackathon highlights, and Q-SITE concluding statements.",
          speaker: "Organizing Committee & Awards Committee",
        },
      ],
    },
  ];

  const currentDay = days[activeDayIdx];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
          📅 Agenda Wireframe
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Conference Schedule [Preview]
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Chronological agenda mapping out keynote talks, technical breakout panels, and student poster exhibition sessions.
        </p>
      </div>

      {/* Day Tab Switcher */}
      <div className="flex justify-center mb-10">
        <div className="p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
          {days.map((d, idx) => {
            const isActive = activeDayIdx === idx;
            return (
              <button
                key={d.day}
                onClick={() => setActiveDayIdx(idx)}
                className={`px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{d.day}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isActive ? "bg-black/20 text-black font-bold" : "bg-white/5 text-slate-400"
                  }`}
                >
                  Preview
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Day Focus Track Notice */}
      <div className="mb-8 p-4 rounded-xl dashed-wireframe flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
            {currentDay.day} Focus Track
          </span>
          <span className="text-sm font-semibold text-white">
            {currentDay.theme}
          </span>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.03] text-slate-400 border border-dashed border-white/20">
          Times: TBA • Zero Hardcoded Dates
        </span>
      </div>

      {/* Sessions Timeline */}
      <div className="space-y-4">
        {currentDay.sessions.map((session, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Time slot & type */}
            <div className="md:w-1/4 shrink-0 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                <span>🕒</span>
                <span>{session.timeSlot}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                  {session.type}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  #{idx + 1}
                </span>
              </div>
            </div>

            {/* Session content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                  {session.track}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                {session.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {session.desc}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="text-slate-500">Speaker:</span>
                <span className="text-slate-300 px-2 py-0.5 rounded bg-white/[0.03] border border-dashed border-white/15">
                  {session.speaker}
                </span>
              </div>
            </div>

            {/* Location stub */}
            <div className="md:w-44 shrink-0 flex flex-col items-start md:items-end justify-center pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
              <div className="w-full text-center py-2 px-3 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-[11px] font-mono text-slate-500">
                Room TBA • Stream Live
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
