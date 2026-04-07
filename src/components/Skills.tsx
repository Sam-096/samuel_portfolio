import { useEffect } from 'react';
import { skillCategories } from '../data/skills';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Skills = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.skill-card', 0.1);
  }, [fadeUpOnScroll]);

  return (
    <section id="skills" className="py-28 md:py-40 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl">
            Proficient in 80+ technologies across data platforms, full-stack development, and AI systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card card p-6 md:p-8 hover:shadow-xl hover:shadow-white/5 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">
                {category.name}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm md:text-base text-zinc-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
