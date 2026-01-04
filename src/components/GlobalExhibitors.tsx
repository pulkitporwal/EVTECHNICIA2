import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, MapPin, Star, ArrowRight } from 'lucide-react';

const GlobalExhibitors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const regions = [
    { name: 'Asia Pacific', flag: '🌏', exhibitors: '150+', description: 'Leading EV manufacturers from China, Japan, Korea, and India' },
    { name: 'Europe', flag: '🌍', exhibitors: '80+', description: 'Premium EV component suppliers from Germany, France, and UK' },
    { name: 'North America', flag: '🌎', exhibitors: '60+', description: 'Innovative EV technology companies from USA and Canada' },
    { name: 'Middle East', flag: '🌐', exhibitors: '40+', description: 'Emerging EV market players from UAE and Saudi Arabia' },
  ];

  const featuredBrands = [
    { name: 'Tesla Components', region: 'North America', specialty: 'Battery Systems' },
    { name: 'BYD Parts', region: 'Asia Pacific', specialty: 'EV Motors' },
    { name: 'Bosch EV', region: 'Europe', specialty: 'Sensors' },
    { name: 'Panasonic Energy', region: 'Asia Pacific', specialty: 'Battery Tech' },
    { name: 'Continental AG', region: 'Europe', specialty: 'EV Electronics' },
    { name: 'LG Energy', region: 'Asia Pacific', specialty: 'Storage Solutions' },
  ];

  return (
    <section id="global-exhibitors" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
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
              International Presence
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Global Exhibitors</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet top brands from around the world, all under one roof. Explore their latest innovations and discover what's leading the future.
            </p>
          </motion.div>

          {/* Regional Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500"
              >
                <div className="text-4xl mb-3">{region.flag}</div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {region.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-2">{region.exhibitors}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {region.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Featured Brands */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
              Featured <span className="text-primary">Brands</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  className="glow-card rounded-xl p-5 group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {brand.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{brand.region}</span>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">{brand.specialty}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                25+ Countries Represented
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExhibitors;
