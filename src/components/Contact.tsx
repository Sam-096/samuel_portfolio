import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-dark-900 border-t border-purple-500/20 text-slate-300 py-20 md:py-24 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kottala Samuel
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Building intelligent, data-driven solutions through full-stack
              development and AI integration.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sam-096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kottala-samuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-white mb-5">
              Get In Touch
            </h4>
            <a
              href="mailto:kottala.samuel@gmail.com"
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-purple-200 border border-purple-500/40 hover:border-purple-500/70 rounded-lg transition-all duration-300 text-sm md:text-base font-semibold"
            >
              <Mail className="w-4 h-4" />
              Email me
            </a>
            <p className="text-slate-500 text-xs md:text-sm mt-4">
              Available for full-time, freelance, or contract work
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 pt-8 md:pt-12">
          {/* Bottom info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500">
            <p>© {currentYear} Kottala Samuel. All rights reserved.</p>
            <p>Designed & built with React, TypeScript, Tailwind CSS & GSAP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
