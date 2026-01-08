import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { ArrowRight, User, Building, IdCard, Phone, Mail, MapPin, Globe, Square, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExhibitRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    phoneNumber: '',
    emailAddress: '',
    city: '',
    country: '',
    requiredStallArea: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Update document title
    document.title = 'Exhibitor Registration - EVTECHNICIA 2026';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Register as an exhibitor at EVTECHNICIA 2026 - India\'s premier EV components exhibition. Book your stall and showcase your products to thousands of industry professionals.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Register as an exhibitor at EVTECHNICIA 2026 - India\'s premier EV components exhibition. Book your stall and showcase your products to thousands of industry professionals.';
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
      const response = await fetch('https://formspree.io/f/mykzqajw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'exhibitor_registration',
          subject: 'New Exhibitor Registration - EV Technicia'
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
          requiredStallArea: ''
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
    { label: 'Required Stall Area (sqm)', name: 'requiredStallArea', icon: Square },
    { label: 'City', name: 'city', icon: MapPin },
    { label: 'Country', name: 'country', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

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
                  Exhibitor <span className="text-gradient">Registration</span> Form
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Submit your details and our team will contact you
                </p>
              </div>

              <form id="exhibitor-registration-form" onSubmit={handleSubmit} className="space-y-6">
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

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm text-center">
                      ✅ Registration submitted successfully! Our team will contact you soon.
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

export default ExhibitRegistrationPage;
