import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { ArrowRight, User, Building, IdCard, Phone, Mail, MapPin, Globe, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VisitorRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    phoneNumber: '',
    emailAddress: '',
    city: '',
    country: '',
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Update document title
    document.title = 'Visitor Registration - EVTECHNICIA 2026';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Register as a visitor at EVTECHNICIA 2026 - India\'s premier EV components exhibition. Get your visitor pass and connect with industry leaders.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Register as a visitor at EVTECHNICIA 2026 - India\'s premier EV components exhibition. Get your visitor pass and connect with industry leaders.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mqeavobe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'visitor_registration',
          subject: 'New Visitor Registration - EV Technicia'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          companyName: '',
          designation: '',
          phoneNumber: '',
          emailAddress: '',
          city: '',
          country: '',
          address: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { label: 'Full Name', name: 'fullName', icon: User },
    { label: 'Company Name', name: 'companyName', icon: Building },
    { label: 'Designation', name: 'designation', icon: IdCard },
    { label: 'Phone Number', name: 'phoneNumber', icon: Phone },
    { label: 'Email Address', name: 'emailAddress', icon: Mail },
    { label: 'City', name: 'city', icon: MapPin },
    { label: 'Country', name: 'country', icon: Globe },
    { label: 'Address', name: 'address', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="visitor-registration" className="relative py-20 sm:pb-20 sm:pt-16 bg-gradient-to-b from-background to-dark-elevated/50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                Visitor Registration
              </span>
              <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
                Register as <span className="text-gradient">Visitor</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get your visitor pass for EVTECHNICIA 2026. Connect with industry leaders and explore the latest innovations in electric vehicle components.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="relative py-16 sm:pb-20 sm:pt-16 bg-dark-elevated/50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glow-card rounded-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
                  Visitor <span className="text-gradient">Registration</span> Form
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Submit your details and get your visitor pass
                </p>
              </div>

              <form id="visitor-registration-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {fields.map(({ label, name, icon: Icon }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        {label}
                      </label>
                      <div className="relative">
                        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          name={name}
                          value={(formData as any)[name]}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Address Field (Full Width) */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      required
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                      placeholder="Enter your complete address"
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm text-center">
                      ✅ Registration submitted successfully!
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm text-center">
                      ❌ Oops! Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT REGISTRATION'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VisitorRegistrationPage;
