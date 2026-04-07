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
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        {/* Section header with unique styling */}
        <div className="mb-20 md:mb-28">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Where</span> I've been
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            2+ years shipping production systems for fintech, e-commerce, and AI platforms. Each role shaped my approach to building.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, gradient on desktop */}
          <div className="timeline-line hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full opacity-80"></div>

          {/* Experience items */}
          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-card">
                {/* Mobile: single column, Desktop: alternating */}
                <div className={`flex gap-6 md:gap-12 lg:gap-16 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="card p-6 md:p-8 lg:p-10 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-xl">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <span className="text-xs md:text-sm font-semibold text-purple-300 bg-purple-500/20 px-3 md:px-4 py-1.5 rounded-full whitespace-nowrap border border-purple-500/40">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                        {exp.position}
                      </h3>

                      <p className="text-lg md:text-xl text-purple-300 mb-4 md:mb-6 font-semibold">{exp.company}</p>

                      <p className="text-sm md:text-base lg:text-lg text-slate-300 mb-5 md:mb-8 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-slate-200 flex gap-2.5 items-start text-sm md:text-base">
                            <span className="text-purple-400 mt-1.5 flex-shrink-0 font-bold">→</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 border border-purple-500/40 hover:border-purple-500/70 rounded-full font-medium transition-all duration-300 truncate"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - only visible on desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-purple-500 rounded-full border-4 border-dark-900 glow-purple"></div>
                  </div>

                  {/* Empty space for layout on desktop */}
                  <div className="hidden md:flex-1 lg:flex"></div>

                  {/* Mobile timeline indicator - visible only on mobile */}
                  <div className="md:hidden flex-shrink-0 w-1.5 h-full bg-gradient-to-b from-purple-500 to-purple-400 rounded-full ml-2 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};