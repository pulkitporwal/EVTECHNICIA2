'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  X,
  User,
  Building,
  IdCard,
  Phone,
  Mail,
  MapPin,
  Globe,
  Square,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ClickToExhibitButtonProps {
  className?: string;
}

const ClickToExhibitButton = ({ className = '' }: ClickToExhibitButtonProps) => {
  return (
    <Button
      onClick={() => window.location.href = '/exhibit-registration'}
      className={`font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground btn-glow ${className}`}
    >
      Click for Exhibit
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default ClickToExhibitButton;
