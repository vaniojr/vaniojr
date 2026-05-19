import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder",
  description: "Founder notes and principles, coming soon.",
};

export default function FounderPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-6 py-20 md:px-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Founder</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">Founder page in progress.</h1>
        <p className="max-w-2xl text-zinc-400">
          This section is reserved for long-form thinking on building products, systems,
          and technology execution.
        </p>
      </div>
    </main>
  );
}
