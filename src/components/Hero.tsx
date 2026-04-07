import { ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-dark-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="max-w-7xl mx-auto text-center z-10 w-full">
        {/* Headline - Large and engineered */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight tracking-tight">
          Full Stack Developer
          <br />
          <span className="text-zinc-400">&amp; AI Systems Engineer</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Building intelligent, data-driven systems that scale. 2+ years shipping production platforms with React, Node.js, Python, and AI automation.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto mb-14">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-white">2+</p>
            <p className="text-sm md:text-base text-zinc-500 mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-white">6+</p>
            <p className="text-sm md:text-base text-zinc-500 mt-2">Live Projects</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-white">80+</p>
            <p className="text-sm md:text-base text-zinc-500 mt-2">Technologies</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToProjects}
            className="group flex items-center justify-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-200 text-base md:text-lg"
          >
            View Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 md:px-10 py-3 md:py-4 border border-zinc-700 text-white hover:border-zinc-600 hover:bg-zinc-900/50 font-semibold rounded-lg transition-colors duration-200 text-base md:text-lg"
          >
            GitHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-zinc-700 rounded-lg hover:border-zinc-600 hover:bg-zinc-900/50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-zinc-700 rounded-lg hover:border-zinc-600 hover:bg-zinc-900/50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold">Scroll to explore</p>
            <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
