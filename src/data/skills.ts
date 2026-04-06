export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'Code',
    skills: [
      { name: 'JavaScript', icon: 'Code' },
      { name: 'TypeScript', icon: 'Code' },
      { name: 'Python', icon: 'Code' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', icon: 'Layout' },
      { name: 'Angular 17+', icon: 'Layout' },
      { name: 'Material UI', icon: 'Palette' },
      { name: 'Tailwind CSS', icon: 'Palette' },
      { name: 'SCSS', icon: 'Palette' },
      { name: 'HTML5', icon: 'Code' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'GSAP', icon: 'Wand2' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express.js', icon: 'Server' },
      { name: 'Flask', icon: 'Server' },
      { name: 'REST APIs', icon: 'Network' },
      { name: 'Spring Boot', icon: 'Server' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Database' },
      { name: 'Supabase', icon: 'Database' },
      { name: 'Cloud SQL', icon: 'Database' },
      { name: 'DB2', icon: 'Database' },
      { name: 'Excel', icon: 'FileSpreadsheet' },
    ],
  },
  {
    id: 'cloud-tools',
    name: 'Cloud & Tools',
    icon: 'Cloud',
    skills: [
      { name: 'Azure', icon: 'Cloud' },
      { name: 'GCP', icon: 'Cloud' },
      { name: 'GitHub', icon: 'GitBranch' },
      { name: 'Netlify', icon: 'Cloud' },
      { name: 'Render', icon: 'Cloud' },
      { name: 'Swagger', icon: 'FileText' },
      { name: 'cPanel', icon: 'Settings' },
    ],
  },
  {
    id: 'bi-etl',
    name: 'BI & ETL Tools',
    icon: 'BarChart3',
    skills: [
      { name: 'Tableau', icon: 'BarChart3' },
      { name: 'Power BI', icon: 'BarChart3' },
      { name: 'Dashboards', icon: 'BarChart3' },
      { name: 'Reports', icon: 'FileText' },
    ],
  },
  {
    id: 'ai-integrations',
    name: 'AI & Integration',
    icon: 'Sparkles',
    skills: [
      { name: 'Claude API', icon: 'Sparkles' },
      { name: 'LLM Integration', icon: 'Zap' },
      { name: 'DistilBERT', icon: 'Brain' },
      { name: 'Anthropic MCP', icon: 'Zap' },
    ],
  },
  {
    id: 'practices',
    name: 'Development Practices',
    icon: 'CheckSquare',
    skills: [
      { name: 'Agile', icon: 'CheckSquare' },
      { name: 'Version Control', icon: 'GitBranch' },
      { name: 'Responsive UI', icon: 'Smartphone' },
      { name: 'Lazy Loading', icon: 'Zap' },
      { name: 'State Management', icon: 'Layers' },
    ],
  },
];