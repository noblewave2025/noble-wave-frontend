import { HeaderButtons } from './HeaderButton';
import { HeaderLinks } from './HeaderLinks';
import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  return (
    <header className="bg-secondary/30 border-border/50 fixed right-2 left-2 my-2 flex items-center justify-between rounded-xl border px-6 py-2 backdrop-blur-[1px]">
      <HeaderLogo />
      <HeaderLinks />
      <HeaderButtons />
    </header>
  );
};
