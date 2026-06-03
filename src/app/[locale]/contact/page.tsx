import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import RequestForm from "@/components/sections/RequestForm";
import { WHATSAPP_NUMBER } from "@/data/constants";
import { getWhatsAppUrl } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "اتصل بنا - شركة الاستقدام السعودية" : "Contact Us - Saudi Recruitment Co.",
    description:
      locale === "ar"
        ? "تواصل مع شركة الاستقدام السعودية عبر الهاتف أو واتساب أو نموذج الاتصال. فريقنا جاهز لمساعدتك."
        : "Contact Saudi Recruitment Co. via phone, WhatsApp, or contact form. Our team is ready to help you.",
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  const contactItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      titleAr: "الهاتف",
      titleEn: "Phone",
      value: WHATSAPP_NUMBER,
      href: `tel:${WHATSAPP_NUMBER}`,
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      titleAr: "واتساب",
      titleEn: "WhatsApp",
      value: WHATSAPP_NUMBER,
      href: getWhatsAppUrl(
        WHATSAPP_NUMBER,
        locale === "ar" ? "مرحباً، أريد الاستفسار" : "Hello, I want to inquire"
      ),
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      value: "info@saudi-recruitment.com",
      href: "mailto:info@saudi-recruitment.com",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titleAr: "العنوان",
      titleEn: "Address",
      value: locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      href: null,
      color: "bg-red-50 text-red-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titleAr: "ساعات العمل",
      titleEn: "Working Hours",
      value: locale === "ar" ? "الأحد - الخميس: 8 صباحاً - 8 مساءً" : "Sun - Thu: 8AM - 8PM",
      href: null,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === "ar" ? "اتصل بنا" : "Contact Us"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === "ar"
              ? "نحن هنا لمساعدتك على مدار الساعة. تواصل معنا عبر أي وسيلة تفضلها."
              : "We are here to help you around the clock. Contact us through any method you prefer."}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {contactItems.map((item, i) => (
              <div key={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 text-center group h-full"
                  >
                    <div
                      className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {locale === "ar" ? item.titleAr : item.titleEn}
                    </p>
                    <p className="text-xs text-gray-600" dir="auto">
                      {item.value}
                    </p>
                  </a>
                ) : (
                  <div className="p-5 rounded-2xl border border-gray-100 text-center h-full">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                    >
                      {item.icon}
                    </div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {locale === "ar" ? item.titleAr : item.titleEn}
                    </p>
                    <p className="text-xs text-gray-600">{item.value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <RequestForm />
    </>
  );
}
