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
      className={`font-medium border-2 border-primary/50 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground btn-outline-glow shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      Register to Visit
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default RegisterToVisitButton;
