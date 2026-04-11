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
  Lock,
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
  SiRedis,
  SiHuggingface,
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

const OllamaIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="50" cy="34" r="18" fill="none" stroke="currentColor" strokeWidth="6"/>
    <circle cx="33" cy="62" r="10" fill="none" stroke="currentColor" strokeWidth="5"/>
    <circle cx="67" cy="62" r="10" fill="none" stroke="currentColor" strokeWidth="5"/>
    <line x1="50" y1="52" x2="33" y2="52" stroke="currentColor" strokeWidth="5"/>
    <line x1="50" y1="52" x2="67" y2="52" stroke="currentColor" strokeWidth="5"/>
    <circle cx="44" cy="30" r="3" fill="currentColor"/>
    <circle cx="56" cy="30" r="3" fill="currentColor"/>
  </svg>
);

const AgileIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M15.3171203,20 L20.5,20 C20.7761424,20 21,20.2238576 21,20.5 C21,20.7761424 20.7761424,21 20.5,21 L3.5,21 C3.22385763,21 3,20.7761424 3,20.5 C3,20.2238576 3.22385763,20 3.5,20 L11.9975864,20 L11.9992783,19.9999948 C13.3169414,19.9980929 14.5879191,19.4831487 15.5355339,18.5355339 C17.4881554,16.5829124 17.4881554,13.4170876 15.5355339,11.4644661 C15.1550557,11.0839879 14.7285139,10.7776478 14.2738601,10.5454458 C14.254923,10.5373678 14.2363578,10.5280549 14.2182818,10.5174987 C12.5524962,9.69291702 10.5227538,9.8537508 8.99894709,11 L10.5,11 C10.7761424,11 11,11.2238576 11,11.5 C11,11.7761424 10.7761424,12 10.5,12 L7.5,12 C7.22385763,12 7,11.7761424 7,11.5 L7,8.5 C7,8.22385763 7.22385763,8 7.5,8 C7.77614237,8 8,8.22385763 8,8.5 L8,10.5276441 C9.46401314,9.21593206 11.4173682,8.74894646 13.2298049,9.12668728 C13.0840962,8.75531167 13,8.36566448 13,8 C13,6.34314575 14.3431458,5 16,5 L16.2928932,5 L16.1464466,4.85355339 C15.9511845,4.65829124 15.9511845,4.34170876 16.1464466,4.14644661 C16.3417088,3.95118446 16.6582912,3.95118446 16.8535534,4.14644661 L17.8535534,5.14644661 C18.0488155,5.34170876 18.0488155,5.65829124 17.8535534,5.85355339 L16.8535534,6.85355339 C16.6582912,7.04881554 16.3417088,7.04881554 16.1464466,6.85355339 C15.9511845,6.65829124 15.9511845,6.34170876 16.1464466,6.14644661 L16.2928932,6 L16,6 C14.8954305,6 14,6.8954305 14,8 C14,8.56129192 14.3301293,9.27278631 14.7516956,9.66637738 C15.2886433,9.94356402 15.792506,10.3072247 16.2426407,10.7573593 C18.5857864,13.1005051 18.5857864,16.8994949 16.2426407,19.2426407 C15.9569017,19.5283797 15.6466243,19.7813454 15.3171203,20 Z"/>
  </svg>
);

const StateManagementIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 -0.5 25 25" className={className} aria-hidden="true">
    <path d="m17.54 16.745c.893-.089 1.585-.837 1.585-1.746 0-.036-.001-.072-.003-.108v.005c-.047-.963-.834-1.726-1.801-1.736h-.065c-.968.036-1.739.829-1.739 1.802 0 .022 0 .044.001.067v-.003c.026.473.22.897.522 1.217l-.001-.001c-1.187 2.214-3.001 3.96-5.204 5.031l-.069.03c-1.192.66-2.614 1.048-4.127 1.048-.383 0-.761-.025-1.13-.073l.044.005c-1.361-.131-2.533-.844-3.277-1.884l-.009-.014c-.537-.755-.858-1.695-.858-2.711 0-.837.218-1.623.601-2.305l-.012.024c.547-1.036 1.293-1.898 2.194-2.562l.021-.014c-.171-.453-.324-.999-.432-1.56l-.011-.066c-4.683 3.349-4.208 7.93-2.786 10.095 1.243 1.586 3.159 2.596 5.311 2.596.098 0 .195-.002.292-.006h-.014c.035.001.077.001.119.001.647 0 1.276-.075 1.88-.216l-.056.011c4.008-.734 7.29-3.317 8.974-6.814l.032-.074z"/><path d="m23.18 12.799c-2.403-2.74-5.91-4.46-9.82-4.46-.119 0-.239.002-.357.005h.018-.538c-.283-.567-.86-.95-1.526-.95-.02 0-.039 0-.059.001h.003-.039c-.966.014-1.744.8-1.744 1.768 0 .029.001.057.002.085v-.004c.045.963.832 1.728 1.8 1.738h.079c.714-.028 1.317-.472 1.577-1.094l.004-.012h.585c2.554.003 4.924.787 6.884 2.128l-.042-.027c1.531.98 2.713 2.388 3.392 4.055l.021.058c.26.542.411 1.178.411 1.849 0 .71-.169 1.38-.47 1.972l.011-.025c-.777 1.586-2.379 2.658-4.231 2.658-.068 0-.135-.001-.202-.004h.01c-1.137-.024-2.21-.274-3.183-.707l.052.021c-.379.316-1.011.836-1.47 1.153 1.214.596 2.638.959 4.143.994h.012c.059.002.128.003.197.003 2.552 0 4.787-1.355 6.026-3.384l.018-.031c.342-.811.54-1.753.54-2.742 0-1.98-.796-3.774-2.085-5.079l.001.001-.015.032z"/><path d="m6.844 17.316c.044.964.833 1.731 1.803 1.738h.064c.968-.033 1.741-.827 1.741-1.8 0-.99-.799-1.794-1.788-1.801h-.067c-.01-.001-.022-.001-.033-.001-.073 0-.143.011-.209.033l.005-.001c-1.07-1.741-1.703-3.85-1.703-6.107 0-.364.016-.724.049-1.079l-.003.046c.091-1.906.791-3.633 1.907-5.007l-.012.016c.991-1.071 2.387-1.753 3.944-1.803h.009c3.412-.064 4.835 4.188 4.945 5.878l1.582.473c-.368-5.181-3.59-7.901-6.671-7.901-3.132.163-5.731 2.27-6.622 5.131l-.014.052c-.438 1.262-.692 2.716-.692 4.229 0 2.588.741 5.003 2.021 7.044l-.032-.055c-.143.216-.228.481-.228.766 0 .053.003.105.009.156l-.001-.006z"/>
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
  Recharts: BarChart3,
  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "Spring Boot": SiSpringboot,
  "REST APIs": Network,
  "JWT Auth": Lock,
  Redis: SiRedis,
  "Sequelize ORM": Database,
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
  "Hugging Face": SiHuggingface,
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
  "Prompt Engineering": Brain,
  "Sarvam AI": Sparkles,
  Ollama: OllamaIcon,
  Groq: Zap,
  DistilBERT: Brain,
  "Sentence Transformers": Brain,
  RAG: Layers,
  // Practices
  Agile: AgileIcon,
  "Version Control": SiGit,
  "Responsive UI": Smartphone,
  "Lazy Loading": Zap,
  "State Management": StateManagementIcon,
  "Claude Code Certified": Sparkles,
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
