import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Users, Building, Phone, Mail, MapPin, Globe, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoSection from '@/components/ContactInfoSection';
import ClickToExhibitButton from '@/components/forms/ExhibitorRegistrationForm';
import RegisterAsVisitorButton from '@/components/forms/VisitorRegistrationForm';

const DownloadsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mainDownloads = [
    {
      icon: FileText,
      title: 'Download Brochure',
      description: 'Explore event highlights, exhibitor listings, and must-know details',
      action: 'Download Now',
      filePath: '/documents/brochure.pdf',
    },
    {
      icon: FileText,
      title: 'Domestic Contract Form',
      description: 'Complete contract for booth booking and participation',
      action: 'Download Now',
      filePath: '/documents/domestic-contract-form.pdf',
    },
    {
      icon: FileText,
      title: 'International Contract Form',
      description: 'For international exhibitors participation',
      action: 'Download Now',
      filePath: '/documents/international-contract-form.pdf',
    },
    {
      icon: Shield,
      title: 'Rules & Regulations',
      description: 'Get familiar with event rules and safety protocols',
      action: 'Download Now',
      filePath: '/documents/rulesandregulations.pdf',
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
                Downloads
              </span>
              <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                Everything You Need, <span className="text-gradient">All in One Place</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
                Access brochures, floorplans, contact forms, and key resources to help you prepare for EVTECHNICIA.
                Whether you're exhibiting or visiting, find all the information you need to make the most of your experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <ClickToExhibitButton />
                <RegisterAsVisitorButton />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Downloads */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Essential <span className="text-primary">Downloads</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {mainDownloads.map((download, index) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <download.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {download.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {download.description}
                  </p>
                  <a
                    href={download.filePath}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg transition-all duration-300 flex items-center mx-auto group"
                  >
                    {download.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Features */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">
                Your <span className="text-primary">Resource Stop</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  All-in-One Brochure
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explore event highlights, exhibitor listings, and must-know details—all compiled in one comprehensive, easy-to-navigate digital brochure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Easy Contact Access
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reach out to our dedicated support team with ease for event inquiries, assistance, or information before, during, or after the show.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="glow-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Know Before You Go
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get familiar with event rules, safety protocols, and participation guidelines to ensure a smooth and well-prepared visit to Auto Technicia.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center"
            >
              <div className="glow-card rounded-2xl p-8 max-w-4xl mx-auto border-primary/30">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                  Reserve Your Spot at <span className="text-primary">AutoTechnicia</span> Today!
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join thousands of industry professionals at India's premier EV aftermarket exhibition.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <ClickToExhibitButton />
                  <RegisterAsVisitorButton />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <ContactInfoSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DownloadsPage;
