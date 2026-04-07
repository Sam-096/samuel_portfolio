import { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  const typewriterRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Typewriter effect
    if (typewriterRef.current) {
      const text = typewriterRef.current.textContent || '';
      typewriterRef.current.textContent = '';
      typewriterRef.current.style.overflow = 'hidden';

      let index = 0;
      const typeWriter = () => {
        if (index < text.length) {
          typewriterRef.current!.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 50);
        }
      };

      setTimeout(typeWriter, 800);
    }

    // Cursor blink
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0.2,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        delay: 3,
      });
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white dotted-bg-dense flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center z-10 w-full">
        {/* Headline with colored accent */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-bs-black mb-6 md:mb-8 leading-tight max-w-5xl mx-auto">
          Full Stack Developer &amp;{' '}
          <span className="text-bs-yellow">AI Systems</span>{' '}
          Engineer
        </h1>

        {/* Subheadline with typewriter effect */}
        <div className="mb-12 md:mb-16 min-h-16 md:min-h-20 flex items-center justify-center">
          <div className="text-2xl md:text-4xl font-black text-bs-black">
            <span ref={typewriterRef} className="border-r-4 border-bs-yellow pr-2 inline-block whitespace-nowrap">
              Building next-gen data systems
            </span>
            <span ref={cursorRef} className="text-bs-yellow animate-blink ml-1">|</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-2xl text-bs-gray max-w-3xl mx-auto mb-16 md:mb-20 leading-8 font-light">
          2+ years shipping production-grade SaaS platforms. Specializing in <span className="font-bold text-bs-black">real-time SQL pipelines</span>, <span className="font-bold text-bs-black">AI automation</span>, and <span className="font-bold text-bs-black">enterprise dashboards</span> that solve problems at scale.
        </p>

        {/* CTA Buttons - Larger and more prominent */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20 md:mb-28">
          <button
            onClick={scrollToProjects}
            className="group flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-bs-yellow text-bs-black font-black rounded-xl hover:shadow-2xl hover:shadow-bs-yellow/50 transition-all duration-300 text-lg md:text-2xl hover:-translate-y-2 hover:scale-105"
          >
            View My Work
            <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-3 transition-transform" />
          </button>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 border-3 border-bs-black text-bs-black font-black rounded-xl hover:bg-bs-black hover:text-white transition-all duration-300 text-lg md:text-2xl hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            GitHub Profile
            <Github className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Social Links - More spacing */}
        <div className="flex justify-center gap-8 md:gap-10 mb-16 md:mb-20">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-bs-black rounded-lg hover:bg-bs-yellow hover:border-bs-yellow transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7 md:w-8 md:h-8 text-bs-black" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-bs-black rounded-lg hover:bg-bs-blue hover:border-bs-blue transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-bs-black" />
          </a>
        </div>

        {/* Stats/Proof */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center mb-16 md:mb-20">
          <div>
            <p className="text-4xl md:text-5xl font-black text-bs-yellow">2+</p>
            <p className="text-base md:text-lg text-bs-gray font-semibold mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-bs-yellow">6+</p>
            <p className="text-base md:text-lg text-bs-gray font-semibold mt-2">Production Projects</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-bs-yellow">80+</p>
            <p className="text-base md:text-lg text-bs-gray font-semibold mt-2">Technologies</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-bs-gray uppercase tracking-widest font-black">Scroll</span>
            <svg className="w-6 h-6 text-bs-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
