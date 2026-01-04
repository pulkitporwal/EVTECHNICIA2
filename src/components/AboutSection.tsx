import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Users, TrendingUp, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

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

// Fixed Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      // Parse value once at the start
      let targetValue = parseInt(value);
      if (value.toLowerCase().includes('k')) {
        targetValue = parseInt(value.replace('k', '')) * 1000;
      }
      
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentCount = Math.floor(progress * targetValue);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  // Update display formatting
  const formatValue = (num) => {
    if (value.toLowerCase().includes('k')) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1);
    }
    return num;
  };

  return (
    <div ref={ref} className="inline-block">
      {formatValue(count)}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-16 sm:pb-20 sm:pt-16 md:py-20  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed px-4">
              EVTECHNICIA is India's first dedicated trade fair focused exclusively on the electric vehicle aftermarket where suppliers, manufacturers, and industry experts to network, demonstrate innovation, and talk about the future of the e-mobility industry. In India's quickly growing EV market, EVTECHNICIA showcase a variety of products, from batteries and motors to charging infrastructure and smart technology, encouraging collaborations and business expansion. A platform for showcasing cutting-edge goods and technologies, industry insights, and networking chances with decision-makers are some of the main advantages. The show focus on what happens after the vehicle leaves the showroom: service, spares, accessories and repair. 
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
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
              {[
                { value: '200', suffix: '+', label: 'Exhibitor' },
                { value: '12k', suffix: '+', label: 'Trade Visitors' },
                { value: '10', suffix: '+', label: 'Country' },
                { value: '3', suffix: '', label: 'Days of Innovation' },
                { value: '10', suffix: '+', label: 'Conference Session' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary glow-text mb-2 sm:mb-3 leading-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;