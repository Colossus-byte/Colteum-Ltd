"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="rounded-xl max-w-2xl mx-auto p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#142042] border border-white/10 shadow-2xl">
        <p className="text-sm text-[--text-muted] flex-1 leading-relaxed">
          We use cookies to improve your experience and analyse site usage.{" "}
          <a href="/privacy" className="text-link">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="cta-primary text-sm px-4 py-2 rounded-lg"
          >
            Accept
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-[--text-muted] hover:text-white transition-colors p-1"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
