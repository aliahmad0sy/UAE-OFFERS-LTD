import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StepsSection from "@/components/sections/StepsSection";
import NationalitiesSection from "@/components/sections/NationalitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import RequestForm from "@/components/sections/RequestForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saudi-recruitment.com";

  return {
    title:
      locale === "ar"
        ? "استقدام العمالة المنزلية في السعودية - الرئيسية"
        : "Domestic Labor Recruitment in Saudi Arabia - Home",
    description:
      locale === "ar"
        ? "نوفر أفضل العمالة المنزلية في السعودية: خادمات فلبينيات، كينيات، أوغنديات، إثيوبيات. اطلب الآن وتواصل معنا عبر واتساب."
        : "We provide the best domestic workers in Saudi Arabia: Filipino, Kenyan, Ugandan maids. Request now and contact us via WhatsApp.",
    alternates: {
      canonical: `${siteUrl}/${locale}`,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment Co.",
    description:
      locale === "ar"
        ? "شركة متخصصة في استقدام العمالة المنزلية في المملكة العربية السعودية"
        : "Specialized company in domestic labor recruitment in Saudi Arabia",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality: locale === "ar" ? "الرياض" : "Riyadh",
    },
    areaServed: "SA",
    serviceType:
      locale === "ar" ? "استقدام العمالة المنزلية" : "Domestic Labor Recruitment",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <StepsSection />
      <NationalitiesSection />
      <TestimonialsSection />
      <FAQSection limit={6} />
      <RequestForm />
    </>
  );
}
