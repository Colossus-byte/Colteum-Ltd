import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const practices = [
  { name: "Services", href: "/services" },
  { name: "Intelligence", href: "/intelligence" },
  { name: "Labs", href: "/labs" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-[#0A1628]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Left — Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Colteum
              </span>
              <span className="ml-1.5 text-xs font-mono text-[--text-muted] tracking-widest uppercase">
                Ltd
              </span>
            </Link>
            <p className="text-sm text-[--text-muted] leading-relaxed mb-2">
              Nairobi-based product studio.
            </p>
            <p className="text-sm text-[--text-muted] italic">
              Built lean. Shipped fast.
            </p>
          </div>

          {/* Middle — Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-mono text-white uppercase tracking-widest mb-4">
                Practices
              </h3>
              <ul className="space-y-2.5">
                {practices.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[--text-muted] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-xs font-mono text-white uppercase tracking-widest mt-7 mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5">
                {legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[--text-muted] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white uppercase tracking-widest mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[--text-muted] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Contact */}
          <div>
            <h3 className="text-xs font-mono text-white uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@colteumgroup.com"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-[--accent-primary] shrink-0" />
                  hello@colteumgroup.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:partnerships@colteumgroup.com"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-[--accent-primary] shrink-0" />
                  partnerships@colteumgroup.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:labs@colteumgroup.com"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-[--accent-primary] shrink-0" />
                  labs@colteumgroup.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254746089499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-white transition-colors"
                >
                  <MessageCircle size={13} className="text-[--success] shrink-0" />
                  +254 746 089 499
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[--text-muted]">
                <MapPin size={13} className="text-[--accent-primary] shrink-0" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[--text-muted] text-sm">
            © 2026 Colteum Limited. Registered in Kenya.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {/* TODO: add social URLs */}
            <a
              href="https://www.linkedin.com/in/jude-baraka-436322246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[--text-muted] hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="text-[--text-muted] hover:text-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[--text-muted] hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
