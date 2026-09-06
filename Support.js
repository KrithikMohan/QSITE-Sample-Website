const { useState } = window.React || React;

window.Support = function Support({ navigateTo }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const faqs = [
    {
      category: "Logistics",
      question: "What is the venue and format for Q-SITE 2026?",
      answer: "Q-SITE takes place at the University of Toronto campus with synchronized virtual streaming for global participants. Specific hall and room allocations will be announced closer to the event.",
    },
    {
      category: "Registration",
      question: "When does attendee registration open?",
      answer: "Registration will open officially once keynote tracks and venue logistics are finalized. This skeleton site previews the pass tiers and structural layout in advance.",
    },
    {
      category: "Poster Exhibition",
      question: "Who is eligible to submit a research poster?",
      answer: "Any enrolled student (undergraduate, masters, or PhD) or early-stage researcher conducting work in quantum science, quantum computing, cryptography, materials, or related engineering is eligible to submit an abstract.",
    },
    {
      category: "Logistics",
      question: "Are travel grants or student subsidies available?",
      answer: "Q-SITE strives to ensure equitable access. Details on student travel stipends and conference fee waivers will be outlined when registration goes live.",
    },
    {
      category: "General",
      question: "How can my student club or university chapter partner with Q-SITE?",
      answer: "We welcome student societies across Canadian and international universities to affiliate as community partners. Reach out via our organizer contact channels below.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
          🛟 Support & Assistance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Conference Support & FAQ [Preview]
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Logistics documentation, travel advice, guidelines for attendees, and direct contact channels for the organizing team.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-cyan-400">❓</span>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Logistics & Participation FAQ
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          Answers to key questions regarding conference format, eligibility, student participation, and logistics.
        </p>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-cyan-500/40 bg-slate-900/60" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10 shrink-0">
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-100">
                      {item.question}
                    </span>
                  </div>
                  <span className={`text-cyan-400 text-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Channels & Static Wireframe Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Direct Channels */}
        <div className="lg:col-span-1 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-purple-950/40 text-purple-300 border border-purple-500/30">
              Direct Channels
            </span>
            <h3 className="text-xl font-bold text-white mt-2">
              Organizing Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Official contact points for inquiries, partnership interest, and academic collaborations.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-5 space-y-4 border-white/10">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 shrink-0">
                ✉️
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">General Inquiries</span>
                <span className="text-xs text-white font-mono break-all">organizers@qsiteconf.ca [Placeholder]</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-400 shrink-0">
                💬
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Discord Community</span>
                <span className="text-xs text-white font-mono">discord.gg/qsite [Placeholder]</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-500/20 text-sky-400 shrink-0">
                📍
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                <span className="text-xs text-white font-mono">Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl dashed-wireframe text-[11px] font-mono text-slate-400 flex items-center gap-2">
            <span>🔒</span>
            <span>In-site wireframe stubs • No external redirects</span>
          </div>
        </div>

        {/* Static Wireframe Form */}
        <div className="glass-panel rounded-2xl lg:col-span-2 p-6 sm:p-8 border-white/10">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
            <div>
              <h3 className="text-lg font-bold text-white">
                Send an Inquiry [Wireframe Form]
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Layout skeleton demonstrating fields for the organizer inquiry portal.
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-dashed border-white/20">
              Disabled Skeleton
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="Student / Researcher Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Institutional Email
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="name@university.ca"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Subject Category
              </label>
              <input
                type="text"
                disabled
                placeholder="e.g. Poster Query, Sponsorship, Student Club Partnership"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Inquiry Message
              </label>
              <textarea
                rows={4}
                disabled
                placeholder="Inquiry text placeholder..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                disabled
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs cursor-not-allowed select-none flex items-center justify-center gap-2"
              >
                <span>✉️</span>
                <span>Send Message [Disabled Preview Button]</span>
              </button>
              <span className="text-[10px] font-mono text-slate-500 text-center sm:text-right">
                Static UI wireframe only • Zero backend network requests
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
