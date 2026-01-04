import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Monitor, Wrench, Zap, Eye, Clock } from 'lucide-react';

const LiveDemos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const demos = [
    {
      title: 'Fast Charging Technology',
      description: 'Experience ultra-rapid charging systems delivering 0-80% in just 15 minutes',
      duration: '15 min',
      booth: 'A-12',
      category: 'Charging',
      icon: Zap,
      features: ['350kW Power', 'Liquid Cooling', 'Universal Connector'],
    },
    {
      title: 'Battery Diagnostic Tools',
      description: 'Advanced diagnostic equipment for comprehensive battery health analysis',
      duration: '20 min',
      booth: 'B-08',
      category: 'Diagnostics',
      icon: Wrench,
      features: ['Real-time Analysis', 'Health Scoring', 'Predictive Alerts'],
    },
    {
      title: 'EV Motor Testing',
      description: 'Live performance testing of next-generation electric motors',
      duration: '25 min',
      booth: 'C-15',
      category: 'Motors',
      icon: Monitor,
      features: ['Efficiency Testing', 'Load Simulation', 'Thermal Analysis'],
    },
    {
      title: 'Smart BMS Demo',
      description: 'Intelligent Battery Management System with AI optimization',
      duration: '30 min',
      booth: 'D-22',
      category: 'BMS',
      icon: Eye,
      features: ['AI Optimization', 'Cell Balancing', 'Remote Monitoring'],
    },
  ];

  const schedule = [
    { time: '10:00 AM', title: 'Charging Infrastructure Showcase', presenter: 'PowerTech Solutions' },
    { time: '11:30 AM', title: 'Advanced Battery Diagnostics', presenter: 'DiagPro Systems' },
    { time: '1:00 PM', title: 'EV Motor Performance Testing', presenter: 'MotorTech Labs' },
    { time: '2:30 PM', title: 'Smart BMS Live Demo', presenter: 'BMS Innovations' },
    { time: '4:00 PM', title: 'Complete EV Service Solutions', presenter: 'ServicePro India' },
  ];

  return (
    <section id="live-demos" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      
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
            <span className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-6">
              Interactive Experience
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Live <span className="text-gradient">Demos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch products in action and evaluate their performance on the spot. Get a clear view of how the latest 
              EV tools and technology can work for your business.
            </p>
          </motion.div>

          {/* Demo Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <demo.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">Booth</span>
                    <div className="text-sm font-semibold text-primary">{demo.booth}</div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{demo.category}</span>
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {demo.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {demo.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{demo.duration}</span>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Live Demo
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {demo.features.map((feature, featureIndex) => (
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

          {/* Demo Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Demo <span className="text-primary">Schedule</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <motion.div
                    key={`${item.time}-${item.title}`}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="glow-card rounded-xl p-4 flex items-center gap-4 group hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-semibold text-primary">{item.time}</span>
                        <span className="text-xs text-muted-foreground">{item.presenter}</span>
                      </div>
                      <div className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-full">
              <Play className="w-5 h-5 text-accent" />
              <span className="text-foreground font-medium">
                50+ Live Demonstrations Daily
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemos;
