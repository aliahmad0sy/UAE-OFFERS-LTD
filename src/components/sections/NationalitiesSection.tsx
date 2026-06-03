import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Clock, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { NATIONALITIES } from "@/data/constants";

export default function NationalitiesSection() {
  const t = useTranslations("nationalities");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#f0fafa] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "الجنسيات" : "Nationalities"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {NATIONALITIES.map((nat) => (
            <Link
              key={nat.id}
              href={`/${locale}/nationalities/${nat.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary/20 block"
            >
              {/* Flag */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 text-center">
                <span className="text-6xl drop-shadow-sm">{nat.flag}</span>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-0.5 group-hover:text-primary transition-colors">
                  {locale === "ar" ? nat.nameAr : nat.nameEn}
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  {locale === "ar" ? nat.country : nat.countryEn}
                </p>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                    <DollarSign className="w-3.5 h-3.5 text-primary" />
                    {nat.salaryMin}–{nat.salaryMax} {locale === "ar" ? "ريال" : "SAR"}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    {nat.duration}
                  </div>
                </div>

                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {locale === "ar" ? "متاح الآن" : "Available Now"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
