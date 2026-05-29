import Link from "next/link";

export default function CTABand() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #A67A10, var(--gold), #D4A020)",
        padding: "38px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "19px",
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Ready to build something?
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.72)",
            fontWeight: 300,
            margin: "4px 0 0 0",
          }}
        >
          Tell us what you need. We&rsquo;ll tell you how fast we can ship it.
        </p>
      </div>
      <Link
        href="/contact"
        style={{
          background: "#ffffff",
          color: "var(--gold)",
          padding: "12px 28px",
          borderRadius: "3px",
          fontWeight: 600,
          fontSize: "13px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
          display: "inline-block",
        }}
      >
        Get a Quote →
      </Link>
    </div>
  );
}
