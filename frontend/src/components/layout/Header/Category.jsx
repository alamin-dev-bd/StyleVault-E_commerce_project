
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function Category() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (category) => {
    setActiveMenu((previous) =>
      previous === category ? null : category
    );
  };

  return (
    <nav className="hidden border-t border-(--borderp) md:block">
      <div className="mx-auto flex max-w-360 items-center justify-center gap-5 px-5 lg:gap-8">
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
                  href={getMainCategoryUrl(category)}
                  className={`whitespace-nowrap text-xs transition lg:text-sm ${
                    category === "Sale"
                      ? "font-semibold text-(--accent)"
                      : "font-medium text-(--textp-2) hover:text-(--accent)"
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
                    className="text-(--text-white) hover:text-(--accent) cursor-pointer "
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

              {hasMegaMenu && isActive && (
                <div className="absolute left-0 top-full z-50 w-64 rounded-b-xl border border-(--borderp) bg-(--bg-black2) p-5 shadow-xl">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-(--accent)">
                    Shop {category}
                  </p>

                  <div className="grid gap-3">
                    {megaMenu[category].map((item) => (
                      <a
                        key={item}
                        href={getCategoryUrl(item)}
                        className="text-sm text-(--textp-2) transition hover:translate-x-1 hover:text-(--accent)"
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
  );
}
