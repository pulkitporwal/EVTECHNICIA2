import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Globe, Rocket, TrendingUp } from 'lucide-react';

const ExperienceLikeNoOther = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Zap, label: 'Millions of EVs', value: 'on Road Today' },
    { icon: Globe, label: 'Specialized', value: 'Spare Parts Needed' },
    { icon: Rocket, label: 'Electric', value: 'Revolution Support' },
    { icon: TrendingUp, label: 'Supply Chain', value: 'for Maintenance' },
  ];

  return (
    <section id="experience" className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
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
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
              Unique Experience
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              An Experience <span className="text-gradient">Like No Other</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              India has millions of EVs on the road today. These vehicles are now entering the repair cycle. They need specialized spare parts, 
              unique accessories, different lubricants, and skilled maintenance. EVTECHNICIA expo created to fill this gap, 
              building a supply chain for maintenance of electric revolution.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="glow-card rounded-2xl p-6 h-full group hover:border-primary/50 transition-all duration-500">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="glow-card rounded-2xl p-8 max-w-4xl mx-auto border-primary/30">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-foreground">
                Building the Future of <span className="text-primary">EV Aftermarket</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join us in creating the ecosystem that will power the electric revolution. From specialized components 
                to cutting-edge technology, EVTECHNICIA is where the future of EV maintenance takes shape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg font-medium btn-glow transition-all duration-300">
                  Explore Exhibitors
                </button>
                <button className="px-8 py-3 border-2 border-primary/50 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300">
                  Register to Visit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceLikeNoOther;
