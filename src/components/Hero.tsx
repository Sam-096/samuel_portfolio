import { useEffect, useRef } from 'react';
import { Github, Linkedin, Download, ArrowDown, Code2, Database, Zap, Layers } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero text on mount
    setTimeout(() => {
      const headlineSpans = document.querySelectorAll('.headline span');
      const subheadlineSpans = document.querySelectorAll('.subheadline span');
      const bioElement = document.querySelector('.bio');
      const ctaButtons = document.querySelectorAll('.cta-button');

      const timeline = gsap.timeline();

      // Animate headline - faster (0.5s)
      timeline.from(
        headlineSpans,
        {
          opacity: 0,
          y: 40,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.out',
        },
        0
      );

      // Animate subheadline - faster (0.4s)
      timeline.from(
        subheadlineSpans,
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power3.out',
        },
        0.15
      );

      // Animate bio - 0.6s
      timeline.from(
        bioElement,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power3.out',
        },
        0.4
      );

      // Animate CTA buttons - faster (0.4s)
      timeline.from(
        ctaButtons,
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0.7
      );
    }, 100);

    // Faster floating animation for badges (2-3s instead of 4-6s)
    if (badgesRef.current) {
      const badges = badgesRef.current.querySelectorAll('.floating-badge');
      badges.forEach((badge, index) => {
        gsap.to(badge, {
          y: -20,
          rotate: 5,
          duration: 2.5 + index * 0.3, // Faster: 2.5-3.4 seconds
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        });
      });
    }
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
    <section className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center px-4 py-12 md:py-16 relative overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating skill badges - Repositioned for better mobile */}
      <div ref={badgesRef} className="absolute inset-0 pointer-events-none">
        {/* Hidden on mobile, visible on tablet+ */}
        <div className="floating-badge hidden sm:block absolute top-16 left-4 md:left-8 lg:left-12">
          <div className="card px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm flex items-center gap-2 border border-purple-500/40 hover:border-purple-500/60 transition-colors">
            <Code2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span className="text-slate-200 whitespace-nowrap font-medium">React</span>
          </div>
        </div>

        <div className="floating-badge hidden md:block absolute top-40 right-6 lg:right-12">
          <div className="card px-4 py-2 rounded-lg text-sm flex items-center gap-2 border border-cyan-500/40 hover:border-cyan-500/60 transition-colors">
            <Layers className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-slate-200 font-medium">Angular</span>
          </div>
        </div>

        <div className="floating-badge hidden sm:block absolute bottom-40 left-6 md:left-8 lg:left-12">
          <div className="card px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm flex items-center gap-2 border border-purple-500/40 hover:border-purple-500/60 transition-colors">
            <Database className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span className="text-slate-200 whitespace-nowrap font-medium">PostgreSQL</span>
          </div>
        </div>

        <div className="floating-badge hidden lg:block absolute bottom-32 right-12">
          <div className="card px-4 py-2 rounded-lg text-sm flex items-center gap-2 border border-orange-500/40 hover:border-orange-500/60 transition-colors">
            <Zap className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-slate-200 font-medium">AI & Node.js</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        {/* Headline - Larger and bolder */}
        <h1 className="headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-5 lg:mb-6 leading-tight px-2 text-white">
          {['Kottala', 'Samuel'].map((word, i) => (
            <span key={i} className="inline-block mr-1.5 sm:mr-2 md:mr-3">
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline - Colored gradient text */}
        <h2 className="subheadline text-xs sm:text-sm md:text-xl lg:text-3xl font-light mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent px-2 leading-relaxed">
          {/* Mobile: Show abbreviated version */}
          <span className="sm:hidden">
            Data Analyst | Full Stack Developer | AI Engineer
          </span>
          {/* Tablet+: Show full version */}
          <span className="hidden sm:inline">
            Data Analyst | Full Stack Developer | AI Systems Engineer
          </span>
        </h2>

        {/* Bio - Cleaner and more concise */}
        <p className="bio text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-12 leading-relaxed px-2">
          Results-driven Developer (2+ YOE) delivering React & Angular SaaS platforms. Bridges full-stack development with data analytics (SQL/BI) and AI automation to build intelligent enterprise dashboards.
        </p>

        {/* Social Links - Better spacing */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-2 md:p-3 hover:border-purple-500/60 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-200 group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-2 md:p-3 hover:border-purple-500/60 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-slate-200 group-hover:text-purple-400 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons - Optimized for all screen sizes */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center flex-wrap px-2 mb-6">
          <button
            onClick={scrollToProjects}
            className="cta-button group flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-xs sm:text-sm md:text-base active:scale-95"
          >
            View Projects
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download="Kottala-Samuel-Resume.pdf"
            onClick={handleResumeClick}
            className="cta-button flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 card border border-purple-500/50 hover:border-purple-500/80 hover:bg-purple-500/10 text-white font-semibold rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base active:scale-95"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Resume
          </a>
        </div>

        {/* Scroll indicator - Mobile optimized */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border border-purple-400 rounded-full flex items-start justify-center p-1.5">
            <div className="w-0.5 h-1.5 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};