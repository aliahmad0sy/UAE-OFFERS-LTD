"use client";

import { useLocale, useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/constants";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            {locale === "ar" ? "آراء العملاء" : "Client Reviews"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 end-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  &ldquo;{locale === "ar" ? testimonial.textAr : testimonial.textEn}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    {(locale === "ar" ? testimonial.nameAr : (testimonial.nameEn || testimonial.nameAr)).charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {locale === "ar" ? testimonial.nameAr : (testimonial.nameEn || testimonial.nameAr)}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
