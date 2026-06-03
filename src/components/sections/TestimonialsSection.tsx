"use client";

import { useLocale, useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/constants";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "آراء عملائنا" : "Client Reviews"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Background quote */}
              <div className="absolute top-4 end-4 text-primary/5">
                <Quote className="w-14 h-14 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[72px]">
                &ldquo;{locale === "ar" ? item.textAr : item.textEn}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
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
