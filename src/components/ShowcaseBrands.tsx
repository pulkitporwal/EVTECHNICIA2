import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store, TrendingUp, Users, ArrowRight, Zap, Award, Target } from 'lucide-react';

const ShowcaseBrands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '10M+', label: 'EVs on Indian Roads', icon: Zap },
    { value: '3 Years', label: 'Average Vehicle Age', icon: TrendingUp },
    { value: '₹50,000Cr', label: 'Aftermarket Opportunity', icon: Award },
    { value: '2025', label: 'Market Peak Expected', icon: Target },
  ];

  const opportunities = [
    {
      title: 'First-Mover Advantage',
      description: 'Establish your brand as the preferred supplier before competition intensifies',
      icon: Target,
      benefits: ['Brand Recognition', 'Market Leadership', 'Customer Loyalty'],
    },
    {
      title: 'Direct OEM Access',
      description: 'Connect directly with vehicle manufacturers seeking reliable suppliers',
      icon: Users,
      benefits: ['Bulk Contracts', 'Long-term Partnerships', 'Quality Standards'],
    },
    {
      title: 'Growing Demand',
      description: 'Tap into the expanding EV aftermarket with exponential growth potential',
      icon: TrendingUp,
      benefits: ['Revenue Growth', 'Market Expansion', 'Scalability'],
    },
    {
      title: 'Technology Showcase',
      description: 'Demonstrate innovative solutions to qualified industry buyers',
      icon: Store,
      benefits: ['Product Validation', 'Industry Feedback', 'Innovation Recognition'],
    },
  ];

  const productCategories = [
    'EV Spare Parts',
    'Vehicle Accessories', 
    'EV Consumables',
    'Charging Infrastructure',
    'Batteries & Storage',
    'Battery Management Systems',
    'Retrofit & Upgrades',
    'Tools & Equipment',
    'Motors & Drives',
    'Inverters & Connectors',
    'Lightweight Materials',
    'Converters & Relays',
    'IoT Devices',
    'Testing Agencies',
    'Electric Components',
    'Software & Technology',
    'Auto Entertainment',
  ];

  return (
    <section id="showcase-brands" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
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
              Supplier Opportunity
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Showcase your Brands to <span className="text-gradient">Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The EVs are on the road. The first generation of EVs in India is aging. Warranty periods are ending, 
              and the secondary market is exploding. EVTECHNICIA is your opportunity to establish your brand as 
              "go-to" supplier for EV spares and accessories before the market gets saturated.
            </p>
          </motion.div>

    

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <opportunity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-orbitron text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {opportunity.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-xs text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Product <span className="text-primary">Categories</span>
            </h3>
            <div className="max-w-6xl mx-auto">
              <div className="glow-card rounded-2xl p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {productCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.02 }}
                      className="text-center group"
                    >
                      <div className="glow-card rounded-lg p-3 h-full hover:border-primary/50 transition-all duration-500">
                        <span className="text-xs text-foreground group-hover:text-primary transition-colors leading-tight">
                          {category}
                        </span>
                      </div>
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
            <div className="glow-card rounded-2xl p-8 max-w-2xl mx-auto border-primary/30">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">
                Secure Your <span className="text-primary">Market Position</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Don't miss this opportunity to establish your brand in India's rapidly growing EV aftermarket. 
                Limited exhibition spaces available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg font-medium btn-glow transition-all duration-300">
                  Book Exhibition Space
                </button>
                <button className="px-8 py-3 border-2 border-primary/50 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBrands;
