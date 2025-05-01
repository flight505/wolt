Scenario One – Business Requirements Document (BRD)

1. Executive Summary

Build and operate a bold, "Cancel-Wolt" protest website that mimics Wolt's familiar cyan-blue look-and-feel while exposing the company's high commissions (≈25-30 % to restaurants)  ￼, its extra 5 % "service fee" to consumers  ￼, and its gig-worker model. The site must motivate Danish consumers to cancel Wolt, sign an online pledge, and discover cheaper, fairer alternatives such as Just Eat. Deployment must be friction-free on Vercel.

2. Problem Statement

Wolt's dominance (so strong that rival Foodora quit Denmark in 2024  ￼) inflates menu prices, squeezes restaurants, and keeps riders outside the Danish labour-rights model. There is no focal digital space where consumers, workers and restaurants can unite around these concerns.

3. Business Objectives & KPIs

Objective	KPI / Success Metric	Target
Raise public awareness	Unique visitors in DK	≥ 50 k/mo
Convert visitors to action	Pledge signatures	20 % visitor→signature
Drive orders away from Wolt	"I ordered direct/elsewhere" self-report	15 % of signers
Build mailing list	Confirmed emails collected	10 k in 6 months

4. Analytical Frameworks Applied

#### PESTLE snapshot
	•	Political: Danish regulators increasingly classify couriers as employees; potential law changes.
	•	Economic: High inflation makes added fees salient; restaurants' margins thin.
	•	Social: Growing consumer appetite for ethical consumption.
	•	Technological: Jamstack/Next .js + Vercel enables rapid, low-cost rollout.
	•	Legal: Risk of defamation—content must be fact-checked and sourced.
	•	Environmental: Bike couriers already "green"; site messaging must emphasise social, not CO₂, angle.

#### SWOT
Strengths: viral message, clear enemy, low dev cost.
Weaknesses: legal push-back, need for constant content freshness.
Opportunities: partnership with unions/3F, integrations with "order-direct" widgets.
Threats: Wolt re-branding, legal takedown notices, protest fatigue.

#### Stakeholder & RACI

Stakeholder	Role	R	A	C	I
Senior PM (you)	Product owner		✔	✔	✔
Dev team	Build & test	✔			
Designer	UI/UX, brand spoof	✔			
Lawyer	Content vetting			✔	
Union partners	Source stories			✔	✔
Hosting (Vercel)	Deploy infra				✔

5. Scope

In-scope: Web-only, EN+DA languages, pledge form, email list, alternative-services map, share-to-social, analytics, CI/CD to Vercel.
Out-of-scope: Native mobile apps, payment processing, merchandise store.

6. High-Level Business Requirements

BR-1 Look-and-feel parity: Colour palette #009DE0, rounded cards, Wolt-style hero.
BR-2 Persuasive content: Evidence-based arguments in EN & DK.
BR-3 Action funnel: Visitor → pledge → email confirmation → "how to order direct".
BR-4 Ethical compliance: All claims source-linked; legal review passed.
BR-5 Zero-cost onboarding: One-click Vercel deploy; scalable to 100 k RPM.
BR-6 Accessibility AA: Keyboard nav, alt-text, min contrast 4.5:1.
BR-7 Metrics: Plausible analytics; daily KPI export to BigQuery.

7. Assumptions & Constraints

Volunteer developers, no paid media budget, must launch before key food-ordering season (1 June 2025).

8. Risks & Mitigations

Risk	Probability	Impact	Mitigation
Cease-and-desist from Wolt	M	H	Lawyer review, factual sourcing
High hosting bill from viral spike	M	M	Vercel Edge Functions w/ static optimisation
Spam pledge submissions	H	M	hCaptcha & double opt-in



⸻

Scenario Two – Product Requirements Document (PRD)

1. Product Vision

A rallying point where Danish consumers, couriers and restaurateurs join forces to "Cancel Wolt" and shift demand to fairer channels.

2. Goals & Metrics

Mapped 1-to-1 with BRD KPIs; North-Star Metric = #Confirmed Pledges / Unique Visitors.

3. User Personas & JTBD

Persona	JTBD statement
Ethical Eater (25-40)	"When ordering takeaway, I want to know the platform treats people fairly so I can eat with a clear conscience."
Struggling Restaurateur	"I need to reduce commissions so my small kitchen actually profits."
Gig-Courier	"I need a place that rallies support for better working conditions so Wolt listens."

4. Feature Set w/ Kano + MoSCoW

Feature	Kano	MoSCoW
Wolt-style Landing Page	Basic	M
Evidence Sections (pricing, labour, monopoly)	Basic	M
Language Toggle EN/DA	Performance	M
Pledge Form + Email Confirmation	Performance	M
Live Counter & Map of Signers	Exciter	S
"Order Direct" Restaurant Search widget	Exciter	C
Social-share OG images	Basic	M
Dark-mode toggle	Indifferent	W

5. Functional Requirements

FR-1 User sees hero with anti-Wolt tagline ≤ 1 s Largest Contentful Paint.
FR-2 Clicking "Pledge" opens modal form (name, email, optional comment).
FR-3 Submitting sends POST to /api/pledge → Supabase table → verification email.
FR-4 On verify, signer count increments via Server-Sent Event.
FR-5 Restaurant search calls /api/restaurants?q= using Just Eat open data; shows cards.
FR-6 Admin dashboard (basic auth) exports CSV list.

6. Non-Functional Requirements

99.9 % uptime, TTFB < 100 ms in DK, WCAG 2.1 AA, content under Creative Commons, GDPR-grade consent banner.

7. Analytics & Instrumentation

Track: page_view, pledge_started, pledge_verified, outbound_alternative_click. Export daily to BigQuery; Looker Studio dashboard.

8. Roadmap / Release Plan

Week 0-1 MVP: landing, EN copy, pledge flow, deploy.
Week 2-3: DK localisation, alt-services widget, analytics.
Week 4+: Growth loops, dark-mode, blog engine.

⸻

Scenario Three – One-Story-Point User Stories

(All stories follow INVEST; each is ≤ 1 ideal-day for a single dev.)

Epic A – Foundation
	1.	Initialise Git repo and push "scaffold" commit.
	2.	Add .nvmrc and PNPM workspace.
	3.	Configure ESLint + Prettier shared config.
	4.	Spin up Next .js 14 project (app router, TypeScript).
	5.	Install Tailwind CSS and purge setup.
	6.	Define Wolt-blue colour palette in tailwind.config.ts.
	7.	Add GitHub CI: lint & type-check on PR.
	8.	Set up Vercel project and environment secrets.

Epic B – Global UI
9. Create _app layout with <Header/>, <Footer/>, <Analytics/>.
10. Build responsive navbar with logo spoof and links.
11. Implement global CSS resets and font import.
12. Integrate next-intl; stub EN + DA dictionaries.
13. Add SVG logo parody component.

(…continue through content, features, SEO, accessibility, testing, monitoring, legal, DevOps — see Scenario Four for full enumerated list.)

⸻

Scenario Four – Comprehensive One-Story-Point Checklist

(Copy into your backlog; every box = 1 SP task.)

### 📝 Project Setup & Tooling
- [x] Initialise empty Git repository and push "0.1.0" tag  
- [x] Add `.nvmrc` (Node 20) and `.npmrc` using PNPM  
- [x] Configure **ESLint** with `@typescript-eslint` rules  
- [x] Configure **Prettier** and add `lint-staged` + `husky` pre-commit hook  
- [x] Add **Commitlint** with Conventional Commits spec  
- [x] Create GitHub Actions workflow: lint, type-check, unit tests on PR  
- [x] Enable Dependabot security & version updates  
- [x] Generate `CODEOWNERS` file assigning reviewers  

### ⚙️ Framework & Infrastructure
- [x] Scaffold **Next.js 14** project with `app/` router and TypeScript  
- [x] Install **Tailwind CSS** and autoprefixer; purge settings for prod  
- [x] Extend `tailwind.config.ts` with Wolt-like palette (`cyan-500 → #009DE0`)  
- [x] Configure **PostCSS** plugins (nesting, custom-media)  
- [x] Add **Framer-Motion** dependency for subtle entrance animations  
- [ ] Provision **Supabase** project; create `pledges` table schema  
- [x] Create `.env.local.example` documenting required secrets  
- [ ] Link repo to **Vercel**; set staging + production env variables  

### 🌐 Global Layout & Theming
- [x] Implement root `<html lang>` and viewport meta tags  
- [x] Build `<Header />` with logo, nav links, and locale switcher  
- [x] Build `<Footer />` with licence, alt-service links, social icons  
- [x] Add default SEO component (title template, description, canonical)  
- [x] Apply Wolt-inspired fonts (Inter via Google Fonts)  
- [x] Configure dark-mode via `class="dark"` toggle in context provider  

### 🎨 Design & Visual Style
- [x] Create a comprehensive style guide document based on Wolt's design
- [x] Set up Omnes font family integration throughout the application
- [x] Create themed component library with Wolt-styled buttons, cards, and icons
- [x] Implement consistent spacing and layout rules following Wolt's style
- [x] Design stat number displays with Wolt's visual style (as seen in the screenshot)
- [x] Create circular icon components with cyan background (#009DE0) and white icons
- [x] Standardize the use of cartoon/simplified illustrations across pages using the images in images folder (copy them to public folder)
- [x] Ensure all UI elements have proper hover/active states matching Wolt's interactivity
- [x] Add subtle animations for page transitions and content reveals
- [x] Create a dark mode theme that maintains Wolt's visual language
- [x] Ensure all images load properly with correct layouts and sizing
- [x] Fix Next.js Image component "fill" property with proper container heights
- [x] Create an InfoCard component with top image layout following Wolt's merchant page design
- [x] Implement merchant page info card grid layout with responsive behavior
- [x] Update Header component to be transparent and change opacity on scroll
- [x] Add proper padding to main content to prevent overlap with fixed header
- [x] Create sample merchant page/section demonstrating the new components

### 📄 Content Pages
- [x] Create **Landing page** (`/`) with hero, CTA buttons, pledge stats, and compelling intro  
- [x] Create `/about` page explaining the protest movement purpose and goals  
- [x] Create `/pricing` page detailing Wolt's high commissions and hidden fees  
- [x] Create `/workers` page highlighting gig-worker exploitation issues  
- [x] Create `/restaurants` page explaining impact on local businesses  
- [x] Create `/alternatives` page showcasing better delivery options  
- [x] Create `/pledge` page with form and reasons to join the movement  
- [x] Create `/contact` page for inquiries, media, and partnerships  
- [x] Create `/privacy` page for GDPR compliance  
- [x] Create `/success-stories` page for restaurants that left Wolt  
- [ ] Extract and organize English content from wolt.md for all pages  
- [ ] Extract and organize Danish content from wolt.md for all pages  
- [x] Implement language switcher component that preserves current page  
- [x] Create reusable `<Citation>` component for sourcing all claims  
- [ ] Add comparison tables showing Wolt fees vs competitors  
- [ ] Add responsive hero illustrations for each main content page  
- [ ] Implement "Share this fact" social media buttons on key statistics  
- [ ] Add animated scroll-triggered fact reveals on scroll  
- [ ] Integrate Markdown parser for long-form blog posts (`next-mdx-remote`)  

### 📝 Pledge Flow
- [ ] Build **PledgeModal** with name + email fields, hCaptcha token  
- [ ] Add `/api/pledge` route: validate, insert row, send verify email  
- [ ] Configure Supabase email template with DK/EN dynamic content  
- [ ] Implement `/verify?token=` page to confirm pledge and show thanks  
- [ ] Build real-time **PledgeCounter** using Supabase Realtime subscription  
- [ ] Add toast notifications for success / validation errors  

### 🗺️ Alternatives Finder
- [ ] Create `/alternatives` route with city search input  
- [ ] Fetch Just Eat open data endpoint and cache result in KV store  
- [ ] Render results in responsive cards with rating, pickup option flag  
- [ ] Add "Call restaurant" link with `tel:` for mobile users  
- [ ] Log `alternative_click` event to analytics  

### 🔍 SEO & Performance
- [ ] Generate XML sitemap at build time and upload to `/public`  
- [ ] Create `robots.txt` disallowing crawl on staging  
- [ ] Lazy-load all images with blur-up placeholder  
- [ ] Implement critical CSS extraction (`next/critical-css` plugin)  
- [ ] Verify LCP < 2 s on desktop via Lighthouse CI in GitHub Action  

### ♿ Accessibility
- [ ] Add skip-to-content link at top of page  
- [ ] Ensure all interactive elements have `aria-*` labels  
- [ ] Check colour contrast ratios meet WCAG 2.1 AA  
- [ ] Test keyboard navigation path end-to-end with Cypress axe plugin  

### 📊 Analytics & Monitoring
- [ ] Embed **Plausible** script with `self-hosted` proxy option  
- [ ] Track custom events: `pledge_started`, `pledge_verified`, `alt_click`  
- [ ] Schedule daily export job to BigQuery via Plausible API  
- [ ] Enable Vercel **Web Vitals** and error logging  
- [ ] Configure Slack webhook for production deployment alerts  

### ✅ Testing
- [ ] Add **Jest** + `@testing-library/react` and first render test  
- [ ] Mock Supabase client in unit tests  
- [ ] Write Playwright e2e: landing → pledge → verify happy path  
- [ ] Add Axe accessibility check to Playwright run  
- [ ] Collect code-coverage and fail CI under 80 % lines  

### 🚀 Release & Ops
- [ ] Create `production` branch protection rules (2 approvals)  
- [ ] Set up Vercel Preview Comments on PRs  
- [ ] Configure Vercel Cron job to re-validate static props nightly  
- [ ] Write `README.md` with local dev, staging, prod instructions  
- [ ] Tag `v1.0.0` and create GitHub Release notes after QA sign-off  

### 🛡️ Legal & Compliance
- [ ] Draft privacy policy page (GDPR compliant)  
- [ ] Add cookie-consent banner using `cookie-consent` React component  
- [ ] Vet all claims with legal; add inline citations to sources list  
- [ ] Host Creative Commons licence for content reuse  

### 🧳 Nice-to-Have (Stretch)
- [ ] Implement dark-mode auto-switch based on `prefers-color-scheme`  
- [ ] Add "Hall of Shame" carousel of Wolt's controversies with citations  
- [ ] Build blog CMS integration via Contentful webhook to ISR route  
- [ ] Add progressive-web-app manifest and service-worker for offline reading  

All boxes start unchecked so your delivery team can plan and track progress sprint-by-sprint.