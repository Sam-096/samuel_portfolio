import { useEffect } from 'react';
import { experiences } from '../data/experience';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Experience = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.experience-card', 0.15);
  }, [fadeUpOnScroll]);

  return (
    <section id="experience" className="py-28 md:py-40 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            Career
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl">
            2+ years of shipping production systems. From startups scaling to enterprise systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card border-l-2 border-white pl-8 md:pl-12 hover:pl-14 transition-all duration-300 group"
            >
              {/* Period */}
              <span className="text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-widest">
                {exp.period}
              </span>

              {/* Position */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-1">
                {exp.position}
              </h3>

              {/* Company */}
              <p className="text-xl md:text-2xl text-white font-semibold mb-4">
                {exp.company}
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-zinc-300 mb-6 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-zinc-300">
                    <span className="text-white font-bold mt-1">→</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded hover:border-zinc-600 transition-colors"
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
