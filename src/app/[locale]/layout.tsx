import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saudi-recruitment.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default:
        locale === "ar"
          ? "استقدام العمالة المنزلية في السعودية | شركة الاستقدام السعودية"
          : "Domestic Labor Recruitment in Saudi Arabia | Saudi Recruitment Co.",
      template: "%s | شركة الاستقدام السعودية",
    },
    description:
      locale === "ar"
        ? "أفضل شركة استقدام عمالة منزلية في المملكة العربية السعودية. خادمات فلبينيات، كينيات، أوغنديات بأفضل الأسعار وأسرع وقت."
        : "Best domestic labor recruitment company in Saudi Arabia. Filipino, Kenyan, Ugandan maids at the best prices.",
    keywords:
      locale === "ar"
        ? ["استقدام خادمات", "عمالة منزلية", "خادمات فلبينيات", "استقدام السعودية", "خادمات كينيات"]
        : ["domestic workers", "maid recruitment", "Saudi Arabia", "Filipino maids"],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: `${siteUrl}/${locale}`,
      siteName: locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment Co.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-[Cairo]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
