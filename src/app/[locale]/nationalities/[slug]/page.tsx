import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Clock, DollarSign, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FAQSection from "@/components/sections/FAQSection";
import RequestForm from "@/components/sections/RequestForm";
import { NATIONALITIES } from "@/data/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

type Props = { params: Promise<{ locale: string; slug: string }> };

const nationalityDetails: Record<
  string,
  {
    descriptionAr: string;
    descriptionEn: string;
    featuresAr: string[];
    featuresEn: string[];
    skillsAr: string[];
    skillsEn: string[];
    prosAr: string[];
    prosEn: string[];
  }
> = {
  philippines: {
    descriptionAr:
      "تُعد الفلبين من أفضل الدول التي توفر عمالة منزلية مدربة ومؤهلة. الخادمات الفلبينيات معروفات بمهنيتهن العالية وإتقانهن للغة الإنجليزية والعمل في بيئات متنوعة.",
    descriptionEn:
      "The Philippines is one of the best countries providing trained and qualified domestic workers. Filipino maids are known for their high professionalism, English proficiency, and ability to work in diverse environments.",
    featuresAr: ["تتحدث الإنجليزية بطلاقة", "خبرة في التعامل مع الأطفال", "مدربة مسبقاً", "تحمل وثائق رسمية"],
    featuresEn: ["Speaks English fluently", "Experienced with children", "Pre-trained", "Holds official documents"],
    skillsAr: ["التنظيف والترتيب", "طهي المأكولات المتنوعة", "رعاية الأطفال", "الغسيل والكي", "العناية بالحديقة"],
    skillsEn: ["Cleaning and organizing", "Cooking various dishes", "Childcare", "Laundry and ironing", "Garden care"],
    prosAr: ["انضباط عالٍ", "سريعات التعلم", "يعملن بإتقان", "أمينات ونزيهات"],
    prosEn: ["High discipline", "Quick learners", "Work with precision", "Honest and trustworthy"],
  },
  kenya: {
    descriptionAr:
      "الخادمات الكينيات معروفات بجودة عملهن وقدرتهن على التكيف مع بيئات مختلفة. يتميزن بالنشاط والحيوية والقدرة على أداء مهام متعددة في وقت واحد.",
    descriptionEn:
      "Kenyan maids are known for the quality of their work and ability to adapt to different environments. They are characterized by their energy, vitality, and ability to perform multiple tasks simultaneously.",
    featuresAr: ["نشيطات وحيويات", "قادرات على أعمال متعددة", "مدربات على المعايير الدولية", "يتكيفن مع البيئات المختلفة"],
    featuresEn: ["Active and energetic", "Capable of multiple tasks", "Trained to international standards", "Adapt to different environments"],
    skillsAr: ["أعمال المنزل الشاملة", "طهي المأكولات العربية والإفريقية", "رعاية الأطفال والمسنين", "الغسيل والكي", "التسوق"],
    skillsEn: ["Comprehensive housework", "Cooking Arabic and African dishes", "Childcare and elderly care", "Laundry and ironing", "Shopping"],
    prosAr: ["طاقة عالية", "مخلصات في العمل", "متعاونات", "صبورات"],
    prosEn: ["High energy", "Dedicated to work", "Cooperative", "Patient"],
  },
  uganda: {
    descriptionAr:
      "الخادمات الأوغنديات يمتزن بالتفاني والإخلاص في العمل. يتميزن بقدرتهن على التعامل مع الأطفال والمسنين بلطف واهتمام.",
    descriptionEn:
      "Ugandan maids are distinguished by their dedication and loyalty to work. They are characterized by their ability to deal with children and the elderly with gentleness and care.",
    featuresAr: ["مخلصات ومتفانيات", "لطيفات مع الأطفال والمسنين", "يتحدثن الإنجليزية", "مدربات على الأعمال المنزلية"],
    featuresEn: ["Loyal and dedicated", "Gentle with children and elderly", "Speak English", "Trained in housework"],
    skillsAr: ["تنظيف المنزل", "رعاية الأطفال", "الطبخ", "الغسيل", "العناية بالحديقة"],
    skillsEn: ["House cleaning", "Childcare", "Cooking", "Laundry", "Garden care"],
    prosAr: ["هادئات ومتوازنات", "صبورات جداً", "محبوبات من الأطفال", "أمينات"],
    prosEn: ["Calm and balanced", "Very patient", "Loved by children", "Honest"],
  },
  ethiopia: {
    descriptionAr:
      "الخادمات الإثيوبيات معروفات بسرعة تعلمهن وقدرتهن على التكيف. تتميز إثيوبيا بتوفير عمالة شبابية نشطة وحيوية.",
    descriptionEn:
      "Ethiopian maids are known for their quick learning ability and adaptability. Ethiopia is characterized by providing young, active, and energetic workers.",
    featuresAr: ["سريعات التعلم", "شبابية ونشطة", "مدربات مسبقاً", "تحمل وثائق معتمدة"],
    featuresEn: ["Quick learners", "Young and active", "Pre-trained", "Hold certified documents"],
    skillsAr: ["التنظيف والترتيب", "الطبخ", "رعاية الأطفال", "الغسيل والكي", "الأعمال المنزلية العامة"],
    skillsEn: ["Cleaning and organizing", "Cooking", "Childcare", "Laundry and ironing", "General housework"],
    prosAr: ["نشاط وحيوية عالية", "تعلم سريع", "تكيف جيد", "مجتهدات"],
    prosEn: ["High energy and vitality", "Fast learning", "Good adaptation", "Hardworking"],
  },
  bangladesh: {
    descriptionAr:
      "الخادمات البنغلاديشيات يتميزن بالصبر والهدوء وقدرتهن على أداء الأعمال المنزلية بدقة. تتميز بأسعار تنافسية مع جودة عالية.",
    descriptionEn:
      "Bangladeshi maids are distinguished by their patience, calmness, and ability to perform household tasks with precision. They offer competitive prices with high quality.",
    featuresAr: ["صبورات وهادئات", "دقيقات في العمل", "أسعار تنافسية", "مدربات على الأعمال المنزلية"],
    featuresEn: ["Patient and calm", "Precise in work", "Competitive prices", "Trained in housework"],
    skillsAr: ["التنظيف الشامل", "إعداد الطعام", "العناية بالملابس", "رعاية الأطفال", "الأعمال المنزلية المتنوعة"],
    skillsEn: ["Comprehensive cleaning", "Food preparation", "Clothing care", "Childcare", "Various housework"],
    prosAr: ["هادئات جداً", "دقيقات ومنتبهات", "مخلصات", "اقتصادية"],
    prosEn: ["Very calm", "Precise and attentive", "Loyal", "Economical"],
  },
};

export async function generateStaticParams() {
  return NATIONALITIES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const nat = NATIONALITIES.find((n) => n.slug === slug);
  if (!nat) return { title: "Not Found" };

  return {
    title:
      locale === "ar"
        ? `${nat.nameAr} في السعودية - أسعار ومميزات | شركة الاستقدام السعودية`
        : `${nat.nameEn} in Saudi Arabia - Prices & Features | Saudi Recruitment`,
    description:
      locale === "ar"
        ? `استقدام ${nat.nameAr} في المملكة العربية السعودية. رواتب ${nat.salaryMin}-${nat.salaryMax} ريال. مدة الاستقدام ${nat.duration}. اطلب الآن.`
        : `Recruitment of ${nat.nameEn} in Saudi Arabia. Salaries ${nat.salaryMin}-${nat.salaryMax} SAR. Duration ${nat.duration}. Request now.`,
  };
}

export default async function NationalityPage({ params }: Props) {
  const { locale, slug } = await params;
  const nat = NATIONALITIES.find((n) => n.slug === slug);
  const details = nationalityDetails[slug];

  if (!nat || !details) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href={`/${locale}`} className="hover:text-primary">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
            <span>/</span>
            <Link href={`/${locale}/nationalities`} className="hover:text-primary">{locale === "ar" ? "الجنسيات" : "Nationalities"}</Link>
            <span>/</span>
            <span className="text-primary">{locale === "ar" ? nat.nameAr : nat.nameEn}</span>
          </nav>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="text-8xl">{nat.flag}</div>
            <div className="flex-1">
              <Badge variant="default" className="mb-3">
                {locale === "ar" ? "متاح الآن" : "Available Now"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {locale === "ar" ? nat.nameAr : nat.nameEn}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {locale === "ar" ? details.descriptionAr : details.descriptionEn}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-gray-500">{locale === "ar" ? "الراتب الشهري" : "Monthly Salary"}</p>
                    <p className="font-bold text-gray-900">
                      {nat.salaryMin} - {nat.salaryMax} {locale === "ar" ? "ريال" : "SAR"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-xs text-gray-500">{locale === "ar" ? "مدة الاستقدام" : "Duration"}</p>
                    <p className="font-bold text-gray-900">{nat.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <div>
                    <p className="text-xs text-gray-500">{locale === "ar" ? "التقييم" : "Rating"}</p>
                    <p className="font-bold text-gray-900">4.9/5</p>
                  </div>
                </div>
              </div>

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
                        ? `مرحباً، أريد الاستفسار عن استقدام ${nat.nameAr}`
                        : `Hello, I want to inquire about ${nat.nameEn} recruitment`
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
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === "ar" ? "المميزات" : "Features"}
              </h2>
              <div className="space-y-3">
                {(locale === "ar" ? details.featuresAr : details.featuresEn).map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === "ar" ? "المهارات" : "Skills"}
              </h2>
              <div className="space-y-3">
                {(locale === "ar" ? details.skillsAr : details.skillsEn).map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {locale === "ar" ? "نقاط القوة" : "Strengths"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(locale === "ar" ? details.prosAr : details.prosEn).map((pro, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <Star className="w-6 h-6 text-gold fill-gold mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-sm">{pro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RequestForm />
      <FAQSection limit={5} />
    </>
  );
}
