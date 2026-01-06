import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const associations = [
  { name: 'AIAWA', logo: '/supporting-associations/AIAWA.webp' },
  { name: 'IESA', logo: '/supporting-associations/IESA.webp' },
  { name: 'APMA', logo: '/supporting-associations/apma.webp' },
  { name: 'ARAI', logo: '/supporting-associations/arai.webp' },
  { name: 'IACE', logo: '/supporting-associations/iace.webp' },
  { name: 'Poonam', logo: '/supporting-associations/poonam.webp' },
  { name: 'Rajkot', logo: '/supporting-associations/rajkot.webp' },
  { name: 'Tappa', logo: '/supporting-associations/tappa.webp' },
];

const mediaPartners = [
  { name: '99 Auto Flash', logo: '/media-partners/99-AUTO-FLASH.webp' },
  { name: 'AutoGorilla', logo: '/media-partners/AugoGorilla.webp' },
  { name: 'Auto Mera Sathi', logo: '/media-partners/Auto-Mera-Sathi.webp' },
  { name: 'Autocar Professional', logo: '/media-partners/Autocar-Professional.webp' },
  { name: 'Engineering Core', logo: '/media-partners/EngineeringCore.webp' },
  { name: 'FeedStory Media', logo: '/media-partners/FeedStory-Media.webp' },
  { name: 'Scooter Asia', logo: '/media-partners/Scooter-Asia.webp' },
  { name: 'Aftermarket Service', logo: '/media-partners/aftermarket-service.webp' },
  { name: 'Engineering Review', logo: '/media-partners/engineering-review.webp' },
  { name: 'Motor India', logo: '/media-partners/motorinidia.webp' },
  { name: 'Scooter Motorcycle', logo: '/media-partners/scooter-motorycle.webp' },
];

const AssociationsAndMedia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden lg:px-24 px-12">
      {/* Supporting Associations Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-8">
          Supporting <span className="text-gradient">Associations</span>
        </h3>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {associations.map((association, index) => (
            <motion.div
              key={association.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="glow-card rounded-xl p-4 flex items-center justify-center h-32 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="text-center w-full flex flex-col items-center justify-center h-full">
                <div className="flex-1 flex items-center justify-center w-full mb-2">
                  <img 
                    src={association.logo} 
                    alt={association.name}
                    className="max-w-full max-h-16 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-16 bg-primary/10 rounded flex items-center justify-center text-primary font-semibold text-xs">${association.name}</div>`;
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full">
                  {association.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Media Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-8">
          Media <span className="text-gradient">Partners</span>
        </h3>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {mediaPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
              className="glow-card rounded-xl p-4 flex items-center justify-center h-32 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="text-center w-full flex flex-col items-center justify-center h-full">
                <div className="flex-1 flex items-center justify-center w-full mb-2">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-16 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-16 bg-primary/10 rounded flex items-center justify-center text-primary font-semibold text-xs">${partner.name}</div>`;
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AssociationsAndMedia;