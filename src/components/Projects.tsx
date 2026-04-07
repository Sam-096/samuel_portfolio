import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const { fadeUpOnScroll, hoverScale } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.project-card', 0.15);
    hoverScale('.project-card', 1.02, 0.3);
  }, [fadeUpOnScroll, hoverScale]);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-dark-900 relative overflow-hidden">
      {/* Section header with unique styling */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Featured <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Real projects solving real problems. From data pipelines to AI systems, here's what I've built.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-2 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
            <div className="w-2 h-8 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Asymmetric projects grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group relative h-full ${
                index === 0 ? 'md:col-span-1 lg:col-span-2' : ''
              } ${index % 3 === 1 ? 'md:mt-12' : ''} ${index % 3 === 2 ? 'md:mt-24' : ''}`}
            >
              {/* Card background glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Main card */}
              <div className="relative card overflow-hidden rounded-2xl border border-purple-500/20 group-hover:border-purple-500/60 transition-all duration-300 flex flex-col h-full">
                {/* Project Image - Larger for featured */}
                <div className={`relative bg-gradient-to-br from-dark-800 to-dark-700 overflow-hidden group-hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? 'h-72 md:h-96' : 'h-56 md:h-64'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>

                  {/* Project badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold text-purple-300 bg-purple-500/20 border border-purple-500/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm md:text-base mb-5 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights with bullets */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-2 mb-6 text-sm">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="text-slate-400 flex items-start gap-2.5">
                          <span className="text-purple-400 mt-1 font-bold">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 text-purple-200 border border-purple-500/30 hover:border-purple-500/60 rounded-full font-medium transition-all duration-300 truncate"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="text-xs px-3 py-1.5 text-slate-500">+{project.stack.length - 5}</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-purple-200 rounded-lg transition-all duration-300 text-xs font-semibold border border-purple-500/40 hover:border-purple-500/70"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-dark-700/50 hover:bg-dark-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 text-xs font-semibold border border-slate-700/50 hover:border-purple-500/40"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 md:mt-32 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-slate-400 text-sm md:text-base">
              Interested in these projects? Let's discuss what we can build together.
            </p>
            <a
              href="https://github.com/Sam-096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40"
            >
              <Github className="w-5 h-5" />
              Explore More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};