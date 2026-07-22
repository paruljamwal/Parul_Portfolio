# Portfolio Resume Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remap and reorder the CRA portfolio so it matches Parul’s SDE Frontend resume (Omniful experience, impact stats, modern skills, WMS/OMS/TMS-first projects) while keeping the existing visual design system.

**Architecture:** Keep the current section-component pattern (`Header`, `About`, `Experience`, `Portfolio`, `Contact`, `Nav`, `Footer`). Convert `#experience` from a skills grid into work history; add new `Skills` and `Education` components; reorder `App.js`; point Resume CTA at a PDF in `public/`.

**Tech Stack:** React 18, Create React App (`react-scripts` 5), existing CSS variables / section styles, `react-icons` where helpful.

## Global Constraints

- Stay within the existing design system (no visual restyle / new theme).
- Resume CTA must use `/Parul_Jamwal_SDE_Resume.pdf` from `public/`.
- Contact email must be `parul.jamwal19@gmail.com`.
- Omniful project cards must not invent GitHub or Live Demo URLs.
- Featured clones are only EverHour and OverStock (labeled earlier work).
- Preserve CI-safe lint practices (`rel="noreferrer"`, no unused imports, no invalid `href="#"`).
- Page order: Hero → About → Experience → Skills → Projects → Education → Contact.

## File map

| File | Responsibility |
|------|----------------|
| `public/Parul_Jamwal_SDE_Resume.pdf` | Hosted resume for CTA |
| `src/components/header/Header.jsx` | Hero title + subline |
| `src/components/header/CTA.jsx` | Resume + Let’s Talk links |
| `src/components/about/About.jsx` | Bio + impact stats cards |
| `src/components/experience/Experience.jsx` | Omniful work history |
| `src/components/experience/experience.css` | Work-history layout tweaks |
| `src/components/skills/Skills.jsx` | Skills icon/text grid |
| `src/components/skills/skills.css` | Reuse/adapt skills grid styles |
| `src/components/Portfolio/Portfolio.jsx` | WMS/OMS/TMS + earlier clones |
| `src/components/education/Education.jsx` | Masai + BCA |
| `src/components/education/education.css` | Minimal education styles |
| `src/components/contact/Contact.jsx` | Email + intro copy |
| `src/components/nav/Nav.jsx` | Anchors for new sections |
| `src/components/footer/Footer.jsx` | Footer links + typo fix |
| `src/App.js` | Section render order |

---

### Task 1: Host resume PDF and wire CTA

**Files:**
- Create: `public/Parul_Jamwal_SDE_Resume.pdf` (copy from repo root `Parul_Jamwal_SDE_Resume.pdf`)
- Modify: `src/components/header/CTA.jsx`

**Interfaces:**
- Consumes: none
- Produces: Resume anchor `href="/Parul_Jamwal_SDE_Resume.pdf"` with `target="_blank"` and `rel="noreferrer"`

- [ ] **Step 1: Copy PDF into public**

```bash
cp /Users/ritikgoyalomniful/Desktop/parul/projects/Parul_Portfolio/Parul_Jamwal_SDE_Resume.pdf \
  /Users/ritikgoyalomniful/Desktop/parul/projects/Parul_Portfolio/public/Parul_Jamwal_SDE_Resume.pdf
ls -la public/Parul_Jamwal_SDE_Resume.pdf
```

Expected: file exists under `public/`.

- [ ] **Step 2: Update CTA**

Replace `src/components/header/CTA.jsx` with:

```jsx
export const CTA = () => {
  return (
    <div className="cta">
      <a
        href="/Parul_Jamwal_SDE_Resume.pdf"
        className="btn btn-primary github"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
```

- [ ] **Step 3: Verify CTA href**

```bash
rg -n "Parul_Jamwal_SDE_Resume|drive.google" src/components/header/CTA.jsx
```

Expected: local PDF path present; no Google Drive URL.

- [ ] **Step 4: Commit**

```bash
git add public/Parul_Jamwal_SDE_Resume.pdf src/components/header/CTA.jsx
git commit -m "feat: serve resume PDF from public and update CTA"
```

---

### Task 2: Hero title and subline

**Files:**
- Modify: `src/components/header/Header.jsx`

**Interfaces:**
- Consumes: `CTA`, `HeaderSocial` (unchanged)
- Produces: Hero copy matching resume title line

- [ ] **Step 1: Update Header copy**

In `src/components/header/Header.jsx`, set the title and add a subline:

```jsx
<h4>Hello 👋🏻 I'm</h4>
<h1>Parul Jamwal</h1>
<h3>Software Development Engineer (Frontend)</h3>
<h5 className="text-light">React.js · Next.js · TypeScript · Redux</h5>
<CTA />
```

Keep photo, socials, and scroll-down link unchanged. Prefer `<CTA />` over `<CTA></CTA>`.

- [ ] **Step 2: Spot-check strings**

```bash
rg -n "Software Development Engineer|Next.js|TypeScript" src/components/header/Header.jsx
```

Expected: all three match.

- [ ] **Step 3: Commit**

```bash
git add src/components/header/Header.jsx
git commit -m "feat: update hero title to Frontend SDE stack"
```

---

### Task 3: About bio and impact stats

**Files:**
- Modify: `src/components/about/About.jsx`

**Interfaces:**
- Consumes: existing `about.css` card classes (`.about__cards`, `.about__card`, `.about__icon`)
- Produces: About section with 3 stats cards + Omniful-focused bio

- [ ] **Step 1: Rewrite About.jsx**

```jsx
import "./about.css";
import ME from "../../assets/p9.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Tenants</h5>
              <small>100+ Enterprise</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Scale</h5>
              <small>52K+ Orders/Day</small>
            </article>
          </div>
          <p>
            Frontend Software Development Engineer with 3+ years building
            scalable SaaS UIs for enterprise logistics (WMS, OMS, TMS) at
            Omniful in Gurugram. I work with React.js, Next.js, TypeScript, and
            Redux to ship real-time, RBAC-aware product surfaces — including
            ~40% faster page loads through caching, code splitting, and
            memoized rendering.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify stats and bio keywords**

```bash
rg -n "3\+ Years|100\+|52K\+|Omniful|40%" src/components/about/About.jsx
```

Expected: all present.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/About.jsx
git commit -m "feat: rewrite About with Omniful bio and impact stats"
```

---

### Task 4: Experience section → Omniful work history

**Files:**
- Modify: `src/components/experience/Experience.jsx`
- Modify: `src/components/experience/experience.css`

**Interfaces:**
- Consumes: section `#experience` id (nav already points here)
- Produces: Work-history markup (role header + bullets); skills no longer live here

- [ ] **Step 1: Replace Experience.jsx content**

```jsx
import "./experience.css";

function Experience() {
  return (
    <section id="experience">
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__work">
          <div className="experience__work-header">
            <h3>Software Development Engineer (Frontend)</h3>
            <h4>Omniful Technologies</h4>
            <small className="text-light">Jan 2023 – Present</small>
          </div>
          <ul className="experience__work-list">
            <li>
              Owned frontend for WMS, OMS, and TMS modules used by 100+
              enterprise tenants processing 52K+ orders/day.
            </li>
            <li>
              Cut page load times by ~40% via React Query caching, route-level
              code splitting, lazy loading, and memoized list rendering.
            </li>
            <li>
              Architected a reusable React component library and shared hooks,
              cutting duplicate UI work by ~40% across WMS/OMS/TMS.
            </li>
            <li>
              Engineered real-time order/inventory tracking with Pusher and Beam
              notifications, enabling faster order fulfillment.
            </li>
            <li>
              Built route- and action-level RBAC with CASL and delivered OMS
              cancellation/return flows with REST API integrations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
```

- [ ] **Step 2: Add work-history CSS**

Append to `src/components/experience/experience.css`:

```css
.experience__work {
  background: #34222e;
  padding: 2.4rem;
  border-radius: 2rem;
  border: 1px solid #f9bf8f;
}

.experience__work-header h3 {
  margin-bottom: 0.35rem;
}

.experience__work-header h4 {
  color: var(--color-primary);
  margin-bottom: 0.35rem;
}

.experience__work-list {
  margin-top: 1.5rem;
  display: grid;
  gap: 0.9rem;
  padding-left: 1.2rem;
}

.experience__work-list li {
  color: var(--color-light);
  line-height: 1.6;
}
```

Keep existing skill-grid rules if still referenced elsewhere; Skills will use its own CSS file.

- [ ] **Step 3: Verify work content**

```bash
rg -n "Omniful|CASL|Pusher|40%" src/components/experience/Experience.jsx
```

Expected: matches present.

- [ ] **Step 4: Commit**

```bash
git add src/components/experience/Experience.jsx src/components/experience/experience.css
git commit -m "feat: turn Experience into Omniful work history"
```

---

### Task 5: New Skills section

**Files:**
- Create: `src/components/skills/Skills.jsx`
- Create: `src/components/skills/skills.css`

**Interfaces:**
- Consumes: icons under `src/assets/icons/` where available; text-only tiles otherwise
- Produces: exported `Skills` default component with `id="skills"`

- [ ] **Step 1: Create skills.css**

```css
.skills__content {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
}

.skills__details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 2rem;
  border: 1px solid #f9bf8f;
  padding: 1rem 0.5rem;
  background: #34222e;
  min-height: 110px;
  text-align: center;
}

.skills__details h4 {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

.skills__details img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
```

- [ ] **Step 2: Create Skills.jsx**

Use existing icons when present (`javascript.svg`, `reactjs.svg`, `redux.svg`, `html-5.svg`, `css3.svg`, `github-icon.svg` or `git.svg`). For TypeScript, Next.js, React Query, Tailwind, REST — render a text tile without a broken image:

```jsx
import "./skills.css";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/reactjs.svg";
import redux from "../../assets/icons/redux.svg";
import Html from "../../assets/icons/html-5.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/github-icon.svg";

const skills = [
  { name: "JAVASCRIPT", icon: javascript },
  { name: "TYPESCRIPT", icon: null },
  { name: "REACT", icon: react },
  { name: "NEXT.JS", icon: null },
  { name: "REDUX", icon: redux },
  { name: "REACT QUERY", icon: null },
  { name: "TAILWIND", icon: null },
  { name: "HTML", icon: Html },
  { name: "CSS / SCSS", icon: css },
  { name: "REST / AXIOS", icon: null },
  { name: "GIT", icon: git },
];

function Skills() {
  return (
    <section id="skills">
      <h5>What I Work With</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__content">
          {skills.map(({ name, icon }) => (
            <article key={name} className="skills__details">
              {icon ? <img src={icon} alt="" /> : <span aria-hidden="true">◆</span>}
              <h4>{name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
```

If an import path 404s locally, switch that skill to `icon: null` rather than adding new assets.

- [ ] **Step 3: Confirm icons resolve**

```bash
ls src/assets/icons
node -e "require('fs').accessSync('src/assets/icons/reactjs.svg')"
```

Adjust imports to match actual filenames on disk.

- [ ] **Step 4: Commit**

```bash
git add src/components/skills/Skills.jsx src/components/skills/skills.css
git commit -m "feat: add Skills section from resume stack"
```

---

### Task 6: Rebuild Portfolio projects list

**Files:**
- Modify: `src/components/Portfolio/Portfolio.jsx`

**Interfaces:**
- Consumes: existing images `final1`, `final` for EverHour/OverStock
- Produces: data-driven cards; Omniful items use `kind: "case"` (no demo links); clones use `kind: "clone"`

- [ ] **Step 1: Replace Portfolio data + render**

```jsx
import "./portfolio.css";
import final from "../../assets/final.png";
import final1 from "../../assets/final1.png";

const data = [
  {
    id: 1,
    kind: "case",
    name: "Warehouse Management System (WMS)",
    title:
      "Responsive inventory and shipping workflows for warehouse operators across 100+ tenants — contributing to a 12% increase in warehouse utilization. Optimized table-heavy pick/pack/ship UIs with code splitting, lazy loading, and memoized rendering.",
    tech: "React.js · TypeScript · Redux Toolkit · Tailwind · React Query",
  },
  {
    id: 2,
    kind: "case",
    name: "Order Management System (OMS)",
    title:
      "Reusable cancellation and return flows with CASL route- and action-level RBAC so multi-tenant roles only access permitted order actions on a platform processing 52K+ orders/day.",
    tech: "React.js · TypeScript · Redux Toolkit · CASL · REST · Tailwind",
  },
  {
    id: 3,
    kind: "case",
    name: "Transport Management System (TMS)",
    title:
      "Real-time order and inventory tracking with Pusher (sub-100ms latency) and Beam notifications, enabling faster order fulfillment for logistics operators.",
    tech: "React.js · TypeScript · Redux Toolkit · Pusher · Beam",
  },
  {
    id: 4,
    kind: "clone",
    image: final1,
    name: "EverHour",
    title:
      "Earlier work — time tracker web app that helps small and mid-size companies organize working hours.",
    github: "https://github.com/paruljamwal/viable-argument-168.git",
    demo: "https://idyllic-semifreddo-852580.netlify.app",
  },
  {
    id: 5,
    kind: "clone",
    image: final,
    name: "OverStock",
    title:
      "Earlier work — e-commerce experience for home decor, furniture, and outdoor products.",
    github: "https://github.com/paruljamwal/OverStock.git",
    demo: "https://endearing-malabi-e92ee0.netlify.app/",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            {item.kind === "clone" && (
              <div className="Portfolio__item-image">
                <img src={item.image} alt={item.name} />
              </div>
            )}
            <h2 style={{ textAlign: "center" }}>{item.name}</h2>
            {item.tech && (
              <h4 style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                {item.tech}
              </h4>
            )}
            <h3>{item.title}</h3>
            {item.kind === "clone" && (
              <div className="portfolio__item-cta">
                <a
                  href={item.github}
                  className="btn github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify removed clones and Omniful-first order**

```bash
rg -n "WMS|OMS|TMS|EverHour|OverStock|BEST BUY|FRESHLY|Zappos" src/components/Portfolio/Portfolio.jsx
```

Expected: WMS/OMS/TMS/EverHour/OverStock present; Best Buy / Freshly / Zappos absent.

- [ ] **Step 3: Commit**

```bash
git add src/components/Portfolio/Portfolio.jsx
git commit -m "feat: lead projects with WMS OMS TMS and trim clones"
```

---

### Task 7: Education section

**Files:**
- Create: `src/components/education/Education.jsx`
- Create: `src/components/education/education.css`

**Interfaces:**
- Consumes: none
- Produces: default export `Education` with `id="education"`

- [ ] **Step 1: Create Education files**

`src/components/education/education.css`:

```css
.education__container {
  display: grid;
  gap: 1.5rem;
  max-width: 800px;
}

.education__item {
  background: #34222e;
  border: 1px solid #f9bf8f;
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;
}

.education__item h3 {
  margin-bottom: 0.35rem;
}

.education__item h4 {
  color: var(--color-primary);
  margin-bottom: 0.35rem;
}
```

`src/components/education/Education.jsx`:

```jsx
import "./education.css";

function Education() {
  return (
    <section id="education">
      <h5>My Learning</h5>
      <h2>Education</h2>
      <div className="container education__container">
        <article className="education__item">
          <h3>Full Stack Web Development</h3>
          <h4>Masai School, Bangalore</h4>
          <small className="text-light">2021 – 2022</small>
        </article>
        <article className="education__item">
          <h3>Bachelor of Computer Applications</h3>
          <h4>Himachal Pradesh University</h4>
          <small className="text-light">2019 – 2021</small>
        </article>
      </div>
    </section>
  );
}

export default Education;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/education/Education.jsx src/components/education/education.css
git commit -m "feat: add Education section from resume"
```

---

### Task 8: Contact copy and email

**Files:**
- Modify: `src/components/contact/Contact.jsx`

**Interfaces:**
- Consumes: existing EmailJS form wiring
- Produces: resume email + Frontend SDE framing

- [ ] **Step 1: Update Contact strings**

Change intro and mailto:

```jsx
<h4 className="end">Get In Touch</h4>
<h3 className="end">
  Thanks for stopping by. I’m a Frontend Software Development Engineer open to
  joining a product team where I can keep shipping high-impact SaaS UIs. If that
  sounds like a fit, reach out —
</h3>
<h1 className="end">Don't be a stranger!!!</h1>
```

And:

```jsx
<a
  href="mailto:parul.jamwal19@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Send a message
</a>
```

- [ ] **Step 2: Verify email**

```bash
rg -n "parul.jamwal19@gmail.com|paruljamwal46@gmail.com" src/components/contact/Contact.jsx
```

Expected: only `parul.jamwal19@gmail.com`.

- [ ] **Step 3: Commit**

```bash
git add src/components/contact/Contact.jsx
git commit -m "feat: update contact email and intro copy"
```

---

### Task 9: App order, Nav, Footer

**Files:**
- Modify: `src/App.js`
- Modify: `src/components/nav/Nav.jsx`
- Modify: `src/components/footer/Footer.jsx`

**Interfaces:**
- Consumes: `Skills`, `Education` default exports
- Produces: Spec scroll order and matching anchors

- [ ] **Step 1: Update App.js**

```jsx
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
```

- [ ] **Step 2: Update Nav anchors**

Keep five icons max. Map: Home `/`, About `#about`, Experience `#experience`, Skills `#skills`, Projects `#portfolio`, and keep Contact `#contact` by replacing the old experience→book mapping carefully.

Recommended mapping (still 5 items — Skills replaces the old book-only experience, Experience stays on book, Projects stay, Contact stays; drop duplicate):

```jsx
<a href="/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
  <AiOutlineHome />
</a>
<a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
  <AiOutlineUser />
</a>
<a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
  <BiBook />
</a>
<a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}>
  <RiServiceLine />
</a>
<a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
  <AiOutlineMessage />
</a>
```

Projects remain reachable via scroll/footer (`#portfolio`). Do not use invalid `href="#"`.

- [ ] **Step 3: Update Footer links**

```jsx
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#portfolio">Projects</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

Fix the `Exprience` typo to `Experience`.

- [ ] **Step 4: Commit**

```bash
git add src/App.js src/components/nav/Nav.jsx src/components/footer/Footer.jsx
git commit -m "feat: reorder sections and update nav footer anchors"
```

---

### Task 10: CI build verification

**Files:**
- None (verification only)

- [ ] **Step 1: Run production build with CI**

```bash
cd /Users/ritikgoyalomniful/Desktop/parul/projects/Parul_Portfolio
CI=true npm run build
```

Expected: `Compiled successfully.` (no ESLint errors).

- [ ] **Step 2: Grep built bundle for key resume signals (optional sanity)**

```bash
rg -n "Omniful|parul.jamwal19@gmail.com|Warehouse Management" build/static/js/*.js | head
```

Expected: strings present in the bundle.

- [ ] **Step 3: Final commit only if Task 10 produced fixes**

If build failures required code fixes, commit those fixes with a message like `fix: resolve CI build issues after resume refresh`.

---

## Spec coverage checklist

| Spec requirement | Task |
|------------------|------|
| Hero title/subline + local resume PDF | 1, 2 |
| About bio + impact stats | 3 |
| Omniful Experience bullets | 4 |
| Skills section + stack | 5 |
| WMS/OMS/TMS + EverHour/OverStock only | 6 |
| Education | 7 |
| Contact email/copy | 8 |
| Section reorder + nav/footer | 9 |
| Design system preserved / CI-safe | 1–10 |
| No fake Omniful demos | 6 |

## Self-review notes

- No TBD/placeholder steps; concrete file paths and code included.
- Icon filenames must be verified on disk in Task 5 (known variance in `src/assets/icons`).
- Nav intentionally keeps 5 icons; Projects/Education reachable via footer and scroll.
