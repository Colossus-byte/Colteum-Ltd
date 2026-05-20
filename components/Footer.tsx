import Link from "next/link";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/labs", label: "Labs" },
  { href: "/contact", label: "Contact" },
];

const ventureLinks = [
  { href: "https://clarixprotocol.com", label: "Clarix Protocol", external: true },
  { href: "/labs#games", label: "Colteum Games", external: false },
  { href: "/labs#commerce", label: "Commerce & Trade", external: false },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "https://linkedin.com/company/colteum", label: "LinkedIn" },
  { href: "https://twitter.com/colteumgroup", label: "X" },
  { href: "https://instagram.com/colteumgroup", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Brand */}
          <div>
            <p
              className="text-lg font-bold text-white tracking-tight mb-2"
              style={{ fontFamily: "var(--font-display), var(--font-sans), system-ui" }}
            >
              Colteum Limited
            </p>
            <p className="text-sm text-zinc-400 mb-1">
              Nairobi-based product studio.
            </p>
            <p className="text-sm text-zinc-600 italic">
              Built lean. Shipped fast.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                Company
              </p>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                Ventures
              </p>
              <ul className="space-y-2.5 mb-8">
                {ventureLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                Legal
              </p>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  hello@colteumgroup.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:partnerships@colteumgroup.com"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  partnerships@colteumgroup.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:labs@colteumgroup.com"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  labs@colteumgroup.com
                </a>
              </li>
              <li className="pt-0.5">
                <a
                  href="https://wa.me/254746089499?text=Hi%20Colteum%2C%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  WhatsApp: +254 746 089 499
                </a>
              </li>
              <li className="text-sm text-zinc-600">Nairobi, Kenya</li>
            </ul>

            <div className="flex gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-zinc-700 text-center">
            © 2026 Colteum Limited. Registered in Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
