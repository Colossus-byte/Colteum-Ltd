import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Colteum Limited's terms of service — governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 pb-32">
        <div className="section-container max-w-3xl">
          <div className="mb-12">
            <p className="text-xs font-mono text-[--text-muted] uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="font-display font-bold text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Terms of Service
            </h1>
            <p className="text-[--text-muted] text-sm">
              Last updated: 1 January 2026
            </p>
          </div>

          <div className="space-y-10 text-[--text-body]" style={{ lineHeight: 1.75 }}>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">1. Agreement</h2>
              <p className="text-sm">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website
                at colteumgroup.com and any services provided by Colteum Limited (&ldquo;Colteum,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a company registered in Kenya. By accessing our website
                or engaging our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">2. Services</h2>
              <p className="text-sm mb-3">
                Colteum provides productized digital services including website development,
                brand systems, content production, growth infrastructure, Web3 development,
                research and intelligence publishing, and strategic consulting. All services
                are governed by a separate service agreement or statement of work agreed upon
                before engagement commences.
              </p>
              <p className="text-sm">
                Nothing on this website constitutes a binding offer of services. A binding
                agreement is formed only when both parties have signed a written engagement
                agreement or statement of work.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">3. Intellectual Property</h2>
              <p className="text-sm mb-3">
                All content on this website — including text, design, graphics, and code — is
                the property of Colteum Limited and protected under applicable copyright law.
                You may not reproduce, distribute, or create derivative works without our
                prior written consent.
              </p>
              <p className="text-sm">
                Deliverables produced for clients under a service engagement are governed by
                the intellectual property provisions in the applicable service agreement.
                Unless otherwise specified, full ownership of deliverables transfers to the
                client upon receipt of full payment.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">4. Pricing and Payment</h2>
              <p className="text-sm mb-3">
                All prices displayed on this website are indicative &ldquo;from&rdquo; prices and subject
                to project scope. Final pricing is confirmed in the engagement agreement.
                Prices are quoted in Kenyan Shillings (KES) by default. International clients
                may be quoted in USD where requested.
              </p>
              <p className="text-sm">
                Payment terms, milestones, and accepted methods (M-Pesa, bank transfer, Wise,
                USDC) are defined in the engagement agreement. Work does not commence until
                any required deposit is received.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">5. Intelligence and Research</h2>
              <p className="text-sm">
                Content published by Colteum Intelligence — including research reports, briefings,
                sector analyses, and theses — is for educational and informational purposes only.
                Nothing published by Colteum Intelligence constitutes investment advice, financial
                advice, or a recommendation to buy or sell any asset. Readers act on research
                content entirely at their own risk. Colteum Limited is not a regulated financial
                advisor and does not hold any regulatory authorisation to provide investment advice.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">6. Limitation of Liability</h2>
              <p className="text-sm">
                To the maximum extent permitted by applicable law, Colteum Limited shall not
                be liable for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of our website or services. Our total liability
                in connection with any service shall not exceed the amount paid by you for
                that specific service in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">7. Warranties and Representations</h2>
              <p className="text-sm">
                Our website and services are provided &ldquo;as is&rdquo; without warranties of any kind,
                express or implied, except as expressly stated in a written service agreement.
                We do not warrant that our website will be uninterrupted, error-free, or free
                of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">8. Third-Party Links</h2>
              <p className="text-sm">
                Our website may contain links to third-party websites including client project
                sites and venture platforms. These links are provided for convenience only.
                Colteum has no control over, and assumes no responsibility for, the content or
                practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">9. Governing Law</h2>
              <p className="text-sm">
                These Terms are governed by and construed in accordance with the laws of Kenya.
                Any disputes arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of Kenya.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">10. Changes to These Terms</h2>
              <p className="text-sm">
                We reserve the right to update these Terms at any time. Updated Terms will be
                posted on this page with a revised &ldquo;last updated&rdquo; date. Continued use of our
                website or services after any update constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">11. Contact</h2>
              <p className="text-sm">
                For questions regarding these Terms, contact us at:{" "}
                <a href="mailto:hello@colteumgroup.com" className="text-link">
                  hello@colteumgroup.com
                </a>
                . Colteum Limited, Nairobi, Kenya.
              </p>
            </section>

          </div>

          <div className="mt-16 pt-8 border-t border-white/8">
            <Link href="/" className="text-link text-sm inline-flex items-center gap-1">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
