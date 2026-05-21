import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container text-center py-20">
        <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-6">
          404
        </p>
        <h1 className="font-display font-bold text-white mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Page not found.
        </h1>
        <p className="text-[--text-muted] text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist. It may have moved, or the link may be wrong.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="cta-primary inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-xl"
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="cta-ghost inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
