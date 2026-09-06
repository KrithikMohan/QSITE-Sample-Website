# Q-SITE 2026 — Conference Website Skeleton

A modern, high-performance website skeleton for the **Q-SITE Conference** (Quantum Science, Information Technology and Engineering) — Canada's premier student-centric quantum conference.

## Aesthetic & Architecture
- **Aesthetic**: Modeled on the [Quantum Coalition Learning Resource](https://quantum-coalition-learning-resource.vercel.app/) with a deep space theme (`#030712`, `#020617`), ambient cyan (`#22d3ee`) & purple (`#a855f7`) glowing blurred orbs, glassmorphic cards (`backdrop-blur-md border border-white/10`), and dashed wireframe placeholder frames.
- **Strict In-Site Skeleton**: ZERO external form links, zero external popups/modals, and zero file downloads. All interactive elements stay internal as layout preview components.
- **Centralized Config**: `src/config/site.config.ts` controls all text, topics, tracks, tiers, and placeholders with **zero hardcoded dates or times**.
- **Tech Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React.

---

## Route Overview

| Route | Page Name | Features |
| :--- | :--- | :--- |
| `/` | **Home** | Hero header with in-site CTAs, conference past metrics cards, introduction to Q-SITE and Quantum Coalition, in-site Ticket Tier registration wireframe preview (`#registration-preview`), and in-site Poster Submission guidelines wireframe preview (`#poster-preview`). |
| `/schedule` | **Schedule** | Chronological agenda preview timeline with interactive Day 1 / Day 2 tab switcher, session track badges, and time slot skeletons for Keynotes, Panels, Poster Exhibition, and Networking. |
| `/sponsors` | **Sponsors** | Outreach section for prospective partners with Platinum, Gold, and Silver tier cards, an in-site prospectus overview card, and a confirmed sponsor logo showcase skeleton grid. |
| `/support` | **Support & FAQ** | Logistics FAQ expandable accordion (Travel, Lodging, Grants, Guidelines), organizing team direct contact stubs, and a purely static wireframe contact form with disabled inputs. |

---

## Global Shell
- **Sticky Navbar**: Backdrop-blurred navigation with a dashed placeholder for the conference logo, route links (`/`, `/schedule`, `/sponsors`, `/support`), active route indicators, a mobile responsive slide-down menu, and an in-site `"Register [Preview]"` anchor CTA.
- **Footer**: Standard conference footer with dashed logo placeholder, Quick Navigation, Community affiliations, copyright, and a "Skeleton Preview Edition" badge.

---

## Getting Started

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build
```bash
npm run build
npm run start
```
