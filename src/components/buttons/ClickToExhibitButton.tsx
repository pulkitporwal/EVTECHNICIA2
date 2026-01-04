import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ClickToExhibitButtonProps {
  className?: string;
  onClick?: () => void;
}

const ClickToExhibitButton = ({ className = "", onClick }: ClickToExhibitButtonProps) => {
  return (
    <Button 
      className={`font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground btn-glow ${className}`}
      onClick={onClick}
    >
      Click for Exhibit
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default ClickToExhibitButton;
