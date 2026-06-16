import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { HeroBackground } from "@/components/ui/hero-background";
import { Marquee } from "@/components/ui/marquee";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Colteum — Modern Product Studio. Nairobi.",
  description:
    "Colteum is a Nairobi-based product studio building growth-ready websites, brand systems, content engines, custom software, and frontier-tech infrastructure for businesses worldwide.",
  openGraph: {
    title: "Colteum — Modern Product Studio. Nairobi.",
    description:
      "Colteum is a Nairobi-based product studio building growth-ready websites, brand systems, content engines, custom software, and frontier-tech infrastructure for businesses worldwide.",
  },
};

const buildCategories = [
  {
    id: "build",
    label: "Build",
    tagline: "Websites, software, and frontier-tech infrastructure.",
    offers: [
      { name: "Web Platform Sprint", from: "From KES 75,000", delivery: "72 hours" },
      { name: "Custom Build", from: "From $5,000 / ~KES 650,000", delivery: "2–6 weeks" },
    ],
  },
  {
    id: "grow",
    label: "Grow",
    tagline: "Brand systems, content engines, and growth.",
    offers: [
      { name: "Brand System", from: "From KES 50,000", delivery: "5 days" },
      { name: "Content & UGC System", from: "From KES 80,000", delivery: "7 days" },
      { name: "Growth Engine", from: "From KES 150,000", delivery: "2 weeks" },
      { name: "Business Plan & Financial Model Sprint", from: "From KES 100,000", delivery: "7–10 days" },
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    tagline: "Independent research for sophisticated investors.",
    offers: [
      { name: "Intelligence Subscription", from: "From KES 25,000/mo", delivery: "Ongoing" },
      { name: "Strategic Consulting", from: "From KES 100,000", delivery: "Per day" },
    ],
  },
];

const intelTiers = [
  {
    name: "Crypto Intelligence Subscription",
    price: "KES 25,000/month",
    desc: "Weekly briefings, monthly deep-dives, thesis library access.",
  },
  {
    name: "Custom Research Briefings",
    price: "From KES 150,000",
    desc: "Institutional-grade sector reports for VC funds and family offices.",
  },
  {
    name: "HNW Quarterly Briefing",
    price: "From KES 100,000/quarter",
    desc: "Custom quarterly report plus 1-on-1 strategy session.",
  },
];

const caseStudies = [
  {
    name: "Clarix Protocol",
    desc: "Web3 education and credentialing platform. Currently live and in active development — verifiable on-chain credentials for the next generation of learners.",
    link: "https://clarixprotocol.com",
    linkLabel: "clarixprotocol.com",
    image: "/images/projects/clarix.jpg",
    imageLabel: "Clarix Protocol homepage screenshot, 16:10",
  },
  {
    name: "Double Root Coffee",
    desc: "Market positioning and digital presence work for Double Root Coffee's growth in the Kenyan market.",
    link: null,
    linkLabel: "Coming soon",
    image: "/images/projects/doubleroot.jpg",
    imageLabel: "Double Root brand work, 16:10",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Brief",
    desc: "15-minute discovery call. Fixed-price quote within 24 hours.",
  },
  {
    number: "02",
    title: "Build",
    desc: "Daily progress updates. You see the work as it happens, not at the end.",
  },
  {
    number: "03",
    title: "Ship",
    desc: "Live, working, yours. 30 days of revisions included.",
  },
];

const ventures = [
  {
    name: "Product Studio",
    badge: "live",
    badgeLabel: "Live",
    desc: "Custom websites, apps, brand systems, content engines, and growth infrastructure for modern businesses. The work behind this site.",
  },
  {
    name: "Clarix Protocol",
    badge: "live",
    badgeLabel: "Live",
    desc: "Web3 education and credentialing platform. Live and in active development.",
  },
  {
    name: "Colteum Intelligence",
    badge: "live",
    badgeLabel: "Live",
    desc: "Independent research practice covering crypto, Web3, and frontier tech for sophisticated investors.",
  },
  {
    name: "Colteum Games",
    badge: "launch",
    badgeLabel: "Launching 2026",
    desc: "Browser games and consumer titles for the World Cup 2026 window. Flagship consumer title: ULTRAS FC.",
  },
  {
    name: "ProposalAI",
    badge: "launch",
    badgeLabel: "Launching 2026",
    desc: "B2B proposal automation platform. Generate investor-grade proposals, grant applications, and business cases at speed.",
  },
  {
    name: "Commerce & Trade",
    badge: "dev",
    badgeLabel: "In Development",
    desc: "Product sourcing, distribution, and cross-border trade — beginning with Double Root Coffee in the Kenyan market.",
  },
];

const trustLogos = [
  "Clarix Protocol",
  "Brahams Foundation",
  "Double Root Coffee",
  "Colteum Labs",
  "Colteum Intelligence",
];

export default function HomePage() {
  return (
    <>
      {/* ── S1: HERO ─────────────────────────────────────────────────────
          Tier: Monumental (py-40 sm:py-56)
          Motion: eyebrow → H1 (scale) → subtitle → CTAs
      ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20">
        <HeroBackground className="absolute inset-0 z-0" />

        {/* Gold radial glow — top right */}
        <div className="absolute pointer-events-none" style={{ width: 400, height: 400, top: -60, right: -40, background: "radial-gradient(circle, rgba(200,149,26,0.09) 0%, transparent 70%)" }} />
        {/* Cyan radial glow — bottom left */}
        <div className="absolute pointer-events-none" style={{ width: 320, height: 320, bottom: -80, left: "15%", background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />

        <div className="section-container relative z-10 text-center pt-16 sm:pt-20 pb-24 sm:pb-32">
          <FadeIn direction="up">
            <span className="eyebrow-pill">
              Modern infrastructure for modern businesses. Built lean. Shipped fast.
            </span>
          </FadeIn>

          <FadeIn direction="scale" delay={0.08}>
            <h1
              className="font-display font-bold text-white mb-6 leading-[1.05] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
            >
              Digital Infrastructure<br className="hidden sm:block" /> for Modern Businesses.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.18}>
            <p className="text-lg sm:text-xl text-[--text-muted] max-w-xl mx-auto mb-10 leading-relaxed">
              Colteum is a Nairobi-based product studio building growth-ready websites,
              brand systems, content engines, custom software, and frontier-tech
              infrastructure for businesses worldwide. Productized. Team-led. Shipped in days.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.26}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="cta-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                Get a Quote in 24 Hours
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/work"
                className="cta-ghost text-base px-8 py-4"
              >
                See Our Work
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--navy)] to-transparent pointer-events-none" />
      </section>

      {/* ── S2: TRUST BAR ────────────────────────────────────────────────
          Tier: Compact (py-16 sm:py-20)
          Background: bg-surface-1/30 — slight thermal lift
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20 overflow-hidden" style={{ background: "var(--navy-2)" }}>
        <div className="section-container mb-6">
          <FadeIn direction="none">
            <p className="text-center text-[11px] font-mono text-[--text-muted] tracking-widest uppercase">
              Trusted by founders and operators across Kenya, East Africa, and global Web3 markets.
            </p>
          </FadeIn>
        </div>
        <Marquee pauseOnHover duration={30} repeat={4}>
          {trustLogos.map((name) => (
            <div
              key={name}
              className="mx-6 px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.055)] bg-[rgba(255,255,255,0.02)] text-sm text-[var(--cream-muted)] whitespace-nowrap font-mono tracking-wide flex items-center gap-2"
            >
              <div
                className="placeholder-asset w-5 h-5 rounded-sm"
                data-replace={`/images/logos/${name.toLowerCase().replace(/\s+/g, "-")}.svg`}
              />
              {name}
            </div>
          ))}
        </Marquee>
      </section>
      <div className="section-divider" />

      {/* ── S3: THE PROBLEM ──────────────────────────────────────────────
          Tier: Primary (py-32 sm:py-40)
          Type: T2 — statement heading, centered editorial
          Motion: center-aligned, no directional variant
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-32 sm:py-40">
        <div className="section-container max-w-3xl text-center">
          <FadeIn>
            <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mb-8 opacity-70" />
            <h2
              className="font-display font-bold text-white mb-8 leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              Most Businesses Don&rsquo;t Need Bigger Agencies. They Need Faster Execution.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-[--text-body] leading-[1.7]">
              Traditional agencies move in quarters. Freelancers move in fits and starts.
              In-house teams take months to ramp. Modern businesses can&rsquo;t wait. Colteum
              was built to close the gap between brief and ship — small senior teams, modern
              systems, direct execution. We deliver in days what traditional structures deliver
              in months. No middlemen, no offshore handoffs, no account managers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── S4: WHAT WE BUILD ────────────────────────────────────────────
          Tier: Standard (py-24 sm:py-28)
          Type: T3 heading
          Motion: cards stagger left → center → right
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-24 sm:py-28" style={{ background: "var(--navy-2)" }}>
        <div className="section-container">
          <FadeIn>
            <div className="mb-16 sm:mb-20">
              <span className="eyebrow-pill">Services</span>
              <h2
                className="font-display font-bold text-white mb-4 tracking-[-0.025em]"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                What We Build.
              </h2>
              <p className="text-[--text-muted] max-w-xl leading-relaxed">
                Productized execution across three practices. Fixed scope. Fast timelines. Senior delivery.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildCategories.map((cat, i) => {
              const directions = ["left", "up", "right"] as const;
              return (
                <FadeIn key={cat.id} delay={i * 0.08} direction={directions[i]}>
                  <GlassCard
                    className="p-8 flex flex-col h-full"
                    style={{
                      borderTop: `2px solid ${
                        cat.id === "build"
                          ? "var(--gold)"
                          : cat.id === "grow"
                          ? "var(--gold-light)"
                          : "var(--cyan)"
                      }`,
                    }}
                  >
                    <p className="text-[11px] font-mono text-[--accent-primary] uppercase tracking-[0.18em] mb-3">
                      {cat.label}
                    </p>
                    <p className="text-sm text-[--text-muted] leading-relaxed mb-7">
                      {cat.tagline}
                    </p>
                    <div className="space-y-0 flex-1 divide-y divide-white/8">
                      {cat.offers.map((offer) => (
                        <div key={offer.name} className="flex items-start justify-between py-4">
                          <div>
                            <p className="text-sm font-medium text-white">{offer.name}</p>
                            <p className="text-xs text-[--text-muted] mt-0.5">{offer.delivery}</p>
                          </div>
                          <span className="text-xs font-mono text-[--accent-primary] shrink-0 ml-4 mt-0.5">
                            {offer.from}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services#${cat.id}`}
                      className="text-link text-sm inline-flex items-center gap-1 mt-7"
                    >
                      Explore {cat.label}
                      <ArrowRight size={13} />
                    </Link>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.28}>
            <div className="text-center mt-14">
              <Link
                href="/services"
                className="cta-ghost inline-flex items-center gap-2 text-sm px-6 py-3 rounded-lg"
              >
                Explore all services
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── S5: INTELLIGENCE FEATURE BLOCK ───────────────────────────────
          Tier: Primary (py-32 sm:py-40)
          Type: T3 heading (restrained — credibility over spectacle)
          Background: bg-surface-1 at full strength; blue ambient glow left-side
          Motion: content slides left, tier cards slide right
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section
        className="py-32 sm:py-40 relative overflow-hidden"
        style={{ background: "#060C1A" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-3)]/50 via-transparent to-[var(--navy-deep)] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(6,182,212,0.10) 0%, transparent 65%)",
          }}
        />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <span className="eyebrow-pill eyebrow-pill--secondary">Colteum Intelligence</span>
                <h2
                  className="font-display font-bold text-white mb-4 tracking-[-0.025em]"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  Independent research for sophisticated investors.
                </h2>
                <p className="text-[--text-muted] leading-[1.7] mb-8">
                  Colteum Intelligence is a research practice covering crypto, emerging Web3 sectors,
                  and frontier digital infrastructure. We help sophisticated investors and allocators
                  understand opportunities ahead of consensus — through deep research, sector mapping,
                  and independent analysis. We publish. We don&rsquo;t advise.
                </p>
                <Link
                  href="/intelligence"
                  className="cta-primary inline-flex items-center gap-2 text-sm px-6 py-3"
                >
                  Explore Intelligence
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {intelTiers.map((tier, i) => (
                <FadeIn key={tier.name} direction="right" delay={i * 0.1}>
                  <GlassCard
                    className="p-6"
                    variant="static"
                    style={{ background: "var(--cyan-dim)", border: "1px solid var(--cyan-border)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display font-bold text-white text-base tracking-[-0.01em]">
                        {tier.name}
                      </h3>
                      <span className="text-xs font-mono text-[var(--cyan-light)] shrink-0">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-sm text-[--text-muted] leading-relaxed">{tier.desc}</p>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: RECENT WORK ──────────────────────────────────────────────
          Tier: Standard (py-24 sm:py-28)
          Type: T3 heading
          Motion: each card fades up, 100ms stagger
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-24 sm:py-28">
        <div className="section-container">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
              <div>
                <span className="eyebrow-pill">Portfolio</span>
                <h2
                  className="font-display font-bold text-white tracking-[-0.025em]"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  What We&rsquo;ve Shipped.
                </h2>
              </div>
              <Link
                href="/work"
                className="text-link text-sm inline-flex items-center gap-1 shrink-0"
              >
                See full portfolio
                <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.name} direction="up" delay={i * 0.1}>
                <GlassCard className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-[16/10] lg:aspect-auto lg:h-72 overflow-hidden bg-[--bg-surface-1] flex items-center justify-center p-6">
                      <img
                        src={study.image}
                        alt={study.imageLabel}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3
                        className="font-display font-bold text-white mb-3 tracking-[-0.01em]"
                        style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                      >
                        {study.name}
                      </h3>
                      <p className="text-[--text-muted] leading-[1.7] mb-6">
                        {study.desc}
                      </p>
                      {study.link ? (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link text-sm inline-flex items-center gap-1 w-fit"
                        >
                          {study.linkLabel}
                          <ArrowRight size={13} />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-[--text-muted]">
                          {study.linkLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── S7: HOW WE WORK ──────────────────────────────────────────────
          Tier: Compact (py-16 sm:py-20)
          Type: T4 heading
          Background: bg-surface-1/40 — slight thermal lift
          Motion: steps converge left → up → right
          Numbers: large watermark numerals behind each step
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section
        className="py-16 sm:py-20 relative"
        style={{ background: "var(--navy-3)" }}
      >
        <div className="section-container">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="eyebrow-pill">Process</span>
              <h2
                className="font-display font-bold text-white tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)" }}
              >
                Three steps. No surprises.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, i) => {
              const directions = ["left", "up", "right"] as const;
              return (
                <FadeIn key={step.number} delay={i * 0.1} direction={directions[i]}>
                  <div className="text-center relative">
                    {/* Watermark numeral */}
                    <span
                      className="absolute inset-x-0 -top-4 text-[8rem] font-bold text-white opacity-[0.04] leading-none select-none pointer-events-none font-display"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[--border-accent] bg-[--bg-surface-1] mb-5">
                        <span className="text-[11px] font-mono text-[--accent-primary]">{step.number}</span>
                      </div>
                      <h3
                        className="font-display font-bold text-white mb-3 tracking-[-0.02em]"
                        style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[--text-muted] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── S8: ABOUT THE STUDIO ─────────────────────────────────────────
          Tier: Compact (py-16 sm:py-20)
          Type: T4 heading
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-16 sm:py-20">
        <div className="section-container max-w-4xl">
          <FadeIn>
            <span className="eyebrow-pill">About</span>
            <h2
              className="font-display font-bold text-white mb-6 tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)" }}
            >
              Built by Colteum.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-[--text-body] leading-[1.7] mb-8">
              Colteum is a Nairobi-based product studio operating as a small, senior team across
              three practices: product and infrastructure build, brand and growth systems, and
              independent research. We use modern tooling and AI as force multipliers — which means
              a focused team delivers at the velocity of a much larger one. No middlemen.
              No account managers. No offshore handoffs.
            </p>
            <Link href="/about" className="text-link inline-flex items-center gap-1 font-medium">
              More About Colteum
              <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── S9: COLTEUM LABS ─────────────────────────────────────────────
          Tier: Standard (py-24 sm:py-28)
          Type: T3 heading
          Background: bg-surface-2/20 + warm ambient tint
          Motion: left/right checkerboard per grid column
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section
        className="py-24 sm:py-28 relative"
        style={{
          background: "var(--navy-3)",
          boxShadow: "inset 0 1px 0 rgba(200,149,26,0.04)",
        }}
      >
        <div className="section-container">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-16">
              <div>
                <span className="eyebrow-pill eyebrow-pill--warm">Colteum Labs</span>
                <h2
                  className="font-display font-bold text-white mb-2 tracking-[-0.025em]"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  Colteum Labs.
                </h2>
                <p className="text-[--text-muted] text-base">
                  Ventures we&rsquo;re building in parallel.
                </p>
              </div>
              <Link
                href="/labs"
                className="text-link text-sm inline-flex items-center gap-1 shrink-0"
              >
                Explore all ventures
                <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ventures.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.07} direction={i % 2 === 0 ? "left" : "right"}>
                <GlassCard className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-white text-base tracking-[-0.01em]">{v.name}</h3>
                    <span
                      className={`badge-${v.badge} text-[11px] px-2.5 py-0.5 rounded-full font-mono shrink-0`}
                    >
                      {v.badgeLabel}
                    </span>
                  </div>
                  <p className="text-sm text-[--text-muted] leading-relaxed">{v.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── S10: FINAL CTA ───────────────────────────────────────────────
          Tier: Monumental (py-40 sm:py-56)
          Type: T2 — emotional peak of the page
          Background: bg-primary + centered blue radial glow
      ─────────────────────────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-40 sm:py-56 relative overflow-hidden">
        {/* Centered radial glow — positions CTA as emotional peak */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,149,26,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-2)]/20 to-[var(--navy)] pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <FadeIn direction="scale">
            <h2
              className="font-display font-bold text-white mb-4 tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              Tell us what you&rsquo;re building.
            </h2>
            <p className="text-[--text-muted] text-lg mb-12">
              Fixed-price quote within 24 hours. No obligation.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.12}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20interested%20in%20working%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Start on WhatsApp
              </a>
              <a
                href="mailto:hello@colteumgroup.com"
                className="cta-ghost text-base px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
