"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, Phone, Star, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const message =
    locale === "ar"
      ? "مرحباً، أريد الاستفسار عن خدمات استقدام العمالة المنزلية"
      : "Hello, I want to inquire about domestic labor recruitment services";

  const stats = [
    { value: "+5000", label: t("stat1"), icon: <Users className="w-5 h-5" /> },
    { value: "+15", label: t("stat2"), icon: <Award className="w-5 h-5" /> },
    { value: "5", label: t("stat3"), icon: <Star className="w-5 h-5" /> },
    { value: "98%", label: t("stat4"), icon: <CheckCircle className="w-5 h-5" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-start">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              {locale === "ar" ? "الشركة الأولى في استقدام العمالة المنزلية" : "#1 Domestic Labor Recruitment Company"}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t("title")}
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="xl">
                <Link href={`/${locale}/contact#request`}>
                  <Phone className="w-5 h-5" />
                  {t("requestBtn")}
                </Link>
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                asChild
              >
                <a
                  href={getWhatsAppUrl(WHATSAPP_NUMBER, message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("whatsappBtn")}
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              {["مرخصون رسمياً", "ضمان 3 أشهر", "متابعة كاملة", "أسعار مضمونة"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
