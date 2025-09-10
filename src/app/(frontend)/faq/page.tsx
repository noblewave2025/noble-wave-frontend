import { getPayload } from 'payload';
import config from '@payload-config';
import { FAQCard } from '@/components/faq-card/FAQCard';

export default async function FAQPage() {
  const payload = await getPayload({ config });
  const faqs = await payload.find({
    collection: 'faq',
  });

  return (
    <div className="pt-2 sm:mx-2">
      <FAQCard faqs={faqs.docs} />
    </div>
  );
}
