import type { Product } from '@/payload-types';
import { FC } from 'react';

interface IProductSpecsCardProps {
  specs: Product['specs'];
}

export const ProductSpecsCard: FC<IProductSpecsCardProps> = ({ specs }) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <p className="text-4xl font-bold sm:text-6xl">Характеристики</p>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 px-2 md:grid-cols-2 xl:grid-cols-3 xl:px-4">
        {specs.map((spec) => (
          <div className="flex flex-col gap-2" key={spec.id}>
            <p className="text-2xl font-bold">{spec.title}</p>
            <div className="flex flex-col gap-1">
              {spec.values.map((specValue) => (
                <div
                  className="relative flex items-end justify-between"
                  key={specValue.id}
                >
                  <div className="before:border-muted-foreground z-10 before:absolute before:bottom-[5px] before:left-0 before:w-full before:border-b-1 before:border-dotted before:content-['']">
                    <p className="bg-background relative inline">
                      {specValue.title}
                    </p>
                  </div>
                  <p className="bg-background z-20 text-nowrap">
                    {specValue.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
