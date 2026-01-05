import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Battery, Zap, Target, Award, Globe, Building, Users, ArrowRight, BarChart3, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoSection from '@/components/ContactInfoSection';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';

const MarketPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const marketStats = [
    { value: '16.5', label: 'USD Billion by 2030', icon: DollarSign },
    { value: '37.56%', label: 'CAGR 2025-2030', icon: TrendingUp },
    { value: '49%', label: 'CAGR 2022-2030', icon: BarChart3 },
  ];

  const opportunities = [
    {
      icon: Battery,
      title: 'Battery Cells',
      description: 'The largest opportunity lies in advanced chemistry cells, which are currently imported. Localization of battery manufacturing is a major focus for reducing costs and increasing supply chain security.',
      color: 'primary',
    },
    {
      icon: Zap,
      title: 'Powertrain Components',
      description: 'There is high demand for components such as traction motors and control units.',
      color: 'secondary',
    },
    {
      icon: Building,
      title: 'Chassis & Other Components',
      description: 'As EV adoption increases, there will be greater demand for a wider range of components, including those that are locally manufactured.',
      color: 'accent',
    },
  ];

  const futureProspects = [
    {
      icon: Target,
      title: 'Government Support',
      description: 'Policies like Production-Linked Incentive (PLI) scheme are crucial for reducing costs and promoting local manufacturing.',
    },
    {
      icon: TrendingUp,
      title: 'Increased Investment',
      description: 'Significant investments are being made in EV manufacturing and component production, including battery gigafactories.',
    },
    {
      icon: Globe,
      title: 'Global Hub Potential',
      description: 'India has the potential to become a major manufacturing hub for EV components and to export them globally.',
    },
    {
      icon: Users,
      title: 'Job Creation',
      description: 'The growth of the EV component market is expected to create a large number of jobs in manufacturing and related services.',
    },
  ];

  const marketDrivers = [
    {
      icon: Users,
      title: 'Strong Consumer Demand',
      description: 'This growth is fuelled by strong consumer demand, particularly for electric two-wheelers and government initiatives.',
    },
    {
      icon: Building,
      title: 'Government Initiatives',
      description: 'Subsidies, tax benefits, and preferential procurement policies are driving adoption across all vehicle segments.',
    },
    {
      icon: Zap,
      title: 'Infrastructure Development',
      description: 'Massive investments in charging networks and battery swapping stations are enabling wider EV adoption.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                EV Component Market
              </span>
              <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                Market & Future <span className="text-gradient">Prospects</span> in India
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
                Rising EV sales and government assistance are driving the robust expansion of the Indian EV component market, which is expected to rise 
                significantly by 2030. As India seeks to localise more of its supply chain, manufacturing advanced battery cells, 
                traction motors, and control units are important potential. The government's push for EV adoption and production is anticipated to spur investment 
                and local production, establishing India as a global powerhouse for EV component manufacturing, thus future seems bright.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Market <span className="text-primary">Overview</span> & Growth
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="glow-card rounded-2xl p-8 h-full">
                    <div className="font-orbitron text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Opportunities */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Key <span className="text-primary">Opportunities</span> in EV Component Market
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <opportunity.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {opportunity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Drivers */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Market <span className="text-primary">Drivers</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {marketDrivers.map((driver, index) => (
                <motion.div
                  key={driver.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                  className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <driver.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {driver.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {driver.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Prospects */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Future <span className="text-primary">Prospects</span> & Outlook
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {futureProspects.map((prospect, index) => (
                <motion.div
                  key={prospect.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <prospect.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {prospect.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prospect.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Associations and Media */}
      <AssociationsAndMedia />

      {/* Contact Info */}
      <ContactInfoSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketPage;
