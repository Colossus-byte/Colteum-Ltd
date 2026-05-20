import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Productized services for African businesses — web platforms, brand systems, growth engines, content, custom infrastructure, and strategic retainers. Fixed scope, fast timelines, founder-direct.",
};

const services = [
  {
    id: "web-platform",
    name: "Web Platform Sprint",
    tagline: "Growth-ready in 72 hours.",
    description:
      "A fully designed, mobile-optimized website built to convert. Ideal for founders launching a new venture, SMEs upgrading a dated site, or NGOs that need donor credibility fast.",
    from: "KES 75,000",
    delivered: "72 hours",
    deliverables: [
      "Custom design (not a template)",
      "Copywriting and messaging",
      "Mobile-first, responsive build",
      "Google Analytics integration",
      "SEO baseline (meta, sitemap, robots)",
      "Contact form with notification",
      "30 days of post-launch revisions",
      "Deployment to your domain",
    ],
    timeline: [
      { day: "Day 1", task: "Discovery call + design brief finalized" },
      { day: "Day 2", task: "Design mockups + copy draft delivered for review" },
      { day: "Day 3", task: "Build complete, tested, deployed live" },
    ],
    faq: [
      {
        q: "What if I need more than one revision?",
        a: "30 days of revisions are included. We'll iterate until it's right.",
      },
      {
        q: "Do you handle domain and hosting?",
        a: "We'll deploy to your existing domain. If you don't have hosting, we'll recommend and set it up — typically Vercel or a similar platform.",
      },
      {
        q: "Can you build e-commerce?",
        a: "Yes, for an additional scope. Raise it in the brief call and we'll price it accurately.",
      },
    ],
  },
  {
    id: "brand-system",
    name: "Brand System",
    tagline: "Complete identity in 5 days.",
    description:
      "Everything a new or repositioning brand needs to look and communicate consistently. From logo to social kit — built for longevity, not trend.",
    from: "KES 50,000",
    delivered: "5 days",
    deliverables: [
      "Primary logo + secondary marks",
      "Colour palette (primary, secondary, neutrals)",
      "Typography system",
      "Business card design",
      "Social media kit (profile + cover templates)",
      "Brand guidelines document (PDF)",
      "All source files delivered",
    ],
    timeline: [
      { day: "Day 1", task: "Discovery session + moodboard presented" },
      { day: "Day 2–3", task: "Logo concepts (3 directions) + first review" },
      { day: "Day 4", task: "Full system build — typography, palette, collateral" },
      { day: "Day 5", task: "Brand guidelines + all files delivered" },
    ],
    faq: [
      {
        q: "How many logo concepts do I get?",
        a: "Three distinct directions in the first presentation. We refine the chosen direction until it's right.",
      },
      {
        q: "What file formats are delivered?",
        a: "SVG, PNG (transparent and white background), PDF — everything a printer or developer needs.",
      },
      {
        q: "Can I use this for print?",
        a: "Yes. All files are production-ready for print and digital use.",
      },
    ],
  },
  {
    id: "growth-engine",
    name: "Growth Engine",
    tagline: "A full acquisition system in 2 weeks.",
    description:
      "For businesses with traffic and no conversion, or no traffic at all. A Growth Engine is a complete system: funnel, content, email, and paid strategy — built to run, not just presented.",
    from: "KES 150,000",
    delivered: "2 weeks",
    deliverables: [
      "Sales funnel design and build (landing page + thank you)",
      "Lead magnet creation (PDF, checklist, or mini-guide)",
      "Email sequence (5-email nurture series)",
      "90-day content calendar",
      "Ad creative set (3 formats for Meta or Google)",
      "Analytics dashboard setup",
      "Handover and training session",
    ],
    timeline: [
      { day: "Week 1", task: "Strategy, funnel design, lead magnet, email copy" },
      { day: "Week 2", task: "Build, test, ad creatives, content calendar, launch" },
    ],
    faq: [
      {
        q: "Do I need an existing email list?",
        a: "No. The Growth Engine is built to generate a list from scratch, starting with the lead magnet.",
      },
      {
        q: "Which email platform do you build on?",
        a: "Mailchimp, ConvertKit, or Brevo — your choice. We'll set it up and train you to manage it.",
      },
      {
        q: "Do you run the ads?",
        a: "We build the creatives and the targeting strategy. Running and paying for the ads is your responsibility. We'll brief you on how to launch.",
      },
    ],
  },
  {
    id: "content-ugc",
    name: "Content & UGC System",
    tagline: "5 videos in 7 days.",
    description:
      "Authentic short-form content built for African brands. Scripted, produced, and edited for TikTok, Instagram Reels, and YouTube Shorts — the kind of content audiences actually watch.",
    from: "KES 80,000",
    delivered: "7 days (pack of 5 videos)",
    deliverables: [
      "5 scripted short-form videos (60–90 seconds each)",
      "UGC-style or talking-head format",
      "Platform-optimized edits (9:16 and 1:1)",
      "Captions and subtitles",
      "Distribution-ready files",
      "Content brief for ongoing reference",
    ],
    timeline: [
      { day: "Day 1–2", task: "Script development + creative brief" },
      { day: "Day 3–5", task: "Production (remote or on-location, Nairobi)" },
      { day: "Day 6–7", task: "Edit, caption, quality check, delivery" },
    ],
    faq: [
      {
        q: "Is this filmed in Nairobi?",
        a: "Production is based in Nairobi. For remote clients, we can work with footage you provide or connect you to vetted creators in your market.",
      },
      {
        q: "Can I subscribe to monthly content packs?",
        a: "Yes. Monthly retainers for ongoing content are available. Contact us for monthly volume pricing.",
      },
      {
        q: "What if I don't like a video?",
        a: "One round of revisions per video is included. If a video fundamentally misses the brief, we'll reshoot.",
      },
    ],
  },
  {
    id: "custom-infrastructure",
    name: "Custom Infrastructure",
    tagline: "Bespoke software in 2–4 weeks.",
    description:
      "For businesses that have outgrown off-the-shelf tools. Custom dashboards, internal platforms, automation systems, and integrations — scoped tightly, built cleanly, deployed properly.",
    from: "KES 250,000",
    delivered: "2–4 weeks",
    deliverables: [
      "Technical discovery and architecture brief",
      "Design and user experience",
      "Frontend and backend build",
      "Database setup and data schema",
      "API integrations (as scoped)",
      "Testing and QA",
      "Deployment and documentation",
      "30 days post-launch support",
    ],
    timeline: [
      { day: "Week 1", task: "Architecture, design, and database setup" },
      { day: "Week 2–3", task: "Core build — frontend and backend" },
      { day: "Week 4", task: "Integrations, QA, deployment, documentation" },
    ],
    faq: [
      {
        q: "How is scope controlled?",
        a: "We define scope precisely in the technical brief before a single line is written. Additional features are priced separately.",
      },
      {
        q: "What tech stack do you use?",
        a: "Typically Next.js, TypeScript, and Postgres or Supabase. We'll recommend based on your specific requirements.",
      },
      {
        q: "Do you hand over the code?",
        a: "Yes. You own the codebase. We deliver via your repository with full documentation.",
      },
    ],
  },
  {
    id: "strategic-retainer",
    name: "Strategic Retainer",
    tagline: "Ongoing execution partnership.",
    description:
      "For businesses scaling fast that need consistent, high-quality execution across multiple areas. Monthly capacity, priority delivery, and direct founder access — month after month.",
    from: "KES 200,000 / month",
    delivered: "Minimum: 3-month engagement",
    deliverables: [
      "Monthly allocated hours across design, build, content, and growth",
      "Priority scheduling — your work moves to the front of the queue",
      "Direct founder access (async and synchronous)",
      "Monthly planning call (30 minutes)",
      "Evolving systems — we build on what we built last month",
      "Usage reporting per month",
    ],
    timeline: [
      { day: "Month 1", task: "Onboarding, priority system audit, first sprint" },
      {
        day: "Month 2+",
        task: "Ongoing execution against agreed monthly priorities",
      },
    ],
    faq: [
      {
        q: "What's the minimum commitment?",
        a: "3 months. This gives us enough runway to build systems that compound, not just tasks that tick.",
      },
      {
        q: "What if I need more capacity in a given month?",
        a: "Overflow capacity can be added at a per-hour rate. We'll flag this before charging anything extra.",
      },
      {
        q: "Can I pause the retainer?",
        a: "After the initial 3-month commitment, retainers can be paused with 30 days' notice.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-bold text-white mb-6 max-w-[18ch]">
            Productized Execution. Premium Delivery.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Six productized services. Fixed scope, fixed price, fixed timeline.
            Every engagement starts with a 15-minute discovery call and a
            fixed-price quote within 24 hours.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      <div className="border-t border-white/[0.06]">
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 md:py-28 border-b border-white/[0.06] ${
              idx % 2 === 1 ? "bg-[#0A0A0C]" : ""
            }`}
          >
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
                {/* Left: Overview */}
                <div>
                  <p className="text-blue-500 text-xs font-semibold tracking-widest uppercase mb-3">
                    Service
                  </p>
                  <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-2">
                    {service.name}
                  </h2>
                  <p className="text-zinc-500 text-sm mb-6">{service.tagline}</p>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    <div className="flex gap-3">
                      <span className="text-sm text-zinc-500 w-20 shrink-0">From</span>
                      <span className="text-sm text-white font-medium">
                        {service.from}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sm text-zinc-500 w-20 shrink-0">
                        Delivered
                      </span>
                      <span className="text-sm text-zinc-300">{service.delivered}</span>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-md inline-block transition-colors text-sm"
                  >
                    Get a Quote →
                  </Link>
                </div>

                {/* Right: Details */}
                <div className="space-y-10">
                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                      Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-zinc-400">
                          <span className="text-blue-500 mt-0.5 shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                      Timeline
                    </h3>
                    <div className="space-y-3">
                      {service.timeline.map((t) => (
                        <div
                          key={t.day}
                          className="flex gap-4 text-sm"
                        >
                          <span className="text-zinc-600 w-20 shrink-0 font-medium">
                            {t.day}
                          </span>
                          <span className="text-zinc-400">{t.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                      Common questions
                    </h3>
                    <div className="space-y-5">
                      {service.faq.map((item) => (
                        <div key={item.q}>
                          <p className="text-sm text-white font-medium mb-1.5">
                            {item.q}
                          </p>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll tell you exactly
              what you need. Fixed-price quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-8 py-4 rounded-md text-center transition-colors"
              >
                Get a Quote in 24 Hours
              </Link>
              <a
                href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20looking%20at%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-8 py-4 rounded-md text-center transition-colors"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
