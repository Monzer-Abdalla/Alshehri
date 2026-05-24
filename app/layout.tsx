import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شركة الشهري المحدودة | الأجهزة الكهربائية المنزلية ومعدات الإضاءة",
  description: "شركة الشهري المحدودة هي وجهتك الأولى للحصول على أفضل وأحدث الأجهزة الكهربائية المنزلية ومعدات الإضاءة العصرية بأعلى جودة وأفضل الأسعار.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


