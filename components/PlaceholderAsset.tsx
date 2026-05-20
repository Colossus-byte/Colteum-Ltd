import { cn } from "@/lib/utils";

interface PlaceholderAssetProps {
  replace: string;
  label: string;
  className?: string;
}

export default function PlaceholderAsset({
  replace,
  label,
  className,
}: PlaceholderAssetProps) {
  return (
    <div
      className={cn("placeholder-asset", className)}
      data-replace={replace}
      role="img"
      aria-label={label}
    >
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
