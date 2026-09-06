import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "wireframe";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-cyan-400/40 disabled:opacity-50 disabled:cursor-not-allowed",
        size === "sm" && "px-3.5 py-1.5 text-xs gap-1.5",
        size === "md" && "px-5 py-2.5 text-sm gap-2",
        size === "lg" && "px-7 py-3.5 text-base gap-2.5 font-semibold",
        variant === "primary" &&
          "bg-cyan-500/90 hover:bg-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] active:scale-[0.98]",
        variant === "secondary" &&
          "bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-white/10 hover:border-white/25 active:scale-[0.98]",
        variant === "wireframe" &&
          "bg-white/[0.03] hover:bg-white/[0.06] text-cyan-300 border border-dashed border-cyan-500/40 hover:border-cyan-400/80",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
