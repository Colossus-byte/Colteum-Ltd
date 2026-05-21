import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";

export const metadata: Metadata = {
  title: "Intelligence",
  description:
    "Colteum Intelligence — independent research covering crypto, Web3, and frontier digital infrastructure for sophisticated investors and allocators.",
  openGraph: {
    title: "Colteum Intelligence",
    description:
      "Independent research covering crypto, Web3, and frontier digital infrastructure. We publish. We don't advise.",
  },
};

const tiers = [
  {
    slug: "intelligence-subscription",
    name: "Crypto Intelligence Subscription",
    price: "KES 25,000/month",
    priceAlt: "KES 250,000/year",
    cta: "Subscribe",
    features: [
      "Weekly briefings (4 per month)",
      "Monthly deep-dive report (20–30 pages)",
      "Thesis library access",
      "Sector coverage: crypto, Web3, frontier tech",
      "Email delivery + archive access",
    ],
  },
  {
    slug: "custom-research",
    name: "Custom Research Briefings",
    price: "From KES 150,000",
    priceAlt: "Per engagement",
    cta: "Commission a Briefing",
    features: [
      "20–40 page institutional research report",
      "Primary + secondary research",
      "Expert interviews (where available)",
      "Data visualization",
      "Executive summary",
      "1 revision round",
    ],
  },
  {
    slug: "hnw-briefing",
    name: "HNW Quarterly Briefing",
    price: "From KES 100,000/quarter",
    priceAlt: "Recurring",
    cta: "Apply for Briefing",
    features: [
      "Quarterly written report",
      "1-on-1 strategy session (60 min)",
      "Continuous research access",
      "Custom sector alignment",
      "Educational framing",
    ],
  },
];

const sectors = [
  "Bitcoin & Layer 1s",
  "DeFi & Liquidity Infrastructure",
  "Layer 2 Networks",
  "Real-World Asset Tokenization",
  "Web3 Gaming",
  "Stablecoins & Digital Payments",
  "NFT Infrastructure",
  "Cross-Chain Bridges",
  "Emerging Markets Web3",
  "Crypto Regulatory Landscape",
];

export default function IntelligencePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[--bg-surface-2]/60 via-transparent to-[--bg-primary] pointer-events-none" />
        <Spotlight className="absolute inset-0 z-0" fill="rgba(139,92,246,0.18)" />

        <div className="section-container relative z-10">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-secondary] tracking-widest uppercase mb-4">
              Colteum Intelligence
            </p>
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              We publish.<br /> We don&rsquo;t advise.
            </h1>
            <p className="text-xl text-[--text-muted] max-w-2xl leading-relaxed mb-10">
              Independent research covering crypto, emerging Web3 sectors, and frontier digital
              infrastructure. For sophisticated investors, allocators, and founders who want to
              understand opportunities ahead of consensus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?service=intelligence-subscription"
                className="cta-primary inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-xl"
              >
                Subscribe to Intelligence
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services#intelligence"
                className="cta-ghost inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-xl"
              >
                View all tiers
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 border-y border-white/8">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <blockquote className="border-l-2 border-[--accent-secondary] pl-8">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
                &ldquo;Research that helps you think. Not signals that tell you what to do.&rdquo;
              </p>
              <p className="text-[--text-muted] leading-relaxed">
                Colteum Intelligence covers crypto markets, Web3 infrastructure, and emerging
                digital sectors through deep research and independent analysis. Nothing we
                publish constitutes investment advice. Our role is to help sophisticated
                readers understand what&rsquo;s happening, why it matters, and what to watch.
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24">
        <div className="section-container">
          <FadeIn>
            <div className="mb-14">
              <p className="text-xs font-mono text-[--accent-secondary] uppercase tracking-widest mb-3">
                Research Tiers
              </p>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Choose your depth.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.slug} delay={i * 0.1}>
                <GlassCard className="p-7 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-[--accent-secondary] font-mono text-sm">{tier.price}</p>
                    <p className="text-[--text-muted] text-xs font-mono mt-0.5">{tier.priceAlt}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[--text-muted]">
                        <CheckCircle2 size={12} className="text-[--accent-secondary] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?service=${tier.slug}`}
                    className="mt-7 cta-primary text-sm py-2.5 text-center rounded-lg block"
                  >
                    {tier.cta}
                  </Link>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-xs font-mono text-[--accent-secondary] uppercase tracking-widest mb-4">
                Coverage
              </p>
              <h2
                className="font-display font-bold text-white mb-5"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
              >
                What we cover.
              </h2>
              <p className="text-[--text-muted] leading-relaxed mb-8">
                Our research covers the infrastructure, protocols, and market dynamics shaping
                the next generation of the internet. We focus on sectors where depth and
                early understanding create asymmetric advantage.
              </p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/4 text-xs text-[--text-muted] font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Sample thesis teaser */}
            <FadeIn delay={0.1}>
              <GlassCard className="p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-mono text-[--accent-secondary] uppercase tracking-widest mb-1">
                      Sample Thesis
                    </p>
                    <h3 className="font-display font-bold text-white text-xl">
                      Real-World Assets on EVM Chains
                    </h3>
                  </div>
                  <span className="badge-launch text-[11px] px-2.5 py-0.5 rounded-full font-mono shrink-0">
                    Q1 2026
                  </span>
                </div>
                <p className="text-sm text-[--text-muted] leading-relaxed mb-4">
                  The tokenization of real-world assets — from treasury bills to private credit —
                  has moved from theoretical to operational. By Q4 2025, on-chain RWA value
                  exceeded $12B. This thesis examines why institutional-grade issuers are choosing
                  EVM-compatible chains, what the infrastructure stack looks like, and where the
                  next wave of growth is most likely to emerge.
                </p>
                <p className="text-sm text-[--text-muted] leading-relaxed mb-6">
                  Key questions we address: Which custody and compliance layers are becoming
                  standard? How does on-chain credit differ from traditional securitization?
                  What are the dominant protocols and their structural moats?
                </p>
                <div className="pt-5 border-t border-white/8 flex items-center justify-between">
                  <span className="text-xs font-mono text-[--text-muted]">Full report — 28 pages</span>
                  <Link
                    href="/contact?service=intelligence-subscription"
                    className="text-link text-xs inline-flex items-center gap-1"
                  >
                    Access via subscription
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="py-20 border-t border-white/8">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <div
              className="placeholder-asset rounded-xl p-12 text-center"
              data-replace="/public/testimonials/intelligence-subscriber.json"
            >
              <span className="placeholder-label">
                [Subscriber testimonial — to be added when available]
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg-surface-2]/30 to-transparent pointer-events-none" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Commission research or subscribe.
            </h2>
            <p className="text-[--text-muted] max-w-xl mx-auto mb-10 leading-relaxed">
              For subscription access, custom briefings, or HNW engagements — reach out and we
              respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact?service=intelligence-subscription"
                className="cta-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl"
              >
                Subscribe
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact?service=custom-research"
                className="cta-ghost inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl"
              >
                Commission a Briefing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
