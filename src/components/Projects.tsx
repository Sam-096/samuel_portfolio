import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const Projects = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll('.project-card', 0.2);
  }, [fadeUpOnScroll]);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <h2 className="text-5xl md:text-6xl font-bold text-bs-black mb-6 leading-tight">
          Featured <span className="text-bs-yellow">Projects</span>
        </h2>
        <p className="text-lg text-bs-gray max-w-2xl mb-16 md:mb-20">
          Real problems, real solutions. From data pipelines to AI systems.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group border-2 border-bs-black p-6 md:p-8 rounded-lg hover:border-bs-yellow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 rounded-lg overflow-hidden mb-6 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <h3 className="text-xl md:text-2xl font-bold text-bs-black mb-3 group-hover:text-bs-yellow transition-colors">
                {project.title}
              </h3>

              <p className="text-base text-bs-gray mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-2 mb-6 text-sm">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-bs-gray flex items-start gap-2">
                      <span className="text-bs-yellow font-bold">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs font-bold text-bs-black uppercase tracking-widest mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-bs-yellow text-bs-black rounded font-semibold">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && <span className="text-xs text-bs-gray px-2 py-1.5">+{project.stack.length - 4}</span>}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-bs-black">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-bs-yellow text-bs-black font-bold rounded hover:opacity-90 transition-all duration-300 text-sm"
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-bs-black text-bs-black font-bold rounded hover:bg-bs-black hover:text-white transition-all duration-300 text-sm"
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
        <div className="mt-20 md:mt-28 text-center">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-bs-black text-white font-bold rounded-lg hover:translate-y-0.5 transition-all duration-300 text-lg group"
          >
            Explore on GitHub
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
