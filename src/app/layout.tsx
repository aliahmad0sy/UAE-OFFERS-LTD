import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "استقدام العمالة المنزلية في السعودية | شركة الاستقدام السعودية",
  description: "أفضل شركة استقدام عمالة منزلية في المملكة العربية السعودية. خادمات فلبينيات، كينيات، أوغنديات، إثيوبيات وبنغلاديشيات بأفضل الأسعار.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
