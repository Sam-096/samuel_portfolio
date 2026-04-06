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
    id: '1',
    company: 'ALX Solutions',
    position: 'Data-Focused Full Stack Developer',
    period: 'Nov 2024 - Present',
    startDate: '2024-11',
    endDate: 'present',
    description: 'Engineered real-time SQL-to-LLM data injection pipelines, PostgreSQL warehouse databases, and GST financial dashboards.',
    responsibilities: [
      'Built real-time data injection pipelines from PostgreSQL to LLMs',
      'Designed and optimized warehouse databases for large-scale analytics',
      'Developed GST financial dashboards with real-time KPI tracking',
      'Implemented data validation and error handling systems',
    ],
    technologies: ['PostgreSQL', 'Node.js', 'React', 'Python', 'Claude API'],
  },
  {
    id: '2',
    company: 'JOJO Techland',
    position: 'Application Developer',
    period: 'Nov 2023 - Nov 2024',
    startDate: '2023-11',
    endDate: '2024-11',
    description: 'Built multi-domain SaaS admin dashboards (Job portals, E-commerce) using Angular 16+ and REST APIs.',
    responsibilities: [
      'Developed responsive admin dashboards for job portals and e-commerce platforms',
      'Designed and implemented REST APIs for data management',
      'Built complex data grids with filtering, sorting, and pagination',
      'Collaborated with backend teams on API integration',
    ],
    technologies: ['Angular 16+', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'RxJS'],
  },
  {
    id: '3',
    company: 'Smart Bridge',
    position: 'Data Analyst Intern',
    period: 'Feb 2023 - Jul 2023',
    startDate: '2023-02',
    endDate: '2023-07',
    description: 'Built Tableau/Google Sheets dashboards using SQL and developed IBM Watson chatbots.',
    responsibilities: [
      'Created interactive dashboards in Tableau and Google Sheets',
      'Wrote complex SQL queries for data aggregation and analysis',
      'Developed NLP-powered chatbots using IBM Watson',
      'Performed data cleaning and transformation',
    ],
    technologies: ['SQL', 'Tableau', 'Google Sheets', 'Python', 'IBM Watson'],
  },
];