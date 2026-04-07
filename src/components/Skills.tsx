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
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  // Category color mapping
  const getCategoryColor = (index: number) => {
    const colors = [
      { name: 'purple', iconBg: 'bg-purple-500/20', border: 'border-purple-500/40', accent: 'text-purple-400', textAlt: 'text-purple-300', bullet: 'bg-purple-400', hoverAccent: 'hover:text-purple-300', hoverBorder: 'hover:border-purple-500/60', hoverShadow: 'hover:shadow-purple-500/20' },
      { name: 'cyan', iconBg: 'bg-cyan-500/20', border: 'border-cyan-500/40', accent: 'text-cyan-400', textAlt: 'text-cyan-300', bullet: 'bg-cyan-400', hoverAccent: 'hover:text-cyan-300', hoverBorder: 'hover:border-cyan-500/60', hoverShadow: 'hover:shadow-cyan-500/20' },
      { name: 'orange', iconBg: 'bg-orange-500/20', border: 'border-orange-500/40', accent: 'text-orange-400', textAlt: 'text-orange-300', bullet: 'bg-orange-400', hoverAccent: 'hover:text-orange-300', hoverBorder: 'hover:border-orange-500/60', hoverShadow: 'hover:shadow-orange-500/20' },
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-16 md:mb-20 text-center">
          Technical Skills
        </h2>

        {/* Skills Grid - responsive: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const colors = getCategoryColor(index);
            return (
              <div
                key={category.id}
                className={`skill-card card p-6 md:p-8 rounded-xl cursor-pointer border ${colors.border} bg-dark-800 bg-gradient-to-br from-${colors.name}-500/5 to-transparent ${colors.hoverBorder} transition-all duration-300 hover:shadow-lg ${colors.hoverShadow}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 md:mb-8 pb-4 md:pb-5 border-b border-purple-500/20">
                  <div className={`p-3 ${colors.iconBg} rounded-lg flex-shrink-0`}>
                    <div className={colors.accent}>
                      {getIconComponent(category.icon)}
                    </div>
                  </div>
                  <h3 className={`text-xl md:text-2xl lg:text-2xl font-bold ${colors.accent} line-clamp-1`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 md:space-y-3.5">
                  {category.skills.map((skill, skIndex) => (
                    <div
                      key={skIndex}
                      className={`flex items-center gap-2 text-slate-300 ${colors.hoverAccent} transition-colors`}
                    >
                      <div className={`w-2 h-2 md:w-2.5 md:h-2.5 ${colors.bullet} rounded-full flex-shrink-0 opacity-70`}></div>
                      <span className="text-xs md:text-sm lg:text-base truncate">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Card bottom accent */}
                <div className={`mt-6 md:mt-8 pt-4 md:pt-5 border-t ${colors.border} flex gap-2 justify-end`}>
                  <div className={`w-2.5 h-2.5 ${colors.bullet} rounded-full opacity-60`}></div>
                  <div className={`w-2.5 h-2.5 ${colors.bullet} rounded-full opacity-40`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional tech stack note */}
        <div className="mt-20 md:mt-28 p-6 md:p-8 lg:p-10 card rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 text-center">
          <p className="text-slate-300 text-sm md:text-base mb-3 md:mb-4">
            Always learning and exploring new technologies to build better solutions
          </p>
          <p className="text-purple-400 font-semibold text-sm md:text-base">2+ Years of Professional Experience</p>
        </div>
      </div>
    </section>
  );
};