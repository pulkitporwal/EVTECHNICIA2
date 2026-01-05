import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceLikeNoOther from '@/components/ExperienceLikeNoOther';
import ShowcaseBrands from '@/components/ShowcaseBrands';
import WhereEVMeets from '@/components/WhereEVMeets';
import CinematicStory from '@/components/CinematicStory';
import ComponentsSection from '@/components/ComponentsSection';
import WhyExhibitSection from '@/components/WhyExhibitSection';
import VisitorsSection from '@/components/VisitorsSection';
import ConcurrentShow from '@/components/ConcurrentShow';
import ContactInfoSection from '@/components/ContactInfoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';

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
        <ExperienceLikeNoOther />
        <ShowcaseBrands />
        <WhereEVMeets />
        <ConcurrentShow />
        <CinematicStory />
        <ComponentsSection />
        <WhyExhibitSection />
        <VisitorsSection />
        <ContactSection />
        <AssociationsAndMedia />
        <ContactInfoSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
