import { FC } from 'react';
import { icons } from 'lucide-react';

interface ILucideIconProps {
  iconName: string;
  className?: string;
}

export const LucideIcon: FC<ILucideIconProps> = ({
  iconName,
  className = '',
}) => {
  // @ts-expect-error: Pull icon from icons namespace
  const Icon = icons[iconName];
  return <Icon className={className} />;
};
