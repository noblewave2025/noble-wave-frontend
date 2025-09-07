import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { HeaderButtons } from './HeaderButtons';
import { HeaderLinks } from './HeaderLinks';
import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  return (
    <header className="bg-background/20 fixed right-2 left-2 z-50 mt-4 flex h-15 items-center justify-between rounded-3xl border px-6 py-2 backdrop-blur-md sm:right-6 sm:left-6 sm:mt-6">
      <Button variant="ghost" className="block sm:hidden">
        <Menu />
      </Button>
      <HeaderLogo />
      <HeaderLinks />
      <HeaderButtons />
    </header>
  );
};
