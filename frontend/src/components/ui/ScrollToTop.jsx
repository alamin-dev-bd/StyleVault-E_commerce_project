
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop({ isChatOpen }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;

      setScrollProgress(Math.min(progress, 1));
      setIsVisible(scrollTop > 180);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular progress calculations
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference * (1 - scrollProgress);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`
  fixed bottom-22 right-5 sm:bottom-20 sm:right-22 z-90
  flex h-12 w-12 items-center justify-center
  rounded-full
  bg-(--chat-bg)
  text-(--chat-text)
  shadow-lg shadow-black/10
  border border-(--border)
  transition-all duration-500 ease-out
  hover:-translate-y-1
  hover:shadow-xl
  hover:shadow-black/15
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-(--accent-h)
  cursor-pointer
  ${isVisible && !isChatOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-8 scale-75 opacity-0"
        }
`}
    >
      {/* Progress Ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        {/* Background Ring */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="var(--border)"
          strokeWidth="2.5"
        />

        {/* Animated Progress Ring */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="var(--chat-text)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>

      <FaChevronUp size={19} strokeWidth={2.2} />
    </button>
  );
}
