import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookStallButtonProps {
  className?: string;
  onClick?: () => void;
}

const BookStallButton = ({ className = "", onClick }: BookStallButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className={`font-medium border border-primary/30 hover:border-primary text-foreground/80 hover:text-primary hover:bg-primary/10 btn-outline-glow ${className}`}
      onClick={onClick}
    >
      Book Your Stall
    </Button>
  );
};

export default BookStallButton;
