'use client';

import { Media, Product } from '@/payload-types';
import { FC } from 'react';
import { ProductImagesCarousel } from '../product-images-carousel/ProductImagesCrousel';
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from '@atelier-disko/payload-lexical-react-renderer';
import { Button } from '../ui/button';
import { GridBeams } from '../magicui/grid-beams';
import { Separator } from '../ui/separator';
import { toast } from 'sonner';
import { useCart } from '@/context/cart-context';

interface IProductMainInfoCardProps {
  product: Product;
}

export const ProductMainInfoCard: FC<IProductMainInfoCardProps> = ({
  product,
}) => {
  const { onAddProduct } = useCart();

  const addProductToCart = () => {
    toast.success(`Товар "${product.title}" успешно добавлен в корзину!`);
    onAddProduct!(product);
  };

  return (
    <GridBeams
      gridSize={0}
      gridColor="rgba(150, 150, 150, 0.5)"
      rayCount={40}
      rayOpacity={0.45}
      raySpeed={2}
      rayLength="200vh"
      gridFadeStart={0}
      backgroundColor="rgb(0, 0, 0)"
      gridFadeEnd={100}
      className="w-full overflow-hidden rounded-4xl border pt-2 pb-6 sm:p-2"
    >
      <div className="flex flex-col items-center gap-6 pt-16 md:pt-21 lg:flex-row lg:items-stretch">
        {product?.photos && (
          <ProductImagesCarousel
            images={product.photos.map((photo) => photo.photo as Media)}
          />
        )}
        <Separator className="!w-2/3 lg:hidden" />
        <div className="flex flex-1 flex-col justify-between gap-4 p-4 pt-0 lg:pt-4">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-6xl font-black break-all md:text-7xl">
                {product.title}
              </p>
              <p className="text-muted-foreground font-mono text-4xl font-semibold md:text-5xl">
                {product.subtitle}
              </p>
            </div>
            <article className="prose prose-invert max-w-full">
              <PayloadLexicalReactRenderer
                content={
                  product.description as PayloadLexicalReactRendererContent
                }
              />
            </article>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <p className="text-5xl font-black">{`${product.price}₽`}</p>
            <Button size="lg" onClick={addProductToCart}>
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </GridBeams>
  );
};
