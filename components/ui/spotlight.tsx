"use client";

import { useRef, useState, useEffect, useId } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const gradientId = `spotlight-${uid.replace(/[^a-zA-Z0-9]/g, "")}`;
  const [position, setPosition] = useState({ x: 400, y: 300 });
  const [opacity, setOpacity] = useState(0.45);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setPosition({ x, y });
        setOpacity(1);
      } else {
        setOpacity(0.45);
        setPosition({ x: rect.width / 2, y: rect.height / 3 });
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity, transition: "opacity 0.6s ease" }}
      >
        <defs>
          <radialGradient
            id={gradientId}
            cx={position.x}
            cy={position.y}
            r="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={fill} stopOpacity="0.18" />
            <stop offset="60%" stopColor={fill} stopOpacity="0.04" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect fill={`url(#${gradientId})`} width="100%" height="100%" />
      </svg>
    </div>
  );
}
