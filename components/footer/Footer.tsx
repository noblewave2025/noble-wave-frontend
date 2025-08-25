import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-4 rounded-4xl border p-4">
      <div className="flex w-full flex-1 flex-col gap-2 md:flex-row">
        <div className="bg-muted/50 flex w-full flex-1 items-center justify-center rounded-3xl p-2">
          <Image
            src="/icon.svg"
            alt="home-main"
            quality={100}
            width={120}
            height={170}
          />
        </div>
        <div className="bg-muted/50 flex w-full flex-1 items-center justify-center rounded-3xl p-2">
          <Image
            src="/footer.png"
            alt="home-main"
            quality={100}
            width={170}
            height={170}
          />
        </div>
      </div>
      <p className="text-muted-foreground flex-1 text-center">
        Проект создан при поддержке Фонда содействия инновациям в рамках
        федерального проекта «Платформа университетского технологического
        предпринимательства».
      </p>
    </div>
  );
};
