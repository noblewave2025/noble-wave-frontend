import { ILucideIconOption } from '../types';
import { LUCIDE_ICONS } from '../consts';

export const getCurrentIconOption = (
  value: string,
): ILucideIconOption | undefined =>
  LUCIDE_ICONS.find((icon) => icon.value === value);
