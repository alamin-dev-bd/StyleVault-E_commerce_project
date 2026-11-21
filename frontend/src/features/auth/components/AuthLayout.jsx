
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { logo } from "@/assets/Images/image";

export default function AuthLayout({
  children,
  footer,
  wide = false,
}) {
  return (
    <div className="
      relative min-h-screen
      bg-(--bg)
      text-(--text)
      transition-colors duration-300
    ">

      {/* Top Header */}
      <header className="
        absolute top-0 left-0 w-full
        flex items-center justify-center
        px-5 py-8
      ">
        <Link to="/" aria-label="StyleVault home" className="auth-logo">
          {/* Light mode logo */}
          <img
            src={logo.darklogoSvg}
            alt="StyleVault"
            className="logo-light h-12 sm:h-14 w-auto object-contain"
          />

          {/* Dark mode logo */}
          <img
            src={logo.logoSvg}
            alt=""
            aria-hidden="true"
            className="logo-dark h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        <Link
          to="/"
          aria-label="Close authentication"
          className="
            absolute right-5 sm:right-10 top-8
            p-2 rounded-full
            text-(--text-2)
            hover:bg-(--surface-2)
            transition
          "
        >
          <X size={23} strokeWidth={1.7} />
        </Link>
      </header>

      {/* Authentication Content */}
      <main className="
        min-h-screen flex items-center justify-center
        px-4 pt-28 pb-12
      ">
        <div className={`
          w-full
          ${wide ? "max-w-2xl" : "max-w-md"}
        `}>
          {children}

          {footer && (
            <div className="
              mt-8 text-center
              text-xs sm:text-sm
              text-(--muted)
              leading-relaxed
            ">
              {footer}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
