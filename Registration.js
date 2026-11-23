const { useState } = window.React || React;

window.Registration = function Registration({ navigateTo }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    yearOfStudy: "1st Year Undergraduate",
    major: "",
    quantumExperience: "Beginner / Curious (No formal classes)",
    interests: [],
    travelGrant: "No",
    comments: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    { id: "lab-tours", label: "Guided UMD Quantum Lab Tours (Day 1)" },
    { id: "quantum-101", label: "Quantum 101 / Intro to Tech Workshops" },
    { id: "poster-session", label: "Presenting a Research Poster" },
    { id: "career-fair", label: "Quantum Career & Graduate School Fair (Day 3)" },
    { id: "hackathon", label: "Post-Conference Quantum Hackathon (UQA)" },
    { id: "resume-bank", label: "Opt-in to Shared Student Resume Bank" }
  ];

  const handleInterestToggle = (label) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(label);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== label)
          : [...prev.interests, label]
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate webhook POST (e.g. to Google Sheets / Formspree / Airtable)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

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
        <section className="relative text-center max-w-3xl mx-auto pt-6 pb-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse"></span>
            Pre-Registration & Interest List
          </div>
          
          <h1 className="text-[clamp(34px,5.5vw,56px)] font-black tracking-tight leading-[1.1] mb-6 text-white">
            Join the Interest List for{" "}
            <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Q-SITE USA 2027
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-light max-w-2xl mx-auto mb-4">
            Official ticket registration opens soon. Sign up below to receive priority access to ticket drops, travel grant applications, and session sign-ups.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-sky-300/90">
            <span>📅 March 3–5, 2027</span>
            <span>•</span>
            <span>📍 University of Maryland</span>
            <span>•</span>
            <span>🎟️ Free for Students</span>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* ── FORM CONTAINER ── */}
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-[#140c2a]/80 rounded-2xl border border-sky-400/50 p-8 sm:p-12 text-center backdrop-blur-md shadow-[0_10px_40px_rgba(56,189,248,0.15)] animate-fade-in space-y-6">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 border border-sky-300/40 flex items-center justify-center mx-auto text-sky-300 text-3xl">
                ✨
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                You're on the Priority List!
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto font-light">
                Thank you, <strong className="text-white">{formData.fullName}</strong>! We've saved your interest profile for <strong className="text-sky-300">Q-SITE USA 2027</strong>. You'll be the first to know when official ticketing and travel grant applications go live.
              </p>
              
              <div className="p-4 rounded-xl bg-[#1c1238]/60 border border-purple-400/20 text-xs text-slate-300 max-w-md mx-auto space-y-1 text-left">
                <div><strong className="text-slate-400">Email:</strong> {formData.email}</div>
                <div><strong className="text-slate-400">Institution:</strong> {formData.institution}</div>
                <div><strong className="text-slate-400">Year:</strong> {formData.yearOfStudy}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg border border-purple-500/30 text-slate-300 hover:text-white hover:bg-white/5 text-xs font-semibold transition-all cursor-pointer"
                >
                  Submit Another Response
                </button>
                <button
                  onClick={() => handleNav("home")}
                  className="px-6 py-2.5 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  Return to Home Page
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#140c2a]/70 rounded-2xl border border-purple-500/20 p-6 sm:p-10 backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)] space-y-8"
            >
              {/* SECTION 1: PERSONAL & ACADEMIC INFO */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]"></span>
                  <h3 className="text-sm font-extrabold tracking-[0.2em] uppercase text-sky-300">
                    1. Contact & Academic Info
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Marie Curie"
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@university.edu"
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Institution */}
                  <div className="space-y-2 sm:col-span-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      University / School <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="institution"
                      required
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="e.g. UMD, Yale, Stanford"
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                    />
                  </div>

                  {/* Year of Study */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Current Level <span className="text-purple-400">*</span>
                    </label>
                    <select
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/70 border border-purple-500/30 text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all cursor-pointer"
                    >
                      <option value="1st Year Undergraduate">1st Year Undergrad</option>
                      <option value="2nd Year Undergraduate">2nd Year Undergrad</option>
                      <option value="3rd Year Undergraduate">3rd Year Undergrad</option>
                      <option value="4th Year Undergraduate">4th Year Undergrad</option>
                      <option value="Graduate Student">Graduate Student</option>
                      <option value="High School / Educator / Other">High School / Other</option>
                    </select>
                  </div>

                  {/* Major */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Major / Field
                    </label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      placeholder="e.g. Physics, CS, ECE"
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-purple-500/20" />

              {/* SECTION 2: BACKGROUND & INTERESTS */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7dd3fc]"></span>
                  <h3 className="text-sm font-extrabold tracking-[0.2em] uppercase text-sky-300">
                    2. Background & Conference Preferences
                  </h3>
                </div>

                {/* Quantum Experience */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Prior Experience with Quantum Computing
                  </label>
                  <select
                    name="quantumExperience"
                    value={formData.quantumExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/70 border border-purple-500/30 text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all cursor-pointer"
                  >
                    <option value="Beginner / Curious (No formal classes)">
                      Beginner / Curious — Interested, but haven't taken quantum classes
                    </option>
                    <option value="Self-Taught / Intro Seminar">
                      Basic Exposure — Attended introductory talks / self-study
                    </option>
                    <option value="Formal Coursework">
                      Coursework — Enrolled in or completed university quantum courses
                    </option>
                    <option value="Active Researcher">
                      Active Researcher — Currently working in a quantum lab / project
                    </option>
                  </select>
                </div>

                {/* Event Interests (Checkboxes) */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Which activities are you interested in? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {interestOptions.map((opt) => {
                      const checked = formData.interests.includes(opt.label);
                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleInterestToggle(opt.label)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                            checked
                              ? "bg-purple-900/40 border-sky-400/60 text-white"
                              : "bg-[#1c1238]/40 border-purple-500/20 text-slate-300 hover:border-purple-400/40"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                              checked
                                ? "bg-sky-400 border-sky-400 text-slate-950 font-bold"
                                : "border-slate-500"
                            }`}
                          >
                            {checked ? "✓" : ""}
                          </div>
                          <span className="text-xs font-medium">{opt.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Travel Grant Interest */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Will you require travel/housing support to attend at UMD?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No", "Maybe"].map((val) => (
                      <label
                        key={val}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                          formData.travelGrant === val
                            ? "bg-purple-900/50 border-sky-400 text-sky-300"
                            : "bg-[#1c1238]/50 border-purple-500/20 text-slate-400 hover:text-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="travelGrant"
                          value={val}
                          checked={formData.travelGrant === val}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4 border-t border-purple-500/20">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-slate-950 font-black text-sm tracking-wide uppercase shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Saving Your RSVP..." : "Join Priority RSVP List →"}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-3 font-light">
                  We respect your privacy. Your information will only be used for Q-SITE conference updates and attendee logistics.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
