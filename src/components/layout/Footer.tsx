import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, SAUDI_CITIES, SERVICES } from "@/data/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ا</span>
              </div>
              <p className="font-bold text-white text-sm">
                {locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment"}
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {t("description")}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span dir="ltr">{WHATSAPP_NUMBER}</span>
              </a>
              <a
                href="mailto:info@saudi-recruitment.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@saudi-recruitment.com
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t("addressValue")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { href: `/${locale}`, label: locale === "ar" ? "الرئيسية" : "Home" },
                { href: `/${locale}/about`, label: locale === "ar" ? "من نحن" : "About" },
                { href: `/${locale}/blog`, label: locale === "ar" ? "المدونة" : "Blog" },
                { href: `/${locale}/faq`, label: locale === "ar" ? "الأسئلة الشائعة" : "FAQ" },
                { href: `/${locale}/contact`, label: locale === "ar" ? "اتصل بنا" : "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {locale === "ar" ? service.nameAr : service.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">
              {locale === "ar" ? "المدن" : "Cities"}
            </h3>
            <ul className="space-y-2">
              {SAUDI_CITIES.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${locale}/cities/${city.slug}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {locale === "ar" ? city.nameAr : city.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 p-4 bg-primary/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-primary/20">
          <p className="text-white font-medium">
            {locale === "ar"
              ? "تواصل معنا عبر واتساب لأي استفسار"
              : "Contact us via WhatsApp for any inquiry"}
          </p>
          <a
            href={getWhatsAppUrl(
              WHATSAPP_NUMBER,
              locale === "ar" ? "مرحباً، أريد الاستفسار عن خدمات الاستقدام" : "Hello, I want to inquire about recruitment services"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {locale === "ar" ? "شركة الاستقدام السعودية." : "Saudi Recruitment Co."} {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="text-sm text-gray-500 hover:text-primary transition-colors">
              {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link href={`/${locale}/terms`} className="text-sm text-gray-500 hover:text-primary transition-colors">
              {locale === "ar" ? "الشروط والأحكام" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
