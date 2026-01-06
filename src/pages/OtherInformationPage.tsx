import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';
import HotelsAndTravel from '@/components/HotelsAndTravel';

const OtherInformationPage = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Other Information - EVTECHNICIA 2026 | Partners, Hotels & Travel';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'EVTECHNICIA 2026 - Find supporting associations, media partners, hotels, and travel information. Complete guide for your visit to the electric vehicle components exhibition.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'EVTECHNICIA 2026 - Find supporting associations, media partners, hotels, and travel information. Complete guide for your visit to the electric vehicle components exhibition.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24">
        {/* Page Header */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background via-dark-elevated to-background">
          <div className="absolute inset-0 circuit-pattern opacity-30" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Other <span className="text-gradient">Information</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find everything you need for your visit to EVTECHNICIA 2026 - from supporting associations and media partners to hotels and travel arrangements.
              </p>
            </div>
          </div>
        </section>
        {/* Hotels and Travel Content */}
        <HotelsAndTravel />

        {/* Partners and Associations Content */}
        <AssociationsAndMedia />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OtherInformationPage;
