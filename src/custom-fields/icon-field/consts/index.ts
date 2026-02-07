import { icons, type LucideIcon } from 'lucide-react';
import { ILucideIconOption } from '../types';

export const LUCIDE_ICONS: ILucideIconOption[] = Object.entries(icons).map(
  ([name, icon]) => ({
    value: name,
    icon: icon as LucideIcon,
  }),
);
