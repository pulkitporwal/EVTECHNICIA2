import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookStallButtonProps {
  className?: string;
  onClick?: () => void;
}

const BookStallButton = ({ className = "", onClick }: BookStallButtonProps) => {
  return (
    <Button 
      className={`font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground btn-glow shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      Book Your Stall
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default BookStallButton;
