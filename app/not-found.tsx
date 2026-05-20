import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container py-24">
        <p className="text-blue-500 text-[13px] font-medium tracking-[0.18em] uppercase mb-6">
          404
        </p>
        <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold text-white mb-6 max-w-[16ch]">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-lg text-zinc-400 mb-10 max-w-md leading-relaxed">
          You may have followed a stale link, or this page hasn&apos;t shipped
          yet. Either way, here&apos;s where to go next.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-7 py-3.5 rounded-md text-center transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-7 py-3.5 rounded-md text-center transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
