import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Rocket, Eye, Users, MessageSquare, Award } from 'lucide-react';

const ExperienceLikeNoOther = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      icon: Globe,
      title: 'Global Exhibitors',
      description: 'Meet top brands from around the world, all under one roof. Explore their latest innovations and discover what\'s leading the future.',
    },
    {
      icon: Rocket,
      title: 'Product Launches',
      description: 'Be the first to witness replacement components, EV accessories, service solutions and technology making their debut. See what\'s next in the industry before it hits the mainstream market.',
    },
    {
      icon: Eye,
      title: 'Live Demos',
      description: 'Watch products in action and evaluate their performance on the spot. Get a clear view of how the latest EV tools and tech can work.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Original Equipment manufacturers (OEMs) and Tier 1 & 2 suppliers can meet with possible suppliers and establish new business relationships in EVTECHNICIA.',
    },
    {
      icon: MessageSquare,
      title: 'Expert Talks',
      description: 'Gain insights from leaders shaping the EV industry. Learn about key trends, challenges, and strategies to stay ahead in a fast-moving market.',
    },
    {
      icon: Award,
      title: 'Conference',
      description: 'Ask direct questions to specialists and speakers. Get practical, no-fluff answers that help you make confident, informed decisions.',
    },
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
              building a supply chain for the maintenance of the electric revolution.
            </p>
          </motion.div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <experience.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image Gallery Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Event <span className="text-primary">Gallery</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + item * 0.05 }}
                  className="glow-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <div className="text-center">
                      <img src={`/event-gallery/${item}.jpeg`} alt="Event Images" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceLikeNoOther;
