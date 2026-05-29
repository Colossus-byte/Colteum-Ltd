"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  className?: string;
}

const GLOW_W = 900;
const GLOW_H = 700;

export function HeroBackground({ className }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    let rafId: number;
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    let targetX = w * 0.5;
    let targetY = h * 0.35;
    let currentX = targetX;
    let currentY = targetY;

    function onResize() {
      w = container!.offsetWidth;
      h = container!.offsetHeight;
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    }

    function tick() {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      glow!.style.transform = `translate3d(${currentX - GLOW_W / 2}px,${currentY - GLOW_H / 2}px,0)`;
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Dot grid — vignette-masked wrapper, inner grid moves via transform3d */}
      <div className="hero-dot-grid-mask absolute inset-0">
        <div className="hero-dot-grid absolute" style={{ inset: -28 }} />
      </div>

      {/* Electric-blue cursor glow — GPU-composited via transform3d only */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0"
        style={{
          width: GLOW_W,
          height: GLOW_H,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,149,26,0.18) 0%, rgba(200,149,26,0.06) 45%, transparent 70%)",
          willChange: "transform",
          /* Default position: horizontally centered, ~35% down — used as static fallback */
          transform: `translate3d(calc(50vw - ${GLOW_W / 2}px), calc(35vh - ${GLOW_H / 2}px), 0)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
