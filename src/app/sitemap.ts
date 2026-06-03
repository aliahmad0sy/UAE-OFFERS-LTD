import type { MetadataRoute } from "next";
import { SAUDI_CITIES, NATIONALITIES, SERVICES } from "@/data/constants";
import { BLOG_POSTS } from "@/data/blog-posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saudi-recruitment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["ar", "en"];

  const staticPages = [
    "",
    "/about",
    "/services",
    "/nationalities",
    "/cities",
    "/blog",
    "/faq",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "daily" : "weekly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${siteUrl}/ar${page}`,
          en: `${siteUrl}/en${page}`,
        },
      },
    }))
  );

  const serviceEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    SERVICES.map((service) => ({
      url: `${siteUrl}/${locale}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  const nationalityEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    NATIONALITIES.map((nat) => ({
      url: `${siteUrl}/${locale}/nationalities/${nat.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  const cityEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    SAUDI_CITIES.map((city) => ({
      url: `${siteUrl}/${locale}/cities/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    BLOG_POSTS.map((post) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...nationalityEntries,
    ...cityEntries,
    ...blogEntries,
  ];
}
