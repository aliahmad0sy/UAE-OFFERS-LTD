"use client";

import { MessageCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { getWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

export default function WhatsAppButton() {
  const locale = useLocale();

  const message =
    locale === "ar"
      ? "مرحباً، أريد الاستفسار عن خدمات استقدام العمالة المنزلية"
      : "Hello, I want to inquire about domestic labor recruitment services";

  return (
    <a
      href={getWhatsAppUrl(WHATSAPP_NUMBER, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 start-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap transition-all">
        {locale === "ar" ? "تواصل معنا" : "Contact us"}
      </span>
    </a>
  );
}
