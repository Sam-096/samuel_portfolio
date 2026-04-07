import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-950 border-t border-slate-800 text-slate-300 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Kottala Samuel
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building intelligent, data-driven solutions through full-stack
              development and AI integration.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sam-096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kottala-samuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <a
              href="mailto:kottala.samuel@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/40 text-teal-300 rounded-lg transition-all duration-300 text-sm font-semibold"
            >
              <Mail className="w-4 h-4" />
              kottala.samuel@gmail.com
            </a>
            <p className="text-slate-500 text-xs mt-4">
              Available for full-time, freelance, or contract work
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {currentYear} Kottala Samuel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
