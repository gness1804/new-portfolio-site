# Portfolio Site — Implementation Plan

**Produced by:** Planner Agent
**Date:** 2026-03-27
**Status:** APPROVED by human user (2026-03-27) — incorporating feedback below

---

## 1. Executive Summary

This plan covers the end-to-end construction of Graham Nessler's professional portfolio site using Astro 5 on Cloudflare Pages. The site comprises four pages (Home, Portfolio, Work Accomplishments, History) built from pre-written markdown content in `docs/site-content/`, styled with Tailwind CSS, and tested with Vitest, Playwright, and axe-core. Two developer agents will build competing implementations independently, a judge will select the winner, and subsequent review and QA passes will bring the site to production quality before deployment to grahamnessler.com. The entire workflow includes two human checkpoints: plan approval (now) and post-review-agent approval before QA.

---

## 2. Technology Stack

| Technology | Role | Justification |
|---|---|---|
| Astro 5 | Static site framework | Zero-JS by default, Content Collections for markdown ingestion, excellent Lighthouse scores out of the box |
| Tailwind CSS v3 | Styling | Utility-first classes keep components self-contained; no separate CSS files to manage; responsive modifiers reduce boilerplate |
| TypeScript | Type safety | Catches shape mismatches in Content Collection schemas before runtime |
| Vitest | Unit testing | First-class Astro integration; fast watch mode |
| Playwright | E2E testing | Cross-browser, mobile viewport emulation built in; required for hamburger menu and navigation flow tests |
| axe-core (via `@axe-core/playwright`) | Accessibility auditing | Automated WCAG AA checks embedded in E2E suite |
| Cloudflare Pages | Hosting | Free tier, unlimited bandwidth, global CDN, native Astro adapter |
| GoDaddy CNAME | Custom domain | Existing ownership; one DNS record points to Cloudflare Pages |

---

## 3. Content and Design Sources

### Content files (authoritative — use verbatim)

| File | Feeds |
|---|---|
| `docs/site-content/hero.md` | Home page: hero intro text + bottom career-transition section |
| `docs/site-content/portfolio.md` | Portfolio page: intro line, four project tiles, bottom open-source/certifications section |
| `docs/site-content/work-accomplishments.md` | Work Accomplishments page: all category sections + Impact at Scale |
| `docs/site-content/history.md` | History page: all body copy + book link |

### Asset files

| File | Used on |
|---|---|
| `docs/site-content/hero.jpg` | **Hero page wireframe** (hand-drawn, portrait orientation — NOT a usable image) |
| `docs/site-content/assets/fac-screenshot.png` | Portfolio: Friendly Advice Columnist tile |
| `docs/site-content/assets/receipt-ranger-screenshot.png` | Portfolio: Receipt Ranger tile |
| `docs/site-content/assets/recipe-chatbot-screenshot.png` | Portfolio: Recipe Chatbot tile |
| `docs/site-content/assets/cfs-screenshot.png` | Portfolio: Cursor File System tile |
| `docs/site-content/assets/island-wide-struggle-cover.png` | History page: book cover |

### Wireframes (layout reference)

| File | Describes |
|---|---|
| `docs/site-content/portfolio.JPG` | Portfolio: 2x2 grid (Projects 1–4), right sidebar (other contributions/certifications), cat logo bottom-left |
| `docs/site-content/history.JPG` | History: nav at top, book cover image centered mid-page with "My book cover" label, "other hist interests" text section below, cat logo bottom-left |
| `docs/site-content/work-accomplishments.JPG` | Work Accomplishments: nav at top, two image/stat blocks side by side (Pic of Acct / Pic of Jessie), text content columns, cat logo bottom-left |

### Wireframe interpretation notes for developers

- **Portfolio page:** 2x2 grid tile order (most to least impressive): top-left = Friendly Advice Columnist, top-right = Receipt Ranger, bottom-left = Recipe Chatbot, bottom-right = Cursor File System. The right sidebar/far-right column holds the "Other Projects/Contributions" list and skills content.
- **History page:** Book cover image is center-aligned, roughly mid-page, with the Amazon link. Text flows above and below it (intro text above, "Why study this?" body below, broader interests at the bottom).
- **Work Accomplishments page:** Text-based hierarchical outline format. The wireframe lines represent text content, NOT images. Render as clean sectioned text with headings and bullet lists (similar to zaquariah.dev/about).
- **All pages:** Cat head logo (see detailed spec below) in the **top-left corner** as the site logo. Consistent top navigation bar on every page.

---

## 4. Detailed Implementation Steps

### Phase 1: Setup

**Step 1.1 — Initialize Astro project**
Run `npm create astro@latest` inside a Git worktree dedicated to each developer agent. Configure TypeScript strict mode, install Tailwind CSS via `npx astro add tailwind`, install `@astrojs/cloudflare` adapter.
- Complexity: S
- Dependencies: None
- Success criteria: `npm run dev` starts without errors; `npm run build` produces a `dist/` folder; TypeScript compiles cleanly
- Estimated effort: 0.5 half-days

**Step 1.2 — Configure Astro Content Collections**
Create `src/content/config.ts` defining four collections: `hero`, `portfolio`, `work-accomplishments`, `history`. Each collection schema must mirror the structure of the corresponding markdown file in `docs/site-content/`. Copy (or symlink) the markdown files into `src/content/`. Validate schemas compile with no TypeScript errors.
- Complexity: S
- Dependencies: Step 1.1
- Success criteria: `astro check` passes; `getCollection()` calls return typed objects with expected fields
- Estimated effort: 0.5 half-days

**Step 1.3 — Configure linting, formatting, and testing tooling**
Install and configure ESLint (with `eslint-plugin-astro` and `eslint-plugin-jsx-a11y`), Prettier, Vitest (`npm install -D vitest @testing-library/jest-dom`), and Playwright (`npx playwright install`). Add `axe-core` and `@axe-core/playwright`. Add `npm run lint`, `npm run test`, `npm run test:e2e`, and `npm run test:a11y` scripts to `package.json`.
- Complexity: S
- Dependencies: Step 1.1
- Success criteria: All tool commands run without errors on an empty test file; `npm run lint` reports zero issues on fresh scaffold
- Estimated effort: 0.5 half-days

**Step 1.4 — Set up Git worktrees (orchestrator task, not developer task)**
The main/orchestrator agent creates two Git worktrees from the current branch: `worktree-dev-a` and `worktree-dev-b`. Each developer agent operates exclusively within its own worktree. Neither agent is ever given the path to the other's worktree.
- Complexity: S
- Dependencies: Step 1.1
- Success criteria: Two independent worktrees exist; changes in one do not appear in the other
- Estimated effort: 0.25 half-days (orchestrator only)

---

### Phase 2: Core Components

**Step 2.1 — Define global design tokens and Tailwind config**
Extend `tailwind.config.mjs` with the project's color palette:
- `brand-black`: `#0a0a0a`
- `brand-gray`: `#6b7280` (Tailwind `gray-500` as base)
- `brand-silver`: `#d1d5db` (Tailwind `gray-300`)
- `brand-red`: `#dc2626` (Tailwind `red-600`)

Define font stack (system sans-serif as body, optionally a Google Font heading for visual distinction). Define breakpoints: `sm` = 375px, `md` = 768px, `lg` = 1280px, `xl` = 1920px.
- Complexity: S
- Dependencies: Step 1.1
- Success criteria: Color tokens available as Tailwind classes; no raw hex values hardcoded in component files
- Estimated effort: 0.25 half-days

**Step 2.2 — Build the Navigation component**
Create `src/components/Nav.astro`. Desktop: horizontal tab bar with four links (Home, Portfolio, Work Accomplishments, History). Active tab is visually distinguished (e.g., red underline or bold). Mobile (< 768px): hamburger button (3-line icon) reveals a full-width dropdown menu. Hamburger state is managed with a small inline `<script>` (no framework JS). All nav links have visible focus indicators. ARIA: `role="navigation"`, `aria-label="Main navigation"`, hamburger button has `aria-expanded` and `aria-controls` attributes toggled on open/close.
- Complexity: M
- Dependencies: Step 2.1
- Success criteria: Desktop tabs render and link correctly; mobile hamburger opens/closes; active state matches current URL; keyboard Tab + Enter navigation works; axe-core reports no violations
- Estimated effort: 1 half-day

**Step 2.3 — Build the cat logo component**
Create `src/components/CatLogo.astro`. Simple SVG cat head with: two triangular ears on top, six whiskers (3 per side), three equal-height horizontal stripes (silver top, black middle, red bottom), thin outline around entire shape. Positioned **top-left** as site logo in the Nav/header area. Links to homepage when clicked. `alt="Graham Nessler - Home"` since it serves as the site logo.
- Complexity: M
- Dependencies: Step 2.1
- Success criteria: Logo visible in top-left as part of header/nav on all four pages; SVG renders correctly with ears, whiskers, and 3 stripes; links to homepage; has alt text
- Estimated effort: 0.5 half-days

**Step 2.4 — Build the base Layout component**
Create `src/layouts/BaseLayout.astro`. Accepts `title` and `description` props. Renders: `<html lang="en">`, `<head>` with meta tags (charset, viewport, OG tags, description), `<Nav />`, a `<main>` slot, the `<CatLogo />`, and a minimal `<footer>`. Apply global Tailwind base styles (`body` background, font, text color). All page-level components will use this layout.
- Complexity: S
- Dependencies: Steps 2.2, 2.3
- Success criteria: Layout wraps content correctly; `<title>` updates per page; HTML validates; no layout shift at any breakpoint
- Estimated effort: 0.5 half-days

**Step 2.5 — Build the ProjectTile component**
Create `src/components/ProjectTile.astro`. Props: `title` (string), `screenshot` (image path), `githubUrl` (string), `description` (string). Renders: `<img>` with descriptive `alt` text, project title as `<h3>`, description paragraph, GitHub link (opens in new tab with `rel="noopener noreferrer"`, has visible focus ring). Must be keyboard-accessible. Screenshot uses Astro's `<Image />` component for optimization.
- Complexity: S
- Dependencies: Step 2.4
- Success criteria: Component renders all four projects without error; images have alt text; GitHub links work; component is responsive; keyboard accessible
- Estimated effort: 0.5 half-days

---

### Phase 3: Pages

**Step 3.1 — Home page (`src/pages/index.astro`)**
Implement using `BaseLayout`. Three sections:

1. **Hero section:** Render the intro text paragraph from `hero.md` exactly as written, including the bulleted list of accomplishments with bold labels. Note: `hero.jpg` is a wireframe, NOT a usable image — do not render it on the page.
2. **Portfolio preview tiles:** Three `<ProjectTile />` components (the top 3 projects: Friendly Advice Columnist, Receipt Ranger, Recipe Chatbot) arranged in a horizontal row. These are preview tiles — show screenshot + title only, linking to the Portfolio page. Desktop: 3 tiles in a row. Tablet/smaller: 2 tiles per row. Mobile: single column, vertical stack.
3. **Career transition section:** Render the bottom text from `hero.md` ("My path to tech was unconventional…") including the bulleted list and the inline link to the academic book.
- Complexity: M
- Dependencies: Steps 2.4, 2.5
- Success criteria: All text content matches `hero.md` verbatim; 3 preview tiles display correctly (3→2→1 column at breakpoints); book link is correct Amazon URL; hero.jpg is NOT rendered
- Estimated effort: 1 half-day

**Step 3.2 — Portfolio page (`src/pages/portfolio.astro`)**
Implement using `BaseLayout`. Three sections:

1. **Intro line:** "Here's what I've been building." (from `portfolio.md`)
2. **Project grid:** 2×2 CSS Grid using `<ProjectTile />` for all four projects. Each tile includes: screenshot (from `docs/site-content/assets/`), project title as `<h2>`, description paragraph, GitHub link. Order (most to least impressive): top-left = Friendly Advice Columnist, top-right = Receipt Ranger, bottom-left = Recipe Chatbot, bottom-right = Cursor File System.
3. **Right sidebar (desktop) / bottom section (mobile):** Render "Beyond these projects…" text, open source contributions list (River City Resources, CHARLOTTE, Taco Price Index) with links, AWS certification, and core technical skills list. On desktop, this occupies a right sidebar column alongside the grid. On mobile, it stacks below the grid.

Layout: desktop = 3-column grid (2 wide for project tiles, 1 for sidebar). Mobile = single column.
- Complexity: M
- Dependencies: Steps 2.4, 2.5
- Success criteria: All four projects render with correct content from `portfolio.md`; sidebar content matches `portfolio.md` exactly; links resolve; layout correct at all breakpoints
- Estimated effort: 1 half-day

**Step 3.3 — Work Accomplishments page (`src/pages/work-accomplishments.astro`)**
Implement using `BaseLayout`. Content comes verbatim from `work-accomplishments.md`. Structure:

1. **Category sections** (render as `<section>` with `<h2>` headings): Security Leadership, Infrastructure Modernization, Cost Optimization & Efficiency, Access & Identity Management, Automation & Tooling, Cloud Architecture, Database Infrastructure. Each bullet point renders as `<li>` with bold text preserved. Layout should be a clean, hierarchical text outline — similar to the about page at zaquariah.dev. No image blocks; the wireframe lines represent text, not images.
2. **Impact at Scale section:** Render as a visually distinct `<section>` with the full paragraph and technical stack list from `work-accomplishments.md`.

Layout: single-column text hierarchy on all screen sizes; generous spacing between sections for readability.
- Complexity: M
- Dependencies: Step 2.4
- Success criteria: All seven category sections present with correct bullets; Impact at Scale section renders; bold text preserved; page structure matches wireframe
- Estimated effort: 1 half-day

**Step 3.4 — History page (`src/pages/history.astro`)**
Implement using `BaseLayout`. Content comes verbatim from `history.md`. Structure:

1. **Top text:** Intro paragraph about being a trained historian, including the linked book title, rendered exactly as written.
2. **Book cover image:** `<img>` of `Island-wide struggle cover.png`, center-aligned, wrapped in an `<a>` link to the Amazon URL. Alt text: "Cover of An Islandwide Struggle for Freedom by Graham Nessler, published by UNC Press 2016". Image width capped at ~300px on desktop.
3. **Body text:** Three paragraphs ("Why study a single revolution…", "The sugar in your coffee…", "This historical training…") rendered exactly as written.
4. **Broader interests:** Final line about Ancient Rome, U.S. Reconstruction, and mainland Latin American history.

Layout: single centered column with max-width ~700px for readability. Book cover centered.
- Complexity: S
- Dependencies: Step 2.4
- Success criteria: All text matches `history.md` verbatim; book cover image renders with correct alt text and links to correct Amazon URL; single-column layout centered; responsive
- Estimated effort: 0.5 half-days

---

### Phase 4: Polish

**Step 4.1 — Responsive refinement pass**
Review all four pages at three viewports: 375px (mobile), 768px (tablet), 1920px (desktop). Fix any overflow, text wrapping, image sizing, or grid issues. Confirm hamburger menu works at 375px. Confirm sidebar on Portfolio page collapses correctly on tablet and mobile.
- Complexity: S
- Dependencies: Steps 3.1–3.4
- Success criteria: No horizontal scroll at any breakpoint; all content readable and accessible; navigation functional at all sizes
- Estimated effort: 0.5 half-days

**Step 4.2 — Accessibility audit and remediation**
Run `axe-core` against all four pages via Playwright. Fix any reported violations. Manually verify: Tab order through navigation, through each page's interactive elements; Enter activates links; hamburger button announces state change to screen readers; all images have meaningful alt text; color contrast meets 4.5:1 for all body text and interactive elements (use browser dev tools or a contrast checker).
- Complexity: M
- Dependencies: Steps 3.1–3.4
- Success criteria: `axe-core` reports zero violations on all four pages; manual keyboard navigation test passes; no contrast failures
- Estimated effort: 1 half-day

**Step 4.3 — Performance optimization**
Ensure all images use Astro's `<Image />` component with appropriate `width`, `height`, and `loading="lazy"` attributes (except hero image which should load eagerly). Remove any unused Tailwind classes via PurgeCSS (built into Tailwind v3). Run Lighthouse via `npm run build && npx serve dist` and check scores. Target: Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 90.
- Complexity: S
- Dependencies: Steps 3.1–3.4, 4.1
- Success criteria: Lighthouse scores meet targets; no console errors or warnings in browser
- Estimated effort: 0.5 half-days

**Step 4.4 — Final content verification pass**
Do a side-by-side diff of rendered page text against the four source markdown files in `docs/site-content/`. Confirm every sentence, link URL, and list item matches exactly. Confirm all asset images render. Document any deviations (with justification) before handing off.
- Complexity: S
- Dependencies: Steps 3.1–3.4
- Success criteria: Zero unapproved deviations from content files; zero broken images
- Estimated effort: 0.25 half-days

---

### Phase 5: Testing

**Step 5.1 — Unit tests (Vitest)**
Write unit tests for any utility functions (e.g., slug generation, markdown parsing helpers, any data transformation). If no standalone utilities exist, write component snapshot tests for `ProjectTile.astro` and `CatLogo.astro` using `@testing-library/astro` or equivalent. Target 80%+ coverage of testable logic.
- Complexity: S
- Dependencies: Steps 2.1–2.5
- Success criteria: All unit tests pass (`npm run test`); coverage report shows ≥ 80% on utility modules
- Estimated effort: 0.5 half-days

**Step 5.2 — E2E tests (Playwright)**
Write the following Playwright tests (all must pass):

1. `home.spec.ts`: Page loads at `/`; hero text is visible; portfolio preview tiles render; book link has correct href; navigation links present
2. `portfolio.spec.ts`: Page loads at `/portfolio`; all four project tiles render with correct titles; GitHub links have correct href; sidebar content visible
3. `work-accomplishments.spec.ts`: Page loads at `/work-accomplishments`; all seven section headings present; Impact at Scale section visible
4. `history.spec.ts`: Page loads at `/history`; book cover image renders; Amazon link correct; all four body sections present
5. `navigation.spec.ts`: Clicking each nav tab navigates to correct page; active tab is highlighted; back button works
6. `mobile.spec.ts`: At 375px viewport, hamburger button is visible; clicking it opens menu; clicking a menu link navigates and closes menu
7. `responsive.spec.ts`: At 768px, layout switches to tablet mode; at 375px, single-column layout; no horizontal overflow at any tested width

- Complexity: M
- Dependencies: Steps 3.1–3.4, 4.1
- Success criteria: All 7 test files pass with zero failures in Chromium, Firefox, and Mobile Chrome
- Estimated effort: 1 half-day

**Step 5.3 — Accessibility E2E tests (axe-core + Playwright)**
For each of the four pages, run `@axe-core/playwright` and assert zero violations. Additional manual checks to automate where possible: confirm all `<img>` tags have `alt`; confirm `<nav>` has `aria-label`; confirm hamburger button has `aria-expanded` toggling; confirm focus is visible on all interactive elements.
- Complexity: S
- Dependencies: Step 5.2
- Success criteria: Zero axe violations reported on all pages; no accessibility-related lint warnings
- Estimated effort: 0.5 half-days

---

### Phase 6: Deployment

**Step 6.1 — Cloudflare Pages project setup**
In Cloudflare dashboard: create new Pages project connected to the GitHub repo. Set build command to `npm run build`, output directory to `dist`. Set environment variable `NODE_VERSION=20`. Confirm first build succeeds and preview URL loads the site correctly.
- Complexity: S
- Dependencies: All Phase 5 steps
- Success criteria: Cloudflare Pages build completes successfully; preview URL renders all four pages
- Estimated effort: 0.25 half-days

**Step 6.2 — Custom domain DNS configuration**
In GoDaddy DNS settings: add a CNAME record pointing `www.grahamnessler.com` to the Cloudflare Pages project's `*.pages.dev` URL. In Cloudflare Pages: add `grahamnessler.com` and `www.grahamnessler.com` as custom domains and enable HTTPS (automatic via Cloudflare). Verify DNS propagation.
- Complexity: S
- Dependencies: Step 6.1
- Success criteria: `https://www.grahamnessler.com` and `https://grahamnessler.com` both load the site; HTTPS certificate active
- Estimated effort: 0.25 half-days

**Step 6.3 — Production smoke test**
After DNS propagates, manually test all four pages on production URL at desktop and mobile. Re-run Lighthouse against production URL. Confirm no differences from local build.
- Complexity: S
- Dependencies: Step 6.2
- Success criteria: All pages load; Lighthouse scores match local; no console errors on production
- Estimated effort: 0.25 half-days

---

## 5. Testing Approach

### Unit Tests (Vitest)
- **Scope:** Utility functions, data-transformation helpers, Content Collection schema validation
- **Coverage target:** 80% on testable modules
- **Framework:** Vitest with `@testing-library/jest-dom` matchers
- **What is NOT unit tested:** Astro page components (tested via E2E), static HTML output (too brittle)

### Component Tests
- `ProjectTile.astro`: Renders title, screenshot, description, GitHub link; link has `target="_blank"` and `rel="noopener noreferrer"`
- `Nav.astro`: Correct links; active state for each page; hamburger toggles aria attributes
- `CatLogo.astro`: Renders SVG; has `aria-hidden="true"`

### E2E Tests (Playwright)
| Test file | Coverage |
|---|---|
| `home.spec.ts` | Home page load, hero content, preview tiles, career section, links |
| `portfolio.spec.ts` | All 4 project tiles, sidebar content, GitHub links |
| `work-accomplishments.spec.ts` | All 7 category headings, bullet content, Impact at Scale |
| `history.spec.ts` | Book cover, Amazon link, all body sections |
| `navigation.spec.ts` | Tab navigation between all pages, active state |
| `mobile.spec.ts` | Hamburger open/close at 375px, menu link navigation |
| `responsive.spec.ts` | Layout at 375px, 768px, 1280px; no overflow |

Run across: Chromium, Firefox, Mobile Chrome (Playwright projects).

### Accessibility Tests
- Tool: `@axe-core/playwright` on all four pages
- Manual: Tab order, hamburger `aria-expanded`, all images have `alt`, heading hierarchy (`h1` > `h2` > `h3`)
- Contrast: Verify black text on silver/white backgrounds, red accent on dark backgrounds all meet 4.5:1
- WCAG AA audit before every handoff to next agent

---

## 6. Deployment Strategy

### Build
- Command: `npm run build`
- Output directory: `dist/`
- Astro adapter: `@astrojs/cloudflare`
- Node version: 20

### Cloudflare Pages Setup
1. Connect GitHub repo to Cloudflare Pages (automatic deploys on merge to `main`)
2. Build settings: command = `npm run build`, output = `dist/`
3. Environment: `NODE_VERSION=20`
4. Preview deploys enabled for PRs

### Custom Domain
1. In GoDaddy: add CNAME record — `www` → `<project>.pages.dev`
2. For apex domain (`grahamnessler.com`): add Cloudflare Pages custom domain for apex; Cloudflare handles HTTPS automatically
3. In Cloudflare Pages dashboard: add both `grahamnessler.com` and `www.grahamnessler.com` as custom domains
4. SSL/TLS mode: Full (strict)

### CI/CD
- Every push to `main` triggers an automatic Cloudflare Pages build and deploy
- E2E tests run in GitHub Actions (or Cloudflare Pages test hooks) before production deploy
- Preview URLs generated automatically for feature branches

---

## 7. Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| Cat logo SVG drawing is ambiguous — developer agent produces a logo that doesn't match Graham's intent | Medium | High | Ask Graham to provide a reference image or more detailed description of the cat logo before development starts. If none provided, developer notes this as a "best interpretation" and flags for human review. |
| Asset filenames contain spaces (e.g., "Receipt Ranger Screenshot.png") causing import errors in Astro | Medium | Medium | Developer agents must URL-encode or rename assets at build time; plan explicitly calls out this risk. Recommend renaming assets to kebab-case before handing off to developers. |
| Wireframe tile order (1/4 top row, 3/2 bottom row) may be a misread — original hand-drawn wireframe is ambiguous | Low | Medium | Developers must open the wireframe image and interpret; if ambiguous, escalate to Graham before building the grid. |
| Two Git worktrees require careful orchestration — accidental cross-contamination of work | High | Low | Orchestrator strictly controls worktree paths; developer agents are given their own worktree path only. |
| DNS propagation delay for grahamnessler.com may extend deployment phase | Low | Medium | Begin DNS changes early; test with Cloudflare preview URL in the interim. GoDaddy propagation typically takes 1–24 hours. |
| Work Accomplishments wireframe shows two image blocks but no specific image assets exist for this page | Medium | High | Use styled stat callout cards (large-print numbers) instead of photographs. Developer must note this interpretation and flag for Graham's approval. |
| Lighthouse score < 90 due to large screenshot images | Medium | Medium | Enforce Astro `<Image />` component with WebP format for all project screenshots; set explicit width/height to prevent CLS. |
| axe-core violations due to color contrast in black/gray/red scheme | Medium | Medium | Check contrast ratios early in Phase 4; red text on white must be ≥ 4.5:1. Use `#b91c1c` (red-700) or darker if needed. |

---

## 8. Token Budget Estimate

| Phase | Description | Estimated Tokens (per developer agent) |
|---|---|---|
| Phase 1 | Setup (project init, Content Collections, tooling) | 40,000 |
| Phase 2 | Core components (Nav, CatLogo, Layout, ProjectTile) | 80,000 |
| Phase 3 | Four pages (Home, Portfolio, Work Accomplishments, History) | 150,000 |
| Phase 4 | Polish (responsive, a11y, performance, content verification) | 60,000 |
| Phase 5 | Testing (unit, E2E, accessibility) | 80,000 |
| Phase 6 | Deployment | 20,000 |
| **Subtotal per developer** | | **430,000** |
| **Two developer agents combined** | | **860,000** |
| Judge agent | Evaluation of both implementations | 60,000 |
| Developer agent second pass | Incorporating judge feedback | 80,000 |
| Review agent | Code review pass | 50,000 |
| QA agent | Testing and bug finding | 80,000 |
| Developer agent third pass | QA fixes | 60,000 |
| Orchestrator/Planner overhead | Planning, coordination, handoffs | 50,000 |
| **Contingency (15%)** | | **171,000** |
| **Total estimated** | | **~1,411,000** |

> Note: These are estimates based on comparable Astro static site builds. The main agent should monitor per-agent token usage and alert Graham at the thresholds defined in CLAUDE.md (50%, 75%, 80%, 90%, 95% of daily budget).

---

## Human Feedback (Resolved)

All clarification items have been resolved:
1. **Cat logo:** SVG cat head with 2 triangular ears, 6 whiskers (3 per side), 3 horizontal stripes (silver/black/red), thin outline. Top-left as site logo.
2. **Asset filenames:** Renamed to kebab-case (done).
3. **Tile order:** Most to least impressive: FAC → Receipt Ranger → Recipe Chatbot → CFS.
4. **Work Accomplishments:** Text-based hierarchical outline, no image blocks.
5. **hero.jpg:** Is a wireframe, not a usable image. Hero page shows: intro text → 3 preview tiles (horizontal, responsive) → career transition text.
6. **Nav:** Home | Portfolio | Work Accomplishments | History (no Cats/Gaming pages).

---

*Plan APPROVED. Development proceeding.*
