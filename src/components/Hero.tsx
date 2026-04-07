import { useEffect, useRef } from 'react';
import { Github, Linkedin, Download, ArrowDown, Code2, Database, Zap, Layers, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  const badgesRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero text on mount with personality
    setTimeout(() => {
      const headlineWords = document.querySelectorAll('.headline-word');
      const bioElement = document.querySelector('.bio');
      const ctaButtons = document.querySelectorAll('.cta-button');
      const splitLine = document.querySelector('.split-line');

      const timeline = gsap.timeline();

      // Animated headline - staggered word reveal
      timeline.from(
        headlineWords,
        {
          opacity: 0,
          y: 50,
          rotationZ: -5,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out',
        },
        0
      );

      // Animate split line
      if (splitLine) {
        timeline.from(
          splitLine,
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          0.3
        );
      }

      // Animate bio
      timeline.from(
        bioElement,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power3.out',
        },
        0.5
      );

      // Animate CTA buttons
      timeline.from(
        ctaButtons,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0.8
      );
    }, 100);

    // Faster floating animation for badges
    if (badgesRef.current) {
      const badges = badgesRef.current.querySelectorAll('.floating-badge');
      badges.forEach((badge, index) => {
        gsap.to(badge, {
          y: -25,
          rotate: 8,
          duration: 2.8 + index * 0.2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.15,
        });
      });
    }

    // Animate background shapes
    if (shapesRef.current) {
      const shapes = shapesRef.current.querySelectorAll('.shape');
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: 30,
          rotate: 360,
          duration: 8 + index * 2,
          ease: 'none',
          repeat: -1,
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
    <section className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-12 md:py-16 relative overflow-hidden">
      {/* Animated background shapes */}
      <div ref={shapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="shape absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="shape absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl opacity-25"></div>
      </div>

      {/* Floating skill badges */}
      <div ref={badgesRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-badge hidden sm:block absolute top-20 left-4 md:left-12 lg:left-20">
          <div className="card px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm flex items-center gap-2 border border-purple-500/40 hover:border-purple-500/70 transition-all group">
            <Code2 className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-medium">React 19</span>
          </div>
        </div>

        <div className="floating-badge hidden md:block absolute top-48 right-8 lg:right-20">
          <div className="card px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 border border-cyan-500/40 hover:border-cyan-500/70 transition-all group">
            <Layers className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-medium">Angular</span>
          </div>
        </div>

        <div className="floating-badge hidden sm:block absolute bottom-32 left-8 md:left-16 lg:left-24">
          <div className="card px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm flex items-center gap-2 border border-orange-500/40 hover:border-orange-500/70 transition-all group">
            <Database className="w-4 h-4 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-medium">PostgreSQL</span>
          </div>
        </div>

        <div className="floating-badge hidden lg:block absolute bottom-40 right-12">
          <div className="card px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 border border-purple-500/40 hover:border-purple-500/70 transition-all group">
            <Zap className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-medium">AI Systems</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center z-10 w-full">
        {/* Headline - Unique and Bold */}
        <div className="mb-6 md:mb-8">
          <h1 className="headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight px-2 mb-4">
            <div className="inline-block">
              <span className="headline-word text-white">Building</span>
              {' '}
              <span className="headline-word bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">intelligent</span>
            </div>
            <br />
            <div className="inline-block">
              <span className="headline-word text-white">systems that</span>
              {' '}
              <span className="headline-word text-purple-400">transform</span>
              {' '}
              <span className="headline-word text-white">data</span>
            </div>
          </h1>

          {/* Decorative split line */}
          <div className="split-line flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <div className="h-1 w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        {/* Subheadline - Role descriptor */}
        <div className="mb-8 md:mb-12 px-2">
          <div className="inline-block">
            <span className="text-xs md:text-sm font-semibold text-purple-300 uppercase tracking-widest mb-3 block">
              Full Stack Developer • Data Architect • AI Engineer
            </span>
          </div>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            2+ years delivering production-ready SaaS platforms with React, Angular & Node.js. Specializing in real-time data pipelines, SQL optimization, and AI automation to build enterprise dashboards that actually work.
          </p>
        </div>

        {/* Bio - Statement */}
        <p className="bio text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed px-2 border-l-2 border-purple-500/40 pl-4">
          "I don't just write code. I architect systems that solve real problems at scale."
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mb-10 md:mb-14">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-3 md:p-4 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-3 md:p-4 hover:border-cyan-500/70 hover:bg-cyan-500/10 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons - Bold and Interactive */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap px-2 mb-8">
          <button
            onClick={scrollToProjects}
            className="cta-button group relative flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 text-sm md:text-base overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-y-1.5 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download="Kottala-Samuel-Resume.pdf"
            onClick={handleResumeClick}
            className="cta-button flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 md:py-4 card border border-purple-500/50 hover:border-purple-500/80 hover:bg-purple-500/15 text-white font-semibold rounded-xl transition-all duration-300 text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Get Resume
          </a>
        </div>

        {/* Scroll indicator - Animated */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};