import { useLocale, useTranslations } from "next-intl";
import { Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

export default function WhyUsSection() {
  const t = useTranslations("whyUs");
  const locale = useLocale();

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("speed"),
      desc: t("speedDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("followUp"),
      desc: t("followUpDesc"),
      color: "from-primary to-secondary",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t("price"),
      desc: t("priceDesc"),
      color: "from-gold to-yellow-500",
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: t("support"),
      desc: t("supportDesc"),
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            {locale === "ar" ? "مميزاتنا" : "Our Advantages"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "+5000", label: locale === "ar" ? "عميل سعيد" : "Happy Clients" },
              { value: "+15", label: locale === "ar" ? "سنة خبرة" : "Years Experience" },
              { value: "5", label: locale === "ar" ? "دول" : "Countries" },
              { value: "98%", label: locale === "ar" ? "نسبة النجاح" : "Success Rate" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
