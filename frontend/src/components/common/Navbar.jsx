
import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Bell,
} from "lucide-react";

import SearchBar from "./SearchBar";

// Main navigation categories
const categories = [
  "New Arrivals",
  "Men",
  "Women",
  "Modest Wear",
  "Traditional",
  "Accessories",
  "Fragrance",
  "Footwear",
  "Sale",
];

// Mega menu categories
const megaMenu = {
  Men: [
    "Panjabi",
    "Shirt",
    "T-Shirt",
    "Hoodie",
    "Pants",
    "Watches",
    "Shoes",
  ],

  Women: [
    "Hijab",
    "Borka",
    "Abaya",
    "Kurtis",
    "Saree",
    "Bags",
    "Shoes",
  ],

  "Modest Wear": [
    "Hijab",
    "Borka",
    "Abaya",
    "Niqab",
    "Modest Sets",
  ],

  Traditional: [
    "Panjabi",
    "Pajama",
    "Saree",
    "Kurti",
    "Traditional Sets",
  ],

  Accessories: [
    "Watches",
    "Sunglasses",
    "Wallets",
    "Bags",
    "Belts",
  ],

  Fragrance: [
    "Attar",
    "Perfume",
    "Body Spray",
  ],

  Footwear: [
    "Sneakers",
    "Casual Shoes",
    "Formal Shoes",
    "Sandals",
  ],
};

// Generate category URLs
const getCategoryUrl = (category) => {
  return `/shop/${category.toLowerCase().replaceAll(" ", "-")}`;
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Navigate to the product search page
  const handleSearch = (query) => {
    setSearchOpen(false);
    setMobileOpen(false);

    window.location.href = `/shop?search=${encodeURIComponent(query)}`;
  };

  // Toggle desktop mega menu
  const toggleMenu = (category) => {
    setActiveMenu((previous) =>
      previous === category ? null : category
    );
  };

  // Toggle search bar
  const toggleSearch = () => {
    setSearchOpen((previous) => !previous);
    setActiveMenu(null);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-[#191919] shadow-sm">

      {/* =====================================
          MAIN NAVBAR
      ====================================== */}

      <div className="mx-auto grid max-w-[1440px] grid-cols-3 items-center px-5 py-4 lg:px-10">

        {/* Left: Hamburger menu */}
        <div className="flex items-center justify-start">

          <button
            type="button"
            onClick={() => {
              setMobileOpen((previous) => !previous);
              setSearchOpen(false);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="transition hover:text-[#851D3A]"
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={1.7} />
            ) : (
              <Menu size={24} strokeWidth={1.7} />
            )}
          </button>

        </div>

        {/* Center: Logo */}
        <a
          href="/"
          className="justify-self-center whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl"
        >
          STYLE<span className="text-[#851D3A]">VAULT</span>
        </a>

        {/* Right: Action icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-5">

          {/* Search */}
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="transition hover:text-[#851D3A]"
          >
            {searchOpen ? (
              <X size={21} strokeWidth={1.7} />
            ) : (
              <Search size={21} strokeWidth={1.7} />
            )}
          </button>

          {/* Wishlist */}
          <a
            href="/wishlist"
            aria-label="Wishlist"
            className="hidden transition hover:text-[#851D3A] sm:block"
          >
            <Heart size={21} strokeWidth={1.7} />
          </a>

          {/* Notifications */}
          <a
            href="/notifications"
            aria-label="Notifications"
            className="hidden transition hover:text-[#851D3A] sm:block"
          >
            <Bell size={20} strokeWidth={1.7} />
          </a>

          {/* Shopping bag */}
          <a
            href="/cart"
            aria-label="Shopping bag"
            className="relative transition hover:text-[#851D3A]"
          >
            <ShoppingBag size={21} strokeWidth={1.7} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#851D3A] text-[10px] text-white">
              0
            </span>
          </a>

          {/* Account */}
          <a
            href="/account"
            aria-label="Account"
            className="hidden transition hover:text-[#851D3A] sm:block"
          >
            <UserRound size={21} strokeWidth={1.7} />
          </a>

        </div>
      </div>

      {/* =====================================
          EXPANDABLE SEARCH BAR
      ====================================== */}

      <SearchBar
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={handleSearch}
      />

      {/* =====================================
          DESKTOP CATEGORY NAVIGATION
      ====================================== */}

      <nav className="hidden border-t border-[#EAE4DC] md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-5 px-5 lg:gap-8">

          {categories.map((category) => {
            const hasMegaMenu = Boolean(megaMenu[category]);
            const isActive = activeMenu === category;

            return (
              <div
                key={category}
                className="relative py-4"
                onMouseEnter={() => {
                  if (hasMegaMenu) setActiveMenu(category);
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >

                <div className="flex items-center gap-1">

                  <a
                    href={
                      category === "New Arrivals"
                        ? "/new-arrivals"
                        : category === "Sale"
                          ? "/sale"
                          : getCategoryUrl(category)
                    }
                    className={`whitespace-nowrap text-xs transition lg:text-sm ${
                      category === "Sale"
                        ? "font-semibold text-[#851D3A]"
                        : "font-medium text-[#393431] hover:text-[#851D3A]"
                    }`}
                  >
                    {category}
                  </a>

                  {hasMegaMenu && (
                    <button
                      type="button"
                      onClick={() => toggleMenu(category)}
                      aria-label={`Toggle ${category} menu`}
                      aria-expanded={isActive}
                      className="text-[#77706A] hover:text-[#851D3A]"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                </div>

                {/* Mega menu dropdown */}
                {hasMegaMenu && isActive && (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-b-xl border border-[#EAE4DC] bg-white p-5 shadow-xl">

                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#851D3A]">
                      Shop {category}
                    </p>

                    <div className="grid gap-3">

                      {megaMenu[category].map((item) => (
                        <a
                          key={item}
                          href={getCategoryUrl(item)}
                          className="text-sm text-[#625B55] transition hover:translate-x-1 hover:text-[#851D3A]"
                        >
                          {item}
                        </a>
                      ))}

                    </div>
                  </div>
                )}

              </div>
            );
          })}

        </div>
      </nav>

      {/* =====================================
          MOBILE NAVIGATION
      ====================================== */}

      {mobileOpen && (
        <div className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-[#EAE4DC] bg-white p-5 md:hidden">

          {/* Mobile search */}
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const query = formData.get("mobileSearch")?.toString().trim();

              if (query) handleSearch(query);
            }}
            className="mb-6 flex items-center gap-3 rounded-full border border-[#E5DED6] bg-[#F8F6F3] px-4 py-3"
          >
            <Search size={18} className="text-[#851D3A]" />

            <input
              name="mobileSearch"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none"
            />

            <button type="submit" aria-label="Search">
              <ArrowRightIcon />
            </button>
          </form>

          {/* Mobile account links */}
          <div className="mb-5 grid grid-cols-3 gap-3 border-b border-[#EAE4DC] pb-5">

            <a
              href="/account"
              className="flex flex-col items-center gap-2 text-xs text-[#625B55]"
            >
              <UserRound size={20} />
              Account
            </a>

            <a
              href="/wishlist"
              className="flex flex-col items-center gap-2 text-xs text-[#625B55]"
            >
              <Heart size={20} />
              Wishlist
            </a>

            <a
              href="/notifications"
              className="flex flex-col items-center gap-2 text-xs text-[#625B55]"
            >
              <Bell size={20} />
              Notifications
            </a>

          </div>

          {/* Mobile categories */}
          <div className="grid gap-1">

            {categories.map((category) => {
              const hasMegaMenu = Boolean(megaMenu[category]);
              const isActive = activeMenu === category;

              return (
                <div
                  key={category}
                  className="border-b border-[#F0ECE7] py-3"
                >

                  <div className="flex items-center justify-between">

                    <a
                      href={
                        category === "New Arrivals"
                          ? "/new-arrivals"
                          : category === "Sale"
                            ? "/sale"
                            : getCategoryUrl(category)
                      }
                      onClick={closeMobileMenu}
                      className={`text-sm font-medium ${
                        category === "Sale"
                          ? "text-[#851D3A]"
                          : "text-[#393431]"
                      }`}
                    >
                      {category}
                    </a>

                    {hasMegaMenu && (
                      <button
                        type="button"
                        onClick={() => toggleMenu(category)}
                        aria-label={`Toggle ${category} subcategories`}
                        aria-expanded={isActive}
                        className="p-1 text-[#77706A]"
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}

                  </div>

                  {/* Mobile subcategories */}
                  {hasMegaMenu && isActive && (
                    <div className="mt-4 grid grid-cols-2 gap-4 pl-3">

                      {megaMenu[category].map((item) => (
                        <a
                          key={item}
                          href={getCategoryUrl(item)}
                          onClick={closeMobileMenu}
                          className="text-sm text-[#817870] transition hover:text-[#851D3A]"
                        >
                          {item}
                        </a>
                      ))}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      )}

    </header>
  );
}

// Small arrow icon for the mobile search form
function ArrowRightIcon() {
  return <span className="text-lg text-[#851D3A]">→</span>;
}
