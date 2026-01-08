import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Car, Zap, Users, ArrowRight, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const ConcurrentShow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      title: 'Complete Ecosystem',
      description: 'Cover 100% of vehicles on Indian roads by visiting both shows',
      icon: Zap,
      highlight: 'One ticket, two technologies',
    },
    {
      title: 'Modern Business Strategy',
      description: 'Build portfolio that profits from both traditional and electric vehicles',
      icon: TrendingUp,
      highlight: 'Don\'t choose between old & new',
    },
    {
      title: 'Infinite Opportunities',
      description: 'Access comprehensive supplier network across all vehicle types',
      icon: Users,
      highlight: 'Expanded business potential',
    },
  ];

  return (
    <section id="concurrent-show" className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm mb-6">
              Dual Exhibition
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Concurrent Show: <span className="text-gradient">AUTOTECHNICIA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The foundation of automotive aftermarket. Running directly alongside EVTECHNICIA is AUTOTECHNICIA. 
              A complete ecosystem by visiting both shows, you cover 100% of vehicles on Indian roads. 
              This co-location is designed for modern business owners.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="px-3 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30 rounded-full">
                  <span className="text-xs text-secondary font-medium">{benefit.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcurrentShow;
