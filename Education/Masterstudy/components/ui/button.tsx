import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export default function Button({ variant = "default", size = "md", className = "", children, ...props }: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
