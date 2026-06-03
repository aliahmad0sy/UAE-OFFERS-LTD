# دليل النشر على Vercel

## المتطلبات الأساسية
- حساب Vercel
- قاعدة بيانات PostgreSQL (Vercel Postgres أو Neon أو Supabase)
- رقم واتساب

## خطوات النشر

### 1. إعداد قاعدة البيانات
```bash
# أنشئ قاعدة بيانات PostgreSQL (مثلاً Neon)
# احصل على DATABASE_URL

# قم بإنشاء الجداول
npx prisma migrate deploy
# أو
npx prisma db push
```

### 2. متغيرات البيئة على Vercel
أضف هذه المتغيرات في إعدادات Vercel:

```
DATABASE_URL=postgresql://...
NEXT_PUBLIC_WHATSAPP_NUMBER=+966XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=شركة الاستقدام السعودية
```

### 3. النشر على Vercel

**الطريقة الأولى: من واجهة Vercel**
1. اذهب إلى vercel.com
2. اضغط "Add New → Project"
3. اختر المستودع من GitHub
4. أضف متغيرات البيئة
5. اضغط "Deploy"

**الطريقة الثانية: من CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 4. إعداد النطاق (Domain)
1. اذهب إلى إعدادات مشروعك في Vercel
2. اضغط "Domains"
3. أضف نطاقك المخصص
4. اضبط DNS وفق تعليمات Vercel

## هيكل قاعدة البيانات

```sql
-- سيُنشئ Prisma هذه الجداول تلقائياً:
-- users (المستخدمون)
-- requests (الطلبات)
-- posts (المقالات)
-- categories (التصنيفات)
-- tags (الوسوم)
-- testimonials (التقييمات)
-- faqs (الأسئلة الشائعة)
-- services (الخدمات)
-- nationalities (الجنسيات)
-- cities (المدن)
-- settings (الإعدادات)
```

## تهيئة البيانات الأولية

```bash
# بعد النشر، يمكنك تهيئة البيانات:
npx prisma db seed
```

## تحسين الأداء

### Vercel Analytics
أضف إلى `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';
```

### Image Optimization
- جميع الصور تُحسَّن تلقائياً بـ Next.js
- يُستخدم WebP/AVIF تلقائياً

## متغيرات البيئة الكاملة

```env
# إلزامي
DATABASE_URL=postgresql://...

# إلزامي للواتساب
NEXT_PUBLIC_WHATSAPP_NUMBER=+966XXXXXXXXX

# إلزامي للـ SEO
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# اختياري
NEXT_PUBLIC_SITE_NAME=شركة الاستقدام السعودية
```

## الصفحات المتاحة

| الصفحة | الرابط |
|--------|--------|
| الرئيسية | /ar |
| من نحن | /ar/about |
| الخدمات | /ar/services |
| الجنسيات | /ar/nationalities |
| المدن | /ar/cities |
| المدونة | /ar/blog |
| الأسئلة الشائعة | /ar/faq |
| اتصل بنا | /ar/contact |
| لوحة التحكم | /ar/admin |

## الدعم

للاستفسار أو المساعدة، تواصل مع فريق التطوير.
