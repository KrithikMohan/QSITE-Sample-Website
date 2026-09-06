# Q-SITE 2026 — Conference Website Skeleton

A clean, lightweight website skeleton for the **Q-SITE Conference** (Quantum Science, Information Technology and Engineering) — Canada's premier student-centric quantum conference.

## Architecture
Modeled directly on the architecture of [umd-uqa.github.io](https://github.com/umd-uqa/umd-uqa.github.io):
- **Zero Build Setup / Zero Node Dependencies**: Uses browser-ready React 18, Babel Standalone, and Tailwind CSS CDN.
- **Flat, Readable File Structure**: Each page is a single, clean JavaScript file styled with Tailwind CSS, loaded into `index.html`.
- **Aesthetic**: Modeled on the [Quantum Coalition Learning Resource](https://quantum-coalition-learning-resource.vercel.app/) with a dark space theme (`#030712`, `#020617`), ambient glowing cyan (`#22d3ee`) & purple (`#a855f7`) radial orbs, glassmorphism (`backdrop-blur-md border border-white/10`), and dashed wireframe placeholder frames.
- **Strict In-Site Skeleton**: ZERO external forms, zero external popups, and zero file downloads. All action buttons remain 100% internal within the site.

---

## File Structure

```
.
├── index.html     # Main HTML entry point (React 18, Babel, Tailwind CDN, fonts & styles)
├── App.js         # Main router, ambient background glow, persistent layout, footer
├── Navbar.js      # Sticky navigation shell with blank logo placeholder & mobile drawer
├── Home.js        # Home page (Hero, metrics, Q-SITE intro, ticket preview, poster preview)
├── Schedule.js    # Chronological agenda wireframe with Day 1 / Day 2 tab switcher
├── Sponsors.js    # Partner outreach tiers, in-site prospectus preview & confirmed logo grid
├── Support.js     # Logistics FAQ accordion & static wireframe contact form
└── README.md      # Project documentation
```

---

## Running the Website

You can run this website instantly without installing any node modules:

### Option 1: Direct File Opening
Double-click or open `index.html` directly in any web browser.

### Option 2: Local HTTP Server
Using Python:
```bash
python3 -m http.server 8000
```
Or using Node `npx serve`:
```bash
npx serve .
```
Then visit [http://localhost:8000](http://localhost:8000).

### Option 3: GitHub Pages / Static Hosting
Push to GitHub and enable GitHub Pages on the `main` branch — it will deploy immediately with zero build step required.
