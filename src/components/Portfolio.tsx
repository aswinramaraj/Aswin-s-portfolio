import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from './portfolio/HeroSection';
import { AboutSection } from './portfolio/AboutSection';
import { ProjectsSection } from './portfolio/ProjectsSection';
import { SkillsSection } from './portfolio/SkillsSection';
import { ContactSection } from './portfolio/ContactSection';
import { Footer } from './portfolio/Footer';
import { Navigation } from './portfolio/Navigation';

gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll reveal animations
      gsap.utils.toArray('.section').forEach((section: any) => {
        gsap.fromTo(section, 
          { 
            y: 50,
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Floating background elements
      gsap.to('.bg-blob-1', {
        x: 100,
        y: -50,
        rotation: 45,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to('.bg-blob-2', {
        x: -80,
        y: 60,
        rotation: -30,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={portfolioRef} className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="bg-blob-1 absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="bg-blob-2 absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};