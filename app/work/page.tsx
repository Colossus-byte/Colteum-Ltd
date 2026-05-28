import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent builds from Colteum — websites, Web3 platforms, NGO infrastructure, and brand systems.",
  openGraph: {
    title: "Work | Colteum",
    description: "What we've shipped. Case studies from the Colteum studio.",
  },
};

type CaseStudy = {
  name: string;
  category: string;
  tagline: string;
  context: string;
  approach: string;
  built: string[];
  outcome: string;
  link: string | null;
  linkLabel: string;
  image: string;
  imageAlt: string;
  status: "live" | "dev";
};

const caseStudies: CaseStudy[] = [
  {
    name: "Brahams Foundation",
    category: "NGO Platform",
    tagline: "Grant-ready platform for a rural-development NGO.",
    context:
      "Brahams Foundation operates in Siaya County, supporting rural communities through development programs. They needed a digital presence that could credibly represent their work to donors, partners, and grant bodies.",
    approach:
      "We scoped a focused platform: a clear program structure, donor-credibility content, and grant-readiness signals. The design balances warmth with institutional credibility. Built and shipped in under 72 hours.",
    built: [
      "Custom website design and development",
      "Copywriting for all pages",
      "Program and impact section",
      "Donor credibility framework",
      "Contact and inquiry forms",
      "Mobile-first, SEO-ready",
    ],
    outcome:
      "A credible digital home for the foundation — built for donor trust and grant readiness.",
    link: "https://brahams-foundation.vercel.app",
    linkLabel: "brahams-foundation.vercel.app",
    image: "/images/projects/brahams.jpg",
    imageAlt: "Brahams Foundation homepage screenshot, 16:10",
    status: "live",
  },
  {
    name: "Clarix Protocol",
    category: "Web3 Platform",
    tagline: "On-chain education and credentialing for the next generation.",
    context:
      "Clarix Protocol is a Web3 education and credentialing platform issuing verifiable, on-chain credentials. The platform needed a launch presence and infrastructure that could support both learners and institutional partners.",
    approach:
      "We built the product foundation and go-to-market presence — Web3-native design, wallet integration, and a credential discovery interface. The platform is actively developed and expanding sector coverage.",
    built: [
      "Web3 platform design and development",
      "Wallet integration (MetaMask, WalletConnect)",
      "On-chain credential display",
      "Course and program interface",
      "Marketing landing page",
      "EVM-compatible infrastructure",
    ],
    outcome:
      "Live platform in active development — verifiable credentials for learners, recognized by institutional partners.",
    link: "https://clarixprotocol.com",
    linkLabel: "clarixprotocol.com",
    image: "/images/projects/clarix.jpg",
    imageAlt: "Clarix Protocol homepage screenshot, 16:10",
    status: "live",
  },
  {
    name: "Double Root Coffee",
    category: "Brand & Market Positioning",
    tagline: "Market positioning and digital presence for a Kenyan wellness brand.",
    context:
      "Double Root Coffee is a men's wellness coffee blend operating in the Kenyan market. The brand needed positioning and digital presence work to support its growth.",
    approach:
      "We worked on brand positioning, messaging, and digital presence — building the narrative, visual direction, and market identity for the brand's Kenyan expansion.",
    built: [
      "Brand positioning and messaging",
      "Visual identity work",
      "Digital presence strategy",
      "Product storytelling",
      "Market entry collateral",
    ],
    outcome: "Stronger brand foundation and market clarity for Double Root's Kenyan expansion.",
    link: null,
    linkLabel: "Coming soon",
    image: "/images/projects/doubleroot.jpg",
    imageAlt: "Double Root Coffee brand work, 16:10",
    status: "dev",
  },
];

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <GlassCard className="overflow-hidden">
      {/* Screenshot */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-[--bg-surface-1] flex items-center justify-center p-6">
        <img
          src={study.image}
          alt={study.imageAlt}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-8 lg:p-12">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest block mb-2">
              {study.category}
            </span>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              {study.name}
            </h2>
            <p className="text-[--text-muted] mt-2">{study.tagline}</p>
          </div>
          <span className={`badge-${study.status === "live" ? "live" : "dev"} text-xs px-3 py-1 rounded-full font-mono shrink-0`}>
            {study.status === "live" ? "Live" : "In Development"}
          </span>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-3">
              Context
            </p>
            <p className="text-sm text-[--text-body] leading-relaxed">{study.context}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-3">
              Approach
            </p>
            <p className="text-sm text-[--text-body] leading-relaxed">{study.approach}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-3">
              What we built
            </p>
            <ul className="space-y-1.5">
              {study.built.map((item) => (
                <li key={item} className="text-xs text-[--text-muted] flex items-start gap-2">
                  <span className="text-[--accent-primary] mt-1 shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcome + Link */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-1">
              Outcome
            </p>
            <p className="text-sm text-[--text-body]">{study.outcome}</p>
          </div>
          {study.link ? (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg shrink-0"
            >
              <ExternalLink size={14} />
              {study.linkLabel}
            </a>
          ) : (
            <span className="text-xs font-mono text-[--text-muted] shrink-0">{study.linkLabel}</span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default function WorkPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg-surface-1]/40 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Recent Builds.
            </h1>
            <p className="text-xl text-[--text-muted] max-w-xl leading-relaxed">
              Case studies from the studio — context, approach, what we built, and outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 pb-28">
        <div className="section-container space-y-12">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.name} delay={i * 0.06}>
              <CaseStudyBlock study={study} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container text-center">
          <FadeIn>
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Want to be next?
            </h2>
            <p className="text-[--text-muted] max-w-xl mx-auto mb-8 leading-relaxed">
              Fixed-price quote within 24 hours. Senior delivery from day one.
            </p>
            <Link
              href="/contact"
              className="cta-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
