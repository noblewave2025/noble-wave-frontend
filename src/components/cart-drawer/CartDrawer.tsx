'use client';

import { FC, PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ChevronRight, Trash2 } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import { Media, Product } from '@/payload-types';
import { toast } from 'sonner';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { cartState, onRemoveProduct } = useCart();

  const removeProductFromCart = (product: Product, index: number) => {
    onRemoveProduct!(index);
    toast.success(`Товар "${product.title}" успешно удален из корзины!`);
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div>{children}</div>
      </DrawerTrigger>
      <DrawerContent className="bg-background/70 max-w-auto min-w-screen rounded-xl backdrop-blur-xl sm:rounded-l-xl md:min-w-[500px]">
        <DrawerHeader>
          <DrawerTitle>Корзина</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          {cartState.map((product, index) => {
            const image = product?.photos?.[0].photo as Media;
            return (
              <div
                className="bg-muted relative flex gap-4 rounded-4xl border p-2 sm:gap-6"
                key={index}
              >
                <div className="relative inset-0 h-28 w-28 overflow-hidden rounded-3xl">
                  {image?.url && (
                    <Image
                      className="absolute z-10 h-full w-full object-cover"
                      src={image.url}
                      alt={image.alt}
                      quality={100}
                      fill
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <p className="text-lg font-bold text-wrap break-all">
                      {product.title}
                    </p>
                    <p className="text-muted-foreground">{product.subtitle}</p>
                  </div>
                  <p className="text-3xl font-semibold">{product.price} ₽</p>
                </div>
                <Button
                  onClick={() => removeProductFromCart(product, index)}
                  variant="destructive"
                  className="my-[6px] mr-[6px] h-10 w-10 rounded-lg sm:h-12 sm:w-12"
                >
                  <Trash2 />
                </Button>
              </div>
            );
          })}
          {!cartState.length && (
            <div className="flex h-full flex-1 items-center justify-center">
              <p className="text-muted-foreground font-bold">Корзина пуста</p>
            </div>
          )}
        </div>
        <DrawerFooter>
          <Button disabled={!cartState.length}>
            Перейти к оформлению
            <ChevronRight />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
