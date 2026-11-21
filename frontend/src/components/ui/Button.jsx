
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-(--accent) text-(--primary) hover:bg-(--accent-h)",

  secondary:
    "border border-(--border) bg-(--surface) text-(--text) hover:bg-(--surface-2)",

  outline:
    "border border-(--accent) text-(--accent-h) hover:bg-(--accent-soft)",

  ghost:
    "bg-transparent text-(--text) hover:bg-(--surface-2)",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        transition-all duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-(--accent)
        focus-visible:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  );
}
