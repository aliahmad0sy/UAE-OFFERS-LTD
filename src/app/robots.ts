import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saudi-recruitment.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/ar/admin/", "/en/admin/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
