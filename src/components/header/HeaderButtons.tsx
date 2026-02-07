import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';
import { CartDrawer } from '../cart-drawer/CartDrawer';

export const HeaderButtons = () => {
  return (
    <div className="flex gap-2">
      <CartDrawer>
        <Button variant="ghost" size="icon">
          <ShoppingCart />
        </Button>
      </CartDrawer>
      <Button variant="ghost" size="icon">
        <User />
      </Button>
    </div>
  );
};
