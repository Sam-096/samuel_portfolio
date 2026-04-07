import { useEffect } from "react";
import { skillCategories } from "../data/skills";
import { useGSAPScroll } from "../hooks/useGSAPScroll";

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
          <h2 className="text-5xl md:text-7xl font-black text-[#e4ff00] mb-4 tracking-tight uppercase">
            TECHNICAL SKILLS
          </h2>
          <p className="text-lg text-[#e4ff00] font-bold">
            Always Exploring. Always shipping. Always learning. To Fulfill
            Clients Requriments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {skillCategories.map((category, idx) => (
            <div
              key={category.id}
              className={`skill-card border-2 border-black p-6 md:p-8 transition-all duration-200 card-dotted ${
                idx === 1 || idx === 4
                  ? "bg-black hover:border-[#e4ff00]"
                  : "bg-white hover:bg-black"
              } ${
                idx % 2 === 0 ? "md:border-r-0" : ""
              } ${idx < 3 ? "md:border-b-0 lg:border-b-2" : ""}`}
            >
              {/* Category Title */}
              <h3
                className={`text-xl md:text-2xl font-black mb-6 uppercase border-b-2 pb-4 transition-colors ${
                  idx === 1 || idx === 4
                    ? "text-[#e4ff00] border-[#e4ff00] hover:text-black"
                    : "text-black border-black hover:text-[#e4ff00]"
                }`}
              >
                {category.name}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <span
                      className={`w-2 h-2 flex-shrink-0 transition-colors ${
                        idx === 1 || idx === 4
                          ? "bg-[#e4ff00] group-hover:bg-black"
                          : "bg-black group-hover:bg-[#e4ff00]"
                      }`}
                    ></span>
                    <span
                      className={`text-sm md:text-base font-semibold transition-all group-hover:font-black ${
                        idx === 1 || idx === 4
                          ? "text-[#e4ff00] group-hover:text-black"
                          : "text-black group-hover:text-[#e4ff00]"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
