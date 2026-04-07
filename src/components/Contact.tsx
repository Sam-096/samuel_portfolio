import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-dark-950 border-t border-zinc-800 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 md:mb-20">
          {/* Brand */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kottala Samuel
            </h3>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
              Building intelligent, data-driven systems through production-grade engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group font-medium">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Projects
                </a>
              </li>
              <li>
                <a href="https://github.com/Sam-096" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group font-medium">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kottala-samuel" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group font-medium">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Get In Touch</h4>
            <a
              href="mailto:kottala.samuel@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors group text-base"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <p className="text-zinc-500 text-sm mt-4 font-medium">Available for opportunities</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-zinc-500 font-medium">
            <p>© {currentYear} Kottala Samuel. All rights reserved.</p>
            <p>Engineered for impact • Built with React, TypeScript & performance</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
