import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Home, Baby, Car, ChefHat, Wrench } from "lucide-react";
import { SERVICES } from "@/data/constants";

const serviceConfig: Record<string, {
  icon: React.ElementType;
  color: string;
  lightBg: string;
  ar: string;
  en: string;
}> = {
  maids:   { icon: Home,     color: "#006C67", lightBg: "bg-[#006C67]/10", ar: "خادمات مدربات من أفضل الجنسيات لإدارة منزلك بكفاءة عالية.",        en: "Trained maids from top nationalities to manage your home efficiently."   },
  nannies: { icon: Baby,     color: "#009688", lightBg: "bg-[#009688]/10", ar: "مربيات متخصصات لرعاية أطفالك وتنشئتهم بأفضل الأساليب التربوية.",      en: "Specialized nannies for child care with the best educational methods."   },
  drivers: { icon: Car,      color: "#D4AF37", lightBg: "bg-[#D4AF37]/10", ar: "سائقون موثوقون لخدمة عائلتك بأمان وراحة تامة.",                       en: "Reliable drivers for safe and comfortable family transportation."         },
  cooks:   { icon: ChefHat,  color: "#5c6bc0", lightBg: "bg-[#5c6bc0]/10", ar: "طباخات ماهرات في المطبخ العربي والعالمي لتقديم أشهى الوجبات.",          en: "Skilled cooks in Arabic and international cuisine."                      },
  workers: { icon: Wrench,   color: "#00897b", lightBg: "bg-[#00897b]/10", ar: "عمال منزليون متكاملون لجميع مهام المنزل اليومية.",                      en: "All-round home workers for all daily household tasks."                   },
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "خدماتنا" : "Our Services"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("subtitle")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            {locale === "ar"
              ? "نوفر أفضل العمالة المنزلية المدربة من مختلف الجنسيات بأسعار تنافسية"
              : "We provide the best trained domestic workers from various nationalities at competitive prices"}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const cfg = serviceConfig[service.id];
            if (!cfg) return null;
            const Icon = cfg.icon;
            return (
              <Link
                key={service.id}
                href={`/${locale}/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Colored top bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: cfg.color }} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${cfg.lightBg} rounded-2xl flex items-center justify-center mb-5`}
                    style={{ color: cfg.color }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {locale === "ar" ? service.nameAr : service.nameEn}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {cfg[locale as "ar" | "en"]}
                  </p>

                  <div className="flex items-center gap-1.5 font-semibold text-sm transition-all group-hover:gap-2.5" style={{ color: cfg.color }}>
                    {t("learnMore")}
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md shadow-primary/25"
          >
            {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
