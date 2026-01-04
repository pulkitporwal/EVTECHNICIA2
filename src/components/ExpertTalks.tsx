import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Award, TrendingUp, Lightbulb, Calendar, User, Clock } from 'lucide-react';

const ExpertTalks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const speakers = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'CEO, EV Innovations Lab',
      topic: 'Future of EV Battery Technology',
      time: 'Day 1, 10:00 AM',
      session: 'Keynote',
      expertise: 'Battery Systems',
      icon: Award,
    },
    {
      name: 'Sarah Chen',
      title: 'VP, Global EV Strategy',
      topic: 'Global EV Market Trends 2025-2030',
      time: 'Day 1, 2:00 PM',
      session: 'Market Insights',
      expertise: 'Market Analysis',
      icon: TrendingUp,
    },
    {
      name: 'Prof. Michael Weber',
      title: 'Head of Automotive Research',
      topic: 'Charging Infrastructure Revolution',
      time: 'Day 2, 11:00 AM',
      session: 'Technology Focus',
      expertise: 'Charging Systems',
      icon: Lightbulb,
    },
    {
      name: 'Anjali Sharma',
      title: 'Director, EV Policy Division',
      topic: 'Government EV Initiatives & Support',
      time: 'Day 2, 3:00 PM',
      session: 'Policy Update',
      expertise: 'Policy & Regulation',
      icon: Mic,
    },
  ];

  const topics = [
    {
      title: 'Battery Technology',
      description: 'Latest advancements in lithium-ion, solid-state, and alternative battery technologies',
      speakers: 8,
      icon: Award,
    },
    {
      title: 'Charging Solutions',
      description: 'Ultra-fast charging, wireless charging, and smart grid integration',
      speakers: 6,
      icon: TrendingUp,
    },
    {
      title: 'Motor & Drivetrain',
      description: 'Efficient motor designs, power electronics, and drivetrain innovations',
      speakers: 5,
      icon: Lightbulb,
    },
    {
      title: 'EV Aftermarket',
      description: 'Service models, spare parts supply chain, and maintenance solutions',
      speakers: 7,
      icon: Mic,
    },
  ];

  const benefits = [
    'Gain insights from leaders shaping the EV industry',
    'Learn about key trends, challenges, and strategies',
    'Stay ahead in a fast-moving market',
    'Network with industry experts and decision-makers',
    'Get practical knowledge for immediate implementation',
  ];

  return (
    <section id="expert-talks" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
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
              Knowledge Hub
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Expert <span className="text-gradient">Talks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gain insights from leaders shaping the EV industry. Learn about key trends, challenges, and strategies 
              to stay ahead in a fast-moving market.
            </p>
          </motion.div>

          {/* Featured Speakers */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Featured <span className="text-primary">Speakers</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glow-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <speaker.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {speaker.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{speaker.title}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {speaker.session}
                        </span>
                        <span className="text-xs text-muted-foreground">{speaker.expertise}</span>
                      </div>
                      <h5 className="font-medium text-foreground mb-1">{speaker.topic}</h5>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{speaker.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <div className="text-xl font-bold text-primary mb-3">{topic.speakers} Speakers</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Why <span className="text-primary">Attend</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="glow-card rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-full">
              <Mic className="w-5 h-5 text-accent" />
              <span className="text-foreground font-medium">
                26+ Expert Speakers Across 3 Days
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTalks;
