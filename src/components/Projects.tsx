import { useEffect } from "react";
import { projects } from "../data/projects";
import { useGSAPScroll } from "../hooks/useGSAPScroll";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll(".project-card", 0.12);
  }, [fadeUpOnScroll]);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 border-2 border-black p-8 bg-[#e4ff00]">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="text-lg text-black font-bold">
            Production applications. Real-world scale. Intelligent systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`project-card group border-2 border-black p-6 md:p-8 flex flex-col h-full bg-white hover:shadow-xl hover:border-[#e4ff00] transition-all duration-200 card-dotted ${
                idx % 2 === 0 ? "md:border-r-0" : ""
              } ${idx < 3 ? "md:border-b-0 lg:border-b-2" : ""}`}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 border-2 border-black overflow-hidden mb-6 bg-black flex items-center justify-center hover:bg-[#e4ff00] transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="flex items-center justify-center w-full h-full bg-black text-[#e4ff00] font-black text-center px-4 text-sm">${project.title}</div>`;
                    }
                  }}
                />
              </div>

              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 uppercase">
                {project.title}
                <div className="flex flex-wrap gap-2">
                  {project.status && (
                    <span className="text-xs px-3 py-2 border-2 border-black font-bold uppercase transition-all bg-[#e4ff00] text-black hover:bg-black hover:text-[#e4ff00]">
                      {project.status}
                    </span>
                  )}
                </div>
              </h3>

              {/* Description */}
              <p className="text-base text-black mb-4 flex-1 leading-relaxed font-semibold">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-2 mb-6 text-sm border-l-2 border-black pl-4">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-black font-bold">
                      → {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              <div className="mb-6 border-t-2 border-black pt-4">
                <p className="text-xs font-black text-black uppercase tracking-wider mb-3">
                  STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-2 border-2 border-black font-bold uppercase transition-all ${
                        i % 2 === 1
                          ? "bg-[#e4ff00] text-black hover:bg-black hover:text-[#e4ff00]"
                          : "bg-white text-black hover:bg-black hover:text-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs font-black text-black px-2 py-2">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t-2 border-black">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#e4ff00] text-black font-black border-2 border-black hover:bg-black hover:text-[#e4ff00] transition-all text-sm uppercase"
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-black text-black bg-white font-black hover:bg-black hover:text-white transition-all text-sm uppercase"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 border-2 border-black bg-black text-center">
          <p className="text-[#e4ff00] font-black text-lg mb-6 uppercase">
            WANT MORE?
          </p>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#e4ff00] text-black font-black border-2 border-black hover:bg-black hover:text-[#e4ff00] transition-all text-base uppercase transform hover:scale-105"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};
