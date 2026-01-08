import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Users, Target, Award, TrendingUp, Zap, Wrench, Battery, Car, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoSection from '@/components/ContactInfoSection';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';
import ClickToExhibitButton from '@/components/forms/ExhibitorRegistrationForm';

const ExhibitPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const advantages = [
    {
      icon: Users,
      title: 'B2B Focused',
      description: 'Strictly trade visitors. No crowd, just serious business discussions.',
    },
    {
      icon: Building,
      title: 'Dual Exposure',
      description: 'Capture the attention of pure-play EV start-ups and established legacy auto players in one booth.',
    },
    {
      icon: Award,
      title: 'Technical Authority',
      description: 'Position your brand as a thought leader by hosting technical sessions for mechanics and engineers.',
    },
  ];

  const exhibitorProfile = [
    'EV Spare Parts',
    'Vehicle Accessories',
    'EV Consumables',
    'Charging Infrastructure',
    'Batteries & Storage',
    'Battery Management Systems',
    'Retrofit & Upgrades',
    'Tools & Equipment\'s',
    'Motors & Drives',
    'Inverters & Connectors',
    'Lightweight Body',
    'Chassis Materials',
    'Converters & Relays',
    'IOT Devices',
    'Testing Agencies & Institutions',
    'Electric Components',
    'Software & Technology',
    'Auto Entertainment Systems',
  ];

  const stats = [
    { value: '10K+', label: 'Qualified Buyers', icon: Users },
    { value: '500+', label: 'Exhibitors', icon: Building },
    { value: '85%', label: 'Decision Makers', icon: Award },
    { value: '50+', label: 'Countries', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
                Exhibit With Us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Access Buyers Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Build & Service</span> the Future
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                The exclusive "transition" audience: Traditional automotive distributors and workshop owners actively pivoting to EV—with capital ready to invest.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative py-6 sm:pt-6 bg-dark-elevated/50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Key <span className="text-primary">Benefits</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <advantage.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="glow-card rounded-2xl p-6 h-full">
                      <div className="font-orbitron text-2xl md:text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Exhibit Gallery Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
                Exhibit <span className="text-primary">Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + item * 0.05 }}
                    className="glow-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                      <div className="text-center">
                        <img src={`/exhibit-event-gallery/${item}.jpeg`} alt="Events Images" className='max-w-full max-h-full object-contain' />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exhibitor Profile */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Exhibitor <span className="text-primary">Profile</span>
              </h2>
            </motion.div>

            <div className="glow-card rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {exhibitorProfile.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
                    className="text-center group"
                  >
                    <div className="glow-card rounded-xl p-4 max-h-[200px] hover:border-primary/50 transition-all duration-500">
                      <div className="w-8 h-8 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                        <Building className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs text-foreground group-hover:text-primary transition-colors leading-tight">
                        {category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-dark-elevated/50 to-background overflow-hidden">
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
                  Ready to <span className="text-primary">Exhibit?</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join the premier EV aftermarket exhibition and connect with thousands of qualified buyers looking to transition
                  their businesses to electric vehicles. Secure your booth today and gain access to the exclusive "transition" audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <ClickToExhibitButton />
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

export default ExhibitPage;
