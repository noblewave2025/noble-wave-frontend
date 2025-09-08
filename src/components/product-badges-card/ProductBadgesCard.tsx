import { Product } from '@/payload-types';
import { FC } from 'react';
import { LucideIcon } from '../lucide-icon/LucideIcon';
import { Separator } from '../ui/separator';

interface IProductBadgesCardProps {
  badges: Product['badges'];
}

export const ProductBadgesCard: FC<IProductBadgesCardProps> = ({ badges }) => {
  return (
    <div className="grid w-full grid-cols-1 justify-center gap-4 rounded-4xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {badges?.map((badge) => (
        <div
          key={badge.id}
          className="z-10 flex flex-col gap-4 rounded-4xl border p-5 backdrop-blur-[3px]"
        >
          <div className="flex gap-2">
            <LucideIcon iconName={badge.icon} />
            <p>{badge.title}</p>
          </div>
          <Separator />
          <p className="text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};
