import { useEffect } from 'react';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
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
    // Check if resume file exists, if not show alert
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
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Headline */}
        <h1 className="headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {['Kottala', 'Samuel'].map((word, i) => (
            <span key={i} className="inline-block mr-3 text-white">
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline with typewriter effect */}
        <h2 className="subheadline text-xl md:text-3xl font-light mb-8 text-teal-400">
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
            <span key={i} className="inline-block mr-2">
              {word}
            </span>
          ))}
        </h2>

        {/* Bio */}
        <p className="bio text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Results-driven Developer (2+ YOE) delivering SaaS platforms via React, Angular & Node.js.
          Bridges software engineering with data analytics (SQL/BI) and AI automation to build intelligent,
          workflow-driven enterprise dashboards.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 hover:bg-white/20 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 hover:bg-white/20 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <button
            onClick={scrollToProjects}
            className="cta-button group flex items-center justify-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download="Kottala-Samuel-Resume.pdf"
            onClick={handleResumeClick}
            className="cta-button flex items-center justify-center gap-2 px-8 py-3 glass hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};