# QSITE 2026

A clean, lightweight website skeleton for **QSITE 2026**.

## Architecture & Style
- **Base Architecture & Behavior**: Directly follows [umd-uqa.github.io](https://github.com/umd-uqa/umd-uqa.github.io) (React 18, Babel Standalone, Tailwind CSS CDN, zero build tools or Node dependencies).
- **Aesthetic**: Color palette and `Geist` font from the [Quantum Coalition Learning Resource](https://quantum-coalition-learning-resource.vercel.app/) (`#030712`, `#020617`, cyan `#22d3ee`, purple `#a855f7`).
- **No Logo**: Minimalist typography only ("QSITE").
- **Pages**:
  - `Home.js`: Hero with interactive atom/orbital visual, Registration and Poster Submission buttons, empty skeleton sections for Conference Overview, Past Metrics, and Quantum Coalition.
  - `Registration.js`: Dedicated registration page with empty skeleton sections.
  - `Schedule.js`: Chronological agenda skeleton with placeholder slots for Keynote Talks, Breakout Panels, and Poster Exhibition.
  - `Sponsors.js`: Partner outreach tiers & confirmed sponsors logo showcase skeletons.
  - `Support.js`: Logistics FAQ & direct contact channels skeletons.

---

## Running Locally
Open `index.html` directly in your browser, or run:
```bash
python3 -m http.server 8000
```
Visit [http://localhost:8000](http://localhost:8000).
