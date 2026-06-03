import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  FileText,
  HelpCircle,
  Star,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "لوحة التحكم - شركة الاستقدام السعودية",
  robots: { index: false, follow: false },
};

const stats = [
  { title: "إجمالي الطلبات", value: "0", icon: <Users className="w-6 h-6" />, color: "bg-blue-500" },
  { title: "طلبات قيد الانتظار", value: "0", icon: <Clock className="w-6 h-6" />, color: "bg-yellow-500" },
  { title: "طلبات مكتملة", value: "0", icon: <CheckCircle className="w-6 h-6" />, color: "bg-green-500" },
  { title: "نسبة النجاح", value: "98%", icon: <TrendingUp className="w-6 h-6" />, color: "bg-primary" },
];

const quickLinks = [
  { title: "الطلبات", icon: <Users className="w-5 h-5" />, href: "/ar/admin/requests", color: "bg-blue-50 text-blue-600" },
  { title: "المقالات", icon: <FileText className="w-5 h-5" />, href: "/ar/admin/posts", color: "bg-green-50 text-green-600" },
  { title: "الأسئلة الشائعة", icon: <HelpCircle className="w-5 h-5" />, href: "/ar/admin/faqs", color: "bg-yellow-50 text-yellow-600" },
  { title: "التقييمات", icon: <Star className="w-5 h-5" />, href: "/ar/admin/testimonials", color: "bg-purple-50 text-purple-600" },
  { title: "الإعدادات", icon: <Settings className="w-5 h-5" />, href: "/ar/admin/settings", color: "bg-gray-50 text-gray-600" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
            <p className="text-gray-500 mt-1">مرحباً بك في نظام إدارة الموقع</p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/ar">عرض الموقع</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} text-white rounded-xl flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>الإجراءات السريعة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                  >
                    <div className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center`}>
                      {link.icon}
                    </div>
                    <span className="font-medium text-gray-900">{link.title}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>آخر الطلبات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>لا توجد طلبات حتى الآن</p>
                <p className="text-sm mt-1">ستظهر الطلبات هنا عند وصولها</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">رقم واتساب</h3>
                <p className="text-gray-600 text-sm">الرقم المستخدم في جميع أزرار واتساب في الموقع</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-bold text-primary" dir="ltr">
                  {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+966500000000"}
                </span>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                  تعديل
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
