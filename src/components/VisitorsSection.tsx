import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Car, 
  Factory, 
  Building, 
  Briefcase, 
  FlaskConical, 
  Truck,
  Newspaper,
  Landmark,
  Battery,
  Leaf,
  Plug,
  Users
} from 'lucide-react';
import RegisterToVisitButton from '@/components/buttons/RegisterToVisitButton';

const visitorProfiles = [
  { icon: Car, label: 'EV OEMs' },
  { icon: Factory, label: 'EV Automotive Manufacturers' },
  { icon: Briefcase, label: 'Fleet Owners & Management' },
  { icon: Battery, label: 'Battery & Energy Storage Companies' },
  { icon: Building, label: 'EV Startups' },
  { icon: FlaskConical, label: 'R&D Centres & Testing Agencies' },
  { icon: Plug, label: 'Charging Infra Companies' },
  { icon: Leaf, label: 'Renewable Energy & Power Services' },
  { icon: Truck, label: 'Distributors & Wholesalers' },
  { icon: Users, label: 'EV Component Manufacturers' },
  { icon: Newspaper, label: 'Associations & Trade Media' },
  { icon: Landmark, label: 'Govt. Departments' },
];

const expectations = [
  {
    title: 'See Products in Action',
    description: 'View product demonstrations to understand features, functionality, and benefits more deeply than you can online.',
  },
  {
    title: 'Compare Options',
    description: 'Evaluate and compare a wide range of products, suppliers, and their prices all in one place and in a short amount of time.',
  },
  {
    title: 'Source New Suppliers',
    description: 'Find new suppliers and partners to improve your business operations and supply chain.',
  },
  {
    title: 'Unlimited Networking',
    description: 'Opportunities for intense networking, learning through conference, and chance to meet serious partners.',
  },
];

const VisitorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="visitors" className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
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
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
              For Visitors
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Trade <span className="text-gradient">Visitor's</span> Profile
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join the future of sustainable transportation. Connect with key stakeholders from across the EV ecosystem.
            </p>
          </motion.div>

          {/* Visitor Profiles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20"
          >
            {visitorProfiles.map((profile, index) => (
              <motion.div
                key={profile.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group"
              >
                <div className="glow-card h-full rounded-xl p-5 text-center transition-all duration-500 hover:border-primary/50">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <profile.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {profile.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Register to Visit Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <RegisterToVisitButton className="px-8 py-3" />
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-10">
              What to <span className="text-primary">Expect</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectations.map((item, index) => (
                <div key={item.title} className="relative">
                  <div className="glow-card h-full rounded-2xl p-6 transition-all duration-500">
                    {/* Number */}
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-5">
                      <span className="font-orbitron text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    
                    <h4 className="font-orbitron text-base font-semibold mb-3 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitorsSection;
