import React, { useEffect, useState } from "react";

interface CopyableContactCardProps {
  value: string;
  copyLabel: string;
  copiedMessage: string;
  initialIcon: React.ReactElement;
  copyIcon: React.ReactElement;
  successIcon: React.ReactElement;
  href?: string;
  isCopyable?: boolean;
}

export default function CopyableContactCard({
  value,
  copyLabel,
  copiedMessage,
  initialIcon,
  copyIcon,
  successIcon,
  href,
  isCopyable = true,
}: CopyableContactCardProps) {
  const [icon, setIcon] = useState<React.ReactElement>(initialIcon);
  const [text, setText] = useState<string>(value);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const handleCopy = async () => {
    if (!isDesktop || !isCopyable || !navigator.clipboard?.writeText) return;

    await navigator.clipboard.writeText(value);
  };

  const handleMouseEnter = () => {
    if (!isDesktop || !isCopyable) return;

    setIcon(copyIcon);
    setText(copyLabel);
  };

  const handleMouseLeave = () => {
    if (!isDesktop || !isCopyable) return;

    setIcon(initialIcon);
    setText(value);
  };

  const handleMouseDownCapture = () => {
    if (!isDesktop || !isCopyable) return;

    setIcon(successIcon);
    setText(copiedMessage);
  };

  const content = (
    <div className="card-body text-center custom-contact-card">
      {icon}
      <p className="m-0 primary-font-color link">{text}</p>
    </div>
  );

  if (!isDesktop && href) {
    return (
      <a href={href} className="card text-decoration-none">
        {content}
      </a>
    );
  }

  if (!isCopyable) {
    return (
      <a href={href} className="card text-decoration-none">
        {content}
      </a>
    );
  }

  return (
    <div
      className="card"
      onClick={handleCopy}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDownCapture={handleMouseDownCapture}
    >
      {content}
    </div>
  );
}
