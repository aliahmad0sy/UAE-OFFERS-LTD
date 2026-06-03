import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Home, Baby, Car, ChefHat, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/constants";

const icons = {
  maids: <Home className="w-8 h-8" />,
  nannies: <Baby className="w-8 h-8" />,
  drivers: <Car className="w-8 h-8" />,
  cooks: <ChefHat className="w-8 h-8" />,
  workers: <Wrench className="w-8 h-8" />,
};

const descriptions: Record<string, { ar: string; en: string }> = {
  maids: {
    ar: "نوفر خادمات مدربات ومؤهلات من أفضل الجنسيات لإدارة منزلك بكفاءة واحترافية.",
    en: "We provide trained and qualified maids from the best nationalities to manage your home efficiently.",
  },
  nannies: {
    ar: "مربيات أطفال متخصصات ومؤهلات لرعاية أطفالك وتنشئتهم بأفضل الأساليب.",
    en: "Specialized and qualified nannies to care for your children with the best methods.",
  },
  drivers: {
    ar: "سائقون ذوو خبرة وأمانة ولديهم رخص قيادة سارية لخدمة عائلتك.",
    en: "Experienced and trustworthy drivers with valid licenses to serve your family.",
  },
  cooks: {
    ar: "طباخات ماهرات في إعداد المأكولات العربية والعالمية لخدمة مائدتك.",
    en: "Skilled cooks in preparing Arabic and international cuisine for your table.",
  },
  workers: {
    ar: "عمال منزليون متكاملون للقيام بجميع الأعمال المنزلية المتنوعة.",
    en: "Comprehensive home workers to perform all kinds of household tasks.",
  },
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            {t("title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("subtitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.id} className="group hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {icons[service.id as keyof typeof icons]}
                </div>
                <CardTitle className="text-xl">
                  {locale === "ar" ? service.nameAr : service.nameEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {descriptions[service.id]?.[locale as "ar" | "en"]}
                </p>
                <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto">
                  <Link href={`/${locale}/services/${service.slug}`} className="flex items-center gap-1">
                    {t("learnMore")}
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href={`/${locale}/services`}>
              {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
