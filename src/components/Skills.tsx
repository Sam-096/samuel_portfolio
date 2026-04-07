import { useEffect } from 'react';
import { skillCategories } from '../data/skills';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Skills = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.skill-card', 0.15);
  }, [fadeUpOnScroll]);

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-bs-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Technical <span className="text-bs-yellow">Skills</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mb-16 md:mb-20">
          80+ technologies and frameworks. Always learning, always shipping.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card border-2 border-gray-700 hover:border-bs-yellow p-6 md:p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {/* Category title */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-bs-yellow">
                {category.name}
              </h3>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300 group hover:text-bs-yellow transition-colors">
                    <span className="text-bs-yellow font-bold">•</span>
                    <span className="text-base font-medium">{skill.name}</span>
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
