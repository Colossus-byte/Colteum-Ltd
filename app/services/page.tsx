import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Productized execution across Build, Grow, and Intelligence practices. Fixed scope, fast timelines, senior delivery.",
  openGraph: {
    title: "Services | Colteum",
    description:
      "Productized execution across Build, Grow, and Intelligence practices. Fixed scope, fast timelines, senior delivery.",
  },
};

type Service = {
  slug: string;
  name: string;
  desc: string;
  from: string;
  delivery: string;
  cta: string;
  deliverables: string[];
};

type Category = {
  id: string;
  label: string;
  tagline: string;
  accent: string;
  services: Service[];
  faqs: { question: string; answer: string }[];
};

const categories: Category[] = [
  {
    id: "build",
    label: "Build",
    tagline: "Websites, software, and frontier-tech infrastructure.",
    accent: "text-[--accent-primary]",
    services: [
      {
        slug: "launch-page-sprint",
        name: "Launch Page Sprint",
        desc: "Single-page sites for product launches, event registration, lead capture, or one-purpose campaigns. Designed, copywritten, deployed.",
        from: "From KES 50,000",
        delivery: "48 hours",
        cta: "Book a Slot",
        deliverables: [
          "Single-page site design",
          "Copywriting included",
          "Mobile-first development",
          "Custom domain setup guidance",
          "Analytics integration",
          "Form or CTA integration",
          "14 days of revisions",
        ],
      },
      {
        slug: "web-platform-sprint",
        name: "Web Platform Sprint",
        desc: "Growth-ready websites designed to convert. Custom design, copywriting, mobile-optimized, analytics, SEO baseline, 30 days of revisions.",
        from: "From KES 75,000",
        delivery: "72 hours",
        cta: "Book a Slot",
        deliverables: [
          "Multi-page website (up to 8 pages)",
          "Custom design system",
          "Copywriting for all pages",
          "Mobile-first development",
          "SEO baseline (meta tags, sitemap)",
          "Analytics setup (GA4)",
          "Contact or booking form",
          "30 days of revisions",
        ],
      },
      {
        slug: "custom-infrastructure",
        name: "Custom Infrastructure",
        desc: "Bespoke software, dashboards, internal tools, automation. Scoped, designed, built, deployed.",
        from: "From KES 250,000",
        delivery: "2–4 weeks",
        cta: "Get a Proposal",
        deliverables: [
          "Requirements & architecture scoping",
          "Custom UI/UX design",
          "Frontend + backend development",
          "Database design",
          "API integrations",
          "Testing & QA",
          "Deployment",
          "Documentation",
          "30 days post-launch support",
        ],
      },
      {
        slug: "web3-build",
        name: "Web3 Build",
        desc: "Smart contracts, dApps, token launches, DeFi integrations, Web3 platforms. Deployment across EVM chains. Includes audit-ready code and post-launch monitoring.",
        from: "From KES 350,000 / $2,500 USD",
        delivery: "2–6 weeks",
        cta: "Get a Proposal",
        deliverables: [
          "Smart contract development (audit-ready)",
          "Frontend dApp development",
          "Wallet integration (MetaMask, WalletConnect)",
          "EVM chain deployment",
          "Token contract (if applicable)",
          "Security review",
          "Post-launch monitoring (30 days)",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work with clients outside Kenya?",
        answer:
          "Yes. We work with clients across Kenya, East Africa, and globally. International clients are quoted in USD and can pay via Wise or USDC.",
      },
      {
        question: "What happens after the 30-day revision period?",
        answer:
          "Projects can move to a Strategic Retainer for ongoing support, or we can scope and price individual change requests.",
      },
      {
        question: "How do you handle project communication?",
        answer:
          "We use a shared workspace for all project communication. You receive daily progress updates during the build phase — you see the work as it happens, not at the end.",
      },
    ],
  },
  {
    id: "grow",
    label: "Grow",
    tagline: "Brand systems, content engines, and growth infrastructure.",
    accent: "text-[--accent-secondary]",
    services: [
      {
        slug: "brand-system",
        name: "Brand System",
        desc: "Complete identity foundations for new ventures and rebrands. Logo system, palette, typography, business card, social kit, brand guidelines PDF.",
        from: "From KES 50,000",
        delivery: "5 days",
        cta: "Start a Project",
        deliverables: [
          "Logo system (primary + variants)",
          "Colour palette + typography",
          "Brand guidelines PDF",
          "Business card design",
          "Social media kit (profile/cover)",
          "Email signature",
          "Brand voice guidelines",
        ],
      },
      {
        slug: "ugc-system",
        name: "Content & UGC System",
        desc: "Authentic short-form content built for modern brands. Scripted UGC videos, social-native edits, monthly content packs, distribution-ready for TikTok, Instagram, and YouTube Shorts.",
        from: "From KES 80,000",
        delivery: "7 days (pack of 5 videos)",
        cta: "See Content Packs",
        deliverables: [
          "5 scripted UGC videos",
          "Social-native edits (TikTok, Instagram, YouTube Shorts)",
          "Hook-optimized scripts",
          "Voiceover or text overlays",
          "Thumbnail designs",
          "Content calendar",
        ],
      },
      {
        slug: "growth-engine",
        name: "Growth Engine",
        desc: "Acquisition systems built to turn traffic into customers. Sales funnel, lead magnet, email sequences, content calendar, ad creatives.",
        from: "From KES 150,000",
        delivery: "2 weeks",
        cta: "Request a Plan",
        deliverables: [
          "Sales funnel design",
          "Lead magnet creation",
          "Email sequence (5 emails)",
          "Content calendar (30 days)",
          "Ad creative set (3 formats)",
          "Analytics tracking setup",
        ],
      },
      {
        slug: "proposal-systems",
        name: "Proposal & Funding Systems",
        desc: "Investor-grade proposals, grant applications, business cases, pitch decks, and funding-ready documentation. For founders raising, NGOs applying for grants, and businesses bidding.",
        from: "From KES 75,000",
        delivery: "5–10 days",
        cta: "Start a Proposal",
        deliverables: [
          "Custom proposal document",
          "Executive summary",
          "Financial projections template",
          "Pitch deck (up to 15 slides)",
          "Grant application (if applicable)",
          "Review + iteration cycle",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I commission individual items within a Brand System?",
        answer:
          "No. Services are productized with fixed scope to ensure quality and speed. We don't offer logo-only or partial brand work.",
      },
      {
        question: "What platforms is the Content & UGC System optimized for?",
        answer:
          "TikTok, Instagram Reels, and YouTube Shorts. Distribution strategy is included.",
      },
      {
        question: "Do you run the ads, or just create the creatives?",
        answer:
          "The Growth Engine service creates the system and creatives. Paid media management is available as part of a Strategic Retainer.",
      },
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    tagline: "Independent research. We publish. We don't advise.",
    accent: "text-[--accent-warm]",
    services: [
      {
        slug: "strategic-consulting",
        name: "Strategic Consulting",
        desc: "Advisory engagements for founders and operators navigating product strategy, market entry, fundraising sequencing, and Web3 positioning. Day-rate or scoped engagement.",
        from: "From KES 100,000 per day",
        delivery: "Per engagement",
        cta: "Book a Strategy Day",
        deliverables: [
          "Pre-session brief review",
          "Full-day strategy session",
          "Session notes + action plan",
          "2-week follow-up call",
          "Priority access during session week",
        ],
      },
      {
        slug: "intelligence-subscription",
        name: "Intelligence Subscription",
        desc: "Premium research subscription covering crypto, emerging Web3 sectors, and frontier tech. Weekly briefings, monthly deep-dives, thesis library access.",
        from: "KES 25,000/month or KES 250,000/year",
        delivery: "Ongoing",
        cta: "Subscribe",
        deliverables: [
          "Weekly briefings (4/month)",
          "Monthly deep-dive report",
          "Thesis library access",
          "Sector coverage: crypto, Web3, frontier tech",
          "Email delivery + archive access",
        ],
      },
      {
        slug: "custom-research",
        name: "Custom Research Briefings",
        desc: "Institutional-grade research reports (20–40 pages) on requested themes: emerging L1s, DeFi primitives, sector mapping. For VC funds, family offices, sophisticated allocators.",
        from: "From KES 150,000 per engagement",
        delivery: "2–3 weeks",
        cta: "Commission a Briefing",
        deliverables: [
          "20–40 page research report",
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
        desc: "Custom research aligned to subscriber's themes. Quarterly written report plus 1-on-1 strategy session — educational framing, continuous research access between calls.",
        from: "From KES 100,000/quarter (recurring)",
        delivery: "Quarterly",
        cta: "Apply for Briefing",
        deliverables: [
          "Quarterly written report",
          "1-on-1 strategy session (60 min)",
          "Continuous research access",
          "Educational framing",
          "Custom sector alignment",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this investment advice?",
        answer:
          "No. Colteum Intelligence publishes independent research. Nothing we produce constitutes investment advice. We cover themes, sectors, and emerging infrastructure — not individual asset picks.",
      },
      {
        question: "Who is the HNW Quarterly Briefing for?",
        answer:
          "For sophisticated individual investors, family offices, and allocators who want curated, independent research with direct access to our analysts.",
      },
      {
        question: "Can I request a specific sector or theme?",
        answer:
          "Yes. Custom Research Briefings and HNW Quarterly Briefings are aligned to your requested themes. Intelligence Subscriptions cover our editorial calendar.",
      },
    ],
  },
  {
    id: "ongoing",
    label: "Ongoing",
    tagline: "Retained. Embedded. Accountable.",
    accent: "text-[--success]",
    services: [
      {
        slug: "strategic-retainer",
        name: "Strategic Retainer",
        desc: "Ongoing partnership for businesses scaling fast. Monthly capacity across design, build, content, and growth. Priority delivery, direct studio access, evolving systems.",
        from: "From KES 200,000/month",
        delivery: "3-month minimum",
        cta: "Talk to Us",
        deliverables: [
          "Monthly capacity across design, build, content, and growth",
          "Priority delivery",
          "Direct studio access (no account managers)",
          "Weekly progress calls",
          "Monthly strategy review",
          "Evolving systems roadmap",
        ],
      },
    ],
    faqs: [
      {
        question: "What's included in the monthly capacity?",
        answer:
          "Monthly capacity is allocated across design, build, content, and growth — based on your priorities. We define the mix together at the start of each month.",
      },
      {
        question: "Is there a minimum engagement?",
        answer:
          "Yes — 3 months minimum. This ensures we can build meaningful systems rather than reactive fixes.",
      },
    ],
  },
];

function ServiceCard({ service, accentClass }: { service: Service; accentClass: string }) {
  const waText = `Hi%20Colteum%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(service.name)}%20service`;
  return (
    <GlassCard className="p-7 flex flex-col h-full">
      <div className="mb-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display font-bold text-white text-lg leading-tight">
            {service.name}
          </h3>
          <div className="text-right shrink-0">
            <p className={`text-xs font-mono ${accentClass}`}>{service.from}</p>
            <p className="text-xs text-[--text-muted] mt-0.5">{service.delivery}</p>
          </div>
        </div>
        <p className="text-sm text-[--text-muted] leading-relaxed">{service.desc}</p>
      </div>

      <div className="flex-1">
        <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-3">
          What&rsquo;s included
        </p>
        <ul className="space-y-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 text-xs text-[--text-muted]">
              <CheckCircle2 size={12} className="text-[--accent-primary] mt-0.5 shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 pt-5 border-t border-white/8 flex flex-col sm:flex-row gap-3">
        <Link
          href={`/contact?service=${service.slug}`}
          className="cta-primary text-sm px-5 py-2.5 rounded-lg text-center flex-1"
        >
          {service.cta}
        </Link>
        <a
          href={`https://wa.me/254746089499?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-ghost text-sm px-5 py-2.5 rounded-lg text-center"
        >
          WhatsApp
        </a>
      </div>
    </GlassCard>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg-surface-1]/40 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-primary] tracking-widest uppercase mb-4">
              Services
            </p>
            <h1 className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Services.
            </h1>
            <p className="text-xl text-[--text-muted] max-w-xl leading-relaxed mb-10">
              Productized execution across three practices. Fixed scope, fast timelines, senior delivery.
            </p>
          </FadeIn>

          {/* Jump-nav */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/4 text-sm text-[--text-muted] hover:text-white hover:border-white/20 transition-colors font-mono tracking-wide"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-24 border-t border-white/8 scroll-mt-24"
        >
          <div className="section-container">
            {/* Category header */}
            <FadeIn>
              <div className="mb-14">
                <span className={`text-xs font-mono uppercase tracking-widest ${cat.accent} mb-2 block`}>
                  {cat.label}
                </span>
                <h2 className="font-display font-bold text-white mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
                  {cat.tagline}
                </h2>
              </div>
            </FadeIn>

            {/* Service cards */}
            <div className={`grid gap-6 mb-16 ${cat.services.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 sm:grid-cols-2"}`}>
              {cat.services.map((service, i) => (
                <FadeIn key={service.slug} delay={i * 0.08}>
                  <ServiceCard service={service} accentClass={cat.accent} />
                </FadeIn>
              ))}
            </div>

            {/* FAQ */}
            <FadeIn delay={0.15}>
              <div className="max-w-2xl">
                <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-1">
                  FAQ
                </p>
                <Accordion items={cat.faqs} />
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 border-t border-white/8">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
              Not sure where to start?
            </h2>
            <p className="text-[--text-muted] max-w-xl mx-auto leading-relaxed mb-8">
              Tell us your goal. We&rsquo;ll map the right combination and give you a clear plan within 24 hours.
            </p>
            <Link
              href="/contact"
              className="cta-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl"
            >
              Get a Custom Plan
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
