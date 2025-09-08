import { getPayload } from 'payload';
import config from '@payload-config';
import { ProductMainInfoCard } from '@/components/product-main-info-card/ProductMainInfoCard';
import { ProductBadgesCard } from '@/components/product-badges-card/ProductBadgesCard';
import { Separator } from '@/components/ui/separator';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const payload = await getPayload({ config });
  const product = await payload.findByID({
    collection: 'products',
    id,
  });

  return (
    <div className="flex flex-col items-center gap-6 pt-27 sm:mx-2">
      <ProductMainInfoCard product={product} />
      <Separator className="!w-2/3" />
      <ProductBadgesCard badges={product.badges} />
    </div>
  );
}
