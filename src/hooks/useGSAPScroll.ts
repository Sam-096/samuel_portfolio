import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for GSAP scroll animations with ScrollTrigger
 * Provides utilities for fade-up, stagger, and timeline animations
 */
export const useGSAPScroll = () => {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    return () => {
      // Cleanup ScrollTrigger on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  /**
   * Animate elements with fade-up on scroll - faster, sharper feel
   */
  const fadeUpOnScroll = (selector: string, stagger = 0.1) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    elements.forEach((element, index) => {
      // Ensure element is visible by default
      (element as HTMLElement).style.opacity = '1';

      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 70%',
          scrub: false,
          markers: false,
          onEnter: () => {
            (element as HTMLElement).style.opacity = '1';
          },
        },
        opacity: 0,
        y: 40,
        duration: 0.6,  // Faster: reduced from 0.8s
        delay: index * stagger,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  };

  /**
   * Create a staggered text reveal animation
   */
  const staggerTextReveal = (selector: string, duration = 0.6) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const element = document.querySelector(selector);
    if (!element) return;

    const words = element.textContent?.split(' ') || [];
    element.innerHTML = words
      .map((word) => `<span class="inline-block">${word}</span>`)
      .join(' ');

    gsap.from(element.querySelectorAll('span'), {
      opacity: 0,
      y: 20,
      duration,
      stagger: 0.05,
      ease: 'power2.out',
    });
  };

  /**
   * Draw a line from top to bottom using scaleY
   */
  const drawLineOnScroll = (selector: string) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const element = document.querySelector(selector) as HTMLElement;
    if (!element) return;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1,
    });
  };

  /**
   * Create a hover scale effect
   */
  const hoverScale = (selector: string, scale = 1.05, duration = 0.3) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale, duration, ease: 'power2.out' });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration, ease: 'power2.out' });
      });
    });
  };

  return {
    fadeUpOnScroll,
    staggerTextReveal,
    drawLineOnScroll,
    hoverScale,
  };
};