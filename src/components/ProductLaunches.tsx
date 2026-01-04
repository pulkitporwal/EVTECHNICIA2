import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Sparkles, Eye, Calendar, TrendingUp } from 'lucide-react';

const ProductLaunches = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const launches = [
    {
      title: 'Advanced Battery Management System',
      category: 'Battery Tech',
      description: 'Next-gen BMS with AI-powered optimization and real-time health monitoring',
      features: ['AI Integration', 'Real-time Monitoring', 'Extended Life'],
      status: 'World Premiere',
      icon: Rocket,
    },
    {
      title: 'Ultra-Fast Charging Solution',
      category: 'Charging Infrastructure',
      description: 'Revolutionary 350kW charging system with liquid cooling technology',
      features: ['350kW Power', 'Liquid Cooling', 'Universal Compatibility'],
      status: 'Asia Launch',
      icon: Sparkles,
    },
    {
      title: 'Lightweight EV Chassis',
      category: 'Structural Components',
      description: 'Carbon fiber reinforced chassis reducing vehicle weight by 40%',
      features: ['40% Lighter', 'Carbon Fiber', 'Enhanced Safety'],
      status: 'Market Debut',
      icon: TrendingUp,
    },
    {
      title: 'Smart Motor Controller',
      category: 'Motor Systems',
      description: 'Intelligent motor controller with predictive maintenance capabilities',
      features: ['Predictive Maintenance', 'High Efficiency', 'Compact Design'],
      status: 'Technology Preview',
      icon: Eye,
    },
  ];

  const upcomingEvents = [
    { date: 'Day 1', time: '11:00 AM', event: 'Opening Ceremony & Major Launches' },
    { date: 'Day 1', time: '2:00 PM', event: 'EV Battery Technology Showcase' },
    { date: 'Day 2', time: '10:00 AM', event: 'Charging Infrastructure Innovations' },
    { date: 'Day 2', time: '3:00 PM', event: 'Motor & Drive Systems Launch' },
    { date: 'Day 3', time: '11:00 AM', event: 'Future EV Components Preview' },
  ];

  return (
    <section id="product-launches" className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
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
              Innovation Hub
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Product <span className="text-gradient">Launches</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Be the first to witness replacement components, EV accessories, service solutions and technology making their debut. 
              See what's next in the industry before it hits the mainstream market.
            </p>
          </motion.div>

          {/* Product Launches Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {launches.map((launch, index) => (
              <motion.div
                key={launch.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <launch.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-semibold">
                    {launch.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{launch.category}</span>
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {launch.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {launch.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {launch.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-muted/50 border border-border rounded text-xs text-foreground/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Launch Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Launch <span className="text-primary">Schedule</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={`${event.date}-${event.time}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  className="glow-card rounded-xl p-4 text-center group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="w-8 h-8 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-xs text-primary font-semibold mb-1">{event.date}</div>
                  <div className="text-xs text-muted-foreground mb-2">{event.time}</div>
                  <div className="text-xs text-foreground leading-relaxed">{event.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30 rounded-full">
              <Rocket className="w-5 h-5 text-secondary" />
              <span className="text-foreground font-medium">
                20+ Exclusive Product Launches
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductLaunches;
