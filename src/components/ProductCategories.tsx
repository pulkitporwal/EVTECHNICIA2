import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Battery, Zap, Wrench, Cpu, Package, Settings, Monitor, Smartphone, Car, Plug, Wifi, Shield, TestTube, Microchip, Music, Radio } from 'lucide-react';

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    {
      title: 'EV Spare Parts',
      description: 'Complete range of replacement parts for electric vehicles',
      icon: Car,
      items: ['Motors', 'Controllers', 'Sensors', 'Brakes', 'Suspension'],
      color: 'primary',
    },
    {
      title: 'Vehicle Accessories',
      description: 'Enhancement and customization products for EVs',
      icon: Package,
      items: ['Interior Upgrades', 'Exterior Accessories', 'Lighting', 'Storage Solutions'],
      color: 'secondary',
    },
    {
      title: 'EV Consumables',
      description: 'Regular maintenance and operational supplies',
      icon: Wrench,
      items: ['Coolants', 'Lubricants', 'Cleaning Products', 'Filters'],
      color: 'accent',
    },
    {
      title: 'Charging Infrastructure',
      description: 'Home, commercial, and public charging solutions',
      icon: Zap,
      items: ['Fast Chargers', 'Home Chargers', 'Charging Cables', 'Charge Points'],
      color: 'primary',
    },
    {
      title: 'Batteries & Storage',
      description: 'Advanced battery systems and energy storage',
      icon: Battery,
      items: ['Lithium-ion', 'Solid State', 'Battery Packs', 'Storage Systems'],
      color: 'secondary',
    },
    {
      title: 'Battery Management Systems',
      description: 'Intelligent battery monitoring and control systems',
      icon: Monitor,
      items: ['BMS Hardware', 'Monitoring Software', 'Cell Balancers', 'Protection Systems'],
      color: 'accent',
    },
    {
      title: 'Retrofit & Upgrades',
      description: 'Conversion kits and vehicle enhancement solutions',
      icon: Settings,
      items: ['EV Conversion Kits', 'Performance Upgrades', 'Range Extenders', 'Retrofit Solutions'],
      color: 'primary',
    },
    {
      title: 'Tools & Equipment',
      description: 'Specialized tools for EV service and repair',
      icon: Wrench,
      items: ['Diagnostic Tools', 'Service Equipment', 'Safety Gear', 'Testing Devices'],
      color: 'secondary',
    },
    {
      title: 'Motors & Drives',
      description: 'Electric propulsion systems and components',
      icon: Cpu,
      items: ['Hub Motors', 'Axial Motors', 'Drive Controllers', 'Power Electronics'],
      color: 'accent',
    },
    {
      title: 'Inverters & Connectors',
      description: 'Power conversion and electrical connection solutions',
      icon: Wifi,
      items: ['DC-AC Inverters', 'Power Connectors', 'Wiring Harnesses', 'Electrical Components'],
      color: 'primary',
    },
    {
      title: 'Lightweight Materials',
      description: 'Advanced materials for vehicle construction',
      icon: Shield,
      items: ['Carbon Fiber', 'Aluminum Alloys', 'Composite Materials', 'Lightweight Steel'],
      color: 'secondary',
    },
    {
      title: 'Converters & Relays',
      description: 'Electrical control and conversion components',
      icon: Settings,
      items: ['DC-DC Converters', 'Power Relays', 'Voltage Regulators', 'Control Modules'],
      color: 'accent',
    },
    {
      title: 'IoT Devices',
      description: 'Connected vehicle technology and smart devices',
      icon: Smartphone,
      items: ['Vehicle Trackers', 'Telematics', 'Smart Sensors', 'Connected Devices'],
      color: 'primary',
    },
    {
      title: 'Testing Agencies',
      description: 'Certification and testing service providers',
      icon: TestTube,
      items: ['Safety Testing', 'Performance Testing', 'Compliance Certification', 'Quality Assurance'],
      color: 'secondary',
    },
    {
      title: 'Electric Components',
      description: 'Essential electrical and electronic components',
      icon: Microchip,
      items: ['Capacitors', 'Resistors', 'Semiconductors', 'Circuit Boards'],
      color: 'accent',
    },
    {
      title: 'Software & Technology',
      description: 'Digital solutions for EV management and optimization',
      icon: Monitor,
      items: ['Fleet Management', 'Battery Analytics', 'Diagnostic Software', 'OTA Updates'],
      color: 'primary',
    },
    {
      title: 'Auto Entertainment Systems',
      description: 'In-vehicle entertainment and information systems',
      icon: Music,
      items: ['Infotainment Systems', 'Audio Systems', 'Video Displays', 'Connectivity Solutions'],
      color: 'secondary',
    },
  ];

  return (
    <section id="product-categories" className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
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
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
              Product Range
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the complete ecosystem of EV components, accessories, and solutions all under one roof.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="glow-card rounded-2xl p-6 group hover:border-primary/50 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.items.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs text-foreground/80">{item}</span>
                    </div>
                  ))}
                  {category.items.length > 3 && (
                    <div className="text-xs text-primary font-medium">
                      +{category.items.length - 3} more
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="glow-card rounded-2xl p-8 max-w-4xl mx-auto border-primary/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-orbitron text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Exhibitors</div>
                </div>
                <div>
                  <div className="font-orbitron text-3xl font-bold text-accent mb-2">18</div>
                  <div className="text-sm text-muted-foreground">Product Categories</div>
                </div>
                <div>
                  <div className="font-orbitron text-3xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Products Displayed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
