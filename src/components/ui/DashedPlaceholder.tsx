import React from "react";
import { cn } from "@/lib/utils";

interface DashedPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export function DashedPlaceholder({
  className,
  label,
  sublabel,
  icon,
  ...props
}: DashedPlaceholderProps) {
  return (
    <div
      className={cn(
        "dashed-wireframe rounded-xl flex flex-col items-center justify-center p-4 text-center select-none group",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-2 text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
          {icon}
        </div>
      )}
      <span className="text-xs font-mono font-medium text-slate-300 group-hover:text-white transition-colors tracking-wide">
        {label}
      </span>
      {sublabel && (
        <span className="text-[10px] text-slate-500 font-mono mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
}
