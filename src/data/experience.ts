export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "ALX Solutions",
    position: "Full Stack Developer & AI Systems Engineer",
    period: "Nov 2024 - Present",
    startDate: "2024-11",
    endDate: "present",
    description:
      "Architecting and shipping production-grade SaaS platforms, AI-powered systems, and enterprise tools — across accounting, warehouse management, and institutional management domains.",
    responsibilities: [
      "Led the build of ALX Books, a GST-ready accounting platform with invoice management, compliance screens, and data-driven audit views that made reporting much faster for the client",
      "Built ingodam.com, an AI-enabled warehouse system with live operational dashboards, automated gate passes, expiry alerts, and a context-aware assistant connected directly to PostgreSQL data",
      "Delivered a full-stack institutional platform with a clean MySQL schema, secure REST APIs, and automated student data processing that significantly reduced manual admission work",
      "Integrated LLMs with real business data using a prompt context layer, making AI responses more accurate, grounded, and useful for live operations",
    ],
    technologies: [
      "React",
      "Angular 21",
      "Node.js",
      "TypeScript",
      "PostgreSQL 16",
      "MySQL",
      "Redis",
      "JWT-RBAC",
      "LLM Integration",
      "Prompt Engineering",
      "REST APIs",
      "ETL Pipelines",
    ],
  },
  {
    id: "2",
    company: "JOJO Techland",
    position: "Application Developer",
    period: "Nov 2023 - Nov 2024",
    startDate: "2023-11",
    endDate: "2024-11",
    description:
      "Built multi-domain SaaS admin dashboards (Job portals, E-commerce) using Angular 16+ and REST APIs.",
    responsibilities: [
      "Developed responsive admin dashboards for job portals and e-commerce platforms",
      "Designed and implemented REST APIs for data management",
      "Built complex data grids with filtering, sorting, and pagination",
      "Collaborated with backend teams on API integration",
    ],
    technologies: [
      "Angular 16+",
      "TypeScript",
      "REST APIs",
      "Tailwind CSS",
      "RxJS",
    ],
  },
  {
    id: "3",
    company: "The Smart Bridge",
    position: "Data Analyst Intern",
    period: "Feb 2023 - Jul 2023",
    startDate: "2023-02",
    endDate: "2023-07",
    description:
      "Built Tableau/Google Sheets dashboards using SQL and developed IBM Watson chatbots.",
    responsibilities: [
      "Created interactive dashboards in Tableau and Google Sheets",
      "Wrote complex SQL queries for data aggregation and analysis",
      "Developed NLP-powered chatbots using IBM Watson",
      "Performed data cleaning and transformation",
    ],
    technologies: ["SQL", "Tableau", "Google Sheets", "Python", "IBM Watson"],
  },
];
