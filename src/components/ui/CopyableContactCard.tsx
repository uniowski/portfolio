import React, { useState } from "react";

interface CopyableContactCardProps {
  email: string;
  copyLabel: string;
  copiedMessage: string;
  initialIcon: React.ReactElement;
  copyIcon: React.ReactElement;
  successIcon: React.ReactElement;
}

export default function CopyableContactCard({
  email,
  copyLabel,
  copiedMessage,
  initialIcon,
  copyIcon,
  successIcon,
}: CopyableContactCardProps) {
  const [icon, setIcon] = useState<React.ReactElement>(initialIcon);
  const [text, setText] = useState<string>(email);

  return (
    <div
      className="card"
      onClick={() => {
        navigator.clipboard.writeText(email);
      }}
      onMouseEnter={() => {
        setIcon(copyIcon);
        setText(copyLabel);
      }}
      onMouseLeave={() => {
        setIcon(initialIcon);
        setText(email);
      }}
      onMouseDownCapture={() => {
        setIcon(successIcon);
        setText(copiedMessage);
      }}
    >
      <div className="card-body text-center custom-contact-card">
        {icon}
        <p className="m-0 primary-font-color link">{text}</p>
      </div>
    </div>
  );
}
