import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Clock, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { NATIONALITIES } from "@/data/constants";

export default function NationalitiesSection() {
  const t = useTranslations("nationalities");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "الجنسيات المتاحة" : "Available Nationalities"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {NATIONALITIES.map((nat) => (
            <Link
              key={nat.id}
              href={`/${locale}/nationalities/${nat.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Flag area */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white pt-8 pb-4 text-center">
                <span className="text-6xl filter drop-shadow-sm">{nat.flag}</span>
              </div>

              <div className="px-4 pb-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base mb-0.5 text-center group-hover:text-primary transition-colors">
                  {locale === "ar" ? nat.nameAr : nat.nameEn}
                </h3>
                <p className="text-xs text-gray-400 mb-4 text-center">
                  {locale === "ar" ? nat.country : nat.countryEn}
                </p>

                {/* Info rows */}
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 text-xs">
                    <span className="flex items-center gap-1 text-gray-400">
                      <DollarSign className="w-3.5 h-3.5 text-primary" />
                      {locale === "ar" ? "الراتب" : "Salary"}
                    </span>
                    <span className="font-semibold text-gray-700">
                      {nat.salaryMin}–{nat.salaryMax} {locale === "ar" ? "ريال" : "SAR"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 text-xs">
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      {locale === "ar" ? "المدة" : "Duration"}
                    </span>
                    <span className="font-semibold text-gray-700">{nat.duration}</span>
                  </div>
                </div>

                {/* CTA button */}
                <div className="inline-flex items-center justify-center gap-1.5 bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-xl group-hover:bg-primary/90 transition-colors w-full">
                  {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
