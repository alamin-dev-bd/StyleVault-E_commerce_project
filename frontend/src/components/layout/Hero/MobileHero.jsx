
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Tag,
  ChevronRight,
  Heart,
} from "lucide-react";

const quickPicks = [
  {
    title: "New Arrivals",
    subtitle: "Fresh styles",
    icon: Sparkles,
    link: "/new-arrivals",
  },
  {
    title: "Trending",
    subtitle: "Popular now",
    icon: TrendingUp,
    link: "/products?sort=popular",
  },
  {
    title: "Special Offers",
    subtitle: "Great deals",
    icon: Tag,
    link: "/sale",
  },
];

export default function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-(--bg) px-4 pb-6 pt-5">

      {/* Subtle Background Decoration */}
      <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-(--accent)/10 blur-3xl" />

      <div className="relative mx-auto max-w-xl">

        {/* Welcome Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--muted)">
              WELCOME TO STYLEVAULT
            </p>

            <h1 className="text-[25px] font-bold leading-tight tracking-tight text-(--text)">
              Find your <span className="text-(--accent-h)">style.</span>
            </h1>

            <p className="mt-1 text-xs text-(--muted)">
              Your everyday fashion destination.
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-(--border) bg-(--surface) shadow-sm">
            <Sparkles size={21} className="text-(--accent-h)" />
          </div>
        </div>

        {/* Featured Campaign Card */}
        <div className="group relative isolate min-h-[270px] overflow-hidden rounded-[24px] bg-[#30231B] shadow-xl shadow-black/10">

          {/* Campaign Image - Replace with your own image */}
          <img
            src="/images/mobile-fashion-campaign.webp"
            alt="StyleVault featured fashion collection"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17120F]/95 via-[#17120F]/65 to-[#17120F]/10" />

          <div className="relative flex min-h-[270px] flex-col items-start justify-between p-5">

            {/* Campaign Label */}
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-(--accent)" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--accent)">
                The Style Edit
              </span>
            </div>

            {/* Campaign Content */}
            <div className="max-w-[72%]">
              <span className="mb-2 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
                Curated for you
              </span>

              <h2 className="text-[29px] font-bold leading-[1.08] tracking-tight text-white">
                Your next look starts here.
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/75">
                Discover pieces that make everyday dressing effortless.
              </p>

              <Link
                to="/products"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-(--accent) px-5 py-3 text-xs font-bold text-(--primary) shadow-lg transition-all duration-300 hover:gap-3 hover:bg-(--accent-h)"
              >
                Discover now
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card Indicator */}
            <div className="absolute bottom-4 right-5 flex items-center gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-(--accent)" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* Quick Shopping Section */}
        <div className="mt-6">

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

          <div className="grid grid-cols-3 gap-2.5">
            {quickPicks.map(({ title, subtitle, icon: Icon, link }) => (
              <Link
                key={title}
                to={link}
                className="group flex min-h-[94px] flex-col justify-between rounded-2xl border border-(--border) bg-(--surface) p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-(--accent) hover:bg-(--accent-soft)"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-(--accent-soft) text-(--accent-h) transition-colors group-hover:bg-(--accent) group-hover:text-(--primary)">
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

        {/* Small Brand Message */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-(--muted)">
          <Heart size={12} className="text-(--accent-h)" />
          <span>Thoughtfully selected. Made for your style.</span>
        </div>

      </div>
    </section>
  );
}
