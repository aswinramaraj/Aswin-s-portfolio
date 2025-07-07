import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "C"],
    icon: "💻"
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    icon: "🎨"
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
    icon: "🧩"
  },
  {
    title: "AI & Machine Learning",
    skills: ["Gemini API", "Custom AI Models", "NLP", "Computer Vision", "TensorFlow", "PyTorch"],
    icon: "🧠"
  },
  {
    title: "Development Tools",
    skills: ["VS Code", "Git", "Docker", "Postman", "Figma", "Canva"],
    icon: "🛠️"
  },
  {
    title: "Analytics & Design",
    skills: ["Power BI", "Google Analytics", "Excel", "Data Visualization", "UI/UX Design"],
    icon: "📊"
  }
];


export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo('.skill-category',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo('.skill-item',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 60%",
          }
        }
      );

      // Individual skill item hover animations
      document.querySelectorAll('.skill-item').forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 gradient-text"
        >
          Skills & Technologies
        </h2>
        
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="skill-category glass-card p-6 text-center"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-display font-bold text-primary mb-6">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-item bg-primary/10 hover:bg-primary/20 px-3 py-2 rounded-lg text-sm font-medium text-foreground transition-all duration-300 cursor-pointer"
                    style={{ 
                      animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.05}s` 
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-4">
            <p className="text-lg text-muted-foreground mb-2">
              Constantly learning and evolving with the latest technologies
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};