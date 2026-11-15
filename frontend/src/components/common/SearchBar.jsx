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

  // Focus input when opened
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Close on Escape
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
      <div className="border-b border-[#EAE4DC] bg-[#FDFBF9]">
        <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
          {/* Search Input */}
          <form onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <div className="pointer-events-none absolute left-4 text-[#851D3A]">
                <Search size={18} strokeWidth={2.2} />
              </div>

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Panjabi, Hijab, Perfume, Shoes..."
                className="w-full rounded-full border border-[#E5DED6] bg-white py-3.5 pl-12 pr-28 text-sm text-[#191919] outline-none transition placeholder:text-[#9A928B] focus:border-[#851D3A] focus:ring-2 focus:ring-[#851D3A]/15"
                tabIndex={isOpen ? 0 : -1}
              />

              {/* Clear + Submit buttons */}
              <div className="absolute right-2 flex items-center gap-1.5">
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#8A8179] transition hover:bg-[#F3EDE6] hover:text-[#851D3A]"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}

                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#851D3A] text-white transition hover:bg-[#6F1530] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Search"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium text-[#6B635C]">
              Popular:
            </span>

            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handlePopular(item)}
                className="rounded-full border border-[#E5DED6] bg-white px-3 py-1 text-xs text-[#49423D] transition hover:border-[#851D3A] hover:bg-[#851D3A]/5 hover:text-[#851D3A]"
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