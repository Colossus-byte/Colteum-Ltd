"use client";

import Link from "next/link";
import { motion } from "motion/react";
import PlaceholderAsset from "@/components/PlaceholderAsset";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

const services = [
  {
    id: "web-platform",
    name: "Web Platform Sprint",
    description:
      "Growth-ready websites designed to convert. Custom design, copywriting, mobile-optimized, analytics, SEO baseline, 30 days of revisions.",
    from: "KES 75,000",
    delivered: "72 hours",
    cta: "Book a Slot",
  },
  {
    id: "brand-system",
    name: "Brand System",
    description:
      "Complete identity foundations for new ventures and rebrands. Logo system, palette, typography, business card, social kit, guidelines.",
    from: "KES 50,000",
    delivered: "5 days",
    cta: "Start a Project",
  },
  {
    id: "growth-engine",
    name: "Growth Engine",
    description:
      "Acquisition systems built to turn traffic into customers. Sales funnel, lead magnet, email sequences, content calendar, ad creatives.",
    from: "KES 150,000",
    delivered: "2 weeks",
    cta: "Request a Plan",
  },
  {
    id: "content-ugc",
    name: "Content & UGC System",
    description:
      "Authentic short-form content built for African brands. Scripted UGC videos, social-native edits, monthly content packs, distribution-ready for TikTok, Instagram, and YouTube Shorts.",
    from: "KES 80,000",
    delivered: "7 days (pack of 5 videos)",
    cta: "See Content Packs",
  },
  {
    id: "custom-infrastructure",
    name: "Custom Infrastructure",
    description:
      "Bespoke software, dashboards, internal tools, automation. Scoped, designed, built, deployed.",
    from: "KES 250,000",
    delivered: "2–4 weeks",
    cta: "Get a Proposal",
  },
  {
    id: "strategic-retainer",
    name: "Strategic Retainer",
    description:
      "Ongoing partnership for businesses scaling fast. Monthly capacity across design, build, content, and growth. Priority delivery, direct founder access, evolving systems.",
    from: "KES 200,000 / month",
    delivered: "Minimum: 3-month engagement",
    cta: "Talk to Us",
  },
];

const caseStudies = [
  {
    name: "Brahams Foundation",
    description:
      "Platform for a rural-development NGO in Siaya County, Kenya. Built for donor credibility and program visibility.",
    link: "https://brahams-foundation.vercel.app",
    imageReplace: "/public/images/projects/brahams.jpg",
    imageLabel:
      "Brahams Foundation homepage screenshot — 16:10 ratio. Replace at /public/images/projects/brahams.jpg",
  },
  {
    name: "Clarix Protocol",
    description:
      "Web3 education and credentialing platform deployed on Polygon mainnet. Verifiable on-chain credentials for emerging-market learners.",
    link: "https://clarixprotocol.com",
    imageReplace: "/public/images/projects/clarix.jpg",
    imageLabel:
      "Clarix Protocol homepage screenshot — 16:10 ratio. Replace at /public/images/projects/clarix.jpg",
  },
  {
    name: "Double Root Coffee",
    description:
      "Market positioning and digital presence work for Double Root Coffee's growth in the Kenyan market.",
    link: null,
    imageReplace: "/public/images/projects/doubleroot.jpg",
    imageLabel:
      "Double Root Coffee brand work — 16:10 ratio. Replace at /public/images/projects/doubleroot.jpg",
  },
];

type StatusBadge = "LIVE" | "LAUNCHING 2026" | "IN DEVELOPMENT" | "2027+";

const statusStyle: Record<StatusBadge, string> = {
  LIVE: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "LAUNCHING 2026": "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  "IN DEVELOPMENT": "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20",
  "2027+": "bg-slate-500/10 text-slate-400 border border-slate-500/20",
};

const ventures: {
  id: string;
  name: string;
  status: StatusBadge;
  description: string;
  link: string | null;
  external: boolean;
}[] = [
  {
    id: "studio",
    name: "Product Studio",
    status: "LIVE",
    description:
      "Custom websites, apps, brand systems, content engines, and growth infrastructure for African businesses. The work behind this site.",
    link: "/services",
    external: false,
  },
  {
    id: "clarix",
    name: "Clarix Protocol",
    status: "LIVE",
    description: "Web3 education and credentialing on Polygon mainnet.",
    link: "https://clarixprotocol.com",
    external: true,
  },
  {
    id: "games",
    name: "Colteum Games",
    status: "LAUNCHING 2026",
    description:
      "Browser games and consumer titles for the World Cup 2026 window. Flagship consumer title: ULTRAS FC.",
    link: null,
    external: false,
  },
  {
    id: "commerce",
    name: "Commerce & Trade",
    status: "IN DEVELOPMENT",
    description:
      "Product sourcing, distribution, and cross-border trade — beginning with Double Root Coffee in the Kenyan market.",
    link: null,
    external: false,
  },
  {
    id: "investments",
    name: "Investments & Ventures",
    status: "2027+",
    description: "Strategic acquisitions and partner brand incubation.",
    link: null,
    external: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="section-container w-full py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-blue-500 text-[13px] font-medium tracking-[0.18em] uppercase mb-7">
                Modern infrastructure for modern businesses. Built lean. Shipped
                fast.
              </p>
              <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold text-white mb-7 max-w-[14ch]">
                Modern Digital Infrastructure for African Businesses.
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-[44ch]">
                Colteum is a Nairobi-based product studio. We design and ship
                growth-ready web platforms, brand systems, growth engines,
                content systems, and custom software — productized, founder-led,
                delivered in days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-7 py-3.5 rounded-md text-center transition-colors"
                >
                  Get a Quote in 24 Hours
                </Link>
                <Link
                  href="/work"
                  className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-7 py-3.5 rounded-md text-center transition-colors"
                >
                  See Recent Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" as const }}
            >
              <PlaceholderAsset
                replace="/public/images/hero-founder.jpg"
                label="Founder portrait of Jude Baraka — 4:5 ratio, navy or near-black background, professional editorial style. Replace at /public/images/hero-founder.jpg"
                className="w-full max-w-[400px] aspect-[4/5] rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-y border-white/[0.06] bg-[#0A0A0C]">
        <div className="section-container py-10">
          <p className="text-sm text-zinc-500 text-center mb-8">
            Building digital infrastructure for founders across Kenya, East
            Africa, and global Web3 markets.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              {
                id: "clarix",
                label: "Clarix Protocol logo",
                replace: "/public/images/logos/clarix.svg",
              },
              {
                id: "brahams",
                label: "Brahams Foundation logo",
                replace: "/public/images/logos/brahams.svg",
              },
              {
                id: "doubleroot",
                label: "Double Root Coffee logo",
                replace: "/public/images/logos/doubleroot.svg",
              },
              {
                id: "labs",
                label: "Colteum Labs logo",
                replace: "/public/images/logos/colteum-labs.svg",
              },
            ].map((logo) => (
              <PlaceholderAsset
                key={logo.id}
                replace={logo.replace}
                label={logo.label}
                className="h-8 w-28"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-28 md:py-36">
        <div className="section-container">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-8">
              Most Businesses Don&apos;t Need Bigger Agencies. They Need Faster
              Execution.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Traditional agencies move in quarters. Freelancers move in fits
              and starts. In-house teams move on month-long ramps. Modern
              businesses can&apos;t wait that long. Colteum was built to close
              the gap between brief and ship — small teams, modern systems,
              direct founder execution. We deliver in days what traditional
              structures deliver in months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="section-container">
          <motion.div {...fadeUp} className="mb-14">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-3">
              Productized Execution. Premium Delivery.
            </h2>
            <p className="text-zinc-400">
              Fixed scope. Fast timelines. Founder-direct.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-xl overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                  ease: "easeInOut" as const,
                }}
                className="bg-[#0D0D0F] p-8 flex flex-col hover:bg-[#131316] transition-colors"
              >
                <h3 className="text-base font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-1 mb-6">
                  <p className="text-sm">
                    <span className="text-zinc-500">From </span>
                    <span className="text-white font-medium">{service.from}</span>
                  </p>
                  <p className="text-sm text-zinc-500">
                    Delivered:{" "}
                    <span className="text-zinc-300">{service.delivered}</span>
                  </p>
                </div>
                <Link
                  href={`/contact?service=${service.id}`}
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  {service.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT WORK ── */}
      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-20">
              What We&apos;ve Shipped.
            </h2>
          </motion.div>

          <div className="space-y-24">
            {caseStudies.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeInOut" as const }}
              >
                <PlaceholderAsset
                  replace={project.imageReplace}
                  label={project.imageLabel}
                  className="w-full aspect-[16/10] rounded-xl mb-8"
                />
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h3 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-zinc-400 max-w-xl">{project.description}</p>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="shrink-0 text-zinc-600 text-sm italic">
                      Coming soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <Link
              href="/work"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              See Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 md:py-32 border-t border-white/[0.06] bg-[#0A0A0C]">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-16">
              Three steps. No surprises.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                num: "01",
                title: "Brief",
                body: "15-minute discovery call. Fixed-price quote within 24 hours.",
              },
              {
                num: "02",
                title: "Build",
                body: "Daily progress. You see the work as it happens, not at the end.",
              },
              {
                num: "03",
                title: "Ship",
                body: "Live, working, yours. 30 days of revisions included.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" as const }}
              >
                <p className="text-[3.5rem] font-bold text-zinc-800 mb-4 leading-none">
                  {step.num}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-6">
                Built by Jude Baraka.
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-8 text-[1.05rem]">
                <p>
                  Colteum is led by Jude Baraka, a Nairobi-based founder and
                  operator. Background spans Web3 product development, NGO
                  operations, and digital commerce. Currently building Clarix
                  Protocol, leading Brahams Foundation, and shipping client work
                  across East Africa.
                </p>
                <p>
                  I build small, fast teams powered by modern systems and AI
                  tooling — which means a focused operation delivers at the
                  velocity of a much larger one. No middlemen. No account
                  managers. No offshore handoffs. Direct work. Direct delivery.
                </p>
              </div>
              <Link
                href="/about"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                More about Colteum →
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" as const }}
            >
              <PlaceholderAsset
                replace="/public/images/founder-secondary.jpg"
                label="Jude Baraka environmental portrait — 4:5 ratio, Nairobi context. Replace at /public/images/founder-secondary.jpg"
                className="w-full max-w-[380px] aspect-[4/5] rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LABS ── */}
      <section className="py-24 md:py-32 border-t border-white/[0.06] bg-[#0A0A0C]">
        <div className="section-container">
          <motion.div {...fadeUp} className="mb-14">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-3">
              Colteum Labs.
            </h2>
            <p className="text-zinc-400">
              Ventures we&apos;re building in parallel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ventures.map((venture, i) => (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeInOut" as const }}
                className="bg-[#0D0D0F] border border-white/[0.06] rounded-xl p-6 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-semibold text-white text-sm leading-snug">
                    {venture.name}
                  </h3>
                  <span
                    className={`shrink-0 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                      statusStyle[venture.status]
                    }`}
                  >
                    {venture.status}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {venture.description}
                </p>
                {venture.link && (
                  <Link
                    href={venture.link}
                    target={venture.external ? "_blank" : undefined}
                    rel={venture.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Learn more →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 md:py-36 border-t border-white/[0.06]">
        <div className="section-container">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white mb-4">
              Tell us what you&apos;re building.
            </h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Fixed-price quote within 24 hours. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1fba5a] text-white font-medium px-8 py-4 rounded-md text-center transition-colors"
              >
                Start on WhatsApp
              </a>
              <a
                href="mailto:hello@colteumgroup.com"
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-8 py-4 rounded-md text-center transition-colors"
              >
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
