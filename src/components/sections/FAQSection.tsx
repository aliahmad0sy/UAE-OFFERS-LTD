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
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 text-sm">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-100 rounded-2xl px-5 hover:border-primary/20 hover:shadow-sm transition-all duration-200 overflow-hidden"
            >
              <AccordionTrigger className="text-start font-semibold text-gray-800 hover:text-primary hover:no-underline py-4 text-sm md:text-base">
                {locale === "ar" ? faq.questionAr : faq.questionEn}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed pb-4 text-sm">
                {locale === "ar" ? faq.answerAr : faq.answerEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
