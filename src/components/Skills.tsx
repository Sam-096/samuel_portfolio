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
      CheckSquare: Icons.CheckSquare2,
      FileText: Icons.FileText,
      Smartphone: Icons.Smartphone,
      Settings: Icons.Settings,
      Layers: Icons.Layers,
    };
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center">
          Technical Skills
        </h2>

        {/* Skills Grid - responsive: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card glass p-4 md:p-6 lg:p-8 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/10">
                <div className="p-2 bg-teal-500/20 rounded-lg flex-shrink-0">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white line-clamp-1">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2 md:space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs md:text-sm lg:text-base truncate">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Card bottom accent */}
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/5 flex gap-1 justify-end">
                <div className="w-2 h-2 bg-teal-500 rounded-full opacity-50"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech stack note */}
        <div className="mt-12 md:mt-16 p-4 md:p-6 lg:p-8 glass-dark rounded-lg border border-slate-700/50 text-center">
          <p className="text-slate-300 text-sm md:text-base mb-3 md:mb-4">
            Always learning and exploring new technologies to build better solutions
          </p>
          <p className="text-teal-400 font-semibold text-sm md:text-base">2+ Years of Professional Experience</p>
        </div>
      </div>
    </section>
  );
};