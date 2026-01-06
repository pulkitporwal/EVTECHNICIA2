import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Building, Phone, Mail, MapPin, Globe } from 'lucide-react';

const serviceProviders = [
  {
    title: 'OFFICIAL STAND CONSTRUCTION AGENCY',
    company: 'ACCESS PROMOTIONS',
    address: '118, 1st Flr, Udyog Bhavan Premises Co-Op Society, Sonawala Rd, Goregaon (E), Mumbai 400063',
    contact: 'Mr. Kaushik Kelaskar',
    phone: '+91 99205 63051',
    email: 'kaushik@accesspro.in',
  },
  {
    title: 'OFFICIAL TOUR, TRAVEL & HOTEL PROVIDER',
    company: 'CROCUS TRAVEL PVT. LTD.',
    address: '29/66 2nd Floor, West Patel Nagar, New Delhi -110008',
    contact: 'Mr. Aishwarya Kumar',
    phone: '+9196544 99323 (24×7)',
    email: 'aishwarya@crocustravel.com',
    website: 'www.crocustravel.org',
  },
  {
    title: 'CARGO MOVEMENTS & CLEARANCE',
    company: 'R. E. ROGERS INDIA PVT. LTD.',
    address: '501/502, Midas, Sahar Plaza Complex, Mathuradas Vasanji Road, Andheri (E), Mumbai-400 059',
    contact: 'Mr. Nanhe Mishra / Mr. Dinesh Tambe / Mr. Damodar Shenoy',
    phone: '+91-22-30880313',
    fax: '+91-22-28208942',
    mobiles: ['+91-9819798027', '+91-9920915375', '+91-9920108787'],
    emails: ['nanhe@rogersworldwideindia.com', 'dinesht@rogersworldwideindia.com', 'damodar@rogersworldwideindia.com'],
  },
  {
    title: 'HOSTESSES SERVICE PROVIDER',
    company: 'PREMIER MARKETING',
    address: 'S 13, Zoom Plaza, 2nd Floor, Nr. Gorai Bus Depot, Borivali West, Mumbai – 400091',
    contact: 'Ms. Renuka Uchil / Nisha Vishwakarma',
    phones: ['+ 91 9820214536', '+91-9137567919'],
    email: 'service@premiermktg.in',
  },
];

const HotelsAndTravel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden md:px-12 px-6">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-8">
              Hotels & <span className="text-gradient">Travel</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Official service providers for your accommodation, travel, and logistics needs during EVTECHNICIA 2026
            </p>
          </motion.div>

          <div className="space-y-8">
            {serviceProviders.map((provider, index) => (
              <motion.div
                key={provider.company}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glow-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
              >
                <h3 className="font-orbitron text-xl font-semibold text-primary mb-2">
                  {provider.title}
                </h3>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {provider.company}
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {provider.address}
                  </div>
                  {provider.contact && (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {provider.contact}
                    </div>
                  )}
                  {provider.phone && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      {provider.phone}
                    </div>
                  )}
                  {provider.phones && (
                    <div className="space-y-1">
                      {provider.phones.map((phone, i) => (
                        <div key={i} className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          {phone}
                        </div>
                      ))}
                    </div>
                  )}
                  {provider.fax && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Fax: {provider.fax}
                    </div>
                  )}
                  {provider.email && (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      {provider.email}
                    </div>
                  )}
                  {provider.emails && (
                    <div className="space-y-1">
                      {provider.emails.map((email, i) => (
                        <div key={i} className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          {email}
                        </div>
                      ))}
                    </div>
                  )}
                  {provider.website && (
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-primary" />
                      {provider.website}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsAndTravel;
