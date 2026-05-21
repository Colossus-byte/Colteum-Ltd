import { cn } from "@/lib/utils";

interface PlaceholderAssetProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export function PlaceholderAsset({
  label,
  className,
  aspectRatio = "aspect-video",
}: PlaceholderAssetProps) {
  return (
    <div className={cn("placeholder-asset rounded-xl w-full", aspectRatio, className)}>
      {label && <span className="placeholder-label">{label}</span>}
    </div>
  );
}
