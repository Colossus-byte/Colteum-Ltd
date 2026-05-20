"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitContactForm, type FormState } from "./action";

const initialState: FormState = { success: false, error: null };

const inquiryTypes = [
  "Service Project",
  "Partnership / Investment",
  "Press / Speaking",
  "General",
];

const ventures = [
  "Clarix Protocol",
  "Colteum Games",
  "Commerce & Trade",
  "Investments & Ventures",
];

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );
  const [inquiry, setInquiry] = useState("");

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="section-container">
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold text-white mb-4 max-w-[16ch]">
            Tell us what you&apos;re building.
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            Fixed-price quote within 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-10 md:py-16 border-t border-white/[0.06]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
            {/* Form */}
            <div>
              {state.success ? (
                <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-xl p-8">
                  <h2 className="text-xl font-semibold text-white mb-3">
                    Got it — we&apos;ll be in touch within 24 hours.
                  </h2>
                  <p className="text-zinc-400 mb-6">
                    Check your inbox. If you need something faster, WhatsApp is
                    the quickest route.
                  </p>
                  <a
                    href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20following%20up%20on%20my%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Open WhatsApp →
                  </a>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-zinc-400 mb-2"
                      >
                        Name <span className="text-zinc-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jude Baraka"
                        className="w-full bg-[#131316] border border-white/[0.08] rounded-md px-4 py-3 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-zinc-400 mb-2"
                      >
                        Email <span className="text-zinc-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#131316] border border-white/[0.08] rounded-md px-4 py-3 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry"
                      className="block text-sm text-zinc-400 mb-2"
                    >
                      Inquiry type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={inquiry}
                      onChange={(e) => setInquiry(e.target.value)}
                      className="w-full bg-[#131316] border border-white/[0.08] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none text-white"
                    >
                      <option value="" className="text-zinc-600 bg-[#131316]">
                        Select one…
                      </option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#131316]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {inquiry === "Partnership / Investment" && (
                    <div>
                      <label
                        htmlFor="venture"
                        className="block text-sm text-zinc-400 mb-2"
                      >
                        Which venture?
                      </label>
                      <select
                        id="venture"
                        name="venture"
                        className="w-full bg-[#131316] border border-white/[0.08] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none text-white"
                      >
                        <option value="" className="bg-[#131316]">
                          Select venture…
                        </option>
                        {ventures.map((v) => (
                          <option key={v} value={v} className="bg-[#131316]">
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-zinc-400 mb-2"
                    >
                      Message <span className="text-zinc-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us what you're building, what you need, and your timeline…"
                      className="w-full bg-[#131316] border border-white/[0.08] rounded-md px-4 py-3 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>

                  {state.error && (
                    <p className="text-sm text-red-400">{state.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-8 py-3.5 rounded-md transition-colors w-full sm:w-auto"
                  >
                    {pending ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Faster route
                </p>
                <a
                  href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#131316] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors"
                >
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Start on WhatsApp
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      +254 746 089 499
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Email directly
                </p>
                <div className="space-y-3">
                  {[
                    {
                      address: "hello@colteumgroup.com",
                      note: "General & service inquiries",
                    },
                    {
                      address: "partnerships@colteumgroup.com",
                      note: "Partnerships & investment",
                    },
                    {
                      address: "labs@colteumgroup.com",
                      note: "Colteum Labs & ventures",
                    },
                  ].map((e) => (
                    <div key={e.address}>
                      <a
                        href={`mailto:${e.address}`}
                        className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        {e.address}
                      </a>
                      <p className="text-xs text-zinc-600 mt-0.5">{e.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Response time
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Fixed-price quote within 24 hours. For WhatsApp: typically
                  within 2 hours during Nairobi business hours (Mon–Fri,
                  8am–6pm EAT).
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Location
                </p>
                <p className="text-sm text-zinc-400">Nairobi, Kenya</p>
                <p className="text-xs text-zinc-600 mt-1">
                  East Africa Time (UTC+3)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
