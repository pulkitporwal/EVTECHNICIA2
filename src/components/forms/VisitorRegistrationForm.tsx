'use client';

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RegisterAsVisitorButton = ({ className = '' }) => {
  return (
    <Button
      onClick={() => window.location.href = '/visitor-registration'}
      className={`font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground btn-glow ${className}`}
    >
      Register as Visitor
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default RegisterAsVisitorButton;
