import { useEffect } from 'react';
import { experiences } from '../data/experience';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import gsap from 'gsap';

export const Experience = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.experience-card', 0.15);

    // Animate timeline line
    const timelineDiv = document.querySelector('.timeline-line');
    if (timelineDiv) {
      gsap.from(timelineDiv, {
        scrollTrigger: {
          trigger: timelineDiv,
          start: 'top 70%',
          end: 'bottom 20%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
      });
    }
  }, [fadeUpOnScroll]);

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center">
          Career Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="timeline-line hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-teal-400 to-blue-400 rounded-full"></div>

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-card">
                {/* Mobile: single column, Desktop: alternating */}
                <div className={`flex gap-4 md:gap-8 lg:gap-12 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="glass p-4 md:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <span className="text-xs md:text-sm font-semibold text-teal-400 bg-teal-500/20 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                        {exp.position}
                      </h3>

                      <p className="text-base md:text-lg text-teal-300 mb-3 md:mb-4">{exp.company}</p>

                      <p className="text-xs md:text-sm lg:text-base text-slate-300 mb-4 md:mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-slate-200 flex gap-2 items-start text-xs md:text-sm">
                            <span className="text-teal-400 mt-1 flex-shrink-0">→</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 md:px-3 py-1 bg-slate-800/50 text-teal-300 border border-teal-500/30 rounded-full truncate"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - only visible on desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                    <div className="w-4 md:w-5 h-4 md:h-5 bg-teal-500 rounded-full border-4 border-slate-900"></div>
                  </div>

                  {/* Empty space for layout on desktop */}
                  <div className="hidden md:flex-1 lg:flex"></div>

                  {/* Mobile timeline indicator - visible only on mobile */}
                  <div className="md:hidden flex-shrink-0 w-1 h-full bg-gradient-to-b from-teal-500 to-teal-400 rounded-full ml-2 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};