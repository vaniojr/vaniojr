import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing and practical notes, coming soon.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-6 py-20 md:px-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">Technical content area ready.</h1>
        <p className="max-w-2xl text-zinc-400">
          This route is prepared for future technical posts and product engineering insights.
        </p>
      </div>
    </main>
  );
}
