import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Users, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation Showcase',
    description: 'Discover cutting-edge EV components from batteries and motors to charging infrastructure and smart technology.',
  },
  {
    icon: Users,
    title: 'Networking Hub',
    description: 'Connect with OEMs, Tier 1 suppliers, manufacturers, and industry experts to forge strategic partnerships.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description: 'Gain valuable knowledge about government regulations, market trends, and upcoming technological developments.',
  },
  {
    icon: Award,
    title: 'B2B Excellence',
    description: 'Experience a dedicated business environment for manufacturers, service providers, and customers to interact.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm mb-4 sm:mb-6">
              About The Expo
            </span>
            <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-gradient">EVTECHNICIA</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              EVTECHNICIA 2026 is India's premier exhibition for electric vehicle components and allied products. 
              This is where suppliers, manufacturers, and industry experts network, demonstrate innovation, 
              and shape the future of the e-mobility industry.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glow-card h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:border-primary/50">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 sm:mb-5 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-shadow duration-500">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-orbitron text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              { value: '200+', label: 'Exhibitors Expected' },
              { value: '10K+', label: 'Trade Visitors' },
              { value: '50+', label: 'Countries' },
              { value: '3', label: 'Days of Innovation' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary glow-text mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
