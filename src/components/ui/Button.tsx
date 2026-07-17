import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = variant === "primary" ? "btn-info primary-font-color" : "";
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
