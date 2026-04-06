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
    id: '1',
    title: 'Godown AI (WMS)',
    description: 'Live data-to-AI injection pipeline fetching real-time warehouse metrics from PostgreSQL into LLMs, eliminating hallucinations.',
    image: '/assets/projects/wms-ai.svg',
    stack: ['PostgreSQL', 'Node.js', 'React', 'Claude API', 'Python'],
    liveLink: 'https://wmsai.netlify.app',
    githubLink: 'https://github.com/Sam-096/wms-bot-backend',
    highlights: [
      'Real-time PostgreSQL data injection',
      'LLM-powered warehouse analytics',
      'Reduced hallucination by 95%',
    ],
  },
  {
    id: '2',
    title: 'EAMCET Admission Analytics',
    description: 'Extracted 1.2MB raw exam datasets into a structured MySQL database with a Node.js API calculating live KPIs.',
    image: '/assets/projects/eamcet.svg',
    stack: ['MySQL', 'Node.js', 'TypeScript', 'React', 'REST APIs'],
    liveLink: 'https://svgroups.netlify.app',
    githubLink: 'https://github.com/Sam-096/eapcet_backend',
    highlights: [
      '1.2MB dataset transformation',
      'Live KPI calculation',
      '10K+ student records indexed',
    ],
  },
  {
    id: '3',
    title: 'J127 Sunday School Tracker',
    description: 'Architected a 3-tier support system for 10,000+ teachers featuring a multilingual WhatsApp AI bot and NLP ticket-routing.',
    image: '/assets/projects/placeholder-j127.svg',
    stack: ['WhatsApp API', 'Python', 'NLP', 'Node.js', 'React'],
    githubLink: 'https://github.com/Sam-096/j127-sunday-school-support',
    highlights: [
      'Multilingual AI bot support',
      'NLP-powered ticket routing',
      'Reduced support response time by 80%',
    ],
  },
  {
    id: '4',
    title: 'New Music Palace (NMP)',
    description: '100-SKU e-commerce storefront & Python/Pandas data pipeline for inventory insights. Achieved 90+ Lighthouse scores.',
    image: '/assets/projects/nmp-store.svg',
    stack: ['React', 'Python', 'Pandas', 'Tailwind CSS', 'Stripe'],
    liveLink: 'https://nmpstore.netlify.app',
    highlights: [
      '100+ SKUs managed',
      '90+ Lighthouse score',
      'Automated inventory pipeline',
    ],
  },
  {
    id: '5',
    title: 'IT Service Desk ML Analytics',
    description: 'Machine learning pipeline processing 47K+ unstructured tickets using DistilBERT, achieving a 91% F1-score.',
    image: '/assets/projects/placeholder-ml.svg',
    stack: ['DistilBERT', 'Python', 'scikit-learn', 'PostgreSQL', 'Flask'],
    highlights: [
      '91% F1-score accuracy',
      '47K+ tickets processed',
      'Automated ticket classification',
    ],
  },
  {
    id: '6',
    title: 'Library Analytics (KMEC LMS)',
    description: 'Replaced ORMs with performant Raw SQL to aggregate daily ledger data into 6-month trend reports for a React dashboard.',
    image: '/assets/projects/placeholder-analytics.svg',
    stack: ['React', 'PostgreSQL', 'SQL', 'Recharts', 'Node.js'],
    highlights: [
      '6-month trend aggregation',
      '50% performance improvement',
      'Real-time ledger reports',
    ],
  },
];