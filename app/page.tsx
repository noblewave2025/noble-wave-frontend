import { HomeInfoCard } from '@/components/home-info-card/HomeInfoCard';
import { HomeMainCard } from '@/components/home-main-card/HomeMainCard';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 pt-2 pb-8 sm:px-2">
      <HomeMainCard />
      <HomeInfoCard />
    </div>
  );
}
