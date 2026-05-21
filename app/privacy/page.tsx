import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Colteum Limited's privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[--text-muted] text-sm">
              Last updated: 1 January 2026
            </p>
          </div>

          <div className="prose-custom space-y-10 text-[--text-body]" style={{ lineHeight: 1.75 }}>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">1. Introduction</h2>
              <p>
                Colteum Limited (&ldquo;Colteum,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a company registered in Kenya,
                operating at colteumgroup.com. This Privacy Policy explains how we collect, use,
                disclose, and safeguard personal information when you visit our website or engage
                our services. By using our website, you consent to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Name and contact details (email address, phone number, or WhatsApp number) provided through our contact form.",
                  "Inquiry details including the nature of your project, budget range, and project description.",
                  "Technical data including IP address, browser type, device type, and pages visited, collected automatically through cookies and analytics tools.",
                  "Communications you send us via email, WhatsApp, or other channels.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[--accent-primary] mt-1 shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Respond to your inquiries and provide quotes for services.",
                  "Deliver services you have engaged us to perform.",
                  "Send you service updates, invoices, and related communications.",
                  "Improve our website and services through analytics.",
                  "Comply with legal obligations applicable under Kenyan law.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[--accent-primary] mt-1 shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                We do not sell, rent, or trade your personal data to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">4. Legal Basis for Processing</h2>
              <p className="text-sm">
                Under the Data Protection Act, 2019 (Kenya), we process your personal data on the
                following legal bases: (a) your consent, given when you submit our contact form or
                communicate with us; (b) the performance of a contract, when we engage to deliver
                services; (c) our legitimate interests in operating and improving our business; and
                (d) compliance with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">5. Cookies</h2>
              <p className="text-sm">
                Our website uses cookies — small text files stored on your device — to improve
                functionality and analyse site usage. We use analytics cookies (e.g., Google
                Analytics) to understand how visitors interact with our site. You may disable
                cookies through your browser settings. Declining cookies may limit some website
                functionality. By accepting our cookie banner, you consent to our use of cookies
                as described here.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">6. Data Retention</h2>
              <p className="text-sm">
                We retain personal data only as long as necessary for the purposes described in
                this policy or as required by law. Inquiry data from non-clients is retained for
                up to 12 months. Client project data is retained for 5 years after project
                completion for legal and accounting purposes, after which it is securely deleted.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">7. Third-Party Services</h2>
              <p className="text-sm">
                We use third-party services to operate our website and deliver communications.
                These include FormSubmit (contact form routing) and Google Analytics (website
                analytics). Each third party processes data in accordance with its own privacy
                policy. We ensure any third party we use provides adequate data protection.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">8. International Data Transfers</h2>
              <p className="text-sm">
                Some of our third-party service providers are based outside Kenya. When we
                transfer data internationally, we ensure that appropriate safeguards are in
                place in accordance with the Data Protection Act, 2019 (Kenya).
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">9. Your Rights</h2>
              <p className="mb-3 text-sm">
                Under the Data Protection Act, 2019 (Kenya), you have the following rights:
              </p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "The right to access personal data we hold about you.",
                  "The right to correct inaccurate personal data.",
                  "The right to request deletion of your personal data (subject to legal exceptions).",
                  "The right to object to processing of your personal data.",
                  "The right to withdraw consent at any time.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[--accent-primary] mt-1 shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@colteumgroup.com" className="text-link">
                  hello@colteumgroup.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">10. Security</h2>
              <p className="text-sm">
                We implement appropriate technical and organisational measures to protect your
                personal data against unauthorised access, loss, or destruction. However, no
                internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">11. Changes to This Policy</h2>
              <p className="text-sm">
                We may update this Privacy Policy from time to time. The updated version will be
                posted on this page with a revised &ldquo;last updated&rdquo; date. We encourage you to
                review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-xl mb-4">12. Contact</h2>
              <p className="text-sm">
                For privacy-related enquiries, contact us at:{" "}
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
