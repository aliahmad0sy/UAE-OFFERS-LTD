import { useLocale, useTranslations } from "next-intl";
import { Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

export default function WhyUsSection() {
  const t = useTranslations("whyUs");
  const locale = useLocale();

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: t("speed"),
      desc: t("speedDesc"),
      iconColor: "text-[#006C67]",
      iconBg: "bg-[#006C67]/10",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: t("followUp"),
      desc: t("followUpDesc"),
      iconColor: "text-[#009688]",
      iconBg: "bg-[#009688]/10",
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: t("price"),
      desc: t("priceDesc"),
      iconColor: "text-[#D4AF37]",
      iconBg: "bg-[#D4AF37]/10",
    },
    {
      icon: <HeadphonesIcon className="w-7 h-7" />,
      title: t("support"),
      desc: t("supportDesc"),
      iconColor: "text-[#5c6bc0]",
      iconBg: "bg-[#5c6bc0]/10",
    },
  ];

  const stats = [
    { value: "+5,000", label: locale === "ar" ? "عميل سعيد"    : "Happy Clients"    },
    { value: "+15",    label: locale === "ar" ? "سنة خبرة"     : "Years Experience" },
    { value: "5",      label: locale === "ar" ? "دول"           : "Countries"        },
    { value: "98%",    label: locale === "ar" ? "نسبة النجاح"  : "Success Rate"     },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "لماذا نحن" : "Why Choose Us"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${f.iconBg} ${f.iconColor} rounded-2xl flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="relative overflow-hidden rounded-3xl bg-[#003d39]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, #ffffff 20px, #ffffff 21px)`,
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 rtl:divide-x-reverse">
            {stats.map((s, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <div className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
