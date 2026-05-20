import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Colteum Labs — ventures we're building in parallel with the studio. Clarix Protocol, Colteum Games, Commerce & Trade, and more.",
};

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
  category: string;
  summary: string;
  description: string;
  link: string | null;
  external: boolean;
}[] = [
  {
    id: "studio",
    name: "Product Studio",
    status: "LIVE",
    category: "Services",
    summary: "The client-facing studio — web platforms, brand systems, growth infrastructure.",
    description:
      "Custom websites, applications, brand systems, content engines, and growth infrastructure for African businesses, NGOs, and founders. The work behind this site. Six productized services, fixed prices, fast timelines.",
    link: "/services",
    external: false,
  },
  {
    id: "clarix",
    name: "Clarix Protocol",
    status: "LIVE",
    category: "Web3",
    summary: "On-chain education credentials for emerging-market learners.",
    description:
      "Web3 education and credentialing platform deployed on Polygon mainnet. Learners receive verifiable on-chain credentials that can be independently verified by employers and institutions globally — without paper certificates or institutional intermediaries. Built for East African learners who need portable, fraud-proof proof of skills.",
    link: "https://clarixprotocol.com",
    external: true,
  },
  {
    id: "games",
    name: "Colteum Games",
    status: "LAUNCHING 2026",
    category: "Consumer",
    summary: "Browser-based consumer games for the World Cup 2026 window.",
    description:
      "Consumer gaming titles built for the World Cup 2026 window. Flagship title: ULTRAS FC — a browser-based football management and prediction game built for the African market. Designed to capture the massive engagement spike around tournament football and convert it into an ongoing product relationship.",
    link: null,
    external: false,
  },
  {
    id: "commerce",
    name: "Commerce & Trade",
    status: "IN DEVELOPMENT",
    category: "Commerce",
    summary: "Product sourcing, distribution, and cross-border trade infrastructure.",
    description:
      "A commerce vertical beginning with Double Root Coffee — a men's wellness coffee blend in active distribution across Nairobi. The broader thesis is cross-border trade between East African producers and diaspora and international markets. We're building the product, logistics, and digital infrastructure in parallel.",
    link: null,
    external: false,
  },
  {
    id: "investments",
    name: "Investments & Ventures",
    status: "2027+",
    category: "Capital",
    summary: "Strategic acquisitions and partner brand incubation.",
    description:
      "The long-term capital allocation arm of Colteum. As the studio and ventures generate returns, we will begin acquiring strategic assets and incubating partner brands — particularly in sectors where the Colteum operating model (small team, modern systems, fast execution) creates a structural advantage.",
    link: null,
    external: false,
  },
];

export default function LabsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <p className="text-blue-500 text-[13px] font-medium tracking-[0.18em] uppercase mb-6">
            Colteum Labs
          </p>
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-bold text-white mb-6 max-w-[16ch]">
            Ventures we&apos;re building in parallel.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Colteum is a hybrid studio. Services drive the operation. These are
            the ventures that make up the long-term portfolio.
          </p>
        </div>
      </section>

      {/* ── VENTURES ── */}
      <div className="border-t border-white/[0.06]">
        {ventures.map((venture, idx) => (
          <section
            key={venture.id}
            id={venture.id}
            className={`py-16 md:py-24 border-b border-white/[0.06] ${
              idx % 2 === 1 ? "bg-[#0A0A0C]" : ""
            }`}
          >
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-zinc-600 uppercase tracking-widest">
                      {venture.category}
                    </span>
                    <span
                      className={`text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                        statusStyle[venture.status]
                      }`}
                    >
                      {venture.status}
                    </span>
                  </div>
                  <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-3">
                    {venture.name}
                  </h2>
                  <p className="text-zinc-500 text-sm mb-6">{venture.summary}</p>
                  {venture.link && (
                    <Link
                      href={venture.link}
                      target={venture.external ? "_blank" : undefined}
                      rel={venture.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      {venture.external ? "Visit Site →" : "Learn More →"}
                    </Link>
                  )}
                </div>

                {/* Right */}
                <div>
                  <p className="text-zinc-400 leading-relaxed">{venture.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── PARTNERSHIP CTA ── */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-4">
              Working with Colteum Labs.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We work with strategic partners, angel investors, grant programs,
              and co-builders across our active ventures. If you operate at the
              intersection of African markets, Web3, or emerging-market product
              development, we&apos;d like to hear from you. Reach out via the
              contact form and reference the venture you&apos;re interested in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?type=partnership"
                className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-7 py-3.5 rounded-md inline-block transition-colors text-center"
              >
                Start a Conversation →
              </Link>
              <a
                href="mailto:labs@colteumgroup.com"
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-7 py-3.5 rounded-md text-center transition-colors"
              >
                Email labs@colteumgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
