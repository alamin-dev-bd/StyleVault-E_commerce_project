
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  ShoppingBag,
  Heart,
  UserRound,
  Bell,
  Tag,
  Sparkles,
} from "lucide-react";

// Main categories
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

// Category submenus
const megaMenu = {
  Men: ["Panjabi", "Shirt", "T-Shirt", "Hoodie", "Pants", "Watches", "Shoes"],
  Women: ["Hijab", "Borka", "Abaya", "Kurtis", "Saree", "Bags", "Shoes"],
  "Modest Wear": ["Hijab", "Borka", "Abaya", "Niqab", "Modest Sets"],
  Traditional: ["Panjabi", "Pajama", "Saree", "Kurti", "Traditional Sets"],
  Accessories: ["Watches", "Sunglasses", "Wallets", "Bags", "Belts"],
  Fragrance: ["Attar", "Perfume", "Body Spray"],
  Footwear: ["Sneakers", "Casual Shoes", "Formal Shoes", "Sandals"],
};

// Category URL
const getCategoryUrl = (category) =>
  `/shop/${category.toLowerCase().replaceAll(" ", "-")}`;

// Main category URL
const getMainCategoryUrl = (category) => {
  if (category === "New Arrivals") return "/new-arrivals";
  if (category === "Sale") return "/sale";

  return getCategoryUrl(category);
};

export default function MobileMenu({ mobileOpen, onClose, onSearch }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory((previous) =>
      previous === category ? null : category
    );
  };

  const handleLinkClick = () => {
    setActiveCategory(null);
    onClose();
  };

  const handleSearchClick = () => {
    onClose();
    onSearch?.("");
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ${mobileOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
          }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-[100] flex h-dvh w-[85%] max-w-[380px] flex-col border-r border-(--border) bg-(--bg) shadow-2xl transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-label="Main navigation"
        aria-hidden={!mobileOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-(--border) bg-(--surface) px-5 py-5">
          <div>
            <p className="text-lg font-bold tracking-wide text-(--text)">
              Explore
            </p>

            <p className="mt-0.5 text-xs text-(--muted)">
              Discover your style
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-(--border) text-(--text-2) transition hover:border-(--accent) hover:bg-(--accent-soft) hover:text-(--accent)"
          >
            <X size={19} />
          </button>
        </div>

        {/* Customer Quick Actions */}
        <div className="grid grid-cols-4 gap-2 border-b border-(--border) bg-(--surface) px-4 py-4">
          {[
            { to: "/login", label: "Account", Icon: UserRound },
            { to: "/wishlist", label: "Wishlist", Icon: Heart },
            { to: "/cart", label: "Cart", Icon: ShoppingBag },
            { to: "/notifications", label: "Alerts", Icon: Bell },
          ].map(({ to, label, Icon }) => (
            <Link
              key={label}
              to={to}
              onClick={handleLinkClick}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--bg) px-1 py-3 text-(--text-2) transition-all duration-200 hover:border-(--accent) hover:bg-(--accent-soft) hover:text-(--hover-text)"
            >
              <Icon
                size={19}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />

              <span className="text-[10px] font-semibold sm:text-[11px]">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">

          {/* Main Menu */}
          <div className="mb-7">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-(--muted)">
              Main Menu
            </p>

            <div className="grid grid-cols-2 gap-2">

              <Link
                to="/"
                onClick={handleLinkClick}
                className="flex items-center gap-2 rounded-lg border border-(--border) bg-(--surface) px-3 py-3 text-sm text-(--text) transition hover:border-(--accent) hover:bg-(--accent-soft) hover:text-(--hover-text)"
              >
                <Home size={17} />
                Home
              </Link>

              <Link
                to="/shop"
                onClick={handleLinkClick}
                className="flex items-center gap-2 rounded-lg border border-(--border) bg-(--surface) px-3 py-3 text-sm text-(--text) transition hover:border-(--accent) hover:bg-(--accent-soft) hover:text-(--hover-text)"
              >
                <ShoppingBag size={17} />
                Shop All
              </Link>

              <Link
                to="/new-arrivals"
                onClick={handleLinkClick}
                className="flex items-center gap-2 rounded-lg border border-(--border) bg-(--surface) px-3 py-3 text-sm text-(--text) transition hover:border-(--accent) hover:bg-(--accent-soft) hover:text-(--hover-text)"
              >
                <Sparkles size={17} />
                New Arrivals
              </Link>

              <Link
                to="/sale"
                onClick={handleLinkClick}
                className="flex items-center gap-2 rounded-lg border border-(--accent) bg-(--accent-soft) px-3 py-3 text-sm font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-(--primary)"
              >
                <Tag size={17} />
                Sale
              </Link>

            </div>
          </div>

          {/* Shop by Category */}
          <div className="mb-7">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-(--muted)">
              Shop by Category
            </p>

            <div className="divide-y divide-(--border)">
              {categories.map((category) => {
                const hasSubmenu = Boolean(megaMenu[category]);
                const isActive = activeCategory === category;

                return (
                  <div key={category}>


                    {/* Category Row */}
                    {hasSubmenu ? (
                      <button
                        type="button"
                        onClick={() => toggleCategory(category)}
                        aria-expanded={isActive}
                        aria-label={`Toggle ${category} submenu`}
                        className="flex w-full cursor-pointer items-center justify-between py-4 text-left"
                      >
                        <span className="text-sm font-medium text-(--text) transition hover:text-(--accent)">
                          {category}
                        </span>

                        <ChevronDown
                          size={17}
                          className={`shrink-0 text-(--muted) transition-transform duration-200 ${isActive ? "rotate-180 text-(--accent)" : ""
                            }`}
                        />
                      </button>
                    ) : (
                      <div className="flex items-center justify-between py-3">
                        <Link
                          to={getMainCategoryUrl(category)}
                          onClick={handleLinkClick}
                          className={`text-sm font-medium transition hover:text-(--accent) ${category === "Sale"
                              ? "font-semibold text-(--accent)"
                              : "text-(--text)"
                            }`}
                        >
                          {category}
                        </Link>
                      </div>
                    )}

                    {/* Category Submenu */}
                    {hasSubmenu && (
                      <div
                        className={`grid transition-all duration-300 ${isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="mb-3 ml-3 grid grid-cols-2 gap-2 border-l border-(--border) pl-4">

                            {/* View All */}
                            <Link
                              to={getMainCategoryUrl(category)}
                              onClick={handleLinkClick}
                              className="col-span-2 mb-1 text-sm font-semibold text-(--accent) transition hover:translate-x-1"
                            >
                              View All {category} →
                            </Link>

                            {megaMenu[category].map((item) => (
                              <Link
                                key={item}
                                to={getCategoryUrl(item)}
                                onClick={handleLinkClick}
                                className="flex items-center gap-1 py-1.5 text-xs text-(--text-2) transition hover:translate-x-1 hover:text-(--accent)"
                              >
                                <ChevronRight size={12} />
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-(--border) bg-(--surface) px-5 py-4">
          <p className="text-center text-[11px] text-(--muted)">
            © {new Date().getFullYear()} StyleVault. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
