import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "خدماتنا - شركة الاستقدام السعودية" : "Our Services - Saudi Recruitment Co.",
    description:
      locale === "ar"
        ? "نقدم خدمات متكاملة لاستقدام العمالة المنزلية في السعودية: خادمات، مربيات أطفال، سائقون، طباخات وعمال منزليون."
        : "We offer comprehensive domestic labor recruitment services in Saudi Arabia: maids, nannies, drivers, cooks, and home workers.",
  };
}

const serviceDetails: Record<string, { featuresAr: string[]; featuresEn: string[] }> = {
  maids: {
    featuresAr: ["مدربات على أعمال المنزل", "لديهن خبرة لا تقل عن سنتين", "نظيفات ومرتبات", "أمينات وموثوقات"],
    featuresEn: ["Trained in housework", "At least 2 years experience", "Clean and organized", "Trustworthy and reliable"],
  },
  nannies: {
    featuresAr: ["متخصصات في رعاية الأطفال", "لديهن شهادات تدريب", "صبورات ومحبات للأطفال", "يتحدثن العربية الأساسية"],
    featuresEn: ["Specialized in childcare", "Have training certificates", "Patient and loving with children", "Speak basic Arabic"],
  },
  drivers: {
    featuresAr: ["لديهم رخص قيادة سارية", "خبرة في قيادة السيارات", "يعرفون طرق المدن", "أمناء وملتزمون"],
    featuresEn: ["Have valid driving licenses", "Experience in driving", "Know city roads", "Honest and committed"],
  },
  cooks: {
    featuresAr: ["ماهرات في المطبخ العربي", "يعرفن المأكولات العالمية", "يهتممن بالنظافة", "خبرة في الطبخ الصحي"],
    featuresEn: ["Skilled in Arabic cuisine", "Know international dishes", "Attention to cleanliness", "Experience in healthy cooking"],
  },
  workers: {
    featuresAr: ["متعددو المهارات", "قادرون على القيام بأعمال متنوعة", "جديون ومجتهدون", "منضبطون ومحترمون"],
    featuresEn: ["Multi-skilled", "Can do various tasks", "Serious and hardworking", "Disciplined and respectful"],
  },
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            {locale === "ar" ? "خدماتنا" : "Our Services"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === "ar" ? "خدمات استقدام العمالة المنزلية" : "Domestic Labor Recruitment Services"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === "ar"
              ? "نقدم مجموعة متكاملة من خدمات الاستقدام لتلبية جميع احتياجاتك المنزلية بأعلى معايير الجودة"
              : "We offer a comprehensive range of recruitment services to meet all your household needs with the highest quality standards"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const details = serviceDetails[service.id];
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl">
                      {locale === "ar" ? service.nameAr : service.nameEn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {(locale === "ar" ? details.featuresAr : details.featuresEn).map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={`/${locale}/services/${service.slug}`}>
                        {locale === "ar" ? "اعرف أكثر" : "Learn More"}
                        <ArrowIcon className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
