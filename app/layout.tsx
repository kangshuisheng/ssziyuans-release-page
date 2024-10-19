import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "绝对の领域发布页",
  description: "绝对の领域发布页",
  keywords: [
    "绝对の领域发布页",
    "绝对の领域",
    "绝对的领域",
    "绝对之领域",
    "绝对の领域资源",
    "绝对の领域社区",
    "绝对领域",
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
