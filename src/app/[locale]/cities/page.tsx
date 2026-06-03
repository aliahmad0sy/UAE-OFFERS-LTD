import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SAUDI_CITIES } from "@/data/constants";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "استقدام العمالة المنزلية في مدن السعودية - الرياض، جدة، الدمام"
        : "Domestic Labor Recruitment in Saudi Cities - Riyadh, Jeddah, Dammam",
    description:
      locale === "ar"
        ? "نخدم جميع مدن المملكة العربية السعودية: الرياض، جدة، الدمام، مكة، المدينة المنورة وغيرها. اطلب الاستقدام من مدينتك."
        : "We serve all Saudi Arabia cities: Riyadh, Jeddah, Dammam, Makkah, Madinah and more. Request recruitment from your city.",
  };
}

export default async function CitiesPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            {locale === "ar" ? "تغطية واسعة" : "Wide Coverage"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === "ar" ? "المدن السعودية" : "Saudi Arabian Cities"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === "ar"
              ? "نخدمك في جميع مدن المملكة العربية السعودية بنفس الجودة والكفاءة"
              : "We serve you in all cities of Saudi Arabia with the same quality and efficiency"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SAUDI_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/${locale}/cities/${city.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {locale === "ar" ? city.nameAr : city.nameEn}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                      {locale === "ar"
                        ? `استقدام العمالة في ${city.nameAr}`
                        : `Labor recruitment in ${city.nameEn}`}
                    </p>
                    <span className="text-primary text-sm flex items-center justify-center gap-1 font-medium">
                      {locale === "ar" ? "اعرف أكثر" : "Learn More"}
                      <ArrowIcon className="w-4 h-4" />
                    </span>
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
