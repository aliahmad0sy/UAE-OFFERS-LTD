import { useLocale, useTranslations } from "next-intl";
import { FileText, UserCheck, CreditCard, Home } from "lucide-react";

export default function StepsSection() {
  const t = useTranslations("steps");
  const locale = useLocale();

  const steps = [
    { icon: <FileText className="w-8 h-8" />,   number: "01", title: t("step1Title"), desc: t("step1Desc") },
    { icon: <UserCheck className="w-8 h-8" />,  number: "02", title: t("step2Title"), desc: t("step2Desc") },
    { icon: <CreditCard className="w-8 h-8" />, number: "03", title: t("step3Title"), desc: t("step3Desc") },
    { icon: <Home className="w-8 h-8" />,        number: "04", title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#003d39] overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {locale === "ar" ? "كيف نعمل" : "How It Works"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t("title")}</h2>
          <p className="text-white/55 text-sm">{t("subtitle")}</p>
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto mt-4" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Desktop connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 start-[calc(50%+3.5rem)] w-[calc(100%-7rem)] h-px bg-white/15 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-white/15 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -end-1 w-8 h-8 bg-[#D4AF37] text-[#003d39] text-xs font-black rounded-full flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
