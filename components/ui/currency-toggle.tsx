"use client";

import { createContext, useContext, useState, useEffect, useId, ReactNode } from "react";

type Currency = "KES" | "USD";

interface CurrencyContextValue {
  currency: Currency;
  toggle: () => void;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "KES",
  toggle: () => {},
});

export function CurrencyProvider({
  children,
  defaultCurrency,
}: {
  children: ReactNode;
  defaultCurrency: Currency;
}) {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);

  useEffect(() => {
    const saved = localStorage.getItem("colteum-currency") as Currency | null;
    if (saved === "KES" || saved === "USD") setCurrency(saved);
  }, []);

  function toggle() {
    setCurrency((prev) => {
      const next = prev === "KES" ? "USD" : "KES";
      localStorage.setItem("colteum-currency", next);
      return next;
    });
  }

  return (
    <CurrencyContext.Provider value={{ currency, toggle }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function CurrencyToggle() {
  const { currency, toggle } = useCurrency();
  const id = useId();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${currency === "KES" ? "USD" : "KES"}`}
      aria-describedby={`currency-desc-${id}`}
      className="inline-flex items-center rounded-lg border border-white/10 overflow-hidden text-xs font-mono shrink-0"
    >
      <span
        className={`px-3 py-2 transition-colors duration-150 ${
          currency === "KES"
            ? "bg-[--accent-primary] text-white"
            : "bg-white/4 text-[--text-muted] hover:text-white"
        }`}
      >
        KES
      </span>
      <span
        className={`px-3 py-2 transition-colors duration-150 ${
          currency === "USD"
            ? "bg-[--accent-primary] text-white"
            : "bg-white/4 text-[--text-muted] hover:text-white"
        }`}
      >
        USD
      </span>
    </button>
  );
}
