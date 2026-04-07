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
      <div className="max-w-5xl mx-auto text-center z-10 w-full">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-bs-black mb-6 md:mb-8 leading-tight max-w-4xl mx-auto">
          Full Stack Developer & AI Systems Engineer
        </h1>

        {/* Subheadline with typewriter effect */}
        <div className="mb-10 md:mb-14 h-12 md:h-16 flex items-center justify-center">
          <div className="text-2xl md:text-4xl font-bold text-bs-black">
            <span ref={typewriterRef} className="border-r-4 border-bs-yellow pr-2 inline-block">
              Building next-gen data systems
            </span>
            <span ref={cursorRef} className="text-bs-yellow animate-blink">|</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-bs-gray max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed">
          2+ years shipping production-grade SaaS platforms. Specializing in real-time SQL pipelines, AI automation, and enterprise dashboards that solve problems at scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 md:mb-20">
          <button
            onClick={scrollToProjects}
            className="group flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-bs-yellow text-bs-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-base md:text-lg"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 border-2 border-bs-black text-bs-black font-bold rounded-lg hover:bg-bs-black hover:text-white transition-all duration-300 text-base md:text-lg"
          >
            GitHub Profile
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 md:gap-8">
          <a
            href="https://github.com/Sam-096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border-2 border-bs-black rounded-lg hover:bg-bs-yellow hover:border-bs-yellow transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-bs-black group-hover:text-bs-black" />
          </a>
          <a
            href="https://linkedin.com/in/kottala-samuel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border-2 border-bs-black rounded-lg hover:bg-bs-blue hover:border-bs-blue transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-bs-black group-hover:text-bs-black" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-bs-gray uppercase tracking-widest font-bold">Scroll</span>
            <svg className="w-6 h-6 text-bs-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
