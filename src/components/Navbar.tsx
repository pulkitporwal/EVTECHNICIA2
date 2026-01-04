import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookStallButton from '@/components/buttons/BookStallButton';
import RegisterVisitButton from '@/components/buttons/RegisterVisitButton';
import logo from '@/assets/logo.png';
import atLogo from '@/assets/at-h.webp';
import iaacLogo from '@/assets/IAAC.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isDesktopMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isDesktopMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#components', label: 'Components' },
    { href: '#exhibit', label: 'Why Exhibit' },
    { href: '#visitors', label: 'Visitors' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <>
      {/* Social Media Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-background/95 backdrop-blur-sm border-b border-primary/20"
          >
            <div className="max-w-7xl mx-auto px-6 flex justify-end gap-1">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-2 text-foreground/60 text-primary hover:bg-primary/10 rounded transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-[0_4px_30px_hsl(var(--primary)/0.1)] border-b border-primary/20'
            : 'bg-background/80 backdrop-blur-sm border-b border-primary/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-14 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop - Co-located Events and Menu Button */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Co-located Events */}
              <div className="flex items-center gap-3 px-4 py-2 bg-card/50 rounded-lg border border-primary/20 glow-border">
                <span className="text-sm font-semibold text-foreground/80">Co-located Events: </span>
                <div className="flex items-center gap-2">
                  <img src={atLogo} alt="AT" className="h-6 w-auto object-contain" />
                  <div className="w-px h-6 bg-primary/30" />
                  <img src={iaacLogo} alt="IAAC" className="h-6 w-auto object-contain" />
                </div>
              </div>

              {/* CTA Buttons */}
              <BookStallButton onClick={() => setIsDesktopMenuOpen(false)} />
              <RegisterVisitButton onClick={() => setIsDesktopMenuOpen(false)} />

              {/* EXPO MENU Button */}
              <button
                onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                className="flex  items-end gap-1 px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors group"
              >
                <div className="flex flex-col gap-1 mt-1">
                  <div className="w-6 h-0.5 bg-primary group-hover:w-8 transition-all duration-200 shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                  <div className="w-6 h-0.5 bg-primary group-hover:w-8 transition-all duration-200 shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                  <div className="w-6 h-0.5 bg-primary group-hover:w-8 transition-all duration-200 shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <AnimatePresence>
        {isDesktopMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDesktopMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-96 bg-card border-l border-primary/20 shadow-2xl z-50 overflow-y-auto glow-card"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20 bg-gradient-to-r from-card to-dark-surface">
                  <h2 className="text-xl font-bold text-foreground font-orbitron glow-text">Menu</h2>
                  <button
                    onClick={() => setIsDesktopMenuOpen(false)}
                    className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Co-located Events */}
                  <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
                    <h3 className="text-sm font-semibold text-foreground/80">Co-located Events</h3>
                    <div className="flex items-center gap-4 justify-center">
                      <img src={atLogo} alt="AT" className="h-10 w-auto object-contain" />
                      <div className="w-px h-10 bg-primary/30" />
                      <img src={iaacLogo} alt="IAAC" className="h-10 w-auto object-contain" />
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsDesktopMenuOpen(false)}
                        className="block text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 py-3 px-4 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-primary/20 space-y-3 bg-gradient-to-r from-card to-dark-surface">
                  <BookStallButton onClick={() => setIsDesktopMenuOpen(false)} />
                  <RegisterVisitButton onClick={() => setIsDesktopMenuOpen(false)} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-card border-l border-primary/20 shadow-2xl z-50 overflow-y-auto glow-card"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20 bg-gradient-to-r from-card to-dark-surface">
                  <h2 className="text-xl font-bold text-foreground font-orbitron glow-text">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 space-y-6">
                  {/* Co-located Events */}
                  <div className="bg-card/50 rounded-lg p-4 border border-primary/20">
                    <h3 className="text-sm font-semibold text-foreground/80">Co-located Events</h3>
                    <div className="flex items-center gap-4 justify-center">
                      <img src={atLogo} alt="AT" className="h-10 w-auto object-contain" />
                      <div className="w-px h-10 bg-primary/30" />
                      <img src={iaacLogo} alt="IAAC" className="h-10 w-auto object-contain" />
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 py-3 px-4 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-foreground/80 font-orbitron">Follow Us</h3>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="p-3 text-foreground/60 hover:text-primary bg-card/50 hover:bg-primary/10 rounded-lg transition-all duration-200 border border-primary/20 hover:border-primary/40"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-primary/20 space-y-3 bg-gradient-to-r from-card to-dark-surface">
                  <BookStallButton onClick={() => setIsMobileMenuOpen(false)} />
                  <RegisterVisitButton onClick={() => setIsMobileMenuOpen(false)} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;  