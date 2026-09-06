import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "glass" | "dashed" | "glow";
}

export function Card({
  className,
  hover = false,
  variant = "glass",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
        variant === "glass" && "glass-panel",
        variant === "dashed" && "dashed-wireframe",
        variant === "glow" && "glass-panel border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.06)]",
        hover && "glass-panel-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
