'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Battery, Zap, Plug, Cpu, Car, Microchip, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicStory() {
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);
  const horizontalRef = useRef(null);

  const slides = [
    {
      title: "Powering India's",
      subtitle: "EV Revolution",
      description: "Where cutting-edge battery technology meets sustainable mobility solutions for tomorrow's electric vehicles.",
      visual: "battery",
      gradient: "from-primary to-accent"
    },
    {
      title: "Advanced Drive",
      subtitle: "Systems",
      description: "Experience next-generation electric motors and propulsion systems redefining automotive performance.",
      visual: "motor",
      gradient: "from-secondary to-primary"
    },
    {
      title: "Smart Charging",
      subtitle: "Infrastructure",
      description: "Discover innovative charging solutions and power management systems for the electric ecosystem.",
      visual: "charger",
      gradient: "from-accent to-secondary"
    },
    {
      title: "Intelligent EV",
      subtitle: "Components",
      description: "Explore sophisticated electronics and control systems driving the future of electric mobility.",
      visual: "software",
      gradient: "from-primary via-accent to-secondary"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const slides = slidesRef.current.filter(Boolean);
    const horizontalContainer = horizontalRef.current;

    if (!section || !horizontalContainer || slides.length === 0) return;

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Wait for layout to settle
    const initAnimation = () => {
      // Calculate total scroll distance
      const getScrollAmount = () => {
        const scrollWidth = horizontalContainer.scrollWidth;
        return -(scrollWidth - window.innerWidth);
      };

      // Create horizontal scroll animation
      const horizontalScroll = gsap.to(horizontalContainer, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${horizontalContainer.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Animate individual slides
      slides.forEach((slide, index) => {
        if (!slide) return;

        const titleEl = slide.querySelector('.slide-title');
        const subtitleEl = slide.querySelector('.slide-subtitle');
        const descriptionEl = slide.querySelector('.slide-description');
        const visualEl = slide.querySelector('.slide-visual');

        // Title animation
        if (titleEl) {
          gsap.fromTo(titleEl,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                start: "left 80%",
                end: "left 20%",
                scrub: 1,
                containerAnimation: horizontalScroll
              }
            }
          );
        }

        // Subtitle animation
        if (subtitleEl) {
          gsap.fromTo(subtitleEl,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                start: "left 75%",
                end: "left 20%",
                scrub: 1,
                containerAnimation: horizontalScroll
              }
            }
          );
        }

        // Description animation
        if (descriptionEl) {
          gsap.fromTo(descriptionEl,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                start: "left 70%",
                end: "left 20%",
                scrub: 1,
                containerAnimation: horizontalScroll
              }
            }
          );
        }

        // Visual element animation
        if (visualEl) {
          gsap.fromTo(visualEl,
            { scale: 0.8, opacity: 0, rotation: -10 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                start: "left 70%",
                end: "left 20%",
                scrub: 1,
                containerAnimation: horizontalScroll
              }
            }
          );
        }
      });

      ScrollTrigger.refresh();
    };

    // Use RAF to ensure DOM is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(initAnimation);
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getVisualElement = (type, gradient) => {
    switch(type) {
      case 'battery':
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-60 animate-pulse" />
            <div className="relative w-80 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300 border border-primary/30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-28 bg-background/80 rounded-xl backdrop-blur-sm border border-primary/20" />
              <div className="absolute top-3 right-3 w-6 h-12 bg-primary/60 rounded-r-lg shadow-lg glow-border" />
              <div className="absolute bottom-3 left-3 right-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg glow-text" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <Battery className="w-16 h-16 text-primary glow-text" />
              </div>
            </div>
          </div>
        );
      case 'motor':
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-2xl opacity-60 animate-pulse" />
            <div className="relative w-80 h-80 rounded-full border-8 border-secondary/60 shadow-2xl bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm">
              <div className="absolute inset-6 rounded-full border-4 border-secondary/40" />
              <div className="absolute inset-12 rounded-full border-2 border-secondary/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full shadow-xl flex items-center justify-center glow-border">
                  <Car className="w-12 h-12 text-background" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-secondary/40 rounded-full motor-spin" />
            </div>
          </div>
        );
      case 'charger':
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-60 animate-pulse" />
            <div className="relative w-40 h-56 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-accent/30">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-background/80 rounded-full shadow-lg backdrop-blur-sm border border-accent/20" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent/60 rounded-lg shadow-lg glow-border" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-accent/60 rounded-full shadow-lg flex items-center justify-center bg-background/80">
                <Plug className="w-8 h-8 text-accent glow-text" />
              </div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-accent/60 rounded-full shadow-lg animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-2 h-8 bg-accent/60 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="absolute top-1/3 left-1/4 w-2 h-8 bg-accent/60 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        );
      case 'software':
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 animate-pulse" />
            <div className="relative w-80 h-80 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-primary/30 glow-card">
              <div className="grid grid-cols-4 gap-3 h-full">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg backdrop-blur-sm border border-primary/30 animate-pulse shadow-lg" 
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s'
                    }} 
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Microchip className="w-4 h-4 text-primary/80" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center glow-border">
                  <Wrench className="w-10 h-10 text-background" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>{`
        .motor-spin {
          animation: spin 10s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
      
      <section ref={sectionRef} className="relative h-screen bg-gradient-to-br from-background via-dark-elevated to-background overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-[120px] animate-pulse" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] [background-size:24px_24px]" />

        <div ref={horizontalRef} className="flex h-full will-change-transform">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={el => slidesRef.current[index] = el}
              className="min-w-screen h-full flex items-center justify-center px-8 md:px-16 flex-shrink-0"
              style={{ width: '100vw' }}
            >
              <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="space-y-8 z-10">
                  <h2 className="slide-title font-orbitron text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
                    {slide.title}
                  </h2>
                  <h3 className={`slide-subtitle font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-gradient leading-tight`}>
                    {slide.subtitle}
                  </h3>
                  <p className="slide-description text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                    {slide.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {slides.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 w-8 rounded-full transition-all duration-500 ${
                            i === index ? 'bg-primary glow-text' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {index + 1} / {slides.length}
                    </span>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="slide-visual flex justify-center lg:justify-end">
                  {getVisualElement(slide.visual, slide.gradient)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <span className="text-xs font-bold tracking-widest uppercase">Scroll To Explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}