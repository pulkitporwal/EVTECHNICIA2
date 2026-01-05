import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Users, Target, Award, TrendingUp, Zap, Wrench, Battery, Car, ArrowRight, Shield, Eye, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoSection from '@/components/ContactInfoSection';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';
import BookStallButton from '@/components/buttons/BookStallButton';
import RegisterToVisitButton from '@/components/buttons/RegisterVisitButton';

const VisitorPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const visitorTypes = [
    {
      icon: Building,
      title: 'OEMs & Manufacturers',
      description: 'Businesses that make EV parts & components, infrastructure for charging, and electric vehicles.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Suppliers',
      description: 'Companies that supply the EV supply chain with materials, software, and other essential components.',
      color: 'secondary',
    },
    {
      icon: Target,
      title: 'Distributors & Dealers',
      description: 'Retailers and wholesalers of EV components, batteries, and allied products.',
      color: 'accent',
    },
    {
      icon: Wrench,
      title: 'Service Providers & Garages',
      description: 'Service providers and garages for EV automobiles of all kinds.',
      color: 'primary',
    },
    {
      icon: Award,
      title: 'Automotive Professionals',
      description: 'Engineers, designers, and other technical specialists are considered automotive professionals.',
      color: 'secondary',
    },
    {
      icon: Eye,
      title: 'Buyers and Decision-Makers',
      description: 'OEMs and other companies looking for new suppliers and technological solutions.',
      color: 'accent',
    },
    {
      icon: Shield,
      title: 'Policymakers & Government Representatives',
      description: 'Those in charge of forming the e-mobility ecosystem.',
      color: 'primary',
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurs & Investors',
      description: 'People with an interest in the EV market\'s potential for expansion.',
      color: 'secondary',
    },
    {
      icon: Car,
      title: 'Fleet Owners & Aggregators',
      description: 'Multiple EV owners like transporters, fleet owners and EV taxis owners.',
      color: 'accent',
    },
    {
      icon: Building,
      title: 'Ministries & Municipalities',
      description: 'Mostly Govt. departments and municipalities purchasing EV vehicles.',
      color: 'primary',
    },
  ];

  const experiences = [
    {
      icon: Battery,
      title: 'Source-to-Sourceable',
      description: 'Find OEM-grade EV components and specialized spare parts that are difficult to find source.',
    },
    {
      icon: Zap,
      title: 'Future-Proof Your Workshop',
      description: 'See the latest diagnostic tools and safety equipment required to service high-voltage electric vehicles.',
    },
    {
      icon: Users,
      title: 'Meet the Innovators',
      description: 'Direct access to R&D heads and engineers from top EV component start-ups.',
    },
    {
      icon: Target,
      title: 'Retrofitting Opportunities',
      description: 'Learn how to enter the booming market of converting old petrol vehicles to electric.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Exhibitors', icon: Building },
    { value: '15K+', label: 'Trade Visitors', icon: Users },
    { value: '50+', label: 'Countries', icon: Target },
    { value: '1000+', label: 'Products', icon: Zap },
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
                Visit EVTECHNICIA
              </span>
              <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                One Badge. <span className="text-gradient">Two Worlds</span>. The Complete Mobility Ecosystem.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
                Why You Cannot Miss This: Visiting EV TECHNICIA gives you a front-row seat to the engineering shifts 
                redefining the road. Whether you are a supplier, garage owner fearing obsolescence or a fleet operator looking to electrify, this is your 
                playbook for survival and growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visitor Types */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Who Should <span className="text-primary">Visit</span>?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {visitorTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Experience */}
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
                What You Will <span className="text-primary">Experience</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="glow-card rounded-2xl p-6 h-full">
                      <div className="font-orbitron text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visitor Gallery Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
                Visitor <span className="text-primary">Experience</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + item * 0.05 }}
                    className="glow-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex overflow-hidden items-center justify-center border border-primary/20">
                      <div className="text-center">
                        <img src={`/visitor-event-gallery/${item}.jpeg`} alt="Event Gallery" className='max-w-full max-h-full object-contain' />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-dark-elevated/50 to-background overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="glow-card rounded-2xl p-8 max-w-4xl mx-auto border-primary/30">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                  Ready to <span className="text-primary">Visit?</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join thousands of industry professionals, EV experts, and trade visitors at India's premier 
                  EV aftermarket exhibition. Secure your spot today and be part of the electric revolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <RegisterToVisitButton 
                    onClick={() => window.location.href = '/register-visitor'}
                    className="px-8 py-4 text-lg"
                  />
                </div>
              </div>
            </motion.div>
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

export default VisitorPage;
