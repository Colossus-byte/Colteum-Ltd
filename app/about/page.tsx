"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "motion/react";
import PlaceholderAsset from "@/components/PlaceholderAsset";

// metadata export is ignored in client components — set in a separate file if needed

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

const ventures = [
  {
    name: "Clarix Protocol",
    description:
      "Web3 education and credentialing platform deployed on Polygon mainnet. Verifiable on-chain credentials for emerging-market learners. Live and generating revenue.",
    link: "https://clarixprotocol.com",
    external: true,
  },
  {
    name: "Colteum Games",
    description:
      "Consumer gaming titles for the World Cup 2026 window. Flagship title: ULTRAS FC — a browser-based football management game built for the African market.",
    link: null,
    external: false,
  },
  {
    name: "Brahams Foundation",
    description:
      "NGO operating in Siaya County, Kenya. Focused on rural development, community health, and youth programs. Platform built and maintained by Colteum.",
    link: "https://brahams-foundation.vercel.app",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-container">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-blue-500 text-[13px] font-medium tracking-[0.18em] uppercase mb-6">
              Modern infrastructure for modern businesses. Built lean. Shipped
              fast.
            </p>
            <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-bold text-white mb-6">
              We Build, Fast.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Colteum is a Nairobi-based product studio. We ship for clients. We
              ship our own ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY COLTEUM EXISTS ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">
                Why Colteum exists.
              </h2>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="space-y-5 text-[1.05rem] text-zinc-400 leading-relaxed"
            >
              <p>
                Modern businesses don&apos;t have time for traditional agency
                timelines. Founders need execution that moves at their speed.
                NGOs need infrastructure that doesn&apos;t require a grant just
                to commission it. SMEs need digital systems built in days, not
                quarters.
              </p>
              <p>
                Colteum was built to close that gap. We operate as a small,
                high-velocity team using modern systems, founder-direct delivery,
                and intelligent tooling to compress what used to take months into
                work that ships in days.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.06] bg-[#0A0A0C]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-8">
                Jude Baraka.
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-[1.05rem] mb-8">
                <p>
                  Nairobi-based founder and operator. Background spans Web3
                  product development, NGO leadership, and digital commerce.
                  Currently building Clarix Protocol, leading Brahams Foundation,
                  and shipping client work across East Africa.
                </p>
                <p>
                  Experienced in taking products from zero to live — on
                  timelines that traditional agencies consider impossible.
                  Toastmasters speaker. Systems thinker. Direct communicator.
                </p>
                <p>
                  The Colteum operating model is built around one conviction:
                  the best work happens when the person accountable for the
                  outcome is also the person doing the work. No layers. No
                  translation loss. No handoffs.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <a
                  href="https://linkedin.com/in/judebaraka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://twitter.com/judebaraka_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  X →
                </a>
                <a
                  href="mailto:jude@colteumgroup.com"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Email →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" as const }}
            >
              <PlaceholderAsset
                replace="/public/images/founder-about.jpg"
                label="Jude Baraka studio portrait — 4:5 ratio, navy backdrop. Replace at /public/images/founder-about.jpg"
                className="w-full max-w-[420px] aspect-[4/5] rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPERATING MODEL ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="section-container">
          <motion.div {...fadeUp} className="mb-14">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white">
              The Colteum operating model.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Productized",
                body: "Fixed scope. Fixed price. Fixed timeline. No estimates, no surprise invoices, no scope creep.",
              },
              {
                title: "Intelligent Systems",
                body: "Modern tooling and AI as force multipliers across design, code, copy, and operations. A small team delivers at the velocity of a much larger one.",
              },
              {
                title: "Founder-Direct",
                body: "You work directly with the founder. No account managers, no junior handoffs, no offshore delegation.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" as const }}
                className="border border-white/[0.06] rounded-xl p-8"
              >
                <h3 className="text-lg font-semibold text-white mb-3 uppercase tracking-wider text-sm">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO & VENTURES ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.06] bg-[#0A0A0C]">
        <div className="section-container">
          <motion.div {...fadeUp} className="mb-4">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-3">
              Studio & Ventures.
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Colteum operates as a hybrid studio. Services drive the operation.
              Ventures are the long-term upside.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-10 mb-14 text-zinc-400 leading-relaxed text-[1.05rem] max-w-3xl"
          >
            <p>
              Alongside client work, we incubate our own products — building
              toward a portfolio of African-rooted, globally-relevant ventures.
              Some are live and revenue-generating. Some are in active
              development. All are built with the same operating model we apply
              to client work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {ventures.map((venture, i) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" as const }}
                className="bg-[#0D0D0F] border border-white/[0.06] rounded-xl p-6"
              >
                <h3 className="font-semibold text-white mb-3">{venture.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {venture.description}
                </p>
                {venture.link && (
                  <a
                    href={venture.link}
                    target={venture.external ? "_blank" : undefined}
                    rel={venture.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Visit →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="border border-white/[0.06] rounded-xl p-8 max-w-3xl"
          >
            <p className="text-zinc-400 leading-relaxed mb-6">
              We work with strategic partners, angel investors, grant programs,
              and co-builders across our active ventures. If you operate at the
              intersection of African markets, Web3, AI, or emerging-market
              product development, we&apos;d like to hear from you. For
              partnership inquiries, reach out via the contact form and reference
              the venture you&apos;re interested in.
            </p>
            <Link
              href="/contact?type=partnership"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Start a Conversation →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHERE WE'RE BASED ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="section-container">
          <motion.div {...fadeUp} className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Where we&apos;re based.
            </h2>
            <p className="text-zinc-400 leading-relaxed text-[1.05rem] mb-6">
              Colteum is registered and operated in Nairobi, Kenya. We serve
              clients across Kenya, East Africa, and remotely worldwide. We
              accept M-Pesa, Kenyan bank transfer, Wise, and USDC.
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-7 py-3.5 rounded-md inline-block transition-colors"
            >
              Get a Quote in 24 Hours
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
