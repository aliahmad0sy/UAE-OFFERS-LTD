import { useLocale, useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/constants";

interface FAQSectionProps {
  limit?: number;
  category?: string;
}

export default function FAQSection({ limit, category }: FAQSectionProps) {
  const t = useTranslations("faq");
  const locale = useLocale();

  let faqs = FAQS;
  if (category) faqs = faqs.filter((f) => f.category === category);
  if (limit) faqs = faqs.slice(0, limit);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-4 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-start font-semibold text-gray-900 hover:text-primary hover:no-underline py-4">
                {locale === "ar" ? faq.questionAr : faq.questionEn}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {locale === "ar" ? faq.answerAr : faq.answerEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
