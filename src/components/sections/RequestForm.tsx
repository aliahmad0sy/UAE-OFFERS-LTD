"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SAUDI_CITIES, SERVICES, NATIONALITIES } from "@/data/constants";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(9, "رقم الهاتف مطلوب"),
  city: z.string().min(1, "المدينة مطلوبة"),
  serviceType: z.string().min(1, "نوع الخدمة مطلوب"),
  nationality: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RequestForm() {
  const t = useTranslations("requestForm");
  const locale = useLocale();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {locale === "ar" ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
        </h3>
        <p className="text-gray-600 mb-6">{t("success")}</p>
        <Button onClick={() => setSuccess(false)} variant="outline">
          {locale === "ar" ? "إرسال طلب آخر" : "Send Another Request"}
        </Button>
      </div>
    );
  }

  return (
    <section id="request" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            {locale === "ar" ? "اطلب الآن" : "Request Now"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">{t("name")} *</Label>
                <Input
                  id="name"
                  placeholder={locale === "ar" ? "محمد أحمد" : "John Doe"}
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t("phone")} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+966 5X XXX XXXX"
                  dir="ltr"
                  {...register("phone")}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>{t("city")} *</Label>
                <Select onValueChange={(v) => setValue("city", v)}>
                  <SelectTrigger className={errors.city ? "border-red-500" : ""}>
                    <SelectValue placeholder={t("selectCity")} />
                  </SelectTrigger>
                  <SelectContent>
                    {SAUDI_CITIES.map((city) => (
                      <SelectItem key={city.slug} value={city.nameAr}>
                        {locale === "ar" ? city.nameAr : city.nameEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && (
                  <p className="text-red-500 text-xs">{errors.city.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>{t("serviceType")} *</Label>
                <Select onValueChange={(v) => setValue("serviceType", v)}>
                  <SelectTrigger className={errors.serviceType ? "border-red-500" : ""}>
                    <SelectValue placeholder={t("selectService")} />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((service) => (
                      <SelectItem key={service.id} value={service.nameAr}>
                        {locale === "ar" ? service.nameAr : service.nameEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-red-500 text-xs">{errors.serviceType.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t("nationality")}</Label>
              <Select onValueChange={(v) => setValue("nationality", v)}>
                <SelectTrigger>
                  <SelectValue placeholder={t("selectNationality")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">{t("any")}</SelectItem>
                  {NATIONALITIES.map((nat) => (
                    <SelectItem key={nat.id} value={nat.nameAr}>
                      {nat.flag} {locale === "ar" ? nat.nameAr : nat.nameEn}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">{t("notes")}</Label>
              <Textarea
                id="notes"
                placeholder={locale === "ar" ? "أي ملاحظات إضافية..." : "Any additional notes..."}
                rows={3}
                {...register("notes")}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {locale === "ar" ? "جاري الإرسال..." : "Sending..."}
                </>
              ) : (
                t("submit")
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
