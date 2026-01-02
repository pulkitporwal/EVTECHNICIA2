import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CinematicStory from '@/components/CinematicStory';
import ComponentsSection from '@/components/ComponentsSection';
import WhyExhibitSection from '@/components/WhyExhibitSection';
import VisitorsSection from '@/components/VisitorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'EVTECHNICIA 2026 | EV Components & Function Expo | Mumbai, India';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'EVTECHNICIA 2026 - India\'s premier exhibition for electric vehicle components. 22-24 October 2026 at Bombay Exhibition Centre, Mumbai. Network with EV manufacturers, suppliers, and industry experts.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'EVTECHNICIA 2026 - India\'s premier exhibition for electric vehicle components. 22-24 October 2026 at Bombay Exhibition Centre, Mumbai. Network with EV manufacturers, suppliers, and industry experts.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <CinematicStory />
        <ComponentsSection />
        <WhyExhibitSection />
        <VisitorsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
