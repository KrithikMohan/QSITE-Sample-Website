window.Schedule = function Schedule({ navigateTo }) {
  // ── Agenda data (from the sponsorship packet "Schedule highlights" page) ──
  const days = [
    {
      id: "day-1",
      label: "Day 01",
      date: "Wednesday, Mar 3",
      title: "Foundations & Careers",
      sessions: [
        {
          time: "08:30 – 14:00",
          title: "Registration & “Quantum 101”",
          description: "Registration & introductory sessions on algorithms, QEC, and hardware.",
        },
        {
          time: "14:00 – 15:30",
          title: "Opening Ceremony & Keynote I",
          subtitle: "Building the Future Quantum Workforce",
          description: "Key skills, workforce trends, and emerging industry careers.",
        },
        {
          time: "15:45 – 17:00",
          title: "Lightning Talks: “My Day in Quantum”",
          description: "Rapid-fire career insights from software engineers, technicians, and research scientists.",
        },
        {
          time: "17:30 – 18:30",
          title: "UMD Quantum Lab Tours",
          description: "Guided cohort visits through premier research facilities at the University of Maryland.",
        },
      ],
    },
    {
      id: "day-2",
      label: "Day 02",
      date: "Thursday, Mar 4",
      title: "Research & Skills",
      sessions: [
        {
          time: "09:30 – 10:00",
          title: "Keynote II",
          description: "Developing a quantum computing platform, from past to future.",
        },
        {
          time: "10:00 – 12:00 & 13:00 – 14:00",
          title: "Workshops",
          description: "Hands-on sessions showcasing current quantum tools, both hardware and software, at a beginner-to-intermediate level.",
        },
        {
          time: "12:00 – 15:00",
          title: "Accessing Research Workshop",
          description: "Helping students create a concrete strategy for identifying a research area, reaching out to a PI, finding REUs, and developing the skills to be successful in research.",
        },
        {
          time: "15:00 – 15:45",
          title: "Frontiers in Quantum Research Panel",
          description: "Industry research leaders share active research challenges and guiding questions for future research.",
        },
        {
          time: "16:00 – 18:30",
          title: "Undergrad Talks & Poster Session",
          description: "Selected student research presentations followed by an interactive poster networking reception.",
        },
      ],
    },
    {
      id: "day-3",
      label: "Day 03",
      date: "Friday, Mar 5",
      title: "Industry & Workforce",
      sessions: [
        {
          time: "09:30 – 10:30",
          title: "Graduate School Panel",
          description: "Sponsored panel educating students about graduate school and the application process.",
        },
        {
          time: "10:45 – 11:45",
          title: "Workforce Readiness Workshop",
          description: "Resume building and technical interview prep for starting careers in the quantum industry.",
        },
        {
          time: "12:00 – 14:30",
          title: "Quantum Career Fair",
          description: "Recruitment, networking, and Q&A with company representatives at booths — lunch provided.",
        },
        {
          time: "15:00 – 16:00",
          title: "Keynote III",
          description: "Outlook, timeline, and major obstacles to scaling quantum computing technology, as well as the biggest initiatives pushing the field forward.",
        },
        {
          time: "16:15 – 17:00",
          title: "Closing Ceremony & UQA Hackathon Kickoff",
        },
      ],
    },
  ];

  const scrollToDay = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for the fixed 72px navbar
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[120px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-cyan-400">
          Schedule
        </h1>
        <p className="text-[18px] sm:text-[20px] text-slate-400 mb-6 leading-relaxed max-w-3xl">
          Three days of talks, workshops, and career programming at the University of Maryland.
        </p>

        {/* Event meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300 mb-10">
          <span className="font-mono">March 3–5, 2027</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>University of Maryland</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>
            <span className="text-slate-500 uppercase tracking-[0.18em] text-xs font-bold mr-2">Theme</span>
            <span className="text-cyan-300 font-semibold">Pathways into Quantum</span>
          </span>
        </div>

        {/* Day quick-jump (useful when columns stack on smaller screens) */}
        <div className="flex flex-wrap gap-3 mb-12 lg:hidden">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => scrollToDay(day.id)}
              className="border border-cyan-400/40 text-cyan-300 hover:bg-white/5 px-4 py-2 rounded-md font-bold text-xs tracking-wide transition-all cursor-pointer"
            >
              {day.label} · {day.date.split(",")[0]}
            </button>
          ))}
        </div>

        {/* ── THREE-DAY AGENDA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mt-2">
          {days.map((day) => (
            <section
              key={day.id}
              id={day.id}
              className="rounded-xl border border-cyan-400/20 bg-gradient-to-b from-cyan-400/[0.04] to-white/[0.01] p-6 sm:p-7 scroll-mt-24"
            >
              {/* Day header */}
              <div className="mb-6 pb-5 border-b border-white/10">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="text-[13px] font-extrabold tracking-[0.22em] uppercase text-cyan-400">
                    {day.label}
                  </span>
                  <span className="text-[13px] font-medium text-slate-400">{day.date}</span>
                </p>
                <h2 className="text-[22px] sm:text-[24px] font-extrabold tracking-tight text-white leading-tight">
                  {day.title}
                </h2>
              </div>

              {/* Timeline */}
              <ol className="relative border-l border-white/10 ml-1 space-y-7">
                {day.sessions.map((session, i) => (
                  <li key={i} className="pl-5 relative">
                    <span className="absolute -left-[5px] top-[6px] w-[9px] h-[9px] rounded-full bg-cyan-400 ring-4 ring-[#030712]" />
                    <p className="font-mono text-[13px] font-semibold text-cyan-300 mb-1">
                      {session.time}
                    </p>
                    <h3 className="text-[16px] font-bold text-white leading-snug">
                      {session.title}
                    </h3>
                    {session.subtitle && (
                      <p className="text-[14px] italic text-slate-300 mt-1">
                        {session.subtitle}
                      </p>
                    )}
                    {session.description && (
                      <p className="text-[14px] text-slate-400 leading-relaxed mt-1">
                        {session.description}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <p className="text-xs text-slate-500 mt-10">
          All times are local (ET). Schedule is subject to change.
        </p>
      </div>
    </div>
  );
};
