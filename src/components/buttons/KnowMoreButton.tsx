import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KnowMoreButtonProps {
  className?: string;
  onClick?: () => void;
}

const KnowMoreButton = ({ className = "", onClick }: KnowMoreButtonProps) => {
  return (
    <Button 
      variant="outline"
      className={`font-medium border-2 border-secondary/50 hover:border-secondary bg-secondary/10 hover:bg-secondary/20 text-secondary hover:text-secondary-foreground btn-outline-glow shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      Know More
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default KnowMoreButton;
