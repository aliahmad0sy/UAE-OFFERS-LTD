"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const message =
    locale === "ar"
      ? "مرحباً، أريد الاستفسار عن خدمات استقدام العمالة المنزلية"
      : "Hello, I want to inquire about domestic labor recruitment services";

  const badges = locale === "ar"
    ? ["مرخصون رسمياً", "ضمان 3 أشهر", "متابعة مستمرة", "أسعار شفافة"]
    : ["Officially Licensed", "3-Month Guarantee", "Continuous Follow-up", "Transparent Pricing"];

  const stats = [
    { value: "+5,000", label: locale === "ar" ? "عميل راضٍ" : "Happy Clients" },
    { value: "+15", label: locale === "ar" ? "سنة خبرة" : "Years Experience" },
    { value: "5", label: locale === "ar" ? "جنسيات متاحة" : "Nationalities" },
    { value: "98%", label: locale === "ar" ? "نسبة نجاح" : "Success Rate" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Dark hero area */}
      <div className="relative bg-[#003d39] pt-24 pb-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='none'/%3E%3Cpath d='M0 0h80M0 80h80M0 0v80M80 0v80' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold accent top line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-[#D4AF37]" />

        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 text-[#D4AF37] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            {locale === "ar"
              ? "وكالة استقدام معتمدة ومرخصة رسمياً"
              : "Officially Licensed Recruitment Agency"}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto">
            {t("title")}
          </h1>

          <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href={`/${locale}/contact#request`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#003d39] font-black px-10 py-4 rounded-xl text-base hover:bg-[#c9a430] transition-all duration-200 shadow-xl shadow-[#D4AF37]/20"
            >
              <Phone className="w-5 h-5" />
              {t("requestBtn")}
            </Link>
            <a
              href={getWhatsAppUrl(WHATSAPP_NUMBER, message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold px-10 py-4 rounded-xl text-base hover:bg-[#1fbc58] transition-all duration-200 shadow-xl shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              {t("whatsappBtn")}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-white/55 text-sm">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Wave into stats */}
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: 60 }}
        >
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
        </svg>
      </div>

      {/* Stats strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 rtl:divide-x-reverse">
            {stats.map((s, i) => (
              <div key={i} className="py-6 px-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
