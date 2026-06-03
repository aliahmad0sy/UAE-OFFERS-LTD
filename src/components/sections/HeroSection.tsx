"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, ArrowLeft, ArrowRight, Star, Users, Award, CheckCircle, Phone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const message =
    locale === "ar"
      ? "مرحباً، أريد الاستفسار عن خدمات استقدام العمالة المنزلية"
      : "Hello, I want to inquire about domestic labor recruitment services";

  const stats = [
    { value: "+5000", label: t("stat1"), icon: <Users className="w-6 h-6" /> },
    { value: "+15", label: t("stat2"), icon: <Award className="w-6 h-6" /> },
    { value: "5", label: t("stat3"), icon: <Star className="w-6 h-6" /> },
    { value: "98%", label: t("stat4"), icon: <CheckCircle className="w-6 h-6" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#004d49] via-[#006C67] to-[#009688]" />
      <div className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Decorative circles */}
      <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 start-0 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              {locale === "ar" ? "الشركة الأولى في استقدام العمالة المنزلية" : "#1 Domestic Labor Recruitment Company"}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {t("title")}
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {t("subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link
                href={`/${locale}/contact#request`}
                className="flex items-center justify-center gap-2 bg-[#D4AF37] text-gray-900 font-bold px-8 py-4 rounded-xl text-base hover:bg-[#c49d2a] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {t("requestBtn")}
              </Link>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-[#1fb854] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                {t("whatsappBtn")}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                locale === "ar" ? "مرخصون رسمياً" : "Officially Licensed",
                locale === "ar" ? "ضمان 3 أشهر" : "3-Month Guarantee",
                locale === "ar" ? "متابعة كاملة" : "Full Follow-up",
                locale === "ar" ? "أسعار مضمونة" : "Guaranteed Prices",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-white/90 text-sm bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 text-[#D4AF37] rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
