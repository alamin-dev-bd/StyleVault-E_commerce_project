
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mode",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    // Save immediately
    localStorage.setItem("theme", nextTheme ? "dark" : "light");

    // Update HTML immediately
    document.documentElement.setAttribute(
      "data-mode",
      nextTheme ? "dark" : "light"
    );

    setIsDark(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        flex h-9 w-9 shrink-0 items-center justify-center
        rounded-full border border-(--borderp)
        bg-(--overlay-dark) text-(--textp-2)
        transition-all duration-300
        hover:bg-(--primary)
        hover:text-(--accent)
        hover:border-(--accent)
        cursor-pointer
      "
    >
      {isDark ? (
        <Sun size={17} strokeWidth={1.8} />
      ) : (
        <Moon size={17} strokeWidth={1.8} />
      )}
    </button>
  );
}
