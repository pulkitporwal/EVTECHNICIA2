import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Users, Target, Award, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfoSection from '@/components/ContactInfoSection';
import AssociationsAndMedia from '@/components/AssociationsAndMedia';

const AboutOrganizerPage = () => {
    const heroRef = useRef(null);
    const eventsRef = useRef(null);
    const visionRef = useRef(null);
    const ctaRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
    const eventsInView = useInView(eventsRef, { once: true, margin: '-100px' });
    const visionInView = useInView(visionRef, { once: true, margin: '-100px' });
    const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

    const events = [
        {
            title: 'ASIA LABEX',
            description: 'Laboratory Equipment Exhibition',
            img: '/sd-events/asia-lab-x.webp',
            year: '2023',
        },
        {
            title: 'EV TECHNICIA',
            description: 'Electric Vehicle Components Expo',
            img: '/sd-events/ev-technicia-black.webp',
            year: '2023',
        },
        {
            title: 'NEPAL LAB',
            description: 'Nepal Laboratory Exhibition',
            img: '/sd-events/NEPALLAB-2026-1.webp',
            year: '2023',
        },
        {
            title: 'LABOTICA CONCLAVE',
            description: 'Laboratory Technology Conference',
            img: '/sd-events/LOBOTIKA-CONCLAVE.webp',
            year: '2023',
        },
        {
            title: 'OPHTHALMIC',
            description: 'Ophthalmic Medical Exhibition',
            img: '/sd-events/Ophthall_2026-logo.webp',
            year: '2023',
        },
        {
            title: 'MEDICAL',
            description: 'Medical Equipment Expo',
            img: '/sd-events/india-med-expo.webp',
            year: '2023',
        },
        {
            title: 'AUTO TECHNICIA',
            description: 'Automotive Technology Exhibition',
            img: '/sd-events/AT-Header-Logo-Large.webp',
            year: '2023',
        },
        {
            title: 'MINGLE MEDICAL',
            description: 'Medical Innovation Exhibition',
            img: '/sd-events/bangla-med-expo.webp',
            year: '2023',
        },
    ];


    const stats = [
        { value: '2007', label: 'Established', icon: Calendar },
        { value: '50+', label: 'Events Organized', icon: Award },
        { value: '10+', label: 'Industries', icon: Target },
        { value: '100K+', label: 'Attendees', icon: Users },
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
                            ref={heroRef}
                            initial={{ opacity: 0, y: 40 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                                About Organizer
                            </span>
                            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                                S D <span className="text-gradient">PROMO MEDIA</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
                                S D Promo Media is an event organizing company established in 2007. The company specializes in trade exhibitions,
                                conferences, and seminars across various industries. With a strong focus on innovation and customer satisfaction,
                                S D Promo Media has successfully organized numerous events, creating valuable platforms for businesses to connect,
                                collaborate, and grow. The company is committed to delivering high-quality events that meet the needs of its clients and attendees.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
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

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mb-12"
                            >
                                <button
                                    type="button"
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg font-medium btn-glow transition-all duration-300 text-lg"
                                    aria-label="Visit S D Promo Media website"
                                >
                                    Visit S D Promo Media
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SD Promo Media Group Events */}
            <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            ref={eventsRef}
                            initial={{ opacity: 0, y: 40 }}
                            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center mb-16"
                        >
                            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                                S D <span className="text-gradient">PROMO MEDIA GROUP</span> EVENTS
                            </h2>
                        </motion.div>

                        {/* Events Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={eventsInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                                    className="glow-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 h-full"
                                >
                                    <div className="w-20 h-20 mx-auto rounded-xl bg-white border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                                        <img src={event.img} alt={event.title} />
                                    </div>
                                    <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                                    <div className="text-xs text-primary font-medium">{event.year}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="relative py-16 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
                <div className="absolute inset-0 circuit-pattern opacity-20" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div ref={visionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="glow-card rounded-2xl p-8">
                                    <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                                        Our <span className="text-primary">Vision</span>
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        Our vision is to be the leading event organizer in India, providing a platform for businesses
                                        to connect, collaborate, and grow.
                                    </p>
                                    <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border border-primary/20">
                                        <Users className="w-16 h-16 text-primary" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <div className="glow-card rounded-2xl p-8">
                                    <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                                        Our <span className="text-primary">Mission</span>
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        Our mission is to create high-quality, innovative, and engaging events that provide maximum value
                                        to our clients and attendees.
                                    </p>
                                    <div className="w-full h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center border border-accent/20">
                                        <Target className="w-16 h-16 text-accent" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reserve Your Spot Section */}
            <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            ref={ctaRef}
                            initial={{ opacity: 0, y: 40 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                                Reserve Your Spot At <span className="text-gradient">AUTOTECHNICIA</span> Today!
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                                Secure your exhibition space at India's premier automotive technology showcase.
                                Connect with industry leaders and showcase your innovations to thousands of potential buyers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg font-medium btn-glow transition-all duration-300"
                                    aria-label="Reserve your exhibition space"
                                >
                                    Reserve Your Space
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                                <button
                                    type="button"
                                    className="px-8 py-4 border-2 border-primary/50 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300"
                                    aria-label="View 2023 post show report"
                                >
                                    2023 POST SHOW REPORT
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Supporting Associations */}
            <AssociationsAndMedia />

            {/* Contact Info */}
            <ContactInfoSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutOrganizerPage;