import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Colteum Limited.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-500 text-sm mb-12">
            Effective date: 1 January 2026 · Last updated: 1 January 2026
          </p>

          <div className="space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Parties
              </h2>
              <p>
                These Terms of Service govern the relationship between Colteum
                Limited (&quot;Colteum&quot;), a company registered in Kenya,
                and any client or visitor who engages with our services or
                website (&quot;you&quot;, &quot;client&quot;).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Services
              </h2>
              <p>
                Colteum provides productized digital services including web
                platform builds, brand systems, growth engines, content
                production, custom infrastructure, and strategic retainers. The
                specific scope, deliverables, timeline, and price for each
                engagement are defined in a written project brief or statement
                of work agreed prior to commencement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Payment
              </h2>
              <p>
                Payment terms are as follows unless otherwise agreed in writing:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>
                  One-off projects: 50% deposit upon engagement, 50% on
                  delivery
                </li>
                <li>Retainers: 100% payment in advance per month</li>
              </ul>
              <p className="mt-3">
                Accepted payment methods: M-Pesa, Kenyan bank transfer, Wise,
                and USDC. Late payments may attract a 5% monthly fee on
                outstanding balances.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Revisions and scope
              </h2>
              <p>
                All productized services include one round of revisions (or as
                specified in the service description). Additional revisions
                beyond the included scope will be quoted and invoiced separately.
                Scope changes requested after project commencement may affect
                timeline and price; Colteum will notify you before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Intellectual property
              </h2>
              <p>
                Upon receipt of full payment, all deliverables and associated
                intellectual property created for the client are transferred to
                the client. Colteum retains the right to display completed work
                in its portfolio unless explicitly agreed otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential any non-public
                information shared during the course of the engagement. This
                obligation survives termination of the engagement for a period
                of two years.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Warranties and liability
              </h2>
              <p>
                Colteum warrants that services will be delivered with reasonable
                skill and care. Our total liability to you in connection with any
                engagement is limited to the fees paid by you for that
                engagement. We are not liable for indirect, consequential, or
                lost-profit damages.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Termination
              </h2>
              <p>
                Either party may terminate an engagement with 14 days&apos;
                written notice. In the event of termination, the client is
                responsible for payment of all work completed to the date of
                termination. Deposits are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Governing law
              </h2>
              <p>
                These Terms are governed by the laws of Kenya. Any disputes will
                be resolved in the courts of Nairobi, Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                10. Contact
              </h2>
              <p>
                For questions about these Terms:{" "}
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  hello@colteumgroup.com
                </a>
              </p>
            </section>

            <div className="pt-8 border-t border-white/[0.06]">
              <Link
                href="/privacy"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
