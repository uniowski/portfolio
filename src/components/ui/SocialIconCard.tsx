import React from "react";

interface SocialIconCardProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SocialIconCard({ href, children, className }: SocialIconCardProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className={`card ${className ?? ""}`}>
        <div className="card-body text-center custom-contact-card">{children}</div>
      </div>
    </a>
  );
}
