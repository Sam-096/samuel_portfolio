export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveLink?: string;
  githubLink?: string;
  highlights?: string[];
  status?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Ingodown AI (WMS)",
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
    status: "Ongoing",
  },
  {
    id: "2",
    title: "Full Stack Applciation",
    description:
      "Extracted raw exam datasets into a structured MySQL database with a Node.js API calculating live KPIs.",
    image: "/assets/projects/eamcet.png",
    stack: ["MySQL", "Node.js", "TypeScript", "React", "REST APIs", "Hosting"],
    liveLink: "https://svgroups.netlify.app",
    githubLink: "https://github.com/Sam-096/eapcet_backend",
    highlights: [
      "RAW dataset transformation",
      "Live KPI calculation",
      "10K+ student records indexed",
    ],
    status: "Completed",
  },
  {
    id: "3",
    title: "QUICKATHA (GST Accounting SaaS)",
    description:
      "Developed high-performance financial dashboards and data-driven UI systems for a GST-compliant accounting SaaS, enabling real-time ledger visibility and audit-log tracking for finance workflows.",
    image: "/assets/projects/alx-books.png",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL"],
    githubLink: "", // Leave empty if it's a private company repo
    liveLink: "", // Add live link if ALX Books is publicly accessible
    highlights: [
      "Built responsive, data-driven financial dashboards exposing invoice flows and GSTR/ITR compliance status",
      "Optimized web performance using React memoization, lazy loading, and code splitting",
      "Implemented complex SQL-backed views for immutable audit logs and multi-role accounting workflows",
    ],
    status: "Completed",
  },
  {
    id: "4",
    title: "New Music Palace (NMP Store)",
    description:
      "100-SKU B2B/B2C e-commerce storefront inventory pipeline. Achieved 90+ Lighthouse scores.",
    image: "/assets/projects/nmp-store.png",
    stack: ["Angular 21", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://nmpstore.netlify.app",
    githubLink: "https://github.com/Sam-096",
    highlights: [
      "100+ SKUs with real-time inventory sync",
      "90+ Lighthouse performance score",
      "Automated Pandas data pipeline for insights",
    ],
    status: "Ongoing",
  },
  {
    id: "5",
    title: "IT Service Desk ML Analytics",
    description:
      "Machine learning pipeline processing 47K+ unstructured tickets using DistilBERT, achieving a 91% F1-score for automated ticket classification.",
    image: "/assets/projects/ml-analytics.png",
    stack: [
      "DistilBERT",
      "Python",
      "scikit-learn",
      "PostgreSQL",
      "Hugging Face",
    ],
    highlights: [
      "91% F1-score accuracy on ticket classification",
      "47K+ tickets processed and analyzed",
      "Automated ticket routing reducing manual triage by 60%",
    ],
    status: "Completed",
  },
  {
    id: "6",
    title: "AI LMS",
    description:
      "Replaced ORMs with performant Raw SQL to aggregate daily ledger data into 6-month trend reports for React dashboard.",
    image: "/assets/projects/library-analytics.png",
    stack: ["React", "PostgreSQL", "Node.js", "SQL", "Recharts"],
    highlights: [
      "6-month trend aggregation with real-time updates",
      "50% performance improvement vs ORM queries",
      "Interactive trend reports and forecasting",
    ],
    status: "Completed",
  },
];
