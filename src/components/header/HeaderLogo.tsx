import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="absolute left-1/2 -translate-x-1/2 sm:relative sm:left-0 sm:translate-x-0"
    >
      <Image src="/logo.svg" width="30" height="30" alt="logo" quality={100} />
    </Link>
  );
};
