import React from "react";
import "./TechBadge.css";

interface TechBadgeProps {
  children: React.ReactNode;
}

export default function TechBadge({ children }: TechBadgeProps) {

  return <span className="tech-badge px-2 py-1 rounded text-sm fw-semibold">{children}</span>;
}
