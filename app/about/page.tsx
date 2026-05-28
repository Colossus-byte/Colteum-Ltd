import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Colteum is a Nairobi-based product studio operating as a small, senior team across three practices: build, grow, and intelligence.",
  openGraph: {
    title: "About Colteum",
    description:
      "A Nairobi-based product studio. Modern infrastructure for modern businesses. Built lean. Shipped fast.",
  },
};

const model = [
  {
    title: "Productized",
    desc: "Fixed scope. Fixed price. Fixed timeline. No estimates, no surprise invoices, no scope creep.",
  },
  {
    title: "Intelligent Systems",
    desc: "Modern tooling and AI as force multipliers across design, code, copy, and operations. Our team delivers at the velocity of a much larger one.",
  },
  {
    title: "Studio-Direct",
    desc: "You work directly with the senior team. No account managers, no junior handoffs, no offshore delegation.",
  },
];

const ventures = [
  {
    name: "Clarix Protocol",
    badge: "live",
    badgeLabel: "Live",
    desc: "Web3 education and credentialing platform. Verifiable on-chain credentials for the next generation of learners.",
    link: "https://clarixprotocol.com",
  },
  {
    name: "Colteum Games",
    badge: "launch",
    badgeLabel: "Launching 2026",
    desc: "Browser games and consumer titles for the World Cup 2026 window. Flagship title: ULTRAS FC.",
    link: null,
  },
  {
    name: "ProposalAI",
    badge: "launch",
    badgeLabel: "Launching 2026",
    desc: "B2B proposal automation platform. Generate investor-grade proposals, grant applications, and business cases at speed.",
    link: null,
  },
  {
    name: "Brahams Foundation",
    badge: "live",
    badgeLabel: "Live",
    desc: "Rural-development NGO supporting communities in Siaya County, Kenya. Built for donor credibility and grant readiness.",
    link: "https://brahams-foundation.vercel.app",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg-surface-1]/50 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-primary] tracking-widest uppercase mb-4">
              About
            </p>
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              We Build, Fast.
            </h1>
            <p
              className="text-[13px] font-mono tracking-[0.18em] text-[--accent-primary] mb-6"
              style={{ fontVariant: "small-caps" }}
            >
              Modern infrastructure for modern businesses. Built lean. Shipped fast.
            </p>
            <p className="text-xl text-[--text-muted] max-w-2xl leading-relaxed">
              Colteum is a Nairobi-based product studio operating as a small, senior team
              across three practices: build, grow, intelligence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Colteum exists */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-6">
              Why we exist
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-lg text-[--text-body] leading-relaxed mb-6" style={{ lineHeight: 1.75 }}>
              Most businesses that need to move fast are stuck choosing between slow agencies,
              unreliable freelancers, or expensive in-house teams that take months to ramp.
              None of those structures were designed for the speed modern businesses require.
              Colteum was built to close that gap.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-lg text-[--text-body] leading-relaxed" style={{ lineHeight: 1.75 }}>
              We operate as a small, senior team across three integrated practices — build,
              grow, and intelligence. Modern systems handle the overhead that traditionally
              required large teams. That means we deliver at a speed and quality level that
              most structures can&rsquo;t match, at a scope that&rsquo;s always clear upfront.
              Direct access. Fixed price. No surprises.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-6">
                Founder
              </p>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Jude Baraka
              </h2>
              <p className="text-[--text-body] leading-relaxed mb-6" style={{ lineHeight: 1.75 }}>
                Colteum is led by Jude Baraka, a Nairobi-based founder and operator. Background
                spans Web3 product development, sales and marketing leadership, digital commerce,
                brand positioning, and NGO operations. Currently building Clarix Protocol,
                leading Brahams Foundation, and shipping work across the studio practices.
              </p>
              <div className="flex items-center gap-5">
                {/* TODO: add actual social URLs */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <Twitter size={15} />
                  X
                </a>
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <Mail size={15} />
                  Email
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-xl">
                <img
                  src="/images/founder-about.jpg"
                  alt="Jude Baraka, Founder of Colteum"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container">
          <FadeIn>
            <div className="mb-14">
              <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-3">
                How we operate
              </p>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                The Colteum operating model.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {model.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <GlassCard className="p-8">
                  <h3 className="font-display font-bold text-white text-lg mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[--text-muted] text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Studio & Ventures */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container">
          <FadeIn>
            <div className="mb-5">
              <p className="text-xs font-mono text-[--accent-warm] uppercase tracking-widest mb-3">
                Studio &amp; Ventures
              </p>
              <h2
                className="font-display font-bold text-white mb-3"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Studio &amp; Ventures.
              </h2>
              <p className="text-[--text-muted] max-w-2xl leading-relaxed mb-10">
                Colteum operates as a hybrid studio. Services and intelligence drive the
                operation. Ventures are the long-term upside.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {ventures.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.08}>
                <GlassCard className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-white text-base">{v.name}</h3>
                    <span className={`badge-${v.badge} text-[11px] px-2.5 py-0.5 rounded-full font-mono shrink-0`}>
                      {v.badgeLabel}
                    </span>
                  </div>
                  <p className="text-sm text-[--text-muted] leading-relaxed mb-4">{v.desc}</p>
                  {v.link && (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link text-xs inline-flex items-center gap-1"
                    >
                      Visit site
                      <ArrowRight size={11} />
                    </a>
                  )}
                </GlassCard>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p className="text-[--text-muted] text-sm mb-6">
              Interested in partnering with or co-building on one of our ventures?
            </p>
            <Link
              href="/contact?type=partnership"
              className="cta-ghost inline-flex items-center gap-2 text-sm px-6 py-3 rounded-lg"
            >
              Partnership Inquiry
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Where we're based */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-6">
              Location
            </p>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              Where we&rsquo;re based.
            </h2>
            <p className="text-[--text-body] leading-relaxed" style={{ lineHeight: 1.75 }}>
              Colteum is registered and operated in Nairobi, Kenya. We serve clients across
              Kenya, East Africa, and remotely worldwide. We accept M-Pesa, Kenyan bank
              transfer, Wise, and USDC. International clients are quoted in USD where requested.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
