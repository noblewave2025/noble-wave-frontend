'use client';

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { MainPageProduct, Media, Product } from '@/payload-types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from '@atelier-disko/payload-lexical-react-renderer';
import { LucideIcon } from '../lucide-icon/LucideIcon';
import Autoplay from "embla-carousel-autoplay";

interface IHomeMainCardProps {
  mainPageProducts: MainPageProduct[];
}

export const HomeMainCard: React.FC<IHomeMainCardProps> = ({
  mainPageProducts,
}) => {
  return (
    <Carousel plugins={[
      Autoplay({
        delay: 5000,
      })
    ]}>
      <CarouselContent className="relative">
        {mainPageProducts.map((mainPageProduct) => (
          <CarouselItem key={mainPageProduct.id}>
            <Card className="bg-muted relative h-[960px] overflow-hidden rounded-4xl py-2 shadow-none sm:py-4">
              <Image
                className="absolute z-10 h-full w-full object-cover"
                src={
                  (mainPageProduct['background-image'] as Media).url ??
                  'home-main-bg.png'
                }
                alt={
                  (mainPageProduct['background-image'] as Media).alt ??
                  'image-alt'
                }
                quality={100}
                fill
              />
              <CardContent className="z-20 flex h-full flex-col justify-center px-2 sm:px-4">
                <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center text-white/80">
                  <p className="font-mono text-4xl">NobleWave</p>
                  <p className="text-5xl font-black md:text-8xl">
                    {(mainPageProduct.product as Product).title}
                  </p>
                  <p className="text-4xl font-black md:text-7xl">
                    {(mainPageProduct.product as Product).subtitle}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Card className="bg-background/10 rounded-3xl py-3 backdrop-blur-md sm:w-1/2 xl:w-1/3">
                    <CardContent className="text-white">
                      <article className="prose prose-invert">
                        <PayloadLexicalReactRenderer
                          content={
                            (mainPageProduct.product as Product)
                              .description as PayloadLexicalReactRendererContent
                          }
                        />
                      </article>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/10 rounded-3xl py-3 backdrop-blur-md">
                    <CardContent className="flex h-full flex-col gap-4 px-3 sm:flex-row sm:items-center">
                      <div className="grid flex-1 grid-cols-2 flex-wrap gap-1 sm:flex">
                        {(mainPageProduct.product as Product).badges?.map(
                          (badge, index) => {
                            return (
                              <Badge
                                key={index}
                                variant="outline"
                                className="w-full py-2 whitespace-normal sm:w-auto"
                              >
                                <LucideIcon iconName={badge.icon} />
                                {badge.title}
                              </Badge>
                            );
                          },
                        )}
                      </div>
                      <Button size="lg">
                        Подробнее <ChevronRight />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext variant="ghost" />
      <CarouselPrevious variant="ghost" />
    </Carousel>
  );
};
