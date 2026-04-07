import { useEffect } from 'react';
import { experiences } from '../data/experience';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Experience = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.experience-card', 0.15);
  }, [fadeUpOnScroll]);

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 border-2 border-black p-8 bg-neon-yellow">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tight uppercase">
            CAREER
          </h2>
          <p className="text-lg text-black font-bold">
            2+ Years Building Production Systems at Scale
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 md:space-y-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card border-2 border-black p-8 bg-white hover:shadow-lg transition-all duration-200 hover:translate-y-1"
            >
              {/* Period Badge */}
              <div className="inline-block border-2 border-black px-4 py-2 bg-black mb-4">
                <span className="text-neon-yellow font-black text-xs uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>

              {/* Position */}
              <h3 className="text-3xl md:text-4xl font-black text-black mt-4 mb-2 uppercase border-b-2 border-black pb-2">
                {exp.position}
              </h3>

              {/* Company */}
              <p className="text-xl md:text-2xl text-neon-yellow font-black mb-4 uppercase">
                {exp.company}
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-black mb-6 leading-relaxed font-semibold max-w-3xl border-l-4 border-black pl-4">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-6 border-t-2 border-black pt-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-black font-bold">
                    <span className="text-neon-yellow font-black text-lg">▼</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 border-t-2 border-black pt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-2 bg-white border-2 border-black text-black font-black uppercase hover:bg-black hover:text-neon-yellow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
