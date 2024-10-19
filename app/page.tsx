import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <h1 className="text-4xl font-bold">绝对の领域发布页</h1>
      <Link
        className="
        text-lg
        font-bold
        text-blue-500
        hover:text-blue-700
        dark:text-blue-400
        dark:hover:text-blue-300
      "
        href="https://www.ziyuans.club"
        target="_blank"
        rel="noopener noreferrer"
      >
        主站 - 绝对の领域
      </Link>
      <div>温馨提示： Ctrl + D 可以收藏本页面，以防迷路！</div>
    </main>
  );
}
