import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

      // Continuous floating animation for hero elements
      gsap.to('.hero-float', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-display font-bold mb-6 hero-float"
          >
            I Build{' '}
            <span className="gradient-text">Intelligent</span>,{' '}
            <span className="gradient-text">Interactive</span>, and{' '}
            <span className="gradient-text">Impactful</span>{' '}
            Web Experiences
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed hero-float"
          >
            Fullstack Developer | AI Developer | Freelancer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto hero-float">
            Crafting innovative web solutions with cutting-edge technologies, 
            from React frontends to AI-powered backends. Based in Coimbatore, India.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-float">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="btn-glow text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow hero-float" />
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-secondary rounded-full animate-pulse-glow hero-float" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse-glow hero-float" />
    </section>
  );
};