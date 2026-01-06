import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Globe, Users, Award, TrendingUp, Target, Handshake, Lightbulb, Battery, Car, Wrench, Plug, ShowerHead } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoSection from '@/components/ContactInfoSection';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';

const AboutPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const keyFeatures = [
        {
            icon: Zap,
            title: 'EV Aftermarket Focus',
            description: 'First trade fair exclusively dedicated to electric vehicle aftermarket, service, spares, accessories and repair solutions.',
        },
        {
            icon: Globe,
            title: 'India\'s Growing Market',
            description: 'Showcase products in India\'s rapidly expanding EV market with millions of vehicles entering repair cycle.',
        },
        {
            icon: Users,
            title: 'Industry Networking',
            description: 'Connect with suppliers, manufacturers, and industry experts to forge strategic partnerships.',
        },
        {
            icon: Award,
            title: 'Innovation Showcase',
            description: 'Platform for demonstrating cutting-edge EV components and smart technologies.',
        },
    ];

    const productRange = [
        'Batteries and Energy Storage',
        'Motors and Drives',
        'Charging Infrastructure',
        'EV Components',
        'Smart Technology',
        'Service Tools',
        'Accessories',
        'Software Solutions',
    ];

    const advantages = [
        {
            icon: TrendingUp,
            title: 'Market Leadership',
            description: 'Establish your brand as leader in India\'s emerging EV aftermarket.',
        },
        {
            icon: Target,
            title: 'Targeted Audience',
            description: 'Reach qualified buyers specifically seeking EV solutions and services.',
        },
        {
            icon: Handshake,
            title: 'Business Expansion',
            description: 'Forge partnerships with OEMs, suppliers, and service providers.',
        },
        {
            icon: Lightbulb,
            title: 'Industry Insights',
            description: 'Gain knowledge from experts shaping the future of e-mobility.',
        },
    ];

    const stats = [
        { value: '200+', label: 'Exhibitors', icon: Globe },
        { value: '12K+', label: 'Trade Visitors', icon: Users },
        { value: '10+', label: 'Countries', icon: Target },
        { value: '3', label: 'Days of Innovation', icon: Award },
        { value: '10+', label: 'Conference Session', icon: ShowerHead },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
                <div className="absolute inset-0 circuit-pattern opacity-30" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                                About EVTECHNICIA
                            </span>
                            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                                India\'s First <span className="text-gradient">EV Aftermarket</span> Trade Fair
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
                                EVTECHNICIA is India's first dedicated trade fair focused exclusively on the electric vehicle aftermarket
                                where suppliers, manufacturers, and industry experts to network, demonstrate innovation, and talk about
                                the future of e-mobility industry.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-12">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="glow-card rounded-2xl p-6 h-full">
                                            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                                                <stat.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="font-orbitron text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            {/* Left Column - Main Description */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="glow-card rounded-2xl p-8">
                                    <h2 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                                        Revolutionizing <span className="text-primary">EV Aftermarket</span>
                                    </h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            In India's quickly growing EV market, EVTECHNICIA showcases a variety of products, from batteries and motors
                                            to charging infrastructure and smart technology, encouraging collaborations and business expansion.
                                        </p>
                                        <p>
                                            A platform for showcasing cutting-edge goods and technologies, industry insights, and networking chances
                                            with decision-makers are some of the main advantages.
                                        </p>
                                        <p>
                                            The show focus on what happens after the vehicle leaves the showroom: <strong>service, spares,
                                                accessories and repair</strong>.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column - Key Features */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <div className="glow-card rounded-2xl p-8">
                                    <h3 className="font-orbitron text-xl font-bold mb-6 text-foreground">
                                        Key <span className="text-primary">Features</span>
                                    </h3>
                                    <div className="space-y-6">
                                        {keyFeatures.map((feature, index) => (
                                            <div key={feature.title} className="flex gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <feature.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Product Range */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mb-16"
                        >
                            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
                                Product <span className="text-primary">Showcase</span>
                            </h3>
                            <div className="glow-card rounded-2xl p-8">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                    {productRange.map((product, index) => (
                                        <motion.div
                                            key={product}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                                            className="text-center group"
                                        >
                                            <div className="glow-card rounded-xl p-4 h-full hover:border-primary/50 transition-all duration-500">
                                                <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                                                    <Battery className="w-5 h-5 text-primary" />
                                                </div>
                                                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                                                    {product}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Advantages */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h3 className="font-orbitron text-2xl font-bold text-center mb-8">
                                Main <span className="text-primary">Advantages</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {advantages.map((advantage, index) => (
                                    <motion.div
                                        key={advantage.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                        className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                                    >
                                        <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                                            <advantage.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-orbitron text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {advantage.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {advantage.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AssociationsAndMedia />

            <ContactInfoSection />

            <Footer />
        </div>
    );
};

export default AboutPage;
