import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import RequestForm from "@/components/sections/RequestForm";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${locale === "ar" ? post.titleAr : post.titleEn} | شركة الاستقدام السعودية`,
    description: locale === "ar" ? post.excerptAr : post.excerptEn,
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: locale === "ar" ? post.titleAr : post.titleEn,
    description: locale === "ar" ? post.excerptAr : post.excerptEn,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment Co.",
    },
    publisher: {
      "@type": "Organization",
      name: locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment Co.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href={`/${locale}`} className="hover:text-primary">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-primary">{locale === "ar" ? "المدونة" : "Blog"}</Link>
            <span>/</span>
            <span className="text-primary line-clamp-1">
              {locale === "ar" ? post.titleAr : post.titleEn}
            </span>
          </nav>

          {/* Category */}
          <Badge variant="default" className="mb-4">
            {locale === "ar" ? post.categoryAr : post.categoryEn}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {locale === "ar" ? post.titleAr : post.titleEn}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt, locale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} {locale === "ar" ? "دقائق للقراءة" : "min read"}
            </span>
          </div>

          {/* Cover Image placeholder */}
          <div className="h-64 md:h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-8">
            <span className="text-7xl">📄</span>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-code:text-primary
              prose-ul:list-disc prose-ol:list-decimal
              prose-li:my-1 prose-p:my-4
              prose-table:w-full prose-th:bg-primary/10 prose-th:p-3 prose-td:p-3 prose-td:border"
            dangerouslySetInnerHTML={{
              __html: (locale === "ar" ? post.contentAr : post.contentEn)
                .replace(/^# (.+)$/gm, "<h1>$1</h1>")
                .replace(/^## (.+)$/gm, "<h2>$2</h2>")
                .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.+?)\*/g, "<em>$1</em>")
                .replace(/^- (.+)$/gm, "<li>$1</li>")
                .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
                .replace(/\n\n/g, "</p><p>")
                .replace(/^(?!<[h|u|o|l|p])(.+)$/gm, "<p>$1</p>"),
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
            <Tag className="w-4 h-4 text-gray-400" />
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {locale === "ar" ? "هل تريد الاستقدام الآن؟" : "Ready to recruit now?"}
            </h3>
            <p className="text-gray-600 mb-4">
              {locale === "ar"
                ? "تواصل معنا وسنساعدك في الحصول على أفضل عاملة منزلية"
                : "Contact us and we'll help you get the best domestic worker"}
            </p>
            <Button asChild>
              <Link href={`/${locale}/contact#request`}>
                {locale === "ar" ? "اطلب الاستقدام الآن" : "Request Now"}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {locale === "ar" ? "مقالات ذات صلة" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/${locale}/blog/${p.slug}`} className="group">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {locale === "ar" ? p.categoryAr : p.categoryEn}
                    </Badge>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {locale === "ar" ? p.titleAr : p.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {locale === "ar" ? p.excerptAr : p.excerptEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RequestForm />
    </>
  );
}
