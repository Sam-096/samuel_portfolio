import { useEffect } from 'react';
import { Github, Linkedin, Download, ArrowDown, Code2, Database, Zap, Layers } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  useEffect(() => {
    // Animate hero text on mount
    setTimeout(() => {
      const headlineSpans = document.querySelectorAll('.headline span');
      const subheadlineSpans = document.querySelectorAll('.subheadline span');
      const bioElement = document.querySelector('.bio');
      const ctaButtons = document.querySelectorAll('.cta-button');

      const timeline = gsap.timeline();

      // Animate headline
      timeline.from(
        headlineSpans,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
        },
        0
      );

      // Animate subheadline
      timeline.from(
        subheadlineSpans,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.03,
          ease: 'power2.out',
        },
        0.3
      );

      // Animate bio
      timeline.from(
        bioElement,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.6
      );

      // Animate CTA buttons
      timeline.from(
        ctaButtons,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        },
        0.9
      );
    }, 100);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.currentTarget.href.includes('http') && !e.currentTarget.href.includes('blob')) {
      const resumeExists = fetch('/resume.pdf', { method: 'HEAD' })
        .then((res) => res.ok)
        .catch(() => false);

      resumeExists.then((exists) => {
        if (!exists) {
          alert('Resume file will be added soon. Please check back later or visit my GitHub profile for more information.');
          e.preventDefault();
        }
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Floating skill badges - visible on desktop, hidden/repositioned on mobile */}
      <div className="absolute top-20 md:top-32 left-2 md:left-10 glass px-3 md:px-4 py-2 rounded-lg text-xs md:text-base flex items-center gap-2 animate-bounce" style={{ animationDelay: '0s' }}>
        <Code2 className="w-3 h-3 md:w-5 md:h-5 text-teal-400 flex-shrink-0" />
        <span className="text-slate-300 hidden sm:inline">React & Node.js</span>
        <span className="text-slate-300 sm:hidden">React</span>
      </div>

      <div className="absolute top-40 md:top-42 right-2 md:right-10 glass px-3 md:px-4 py-2 rounded-lg text-xs md:text-base flex items-center gap-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Layers className="w-3 h-3 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
        <span className="text-slate-300 hidden sm:inline">Angular 17+</span>
        <span className="text-slate-300 sm:hidden">Angular</span>
      </div>

      <div className="absolute bottom-40 md:bottom-32 left-2 md:left-10 glass px-3 md:px-4 py-2 rounded-lg text-xs md:text-base flex items-center gap-2 animate-bounce" style={{ animationDelay: '1s' }}>
        <Database className="w-3 h-3 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
        <span className="text-slate-300 hidden sm:inline">PostgreSQL</span>
        <span className="text-slate-300 sm:hidden">SQL</span>
      </div>

      <div className="absolute bottom-32 md:bottom-40 right-2 md:right-10 glass px-3 md:px-4 py-2 rounded-lg text-xs md:text-base flex items-center gap-2 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <Zap className="w-3 h-3 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
        <span className="text-slate-300 hidden sm:inline">AI Integration</span>
        <span className="text-slate-300 sm:hidden">AI</span>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Headline */}
        <h1 className="headline text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
          {['Kottala', 'Samuel'].map((word, i) => (
            <span key={i} className="inline-block mr-2 md:mr-3 text-white">
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <h2 className="subheadline text-sm sm:text-lg md:text-3xl font-light mb-6 md:mb-8 text-teal-400 px-2">
          {[
            'Data',
            'Analyst',
            '|',
            'Full',
            'Stack',
            'Developer',
            '|',
            'AI',
            'Systems',
            'Engineer',
          ].map((word, i) => (
            <span key={i} className="inline-block mr-1.5 md:mr-2">
              {word}
            </span>
          ))}
        </h2>

        {/* Bio */}
        <p className="bio text-sm sm:text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          Results-driven Developer (2+ YOE) delivering SaaS platforms via React, Angular & Node.js. Bridges software engineering with data analytics (SQL/BI) and AI automation to build intelligent enterprise dashboards.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-2 md:p-3 hover:bg-white/20 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-2 md:p-3 hover:bg-white/20 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap px-2">
          <button
            onClick={scrollToProjects}
            className="cta-button group flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 text-sm md:text-base"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download="Kottala-Samuel-Resume.pdf"
            onClick={handleResumeClick}
            className="cta-button flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 glass hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};