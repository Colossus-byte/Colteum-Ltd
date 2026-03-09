import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight">
                Colteum
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Global Commerce, Digital Innovation, and Strategic Growth.
              Operating across manufacturing, trade, marketing, technology,
              consulting, and investments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wide">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-[#C8A227] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-[#C8A227] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-[#C8A227] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wide">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-[#C8A227] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-[#C8A227] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Colteum Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
