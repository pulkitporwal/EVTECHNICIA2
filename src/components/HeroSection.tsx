import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import heroImage from '@/assets/download.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-dark-elevated to-background" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="absolute inset-0 scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-7xl mx-auto text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm mb-6 sm:mb-8 mx-auto lg:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="whitespace-nowrap">Join the EV Revolution</span>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left"
              >
                <span className="text-foreground">EV</span>
                <span className="text-gradient">TECHNICIA</span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground/80">
                  2026
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 lg:mb-8 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              >
                Expo on <span className="text-primary">EV Components</span> & Function
                <br className="hidden sm:block" />
                <span className="text-sm sm:text-base md:text-lg">Powering the Electric Revolution</span>
              </motion.p>

              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 lg:mb-8"
              >
                <div className="flex items-center gap-2 sm:gap-3 text-foreground/80">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-medium">22-24 October 2026</span>
                </div>
                <div className="hidden sm:block w-px h-4 sm:h-6 bg-primary/30" />
                <div className="flex items-center gap-2 sm:gap-3 text-foreground/80">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-medium text-center sm:text-left">Bombay Exhibition Centre, Mumbai</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button variant="glow" size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                  Book Your Stall
                </Button>
                <Button variant="glowOutline" size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                  Register as Visitor
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl glow-border max-w-md mx-auto lg:max-w-none">
                <img
                  src={heroImage}
                  alt="EV Components Exhibition"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 uppercase tracking-wider">
              Event Starts In
            </p>
            <CountdownTimer />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground"
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider">Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
