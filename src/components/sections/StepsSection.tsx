import { useLocale, useTranslations } from "next-intl";
import { FileText, UserCheck, CreditCard, Home } from "lucide-react";

export default function StepsSection() {
  const t = useTranslations("steps");
  const locale = useLocale();

  const steps = [
    { icon: <FileText className="w-7 h-7" />, number: "01", title: t("step1Title"), desc: t("step1Desc") },
    { icon: <UserCheck className="w-7 h-7" />, number: "02", title: t("step2Title"), desc: t("step2Desc") },
    { icon: <CreditCard className="w-7 h-7" />, number: "03", title: t("step3Title"), desc: t("step3Desc") },
    { icon: <Home className="w-7 h-7" />, number: "04", title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#f0fafa] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "العملية" : "Process"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-gray-500">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 start-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0 -translate-x-4" />
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20 text-center relative z-10">
                {/* Step number badge */}
                <div className="relative inline-block mb-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -end-2 w-7 h-7 bg-[#D4AF37] text-white rounded-full text-xs font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
