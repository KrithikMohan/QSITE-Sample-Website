window.Sponsors = function Sponsors({ navigateTo }) {
  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  const sponsorBenefits = [
    {
      title: "Broad impact",
      desc: "The Quantum Coalition is a network of motivated undergraduates in quantum computing clubs at 12 universities across the US."
    },
    {
      title: "Brand & leadership visibility",
      desc: "Position your organization as a leader in quantum computing through speaking slots, keynotes, and prominent branding across event materials."
    },
    {
      title: "Shape the future of the field",
      desc: "Engage students with your platform through technical hands-on workshops, hardware/software tutorials, and/or a hackathon challenge."

    },
    {
      title: "Resume access & recruiting",
      desc: "Connect with talented undergraduates interested in quantum computing careers, gain access to the official Q-SITE student resume bank, and host a dedicated booth at the Quantum Career & Graduate School Fair."
    }
  ];

  const pastPartners = [
    "IBM Quantum", "Microsoft", "Google Quantum AI", "AWS",
    "IonQ", "Xanadu", "Q-CTRL", "Classiq",
    "Quantinuum", "qBraid", "Atom Computing", "Unitary Fund"
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#090514] via-[#110a26] to-[#0a0618] text-slate-100 font-sans animate-fade-in selection:bg-purple-500 selection:text-white pt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-12 pb-24 space-y-16">
        

        <div className="bg-[#140c2a]/70 rounded-2xl border border-purple-500/20 p-8 text-center backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)] mb-10">
            <h3 className="text-xl font-bold text-white mb-2">Anouncing 2027 Partners Soon!</h3>
            <p className="text-slate-300/80 text-sm max-w-2xl mx-auto font-light leading-relaxed mb-6">
              Official sponsor announcements for Q-SITE USA 2027 will be shared as confirmations are finalized.
              We are eager to partner with industry leaders, national labs, and academic institutions to empower early-career quantum talent. Reach out if your organization is interested in participating!
            </p>
            <a
              href="mailto:coalition.quantum@gmail.com?subject=Q-SITE%20USA%202027%20Sponsorship%20Inquiry"
              className="inline-flex items-center gap-2 text-sky-300 hover:text-white font-bold text-sm transition-colors"
            >
              Get in touch with our partnership team →
            </a>
          </div>

        {/* ── RESTRAINED SPONSOR BENEFITS ── */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-[15px] font-extrabold tracking-[0.22em] uppercase text-sky-300">
              Why Partner With Us?
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl font-light">
            We work closely with sponsors to tailor engagement opportunities matching your recruiting, educational, and technical outreach goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#140c2a]/70 rounded-2xl border border-purple-500/20 p-6 backdrop-blur-md hover:border-sky-400/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* ── PAST PARTNERS & NETWORK REACH ── */}
        <section>
                    <div className="space-y-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 text-center">
              Trusted by Leading Quantum Organizations Across Past Events
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {pastPartners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="h-20 rounded-xl border border-purple-500/20 bg-[#1c1238]/50 flex items-center justify-center text-slate-300 font-semibold text-sm text-center p-3 backdrop-blur-sm hover:border-sky-400/40 hover:bg-[#1c1238]/80 transition-all group"
                >
                  <span className="group-hover:text-sky-300 transition-colors">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
