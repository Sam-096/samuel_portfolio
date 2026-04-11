import React, { useEffect } from "react";
import { skillCategories } from "../data/skills";
import { useGSAPScroll } from "../hooks/useGSAPScroll";
import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code,
  Server,
  GitBranch,
  Sparkles,
  Zap,
  Brain,
  Layout,
  Palette,
  Cloud,
  Wand2,
  Network,
  FileText,
  Settings,
  CheckSquare,
  Smartphone,
  Layers,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiAngular,
  SiMui,
  SiTailwindcss,
  SiSass,
  SiHtml5,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiSupabase,
  SiGooglecloud,
  SiGithub,
  SiNetlify,
  SiSwagger,
  SiCpanel,
  SiRender,
  SiGit,
  SiAnthropic,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

// ─── Custom brand SVG icons not available in react-icons/si ─────────────────

const TableauIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z" />
  </svg>
);

const PowerBIIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.501 16h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 12.496c0 0 0 0 0 0 0 0.69 0.559 1.25 1.25 1.25 0 0 0 0 0 0h8.747v-13.746c0-0.69-0.559-1.25-1.25-1.25v0zM19.749 8.502h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 5.623h2.499c1.035 0.001 1.873 0.84 1.874 1.874v13.746h5.623v-21.244c0-0.69-0.559-1.25-1.25-1.25v0zM27.247 2.254v27.492c0 0 0 0 0 0 0 0.69-0.559 1.25-1.25 1.25 0 0-0 0-0 0h-4.374v-21.244c-0.001-1.035-0.84-1.873-1.874-1.874h-2.499v-5.623c0-0 0-0 0-0 0-0.69 0.559-1.25 1.25-1.25h7.498c0.69 0 1.25 0.559 1.25 1.25 0 0 0 0 0 0v0z" />
  </svg>
);

const DashboardIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 -0.5 25 25"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Icon maps ───────────────────────────────────────────────────────────────

type AnyIcon =
  | IconType
  | LucideIcon
  | (({
      size,
      className,
    }: {
      size?: number;
      className?: string;
    }) => React.ReactElement);

const skillIconMap: Record<string, AnyIcon> = {
  // Languages
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  SQL: SiPostgresql,
  // Frontend
  React: SiReact,
  "Angular 16-21": SiAngular,
  "Material UI": SiMui,
  "Tailwind CSS": SiTailwindcss,
  SCSS: SiSass,
  HTML5: SiHtml5,
  CSS3: Palette,
  GSAP: SiGreensock,
  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "Spring Boot": SiSpringboot,
  "REST APIs": Network,
  // Databases
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  "Cloud SQL": SiGooglecloud,
  DB2: Database,
  Excel: FileSpreadsheet,
  // Cloud & Tools
  Azure: Cloud,
  GCP: SiGooglecloud,
  GitHub: SiGithub,
  Netlify: SiNetlify,
  Render: SiRender,
  Swagger: SiSwagger,
  cPanel: SiCpanel,
  // BI & ETL
  Tableau: TableauIcon,
  "Power BI": PowerBIIcon,
  Dashboards: DashboardIcon,
  Reports: FileText,
  // AI & Integration
  "Claude API": SiAnthropic,
  "Anthropic MCP": SiAnthropic,
  "LLM Integration": Zap,
  DistilBERT: Brain,
  // Practices
  Agile: CheckSquare,
  "Version Control": SiGit,
  "Responsive UI": Smartphone,
  "Lazy Loading": Zap,
  "State Management": Layers,
};

// Category header icons (Lucide only)
const catIconMap: Record<string, LucideIcon> = {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code,
  Server,
  GitBranch,
  Sparkles,
  Zap,
  Brain,
  Layout,
  Palette,
  Cloud,
  Wand2,
  Network,
  FileText,
  Settings,
  CheckSquare,
  Smartphone,
  Layers,
};

export const Skills = () => {
  const { fadeUpOnScroll } = useGSAPScroll();

  useEffect(() => {
    fadeUpOnScroll(".skill-card", 0.1);
  }, [fadeUpOnScroll]);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#e4ff00] border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 border-2 border-black p-8 bg-black">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#e4ff00] mb-4 tracking-tight uppercase">
            TECHNICAL SKILLS
          </h2>
          <p className="text-lg text-[#e4ff00] font-bold">
            Always Exploring. Always shipping. Always learning. To Fulfill
            Clients Requirements.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {skillCategories.map((category, idx) => {
            const isBlackCard = idx === 1 || idx === 4;
            // Default text colour based on card background; turns yellow when card is hovered
            const textClass = isBlackCard
              ? "text-[#e4ff00] group-hover:text-[#e4ff00]"
              : "text-black group-hover:text-[#e4ff00]";
            const CatIcon =
              catIconMap[category.icon as keyof typeof catIconMap];

            return (
              <div
                key={category.id}
                // Single `group` here — all hover effects respond to THIS card being hovered, nothing else
                className={`skill-card group border-2 border-black p-6 md:p-8 transition-colors duration-200
                  hover:bg-black hover:border-[#e4ff00]
                  ${isBlackCard ? "bg-black" : "bg-white"}
                  ${idx % 3 !== 2 ? "lg:border-r-0" : ""}
                  ${idx % 2 === 0 ? "md:border-r-0 lg:border-r-[inherit]" : ""}
                  ${idx < 6 ? "lg:border-b-0" : ""}`}
              >
                {/* Category Title */}
                <h3
                  className={`font-display text-xl md:text-2xl font-black mb-6 uppercase border-b-2 pb-4 flex items-center gap-2 transition-colors duration-200
                    ${
                      isBlackCard
                        ? "text-[#e4ff00] border-[#e4ff00] group-hover:text-[#e4ff00] group-hover:border-[#e4ff00]"
                        : "text-black border-black group-hover:text-[#e4ff00] group-hover:border-[#e4ff00]"
                    }`}
                >
                  {CatIcon && (
                    <CatIcon
                      size={24}
                      className={`flex-shrink-0 transition-colors duration-200 ${
                        isBlackCard ? "text-[#e4ff00]" : "text-black"
                      } group-hover:text-[#e4ff00]`}
                    />
                  )}
                  {category.name}
                </h3>

                {/* Skills List — NO hover on li/span, only card-level group-hover */}
                <ul className="space-y-3">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skillIconMap[skill.name] as
                      | AnyIcon
                      | undefined;

                    return (
                      <li key={index} className="flex items-center gap-3">
                        {SkillIcon ? (
                          <SkillIcon
                            size={17}
                            className={`flex-shrink-0 transition-colors duration-200 ${
                              isBlackCard ? "text-white" : "text-black"
                            } group-hover:text-[#e4ff00]`}
                          />
                        ) : (
                          <span
                            className={`w-2 h-2 flex-shrink-0 transition-colors duration-200 ${
                              isBlackCard ? "bg-white" : "bg-black"
                            } group-hover:bg-[#e4ff00]`}
                          />
                        )}
                        <span
                          className={`font-mono text-sm uppercase tracking-wider font-semibold transition-colors duration-200 ${textClass}`}
                        >
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
