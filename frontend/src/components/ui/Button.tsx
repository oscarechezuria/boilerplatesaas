import React from "react"
// opcional, una función para manejar clases condicionales (ver abajo)

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  expanded?: boolean;
  haspopup?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
  variant?: "primary" | "secondary" | "danger" | "blue" ;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};


export default function Button({children, onClick, type = "button", expanded, haspopup, variant = "primary", size = "md", disabled=false  , className, icon}: ButtonProps) {
  
  const sizeOptions = {
  sm: "h-10 text-label px-4",
  md: "h-12 text-body px-6",
  lg: "h-14 text-heading px-8",
};

const variantOptions = {
  primary: "bg-secondary text-primary",
  secondary: "bg-primary text-secondary",
  danger: "bg-red-600 text-primary",
  blue: "bg-blue-600 text-primary"
}

  const baseClasses: string = `inline-flex items-center gap-6 rounded-xl ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`;
  const sizeClasses: string = sizeOptions[size]
  const variantClasses: string =  variantOptions[variant]
  const otherClasses: string | undefined = className

  const allClasses = [baseClasses, sizeClasses, variantClasses, otherClasses].filter(Boolean).join(" ");

  return (
    <button
      onClick={onClick}
      type={type}
      aria-expanded={expanded}
      aria-haspopup={haspopup}
      className={allClasses}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

