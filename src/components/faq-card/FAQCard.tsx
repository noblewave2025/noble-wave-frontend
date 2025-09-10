import { Faq } from '@/payload-types';
import { FC } from 'react';
import { Meteors } from '../magicui/meteors';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion';
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from '@atelier-disko/payload-lexical-react-renderer';

interface IFAQCardProps {
  faqs: Faq[];
}

export const FAQCard: FC<IFAQCardProps> = ({ faqs }) => {
  return (
    <div className="relative flex flex-col gap-8 overflow-hidden rounded-4xl border px-2 pt-22 pb-10 md:px-6">
      <Meteors number={60} className="top-0 bottom-0 z-10" />
      <div className="z-20 flex flex-col gap-2">
        <p className="text-7xl font-black">FAQ</p>
        <p className="text-muted-foreground text-3xl font-semibold">
          Часто задаваемые вопросы
        </p>
      </div>
      <Accordion type="multiple" className="z-20 flex w-full flex-col gap-4">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="rounded-xl !border px-6 py-3 backdrop-blur-[2px]"
          >
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="text-balance">
              <article className="prose prose-invert max-w-full">
                <PayloadLexicalReactRenderer
                  content={faq.answer as PayloadLexicalReactRendererContent}
                />
              </article>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
