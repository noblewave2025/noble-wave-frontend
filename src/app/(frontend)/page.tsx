import { HomeInfoCard } from '@/components/home-info-card/HomeInfoCard';
import { HomeMainCard } from '@/components/home-main-card/HomeMainCard';
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function HomePage() {
  const payload = await getPayload({ config });

  const mainPageProductsCollection = await payload.find({
    collection: 'main-page-products',
  });

  const aboutUs = (
    await payload.find({
      collection: 'about-us',
    })
  ).docs[0];

  return (
    <div className="flex flex-col gap-6 py-2 sm:px-2">
      <HomeMainCard mainPageProducts={mainPageProductsCollection.docs} />
      <HomeInfoCard aboutUs={aboutUs} />
    </div>
  );
}
