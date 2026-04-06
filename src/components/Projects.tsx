import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const { fadeUpOnScroll, hoverScale } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.project-card', 0.1);
    hoverScale('.project-card', 1.03, 0.3);
  }, [fadeUpOnScroll, hoverScale]);

  return (
    <section id="projects" className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-slate-300 mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
          Showcasing some of my most impactful work across data analytics, full-stack development, and AI integration
        </p>

        {/* Projects Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group glass overflow-hidden rounded-lg md:rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-4 md:p-6">
                {/* Title */}
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs md:text-sm lg:text-base mb-3 md:mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-0.5 md:space-y-1 mb-3 md:mb-4 text-xs md:text-sm">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="text-teal-300 flex items-start gap-1.5 md:gap-2">
                        <span className="text-teal-500 mt-0.5 flex-shrink-0">✓</span>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="mb-4 md:mb-6">
                  <p className="text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 md:px-3 py-1 bg-gradient-to-r from-teal-500/30 to-blue-500/30 text-teal-200 border border-teal-500/50 rounded-full font-medium hover:border-teal-400 transition-colors truncate"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-xs text-slate-400 px-1">+{project.stack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 md:gap-3 mt-auto pt-3 md:pt-4 border-t border-white/10">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-2 md:px-4 py-2 bg-teal-500/20 hover:bg-teal-500/40 text-teal-300 rounded-lg transition-all duration-300 text-xs md:text-sm font-semibold"
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Live</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-2 md:px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-semibold"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">GitHub</span>
                      <span className="sm:hidden">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-slate-300 mb-3 md:mb-4 text-sm md:text-base">Want to see more?</p>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 text-sm md:text-base"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};