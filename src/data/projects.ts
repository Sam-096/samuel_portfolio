export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveLink?: string;
  githubLink?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Godown AI (WMS)",
    description:
      "Live data-to-AI injection pipeline fetching real-time warehouse metrics from PostgreSQL into LLMs, eliminating hallucinations.",
    image: "/assets/projects/wms-ai.png",
    stack: [
      "Angular 21",
      "PostgreSQL",
      "Java",
      "Custom Multi Lingual AI Model",
    ],
    liveLink: "https://wmsai.netlify.app",
    githubLink: "https://github.com/Sam-096/wms-bot-backend",
    highlights: [
      "Real-time PostgreSQL data injection",
      "LLM-powered warehouse analytics",
      "Reduced hallucination by 95%",
    ],
  },
  {
    id: "2",
    title: "EAMCET Admission Analytics",
    description:
      "Extracted raw exam datasets into a structured MySQL database with a Node.js API calculating live KPIs.",
    image: "/assets/projects/eamcet.png",
    stack: ["MySQL", "Node.js", "TypeScript", "React", "REST APIs", "Hosting"],
    liveLink: "https://svgroups.netlify.app",
    githubLink: "https://github.com/Sam-096/eapcet_backend",
    highlights: [
      "1.2MB dataset transformation",
      "Live KPI calculation",
      "10K+ student records indexed",
    ],
  },
  {
    id: "3",
    title: "J127 Sunday School Tracker",
    description:
      "Architected a 3-tier support system for 10,000+ teachers featuring a multilingual WhatsApp AI bot and NLP ticket-routing. Designed UI/UX for Staff Command Center with role-based portal.",
    image: "/assets/projects/j127-tracker.png",
    stack: [
      "React",
      "TailwindCSS",
      "WhatsApp Cloud API",
      "Node.js",
      "Python NLP",
      "Leaflet Maps",
    ],
    githubLink: "https://github.com/Sam-096/j127-sunday-school-support",
    highlights: [
      "Architected WhatsApp-first UI for 10,000+ non-technical users (Telugu/English)",
      "Designed role-based Staff Web Portal (PC, HR, QCT, Admin)",
      "NLP-powered ticket routing reducing support response time by 80%",
    ],
  },
  {
    id: "4",
    title: "New Music Palace (NMP Store)",
    description:
      "100-SKU B2B/B2C e-commerce storefront with Python/Pandas inventory pipeline. Achieved 90+ Lighthouse scores.",
    image: "/assets/projects/nmp-store.png",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveLink: "https://nmpstore.netlify.app",
    githubLink: "https://github.com/Sam-096",
    highlights: [
      "100+ SKUs with real-time inventory sync",
      "90+ Lighthouse performance score",
      "Automated Pandas data pipeline for insights",
    ],
  },
  {
    id: "5",
    title: "IT Service Desk ML Analytics",
    description:
      "Machine learning pipeline processing 47K+ unstructured tickets using DistilBERT, achieving a 91% F1-score for automated ticket classification.",
    image: "/assets/projects/ml-analytics.png",
    stack: ["DistilBERT", "Python", "scikit-learn", "PostgreSQL", "Flask"],
    highlights: [
      "91% F1-score accuracy on ticket classification",
      "47K+ tickets processed and analyzed",
      "Automated ticket routing reducing manual triage by 60%",
    ],
  },
  {
    id: "6",
    title: "Library Analytics (KMEC LMS)",
    description:
      "Replaced ORMs with performant Raw SQL to aggregate daily ledger data into 6-month trend reports for React dashboard.",
    image: "/assets/projects/library-analytics.png",
    stack: ["React", "PostgreSQL", "SQL", "Recharts", "Node.js"],
    highlights: [
      "6-month trend aggregation with real-time updates",
      "50% performance improvement vs ORM queries",
      "Interactive trend reports and forecasting",
    ],
  },
];
