import React from "react";

type Variant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

const styles: Record<Variant, React.CSSProperties> = {
  default: {
    backgroundColor: "#3b82f6", // blue
    color: "white",
    border: "none",
  },
  secondary: {
    backgroundColor: "#e5e7eb", // gray-200
    color: "#111827", // gray-900
    border: "none",
  },
  destructive: {
    backgroundColor: "#ef4444", // red-500
    color: "white",
    border: "none",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#111827",
    border: "1px solid #d1d5db", // gray-300
  },
};

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "9999px",
  padding: "4px 10px",
  fontSize: "12px",
  fontWeight: 600,
  transition: "all 0.2s ease-in-out",
};

export function Badge({ variant = "default", style, ...props }: BadgeProps) {
  return (
    <div style={{ ...baseStyle, ...styles[variant], ...style }} {...props} />
  );
}
