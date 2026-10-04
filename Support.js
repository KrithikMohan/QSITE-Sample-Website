window.Support = function Support({ navigateTo }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  // ── Logistics FAQ (from the Q-SITE USA 2027 partnerships packet) ──
  const faqs = [
    {
      question: "What is Q-SITE?",
      answer:
        "Q-SITE (Quantum Science, Information, Technology, and Engineering) is an educational conference that brings together industry and academia to inspire and educate students about careers and research in quantum technology. It is organized by undergraduates, for undergraduates, and hosted by the Quantum Coalition.",
    },
    {
      question: "When and where is the conference?",
      answer:
        "Wednesday, March 3 through Friday, March 5, 2027, at the University of Maryland, College Park.",
      action: { label: "View the full schedule", target: "schedule" },
    },
    {
      question: "Who should attend?",
      answer:
        "Q-SITE is designed for undergraduates, as well as early-stage master’s and PhD students, who are curious about careers and research in quantum technology. We expect around 500 students to attend in person.",
    },
    {
      question: "What happens at the conference?",
      answer:
        "Panels with academic and industry speakers, seminar-style lectures on software, algorithms, and hardware, hands-on workshops, a student poster session, a career fair, and lab tours at the University of Maryland.",
    },
    {
      question: "Is there a hackathon?",
      answer:
        "Yes. An in-person quantum computing hackathon hosted by students at the University of Maryland runs from Friday, March 5 to Sunday, March 7, 2027. It kicks off at the conference closing ceremony.",
    },
    {
      question: "Can I present my research?",
      answer:
        "Day 2 features undergraduate research talks followed by an interactive poster session and networking reception.",
    },
    {
      question: "What career opportunities are available?",
      answer:
        "Day 3 is dedicated to industry and workforce: a graduate school panel, a workforce readiness workshop on resumes and technical interviews, and a career fair with company representatives. Q-SITE also runs a resume bank for attendees.",
    },
    {
      question: "Has Q-SITE been held before?",
      answer:
        "Q-SITE was first held in 2022 at the University of Toronto and has since expanded to the University of British Columbia. Q-SITE Toronto 2024 drew 587 registrations. The 2027 conference at the University of Maryland is the first Q-SITE in the United States.",
    },
  ];

  // ── Organizing committee ──
  const organizers = [
    { name: "Krithik Mohan", affiliation: "Sophomore, University of Maryland" },
    { name: "Sai Charush Minna", affiliation: "Sophomore, University of Maryland", role: "Vice President, UMD UQA" },
    { name: "Pranav Singhal", affiliation: "Junior, Penn State University", role: "Lead, Penn State Quantum Student Society" },
    { name: "Ben McDonough", affiliation: "3rd-year PhD student, CU Boulder", role: "Quantum Coalition board" },
    { name: "Peter Wu", affiliation: "1st-year PhD student, Columbia University" },
  ];

  const links = [
    { label: "Quantum Coalition", href: "https://quantumcoalition.io", display: "quantumcoalition.io" },
    { label: "Q-SITE", href: "https://qsiteconf.ca", display: "qsiteconf.ca" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-[120px] pb-24">
        {/* Header */}
        <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight leading-[1.2] mb-4 text-cyan-400">
          Support
        </h1>
        <p className="text-[18px] sm:text-[20px] text-slate-400 mb-12 leading-relaxed max-w-3xl">
          Answers to common questions about Q-SITE USA 2027, and how to reach the organizing team.
        </p>

        {/* ── LOGISTICS FAQ SECTION ── */}
        <section className="mb-16">
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
            Logistics FAQ
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/[0.01] divide-y divide-white/10 max-w-4xl">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 text-left px-5 sm:px-6 py-5 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <span className={`text-[16px] font-bold ${isOpen ? "text-cyan-300" : "text-white"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-cyan-400 text-xl leading-none transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 -mt-1">
                      <p className="text-[15px] text-slate-400 leading-relaxed max-w-3xl">{faq.answer}</p>
                      {faq.action && (
                        <button
                          onClick={() => handleNav(faq.action.target)}
                          className="mt-3 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                        >
                          {faq.action.label} &rarr;
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-none border-t border-white/10 mb-16" />

        {/* ── DIRECT CONTACT CHANNELS SECTION ── */}
        <section>
          <h2 className="text-[16px] font-extrabold tracking-[0.22em] uppercase text-cyan-400 mb-6">
            Direct Contact Channels
          </h2>

          {/* Organizing committee */}
          <h3 className="text-[20px] font-extrabold tracking-tight text-white mb-2">Organizing Committee</h3>
          <p className="text-[15px] text-slate-400 mb-6 max-w-3xl">
            Organized with the support of the Undergraduate Quantum Association at the University of Maryland, College Park.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {organizers.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-cyan-400/20 bg-gradient-to-b from-cyan-400/[0.04] to-white/[0.01] p-5"
              >
                <p className="text-[16px] font-bold text-white">{person.name}</p>
                <p className="text-[14px] text-slate-400 mt-1">{person.affiliation}</p>
                {person.role && <p className="text-[13px] text-cyan-300 mt-2">{person.role}</p>}
              </div>
            ))}
          </div>

          {/* Links & email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.01] hover:border-cyan-400/40 hover:bg-white/[0.03] transition-colors p-5 block"
              >
                <p className="text-[13px] font-extrabold tracking-[0.22em] uppercase text-slate-500 mb-1">{link.label}</p>
                <p className="font-mono text-[15px] text-cyan-300">{link.display}</p>
              </a>
            ))}
            {/* TODO: replace with the organizing team's contact email */}
            <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.01] p-5 flex flex-col justify-center">
              <p className="text-[13px] font-extrabold tracking-[0.22em] uppercase text-slate-500 mb-1">Email</p>
              <p className="font-mono text-sm text-slate-500">[ Contact email coming soon ]</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
