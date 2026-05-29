import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  hover?: boolean;
  /** "default" uses the standard glass-card hover; "static" disables hover transforms entirely */
  variant?: "default" | "static";
}

export function GlassCard({
  className,
  style,
  children,
  hover = true,
  variant = "default",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card",
        hover && variant === "default" && "cursor-default",
        hover && variant === "static" && "cursor-default [&]:hover:transform-none [&]:hover:box-shadow-none",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
