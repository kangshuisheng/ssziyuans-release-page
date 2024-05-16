import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "水生资源社发布页",
  description:
    "水生资源社致力于免费分享各大网盘资源，包括精选电影、热门电视剧、引人入胜的动漫及3D动漫、精心制作的MMD作品、魅力写真和CosPlay表演，更有丰富单机游戏和优质软件供您畅享，还有ASMR音频带您进入深度放松之境。尽在水生资源社，等待您的发现！",
  keywords: [
    "电影资源",
    "电视剧资源",
    "动漫资源",
    "单机游戏下载",
    "二次元写真",
    "CosPlay分享",
    "MMD模型",
    "ASMR音频",
    "音乐资源",
    "学习资料分享",
    "软件下载",
    "高质量资源",
    "免费资源分享",
    "水生资源社发布页",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
