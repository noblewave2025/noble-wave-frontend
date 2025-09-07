import { FC, PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronRight } from 'lucide-react';

export const CartSheet: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="bg-background/70 w-full rounded-xl backdrop-blur-xl sm:rounded-l-xl">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <SheetFooter>
          <Button>
            Перейти к оформлению
            <ChevronRight />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
