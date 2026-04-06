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
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Career Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-teal-400 to-blue-400 rounded-full"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="experience-card"
              >
                <div
                  className={`flex gap-8 items-start ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row'
                  }`}
                >
                  {/* Content - Left on desktop, right on mobile */}
                  <div className="flex-1 md:flex-1">
                    <div className="glass p-6 md:p-8 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-teal-300 mb-4">{exp.company}</p>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-slate-200 flex gap-2 items-start"
                          >
                            <span className="text-teal-400 mt-1">→</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs md:text-sm px-3 py-1 bg-slate-800/50 text-teal-300 border border-teal-500/30 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-teal-500 rounded-full border-4 border-slate-900 z-10"></div>
                  </div>

                  {/* Empty space for layout */}
                  <div className="hidden md:flex-1 md:flex"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};