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
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 md:mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-slate-400 mb-16 md:mb-20 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Showcasing some of my most impactful work across data analytics, full-stack development, and AI integration
        </p>

        {/* Projects Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border-purple-500/30 hover:border-purple-500/60 flex flex-col h-full"
            >
              {/* Project Image - Enlarged */}
              <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-dark-800 to-dark-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-50"></div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                {/* Title */}
                <h3 className="text-lg md:text-2xl lg:text-2xl font-bold text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-5 line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1 md:space-y-1.5 mb-5 md:mb-6 text-xs md:text-sm">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="text-purple-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-1 flex-shrink-0 font-bold">→</span>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="mb-6 md:mb-8">
                  <p className="text-xs font-semibold text-purple-300 mb-2 uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 md:px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 border border-purple-500/40 hover:border-purple-500/70 rounded-full font-medium transition-all duration-300 truncate"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-xs text-slate-400 px-2 py-1.5">+{project.stack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto pt-4 md:pt-6 border-t border-purple-500/20">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 md:px-5 py-2.5 md:py-3 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-purple-200 rounded-lg transition-all duration-300 text-xs md:text-sm font-semibold border border-purple-500/30 hover:border-purple-500/60"
                    >
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Live</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 md:px-5 py-2.5 md:py-3 bg-dark-700/70 hover:bg-dark-700 text-slate-200 hover:text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-semibold border border-purple-500/20 hover:border-purple-500/40"
                    >
                      <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
        <div className="mt-20 md:mt-28 text-center">
          <p className="text-slate-400 mb-4 md:mb-6 text-sm md:text-base">Want to see more?</p>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base hover:shadow-lg hover:shadow-purple-500/30"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};