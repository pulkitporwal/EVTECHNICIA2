import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RegisterToVisitButtonProps {
  className?: string;
  onClick?: () => void;
}

const RegisterToVisitButton = ({ className = "", onClick }: RegisterToVisitButtonProps) => {
  return (
    <Button 
      variant="outline"
      className={`font-medium border border-primary/30 hover:border-primary text-foreground/80 hover:text-primary hover:bg-primary/10 btn-outline-glow ${className}`}
      onClick={onClick}
    >
      Register to Visit
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default RegisterToVisitButton;
