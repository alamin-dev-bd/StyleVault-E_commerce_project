
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import CategoryCard from "./CategoryCards";
import { categories } from "./data/categoryData";

export default function CategorySection() {
  return (
    <section className="
      relative py-16 lg:py-20
      overflow-hidden bg-(--bg)
      transition-colors duration-300
    ">
      <div className="
        container mx-auto px-4 lg:px-8
        max-w-7xl
      ">

        {/* Section Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="
            text-[11px] font-bold
            tracking-[0.3em] uppercase
            text-(--accent-h)
          ">
            Curated For You
          </span>

          <h2 className="
            text-3xl md:text-4xl lg:text-[42px]
            font-bold mt-3 text-(--text)
          ">
            Explore Our Collections
          </h2>

          <div className="
            w-14 h-0.75 bg-(--accent)
            mx-auto mt-5 rounded-full
          " />

          <p className="mt-4 text-sm md:text-base text-(--muted)">
            Find your style. Discover your collection.
          </p>
        </div>

        {/* Category Grid */}
        <div className="
          grid grid-cols-2 lg:grid-cols-4
          gap-3 md:gap-5 lg:gap-6
        ">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="flex justify-center mt-10">
          <Link
            to="/products"
            className="
              inline-flex items-center gap-3
              text-sm font-semibold tracking-wide
              text-(--text)
              hover:text-(--accent-h)
              transition-colors group
            "
          >
            Explore All Collections

            <ArrowUpRight
              size={17}
              className="
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition-transform
              "
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
