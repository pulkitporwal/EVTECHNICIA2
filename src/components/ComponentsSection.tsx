import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Battery, 
  Plug, 
  Cpu, 
  Settings, 
  Headphones, 
  Building2,
  Zap,
  Monitor
} from 'lucide-react';
import batteryImg from '@/assets/battery-tech.jpg';
import chargingImg from '@/assets/charging-tech.jpg';
import motorImg from '@/assets/motor-tech.jpg';

const categories = [
  {
    title: 'Battery & Energy Storage',
    icon: Battery,
    items: ['Battery Manufacturers & Modules', 'Battery Management Systems (BMS)', 'Energy Storage Solutions', 'Battery Recycling'],
  },
  {
    title: 'Charging Infrastructure',
    icon: Plug,
    items: ['AC, DC, Fast & Ultra-Fast Chargers', 'Battery Swapping Stations', 'Charging Management Software', 'Grid Integration'],
  },
  {
    title: 'Software & Technology',
    icon: Cpu,
    items: ['Telematics & IoT', 'AI & Analytics for EVs', 'Autonomous Driving / ADAS', 'Predictive Maintenance Tools'],
  },
  {
    title: 'EV Components & Parts',
    icon: Settings,
    items: ['Motors, Controllers, Powertrains', 'Converters, Inverters, Relays', 'Wiring Harness & Sensors', 'Lightweight Materials'],
  },
  {
    title: 'EV Accessories',
    icon: Headphones,
    items: ['Charging Cables & Adapters', 'LED Headlamps', 'Audio Systems', 'Display & Meters'],
  },
  {
    title: 'Media & Associations',
    icon: Building2,
    items: ['Trade Magazines & Portals', 'Testing & Certification Bodies', 'Industry Associations', 'Research Councils'],
  },
];

const ComponentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="components" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
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
            <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm mb-6">
              What's On Display
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Complete <span className="text-gradient">EV Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the full spectrum of EV components and technologies shaping the future of sustainable mobility.
            </p>
          </motion.div>

          {/* Featured Images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { img: batteryImg, title: 'Battery Technology', icon: Battery },
              { img: chargingImg, title: 'Charging Infrastructure', icon: Zap },
              { img: motorImg, title: 'Electric Motors', icon: Monitor },
            ].map((item, index) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-orbitron text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500" />
              </div>
            ))}
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="glow-card h-full rounded-2xl p-6 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-orbitron text-base font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
