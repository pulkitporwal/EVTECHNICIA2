import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Rocket,
  Award,
  Users,
  Handshake,
  Megaphone,
  Target,
  LineChart,
  Trophy
} from 'lucide-react';
import KnowMoreButton from '@/components/buttons/KnowMoreButton';
import ClickToExhibitButton from './forms/ExhibitorRegistrationForm';

const reasons = [
  {
    icon: LineChart,
    title: 'Market Growth & Policy Support',
    description: 'Capitalize on India\'s supportive policies, rapid EV adoption, and high demand for sustainable mobility solutions.',
    color: 'primary',
  },
  {
    icon: Award,
    title: 'Brand Building & Visibility',
    description: 'Enhance brand presence, stand out from competitors, and gain market recognition in India\'s fast-evolving EV landscape.',
    color: 'secondary',
  },
  {
    icon: Target,
    title: 'Lead Generation & Sales',
    description: 'Directly connect with decision-makers, fleet operators, investors, and end-consumers to generate valuable leads.',
    color: 'accent',
  },
  {
    icon: Handshake,
    title: 'Networking & Partnerships',
    description: 'Meet industry experts, potential collaborators, suppliers, and investors to forge strategic alliances.',
    color: 'primary',
  },
  {
    icon: Rocket,
    title: 'Product Showcase & Innovation',
    description: 'Launch new components, demonstrate existing products, and get real-time feedback from industry professionals.',
    color: 'secondary',
  },
  {
    icon: Users,
    title: 'Access to Key Stakeholders',
    description: 'Engage with OEMs, charging infrastructure players, policymakers, financial institutions, and R&D specialists.',
    color: 'accent',
  },
  {
    icon: Megaphone,
    title: 'Market Intelligence',
    description: 'Understand market trends, competitor activities, and consumer needs through direct interaction and insights.',
    color: 'primary',
  },
  {
    icon: Trophy,
    title: 'First-Mover Advantage',
    description: 'Establish a strong market foothold early in Mumbai region — the only exhibition focused on EV components.',
    color: 'secondary',
  },
];

const WhyExhibitSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="exhibit" className="relative py-16 sm:pb-20 sm:pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

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
              For Exhibitors
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Why <span className="text-gradient">Exhibit</span> With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join the leading platform for EV component manufacturers and suppliers in India's rapidly growing electric vehicle market.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-[40%] w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                    <div className="glow-card relative rounded-2xl p-6 transition-all duration-500 hover:border-primary/50">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/50 z-30">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-${reason.color}/10 border border-${reason.color}/30 flex items-center justify-center mb-4 group-hover:shadow-[0_0_25px_hsl(var(--${reason.color})/0.3)] transition-all duration-500`}>
                        <reason.icon className={`w-6 h-6 text-${reason.color}`} />
                      </div>

                      {/* Content */}
                      <h3 className="font-orbitron text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-10">
              Space <span className="text-primary">Tariff</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Built-up Space */}
              <div className="glow-card rounded-2xl p-8 border-primary/30 hover:border-primary/60 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-orbitron text-xl font-semibold text-foreground">Built-up Space</h4>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">Popular</span>
                </div>
                <div className="mb-6">
                  <span className="font-orbitron text-4xl font-bold text-primary">₹11,500</span>
                  <span className="text-muted-foreground text-sm ml-2">+ GST (18%)</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['1 Table & 3 Chairs', '3 Spot Lights', '1KW Power Socket', 'Paper Dustbin & Carpet'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="w-full">
                  <ClickToExhibitButton className="w-full" />
                </div>
              </div>

              {/* Raw Space */}
              <div className="glow-card rounded-2xl p-8 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-orbitron text-xl font-semibold text-foreground">Raw Space</h4>
                </div>
                <div className="mb-6">
                  <span className="font-orbitron text-4xl font-bold text-accent">₹10,500</span>
                  <span className="text-muted-foreground text-sm ml-2">+ GST (18%)</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Space Only', 'Custom Build Option', 'Flexible Design', 'Electricity Extra @₹4000/KW'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="w-full">
                  <ClickToExhibitButton className="w-full" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyExhibitSection;
