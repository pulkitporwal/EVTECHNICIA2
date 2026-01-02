import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: 'Days' },
    { value: 0, label: 'Hours' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Seconds' },
  ]);

  useEffect(() => {
    const targetDate = new Date('2026-10-22T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft([
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' },
        ]);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeLeft.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative group"
        >
          <div className="glow-card rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Number */}
            <div className="relative">
              <span className="font-orbitron text-3xl md:text-5xl font-bold text-primary glow-text">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            
            {/* Label */}
            <p className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </p>
          </div>
          
          {/* Separator */}
          {index < 3 && (
            <span className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-primary animate-electric-pulse hidden sm:block">
              :
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
