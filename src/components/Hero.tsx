import { ExternalLink, Github, Linkedin, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#e4ff00] border-b-2 border-black grid-pattern flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="max-w-7xl mx-auto text-center z-10 w-full">
        {/* Pixelated Headline */}
        <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-8 leading-tight tracking-tight transform hover:scale-105 transition-transform">
          KOTTALA<br />SAMUEL
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-6 leading-tight font-bold">
          Full Stack Developer • Data Analyst • AI Systems Engineer
        </p>

        {/* Bio */}
        <p className="text-base md:text-lg text-black max-w-3xl mx-auto mb-12 leading-relaxed">
          Results-driven Developer (2+ YOE) delivering SaaS platforms via React, Angular & Node.js. Bridges software engineering with data analytics (SQL/BI) and AI automation to build intelligent, workflow-driven enterprise dashboards.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-14 border-2 border-black p-8 bg-white">
          <div className="border-r-2 border-black pr-4">
            <p className="text-4xl md:text-5xl font-black text-black">2+</p>
            <p className="text-sm md:text-base text-black mt-2 font-bold">YEARS</p>
          </div>
          <div className="border-r-2 border-black pr-4">
            <p className="text-4xl md:text-5xl font-black text-black">6+</p>
            <p className="text-sm md:text-base text-black mt-2 font-bold">PROJECTS</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-black">80+</p>
            <p className="text-sm md:text-base text-black mt-2 font-bold">TECH STACK</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Primary Button - Neon Yellow */}
          <button
            onClick={scrollToProjects}
            className="group flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-[#e4ff00] text-black font-black border-2 border-black hover:bg-black hover:text-[#e4ff00] transition-all duration-200 text-base md:text-lg transform hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            VIEW WORK
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button - Black */}
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 border-2 border-black text-black bg-white hover:bg-black hover:text-[#e4ff00] font-black transition-all duration-200 text-base md:text-lg transform hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(228,255,0,0.5)]"
          >
            GITHUB
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-black hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-black hover:text-white" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="border-2 border-black p-2 bg-white">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
