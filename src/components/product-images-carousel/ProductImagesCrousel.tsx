'use client';

import { Media } from '@/payload-types';
import { FC } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

interface IProductImagesCarouselProps {
  images: Media[];
}

export const ProductImagesCarousel: FC<IProductImagesCarouselProps> = ({
  images,
}) => {
  return (
    <Carousel
      className="h-full w-full flex-1 overflow-hidden rounded-4xl"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map(
          (image) =>
            image.url && (
              <CarouselItem
                key={image.id}
                className="relative h-full min-h-[600px] overflow-hidden rounded-4xl"
              >
                <Image
                  className="absolute z-10 h-full w-full object-cover"
                  src={image.url}
                  alt={image.alt}
                  quality={100}
                  fill
                />
              </CarouselItem>
            ),
        )}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};
