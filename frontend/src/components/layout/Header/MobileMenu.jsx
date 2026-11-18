
import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  Bell,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  X,
} from "lucide-react";

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

const megaMenu = {
  Men: ["Panjabi", "Shirt", "T-Shirt", "Hoodie", "Pants", "Watches", "Shoes"],
  Women: ["Hijab", "Borka", "Abaya", "Kurtis", "Saree", "Bags", "Shoes"],
  "Modest Wear": ["Hijab", "Borka", "Abaya", "Niqab", "Modest Sets"],
  Traditional: ["Panjabi", "Pajama", "Saree", "Kurti", "Traditional Sets"],
  Accessories: ["Watches", "Sunglasses", "Wallets", "Bags", "Belts"],
  Fragrance: ["Attar", "Perfume", "Body Spray"],
  Footwear: ["Sneakers", "Casual Shoes", "Formal Shoes", "Sandals"],
};

const getCategoryUrl = (category) =>
  `/shop/${category.toLowerCase().replaceAll(" ", "-")}`;

const getMainCategoryUrl = (category) => {
  if (category === "New Arrivals") return "/new-arrivals";
  if (category === "Sale") return "/sale";
  return getCategoryUrl(category);
};

export default function MobileMenu({
  mobileOpen,
  onClose,
  onSearch,
}) {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (category) => {
    setActiveMenu((previous) =>
      previous === category ? null : category
    );
  };

  const handleMobileSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("mobileSearch")?.toString().trim();

    if (query) onSearch(query);
  };

  const closeMobileMenu = () => {
    setActiveMenu(null);
    onClose();
  };

  if (!mobileOpen) return null;

  return (
    <div className="absolute left-0 top-full z-50 max-h-[calc(100vh-70px)] w-full overflow-y-auto border-t border-(--border) bg-(--bg) p-5 shadow-xl md:hidden">

      {/* Mobile Search */}
      <form
        onSubmit={handleMobileSearch}
        className="mb-6 flex items-center gap-3 rounded-full border border-(--border) bg-(--surface) px-4 py-3"
      >
        <Search size={18} className="text-(--primary)" />

        <input
          name="mobileSearch"
          placeholder="Search products..."
          className="w-full bg-transparent text-sm text-(--text) outline-none placeholder:text-(--muted)"
        />

        <button type="submit" aria-label="Search">
          <ArrowRight size={19} className="text-(--primary)" />
        </button>
      </form>

      {/* Mobile Account Links */}
      <div className="mb-5 grid grid-cols-4 gap-3 border-b border-(--border) pb-5">
        <a
          href="/account"
          className="flex flex-col items-center gap-2 text-xs text-(--muted)"
        >
          <UserRound size={20} />
          Account
        </a>

        <a
          href="/wishlist"
          className="flex flex-col items-center gap-2 text-xs text-(--muted)"
        >
          <Heart size={20} />
          Wishlist
        </a>

        <a
          href="/notifications"
          className="flex flex-col items-center gap-2 text-xs text-(--muted)"
        >
          <Bell size={20} />
          Alerts
        </a>

        <a
          href="/cart"
          className="flex flex-col items-center gap-2 text-xs text-(--muted)"
        >
          <ShoppingBag size={20} />
          Cart
        </a>
      </div>

      {/* Mobile Categories */}
      <div className="grid gap-1">
        {categories.map((category) => {
          const hasMegaMenu = Boolean(megaMenu[category]);
          const isActive = activeMenu === category;

          return (
            <div
              key={category}
              className="border-b border-(--border) py-3"
            >
              <div className="flex items-center justify-between">
                <a
                  href={getMainCategoryUrl(category)}
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium ${
                    category === "Sale"
                      ? "text-(--primary)"
                      : "text-(--text-2)"
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
                    className="p-1 text-(--muted)"
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

              {hasMegaMenu && isActive && (
                <div className="mt-4 grid grid-cols-2 gap-4 pl-3">
                  {megaMenu[category].map((item) => (
                    <a
                      key={item}
                      href={getCategoryUrl(item)}
                      onClick={closeMobileMenu}
                      className="text-sm text-(--muted) transition hover:text-(--primary)"
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

      {/* Close Button */}
      <button
        type="button"
        onClick={closeMobileMenu}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-(--border) py-3 text-sm font-medium text-(--muted)"
      >
        <X size={16} />
        Close menu
      </button>
    </div>
  );
}
