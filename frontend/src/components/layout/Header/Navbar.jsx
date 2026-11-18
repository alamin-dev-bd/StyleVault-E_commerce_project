
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "@/assets/images";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  TextAlignStart,
  X,
  Bell,
} from "lucide-react";

import SearchBar from "./SearchBar";
import Category from "./Category";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (query) => {
    setSearchOpen(false);
    setMobileOpen(false);
    window.location.href = `/shop?search=${encodeURIComponent(query)}`;
  };

  const toggleSearch = () => {
    setSearchOpen((previous) => !previous);
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((previous) => !previous);
    setSearchOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full text-(--text) shadow-sm">
      <div className="mx-auto grid max-w-360 grid-cols-3 items-center px-5 py-2 lg:px-10">

        {/* Left: Hamburger */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="transition text-(--text-white) hover:text-(--accent) cursor-pointer"
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={1.7} />
            ) : (
              <TextAlignStart size={24} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="justify-self-center">
          <img
            src={logo.logoSvg}
            alt="StayleVault"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </Link>

        {/* Right: Action Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-5">
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="transition text-(--text-white) hover:text-(--accent) cursor-pointer"
          >
            {searchOpen ? (
              <X size={21} strokeWidth={1.7} />
            ) : (
              <Search size={21} strokeWidth={1.7} />
            )}
          </button>

          <a
            href="/wishlist"
            aria-label="Wishlist"
            className="hidden transition text-(--text-white) hover:text-(--accent) sm:block"
          >
            <Heart size={21} strokeWidth={1.7} />
          </a>

          <a
            href="/notifications"
            aria-label="Notifications"
            className="hidden transition text-(--text-white) hover:text-(--accent) sm:block"
          >
            <Bell size={20} strokeWidth={1.7} />
          </a>

          <a
            href="/cart"
            aria-label="Shopping bag"
            className="relative transition text-(--text-white) hover:text-(--accent)"
          >
            <ShoppingBag size={21} strokeWidth={1.7} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-(--accent) text-[10px] text-black">
              0
            </span>
          </a>

          <a
            href="/login"
            aria-label="Account"
            className="hidden transition text-(--text-white) hover:text-(--accent) sm:block"
          >
            <UserRound size={21} strokeWidth={1.7} />
          </a>
        </div>
      </div>

      <SearchBar
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={handleSearch}
      />

      <Category />

      <MobileMenu
        mobileOpen={mobileOpen}
        onClose={closeMobileMenu}
        onSearch={handleSearch}
      />
    </header>
  );
}
