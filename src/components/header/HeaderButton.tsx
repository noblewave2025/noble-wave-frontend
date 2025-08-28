import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';

export const HeaderButtons = () => {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon">
        <ShoppingCart />
      </Button>
      <Button variant="ghost" size="icon">
        <User />
      </Button>
    </div>
  );
};
