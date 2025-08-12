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

const products: { title: string; href: string; description: string }[] = [
  {
    title: 'SmartEyes v1',
    href: '/docs/primitives/alert-dialog',
    description:
      'О боже, это же самые крутые умные очки с очень длинным описание чета вроде блин аааааааааааааааааааа',
  },
];

export const HeaderLinks = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={(navigationMenuTriggerStyle(), 'bg-transparent')}
          >
            <Link href="/">Главная</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Продукты
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 md:w-[400px] lg:w-[500px]">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
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
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
