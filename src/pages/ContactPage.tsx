import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, Users, Building, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [isExhibitorFormOpen, setIsExhibitorFormOpen] = useState(false);

    // Exhibitor contacts
    const exhibitorContacts = [
        { name: 'Ashish Agarwal', phone: '+91 98110 20784', email: 'ashish.a@iegroup.net' },
        { name: 'Jitin Masand', phone: '+91 98733 99884', email: 'jitin.masand@iegroup.net' },
        { name: 'Rohit Agarwal', phone: '+91 93122 04073', email: 'rohit.agarwal@iegroup.net' },
    ];

    // Visitor contacts
    const visitorContacts = [
        { name: 'Harsh Vardhan', phone: '+91 84477 92704', email: 'harsh.vardhan@iegroup.net' },
        { name: 'Rashmikant Mistry', phone: '+91 87795 82257', email: 'rashmikant.mistry@iegroup.net' },
        { name: 'Saurav Khatri', phone: '+91 93549 41411', email: 'saurav.khatri@iegroup.net' },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
                <div className="absolute inset-0 circuit-pattern opacity-30" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                                Contact Us
                            </span>
                            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                                Get in <span className="text-gradient">Touch</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Connect with our team for personalized assistance. Whether you're looking to exhibit or visit, we're here to help.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* Exhibitor Contacts */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="glow-card rounded-2xl p-8"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mr-4">
                                        <Building className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                                        For <span className="text-primary">Exhibitors</span>
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {exhibitorContacts.map((contact, index) => (
                                        <motion.div
                                            key={contact.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            className="border-b border-border/30 last:border-b-0 pb-6 last:pb-0"
                                        >
                                            <h3 className="font-semibold text-foreground mb-3">{contact.name}</h3>

                                            <div className="space-y-2">
                                                <div className="flex items-center text-muted-foreground">
                                                    <Phone className="w-4 h-4 mr-3 text-primary/70" />
                                                    <a
                                                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                                        className="hover:text-primary transition-colors"
                                                    >
                                                        {contact.phone}
                                                    </a>
                                                </div>

                                                <div className="flex items-center text-muted-foreground">
                                                    <Mail className="w-4 h-4 mr-3 text-primary/70" />
                                                    <a
                                                        href={`mailto:${contact.email}`}
                                                        className="hover:text-primary transition-colors break-all"
                                                    >
                                                        {contact.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Visitor Contacts */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="glow-card rounded-2xl p-8"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-accent" />
                                    </div>
                                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                                        For <span className="text-accent">Visitors</span>
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {visitorContacts.map((contact, index) => (
                                        <motion.div
                                            key={contact.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                            className="border-b border-border/30 last:border-b-0 pb-6 last:pb-0"
                                        >
                                            <h3 className="font-semibold text-foreground mb-3">{contact.name}</h3>

                                            <div className="space-y-2">
                                                <div className="flex items-center text-muted-foreground">
                                                    <Phone className="w-4 h-4 mr-3 text-accent/70" />
                                                    <a
                                                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                                        className="hover:text-accent transition-colors"
                                                    >
                                                        {contact.phone}
                                                    </a>
                                                </div>

                                                <div className="flex items-center text-muted-foreground">
                                                    <Mail className="w-4 h-4 mr-3 text-accent/70" />
                                                    <a
                                                        href={`mailto:${contact.email}`}
                                                        className="hover:text-accent transition-colors break-all"
                                                    >
                                                        {contact.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='max-w-2xl mt-16 mx-auto'
                            >
                                <div className="glow-card rounded-2xl p-8">
                                    <h3 className="font-orbitron text-xl font-semibold mb-6 text-foreground">
                                        Quick Inquiry
                                    </h3>

                                    <form
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            setStatus('loading');

                                            const form = e.currentTarget;
                                            const formData = new FormData(form);

                                            try {
                                                const res = await fetch('https://formspree.io/f/xbdlvejr', {
                                                    method: 'POST',
                                                    body: formData,
                                                    headers: {
                                                        Accept: 'application/json',
                                                    },
                                                });

                                                if (res.ok) {
                                                    setStatus('success');
                                                    form.reset();
                                                } else {
                                                    setStatus('error');
                                                }
                                            } catch (error) {
                                                setStatus('error');
                                            }
                                        }}
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground/80 mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                                                    placeholder="Your name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground/80 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                                                placeholder="+91-XXXXXXXXXX"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                                                placeholder="Tell us about your requirements..."
                                            />
                                        </div>

                                        {/* Hidden subject */}
                                        <input
                                            type="hidden"
                                            name="_subject"
                                            value="New Contact Inquiry - EV Technicia"
                                        />

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            variant="glow"
                                            size="lg"
                                            disabled={status === 'loading'}
                                            className="w-full"
                                        >
                                            {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                                        </Button>

                                        {/* Status Messages */}
                                        {status === 'success' && (
                                            <p className="text-sm text-green-500 text-center mt-4">
                                                ✅ Thank you! Your inquiry has been sent successfully.
                                            </p>
                                        )}

                                        {status === 'error' && (
                                            <p className="text-sm text-red-500 text-center mt-4">
                                                ❌ Oops! Something went wrong. Please try again.
                                            </p>
                                        )}
                                    </form>

                                </div>
                            </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;
