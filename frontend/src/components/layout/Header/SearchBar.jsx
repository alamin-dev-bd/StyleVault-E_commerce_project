
import { useEffect, useRef, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";

const popularSearches = [
  "Panjabi",
  "Hijab",
  "Perfume",
  "Watch",
  "Shoes",
  "Abaya",
];

export default function SearchBar({ isOpen, onClose, onSearch }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    onSearch(trimmed);
  };

  const handlePopular = (term) => {
    setQuery(term);
    onSearch(term);
  };

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="border-b border-(--borderp)">
        <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
          <form onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <div className="pointer-events-none absolute left-4 text-(--accent) ">
                <Search size={18} strokeWidth={2.2} />
              </div>

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Panjabi, Hijab, Perfume, Shoes..."
                className="w-full rounded-full border border-(--borderp) bg-(--bg2)/20 py-3.5 pl-12 pr-28 text-sm text-(--text-white) outline-none transition placeholder:text-(--muted) focus:border-(--primaryp) focus:ring-2 focus:ring-(--primaryp-soft)"
                tabIndex={isOpen ? 0 : -1}
              />

              <div className="absolute right-2 flex items-center gap-1.5">
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-(--muted) transition hover:bg-(--accent-h) hover:text-(--text-white) cursor-pointer "
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}

                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-(--accent) text-white transition hover:bg-(--accent-h) cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Search"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium text-(--muted)">
              Popular:
            </span>

            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handlePopular(item)}
                className="rounded-full border border-(--borderp) bg-(--bg2)/30 px-3 py-1 text-xs text-(--textp-2) transition hover:border-(--primary) hover:bg-(--accent-h) hover:text-(--text-white) cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
