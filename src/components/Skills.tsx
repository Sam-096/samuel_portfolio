import { useEffect } from 'react';
import { skillCategories } from '../data/skills';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Skills = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.skill-card', 0.15);
  }, [fadeUpOnScroll]);

  return (
    <section className="py-24 md:py-40 px-4 md:px-8 md:px-12 bg-bs-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Technical <span className="text-bs-yellow">Skills</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
            80+ technologies across data platforms, full-stack development, AI systems, and cloud infrastructure. Always learning, always shipping.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card border-4 border-gray-700 hover:border-bs-yellow p-8 md:p-10 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3"
            >
              {/* Category title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 group-hover:text-bs-yellow transition-colors">
                {category.name}
              </h3>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 text-gray-300 group hover:text-bs-yellow transition-colors">
                    <span className="text-bs-yellow font-black text-2xl leading-none">•</span>
                    <span className="text-lg font-bold">{skill.name}</span>
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
