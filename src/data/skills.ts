export interface Skill {
  name: string;
  icon?: string;
  color?: string;
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
      { name: 'JavaScript', icon: 'Code', color: '#f7df1e' },
      { name: 'TypeScript', icon: 'Code', color: '#3178c6' },
      { name: 'Python', icon: 'Code', color: '#3776ab' },
      { name: 'SQL', icon: 'Database', color: '#336791' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', icon: 'Layout', color: '#61dafb' },
      { name: 'Angular 17+', icon: 'Layout', color: '#dd0031' },
      { name: 'Material UI', icon: 'Palette', color: '#0081cb' },
      { name: 'Tailwind CSS', icon: 'Palette', color: '#06b6d4' },
      { name: 'SCSS', icon: 'Palette', color: '#cc6699' },
      { name: 'HTML5', icon: 'Code', color: '#e34f26' },
      { name: 'CSS3', icon: 'Palette', color: '#1572b6' },
      { name: 'GSAP', icon: 'Wand2', color: '#0ae448' },
    ],
  },
  {
    id: 'backend-apis',
    name: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: 'Server', color: '#339933' },
      { name: 'Express.js', icon: 'Server', color: '#000000' },
      { name: 'Flask', icon: 'Server', color: '#000000' },
      { name: 'REST APIs', icon: 'Network', color: '#000000' },
      { name: 'Spring Boot', icon: 'Server', color: '#6db33f' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'Database', color: '#336791' },
      { name: 'MySQL', icon: 'Database', color: '#4479a1' },
      { name: 'MongoDB', icon: 'Database', color: '#47a248' },
      { name: 'Supabase', icon: 'Database', color: '#3ecf8e' },
      { name: 'Cloud SQL', icon: 'Database', color: '#4285f4' },
      { name: 'DB2', icon: 'Database', color: '#000000' },
      { name: 'Excel', icon: 'FileSpreadsheet', color: '#217346' },
    ],
  },
  {
    id: 'cloud-tools',
    name: 'Cloud & Tools',
    icon: 'Cloud',
    skills: [
      { name: 'Azure', icon: 'Cloud', color: '#0078d4' },
      { name: 'GCP', icon: 'Cloud', color: '#4285f4' },
      { name: 'GitHub', icon: 'GitBranch', color: '#181717' },
      { name: 'Netlify', icon: 'Cloud', color: '#00c46a' },
      { name: 'Render', icon: 'Cloud', color: '#000000' },
      { name: 'Swagger', icon: 'FileText', color: '#85ea2d' },
      { name: 'cPanel', icon: 'Settings', color: '#ff6c2c' },
    ],
  },
  {
    id: 'bi-etl',
    name: 'BI & ETL Tools',
    icon: 'BarChart3',
    skills: [
      { name: 'Tableau', icon: 'BarChart3', color: '#e97627' },
      { name: 'Power BI', icon: 'BarChart3', color: '#f2c811' },
      { name: 'Dashboards', icon: 'BarChart3', color: '#000000' },
      { name: 'Reports', icon: 'FileText', color: '#000000' },
    ],
  },
  {
    id: 'ai-integration',
    name: 'AI & Integration',
    icon: 'Sparkles',
    skills: [
      { name: 'Claude API', icon: 'Sparkles', color: '#000000' },
      { name: 'LLM Integration', icon: 'Zap', color: '#000000' },
      { name: 'DistilBERT', icon: 'Brain', color: '#000000' },
      { name: 'Anthropic MCP', icon: 'Zap', color: '#000000' },
    ],
  },
  {
    id: 'practices',
    name: 'Development Practices',
    icon: 'CheckSquare',
    skills: [
      { name: 'Agile', icon: 'CheckSquare', color: '#000000' },
      { name: 'Version Control', icon: 'GitBranch', color: '#000000' },
      { name: 'Responsive UI', icon: 'Smartphone', color: '#000000' },
      { name: 'Lazy Loading', icon: 'Zap', color: '#000000' },
      { name: 'State Management', icon: 'Layers', color: '#000000' },
    ],
  },
];