import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  tech: string;
  description: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Virtulan",
    tech: "MERN + Unreal Engine 5",
    description: "A virtual experience platform combining web and game engine tech for immersive digital interactions.",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    title: "Storytelling Video Generator",
    tech: "MERN, Gemini API, Custom AI Model",
    description: "Creates dynamic storytelling videos using AI narration and visuals for engaging content creation.",
    gradient: "from-pink-600 to-purple-600"
  },
  {
    title: "Snapzone",
    tech: "MERN",
    description: "Media-sharing platform with instant posting and real-time updates for seamless social connectivity.",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Quiz Generator",
    tech: "MERN, Gemini API, Google Apps Script",
    description: "AI-powered quiz generation tool for educational use with automated content creation capabilities.",
    gradient: "from-green-600 to-teal-600"
  },
  {
    title: "Freelance Projects",
    tech: "Modern Web Technologies",
    description: "Developed responsive sites and admin dashboards for clients using cutting-edge web technologies.",
    gradient: "from-orange-600 to-red-600"
  }
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo('.project-card',
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
          }
        }
      );

      // Hover animations
      document.querySelectorAll('.project-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 gradient-text"
        >
          Featured Projects
        </h2>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-sm text-primary font-semibold mb-3 opacity-80">
                  {project.tech}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};