import { HomeInfoCard } from '@/components/home-info-card/HomeInfoCard';
import { HomeMainCard } from '@/components/home-main-card/HomeMainCard';

export default function Home() {
  return (
    <div className="flex h-screen flex-col gap-6 py-2 sm:px-2">
      <HomeMainCard />
      <HomeInfoCard />
    </div>
  );
}
