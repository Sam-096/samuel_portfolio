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
    <section id="projects" className="py-24 md:py-40 px-4 md:px-8 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 md:mb-28">
          <h2 className="text-6xl md:text-7xl font-black text-bs-black mb-6 leading-tight">
            Featured <span className="text-bs-yellow">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-bs-gray max-w-3xl leading-relaxed font-light">
            Real problems, real solutions. From data pipelines to AI systems. Each project shipped to production, solving real business challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group border-3 border-bs-black p-8 md:p-10 rounded-xl hover:border-bs-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image - Reduced size with visible fallback */}
              <div className="relative h-56 md:h-64 rounded-lg overflow-hidden mb-8 bg-gray-300 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback for missing images
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"><span class="text-gray-600 font-semibold">${project.title}</span></div>`;
                    }
                  }}
                />
              </div>

              {/* Project Content */}
              <h3 className="text-2xl md:text-3xl font-black text-bs-black mb-4 group-hover:text-bs-yellow transition-colors line-clamp-2">
                {project.title}
              </h3>

              <p className="text-base md:text-lg text-bs-gray mb-6 flex-1 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-3 mb-8 text-base md:text-lg">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-bs-gray flex items-start gap-3 font-medium">
                      <span className="text-bs-yellow font-black text-xl">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-xs font-black text-bs-black uppercase tracking-widest mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-sm px-4 py-2.5 bg-bs-yellow text-bs-black font-black rounded-lg hover:shadow-lg transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && <span className="text-sm text-bs-gray px-2 py-2.5 font-bold">+{project.stack.length - 4}</span>}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-8 border-t-2 border-bs-black">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-bs-yellow text-bs-black font-black rounded-lg hover:shadow-lg transition-all duration-300 text-base hover:-translate-y-1 group"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-bs-black text-bs-black font-black rounded-lg hover:bg-bs-black hover:text-white transition-all duration-300 text-base hover:-translate-y-1 group"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-lg md:text-2xl text-bs-gray mb-8 font-medium">Want to see more?</p>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-6 md:py-8 bg-bs-black text-white font-black rounded-xl hover:shadow-2xl transition-all duration-300 text-lg md:text-2xl group hover:-translate-y-1"
          >
            Explore on GitHub
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
