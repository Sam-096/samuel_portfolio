import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const Projects = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.project-card', 0.15);
  }, [fadeUpOnScroll]);

  return (
    <section id="projects" className="py-28 md:py-40 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl">
            Production applications delivering real value. Full-stack systems built for scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group card p-6 md:p-8 flex flex-col h-full hover:shadow-xl hover:shadow-white/5 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 rounded-lg overflow-hidden mb-6 bg-zinc-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="flex items-center justify-center w-full h-full bg-zinc-800/50"><span class="text-zinc-600 font-semibold text-center px-4">${project.title}</span></div>`;
                    }
                  }}
                />
              </div>

              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-base text-zinc-400 mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-2 mb-6 text-sm">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-zinc-400 flex items-start gap-2">
                      <span className="text-white mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded hover:border-zinc-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs text-zinc-600 px-2 py-1.5">+{project.stack.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-zinc-800">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-zinc-700 text-white hover:border-zinc-600 hover:bg-zinc-900 font-semibold rounded transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-zinc-400 mb-6 text-lg">Want to see more?</p>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors group text-base md:text-lg"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
