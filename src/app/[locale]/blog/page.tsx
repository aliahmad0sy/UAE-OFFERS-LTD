import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "مدونة الاستقدام - مقالات وأدلة عن العمالة المنزلية في السعودية"
        : "Recruitment Blog - Articles and Guides about Domestic Workers in Saudi Arabia",
    description:
      locale === "ar"
        ? "اقرأ أحدث المقالات والأدلة الشاملة عن استقدام العمالة المنزلية في المملكة العربية السعودية. تكاليف، أنظمة، مقارنات وإرشادات."
        : "Read the latest articles and comprehensive guides about domestic labor recruitment in Saudi Arabia. Costs, regulations, comparisons, and guidance.",
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            {locale === "ar" ? "المدونة" : "Blog"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === "ar"
              ? "مدونة الاستقدام"
              : "Recruitment Blog"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === "ar"
              ? "مقالات وأدلة شاملة تساعدك في اتخاذ قرار الاستقدام الصحيح"
              : "Comprehensive articles and guides to help you make the right recruitment decision"}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-xs sm:max-w-none overflow-x-auto">
          <div className="flex flex-nowrap gap-3 pb-2">
            <Link
              href={`/${locale}/blog`}
              className="flex-none px-4 py-2 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap"
            >
              {locale === "ar" ? "جميع المقالات" : "All Articles"}
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/${locale}/blog?category=${cat.id}`}
                className="flex-none px-4 py-2 rounded-full bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary text-sm font-medium whitespace-nowrap transition-colors"
              >
                {locale === "ar" ? cat.nameAr : cat.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/${locale}/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-xl flex items-center justify-center">
                    <div className="text-5xl">📝</div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {locale === "ar" ? post.categoryAr : post.categoryEn}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {locale === "ar" ? post.titleAr : post.titleEn}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {locale === "ar" ? post.excerptAr : post.excerptEn}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} {locale === "ar" ? "دقائق" : "min"}
                      </span>
                      <span>{formatDate(post.publishedAt, locale)}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-primary font-medium text-sm">
                      {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                      <ArrowIcon className="w-4 h-4" />
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
