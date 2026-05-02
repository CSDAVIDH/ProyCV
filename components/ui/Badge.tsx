import type { BadgeProps } from "@/types";

export default function Badge({ children, color, className = "" }: BadgeProps) {
  if (color) {
    return (
      <span
        className={`text-xs px-2.5 py-1 rounded-lg font-medium ${className}`}
        style={{
          background: `${color}12`,
          border: `1px solid ${color}30`,
          color,
        }}
      >
        {children}
      </span>
    );
  }
  return <span className={`badge ${className}`}>{children}</span>;
}
