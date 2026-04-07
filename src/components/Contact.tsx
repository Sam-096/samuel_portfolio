import { Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bs-black border-t-4 border-bs-yellow text-white py-24 md:py-32 px-4 md:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mb-20 md:mb-28">
          {/* Brand */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Kottala <span className="text-bs-yellow">Samuel</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              Full Stack Developer & AI Systems Engineer. Building intelligent, data-driven solutions through production-grade systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Links</h4>
            <ul className="space-y-5">
              <li>
                <a href="#projects" className="text-lg text-gray-400 hover:text-bs-yellow transition-colors flex items-center gap-3 group font-bold">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  Projects
                </a>
              </li>
              <li>
                <a href="https://github.com/Sam-096" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-bs-yellow transition-colors flex items-center gap-3 group font-bold">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kottala-samuel" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-bs-yellow transition-colors flex items-center gap-3 group font-bold">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Get In Touch</h4>
            <a
              href="mailto:kottala.samuel@gmail.com"
              className="inline-flex items-center gap-4 px-8 py-5 bg-bs-yellow text-bs-black font-black rounded-xl hover:shadow-2xl transition-all duration-300 group text-lg hover:-translate-y-1"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </a>
            <p className="text-gray-500 text-lg mt-6 font-bold">Available for full-time, freelance, or contract opportunities.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-700 pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-base text-gray-500 font-bold">
            <p>© {currentYear} Kottala Samuel. All rights reserved.</p>
            <p>Designed for impact • Built as Blacksmith.sh-inspired • Shipped to production</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
