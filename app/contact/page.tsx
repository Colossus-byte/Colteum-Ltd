import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a fixed-price quote within 24 hours. Tell us what you're building and we'll get back to you fast.",
  openGraph: {
    title: "Contact Colteum",
    description: "Tell us what you're building. Fixed-price quote within 24 hours.",
  },
};

interface ContactPageProps {
  searchParams: Promise<{ service?: string; type?: string }>;
}

const serviceSlugToLabel: Record<string, string> = {
  "launch-page-sprint": "Launch Page Sprint",
  "web-platform-sprint": "Web Platform Sprint",
  "custom-build": "Custom Build",
  "brand-system": "Brand System",
  "ugc-system": "Content & UGC System",
  "growth-engine": "Growth Engine",
  "business-plan-sprint": "Business Plan & Financial Model Sprint",
  "proposal-systems": "Proposal & Funding Systems",
  "ai-visibility-starter": "AI Visibility Starter",
  "ai-visibility-standard": "AI Visibility Standard",
  "ai-visibility-premium": "AI Visibility Premium",
  "strategic-consulting": "Strategic Consulting",
  "intelligence-subscription": "Intelligence Subscription",
  "custom-research": "Custom Research Briefings",
  "hnw-briefing": "HNW Quarterly Briefing",
  "strategic-retainer": "Strategic Retainer",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultService = params.service ? (serviceSlugToLabel[params.service] ?? "") : "";
  const defaultType = params.type ?? "";

  return (
    <div className="pt-20">
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg-surface-1]/40 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="text-xs font-mono text-[--accent-primary] uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Tell us what you&rsquo;re building.
            </h1>
            <p className="text-xl text-[--text-muted] max-w-xl leading-relaxed">
              Fixed-price quote within 24 hours. No obligation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <GlassCard className="p-8">
                  <ContactForm defaultService={defaultService} defaultType={defaultType} />
                </GlassCard>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn delay={0.1}>
                {/* Response promise */}
                <GlassCard className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[--accent-primary]/10 flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-[--accent-primary]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white mb-1">Fast response</p>
                      <p className="text-xs text-[--text-muted] leading-relaxed">
                        We reply within 24 hours, often within 2.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.15}>
                {/* WhatsApp */}
                <GlassCard className="p-6">
                  <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-4">
                    Prefer WhatsApp?
                  </p>
                  <a
                    href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20interested%20in%20working%20with%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white hover:text-[--accent-primary] transition-colors"
                  >
                    <MessageCircle size={18} className="text-[--success] shrink-0" />
                    +254 746 089 499
                  </a>
                  <p className="text-xs text-[--text-muted] mt-2 ml-7">
                    Message us directly and we&rsquo;ll respond fast.
                  </p>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                {/* Email */}
                <GlassCard className="p-6">
                  <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-4">
                    Email us directly
                  </p>
                  <a
                    href="mailto:hello@colteumgroup.com"
                    className="flex items-center gap-3 text-sm text-white hover:text-[--accent-primary] transition-colors"
                  >
                    <Mail size={16} className="text-[--accent-primary] shrink-0" />
                    hello@colteumgroup.com
                  </a>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.25}>
                {/* Calendly placeholder */}
                <GlassCard className="p-6">
                  <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-4">
                    Book a Call
                  </p>
                  <div
                    className="placeholder-asset rounded-lg h-32"
                    data-replace="calendly-embed"
                  >
                    <span className="placeholder-label">
                      [Calendly embed — TODO: add booking link]
                    </span>
                  </div>
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
