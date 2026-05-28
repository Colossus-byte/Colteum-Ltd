"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "./action";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const inquiryTypes = [
  "Service Project",
  "Partnership / Investment",
  "Press / Speaking",
  "Research Inquiry",
  "General",
];

const services = [
  "Launch Page Sprint",
  "Web Platform Sprint",
  "Custom Build",
  "Brand System",
  "Content & UGC System",
  "Growth Engine",
  "Business Plan & Financial Model Sprint",
  "Proposal & Funding Systems",
  "AI Visibility Starter",
  "AI Visibility Standard",
  "AI Visibility Premium",
  "Strategic Consulting",
  "Intelligence Subscription",
  "Custom Research Briefings",
  "HNW Quarterly Briefing",
  "Strategic Retainer",
];

const ventures = [
  "Product Studio",
  "Clarix Protocol",
  "Colteum Intelligence",
  "Colteum Games",
  "ProposalAI",
  "Commerce & Trade",
  "Other (specify in description)",
];

const budgets = [
  "Under KES 50,000",
  "KES 50,000 – 100,000",
  "KES 100,000 – 250,000",
  "KES 250,000 – 500,000",
  "KES 500,000+",
  "Prefer USD quote",
];

const initialState: ContactFormState = { status: "idle", message: "" };

interface ContactFormProps {
  defaultService?: string;
  defaultType?: string;
}

export function ContactForm({ defaultService, defaultType }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [inquiryType, setInquiryType] = useState(
    defaultType === "partnership" ? "Partnership / Investment" : "Service Project"
  );

  const isServiceProject = inquiryType === "Service Project";
  const isPartnership = inquiryType === "Partnership / Investment";

  if (state.status === "success") {
    return (
      <div className="glass-card rounded-xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[--success]/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={28} className="text-[--success]" />
        </div>
        <h3 className="font-display font-bold text-white text-xl mb-3">Message sent.</h3>
        <p className="text-[--text-muted] leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white placeholder-[--text-muted] text-sm focus:outline-none focus:border-[--accent-primary] transition-colors"
        />
      </div>

      {/* Email or WhatsApp */}
      <div>
        <label htmlFor="contact" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
          Email or WhatsApp *
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder="email@example.com or +254..."
          className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white placeholder-[--text-muted] text-sm focus:outline-none focus:border-[--accent-primary] transition-colors"
        />
      </div>

      {/* Inquiry type */}
      <div>
        <label htmlFor="inquiryType" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
          Inquiry Type *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white text-sm focus:outline-none focus:border-[--accent-primary] transition-colors appearance-none"
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t} style={{ backgroundColor: "#0F1B33" }}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional: Service dropdown */}
      {isServiceProject && (
        <div>
          <label htmlFor="service" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
            Service
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ""}
            className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white text-sm focus:outline-none focus:border-[--accent-primary] transition-colors appearance-none"
          >
            <option value="" style={{ backgroundColor: "#0F1B33" }}>Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s} style={{ backgroundColor: "#0F1B33" }}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Conditional: Venture dropdown */}
      {isPartnership && (
        <div>
          <label htmlFor="venture" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
            Venture
          </label>
          <select
            id="venture"
            name="venture"
            className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white text-sm focus:outline-none focus:border-[--accent-primary] transition-colors appearance-none"
          >
            <option value="" style={{ backgroundColor: "#0F1B33" }}>Select a venture...</option>
            {ventures.map((v) => (
              <option key={v} value={v} style={{ backgroundColor: "#0F1B33" }}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Budget (service projects) */}
      {isServiceProject && (
        <div>
          <label htmlFor="budget" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white text-sm focus:outline-none focus:border-[--accent-primary] transition-colors appearance-none"
          >
            <option value="" style={{ backgroundColor: "#0F1B33" }}>Select a range...</option>
            {budgets.map((b) => (
              <option key={b} value={b} style={{ backgroundColor: "#0F1B33" }}>
                {b}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="What are you building? What do you need?"
          className="w-full px-4 py-3 rounded-lg bg-[--bg-surface-1] border border-white/10 text-white placeholder-[--text-muted] text-sm focus:outline-none focus:border-[--accent-primary] transition-colors resize-none"
        />
      </div>

      {/* Error state */}
      {state.status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
          <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-red-400">{state.message}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="cta-primary w-full py-3.5 rounded-lg text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-center text-xs text-[--text-muted]">
        We reply within 24 hours, often within 2.
      </p>
    </form>
  );
}
