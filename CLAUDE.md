# 🧑‍💻 Portfolio Project Guidelines (Kottala Samuel)

## 🎯 Role & Objective

You are a Staff Frontend Architect and UX Motion Designer. Your task is to build a production-ready, highly engaging, single-page developer portfolio website for me (Kottala Samuel). The site must be built using React, Tailwind CSS, and GSAP for modern, butter-smooth scroll animations.

## 🛠️ Project Architecture & Tech Stack

1. **Framework:** React (Vite) with TypeScript.
2. **Styling:** Tailwind CSS (Dark mode by default, modern glassmorphism UI, clean typography using Inter or Plus Jakarta Sans).
3. **Animation:** GSAP (ScrollTrigger for reveal animations, subtle hover effects on project cards, and a stagger effect on the hero section).
4. **Icons/Assets:** Lucide React, Simple Icons, or Devicons (Ensure modern icons for AI tools like Claude, OpenAI, and databases are included).

## 🔍 Task 1: GitHub & Asset Automation

1. **GitHub Scraping:** Use your capabilities to analyze my GitHub repositories at `https://github.com/Sam-096?tab=repositories`. Extract any relevant open-source project names, tech stacks, or descriptions to supplement the project list below.
2. **Asset Generation:** Visit the following URLs and capture high-quality desktop screenshots. Save them in `/public/assets/projects/`:
   - https://wmsai.netlify.app/ (`wms-ai.png`)
   - https://svgroups.netlify.app/ (`eamcet.png`)
   - https://nmpstore.netlify.app/ (`nmp-store.png`)
   - https://appslogix.netlify.app/ (`appslogix.png`)
     _If a headless browser fails, generate exact 16:9 placeholder colored divs and print instructions for me to replace them._

## 🏗️ Task 2: Build the Portfolio Structure

Create a modular React application (`Hero.tsx`, `Experience.tsx`, `Skills.tsx`, `Projects.tsx`) ensuring GSAP triggers smooth fade-up animations on scroll.

### A. Hero Section (Full Viewport Height)

- **Animation:** Staggered text reveal (GSAP).
- **Headline:** "Kottala Samuel"
- **Sub-headline (Typewriter effect):** "Data Analyst | Full Stack Developer | AI Systems Engineer"
- **Bio (240 chars):** "Results-driven Developer (2+ YOE) delivering SaaS platforms via React, Angular & Node.js. Bridges software engineering with data analytics (SQL/BI) and AI automation to build intelligent, workflow-driven enterprise dashboards."
- **Call to Action:** "View Projects" (scrolls down) and "Download Resume". Add links to GitHub (github.com/Sam-096) and LinkedIn (linkedin.com/in/kottala-samuel).

### B. Experience Timeline (Career History)

Build a sleek vertical timeline (using GSAP to draw the line on scroll) containing my career history:

1. **ALX Solutions (Nov 2024 - Present):** Data-Focused Full Stack Developer. Engineered real-time SQL-to-LLM data injection pipelines, PostgreSQL warehouse databases, and GST financial dashboards.
2. **JOJO Techland (Nov 2023 - Nov 2024):** Application Developer. Built multi-domain SaaS admin dashboards (Job portals, E-commerce) using Angular 16+ and REST APIs.
3. **Smart Bridge (Feb 2023 - Jul 2023):** Data Analyst Intern. Built Tableau/Google Sheets dashboards using SQL and developed IBM Watson chatbots.

### C. Technical Skills Section (With Icons)

Group the skills into modern, hovering glassmorphic cards. **CRITICAL:** Include actual SVG icons (via Lucide/Devicons) next to each skill.

- **Data & BI:** SQL (PostgreSQL, MySQL), Power BI, Tableau, Excel.
- **Languages:** Python (Pandas, NumPy), JavaScript, TypeScript.
- **Backend & Automation:** Node.js, Spring Boot, Redis, GitHub Actions.
- **AI & Integrations:** Claude API, Anthropic MCP (Model Context Protocol), DistilBERT, Groq, Sarvam.
- **Frontend & Cloud:** React, Angular 17+, Tailwind CSS, Render, Netlify.

### D. Projects Section (The Core Focus)

Create a responsive CSS Grid (1 col mobile, 3 cols desktop). Merge this list with any top repos you found on my GitHub. Each card needs a screenshot, title, stack tags, description, and "Live Demo" / "GitHub" buttons.

1. **Godown AI (WMS):** Live data-to-AI injection pipeline fetching real-time warehouse metrics from PostgreSQL into LLMs, eliminating hallucinations. [Link: wmsai.netlify.app]
2. **EAMCET Admission Analytics:** Extracted 1.2MB raw exam datasets into a structured MySQL database with a Node.js API calculating live KPIs. [Link: svgroups.netlify.app]
3. **J127 Sunday School Tracker:** Architected a 3-tier support system for 10,000+ teachers featuring a multilingual WhatsApp AI bot and NLP ticket-routing.
4. **New Music Palace (B2B/B2C):** 100-SKU e-commerce storefront & Python/Pandas data pipeline for inventory insights. Achieved 90+ Lighthouse scores. [Link: nmpstore.netlify.app]
5. **IT Service Desk ML Analytics:** Machine learning pipeline processing 47K+ unstructured tickets using DistilBERT, achieving a 91% F1-score.
6. **Library Analytics (KMEC LMS):** Replaced ORMs with performant Raw SQL to aggregate daily ledger data into 6-month trend reports for a React dashboard.

### E. Contact / Footer Section

- Clean email link: kottala.samuel@gmail.com
- Simple footer with copyright and social icons.

## 🚀 Task 3: Execution & Polish

1. Initialize Vite project & install dependencies (`tailwindcss`, `gsap`, `lucide-react`).
2. Configure `tailwind.config.js` for dark mode slate/zinc palette with a primary teal/blue accent.
3. Ensure 100% mobile responsiveness (`md:`, `lg:` tailwind classes).
4. Provide the exact commands to run the dev server and build for Netlify.
