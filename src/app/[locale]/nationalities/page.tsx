import type { Metadata } from "next";
import Link from "next/link";
import { Clock, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NATIONALITIES } from "@/data/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "جنسيات العمالة المنزلية - خادمات فلبينيات وكينيات وأوغنديات"
        : "Domestic Worker Nationalities - Filipino, Kenyan, Ugandan Maids",
    description:
      locale === "ar"
        ? "تعرف على جميع الجنسيات المتاحة للاستقدام في السعودية: فلبينيات، كينيات، أوغنديات، إثيوبيات، بنغلاديشيات مع معلومات الرواتب ومدة الاستقدام."
        : "Learn about all nationalities available for recruitment in Saudi Arabia: Filipino, Kenyan, Ugandan, Ethiopian, Bangladeshi maids with salary and duration info.",
  };
}

export default async function NationalitiesPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            {locale === "ar" ? "الجنسيات المتاحة" : "Available Nationalities"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === "ar" ? "جنسيات العمالة المنزلية" : "Domestic Worker Nationalities"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === "ar"
              ? "نوفر عمالة منزلية مدربة ومؤهلة من أفضل 5 دول بأسعار تنافسية وأسرع وقت للاستقدام"
              : "We provide trained and qualified domestic workers from the best 5 countries at competitive prices and fastest recruitment time"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NATIONALITIES.map((nat) => (
              <Link key={nat.id} href={`/${locale}/nationalities/${nat.slug}`} className="group">
                <Card className="h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center rounded-t-xl">
                    <span className="text-7xl">{nat.flag}</span>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {locale === "ar" ? nat.nameAr : nat.nameEn}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">
                      {locale === "ar" ? nat.country : nat.countryEn}
                    </p>

                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                          {locale === "ar" ? "الراتب: " : "Salary: "}
                          {nat.salaryMin} - {nat.salaryMax} {locale === "ar" ? "ريال/شهر" : "SAR/month"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-sm">
                          {locale === "ar" ? "مدة الاستقدام: " : "Duration: "}
                          {nat.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="default">
                        {locale === "ar" ? "متاح الآن" : "Available Now"}
                      </Badge>
                      <span className="text-primary text-sm flex items-center gap-1 font-medium">
                        {locale === "ar" ? "اعرف أكثر" : "Learn More"}
                        <ArrowIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
