import React from "react";

interface SocialLinkItem {
  url?: string;
  label?: string;
  alt?: string;
}

interface SocialIconCardProps {
  link: SocialLinkItem;
  children: React.ReactNode;
  className?: string;
}

export default function SocialIconCard({ link, children, className }: SocialIconCardProps) {
  const href = link.url ?? "";
  const label = link.alt ?? link.label;

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <div className={`card ${className ?? ""}`}>
        <div className="card-body text-center custom-contact-card">{children}</div>
      </div>
    </a>
  );
}
