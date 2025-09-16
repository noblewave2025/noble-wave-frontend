import { FC, PropsWithChildren } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Link from 'next/link';
import { Button } from '../ui/button';

export const MobileMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="bg-background/70 min-w-screen rounded-xl backdrop-blur-xl sm:min-w-auto">
        <DrawerHeader>
          <DrawerTitle>Меню</DrawerTitle>
        </DrawerHeader>
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
      </DrawerContent>
    </Drawer>
  );
};
