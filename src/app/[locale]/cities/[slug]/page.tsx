import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/sections/FAQSection";
import RequestForm from "@/components/sections/RequestForm";
import { SAUDI_CITIES, SERVICES, NATIONALITIES } from "@/data/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

type Props = { params: Promise<{ locale: string; slug: string }> };

const cityDetails: Record<
  string,
  {
    descriptionAr: string;
    descriptionEn: string;
    faqsAr: { q: string; a: string }[];
    faqsEn: { q: string; a: string }[];
  }
> = {
  riyadh: {
    descriptionAr:
      "الرياض عاصمة المملكة العربية السعودية ومركزها الإداري والتجاري. نوفر خدمات استقدام العمالة المنزلية في جميع أحياء الرياض بأعلى جودة وأسرع وقت.",
    descriptionEn:
      "Riyadh is the capital of Saudi Arabia and its administrative and commercial center. We provide domestic labor recruitment services in all Riyadh neighborhoods with the highest quality and fastest time.",
    faqsAr: [
      { q: "كم تستغرق مدة الاستقدام في الرياض؟", a: "تستغرق عادة من شهر إلى 3 أشهر حسب الجنسية المطلوبة." },
      { q: "هل تخدمون جميع أحياء الرياض؟", a: "نعم، نخدم جميع أحياء الرياض بما فيها النزهة، العليا، الملك فهد، الروضة وغيرها." },
    ],
    faqsEn: [
      { q: "How long does recruitment take in Riyadh?", a: "It usually takes 1-3 months depending on the required nationality." },
      { q: "Do you serve all Riyadh neighborhoods?", a: "Yes, we serve all Riyadh neighborhoods." },
    ],
  },
  jeddah: {
    descriptionAr:
      "جدة مدينة الملاحة والتجارة، ثاني أكبر مدن المملكة. نقدم خدمات الاستقدام في جميع أحياء جدة للأسر الكريمة.",
    descriptionEn:
      "Jeddah is the city of navigation and trade, the second largest city in the Kingdom. We provide recruitment services in all Jeddah neighborhoods for honorable families.",
    faqsAr: [
      { q: "كم تستغرق مدة الاستقدام في جدة؟", a: "تستغرق عادة من شهر إلى 3 أشهر." },
      { q: "هل أسعاركم نفسها في جدة والرياض؟", a: "نعم، أسعارنا موحدة في جميع المدن السعودية." },
    ],
    faqsEn: [
      { q: "How long does recruitment take in Jeddah?", a: "It usually takes 1-3 months." },
      { q: "Are your prices the same in Jeddah and Riyadh?", a: "Yes, our prices are uniform across all Saudi cities." },
    ],
  },
  dammam: {
    descriptionAr:
      "الدمام عاصمة المنطقة الشرقية، مركز صناعي ونفطي مهم. نخدم الأسر في الدمام وجميع مناطق المنطقة الشرقية.",
    descriptionEn:
      "Dammam is the capital of the Eastern Province, an important industrial and oil center. We serve families in Dammam and all areas of the Eastern Province.",
    faqsAr: [
      { q: "هل تخدمون الخبر والقطيف أيضاً؟", a: "نعم، نخدم الدمام والخبر والقطيف وجميع مدن المنطقة الشرقية." },
      { q: "ما هي أسرع جنسية للاستقدام في الدمام؟", a: "عادةً الإثيوبية والبنغلاديشية أسرع في الإجراءات." },
    ],
    faqsEn: [
      { q: "Do you serve Al Khobar and Qatif too?", a: "Yes, we serve Dammam, Al Khobar, Qatif, and all Eastern Province cities." },
      { q: "What is the fastest nationality for recruitment in Dammam?", a: "Usually Ethiopian and Bangladeshi are faster in procedures." },
    ],
  },
  makkah: {
    descriptionAr:
      "مكة المكرمة أقدس بقاع الأرض ومهوى قلوب المسلمين. نوفر خدمات الاستقدام المنزلي لأهل مكة وضيوف الرحمن.",
    descriptionEn:
      "Makkah is the holiest place on earth. We provide domestic recruitment services for Makkah residents.",
    faqsAr: [
      { q: "هل هناك قيود خاصة للاستقدام في مكة؟", a: "يجب أن تكون العاملة مسلمة لتعمل في مكة المكرمة وفق الأنظمة." },
      { q: "كم تستغرق الإجراءات في مكة؟", a: "نفس المدة في باقي المدن، من شهر إلى 3 أشهر." },
    ],
    faqsEn: [
      { q: "Are there special restrictions for recruitment in Makkah?", a: "The worker must be Muslim to work in Makkah according to regulations." },
      { q: "How long do procedures take in Makkah?", a: "Same as other cities, 1-3 months." },
    ],
  },
  madinah: {
    descriptionAr:
      "المدينة المنورة، مدينة الرسول ﷺ. نخدم أهل المدينة بخدمات استقدام العمالة المنزلية المدربة والموثوقة.",
    descriptionEn:
      "Madinah, the city of the Prophet ﷺ. We serve Madinah residents with trained and reliable domestic labor recruitment services.",
    faqsAr: [
      { q: "هل تخدمون المدينة المنورة؟", a: "نعم، نخدم المدينة المنورة وجميع أحيائها." },
      { q: "هل العاملة يجب أن تكون مسلمة في المدينة؟", a: "نعم، وفق الأنظمة يجب أن تكون العاملة مسلمة للعمل في المدينة المنورة." },
    ],
    faqsEn: [
      { q: "Do you serve Madinah?", a: "Yes, we serve Madinah and all its neighborhoods." },
      { q: "Does the worker need to be Muslim in Madinah?", a: "Yes, according to regulations the worker must be Muslim to work in Madinah." },
    ],
  },
  "al-khobar": {
    descriptionAr: "الخبر مدينة ساحلية حديثة في المنطقة الشرقية. نقدم خدمات الاستقدام لجميع سكان الخبر.",
    descriptionEn: "Al Khobar is a modern coastal city in the Eastern Province. We provide recruitment services for all Al Khobar residents.",
    faqsAr: [
      { q: "هل تخدمون الخبر؟", a: "نعم، نخدم الخبر وجميع مناطقها." },
      { q: "هل الأسعار نفسها في الخبر؟", a: "نعم، أسعارنا موحدة في جميع المدن." },
    ],
    faqsEn: [
      { q: "Do you serve Al Khobar?", a: "Yes, we serve Al Khobar and all its areas." },
      { q: "Are prices the same in Al Khobar?", a: "Yes, our prices are uniform across all cities." },
    ],
  },
  taif: {
    descriptionAr: "الطائف مدينة الورد والسياحة، المصيف المفضل للسعوديين. نقدم خدمات الاستقدام المنزلي في الطائف.",
    descriptionEn: "Taif is the city of roses and tourism, the favorite summer resort for Saudis. We provide domestic recruitment services in Taif.",
    faqsAr: [
      { q: "هل تخدمون الطائف؟", a: "نعم، نخدم الطائف وجميع أحيائها." },
      { q: "هل التوصيل متاح في الطائف؟", a: "نعم، نستقبل العاملة ونوصلها إلى منزلك." },
    ],
    faqsEn: [
      { q: "Do you serve Taif?", a: "Yes, we serve Taif and all its neighborhoods." },
      { q: "Is delivery available in Taif?", a: "Yes, we receive the worker and deliver her to your home." },
    ],
  },
  abha: {
    descriptionAr: "أبها عاصمة منطقة عسير، المدينة الجبلية الجميلة. نقدم خدمات الاستقدام لسكان أبها ومنطقة عسير.",
    descriptionEn: "Abha is the capital of Asir region, the beautiful mountain city. We provide recruitment services for Abha and Asir region residents.",
    faqsAr: [
      { q: "هل تخدمون أبها؟", a: "نعم، نخدم أبها وجميع مدن منطقة عسير." },
      { q: "كم تستغرق التوصيل إلى أبها؟", a: "نرتب شحن العاملة بالطائرة مباشرة إلى مطار أبها." },
    ],
    faqsEn: [
      { q: "Do you serve Abha?", a: "Yes, we serve Abha and all Asir region cities." },
      { q: "How long does delivery to Abha take?", a: "We arrange air shipping of the worker directly to Abha airport." },
    ],
  },
};

export async function generateStaticParams() {
  return SAUDI_CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = SAUDI_CITIES.find((c) => c.slug === slug);
  if (!city) return { title: "Not Found" };

  return {
    title:
      locale === "ar"
        ? `استقدام العمالة المنزلية في ${city.nameAr} | شركة الاستقدام السعودية`
        : `Domestic Labor Recruitment in ${city.nameEn} | Saudi Recruitment Co.`,
    description:
      locale === "ar"
        ? `نوفر أفضل خدمات استقدام العمالة المنزلية في ${city.nameAr}. خادمات مدربات ومؤهلات بأسعار تنافسية. اطلب الآن.`
        : `We provide the best domestic labor recruitment services in ${city.nameEn}. Trained and qualified maids at competitive prices. Request now.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { locale, slug } = await params;
  const city = SAUDI_CITIES.find((c) => c.slug === slug);
  const details = cityDetails[slug];

  if (!city || !details) notFound();

  const cityFaqs = (locale === "ar" ? details.faqsAr : details.faqsEn).map((f, i) => ({
    questionAr: details.faqsAr[i].q,
    questionEn: details.faqsEn[i].q,
    answerAr: details.faqsAr[i].a,
    answerEn: details.faqsEn[i].a,
    category: "city",
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.questionAr,
      acceptedAnswer: { "@type": "Answer", text: faq.answerAr },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href={`/${locale}`} className="hover:text-primary">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
            <span>/</span>
            <Link href={`/${locale}/cities`} className="hover:text-primary">{locale === "ar" ? "المدن" : "Cities"}</Link>
            <span>/</span>
            <span className="text-primary">{locale === "ar" ? city.nameAr : city.nameEn}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-primary font-medium">{locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {locale === "ar"
                ? `استقدام العمالة المنزلية في ${city.nameAr}`
                : `Domestic Labor Recruitment in ${city.nameEn}`}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {locale === "ar" ? details.descriptionAr : details.descriptionEn}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={`/${locale}/contact#request`}>
                  {locale === "ar" ? "اطلب الاستقدام الآن" : "Request Now"}
                </Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={getWhatsAppUrl(
                    WHATSAPP_NUMBER,
                    locale === "ar"
                      ? `مرحباً، أريد الاستفسار عن الاستقدام في ${city.nameAr}`
                      : `Hello, I want to inquire about recruitment in ${city.nameEn}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {locale === "ar"
              ? `خدماتنا في ${city.nameAr}`
              : `Our Services in ${city.nameEn}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/${locale}/services/${service.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {locale === "ar" ? service.nameAr : service.nameEn}
                  </p>
                  <p className="text-xs text-gray-500">
                    {locale === "ar" ? city.nameAr : city.nameEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {locale === "ar"
              ? `أسئلة شائعة عن الاستقدام في ${city.nameAr}`
              : `FAQ about Recruitment in ${city.nameEn}`}
          </h2>
          <div className="space-y-4">
            {cityFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">
                  {locale === "ar" ? faq.questionAr : faq.questionEn}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {locale === "ar" ? faq.answerAr : faq.answerEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RequestForm />
    </>
  );
}
