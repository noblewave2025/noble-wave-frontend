'use client';

import { Footer as IFooter, Media } from '@/payload-types';
import Image from 'next/image';
import React from 'react';

interface IFooterProps {
  footer: IFooter;
}

export const Footer: React.FC<IFooterProps> = ({ footer }) => {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-4 rounded-4xl border p-4">
      <div className="flex w-full flex-1 flex-col gap-2 md:flex-row">
        {footer.icons?.map((icon) => (
          <div
            key={icon.id}
            className="bg-muted/50 flex w-full flex-1 items-center justify-center rounded-3xl p-2"
          >
            <Image
              src={(icon.icon as Media).url ?? ''}
              alt={(icon.icon as Media).alt}
              quality={100}
              width={120}
              height={170}
            />
          </div>
        ))}
      </div>
      <p className="text-muted-foreground flex-1 text-center">{footer.text}</p>
    </div>
  );
};
