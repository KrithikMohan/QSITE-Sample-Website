# Implementation Plan: Q-SITE Conference Website Skeleton Setup

## 1. Overview & Vision (Caveman Speak)
Goal: Build Q-SITE (Quantum Science, Information Technology and Engineering) conference website skeleton.
Role: Strictly wireframe / skeleton preview site for Canadian student quantum conference.
Reference: Dark space aesthetic modeled on Quantum Coalition learning resource (https://quantum-coalition-learning-resource.vercel.app/).
Color Palette: Dark space (`#030712`, `#020617`), ambient cyan (`#22d3ee`) & purple (`#a855f7`) glowing blurred orbs, glassmorphism (`backdrop-blur-md border border-white/10`), dashed logo placeholder frames.
Strict Wireframe Constraint: ZERO external forms (no Google Forms, no Eventbrite), ZERO external URLs, ZERO modal popups, ZERO downloadable PDFs.
All Interactive Elements: In-site preview placeholders only.
Navbar CTA: "Register [Preview]" anchors/scrolls to in-site registration preview card (`/#registration-preview`).
Contact Form: Purely static wireframe on `/support` with read-only/disabled inputs and static wireframe button.
Config Rule: ZERO hardcoded dates or times. All conference dates, tracks, tiers, contact stubs configured in `src/config/site.config.ts`.
Multi-Page Routes: `/`, `/schedule`, `/sponsors`, `/support`.

---

## 2. In-Scope vs. Out-of-Scope

### In-Scope:
- Git worktree bookend workflow (`T0` create, `T10` cleanup).
- Next.js 14+ App Router, TypeScript, Tailwind CSS, Lucide React setup.
- Dark space design tokens, ambient glowing orbs, glassmorphism borders (`globals.css`).
- Centralized site configuration with zero hardcoded dates (`src/config/site.config.ts`).
- Shared wireframe primitives: glass Card, glowing Badge, wireframe Button, DashedPlaceholder frame.
- Sticky Navbar with dashed logo placeholder, nav links, in-site "Register [Preview]" anchor CTA.
- Global Footer with dashed logo placeholder, inert link stubs, copyright.
- Route `/` (Home):
  - Hero header with in-site preview CTAs (anchor jump to `#registration-preview` and `#poster-preview`).
  - Past metrics skeleton cards (Attendees, Speakers, Universities, Partners).
  - Introduction to Q-SITE / Quantum Coalition skeleton block.
  - In-site Ticket Tier registration wireframe preview card (`#registration-preview`).
  - In-site Poster Submission guidelines wireframe preview card (`#poster-preview`).
- Route `/schedule`:
  - Day 1 / Day 2 tab switcher (local tab state).
  - Chronological agenda preview timeline (Keynote, Breakout Panel, Poster Exhibition, Networking slots).
- Route `/sponsors`:
  - Partner outreach tier cards (Platinum, Gold, Silver).
  - In-site prospectus package preview card (zero downloads).
  - Confirmed sponsor logo showcase skeleton grid (dashed placeholders with hover glow).
- Route `/support`:
  - Logistics FAQ expandable accordion skeleton.
  - Organizing team direct contact channels card (inert handles).
  - Static wireframe contact form (disabled/read-only inputs, static button).
- Production build validation (`npm run build`, `npm run lint`).

### Out-of-Scope:
- ANY external form links (Google Forms, Eventbrite, Typeform, etc.).
- ANY modal popups or dialog overlay systems.
- Downloadable PDF files or external download endpoints.
- Backend API endpoints, database persistence, or auth.
- Live payment processing or real ticketing.

---

## 3. Architecture & Design Decisions

- **Folder Structure**:
  - `src/app/`: App Router route handlers and page layouts (`layout.tsx`, `page.tsx`, `schedule/page.tsx`, `sponsors/page.tsx`, `support/page.tsx`).
  - `src/components/layout/`: Navbar, Footer, MobileNav shell components.
  - `src/components/ui/`: Reusable wireframe primitives (Card, Badge, Button, DashedPlaceholder).
  - `src/components/{home,schedule,sponsors,support}/`: Page-specific wireframe modules.
  - `src/config/`: Single source of truth (`site.config.ts`).
  - `src/types/`: TypeScript interfaces for config and data models.
- **Color Palette & Accents**:
  - Backgrounds: `bg-[#030712]` / `bg-[#020617]`.
  - Accents: Cyan (`#22d3ee`), Violet/Purple (`#a855f7`).
  - Glass: `bg-white/[0.03] backdrop-blur-md border border-white/10`.
  - Dashed frames: `border-dashed border-cyan-500/30 hover:border-cyan-400/60`.
- **In-Site Navigation**:
  - Navbar "Register [Preview]" navigates to `/#registration-preview`.
  - Hero "Submit Poster [Preview]" navigates to `/#poster-preview`.
  - No routing leaves the site.

---

## 4. Task Breakdown

### T0: Git Worktree Setup
- **Duration**: ~5 min
- **Dependencies**: None
- **Files**: Git worktree metadata
- **Caveman Action**:
  - Run `git worktree add ../worktree-conference-setup -b feature/conference-setup`.
  - Enter worktree directory: `cd ../worktree-conference-setup`.
  - Ensure main working directory stays clean.
- **Test Cases**:
  - *Happy Path*: `git worktree list` outputs `worktree-conference-setup` pointing to `feature/conference-setup`.
  - *Edge Case*: Directory already exists from prior abort -> clean directory before re-adding.
  - *Error Case*: Working tree dirty -> stash or commit prior.
- **Acceptance Criteria**:
  - Clean worktree at `../worktree-conference-setup` on branch `feature/conference-setup`.

---

### T1: Project Toolchain & Dependency Initialization
- **Duration**: ~20 min
- **Dependencies**: [T0]
- **Files**:
  - `package.json`
  - `tsconfig.json`
  - `tailwind.config.ts`
  - `postcss.config.mjs`
  - `next.config.mjs`
  - `.gitignore`
- **Caveman Action**:
  - Scaffold Next.js App Router project with TypeScript and Tailwind CSS.
  - Install dependencies: `next`, `react`, `react-dom`, `lucide-react`, `clsx`, `tailwind-merge`.
  - Dev dependencies: `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `postcss`, `tailwindcss`, `eslint`, `eslint-config-next`.
  - Configure `@/*` path alias to `./src/*`.
- **Test Cases**:
  - *Happy Path*: `npm run build` initializes without missing package errors.
  - *Edge Case*: Node version check -> verify clean run on Node v20+.
  - *Error Case*: Malformed `tsconfig.json` alias -> fix paths config.
- **Acceptance Criteria**:
  - `package.json` contains required packages.
  - `npx tsc --noEmit` exits with 0 errors.

---

### T2: Site Config & Space Aesthetic System
- **Duration**: ~20 min
- **Dependencies**: [T1]
- **Files**:
  - `src/config/site.config.ts`
  - `src/app/globals.css`
  - `src/types/site.ts`
- **Caveman Action**:
  - Create `site.config.ts`: Define conference name ("Q-SITE"), generic dates/locations ("Dates: TBA", "Location: TBA / Hybrid"), navigation routes (`/`, `/schedule`, `/sponsors`, `/support`), past metrics, session tracks, tier structures, organizer contact placeholders.
  - In `globals.css`: Base dark body background (`#030712`), ambient glowing radial orb classes, glassmorphism border utility (`border-white/10`), dashed border accent utility (`border-dashed border-cyan-500/30`).
- **Test Cases**:
  - *Happy Path*: Import `siteConfig` in any module -> all keys typed, immutable, zero hardcoded dates.
  - *Edge Case*: Null/empty config value -> fallback strings ensure layout doesn't collapse.
  - *Error Case*: Invalid CSS gradient syntax -> build fails with readable error.
- **Acceptance Criteria**:
  - `site.config.ts` exports typed configuration object.
  - `globals.css` renders dark space aesthetic and ambient gradient glow orbs.

---

### T3: Shared Wireframe UI Primitives
- **Duration**: ~20 min
- **Dependencies**: [T2]
- **Files**:
  - `src/components/ui/Card.tsx`
  - `src/components/ui/Badge.tsx`
  - `src/components/ui/Button.tsx`
  - `src/components/ui/DashedPlaceholder.tsx`
- **Caveman Action**:
  - Build `Card`: Glassmorphic container with `bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all`.
  - Build `Badge`: Sleek pill tag with glowing cyan or purple borders and subtle background tint.
  - Build `Button`: Wireframe button with default, primary glow, and dashed skeleton preview styles.
  - Build `DashedPlaceholder`: Dimensioned container with dashed border and center label (used for logo placeholders, speaker headshots, sponsor logos).
- **Test Cases**:
  - *Happy Path*: UI primitives render cleanly with custom classNames and children.
  - *Edge Case*: Empty children passed to `DashedPlaceholder` -> renders default label.
  - *Error Case*: Missing required props -> TypeScript catches at compile time.
- **Acceptance Criteria**:
  - Reusable UI primitives ready for shell and all 4 pages.

---

### T4: Global Shell Layout (Navbar, Mobile Nav, Footer)
- **Duration**: ~25 min
- **Dependencies**: [T3]
- **Files**:
  - `src/components/layout/Navbar.tsx`
  - `src/components/layout/MobileNav.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/app/layout.tsx`
- **Caveman Action**:
  - Build `Navbar`: Sticky top with `backdrop-blur-md bg-[#030712]/80 border-b border-white/10`.
  - Contains dashed logo placeholder `[ Q-SITE LOGO ]`, navigation links (`/`, `/schedule`, `/sponsors`, `/support`), active route highlight, and "Register [Preview]" button that links to `/#registration-preview`.
  - Build `MobileNav`: Hamburger icon toggles mobile slide-down menu on `< 768px`.
  - Build `Footer`: Dashed logo placeholder, inert link stubs (`href="#"`), copyright notice ("© 2026 Q-SITE. All rights reserved."), and "Skeleton Preview Edition" badge.
  - Assemble in `src/app/layout.tsx` with ambient background glow orbs.
- **Test Cases**:
  - *Happy Path*: Navbar stays sticky on scroll; clicking route links changes page; "Register [Preview]" jumps to anchor.
  - *Edge Case*: Mobile drawer open -> resize window to desktop (`>768px`) -> drawer auto-closes.
  - *Error Case*: Broken route hrefs -> caught and verified against App Router routes.
- **Acceptance Criteria**:
  - Sticky navbar visible on all routes.
  - Responsive mobile drawer toggles without layout shift.
  - Footer renders cleanly at the bottom.

---

### T5: Home Page Wireframe (`/`)
- **Duration**: ~25 min
- **Dependencies**: [T4]
- **Files**:
  - `src/components/home/HeroWireframe.tsx`
  - `src/components/home/MetricsWireframe.tsx`
  - `src/components/home/IntroWireframe.tsx`
  - `src/components/home/RegistrationPreviewCard.tsx`
  - `src/components/home/PosterSubmissionPreviewCard.tsx`
  - `src/app/page.tsx`
- **Caveman Action**:
  - Build `HeroWireframe`: Mission tag ("Canada's Premier Student Quantum Conference"), bold title, and two in-site preview CTA buttons ("Register [Preview]" linking to `#registration-preview` and "Submit Poster [Preview]" linking to `#poster-preview`).
  - Build `MetricsWireframe`: 4 glass cards displaying past impact metrics skeletons (Attendees, Speakers, Partner Universities, Quantum Sponsors).
  - Build `IntroWireframe`: Q-SITE and Quantum Coalition introductory overview skeleton block with quantum topics pill badges (Computing, Cryptography, Sensing, Engineering).
  - Build `RegistrationPreviewCard` (`id="registration-preview"`): In-site ticket tier skeleton preview (Student Pass, Academic Pass, General Attendee) showing what tiers will look like. Zero external links.
  - Build `PosterSubmissionPreviewCard` (`id="poster-preview"`): In-site abstract submission layout preview showing guidelines block, key topic areas, and preview submission deadline box. Zero external forms.
- **Test Cases**:
  - *Happy Path*: Home page renders Hero, Metrics, Intro, Registration Preview, and Poster Preview sections in order.
  - *Edge Case*: Clicking Hero CTAs smoothly scrolls down to `#registration-preview` and `#poster-preview`.
  - *Error Case*: Mobile rendering -> multi-column grids stack cleanly to 1 column without horizontal overflow.
- **Acceptance Criteria**:
  - `/` route presents complete conference overview wireframe.
  - All interactive triggers stay 100% internal within the page.

---

### T6: Schedule Page Wireframe (`/schedule`)
- **Duration**: ~25 min
- **Dependencies**: [T4]
- **Files**:
  - `src/components/schedule/ScheduleWireframe.tsx`
  - `src/app/schedule/page.tsx`
- **Caveman Action**:
  - Build `ScheduleWireframe`: In-site chronological agenda skeleton.
  - Day 1 / Day 2 tab switcher using local React state.
  - Time slots for Keynote Talks, Breakout Panels, Poster Exhibition, and Networking.
  - Generic session cards featuring track badges (`Quantum Algorithms`, `Hardware`, `Cryptography`), title wireframes, speaker avatar placeholder boxes, and time slot indicators.
  - No hardcoded dates or times; all labels read from `site.config.ts`.
- **Test Cases**:
  - *Happy Path*: Switching Day 1 and Day 2 tabs toggles session lists; cards render with badges and time slots.
  - *Edge Case*: Keyboard navigation on tabs (Arrow keys / Enter) switches active tab smoothly.
  - *Error Case*: Empty tab state gracefully displays "Detailed agenda arriving soon" wireframe message.
- **Acceptance Criteria**:
  - `/schedule` displays responsive day switcher and styled chronological cards matching dark space theme.

---

### T7: Sponsors Page Wireframe (`/sponsors`)
- **Duration**: ~25 min
- **Dependencies**: [T4]
- **Files**:
  - `src/components/sponsors/SponsorsWireframe.tsx`
  - `src/app/sponsors/page.tsx`
- **Caveman Action**:
  - Build `SponsorsWireframe`: Partner outreach section with Platinum, Gold, and Silver tier wireframe cards.
  - Tier cards detail sample perks (Keynote introduction, booth space, resume book access, poster awards) and an in-site "Prospectus Package Preview" card (showing what prospectus includes, zero downloads or external PDFs).
  - Confirmed sponsor skeleton grid: Responsive grid of dashed logo placeholders (`[ Sponsor Logo ]`) with hover glow effects.
- **Test Cases**:
  - *Happy Path*: All three tiers and perks render; in-site prospectus preview card displays; logo skeleton grid renders.
  - *Edge Case*: Mobile layout stacks tier cards into a single column cleanly.
  - *Error Case*: Long text strings in tier perks do not overflow card boundaries.
- **Acceptance Criteria**:
  - `/sponsors` displays tiers, in-site prospectus preview, and skeleton logo grid.
  - Zero external links or PDF downloads.

---

### T8: Support Page Wireframe (`/support`)
- **Duration**: ~25 min
- **Dependencies**: [T4]
- **Files**:
  - `src/components/support/SupportFaqWireframe.tsx`
  - `src/components/support/ContactFormWireframe.tsx`
  - `src/app/support/page.tsx`
- **Caveman Action**:
  - Build `SupportFaqWireframe`: Logistics FAQ accordion skeleton (Travel & Venue, Lodging, Poster Guidelines, Code of Conduct). Expand/collapse with rotating chevron icon.
  - Build `ContactFormWireframe`: Static organizing team contact channels card (inert email / discord handles) and a purely static wireframe contact form with disabled/read-only inputs (Name, Email, Inquiry Type, Message) and a static "Send Message [Preview Only]" wireframe button.
- **Test Cases**:
  - *Happy Path*: FAQ items expand and collapse on click; contact form inputs render in disabled/read-only preview state.
  - *Edge Case*: Multiple FAQ items open simultaneously without layout shift; accessible `aria-expanded` attributes.
  - *Error Case*: Clicking static button does not submit or cause page reload.
- **Acceptance Criteria**:
  - `/support` renders functional FAQ accordion and purely static wireframe contact form.

---

### T9: Full Build, Lint & Visual Sanity Verification
- **Duration**: ~20 min
- **Dependencies**: [T5, T6, T7, T8]
- **Files**: Project-wide
- **Caveman Action**:
  - Run `npm run lint`. Ensure zero ESLint errors or unused imports.
  - Run `npm run build`. Ensure zero TypeScript compilation errors and static page generation succeeds for all 4 routes (`/`, `/schedule`, `/sponsors`, `/support`).
  - Test responsive layout across 320px, 768px, 1024px, 1440px.
  - Verify zero external links, zero modal popups, zero forms leaving the site.
- **Test Cases**:
  - *Happy Path*: `npm run build` outputs successful static generation for all routes.
  - *Edge Case*: Production bundle size within standard Next.js thresholds.
  - *Error Case*: Any type errors or lint warnings block task completion until resolved.
- **Acceptance Criteria**:
  - Clean build output (`exit 0`).
  - All 4 pages render without runtime exceptions or missing assets.

---

### T10: Git Worktree Cleanup Bookend
- **Duration**: ~5 min
- **Dependencies**: [T9]
- **Files**: Git repository
- **Caveman Action**:
  - Inside worktree: `git add . && git commit -m "feat: complete Q-SITE conference website skeleton setup"`.
  - Return to root project: `cd /home/bobjoe/IdeaProjects/QSITE-Sample-Website`.
  - Remove worktree: `git worktree remove ../worktree-conference-setup`.
  - Verify branch exists: `git branch` displays `feature/conference-setup`.
- **Test Cases**:
  - *Happy Path*: Worktree removed cleanly; feature branch committed.
  - *Edge Case*: Stale locks on worktree -> cleanly unlocked and removed.
  - *Error Case*: Uncommitted changes prevent removal -> verified all files committed prior.
- **Acceptance Criteria**:
  - `git worktree list` shows only main repository.
  - Branch `feature/conference-setup` contains complete, tested implementation.

---

## 5. Test & Verification Strategy

- **Static Analysis**:
  - `npm run lint` for code style and unused imports.
  - `npx tsc --noEmit` for full TypeScript type safety.
- **Build Verification**:
  - `npm run build` to verify Next.js App Router route builds and static generation.
- **Runtime & Visual Checks**:
  - Check dark space aesthetic (`#030712`, `#020617`), cyan (`#22d3ee`), and purple (`#a855f7`) ambient glow orbs.
  - Verify glassmorphic cards (`border-white/10`) and hover states.
  - Verify all CTAs anchor internally or display in-site previews (no modals, no external URLs).
  - Test responsive mobile navigation drawer on narrow viewport.

---

## 6. Risk Analysis & Mitigations

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| External links or forms accidentally introduced | High | Strictly enforce in-site anchors (`#registration-preview`, `#poster-preview`) and disabled wireframe inputs across all components. |
| Hardcoded dates creeping into templates | Medium | Strict code review against `site.config.ts`; wireframes use generic fallback tokens like `Dates: TBA` and `Session 1`. |
| Dirty worktree or lock contention during cleanup | Low | T10 enforces full commit and directory exit before calling `git worktree remove`. |
| Tailwind styling bleed / missing dark background on sub-routes | Low | Set root background in `globals.css` and `layout.tsx` so all current and future sub-routes inherit space aesthetic. |

---

## 7. Post-Change Documentation Updates

Upon completion of tasks:
- Create `README.md` documenting:
  - Architecture overview (Next.js App Router, Tailwind CSS, Lucide React).
  - Route map (`/`, `/schedule`, `/sponsors`, `/support`).
  - Customization instructions via `src/config/site.config.ts`.
  - Design tokens and glassmorphism CSS class references.
- Create or update `AGENTS.md` §6 with project structure and component conventions.
