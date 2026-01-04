import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, User, Users, Megaphone, Camera } from 'lucide-react';

const contactCategories = [
  {
    title: 'Sales & Sponsorship',
    icon: Megaphone,
    contacts: [
      { name: 'Ashish Agarwal', phone: '+91 98110 20784', email: 'ashish.a@iegroup.net' },
      { name: 'Jitin Masand', phone: '+91 98733 99884', email: 'jitin.masand@iegroup.net' },
      { name: 'Rohit Agarwal', phone: '+91 93122 04073', email: 'rohit.agarwal@iegroup.net' },
    ],
  },
  {
    title: 'Visitor',
    icon: Users,
    contacts: [
      { name: 'Harsh Vardhan', phone: '+91 84477 92704', email: 'harsh.vardhan@iegroup.net' },
      { name: 'Rashmikant Mistry', phone: '+91 87795 82257', email: 'rashmikant.mistry@iegroup.net' },
      { name: 'Saurav Khatri', phone: '+91 93549 41411', email: 'saurav.khatri@iegroup.net' },
    ],
  },
  {
    title: 'Conference & Speakers',
    icon: User,
    contacts: [
      { name: 'Swati Saxena', phone: '+91 98739 46764', email: 'swati.saxena@iegroup.net' },
      { name: 'Anjali Pandey', phone: '+91 84478 39489', email: 'anjali.pandey@iegroup.net' },
    ],
  },
  {
    title: 'Media & Operations',
    icon: Camera,
    contacts: [
      { name: 'Jitin Masand', phone: '+91 98733 99884', email: 'jitin.masand@iegroup.net' },
      { name: 'Swati Saxena', phone: '+91 98739 46764', email: 'swati.saxena@iegroup.net' },
    ],
  },
];

const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact-info" className="relative py-16 sm:pb-20 sm:pt-16 overflow-hidden">
      {/* Background */}
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto"> 

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="group"
              >
                <div className="glow-card h-full rounded-2xl p-6 transition-all duration-500 hover:border-primary/50">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mr-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-orbitron text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Contact List */}
                  <div className="space-y-4">
                    {category.contacts.map((contact, contactIndex) => (
                      <div key={`${contact.name}-${contactIndex}`} className="border-b border-border/30 last:border-b-0 pb-3 last:pb-0">
                        <h4 className="font-medium text-foreground/90 text-sm mb-2">
                          {contact.name}
                        </h4>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Phone className="w-3 h-3 mr-2 text-primary/70" />
                            <a 
                              href={`tel:${contact.phone.replace(/\s/g, '')}`}
                              className="hover:text-primary transition-colors"
                            >
                              {contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Mail className="w-3 h-3 mr-2 text-primary/70" />
                            <a 
                              href={`mailto:${contact.email}`}
                              className="hover:text-primary transition-colors break-all"
                            >
                              {contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;