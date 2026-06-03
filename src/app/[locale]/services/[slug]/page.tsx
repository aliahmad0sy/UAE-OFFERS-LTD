import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FAQSection from "@/components/sections/FAQSection";
import RequestForm from "@/components/sections/RequestForm";
import { SERVICES } from "@/data/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

type Props = { params: Promise<{ locale: string; slug: string }> };

const serviceData: Record<
  string,
  {
    titleAr: string;
    titleEn: string;
    descriptionAr: string;
    descriptionEn: string;
    featuresAr: string[];
    featuresEn: string[];
    requirementsAr: string[];
    requirementsEn: string[];
  }
> = {
  maids: {
    titleAr: "استقدام خادمات في السعودية",
    titleEn: "Maid Recruitment in Saudi Arabia",
    descriptionAr:
      "نوفر أفضل الخادمات المنزليات المدربات والمؤهلات من الفلبين وكينيا وأوغندا وإثيوبيا وبنغلاديش. جميع خادماتنا تحظى بتدريب شامل على الأعمال المنزلية وفق أعلى المعايير.",
    descriptionEn:
      "We provide the best trained and qualified domestic maids from the Philippines, Kenya, Uganda, Ethiopia, and Bangladesh. All our maids receive comprehensive training in housework according to the highest standards.",
    featuresAr: [
      "مدربات على جميع أعمال التنظيف والترتيب",
      "خبرة في الطبخ والأعمال المنزلية",
      "أمينات وموثوقات",
      "يحملن وثائق رسمية معتمدة",
      "لديهن فحص طبي شامل",
      "تأشيرة عمل سارية",
    ],
    featuresEn: [
      "Trained in all cleaning and organizing tasks",
      "Experience in cooking and household work",
      "Honest and reliable",
      "Hold official certified documents",
      "Have comprehensive medical examination",
      "Valid work visa",
    ],
    requirementsAr: ["الهوية الوطنية", "عقد الإيجار أو صك الملكية", "رقم الجوال"],
    requirementsEn: ["National ID", "Lease contract or ownership deed", "Mobile number"],
  },
  nannies: {
    titleAr: "استقدام مربيات أطفال في السعودية",
    titleEn: "Nanny Recruitment in Saudi Arabia",
    descriptionAr:
      "نوفر مربيات أطفال متخصصات ومؤهلات للعناية بأطفالك وتنشئتهم بأفضل الأساليب. مربياتنا حاصلات على تدريب متخصص في رعاية الأطفال وتطوير مهاراتهم.",
    descriptionEn:
      "We provide specialized and qualified nannies to care for your children and raise them using the best methods. Our nannies are trained specifically in childcare and skills development.",
    featuresAr: [
      "متخصصات في رعاية الأطفال من 0 إلى 12 سنة",
      "خبرة في تنمية مهارات الأطفال",
      "صبورات ومحبات للأطفال",
      "يعرفن أساسيات الإسعافات الأولية",
      "يتحدثن العربية الأساسية",
      "حاصلات على شهادات رعاية الأطفال",
    ],
    featuresEn: [
      "Specialized in childcare for ages 0-12",
      "Experience in children's skill development",
      "Patient and loving with children",
      "Know basic first aid",
      "Speak basic Arabic",
      "Have childcare certificates",
    ],
    requirementsAr: ["الهوية الوطنية", "بيانات الأطفال", "رقم الجوال"],
    requirementsEn: ["National ID", "Children's details", "Mobile number"],
  },
  drivers: {
    titleAr: "استقدام سائقين في السعودية",
    titleEn: "Driver Recruitment in Saudi Arabia",
    descriptionAr:
      "نوفر سائقين ذوي خبرة وأمانة ولديهم رخص قيادة سارية لخدمة عائلتك. سائقونا مدربون على قواعد المرور السعودية ويعرفون طرق المدن الرئيسية.",
    descriptionEn:
      "We provide experienced and trustworthy drivers with valid licenses to serve your family. Our drivers are trained in Saudi traffic rules and know the main city roads.",
    featuresAr: [
      "رخصة قيادة سارية ومعتمدة",
      "خبرة لا تقل عن 5 سنوات في القيادة",
      "معرفة طرق المدن السعودية",
      "ملتزمون بقواعد المرور",
      "أمناء ومحافظون على السيارة",
      "يتحدثون العربية الأساسية",
    ],
    featuresEn: [
      "Valid and certified driving license",
      "At least 5 years driving experience",
      "Knowledge of Saudi city roads",
      "Committed to traffic rules",
      "Honest and car-maintaining",
      "Speak basic Arabic",
    ],
    requirementsAr: ["الهوية الوطنية", "رخصة السيارة", "رقم الجوال"],
    requirementsEn: ["National ID", "Car license", "Mobile number"],
  },
  cooks: {
    titleAr: "استقدام طباخات في السعودية",
    titleEn: "Cook Recruitment in Saudi Arabia",
    descriptionAr:
      "نوفر طباخات ماهرات في إعداد المأكولات العربية والعالمية. طباخاتنا مدربات على أعلى معايير النظافة والجودة في إعداد الطعام.",
    descriptionEn:
      "We provide cooks skilled in preparing Arabic and international cuisine. Our cooks are trained to the highest standards of cleanliness and quality in food preparation.",
    featuresAr: [
      "ماهرات في الطبخ العربي والخليجي",
      "خبرة في المأكولات العالمية",
      "يهتممن بالنظافة والصحة",
      "خبرة في الطبخ لعائلات كبيرة",
      "يعرفن حمية الأطفال والمرضى",
      "حاصلات على شهادات صحية",
    ],
    featuresEn: [
      "Skilled in Arabic and Gulf cooking",
      "Experience in international cuisine",
      "Attention to cleanliness and health",
      "Experience cooking for large families",
      "Know children and patient diets",
      "Have health certificates",
    ],
    requirementsAr: ["الهوية الوطنية", "عدد أفراد الأسرة", "رقم الجوال"],
    requirementsEn: ["National ID", "Family size", "Mobile number"],
  },
  workers: {
    titleAr: "استقدام عمال منزليين في السعودية",
    titleEn: "Home Worker Recruitment in Saudi Arabia",
    descriptionAr:
      "نوفر عمالاً منزليين متعددي المهارات لتلبية جميع احتياجاتك المنزلية. عمالنا مدربون على القيام بجميع الأعمال المنزلية المتنوعة.",
    descriptionEn:
      "We provide multi-skilled home workers to meet all your household needs. Our workers are trained to perform various household tasks.",
    featuresAr: [
      "متعددو المهارات",
      "قادرون على القيام بأعمال متنوعة",
      "جديون ومجتهدون",
      "منضبطون في المواعيد",
      "أمناء وموثوقون",
      "لديهم خبرة سابقة",
    ],
    featuresEn: [
      "Multi-skilled",
      "Can perform various tasks",
      "Serious and hardworking",
      "Time disciplined",
      "Honest and reliable",
      "Have prior experience",
    ],
    requirementsAr: ["الهوية الوطنية", "نوع العمل المطلوب", "رقم الجوال"],
    requirementsEn: ["National ID", "Required work type", "Mobile number"],
  },
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = serviceData[slug];
  if (!data) return { title: "Not Found" };

  return {
    title: `${locale === "ar" ? data.titleAr : data.titleEn} | شركة الاستقدام السعودية`,
    description: locale === "ar" ? data.descriptionAr : data.descriptionEn,
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const data = serviceData[slug];
  const service = SERVICES.find((s) => s.slug === slug);

  if (!data || !service) notFound();

  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href={`/${locale}`} className="hover:text-primary">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
            <span>/</span>
            <Link href={`/${locale}/services`} className="hover:text-primary">{locale === "ar" ? "الخدمات" : "Services"}</Link>
            <span>/</span>
            <span className="text-primary">{locale === "ar" ? service.nameAr : service.nameEn}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {locale === "ar" ? data.titleAr : data.titleEn}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {locale === "ar" ? data.descriptionAr : data.descriptionEn}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={`/${locale}/contact#request`}>
                  {locale === "ar" ? "اطلب الآن" : "Request Now"}
                </Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={getWhatsAppUrl(
                    WHATSAPP_NUMBER,
                    locale === "ar"
                      ? `مرحباً، أريد الاستفسار عن خدمة ${service.nameAr}`
                      : `Hello, I want to inquire about ${service.nameEn}`
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {locale === "ar" ? "مميزات عمالتنا" : "Our Workers' Features"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(locale === "ar" ? data.featuresAr : data.featuresEn).map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <RequestForm />

      {/* FAQ */}
      <FAQSection limit={5} />
    </>
  );
}
