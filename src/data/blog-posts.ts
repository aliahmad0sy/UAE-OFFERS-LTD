export interface BlogPost {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  category: string;
  categoryAr: string;
  categoryEn: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
}

export const BLOG_CATEGORIES = [
  { id: "recruitment", nameAr: "الاستقدام", nameEn: "Recruitment" },
  { id: "domestic-workers", nameAr: "العمالة المنزلية", nameEn: "Domestic Workers" },
  { id: "regulations", nameAr: "الأنظمة والشروط", nameEn: "Regulations" },
  { id: "salaries", nameAr: "الرواتب", nameEn: "Salaries" },
  { id: "guides", nameAr: "الأدلة والإرشادات", nameEn: "Guides" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "cost-of-philippine-maid-recruitment",
    titleAr: "تكلفة استقدام خادمة من الفلبين 2024",
    titleEn: "Cost of Recruiting a Filipino Maid 2024",
    excerptAr: "دليل شامل عن تكاليف استقدام الخادمة الفلبينية في المملكة العربية السعودية، بما فيها رسوم الاستقدام والتأشيرة والراتب.",
    excerptEn: "Comprehensive guide on the costs of recruiting a Filipino maid in Saudi Arabia, including recruitment fees, visa, and salary.",
    contentAr: `
# تكلفة استقدام خادمة من الفلبين في السعودية 2024

يُعد استقدام الخادمة الفلبينية من أكثر الخيارات شيوعاً في المملكة العربية السعودية، نظراً لتميزهن بمستوى عالٍ من التعليم وإتقان اللغة الإنجليزية وخبرتهن في العمل المنزلي.

## مكونات تكلفة الاستقدام

### 1. رسوم مكتب الاستقدام
تتراوح رسوم مكاتب الاستقدام المعتمدة في المملكة بين 8,000 و15,000 ريال سعودي، وتشمل:
- إجراءات التأشيرة والعقود
- فحوصات طبية للعاملة
- تذكرة الطيران
- خدمات الاستقبال

### 2. رسوم التأشيرة
- رسوم تأشيرة العمل: حوالي 2,000 ريال
- رسوم خدمات مساند
- رسوم الاستعلام عن الوافدين

### 3. الراتب الشهري
يتراوح متوسط راتب الخادمة الفلبينية بين:
- **1,200 ريال** للمستوى الأساسي
- **1,500 ريال** للمستوى المتوسط
- **1,800 ريال** للخبيرات

### 4. تكاليف إضافية
- أجرة إجازتها السنوية (تذكرة الطيران)
- التأمين الطبي
- بدل السكن والطعام (مشمول عادة في حالة السكن في المنزل)

## المجموع التقريبي للسنة الأولى

| البند | التكلفة التقريبية |
|-------|-----------------|
| رسوم الاستقدام | 10,000 - 15,000 ريال |
| الراتب السنوي | 14,400 - 21,600 ريال |
| التأمين الطبي | 1,500 - 2,500 ريال |
| **المجموع** | **25,900 - 39,100 ريال** |

## نصائح لتوفير التكاليف

1. **التعامل مع مكاتب معتمدة**: تجنب الوسطاء غير المرخصين
2. **المقارنة بين العروض**: احصل على عروض من عدة مكاتب
3. **قراءة العقد جيداً**: تأكد من وضوح جميع البنود
4. **التفاوض على الراتب**: الراتب قابل للتفاوض حسب المهارات

## الخلاصة

رغم أن تكلفة استقدام الخادمة الفلبينية تبدو مرتفعة في البداية، إلا أن الجودة العالية والمهنية التي تتميز بها العاملة الفلبينية تجعلها استثماراً مُجدياً على المدى البعيد.

للاستفسار عن أسعارنا التنافسية، تواصلوا معنا عبر واتساب أو ملء نموذج الطلب.
    `,
    contentEn: `
# Cost of Recruiting a Filipino Maid in Saudi Arabia 2024

Recruiting a Filipino maid is one of the most popular choices in Saudi Arabia, due to their high education level, English proficiency, and household work experience.

## Recruitment Cost Components

### 1. Recruitment Agency Fees
Licensed recruitment agencies in Saudi Arabia charge between 8,000 and 15,000 SAR, including:
- Visa and contract procedures
- Medical examinations for the worker
- Flight ticket
- Reception services

### 2. Visa Fees
- Work visa fees: approximately 2,000 SAR
- Musaned service fees
- Expat inquiry fees

### 3. Monthly Salary
Average Filipino maid salary ranges:
- **1,200 SAR** for basic level
- **1,500 SAR** for intermediate level
- **1,800 SAR** for experienced

## Tips to Save Costs

1. **Deal with licensed agencies**: Avoid unlicensed intermediaries
2. **Compare offers**: Get quotes from multiple agencies
3. **Read the contract carefully**: Ensure all terms are clear
4. **Negotiate salary**: Salary is negotiable based on skills
    `,
    category: "recruitment",
    categoryAr: "الاستقدام",
    categoryEn: "Recruitment",
    readTime: 7,
    publishedAt: "2024-01-15",
    tags: ["فلبين", "تكاليف", "استقدام"],
  },
  {
    id: "2",
    slug: "best-nationality-for-maids-saudi",
    titleAr: "أفضل جنسية للخادمات في السعودية - مقارنة شاملة 2024",
    titleEn: "Best Nationality for Maids in Saudi Arabia - Comprehensive Comparison 2024",
    excerptAr: "مقارنة شاملة بين جنسيات الخادمات في السعودية لمساعدتك في اختيار الجنسية الأنسب لاحتياجاتك.",
    excerptEn: "Comprehensive comparison between maid nationalities in Saudi Arabia to help you choose the most suitable nationality for your needs.",
    contentAr: `
# أفضل جنسية للخادمات في السعودية - مقارنة شاملة 2024

يتساءل كثير من الأسر السعودية: ما هي أفضل جنسية للخادمات؟ الإجابة تعتمد على احتياجاتك وأولوياتك. في هذا المقال سنقدم مقارنة شاملة وموضوعية.

## مقارنة الجنسيات

### الخادمة الفلبينية 🇵🇭
**المميزات:**
- تتحدث الإنجليزية بطلاقة
- مستوى تعليمي عالٍ
- مدربة ومحترفة
- تتعامل مع الأطفال بشكل ممتاز

**العيوب:**
- راتب أعلى من غيرها (1,200-1,800 ريال)
- قد تكون أكثر مطالبة بحقوقها

**الأنسب لـ:** العائلات التي تحتاج لخادمة تتحدث الإنجليزية أو ترعى الأطفال

---

### الخادمة الكينية 🇰🇪
**المميزات:**
- نشطة وحيوية جداً
- تجيد أعمال المنزل المتعددة
- سهلة التعامل

**العيوب:**
- قد لا تجيد الطبخ العربي مسبقاً
- تحتاج وقتاً للتأقلم

**الأنسب لـ:** العائلات النشطة التي تحتاج مساعدة في الأعمال المنزلية الشاملة

---

### الخادمة الأوغندية 🇺🇬
**المميزات:**
- هادئة وصبورة
- محبوبة من الأطفال
- تعلم سريع

**العيوب:**
- قد تحتاج وقتاً أطول للتأقلم مع البيئة السعودية

**الأنسب لـ:** العائلات التي لديها أطفال صغار

---

### الخادمة الإثيوبية 🇪🇹
**المميزات:**
- أسعار تنافسية
- مدة استقدام أقصر
- نشاط وحيوية عالية

**العيوب:**
- قد تحتاج تدريباً إضافياً
- حاجز اللغة قد يكون أكبر

**الأنسب لـ:** العائلات التي تبحث عن خيار اقتصادي

---

### الخادمة البنغلاديشية 🇧🇩
**المميزات:**
- صبورة وهادئة
- اقتصادية (راتب منخفض)
- مدة استقدام قصيرة

**العيوب:**
- خبرة أقل في بعض الأحيان

**الأنسب لـ:** الميزانيات المحدودة

## الخلاصة

لا توجد جنسية "أفضل" بشكل مطلق - كل جنسية لها مميزاتها وتناسب احتياجات معينة. أهم شيء هو تحديد احتياجاتك أولاً ثم اختيار الجنسية المناسبة.

تواصل معنا الآن للحصول على استشارة مجانية ومساعدتك في اختيار أفضل خادمة لعائلتك.
    `,
    contentEn: `
# Best Nationality for Maids in Saudi Arabia - Comprehensive Comparison 2024

Many Saudi families wonder: what is the best nationality for maids? The answer depends on your needs and priorities.

## Nationality Comparison

### Filipino Maid 🇵🇭
**Pros:** Speaks English fluently, high education level, trained and professional
**Cons:** Higher salary (1,200-1,800 SAR)
**Best for:** Families needing English-speaking or childcare maids

### Kenyan Maid 🇰🇪
**Pros:** Very active and energetic, proficient in multiple household tasks
**Cons:** May not know Arabic cooking initially
**Best for:** Active families needing comprehensive household help

### Ethiopian Maid 🇪🇹
**Pros:** Competitive prices, shorter recruitment period
**Cons:** May need additional training
**Best for:** Families looking for an economical option
    `,
    category: "domestic-workers",
    categoryAr: "العمالة المنزلية",
    categoryEn: "Domestic Workers",
    readTime: 10,
    publishedAt: "2024-02-01",
    tags: ["مقارنة", "جنسيات", "خادمات"],
  },
  {
    id: "3",
    slug: "domestic-worker-recruitment-conditions-saudi",
    titleAr: "شروط استقدام العمالة المنزلية في السعودية 2024",
    titleEn: "Domestic Worker Recruitment Conditions in Saudi Arabia 2024",
    excerptAr: "تعرف على جميع الشروط والمتطلبات اللازمة لاستقدام العمالة المنزلية في المملكة العربية السعودية وفق آخر الأنظمة.",
    excerptEn: "Learn about all conditions and requirements for domestic labor recruitment in Saudi Arabia according to the latest regulations.",
    contentAr: `
# شروط استقدام العمالة المنزلية في السعودية 2024

## شروط صاحب العمل

لاستقدام عاملة منزلية في المملكة العربية السعودية، يجب أن يستوفي صاحب العمل الشروط التالية:

### 1. الوضع المالي
- إثبات الدخل الكافي لدفع الراتب والمصاريف
- عدم وجود ديون متعثرة مع البنوك

### 2. الوضع الوظيفي
- توفر عقد عمل ساري (للموظفين في القطاع الخاص)
- أو شهادة من الجهة الحكومية (للموظفين الحكوميين)

### 3. الوثائق المطلوبة
- الهوية الوطنية السارية
- عقد إيجار أو صك ملكية المسكن
- رقم الجوال المسجل باسمك
- تسجيل في نظام مساند

## شروط العاملة

### السن المسموح به
- الحد الأدنى: 21 سنة
- الحد الأقصى: 45 سنة (قد يختلف حسب الجنسية)

### الحالة الصحية
- فحص طبي شامل خالٍ من الأمراض المعدية
- لياقة بدنية للعمل

### الوثائق المطلوبة
- جواز سفر ساري لمدة لا تقل عن سنتين
- شهادة عدم السوابق من بلدها
- وثائق التدريب (إن وجدت)

## الأنظمة والقوانين المنظمة

### نظام العمالة المنزلية
- يُنظم حقوق وواجبات صاحب العمل والعاملة
- يضمن حقوق العاملة في الراتب والإجازة والسكن
- يُحدد ساعات العمل وأيام الراحة

### عقد العمل
يجب أن يتضمن العقد:
- مدة العقد (عادة سنتان)
- الراتب الشهري
- مهام العمل المحددة
- حق الإجازة السنوية
- التأمين الصحي

## إجراءات الاستقدام عبر مساند

1. تسجيل الدخول على منصة مساند
2. اختيار الجنسية والمهنة
3. الحصول على عرض السعر
4. إتمام الدفع
5. انتظار إصدار التأشيرة
6. استلام العاملة

## نصائح هامة

⚠️ **تحذير:** تجنب التعامل مع الوسطاء غير المرخصين لتفادي النصب والاحتيال.

✅ **نصيحة:** تواصل مع مكاتب استقدام معتمدة ومرخصة من وزارة الموارد البشرية.

للاستفسار والمساعدة في إجراءات الاستقدام، تواصلوا معنا الآن.
    `,
    contentEn: `
# Domestic Worker Recruitment Conditions in Saudi Arabia 2024

## Employer Conditions

To recruit a domestic worker in Saudi Arabia, the employer must meet the following conditions:

### Required Documents
- Valid National ID
- Lease contract or property ownership deed
- Registered mobile number
- Registration in Musaned system

## Worker Requirements

### Permitted Age Range
- Minimum: 21 years
- Maximum: 45 years (may vary by nationality)

### Required Documents
- Valid passport for at least 2 years
- Clear criminal record from home country
- Training certificates (if available)

## Musaned Platform Procedures

1. Login to Musaned platform
2. Select nationality and profession
3. Get price quote
4. Complete payment
5. Wait for visa issuance
6. Receive the worker
    `,
    category: "regulations",
    categoryAr: "الأنظمة والشروط",
    categoryEn: "Regulations",
    readTime: 8,
    publishedAt: "2024-02-15",
    tags: ["شروط", "أنظمة", "مساند"],
  },
  {
    id: "4",
    slug: "recruitment-duration-how-long",
    titleAr: "كم تستغرق مدة استقدام العمالة المنزلية في السعودية؟",
    titleEn: "How Long Does Domestic Labor Recruitment Take in Saudi Arabia?",
    excerptAr: "دليل شامل عن مدة استقدام العمالة المنزلية في المملكة حسب كل جنسية والعوامل المؤثرة في المدة.",
    excerptEn: "Comprehensive guide on domestic labor recruitment duration in Saudi Arabia by nationality and factors affecting the timeline.",
    contentAr: `
# كم تستغرق مدة استقدام العمالة المنزلية؟

من أكثر الأسئلة التي يطرحها العملاء: "كم تستغرق مدة الاستقدام؟" الإجابة تعتمد على عدة عوامل.

## المدة المتوقعة حسب الجنسية

| الجنسية | المدة المتوقعة |
|---------|--------------|
| الفلبين | 2-3 أشهر |
| كينيا | 2-4 أشهر |
| أوغندا | 2-4 أشهر |
| إثيوبيا | 1-3 أشهر |
| بنغلاديش | 1-3 أشهر |

## العوامل المؤثرة في المدة

### 1. توافر العاملة
- إذا كانت العاملة متاحة فوراً في دولتها، تنتهي الإجراءات بسرعة
- في بعض الأحيان قد يكون هناك انتظار للحصول على العاملة المناسبة

### 2. سرعة إصدار التأشيرة
- عادة 1-2 أسبوع بعد تقديم الطلب
- قد يتأخر في المواسم المزدحمة

### 3. إجراءات البلد المُصدِّر
- بعض الدول لديها إجراءات أسرع من غيرها
- الإثيوبيات والبنغلاديشيات عادةً أسرع

### 4. مدى اكتمال الوثائق
- تأخر استلام الوثائق يُعيق الإجراءات

## خطوات العملية والمدة الزمنية لكل منها

1. **تقديم الطلب والاتفاق** (1-3 أيام)
2. **اختيار العاملة** (1-2 أسبوع)
3. **إجراءات التأشيرة** (1-3 أسابيع)
4. **الفحص الطبي وإجراءات البلد** (2-4 أسابيع)
5. **حجز التذكرة والسفر** (1-2 أسبوع)
6. **الاستقبال والتسليم** (يوم واحد)

## نصائح لتسريع الاستقدام

✅ تجهيز جميع الوثائق مسبقاً
✅ التعامل مع مكتب ذي خبرة
✅ اختيار جنسية ذات إجراءات سريعة
✅ متابعة الإجراءات بانتظام مع المكتب

في شركتنا، نضمن إنجاز الاستقدام في أقصر وقت ممكن مع متابعة مستمرة لعملائنا.
    `,
    contentEn: `
# How Long Does Domestic Labor Recruitment Take in Saudi Arabia?

## Expected Duration by Nationality

| Nationality | Expected Duration |
|------------|-----------------|
| Philippines | 2-3 months |
| Kenya | 2-4 months |
| Uganda | 2-4 months |
| Ethiopia | 1-3 months |
| Bangladesh | 1-3 months |

## Process Steps and Timeline

1. **Request submission and agreement** (1-3 days)
2. **Worker selection** (1-2 weeks)
3. **Visa procedures** (1-3 weeks)
4. **Medical examination and country procedures** (2-4 weeks)
5. **Ticket booking and travel** (1-2 weeks)
6. **Reception and delivery** (1 day)
    `,
    category: "guides",
    categoryAr: "الأدلة والإرشادات",
    categoryEn: "Guides",
    readTime: 6,
    publishedAt: "2024-03-01",
    tags: ["مدة", "وقت", "إجراءات"],
  },
  {
    id: "5",
    slug: "kenyan-vs-ugandan-maid-difference",
    titleAr: "الفرق بين الخادمة الكينية والأوغندية - أيهما أفضل؟",
    titleEn: "Difference Between Kenyan and Ugandan Maid - Which is Better?",
    excerptAr: "مقارنة تفصيلية بين الخادمة الكينية والأوغندية من حيث الشخصية والمهارات والراتب لمساعدتك في اتخاذ القرار الصحيح.",
    excerptEn: "Detailed comparison between Kenyan and Ugandan maids in terms of personality, skills, and salary to help you make the right decision.",
    contentAr: `
# الفرق بين الخادمة الكينية والأوغندية

## الخادمة الكينية 🇰🇪

### الشخصية
- نشيطة وحيوية للغاية
- سريعة في أداء المهام
- اجتماعية ومنفتحة

### المهارات
- تتقن أعمال المنزل المتعددة
- تجيد الطبخ الأفريقي والعربي بشكل لا بأس به
- قادرة على رعاية الأطفال

### الراتب
- 1,000 - 1,500 ريال شهرياً

### المدة
- 2-4 أشهر للاستقدام

---

## الخادمة الأوغندية 🇺🇬

### الشخصية
- هادئة وصبورة
- مثابرة ومجتهدة
- محبوبة من الأطفال

### المهارات
- متقنة لأعمال التنظيف والترتيب
- صبورة في رعاية الأطفال والمسنين
- سريعة التعلم

### الراتب
- 900 - 1,400 ريال شهرياً

### المدة
- 2-4 أشهر للاستقدام

---

## متى تختار الكينية؟

اختر الخادمة الكينية إذا:
- ✅ تحتاج خادمة نشيطة للمنزل الكبير
- ✅ عندك أعمال منزلية كثيرة ومتنوعة
- ✅ تفضل الشخصية الاجتماعية المنفتحة

## متى تختار الأوغندية؟

اختر الخادمة الأوغندية إذا:
- ✅ لديك أطفال صغار تحتاج رعاية فائقة
- ✅ تفضل الشخصية الهادئة والصبورة
- ✅ تبحث عن خيار اقتصادي أفضل

## الخلاصة

كلتا الجنسيتين متميزتان وتقدمان خدمة عالية الجودة. الاختيار يعتمد على احتياجاتك وطبيعة الأسرة. في شركتنا، سنساعدك في اختيار الخادمة المناسبة تماماً لعائلتك.
    `,
    contentEn: `
# Difference Between Kenyan and Ugandan Maid

## Kenyan Maid 🇰🇪
**Personality:** Very active and energetic, quick at tasks, social
**Skills:** Proficient in multiple household tasks, can care for children
**Salary:** 1,000-1,500 SAR/month

## Ugandan Maid 🇺🇬
**Personality:** Calm and patient, persistent, loved by children
**Skills:** Good at cleaning and organizing, patient with children and elderly
**Salary:** 900-1,400 SAR/month

## When to Choose Kenyan?
- Large home with lots of work
- Need active and energetic worker

## When to Choose Ugandan?
- Have young children needing care
- Prefer calm and patient personality
    `,
    category: "domestic-workers",
    categoryAr: "العمالة المنزلية",
    categoryEn: "Domestic Workers",
    readTime: 8,
    publishedAt: "2024-03-15",
    tags: ["كينيا", "أوغندا", "مقارنة"],
  },
];
