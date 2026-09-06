import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "purple" | "neutral" | "wireframe";
}

export function Badge({
  className,
  variant = "cyan",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase transition-colors",
        variant === "cyan" &&
          "bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.15)]",
        variant === "purple" &&
          "bg-purple-950/40 text-purple-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]",
        variant === "neutral" &&
          "bg-slate-800/60 text-slate-300 border border-white/10",
        variant === "wireframe" &&
          "bg-white/[0.02] text-slate-400 border border-dashed border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
