"use client";

import { useLocale, useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/constants";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "آراء العملاء" : "Client Reviews"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative"
            >
              {/* Quote background */}
              <div className="absolute top-4 end-4 text-primary/10">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[60px]">
                &ldquo;{locale === "ar" ? item.textAr : item.textEn}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
                  {(locale === "ar" ? item.nameAr : (item.nameEn || item.nameAr)).charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {locale === "ar" ? item.nameAr : (item.nameEn || item.nameAr)}
                  </p>
                  <p className="text-xs text-gray-400">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
