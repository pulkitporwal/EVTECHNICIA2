import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Handshake, Building, Briefcase, ArrowRight, MessageSquare } from 'lucide-react';

const Networking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const networkingTypes = [
    {
      title: 'OEM Connections',
      description: 'Meet directly with Original Equipment manufacturers and establish supply partnerships',
      icon: Building,
      participants: '200+ OEMs',
      benefit: 'Direct access to decision-makers',
      color: 'primary',
    },
    {
      title: 'Supplier Meetings',
      description: 'Connect with Tier 1 & 2 suppliers for comprehensive sourcing solutions',
      icon: Users,
      participants: '500+ Suppliers',
      benefit: 'Complete supply chain access',
      color: 'secondary',
    },
    {
      title: 'Business Matchmaking',
      description: 'Structured B2B meetings tailored to your specific requirements',
      icon: Handshake,
      participants: '1000+ Meetings',
      benefit: 'Curated business opportunities',
      color: 'accent',
    },
    {
      title: 'Industry Forums',
      description: 'Participate in focused discussions on market trends and challenges',
      icon: MessageSquare,
      participants: '50+ Forums',
      benefit: 'Industry insights and trends',
      color: 'primary',
    },
  ];

  const successStories = [
    {
      company: 'AutoParts India Ltd.',
      type: 'OEM Partnership',
      result: 'Secured ₹50Cr supply contract',
      year: '2023',
    },
    {
      company: 'BatteryTech Solutions',
      type: 'Distributor Network',
      result: 'Expanded to 15 new regions',
      year: '2023',
    },
    {
      company: 'EV Components Co.',
      type: 'Technology Transfer',
      result: 'Licensed new BMS technology',
      year: '2024',
    },
  ];

  const networkingEvents = [
    { time: 'Day 1', event: 'CEO Roundtable', participants: '50+ CEOs' },
    { time: 'Day 1', event: 'Supplier Summit', participants: '200+ suppliers' },
    { time: 'Day 2', event: 'OEM-Supplier Meet', participants: '300+ delegates' },
    { time: 'Day 2', event: 'Technology Forum', participants: '150+ experts' },
    { time: 'Day 3', event: 'Business Matching', participants: '500+ meetings' },
  ];

  return (
    <section id="networking" className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
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
              Business Opportunities
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Networking</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Original Equipment manufacturers (OEMs) and Tier 1 & 2 suppliers can meet with potential suppliers 
              and establish new business relationships in EVTECHNICIA.
            </p>
          </motion.div>

          {/* Networking Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {networkingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <div className="text-2xl font-bold text-primary mb-2">{type.participants}</div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {type.description}
                </p>
                <div className="text-xs text-accent font-medium">
                  {type.benefit}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Success <span className="text-primary">Stories</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="glow-card rounded-xl p-5 group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {story.company}
                      </h4>
                      <span className="text-xs text-muted-foreground">{story.year}</span>
                    </div>
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs text-accent font-medium mb-2">{story.type}</div>
                  <div className="text-sm text-foreground leading-relaxed">{story.result}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Networking Events Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Networking <span className="text-primary">Events</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {networkingEvents.map((event, index) => (
                  <motion.div
                    key={`${event.time}-${event.event}`}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="glow-card rounded-xl p-4 flex items-center gap-4 group hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-semibold text-primary">{event.time}</span>
                        <span className="text-xs text-muted-foreground">{event.participants}</span>
                      </div>
                      <div className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {event.event}
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
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full">
              <Handshake className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                5000+ Business Connections Expected
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Networking;
