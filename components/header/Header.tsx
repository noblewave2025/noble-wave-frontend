import { HeaderLinks } from './HeaderLinks';

export const Header = () => {
  return (
    <header className="bg-secondary/30 border-border/50 fixed right-2 left-2 my-2 flex items-center justify-between rounded-xl border px-6 py-2 backdrop-blur-[1px]">
      Logo
      <HeaderLinks />
      Buttons
    </header>
  );
};
