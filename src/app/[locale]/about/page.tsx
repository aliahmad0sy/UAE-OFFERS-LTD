import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Award, Target, Eye, Users, CheckCircle } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "من نحن - شركة الاستقدام السعودية" : "About Us - Saudi Recruitment Co.",
    description:
      locale === "ar"
        ? "تعرف على شركة الاستقدام السعودية، الرائدة في مجال استقدام العمالة المنزلية في المملكة العربية السعودية منذ أكثر من 15 عاماً."
        : "Learn about Saudi Recruitment Co., the leader in domestic labor recruitment in Saudi Arabia for over 15 years.",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      titleAr: "الجودة",
      titleEn: "Quality",
      descAr: "نلتزم بأعلى معايير الجودة في جميع خدماتنا",
      descEn: "We commit to the highest quality standards in all our services",
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleAr: "الثقة",
      titleEn: "Trust",
      descAr: "نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة والشفافية",
      descEn: "We build long-term relationships with our clients based on trust and transparency",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      titleAr: "الالتزام",
      titleEn: "Commitment",
      descAr: "نلتزم بتسليم ما نعد به في الوقت المحدد",
      descEn: "We commit to delivering what we promise on time",
    },
  ];

  const team = [
    { nameAr: "أحمد محمد", nameEn: "Ahmed Mohammed", roleAr: "المدير التنفيذي", roleEn: "CEO" },
    { nameAr: "خالد عبدالله", nameEn: "Khalid Abdullah", roleAr: "مدير العمليات", roleEn: "Operations Manager" },
    { nameAr: "فاطمة علي", nameEn: "Fatima Ali", roleAr: "مدير خدمة العملاء", roleEn: "Customer Service Manager" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            {locale === "ar" ? "من نحن" : "About Us"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment Co."}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {locale === "ar"
              ? "نحن شركة متخصصة في استقدام العمالة المنزلية في المملكة العربية السعودية، نمتلك خبرة تزيد عن 15 عاماً في هذا المجال."
              : "We are a specialized company in domestic labor recruitment in Saudi Arabia with over 15 years of experience."}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === "ar" ? "قصتنا" : "Our Story"}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {locale === "ar"
                    ? "بدأت رحلتنا عام 2009 بهدف واضح: تقديم خدمات استقدام عمالة منزلية موثوقة وعالية الجودة للأسر السعودية."
                    : "Our journey began in 2009 with a clear goal: to provide reliable, high-quality domestic labor recruitment services to Saudi families."}
                </p>
                <p>
                  {locale === "ar"
                    ? "على مدار السنوات الماضية، نجحنا في خدمة أكثر من 5000 عائلة سعودية، وبنينا شبكة واسعة من الشراكات مع وكالات موثوقة في الفلبين وكينيا وأوغندا وإثيوبيا وبنغلاديش."
                    : "Over the years, we have successfully served more than 5,000 Saudi families and built a wide network of partnerships with reliable agencies in the Philippines, Kenya, Uganda, Ethiopia, and Bangladesh."}
                </p>
                <p>
                  {locale === "ar"
                    ? "اليوم، نفخر بكوننا من أكثر شركات الاستقدام ثقةً في المملكة، مع استمرارنا في تطوير خدماتنا لتلبية احتياجات عملائنا."
                    : "Today, we are proud to be one of the most trusted recruitment companies in the Kingdom, while continuing to develop our services to meet our clients' needs."}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2009", label: locale === "ar" ? "تأسست الشركة" : "Founded" },
                { value: "+5000", label: locale === "ar" ? "عميل سعيد" : "Happy Clients" },
                { value: "5", label: locale === "ar" ? "دول شراكة" : "Partner Countries" },
                { value: "98%", label: locale === "ar" ? "نسبة الرضا" : "Satisfaction Rate" },
              ].map((stat, i) => (
                <div key={i} className="bg-primary/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === "ar" ? "رسالتنا" : "Our Mission"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === "ar"
                  ? "توفير أفضل العمالة المنزلية الموثوقة والمدربة لخدمة الأسر السعودية، مع ضمان رضا العميل الكامل وتقديم خدمة متميزة في كل مرحلة من مراحل الاستقدام."
                  : "Providing the best reliable and trained domestic workers to serve Saudi families, with guaranteed complete client satisfaction and excellent service at every stage of recruitment."}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === "ar" ? "رؤيتنا" : "Our Vision"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === "ar"
                  ? "أن نكون الشركة الأولى في استقدام العمالة المنزلية في منطقة الخليج العربي، من خلال الابتكار المستمر وتطوير الخدمات لتلبية تطلعات عملائنا."
                  : "To be the leading company in domestic labor recruitment in the Arabian Gulf region through continuous innovation and service development to meet our clients' aspirations."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {locale === "ar" ? "قيمنا" : "Our Values"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {locale === "ar" ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-gray-600">
                  {locale === "ar" ? value.descAr : value.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
