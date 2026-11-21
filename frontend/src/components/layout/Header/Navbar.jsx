
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "@/assets/Images/image";
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
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchOpen(false);
    setMobileOpen(false);

    navigate(`/shop?search=${encodeURIComponent(query)}`);
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
    <header className="relative z-50 text-(--text) shadow-sm">
      <div className="mx-auto grid max-w-360 grid-cols-3 items-center px-5 py-2 lg:px-10">

        {/* Left: Hamburger - visible on all screens */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="cursor-pointer text-(--text-white) transition hover:text-(--accent)"
          >
            {mobileOpen ? (
              <X size={25} strokeWidth={1.7} />
            ) : (
              <TextAlignStart size={25} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="justify-self-center">
          <img
            src={logo.logoSvg}
            alt="StyleVault"
            className="h-12 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* Right: Action Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-5">
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="cursor-pointer text-(--text-white) transition hover:text-(--accent)"
          >
            {searchOpen ? (
              <X size={21} strokeWidth={1.7} />
            ) : (
              <Search size={21} strokeWidth={1.7} />
            )}
          </button>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="hidden text-(--text-white) transition hover:text-(--accent) sm:block"
          >
            <Heart size={21} strokeWidth={1.7} />
          </Link>

          <Link
            to="/notifications"
            aria-label="Notifications"
            className="hidden text-(--text-white) transition hover:text-(--accent) sm:block"
          >
            <Bell size={20} strokeWidth={1.7} />
          </Link>

          <Link
            to="/cart"
            aria-label="Shopping bag"
            className="relative text-(--text-white) transition hover:text-(--accent)"
          >
            <ShoppingBag size={21} strokeWidth={1.7} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-(--accent) text-[10px] text-black">
              0
            </span>
          </Link>

          <Link
            to="/login"
            aria-label="Account"
            className="hidden text-(--text-white) transition hover:text-(--accent) sm:block"
          >
            <UserRound size={21} strokeWidth={1.7} />
          </Link>
        </div>
      </div>

      {/* Search */}
      <SearchBar
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={handleSearch}
      />

      {/* Left Sidebar Drawer */}
      <MobileMenu
        mobileOpen={mobileOpen}
        onClose={closeMobileMenu}
        onSearch={handleSearch}
      />
    </header>
  );
}
