import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({ className, children, hover = true }: GlassCardProps) {
  return (
    <div className={cn("glass-card rounded-xl", hover && "cursor-default", className)}>
      {children}
    </div>
  );
}
