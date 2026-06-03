import { useLocale, useTranslations } from "next-intl";
import { Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

export default function WhyUsSection() {
  const t = useTranslations("whyUs");
  const locale = useLocale();

  const features = [
    { icon: <Zap className="w-7 h-7" />, title: t("speed"), desc: t("speedDesc"), gradient: "from-blue-500 to-blue-600" },
    { icon: <Users className="w-7 h-7" />, title: t("followUp"), desc: t("followUpDesc"), gradient: "from-[#006C67] to-[#009688]" },
    { icon: <DollarSign className="w-7 h-7" />, title: t("price"), desc: t("priceDesc"), gradient: "from-[#D4AF37] to-yellow-500" },
    { icon: <HeadphonesIcon className="w-7 h-7" />, title: t("support"), desc: t("supportDesc"), gradient: "from-purple-500 to-purple-600" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "مميزاتنا" : "Our Advantages"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 bg-gradient-to-br ${f.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#004d49] via-[#006C67] to-[#009688] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "+5000", label: locale === "ar" ? "عميل سعيد" : "Happy Clients" },
              { value: "+15", label: locale === "ar" ? "سنة خبرة" : "Years Experience" },
              { value: "5", label: locale === "ar" ? "دول" : "Countries" },
              { value: "98%", label: locale === "ar" ? "نسبة النجاح" : "Success Rate" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">{s.value}</div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
