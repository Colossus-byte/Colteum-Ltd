"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("colteum-cookies");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("colteum-cookies", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:px-6 bg-[#131316] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-zinc-400 max-w-2xl">
          This site uses cookies to improve your experience. See our{" "}
          <Link
            href="/privacy"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
