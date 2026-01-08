import { MapPin, Calendar, Twitter, Linkedin, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-dark-base border-t border-primary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="EVTECHNICIA" 
                    className="w-auto h-16 object-contain"
                  />
                </div>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                India's premier exhibition for electric vehicle components and allied products. 
                Powering the Electric Revolution.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/exhibit-registration" className="text-muted-foreground hover:text-primary transition-colors">Exhibitors</a></li>
                <li><a href="/visitor-registration" className="text-muted-foreground hover:text-primary transition-colors">Visitors</a></li>
                <li><a href="/downloads" className="text-muted-foreground hover:text-primary transition-colors">Downloads</a></li>
                <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Other Links</h3>
              <ul className="space-y-2">
                <li><a href="/other-information" className="text-muted-foreground hover:text-primary transition-colors">Other Information</a></li>
                <li><a href="/market" className="text-muted-foreground hover:text-primary transition-colors">Market</a></li>
                <li><a href="/visitors" className="text-muted-foreground hover:text-primary transition-colors">Visitor Info</a></li>
                <li><a href="/exhibit" className="text-muted-foreground hover:text-primary transition-colors">Exhibit Info</a></li>
              </ul>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-primary/10">
            <div>
              <h4 className="font-orbitron text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Event Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground/80 text-sm">22-24 October 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground/80 text-sm">
                      Bombay Exhibition Centre (NESCO)
                      <br />Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Contact Info
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/80">+91-9312112656</p>
                <p className="text-foreground/80">info@sdpromomedia.com</p>
                <p className="text-foreground/80">Organized by S D Promo Media Pvt Ltd.</p>
              </div>
            </div>

<div className="glow-card rounded-2xl overflow-hidden">
              <h3 className="font-orbitron text-md font-semibold p-1 px-5 text-foreground">
                Find Us Here
              </h3>
              <div className="relative h-auto w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8428429173!2d77.3664409!3d28.622677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdee78435895%3A0xf1fb31ac0639db0!2sNoida+One+IT+Park!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-2xl"
                  title="S D Promo Media Office Location"
                />
              </div>
            </div>

          </div>

          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2026 EVTECHNICIA. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
