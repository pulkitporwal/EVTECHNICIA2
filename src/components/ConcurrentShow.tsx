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

  const comparison = [
    {
      aspect: 'Vehicle Coverage',
      evtechnicia: 'Electric Vehicles Only',
      autotechnicia: 'All Traditional Vehicles',
      combined: '100% Market Coverage',
    },
    {
      aspect: 'Technology Focus',
      evtechnicia: 'EV Components & Aftermarket',
      autotechnicia: 'Traditional Auto Parts',
      combined: 'Complete Automotive Spectrum',
    },
    {
      aspect: 'Business Model',
      evtechnicia: 'Future-Ready Solutions',
      autotechnicia: 'Established Supply Chains',
      combined: 'Balanced Portfolio Strategy',
    },
    {
      aspect: 'Market Position',
      evtechnicia: 'First-Mover Advantage',
      autotechnicia: 'Market Leadership',
      combined: 'Dominant Market Presence',
    },
  ];

  const stats = [
    { value: '2', label: 'Co-located Shows', icon: Award },
    { value: '1', label: 'Ticket Access', icon: Calendar },
    { value: '100%', label: 'Vehicle Coverage', icon: Car },
    { value: '∞', label: 'Opportunities', icon: Users },
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

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Complete <span className="text-primary">Market Coverage</span>
            </h3>
            <div className="max-w-5xl mx-auto">
              <div className="glow-card rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Aspect</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-primary">EVTECHNICIA</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-secondary">AUTOTECHNICIA</th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-accent">Combined Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((item, index) => (
                        <motion.tr
                          key={item.aspect}
                          initial={{ opacity: 0, x: -40 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="border-b border-border/20 hover:bg-primary/5 transition-colors"
                        >
                          <td className="py-4 px-4 text-sm text-foreground">{item.aspect}</td>
                          <td className="py-4 px-4 text-sm text-center text-primary">{item.evtechnicia}</td>
                          <td className="py-4 px-4 text-sm text-center text-secondary">{item.autotechnicia}</td>
                          <td className="py-4 px-4 text-sm text-center">
                            <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                              {item.combined}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="glow-card rounded-2xl p-6 h-full group hover:border-primary/50 transition-all duration-500">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-orbitron text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="glow-card rounded-2xl p-8 max-w-3xl mx-auto border-primary/30">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">
                Walk Through <span className="text-primary">Both Halls</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                You don't have to choose between "old world" and "new world". 
                You can walk through hall and build a portfolio that profits from both. 
                One ticket, two technologies and infinite opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg font-medium btn-glow transition-all duration-300">
                  Get Dual Access Pass
                </button>
                <button className="px-8 py-3 border-2 border-secondary/50 hover:border-secondary bg-secondary/10 hover:bg-secondary/20 text-secondary hover:text-secondary-foreground rounded-lg font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConcurrentShow;
