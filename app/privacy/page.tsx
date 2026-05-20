import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Colteum Limited.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-sm mb-12">
            Effective date: 1 January 2026 · Last updated: 1 January 2026
          </p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Who we are
              </h2>
              <p>
                Colteum Limited (&quot;Colteum&quot;, &quot;we&quot;,
                &quot;our&quot;) is a company registered in Kenya. Our
                principal place of business is Nairobi, Kenya. We operate the
                website at colteumgroup.com and associated subdomains.
              </p>
              <p className="mt-3">
                Contact:{" "}
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  hello@colteumgroup.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Information we collect
              </h2>
              <p>
                We collect information you provide directly to us, including:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Name and email address (contact form submissions)</li>
                <li>
                  Message content and inquiry type (contact form submissions)
                </li>
                <li>Technical data (IP address, browser type, pages visited)</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information directly. Any payment
                processing is handled by third-party providers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. How we use your information
              </h2>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>To respond to your inquiries and provide our services</li>
                <li>
                  To send transactional communications related to services you
                  have engaged
                </li>
                <li>To improve our website and service offerings</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Cookies
              </h2>
              <p>
                We use essential cookies to operate this website. We also use
                analytics cookies (Google Analytics) to understand how visitors
                use the site. You can opt out of analytics cookies by declining
                our cookie notice. Disabling essential cookies may affect site
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Data retention
              </h2>
              <p>
                We retain contact form submissions for up to 24 months to
                support business operations and follow-up. You may request
                deletion of your data at any time by emailing{" "}
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  hello@colteumgroup.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Your rights
              </h2>
              <p>
                Under applicable Kenyan data protection law (Data Protection
                Act, 2019), you have the right to access, correct, or delete
                your personal data. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  hello@colteumgroup.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Third-party services
              </h2>
              <p>
                This website uses the following third-party services, each
                subject to their own privacy policies:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Vercel (hosting and deployment)</li>
                <li>Google Analytics (website analytics)</li>
                <li>FormSubmit (form submission processing)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The
                effective date at the top of this page will be updated
                accordingly. Continued use of the site following an update
                constitutes acceptance of the revised policy.
              </p>
            </section>

            <div className="pt-8 border-t border-white/[0.06]">
              <Link
                href="/terms"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
