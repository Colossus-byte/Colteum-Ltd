"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Intelligence", href: "/intelligence" },
  { name: "Work", href: "/work" },
  { name: "Labs", href: "/labs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(8,14,29,0.97)] backdrop-blur-md border-b border-[rgba(255,255,255,0.055)] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/android-chrome-512x512.png"
              alt="Colteum"
              width={30}
              height={30}
              className="rounded-lg shrink-0"
            />
            <span className="font-display text-xl font-bold text-white tracking-tight group-hover:text-[--accent-primary] transition-colors duration-200">
              Colteum
            </span>
            <span className="ml-0.5 text-xs font-mono text-[var(--gold-bright)] tracking-widest uppercase mt-0.5 hidden sm:block">
              Ltd
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                  pathname === link.href
                    ? "text-[var(--cream)] bg-[var(--gold-dim)]"
                    : "text-[var(--cream-muted)] hover:text-[var(--gold)] hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="cta-primary text-sm px-5 py-2.5 rounded-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/8 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" as const }}
            className="md:hidden bg-[rgba(8,14,29,0.97)] backdrop-blur-md border-t border-[rgba(255,255,255,0.055)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-white bg-white/8"
                      : "text-[--text-muted] hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  className="cta-primary block w-full text-center text-base px-6 py-3 rounded-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
