import { useLocale, useTranslations } from "next-intl";
import { FileText, UserCheck, CreditCard, Home } from "lucide-react";

export default function StepsSection() {
  const t = useTranslations("steps");
  const locale = useLocale();

  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      number: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      number: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      number: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
    {
      icon: <Home className="w-8 h-8" />,
      number: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            {locale === "ar" ? "العملية" : "Process"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary to-secondary z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Number */}
              <div className="relative z-10 w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-primary">{step.icon}</div>
                <span className="absolute -top-2 -end-2 w-8 h-8 bg-primary text-white rounded-full text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
