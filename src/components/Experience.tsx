import { useEffect } from 'react';
import { experiences } from '../data/experience';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export const Experience = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.experience-card', 0.2);
  }, [fadeUpOnScroll]);

  return (
    <section className="py-24 md:py-40 px-4 md:px-8 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <h2 className="text-6xl md:text-7xl font-black text-bs-black mb-6 leading-tight">
            Career <span className="text-bs-yellow">Journey</span>
          </h2>
          <p className="text-xl md:text-2xl text-bs-gray max-w-3xl leading-relaxed font-light">
            2+ years of shipping production systems for fintech, e-commerce, and AI platforms. From startups to scale.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card border-l-4 border-bs-yellow pl-8 md:pl-10 hover:pl-12 transition-all duration-300">
              {/* Period */}
              <span className="inline-block text-sm font-black text-bs-yellow uppercase tracking-widest mb-4">
                {exp.period}
              </span>

              {/* Title and Company */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-bs-black mb-3">{exp.position}</h3>
              <p className="text-2xl md:text-3xl text-bs-yellow font-black mb-6">{exp.company}</p>

              {/* Description */}
              <p className="text-lg md:text-xl text-bs-gray mb-8 leading-relaxed font-medium max-w-3xl">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-8">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg md:text-xl text-bs-gray font-medium">
                    <span className="text-bs-yellow font-black text-2xl leading-none mt-1">→</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-sm px-4 py-2.5 border-2 border-bs-black text-bs-black rounded-lg font-bold hover:bg-bs-yellow hover:border-bs-yellow transition-all duration-300">
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
