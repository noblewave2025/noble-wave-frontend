import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { HeaderButtons } from './HeaderButtons';
import { HeaderLinks } from './HeaderLinks';
import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  return (
    <header className="bg-card/50 border-border/50 fixed right-2 left-2 z-50 my-2 flex items-center justify-between rounded-xl border px-6 py-2 backdrop-blur-md md:right-8 md:left-8">
      <Button variant="ghost" className="block sm:hidden">
        <Menu />
      </Button>
      <HeaderLogo />
      <HeaderLinks />
      <HeaderButtons />
    </header>
  );
};
