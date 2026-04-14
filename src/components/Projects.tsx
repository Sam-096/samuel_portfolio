import { useEffect } from "react";
import { projects } from "../data/projects";
import { useGSAPScroll } from "../hooks/useGSAPScroll";
import { ExternalLink, Github } from "lucide-react";

// Map project ids to short category subtitles shown under the title.
const projectSubtitle: Record<string, string> = {
  "1": "Warehouse Management · AI",
  "2": "Education Analytics",
  "3": "Fintech SaaS · GST",
  "4": "E-commerce · B2B/B2C",
  "5": "ML · NLP Pipeline",
  "6": "Library Analytics",
};

// Map project ids to an absolute year so recruiters get a temporal anchor.
const projectYear: Record<string, string> = {
  "1": "2026",
  "2": "2025",
  "3": "2025",
  "4": "2025",
  "5": "2024",
  "6": "2024",
};

export const Projects = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll(".project-card", 0.12);
  }, [fadeUpOnScroll]);

  const total = projects.length;

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 border-2 border-black p-8 bg-[#e4ff00]">
          <h2 className="font-display text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            FEATURED PROJECTS
          </h2>
          <p className="text-lg text-black font-bold">
            Production applications. Real-world scale. Intelligent systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, idx) => {
            const index = String(idx + 1).padStart(2, "0");
            const totalStr = String(total).padStart(2, "0");
            const subtitle = projectSubtitle[project.id] ?? "";
            const year = projectYear[project.id] ?? "";

            return (
              <div
                key={project.id}
                className={`project-card group border-2 border-black p-6 md:p-8 flex flex-col h-full bg-white hover:bg-[#e4ff00] transition-colors duration-200 ${
                  idx % 2 === 0 ? "md:border-r-0" : ""
                } ${idx < 3 ? "md:border-b-0 lg:border-b-2" : ""}`}
              >
                {/* Metadata line: index + status + year (IBM Plex Mono) */}
                <div className="flex items-center justify-between font-mono text-xs text-black mb-6 pb-4 border-b-2 border-black uppercase tracking-widest">
                  <span className="font-bold">
                    {index} / {totalStr}
                  </span>
                  <span className="font-bold">
                    {project.status ?? ""}
                    {project.status && year ? " · " : ""}
                    {year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-black text-black mb-2 uppercase leading-tight tracking-tight">
                  {project.title}
                </h3>

                {/* Subtitle (mono, tiny caps) */}
                {subtitle && (
                  <p className="font-mono text-xs text-black uppercase tracking-widest font-bold mb-6">
                    {subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-base text-black mb-6 leading-relaxed font-semibold">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-2 mb-8 text-sm flex-1">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="text-black font-bold">
                        → {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stack — single mono line, comma-separated */}
                <div className="mb-6 pt-4 border-t-2 border-black">
                  <p className="font-mono text-xs font-black text-black uppercase tracking-widest mb-2">
                    STACK
                  </p>
                  <p className="font-mono text-sm text-black leading-relaxed">
                    {project.stack.join(" · ")}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t-2 border-black">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black text-[#e4ff00] font-black border-2 border-black hover:bg-[#e4ff00] hover:text-black transition-all text-sm uppercase"
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
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 border-2 border-black bg-black text-center">
          <p className="text-[#e4ff00] font-black text-lg mb-6 uppercase">WANT MORE?</p>
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
