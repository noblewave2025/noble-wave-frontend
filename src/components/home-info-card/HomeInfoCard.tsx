import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DotPattern } from '../magicui/dot-pattern';
import { AboutUs, Media } from '@/payload-types';
import { FC } from 'react';
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from '@atelier-disko/payload-lexical-react-renderer';

interface IHomeInfoCardProps {
  aboutUs: AboutUs;
}

export const HomeInfoCard: FC<IHomeInfoCardProps> = ({ aboutUs }) => {
  return (
    <Card className="relative w-full rounded-4xl py-2 shadow-none sm:py-4">
      <CardContent className="z-20 flex h-fit flex-col items-center justify-center gap-12 px-2 sm:px-4">
        <div className="flex w-full flex-1 flex-col gap-4">
          <div className="relative min-h-[370px] w-full flex-1">
            <Image
              className="absolute inset-0 z-20 h-full"
              src="/logo.svg"
              alt="logo"
              quality={100}
              fill
            />
          </div>
          <p className="w-full text-center font-mono text-4xl font-bold tracking-widest text-white/90 sm:text-5xl md:text-6xl">
            NobleWave
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <Card className="bg-background/20 flex-1 rounded-3xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">О нас</CardTitle>
            </CardHeader>
            <CardContent>
              <article className="prose prose-invert max-w-full">
                <PayloadLexicalReactRenderer
                  content={aboutUs.about as PayloadLexicalReactRendererContent}
                />
              </article>
            </CardContent>
          </Card>
          <Card className="bg-background/20 flex-1 rounded-3xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Кто мы?</CardTitle>
            </CardHeader>
            <CardContent>
              <article className="prose prose-invert max-w-full">
                <PayloadLexicalReactRenderer
                  content={
                    aboutUs['who-us'] as PayloadLexicalReactRendererContent
                  }
                />
              </article>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <Image
        className="absolute z-10 h-full w-full rounded-4xl object-cover opacity-50"
        src={(aboutUs['background-image'] as Media).url ?? ''}
        alt={(aboutUs['background-image'] as Media).alt}
        quality={100}
        fill
      />
      <div className="absolute inset-0 z-10 h-full w-full overflow-hidden rounded-4xl">
        <DotPattern className="[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]" />
      </div>
    </Card>
  );
};
