import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderAsset from "@/components/PlaceholderAsset";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Colteum — web platforms, Web3 infrastructure, NGO digital systems, and brand work for founders and organisations across East Africa.",
};

const caseStudies = [
  {
    id: "brahams-foundation",
    name: "Brahams Foundation",
    category: "NGO Platform",
    year: "2024",
    status: "Live",
    summary:
      "Platform for a rural-development NGO in Siaya County, Kenya. Built for donor credibility and program visibility.",
    context:
      "Brahams Foundation operates community health, rural development, and youth programs in Siaya County. Before this build, the organisation had no digital presence — donor conversations happened over WhatsApp and program updates were communicated verbally.",
    approach:
      "We prioritised three things: credibility signalling for potential donors, program clarity for community stakeholders, and admin simplicity so the team could maintain it without a developer. The design system was kept clean and institutional without feeling corporate.",
    outcome:
      "A live platform the team updates independently. Donor conversations now start with a site link rather than an introduction from scratch.",
    link: "https://brahams-foundation.vercel.app",
    imageReplace: "/public/images/projects/brahams.jpg",
    imageLabel:
      "Brahams Foundation homepage screenshot — 16:10 ratio. Replace at /public/images/projects/brahams.jpg",
  },
  {
    id: "clarix-protocol",
    name: "Clarix Protocol",
    category: "Web3 Platform",
    year: "2024",
    status: "Live",
    summary:
      "Web3 education and credentialing platform deployed on Polygon mainnet. Verifiable on-chain credentials for emerging-market learners.",
    context:
      "Credential fraud is a significant problem in East African labour markets. Clarix was built to issue and verify educational credentials on-chain — so that a learner in Nairobi can prove their qualifications to an employer in London without a paper certificate.",
    approach:
      "We designed for two distinct users: learners accessing their credentials, and verifiers checking them. The smart contract architecture on Polygon was chosen for low transaction costs — critical in markets where gas fees can be prohibitive. The frontend was built for low-bandwidth environments.",
    outcome:
      "Deployed on Polygon mainnet with live credential issuance. The product is active and growing its issuer network.",
    link: "https://clarixprotocol.com",
    imageReplace: "/public/images/projects/clarix.jpg",
    imageLabel:
      "Clarix Protocol homepage screenshot — 16:10 ratio. Replace at /public/images/projects/clarix.jpg",
  },
  {
    id: "double-root-coffee",
    name: "Double Root Coffee",
    category: "Brand & Commerce",
    year: "2025",
    status: "In market",
    summary:
      "Market positioning and brand work for Double Root Coffee, a men's wellness coffee blend distributed in Kenya.",
    context:
      "Double Root Coffee launched into the Kenyan market targeting men aged 25–45 who wanted functional benefits from their daily coffee habit. The challenge was positioning a premium product in a category with strong commodity associations.",
    approach:
      "We developed the brand voice, positioning framework, and digital presence. The positioning moved away from generic wellness language toward specific, outcome-oriented messaging rooted in what the target buyer actually wants.",
    outcome:
      "Brand live and in active distribution across Nairobi. Digital presence in development.",
    link: null,
    imageReplace: "/public/images/projects/doubleroot.jpg",
    imageLabel:
      "Double Root Coffee brand work — 16:10 ratio. Replace at /public/images/projects/doubleroot.jpg",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-bold text-white mb-6">
            What We&apos;ve Shipped.
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            Selected projects from the studio. Each one shipped on a fixed scope
            and fixed timeline.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <div className="border-t border-white/[0.06]">
        {caseStudies.map((project, idx) => (
          <section
            key={project.id}
            id={project.id}
            className={`py-20 md:py-28 border-b border-white/[0.06] ${
              idx % 2 === 1 ? "bg-[#0A0A0C]" : ""
            }`}
          >
            <div className="section-container">
              {/* Screenshot */}
              <PlaceholderAsset
                replace={project.imageReplace}
                label={project.imageLabel}
                className="w-full aspect-[16/10] rounded-xl mb-12"
              />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-zinc-500 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-zinc-700">·</span>
                    <span className="text-xs text-zinc-500">{project.year}</span>
                    <span className="text-zinc-700">·</span>
                    <span className="text-xs text-emerald-400 font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-white">
                    {project.name}
                  </h2>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors shrink-0"
                  >
                    Visit Site →
                  </a>
                )}
              </div>

              {/* Case study body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div>
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                    Context
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.context}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                    Approach
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                    Outcome
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-4">
              Ready to be next?
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Fixed-price quote within 24 hours. No obligation.
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-7 py-3.5 rounded-md inline-block transition-colors"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
