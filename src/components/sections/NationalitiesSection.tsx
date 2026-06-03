import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NATIONALITIES } from "@/data/constants";

export default function NationalitiesSection() {
  const t = useTranslations("nationalities");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            {locale === "ar" ? "الجنسيات" : "Nationalities"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {NATIONALITIES.map((nat) => (
            <Link
              key={nat.id}
              href={`/${locale}/nationalities/${nat.slug}`}
              className="group"
            >
              <Card className="h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Flag Banner */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 text-center">
                  <span className="text-6xl">{nat.flag}</span>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors">
                    {locale === "ar" ? nat.nameAr : nat.nameEn}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {locale === "ar" ? nat.country : nat.countryEn}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600">
                      <DollarSign className="w-3.5 h-3.5 text-primary" />
                      <span>{nat.salaryMin} - {nat.salaryMax} {locale === "ar" ? "ريال" : "SAR"}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      <span>{nat.duration}</span>
                    </div>
                  </div>

                  <Badge variant="default" className="mt-3 text-xs">
                    {locale === "ar" ? "متاح الآن" : "Available Now"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
