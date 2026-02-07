'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Media, Product } from '@/payload-types';
import { FC } from 'react';
import Image from 'next/image';

interface IHeaderLinksProps {
  products: Product[];
}

export const HeaderLinks: FC<IHeaderLinksProps> = ({ products }) => {
  return (
    <NavigationMenu viewport={false} className="hidden sm:block">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Каталог
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] grid-cols-2 gap-2 md:w-[500px] lg:w-[600px]">
              {products.map((product) => {
                const photo = product.photos?.[0]?.photo as Media;
                return (
                  <ListItem
                    key={product.id}
                    title={product.title}
                    href={`/product/${product.id}`}
                    imageSrc={photo.url ?? undefined}
                    imageAlt={photo.alt}
                  >
                    {product['header-description']}
                  </ListItem>
                );
              })}
            </ul>
            <Link href="/products">
              <Button className="mt-4 w-full" size="lg" variant="outline">
                Все товары
              </Button>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={(navigationMenuTriggerStyle(), 'bg-transparent')}
          >
            <Link href="/support">Поддержка</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={(navigationMenuTriggerStyle(), 'bg-transparent')}
          >
            <Link href="/faq">FAQ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({
  title,
  children,
  href,
  imageSrc,
  imageAlt,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="overflow-hidden rounded-xl">
        <Link
          href={href}
          className="relative flex h-56 flex-col justify-end px-0 py-0"
        >
          {imageSrc && (
            <Image
              className="absolute z-10 h-full w-full object-cover opacity-65"
              src={imageSrc}
              alt={imageAlt ?? 'image-alt'}
              quality={100}
              fill
            />
          )}
          <div className="from-background z-20 flex h-1/2 flex-col justify-center gap-2 bg-linear-to-t to-transparent p-4">
            <p className="text-sm text-xl font-bold">{title}</p>
            <p className="line-clamp-2 text-sm">{children}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
