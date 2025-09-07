import { FC, PropsWithChildren } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui/button';

export const MobileMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="left"
        className="bg-background/70 w-full rounded-xl backdrop-blur-xl"
      >
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-center gap-8 px-4 text-center">
          <Link href="/products">
            <Button
              variant="ghost"
              className="w-full py-8 text-2xl font-bold"
              size="lg"
            >
              Каталог
            </Button>
          </Link>
          <Link href="/support">
            <Button
              variant="ghost"
              className="w-full py-8 text-2xl font-bold"
              size="lg"
            >
              Поддержка
            </Button>
          </Link>
          <Link href="/faq">
            <Button
              variant="ghost"
              className="w-full py-8 text-2xl font-bold"
              size="lg"
            >
              FAQ
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
