import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Building, Truck, Wrench, GraduationCap, Briefcase, Handshake, TrendingUp, Car, Zap, Shield, Award } from 'lucide-react';

const WhereEVMeets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const visitorProfiles = [
    {
      title: 'OEMs & Manufacturers',
      description: 'Businesses that make EV parts & components, infrastructure for charging, and electric vehicles',
      icon: Building,
      percentage: '35%',
      color: 'primary',
    },
    {
      title: 'Suppliers',
      description: 'Companies that supply EV supply chain with materials, software, and other essential components',
      icon: Truck,
      percentage: '25%',
      color: 'secondary',
    },
    {
      title: 'Distributors & Dealers',
      description: 'Retailers and wholesalers of EV components, batteries, and allied products',
      icon: Users,
      percentage: '20%',
      color: 'accent',
    },
    {
      title: 'Service Providers & Garages',
      description: 'Service providers and garages for EV automobiles of all kinds',
      icon: Wrench,
      percentage: '10%',
      color: 'primary',
    },
    {
      title: 'Automotive Professionals',
      description: 'Engineers, designers, and other technical specialists in automotive industry',
      icon: GraduationCap,
      percentage: '5%',
      color: 'secondary',
    },
    {
      title: 'Buyers & Decision-Makers',
      description: 'OEMs and companies looking for new suppliers and technological solutions',
      icon: Briefcase,
      percentage: '3%',
      color: 'accent',
    },
  ];

  const additionalVisitors = [
    {
      title: 'Policymakers & Government',
      description: 'Those in charge of forming e-mobility ecosystem',
      icon: Shield,
      percentage: '1%',
    },
    {
      title: 'Entrepreneurs & Investors',
      description: 'People with interest in EV market\'s potential for expansion',
      icon: TrendingUp,
      percentage: '0.5%',
    },
    {
      title: 'Fleet Owners & Aggregators',
      description: 'Multiple EV owners like transporters, fleet owners and EV taxis',
      icon: Car,
      percentage: '0.4%',
    },
    {
      title: 'Ministries & Municipalities',
      description: 'Govt. departments and municipalities purchasing EV vehicles',
      icon: Award,
      percentage: '0.1%',
    },
  ];

  const benefits = [
    'Source specific inventory for EV owners',
    'Future-proof your business for electric transition',
    'Connect with thousands of industry professionals',
    'Access latest EV technology and innovations',
    'Build strategic partnerships and alliances',
    'Stay ahead of market trends and regulations',
  ];

  return (
    <section id="where-ev-meets" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
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
              Industry Gathering
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Where India's EV OEM & <span className="text-gradient">Aftermarket Meets</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Is your business ready for Electric Vehicle customers? Visiting EVTECHNICIA allows you to future-proof your business 
              because customers who earlier bought petrol vehicles are buying an EV today.
            </p>
          </motion.div>

          {/* Main Visitor Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Primary <span className="text-primary">Visitor Profiles</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitorProfiles.map((profile, index) => (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glow-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <profile.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-orbitron text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {profile.title}
                      </h4>
                      <div className="text-2xl font-bold text-primary">{profile.percentage}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {profile.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Why <span className="text-primary">Visit</span>
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
            <div className="glow-card rounded-2xl p-8 max-w-2xl mx-auto border-primary/30">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">
                Join the <span className="text-primary">EV Revolution</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                EVTECHNICIA is the only place where you can source specific inventory you need to cater to 
                electric vehicle owners. Join thousands of industry professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg font-medium btn-glow transition-all duration-300">
                  Register to Visit
                </button>
                <button className="px-8 py-3 border-2 border-primary/50 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300">
                  Download Visitor Guide
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhereEVMeets;
