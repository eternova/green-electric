import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "格林电工 | 防雷接地系统解决方案专家",
  description: "30+年防雷接地不可逆工程实战经验，专注于电力、石化、新能源、数据中心等高风险工程领域的系统级解决方案服务商",
  keywords: "防雷接地,接地系统,电力工程,石化工程,新能源,数据中心,沙特工程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
