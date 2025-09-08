import { Media, Product } from '@/payload-types';
import { FC } from 'react';
import { LucideIcon } from '../lucide-icon/LucideIcon';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { MagicCard } from '../magicui/magic-card';

interface IProductBadgesCardProps {
  badges: Product['badges'];
}

export const ProductBadgesCard: FC<IProductBadgesCardProps> = ({ badges }) => {
  const badgesWithImage = badges?.filter((badge) => badge.image);
  const badgesWithoutImage = badges?.filter((badge) => !badge.image);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-6xl font-bold">Описание</p>
      <div className="grid w-full grid-cols-1 justify-center gap-4 rounded-4xl sm:grid-cols-2">
        {badgesWithImage?.map((badge) => (
          <MagicCard
            key={badge.id}
            className="bg-muted z-10 overflow-hidden rounded-4xl border backdrop-blur-[3px]"
          >
            {badge.image && (
              <div className="relative inset-0 m-[1px] h-96 overflow-hidden rounded-4xl">
                <Image
                  className="absolute z-10 h-full w-full object-cover"
                  src={(badge.image as Media).url ?? ''}
                  alt={(badge.image as Media).alt}
                  quality={100}
                  fill
                />
              </div>
            )}
            <div className="flex gap-2 p-5">
              <LucideIcon iconName={badge.icon} />
              <p>{badge.title}</p>
            </div>
            <Separator />
            <p className="text-muted-foreground p-5">{badge.description}</p>
          </MagicCard>
        ))}
      </div>
      <div className="grid w-full grid-cols-1 justify-center gap-4 rounded-4xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {badgesWithoutImage?.map((badge) => (
          <MagicCard
            key={badge.id}
            className="bg-muted z-10 overflow-hidden rounded-4xl border backdrop-blur-[3px]"
          >
            <div className="flex gap-2 p-5">
              <LucideIcon iconName={badge.icon} />
              <p>{badge.title}</p>
            </div>
            <Separator />
            <p className="text-muted-foreground p-5">{badge.description}</p>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};
