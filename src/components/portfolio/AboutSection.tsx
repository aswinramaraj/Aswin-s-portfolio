import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Skill cloud animation
      gsap.to('.skill-tag', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillHighlights = [
    'React', 'Node.js', 'Python', 'AI/ML', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section id="about" ref={sectionRef} className="section py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="glass-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">AK</span>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-secondary rounded-full animate-float" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {skillHighlights.map((skill, index) => (
                  <span 
                    key={skill}
                    className="skill-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate fullstack developer based in Coimbatore, India, 
                specializing in creating intelligent web applications that bridge 
                the gap between innovative AI technologies and seamless user experiences.
              </p>
              
              <p>
                With expertise spanning from React frontends to AI-powered backends, 
                I've contributed to freelance projects and developed innovative tools 
                that solve real-world problems. My journey involves building scalable 
                solutions using the MERN stack while integrating cutting-edge AI capabilities.
              </p>
              
              <p>
                I believe in crafting digital experiences that are not just functional, 
                but truly impactful. Whether it's developing virtual experience platforms 
                or AI-driven storytelling tools, I'm always excited to push the boundaries 
                of what's possible on the web.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-card px-4 py-2">
                <span className="text-primary font-semibold">Location:</span>
                <span className="ml-2 text-foreground">Coimbatore, India</span>
              </div>
              <div className="glass-card px-4 py-2">
                <span className="text-primary font-semibold">Focus:</span>
                <span className="ml-2 text-foreground">Fullstack + AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};