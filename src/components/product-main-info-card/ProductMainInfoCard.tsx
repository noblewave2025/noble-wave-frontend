import { Media, Product } from '@/payload-types';
import { FC } from 'react';
import { ProductImagesCarousel } from '../product-images-carousel/ProductImagesCrousel';
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from '@atelier-disko/payload-lexical-react-renderer';
import { Button } from '../ui/button';
import { GridBeams } from '../magicui/grid-beams';

interface IProductMainInfoCardProps {
  product: Product;
}

export const ProductMainInfoCard: FC<IProductMainInfoCardProps> = ({
  product,
}) => {
  return (
    <GridBeams
      gridSize={0}
      gridColor="rgba(150, 150, 150, 0.5)"
      rayCount={30}
      rayOpacity={0.35}
      raySpeed={3}
      rayLength="80vh"
      gridFadeStart={5}
      backgroundColor="rgb(0, 0, 0)"
      gridFadeEnd={200}
      className="w-full overflow-hidden rounded-4xl border px-2 pt-2 pb-6 sm:p-2"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        {product?.photos && (
          <ProductImagesCarousel
            images={product.photos.map((photo) => photo.photo as Media)}
          />
        )}
        <div className="flex flex-1 flex-col justify-between gap-4 py-2 pr-2">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-7xl font-black break-all">{product.title}</p>
              <p className="text-muted-foreground font-mono text-5xl font-semibold">
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
            <Button size="lg">Добавить в корзину</Button>
          </div>
        </div>
      </div>
    </GridBeams>
  );
};
