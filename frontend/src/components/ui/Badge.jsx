
const variants = {
  default: "bg-(--surface-2) text-(--text-2)",
  primary: "bg-(--primary-soft) text-(--primary)",
  accent: "bg-(--accent-soft) text-(--accent-h)",
  success: "bg-green-100 text-green-700",
  danger: "bg-red-100 text-red-700",
  dark: "bg-(--primary) text-white",
};

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) {
  const sizes = {
    sm: "px-2 py-1 text-[10px]",
    md: "px-3 py-1.5 text-xs",
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full font-semibold
        whitespace-nowrap
        ${variants[variant] || variants.default}
        ${sizes[size] || sizes.sm}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
