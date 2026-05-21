import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Colteum Labs — ventures we're building in parallel. Clarix Protocol, Colteum Games, ProposalAI, Commerce & Trade, and more.",
  openGraph: {
    title: "Colteum Labs",
    description: "Ventures we're building in parallel. Studio, platforms, and frontier projects.",
  },
};

type Venture = {
  name: string;
  badge: "live" | "launch" | "dev" | "future";
  badgeLabel: string;
  desc: string;
  roadmap: string;
  link: string | null;
  partnerLink: boolean;
};

const primaryVentures: Venture[] = [
  {
    name: "Product Studio",
    badge: "live",
    badgeLabel: "Live",
    desc: "Custom websites, apps, brand systems, content engines, and growth infrastructure for modern businesses. The core of what Colteum does.",
    roadmap: "Expanding service offerings through 2026. Strategic Retainer capacity opening Q3 2026.",
    link: null,
    partnerLink: false,
  },
  {
    name: "Clarix Protocol",
    badge: "live",
    badgeLabel: "Live",
    desc: "Web3 education and credentialing platform issuing verifiable on-chain credentials for the next generation of learners.",
    roadmap: "Expanding course library and institutional partner integrations through 2026.",
    link: "https://clarixprotocol.com",
    partnerLink: true,
  },
  {
    name: "Colteum Intelligence",
    badge: "live",
    badgeLabel: "Live",
    desc: "Independent research practice covering crypto, Web3, and frontier digital infrastructure for sophisticated investors.",
    roadmap: "Thesis library expansion, new sector coverage, and subscriber growth through 2026.",
    link: "/intelligence",
    partnerLink: false,
  },
  {
    name: "Colteum Games",
    badge: "launch",
    badgeLabel: "Launching 2026",
    desc: "Browser games and consumer titles for the World Cup 2026 window. Flagship consumer title: ULTRAS FC.",
    roadmap: "Alpha build underway. Beta testing Q3 2026. Launch aligned with World Cup window.",
    link: null,
    partnerLink: true,
  },
  {
    name: "ProposalAI",
    badge: "launch",
    badgeLabel: "Launching 2026",
    desc: "B2B proposal automation platform. Generate investor-grade proposals, grant applications, and business cases at speed.",
    roadmap: "Beta access for select Colteum clients Q2 2026. Public launch Q4 2026.",
    link: null,
    partnerLink: true,
  },
  {
    name: "Commerce & Trade",
    badge: "dev",
    badgeLabel: "In Development",
    desc: "Product sourcing, distribution, and cross-border trade — beginning with Double Root Coffee in the Kenyan market.",
    roadmap: "Double Root distribution expanding through Kenya in 2026. Additional SKUs under development.",
    link: null,
    partnerLink: true,
  },
];

const deeperVentures: Venture[] = [
  {
    name: "Meridian",
    badge: "future",
    badgeLabel: "2027+",
    desc: "A proprietary analytics and intelligence layer for Colteum's research and data practices.",
    roadmap: "Concept stage. Dependent on Intelligence practice scale.",
    link: null,
    partnerLink: false,
  },
  {
    name: "Data & Analytics",
    badge: "future",
    badgeLabel: "2027+",
    desc: "Business intelligence tooling and data infrastructure for SMEs and growth-stage businesses in emerging markets.",
    roadmap: "Exploratory. Roadmap to be defined as market needs clarify.",
    link: null,
    partnerLink: false,
  },
  {
    name: "Investments & Ventures",
    badge: "future",
    badgeLabel: "2027+",
    desc: "Strategic minority positions and co-building arrangements in ventures where Colteum has operational edge.",
    roadmap: "Structure under review. Initial deal flow expected through partner network.",
    link: null,
    partnerLink: true,
  },
];

function VentureCard({ venture }: { venture: Venture }) {
  return (
    <GlassCard className="p-7 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="font-display font-bold text-white text-base">{venture.name}</h3>
        <span className={`badge-${venture.badge} text-[11px] px-2.5 py-0.5 rounded-full font-mono shrink-0`}>
          {venture.badgeLabel}
        </span>
      </div>
      <p className="text-sm text-[--text-muted] leading-relaxed mb-4 flex-1">{venture.desc}</p>
      <div className="pt-4 border-t border-white/8">
        <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
          Roadmap
        </p>
        <p className="text-xs text-[--text-muted] leading-relaxed mb-4">{venture.roadmap}</p>
        <div className="flex flex-wrap gap-3">
          {venture.link && (
            venture.link.startsWith("http") ? (
              <a
                href={venture.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-xs inline-flex items-center gap-1"
              >
                <ExternalLink size={11} />
                Visit
              </a>
            ) : (
              <Link
                href={venture.link}
                className="text-link text-xs inline-flex items-center gap-1"
              >
                <ExternalLink size={11} />
                Visit
              </Link>
            )
          )}
          {venture.partnerLink && (
            <Link
              href="/contact?type=partnership"
              className="text-link text-xs inline-flex items-center gap-1"
            >
              Partnership inquiry
              <ArrowRight size={11} />
            </Link>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default function LabsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg-surface-1]/40 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-warm] uppercase tracking-widest mb-4">
              Colteum Labs
            </p>
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Colteum Labs.
            </h1>
            <p className="text-xl text-[--text-muted] max-w-xl leading-relaxed">
              Ventures we&rsquo;re building in parallel — from live platforms to staged launches
              and frontier projects.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Primary ventures */}
      <section className="py-24">
        <div className="section-container">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-3">
                Active Ventures
              </p>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Live, launching, and in development.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {primaryVentures.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.07}>
                <VentureCard venture={v} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Deeper ventures */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-3">
                Horizon
              </p>
              <h2
                className="font-display font-bold text-white mb-3"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                2027 and beyond.
              </h2>
              <p className="text-[--text-muted] max-w-xl leading-relaxed">
                Longer-horizon ventures in early exploration or dependent on prior milestones.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {deeperVentures.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.08}>
                <VentureCard venture={v} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container text-center">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-warm] uppercase tracking-widest mb-4">
              Co-build &amp; Partners
            </p>
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Partner with Colteum Labs.
            </h2>
            <p className="text-[--text-muted] max-w-xl mx-auto mb-10 leading-relaxed">
              We work with strategic partners, angel investors, grant programs, and co-builders.
              If you&rsquo;re interested in partnering on a venture or supporting the Labs
              operation, reach out.
            </p>
            <Link
              href="/contact?type=partnership"
              className="cta-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl"
            >
              Partnership Inquiry
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
