import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DotPattern } from '../magicui/dot-pattern';

export const HomeInfoCard = () => {
  return (
    <Card className="relative w-full rounded-4xl py-2 shadow-none sm:py-4">
      <CardContent className="z-20 flex h-fit flex-col items-center justify-center gap-12 px-2 sm:px-4">
        <div className="flex w-full flex-1 flex-col gap-4">
          <div className="relative min-h-[370px] w-full flex-1">
            <Image
              className="absolute inset-0 z-20 h-full"
              src="/icon.svg"
              alt="home-main"
              quality={100}
              fill
            />
          </div>
          <p className="w-full text-center font-mono text-4xl font-bold tracking-widest text-white/90 sm:text-5xl md:text-6xl">
            NobleWave
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <Card className="bg-background/20 flex-1 rounded-3xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">О нас</CardTitle>
            </CardHeader>
            <CardContent>
              Мы – команда энтузиастов, объединённых общей целью – создавать
              инновационные умные устройства и электротранспорт для современного
              городского пользователя. Наша миссия – улучшить качество жизни в
              городах, предлагая передовые решения, которые делают повседневную
              жизнь более комфортной, безопасной и экологичной.
            </CardContent>
          </Card>
          <Card className="bg-background/20 flex-1 rounded-3xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Кто мы?</CardTitle>
            </CardHeader>
            <CardContent>
              <b>NobleWave</b> – это синергия высоких технологий, современного
              дизайна и стремления к устойчивому развитию. Мы специализируемся
              на разработке и производстве умных устройств и электротранспорта,
              которые соответствуют самым высоким стандартам качества и
              безопасности. Наши продукты предназначены для тех, кто ценит
              инновации, стиль и заботу об окружающей среде{' '}
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <Image
        className="absolute z-10 h-full w-full rounded-4xl object-cover opacity-50"
        src="/home-info-bg1.png"
        alt="home-main"
        quality={100}
        fill
      />
      <div className="absolute inset-0 z-10 h-full w-full overflow-hidden rounded-4xl">
        <DotPattern className="[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]" />
      </div>
    </Card>
  );
};
