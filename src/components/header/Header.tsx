import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { HeaderButtons } from './HeaderButtons';
import { HeaderLinks } from './HeaderLinks';
import { HeaderLogo } from './HeaderLogo';
import { Product } from '@/payload-types';
import { FC } from 'react';
import { MobileMenu } from '../mobile-menu/MobileMenu';

interface IHeaderProps {
  products: Product[];
}

export const Header: FC<IHeaderProps> = ({ products }) => {
  return (
    <header className="bg-background/20 fixed right-2 left-2 z-50 mt-4 flex h-15 items-center justify-between rounded-3xl border px-6 py-2 backdrop-blur-md sm:right-6 sm:left-6 sm:mt-6">
      <MobileMenu>
        <Button variant="ghost" className="block sm:hidden">
          <Menu />
        </Button>
      </MobileMenu>
      <HeaderLogo />
      <HeaderLinks products={products} />
      <HeaderButtons />
    </header>
  );
};
