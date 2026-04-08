import { Mail } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-black border-t-2 border-black text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b-2 border-[#e4ff00] pb-16">
          {/* Brand */}
          <div className="border-2 border-[#e4ff00] p-6 bg-black">
            <h3 className="text-4xl md:text-5xl font-black text-[#e4ff00] mb-4 uppercase">
              KOTTALA
            </h3>
            <p className="text-base md:text-lg text-[#e4ff00] font-bold leading-relaxed">
              Building intelligent systems through production-grade engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-2 border-[#e4ff00] p-6 bg-black">
            <h4 className="text-lg font-black text-[#e4ff00] mb-6 uppercase tracking-widest border-b-2 border-[#e4ff00] pb-3">
              Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#projects"
                  className="text-[#e4ff00] font-black text-sm uppercase transition-all"
                >
                  → PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sam-096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e4ff00] font-black text-sm uppercase transition-all"
                >
                  → GITHUB
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kottala-samuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e4ff00] font-black text-sm uppercase transition-all"
                >
                  → LINKEDIN
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="border-2 border-[#e4ff00] p-6 bg-[#e4ff00] text-black">
            <h4 className="text-lg font-black text-black mb-6 uppercase tracking-widest border-b-2 border-black pb-3">
              Get In Touch
            </h4>
            <a
              href="mailto:kottala.samuel@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black text-[#e4ff00] font-black border-2 border-black hover:bg-[#e4ff00] hover:text-black transition-all text-sm uppercase transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              EMAIL
            </a>
            <p className="text-black text-sm mt-4 font-black">
              Open to opportunities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#e4ff00] pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-[#e4ff00] font-bold uppercase">
            <p>© {currentYear} KOTTALA SAMUEL. ALL RIGHTS RESERVED.</p>
            <p>
              <span className="text-[#ffffff]">OPEN FOR WORK</span> • FULL-TIME
              • FREELANCE • CONTRACT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
