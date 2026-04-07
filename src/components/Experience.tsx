import { useEffect } from 'react';
import { experiences } from '../data/experience';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Experience = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.experience-card', 0.2);
  }, [fadeUpOnScroll]);

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-bs-black mb-6 leading-tight">
          Career <span className="text-bs-yellow">Journey</span>
        </h2>
        <p className="text-lg text-bs-gray max-w-2xl mb-16 md:mb-20">
          2+ years of shipping production systems for fintech, e-commerce, and AI platforms.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card border-l-4 border-bs-yellow pl-6 md:pl-8 hover:pl-10 transition-all duration-300">
              {/* Period */}
              <span className="inline-block text-xs font-bold text-bs-yellow uppercase tracking-widest mb-3">
                {exp.period}
              </span>

              {/* Title and Company */}
              <h3 className="text-3xl md:text-4xl font-bold text-bs-black mb-2">{exp.position}</h3>
              <p className="text-xl text-bs-yellow font-bold mb-4">{exp.company}</p>

              {/* Description */}
              <p className="text-base text-bs-gray mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-bs-gray">
                    <span className="text-bs-yellow font-bold mt-1">→</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 border-2 border-bs-black text-bs-black rounded font-semibold hover:bg-bs-yellow hover:border-bs-yellow transition-all duration-300">
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
