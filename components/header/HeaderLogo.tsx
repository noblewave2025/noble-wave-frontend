import Image from 'next/image';

export const HeaderLogo = () => {
  return (
    <Image
      className="absolute left-1/2 -translate-x-1/2 sm:relative sm:left-0 sm:translate-x-0"
      src="/icon.ico"
      width="30"
      height="30"
      alt="logo"
    />
  );
};
