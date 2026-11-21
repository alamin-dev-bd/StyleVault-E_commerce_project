
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { quickPicks } from "../data/mobileHeroData";

export default function QuickPicks() {
  return (
    <div className="mt-6">

      {/* Section Heading */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-(--text)">
            Quick picks
          </h2>

          <p className="mt-0.5 text-[11px] text-(--muted)">
            Find something you love
          </p>
        </div>

        <Link
          to="/products"
          className="flex items-center gap-1 text-[11px] font-semibold text-(--accent-h)"
        >
          Explore all
          <ChevronRight size={14} />
        </Link>
      </div>

      {/* Quick Pick Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {quickPicks.map(({ title, subtitle, icon: Icon, link }) => (
          <Link
            key={title}
            to={link}
            className="
              group flex min-h-24 flex-col justify-between
              rounded-2xl border border-(--border)
              bg-(--surface) p-3 shadow-sm
              transition-all duration-200
              hover:-translate-y-1
              hover:border-(--accent)
              hover:bg-(--accent-soft)
            "
          >
            <div className="
              flex h-8 w-8 items-center justify-center
              rounded-xl bg-(--accent-soft)
              text-(--accent-h)
              transition-colors
              group-hover:bg-(--accent)
              group-hover:text-(--primary)
            ">
              <Icon size={17} />
            </div>

            <div>
              <p className="text-[11px] font-bold leading-tight text-(--text)">
                {title}
              </p>

              <p className="mt-1 text-[9px] text-(--muted)">
                {subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
