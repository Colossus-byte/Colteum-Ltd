import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col justify-between space-y-4 group/bento",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="font-display font-bold text-text-primary mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-text-muted text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
