const { useState } = window.React || React;

window.Registration = function Registration({ navigateTo }) {
  const handleNav = (target) => {
    if (navigateTo) {
      navigateTo(target);
    } else {
      window.location.hash = target;
    }
  };

  // Option to set your specific Mailchimp Audience Action URL here
  const MAILCHIMP_ACTION_URL = "https://qchack.us1.list-manage.com/subscribe/post?u=ec9ef05b2309238450afd4872&amp;id=e77e603158&amp;f_id=00fa32e5f0";

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
            Official ticket registration opens soon. Subscribe below to receive priority access to ticket drops, travel grant applications, and workshop sign-ups.
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

        {/* ── MAILCHIMP EMBEDDED WIDGET CONTAINER ── */}
        <div className="max-w-xl mx-auto">
          {window.MailchimpWidget ? (
            <window.MailchimpWidget actionUrl={MAILCHIMP_ACTION_URL} />
          ) : (
            /* Inline Mailchimp Fallback Form */
            <div id="mc_embed_signup" className="bg-[#140c2a]/80 rounded-2xl border border-purple-500/20 p-6 sm:p-8 backdrop-blur-md shadow-[0_10px_30px_rgba(15,8,38,0.5)]">
              <form
                action={MAILCHIMP_ACTION_URL || "#"}
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate space-y-5"
                target="_blank"
                noValidate
              >
                {/* Mailchimp Tag ID Field */}
                <div hidden>
                  <input type="hidden" name="tags" value="6336281" />
                </div>

                <div className="text-center space-y-1 mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Join the Q-SITE 2027 Interest List
                  </h3>
                  <p className="text-slate-300/80 text-xs sm:text-sm font-light">
                    Get early notifications for ticket drops, travel grants, and poster calls.
                  </p>
                </div>

                <div className="mc-field-group space-y-1.5 text-left">
                  <label htmlFor="mce-EMAIL" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Email Address <span className="text-sky-300">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    placeholder="name@university.edu"
                    className="required email w-full px-4 py-3 rounded-lg bg-[#1c1238]/80 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="mc-field-group space-y-1.5">
                    <label htmlFor="mce-FNAME" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="FNAME"
                      id="mce-FNAME"
                      placeholder="e.g. Marie"
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/80 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                    />
                  </div>

                  <div className="mc-field-group space-y-1.5">
                    <label htmlFor="mce-LNAME" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="LNAME"
                      id="mce-LNAME"
                      placeholder="e.g. Curie"
                      className="w-full px-4 py-3 rounded-lg bg-[#1c1238]/80 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm transition-all"
                    />
                  </div>
                </div>

                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_mailchimp_honeypot" tabIndex="-1" defaultValue="" />
                </div>

                <div className="pt-2">
                  <input
                    type="submit"
                    value="Subscribe for Updates →"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button w-full py-3.5 rounded-lg bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all cursor-pointer active:scale-[0.99]"
                  />
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-2 font-light">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
