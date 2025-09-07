import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';
import { CartSheet } from '../cart-sheet/CartSheet';

export const HeaderButtons = () => {
  return (
    <div className="flex gap-2">
      <CartSheet>
        <Button variant="ghost" size="icon">
          <ShoppingCart />
        </Button>
      </CartSheet>
      <Button variant="ghost" size="icon">
        <User />
      </Button>
    </div>
  );
};
