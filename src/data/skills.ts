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
    id: 'data-bi',
    name: 'Data & BI',
    icon: 'Database',
    skills: [
      { name: 'SQL', icon: 'Database' },
      { name: 'PostgreSQL', icon: 'Package' },
      { name: 'MySQL', icon: 'Package' },
      { name: 'Power BI', icon: 'BarChart3' },
      { name: 'Tableau', icon: 'BarChart3' },
      { name: 'Excel', icon: 'FileSpreadsheet' },
    ],
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: 'Code',
    skills: [
      { name: 'Python', icon: 'Code' },
      { name: 'JavaScript', icon: 'Code' },
      { name: 'TypeScript', icon: 'Code' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Automation',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Spring Boot', icon: 'Server' },
      { name: 'REST APIs', icon: 'Network' },
      { name: 'Redis', icon: 'HardDrive' },
      { name: 'GitHub Actions', icon: 'GitBranch' },
    ],
  },
  {
    id: 'ai-integrations',
    name: 'AI & Integrations',
    icon: 'Sparkles',
    skills: [
      { name: 'Claude API', icon: 'Sparkles' },
      { name: 'Anthropic MCP', icon: 'Zap' },
      { name: 'DistilBERT', icon: 'Brain' },
      { name: 'Groq', icon: 'Zap' },
      { name: 'Sarvam', icon: 'Sparkles' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend & Cloud',
    icon: 'Layout',
    skills: [
      { name: 'React', icon: 'Layout' },
      { name: 'Angular 17+', icon: 'Layout' },
      { name: 'Tailwind CSS', icon: 'Palette' },
      { name: 'GSAP', icon: 'Wand2' },
      { name: 'Render', icon: 'Cloud' },
      { name: 'Netlify', icon: 'Cloud' },
    ],
  },
];