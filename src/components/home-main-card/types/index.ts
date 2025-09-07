import type { LucideIcon } from 'lucide-react';
import { badgeVariants } from '@/components/ui/badge';
import { VariantProps } from 'class-variance-authority';

export interface Badge {
  icon: LucideIcon;
  label: string;
  theme?: VariantProps<typeof badgeVariants>['variant'];
}
