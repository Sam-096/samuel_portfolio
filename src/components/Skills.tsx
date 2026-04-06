import { useEffect } from 'react';
import { skillCategories } from '../data/skills';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import * as Icons from 'lucide-react';

export const Skills = () => {
  const { fadeUpOnScroll, hoverScale } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.skill-card', 0.1);
    hoverScale('.skill-card', 1.05, 0.3);
  }, [fadeUpOnScroll, hoverScale]);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      Database: Icons.Database,
      Code: Icons.Code,
      Server: Icons.Server,
      Sparkles: Icons.Sparkles,
      Layout: Icons.Layout,
      BarChart3: Icons.BarChart3,
      Package: Icons.Package,
      FileSpreadsheet: Icons.FileSpreadsheet,
      Network: Icons.Network,
      HardDrive: Icons.HardDrive,
      GitBranch: Icons.GitBranch,
      Brain: Icons.Brain,
      Zap: Icons.Zap,
      Palette: Icons.Palette,
      Wand2: Icons.Wand2,
      Cloud: Icons.Cloud,
    };
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card glass p-6 md:p-8 cursor-pointer"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Card bottom accent */}
              <div className="mt-6 pt-4 border-t border-white/5 flex gap-1 justify-end">
                <div className="w-2 h-2 bg-teal-500 rounded-full opacity-50"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech stack note */}
        <div className="mt-16 p-6 md:p-8 glass-dark rounded-lg border border-slate-700/50 text-center">
          <p className="text-slate-300 mb-4">
            Always learning and exploring new technologies to build better solutions
          </p>
          <p className="text-teal-400 font-semibold">2+ Years of Professional Experience</p>
        </div>
      </div>
    </section>
  );
};