# Portfolio Resume Refresh Design

**Date:** 2026-07-22  
**Source:** `Parul_Jamwal_SDE_Resume.pdf`  
**Approach:** Section reorder + content remap within the existing design system (no visual restyle)

## Goal

Align the live portfolio with Parul’s current resume: Frontend SDE at Omniful (3+ years), measurable impact, modern React stack — not a bootcamp/full-stack learner profile with clone-heavy projects.

## Page structure & navigation

New scroll order:

1. Hero
2. About (bio + impact stats)
3. Experience (Omniful)
4. Skills
5. Projects / Portfolio
6. Education
7. Contact

Bottom nav anchors updated to match: Home · About · Experience · Skills · Projects · Contact. Education is its own section with `#education` (optional nav icon only if it fits without crowding; footer can still link to it).

`App.js` render order must match the scroll order above.

## Hero

- Name: Parul Jamwal (unchanged)
- Title: `Software Development Engineer (Frontend)`
- Subline: `React.js · Next.js · TypeScript · Redux`
- CTA Resume → local PDF served from `public/Parul_Jamwal_SDE_Resume.pdf` (replace Google Drive link)
- CTA Let’s Talk → `#contact`
- Socials: keep existing LinkedIn + GitHub URLs

## About

- Rewrite bio to reflect 3+ years building scalable SaaS UIs for enterprise logistics (WMS, OMS, TMS) at Omniful, Gurugram; emphasize React/Next/TypeScript, real-time UI, RBAC.
- Re-enable the three about cards as impact stats:
  - `3+ yrs` — Experience
  - `100+` — Enterprise tenants
  - `52K+/day` — Orders processed
- Short supporting sentence covering ~40% faster page loads and real-time / RBAC work.
- Keep photo + existing about layout/CSS patterns.

## Experience (`#experience`)

New work-history content (replace current skills-only content that lives here today):

- **Role:** Software Development Engineer (Frontend)
- **Company:** Omniful Technologies
- **Dates:** Jan 2023 – Present
- Bullets (condensed from resume, 4–5 max):
  - Owned frontend for WMS, OMS, TMS across 100+ tenants / 52K+ orders/day
  - Cut page load times ~40% (React Query, code splitting, lazy loading, memoization)
  - Reusable component library / shared hooks (~40% less duplicate UI work)
  - Real-time tracking with Pusher + Beam; fulfillment impact
  - CASL route/action RBAC; OMS cancellation/return flows + REST integrations

Reuse existing section typography and container styles; add a simple role header + bullet list without introducing a new card-heavy visual language.

## Skills (`#skills`)

New section (skills move out of `#experience`):

- Keep icon-grid pattern from current experience/skills UI.
- Include: JavaScript, TypeScript, React, Next.js, Redux / Redux Toolkit, React Query, Tailwind, HTML5, CSS3/SCSS, Git, REST/Axios.
- De-emphasize or remove stack items not on the resume (e.g. Material UI) unless an icon already exists and looks fine; prefer resume alignment.
- Where icons are missing for TypeScript / Next / Tailwind / React Query, use text labels or simple existing icon placeholders rather than adding heavy new asset work.

## Projects (`#portfolio`)

Lead with Omniful product work, then earlier clones:

1. **WMS** — React, TypeScript, Redux Toolkit, Tailwind, React Query; inventory/shipping; 100+ tenants; 12% utilization impact
2. **OMS** — React, TypeScript, Redux Toolkit, CASL, REST, Tailwind; cancellations/returns; RBAC; 52K+ orders/day
3. **TMS** — real-time order/inventory tracking; Pusher, Beam; fulfillment impact
4. **EverHour** — earlier work (keep existing image + links)
5. **OverStock** — earlier work (keep existing image + links)

Remove Best Buy, Freshly, Snow Globe, LifestyleStores, Zappos from the featured list.

Omniful cards: no public GitHub/Live Demo → case-study style (title, tech tags, short description). Do not invent demo URLs. Clones keep Github + Live Demo buttons.

Label clones with a small “Earlier work” heading or badge in copy.

## Education (`#education`)

Short section:

- Full Stack Web Development, Masai School, Bangalore — 2021 – 2022
- Bachelor of Computer Applications, Himachal Pradesh University — 2019 – 2021

Match existing section heading style (`h5`/`h2`); minimal layout.

## Contact

- Email: `parul.jamwal19@gmail.com` (replace `paruljamwal46@gmail.com`)
- Update intro copy: Frontend SDE open to new roles / teams — drop “creative designers and developers” framing.
- Keep EmailJS form wiring unless credentials must change (out of scope unless broken).

## Technical notes

- Preserve existing CSS variables, header/about/portfolio visual language.
- Copy resume PDF into `public/` for stable Resume CTA.
- Keep prior CI/lint fixes (`rel="noreferrer"`, valid hrefs, unused imports cleaned).
- No full redesign, no new animation system, no dependency upgrades unless required for icons.

## Out of scope

- Brand-new visual theme or layout system
- Adding screenshots for WMS/OMS/TMS (use text/case-study cards unless assets are provided later)
- Backend/EmailJS credential rotation
- Deploy/Vercel Node engine changes (handled separately)

## Success criteria

- First viewport and About clearly read as Frontend SDE at Omniful, not a student portfolio
- Experience → Skills → Projects storytelling matches resume
- Projects lead with WMS/OMS/TMS; only EverHour + OverStock remain as earlier work
- Resume downloads the PDF from the site; contact email matches resume
- Existing look-and-feel remains recognizable
