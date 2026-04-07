import { useEffect } from 'react';
import { skillCategories } from '../data/skills';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Skills = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.skill-card', 0.1);
  }, [fadeUpOnScroll]);

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-neon-yellow border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 border-2 border-black p-8 bg-black">
          <h2 className="text-5xl md:text-7xl font-black text-neon-yellow mb-4 tracking-tight uppercase">
            TECHNICAL SKILLS
          </h2>
          <p className="text-lg text-neon-yellow font-bold">
            80+ Technologies. Always shipping. Always learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {skillCategories.map((category, idx) => (
            <div
              key={category.id}
              className={`skill-card border-2 border-black p-6 md:p-8 bg-white hover:bg-black transition-all duration-200 ${
                idx % 2 === 0 ? 'md:border-r-0' : ''
              } ${idx < 3 ? 'md:border-b-0 lg:border-b-2' : ''}`}
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-black text-black mb-6 uppercase border-b-2 border-black pb-4 hover:text-neon-yellow transition-colors">
                {category.name}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <span className="w-2 h-2 bg-black flex-shrink-0 group-hover:bg-neon-yellow transition-colors"></span>
                    <span className="text-sm md:text-base text-black font-semibold group-hover:font-black transition-all group-hover:text-neon-yellow">
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
