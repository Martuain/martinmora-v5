import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  size = "md",
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[var(--accent)] text-black font-semibold hover:bg-[var(--accent-dim)] shadow-sm",
    secondary:
      "border border-[var(--border)] text-[var(--primary)] hover:bg-white/5 hover:border-white/20",
    ghost: "text-[var(--secondary)] hover:text-[var(--primary)]",
  };

  const Component = external ? "a" : Link;

  return (
    <Component
      href={href}
      {...externalProps}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span>{children}</span>
      {variant !== "ghost" && (
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Component>
  );
}
