import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { BADGES } from './consts';
import { Badge } from '../ui/badge';

export const HomeMainCard = () => {
  return (
    <Card className="bg-muted relative min-h-[960px] w-full overflow-hidden rounded-4xl py-2 shadow-none sm:py-4">
      <Image
        className="absolute z-10 h-full w-full object-cover"
        src="/home-main-bg.png"
        alt="home-main"
        quality={100}
        fill
      />
      <CardContent className="z-20 flex h-full flex-col justify-center px-2 sm:px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center text-white/80">
          <p className="font-mono text-4xl">NobleWave</p>
          <p className="text-5xl font-black md:text-8xl">SmartEyes V1</p>
          <p className="text-4xl font-black md:text-7xl">Wayfaer</p>
        </div>
        <div className="flex flex-col gap-2">
          <Card className="bg-background/10 rounded-3xl py-3 backdrop-blur-md sm:w-1/2 xl:w-1/3">
            <CardContent>
              <p className="text-white">
                <b>SmartEyes V1 Wayfarer</b> — стильные умные очки, которые
                станут вашим незаменимым спутником в путешествиях, прогулках и
                повседневной жизни.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/10 rounded-3xl py-3 backdrop-blur-md">
            <CardContent className="flex h-full flex-col gap-4 px-3 sm:flex-row sm:items-center">
              <div className="grid flex-1 grid-cols-2 flex-wrap gap-1 sm:flex">
                {BADGES.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="w-full py-2 whitespace-normal sm:w-auto"
                  >
                    <badge.icon />
                    {badge.label}
                  </Badge>
                ))}
              </div>
              <Button size="lg">
                Подробнее <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
