import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Home, Baby, Car, ChefHat, Wrench } from "lucide-react";
import { SERVICES } from "@/data/constants";

const icons = {
  maids: <Home className="w-7 h-7" />,
  nannies: <Baby className="w-7 h-7" />,
  drivers: <Car className="w-7 h-7" />,
  cooks: <ChefHat className="w-7 h-7" />,
  workers: <Wrench className="w-7 h-7" />,
};

const gradients = [
  "from-[#006C67] to-[#009688]",
  "from-[#009688] to-[#00b4a0]",
  "from-[#D4AF37] to-[#e8c84a]",
  "from-[#006C67] to-[#00897b]",
  "from-[#5c6bc0] to-[#7986cb]",
];

const descriptions: Record<string, { ar: string; en: string }> = {
  maids: { ar: "خادمات مدربات ومؤهلات من أفضل الجنسيات لإدارة منزلك بكفاءة.", en: "Trained and qualified maids to manage your home efficiently." },
  nannies: { ar: "مربيات متخصصات لرعاية أطفالك وتنشئتهم بأفضل الأساليب.", en: "Specialized nannies to care for your children." },
  drivers: { ar: "سائقون ذوو خبرة وأمانة لخدمة عائلتك بأمان.", en: "Experienced and trustworthy drivers for your family." },
  cooks: { ar: "طباخات ماهرات في المطبخ العربي والعالمي لخدمة مائدتك.", en: "Skilled cooks in Arabic and international cuisine." },
  workers: { ar: "عمال منزليون متكاملون لجميع الأعمال المنزلية.", en: "Comprehensive home workers for all household tasks." },
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {t("title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("subtitle")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              href={`/${locale}/services/${service.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20 block"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${gradients[index % gradients.length]} text-white rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                {icons[service.id as keyof typeof icons]}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {locale === "ar" ? service.nameAr : service.nameEn}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {descriptions[service.id]?.[locale as "ar" | "en"]}
              </p>

              <div className="flex items-center gap-1.5 text-primary font-semibold text-sm">
                {t("learnMore")}
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-x-0 transition-transform" style={{ transform: isRTL ? 'scaleX(-1)' : undefined }} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
