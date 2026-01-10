import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegisterAsVisitorButton from './forms/VisitorRegistrationForm';
import ClickToExhibitButton from '@/components/forms/ExhibitorRegistrationForm';

const contacts = [
  { name: 'Pallav Singh', phone: '+91-9711182040', email: 'pallav@sdpromomedia.com' },
  { name: 'Anurodh Parashar', phone: '+91-8130998383', email: 'anurodh@sdpromomedia.com' },
  { name: 'Vivek Vikram', phone: '+91-9312112656', email: 'vivek@sdpromomedia.com' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isExhibitorFormOpen, setIsExhibitorFormOpen] = useState(false);


  return (
    <section id="contact" className="relative py-16 sm:pb-20 sm:pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm mb-6">
              Get In Touch
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Book Your <span className="text-gradient">Stall</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Secure your space at India's premier EV components exhibition. Connect with our team for personalized assistance.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <ClickToExhibitButton />
              <RegisterAsVisitorButton />
            </motion.div>
          </motion.div>

          <div className="max-w-xl mx-auto">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
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
      </div>
    </section>
  );
};

export default ContactSection;
