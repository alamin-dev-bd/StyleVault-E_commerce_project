
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={category.link}
      className={`
        group relative isolate overflow-hidden
        rounded-xl md:rounded-2xl
        border border-(--border)
        shadow-sm hover:shadow-2xl
        hover:shadow-black/20
        transition-all duration-500
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-(--accent)
        ${
          category.featured
            ? "col-span-2 h-60 sm:h-75 lg:h-85"
            : "col-span-1 h-47.5 sm:h-57.5 lg:h-61.25"
        }
      `}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="
          absolute inset-0 w-full h-full
          object-cover transition-transform
          duration-700 ease-out
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div className="
        absolute inset-0
        bg-linear-to-t
        from-black/85 via-black/20 to-black/5
        group-hover:from-black/90
        transition-all duration-500
      " />

      {/* Accent Hover Glow */}
      <div className="
        absolute inset-0
        bg-linear-to-br
        from-(--accent)/10 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      " />

      {/* Featured Badge */}
      {category.featured && (
        <span className="
          absolute top-4 left-4
          text-[9px] md:text-[10px]
          font-bold tracking-[0.2em]
          uppercase text-white
          bg-black/30 backdrop-blur-md
          border border-white/20
          px-3 py-1.5 rounded-full
        ">
          Featured Collection
        </span>
      )}

      {/* Category Content */}
      <div className="
        absolute bottom-0 left-0 right-0
        p-4 md:p-5 lg:p-6
      ">
        {category.featured && (
          <p className="
            text-[10px] md:text-xs
            text-white/70 mb-2 tracking-wide
          ">
            {category.subtitle}
          </p>
        )}

        <div className="flex items-center justify-between gap-2">
          <h3 className={`
            font-bold text-white tracking-wide
            ${
              category.featured
                ? "text-xl md:text-2xl lg:text-3xl"
                : "text-sm md:text-base lg:text-lg"
            }
          `}>
            {category.name}
          </h3>

          {/* Animated Arrow */}
          <span className="
            shrink-0 w-8 h-8 md:w-10 md:h-10
            flex items-center justify-center
            rounded-full bg-(--accent)
            text-(--primary)
            transition-all duration-300
            group-hover:bg-white
            group-hover:rotate-45
            group-hover:scale-110
          ">
            <ArrowUpRight size={18} />
          </span>
        </div>

        {/* Animated Bottom Line */}
        <div className="
          mt-3 h-0.5 w-8
          bg-(--accent) rounded-full
          group-hover:w-16
          transition-all duration-500
        " />
      </div>

      {/* Hover Border */}
      <div className="
        absolute inset-0 rounded-xl md:rounded-2xl
        border border-(--accent)/0
        group-hover:border-(--accent)/60
        pointer-events-none
        transition-colors duration-500
      " />
    </Link>
  );
}
