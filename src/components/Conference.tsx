import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Users, HelpCircle, Calendar, Clock, MapPin, Mic } from 'lucide-react';

const Conference = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sessions = [
    {
      title: 'Ask the Experts Panel',
      description: 'Interactive Q&A with battery technology specialists',
      time: 'Day 1, 3:00 PM - 4:30 PM',
      location: 'Conference Hall A',
      speakers: ['Dr. Rajesh Kumar', 'Sarah Chen', 'Prof. Michael Weber'],
      topic: 'Battery Technology',
      interactive: true,
    },
    {
      title: 'Charging Infrastructure Forum',
      description: 'Direct questions to charging solution providers',
      time: 'Day 2, 10:00 AM - 11:30 AM',
      location: 'Conference Hall B',
      speakers: ['Anjali Sharma', 'Mark Thompson'],
      topic: 'Charging Systems',
      interactive: true,
    },
    {
      title: 'EV Aftermarket Discussion',
      description: 'Q&A with service and maintenance experts',
      time: 'Day 2, 2:00 PM - 3:30 PM',
      location: 'Conference Hall A',
      speakers: ['James Wilson', 'Priya Patel'],
      topic: 'Aftermarket Solutions',
      interactive: true,
    },
    {
      title: 'Policy & Regulation Session',
      description: 'Government representatives answer industry questions',
      time: 'Day 3, 11:00 AM - 12:30 PM',
      location: 'Main Auditorium',
      speakers: ['Anjali Sharma', 'Government Officials'],
      topic: 'Policy & Support',
      interactive: true,
    },
  ];

  const features = [
    {
      title: 'Direct Interaction',
      description: 'Get your specific questions answered by industry leaders',
      icon: MessageSquare,
      benefit: 'Personalized solutions',
    },
    {
      title: 'Expert Panel',
      description: 'Multiple specialists provide comprehensive perspectives',
      icon: Users,
      benefit: 'Diverse expertise',
    },
    {
      title: 'Practical Answers',
      description: 'No-fluff, actionable insights for your business',
      icon: HelpCircle,
      benefit: 'Immediate implementation',
    },
    {
      title: 'Live Format',
      description: 'Real-time responses to emerging questions',
      icon: Mic,
      benefit: 'Dynamic discussion',
    },
  ];

  const topics = [
    'Battery technology and management systems',
    'Charging infrastructure solutions',
    'EV service and maintenance',
    'Government policies and incentives',
    'Market trends and forecasts',
    'Supply chain challenges',
    'Aftermarket opportunities',
    'Technology integration',
  ];

  return (
    <section id="conference" className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
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
              Interactive Learning
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Conference</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ask direct questions to specialists and speakers. Get practical, no-fluff answers that help you 
              make confident, informed decisions for your business.
            </p>
          </motion.div>

          {/* Interactive Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Interactive <span className="text-primary">Sessions</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glow-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-orbitron text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {session.title}
                      </h4>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                        {session.topic}
                      </span>
                    </div>
                    {session.interactive && (
                      <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        Live Q&A
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {session.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border/30 pt-3">
                    <div className="text-xs text-muted-foreground mb-2">Speakers:</div>
                    <div className="flex flex-wrap gap-2">
                      {session.speakers.map((speaker, speakerIndex) => (
                        <span
                          key={speakerIndex}
                          className="px-2 py-1 bg-muted/50 border border-border rounded text-xs text-foreground/70"
                        >
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-xs text-accent font-medium">
                  {feature.benefit}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Topics Covered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Topics <span className="text-primary">Covered</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="glow-card rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {topics.map((topic, index) => (
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
                      <span className="text-sm text-foreground leading-relaxed">{topic}</span>
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                20+ Interactive Q&A Sessions
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Conference;
