import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";
import { FAQS } from "@/data/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "الأسئلة الشائعة - شركة الاستقدام السعودية" : "FAQ - Saudi Recruitment Co.",
    description:
      locale === "ar"
        ? "إجابات على جميع أسئلتك حول استقدام العمالة المنزلية في المملكة العربية السعودية."
        : "Answers to all your questions about domestic labor recruitment in Saudi Arabia.",
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;

  const categories = [
    { id: "general", labelAr: "عام", labelEn: "General" },
    { id: "pricing", labelAr: "الأسعار", labelEn: "Pricing" },
    { id: "process", labelAr: "العملية", labelEn: "Process" },
    { id: "documents", labelAr: "المستندات", labelEn: "Documents" },
    { id: "guarantee", labelAr: "الضمان", labelEn: "Guarantee" },
    { id: "coverage", labelAr: "التغطية", labelEn: "Coverage" },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.questionAr,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerAr,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === "ar"
              ? "إجابات شاملة على أكثر الأسئلة شيوعاً حول استقدام العمالة المنزلية"
              : "Comprehensive answers to the most common questions about domestic labor recruitment"}
          </p>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
