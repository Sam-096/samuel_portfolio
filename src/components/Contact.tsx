import { Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bs-black border-t-4 border-bs-yellow text-white py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kottala <span className="text-bs-yellow">Samuel</span>
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Building intelligent, data-driven solutions through full-stack development and AI integration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-bs-yellow transition-colors flex items-center gap-2 group font-semibold">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Projects
                </a>
              </li>
              <li>
                <a href="https://github.com/Sam-096" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bs-yellow transition-colors flex items-center gap-2 group font-semibold">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kottala-samuel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bs-yellow transition-colors flex items-center gap-2 group font-semibold">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Get In Touch</h4>
            <a
              href="mailto:kottala.samuel@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 bg-bs-yellow text-bs-black font-bold rounded-lg hover:opacity-90 transition-all duration-300 group text-base"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <p className="text-gray-500 text-sm mt-4 font-semibold">Available for full-time, freelance, or contract work</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-700 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-semibold">
            <p>© {currentYear} Kottala Samuel. All rights reserved.</p>
            <p>Designed with bold vision • Built with React, TypeScript & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
