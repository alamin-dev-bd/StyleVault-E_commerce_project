
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Tag,
  ChevronRight,
  Heart,
} from "lucide-react";
import { campaignImages } from "./data/mobileHeroData";
import QuickPicks from "./components/QuickPicks";


export default function MobileHero() {
  const [activeImage, setActiveImage] = useState(0);

  // =====================================
  // AUTOMATIC IMAGE SLIDER
  // Changes image every 3.5 seconds.
  // =====================================

  useEffect(() => {
    if (campaignImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % campaignImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
        </div>


        {/* Featured Campaign Card */}

        <div className="group relative isolate min-h-68 overflow-hidden rounded-3xl bg-[#30231B] shadow-xl shadow-black/10">

          {/* FULL BACKGROUND IMAGE SLIDER */}

          {campaignImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="StyleVault featured fashion collection"
              draggable="false"
              className={`
        absolute inset-0 -z-20
        h-full w-full
        object-cover object-center
        transition-opacity duration-1000 ease-in-out
        ${activeImage === index ? "opacity-100" : "opacity-0"}
      `}
            />
          ))}

          {/* DARK IMAGE OVERLAY */}

          <div className="
    absolute inset-0 -z-10
    bg-linear-to-r
    from-[#17120F]/90
    via-[#17120F]/65
    to-[#17120F]/25
  " />

          {/* CAMPAIGN CONTENT */}

          <div className="relative flex min-h-68 flex-col items-start justify-between p-5">

            {/* Campaign Label */}

            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-(--accent)" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--accent)">
                The Style Edit
              </span>
            </div>

            {/* Campaign Text */}

            <div className="max-w-[85%]">

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
                className="
          mt-4 inline-flex items-center gap-2
          rounded-full bg-(--accent)
          px-5 py-3 text-xs font-bold
          text-(--primary) shadow-lg
          transition-all duration-300
          hover:gap-3 hover:bg-(--accent-h)
        "
              >
                Discover now
                <ArrowRight size={15} />
              </Link>

            </div>

            {/* DYNAMIC SLIDER INDICATORS */}

            <div className="absolute bottom-4 right-5 flex items-center gap-1.5">
              {campaignImages.map((_, index) => (
                <span
                  key={index}
                  className={`
            h-1.5 rounded-full transition-all duration-300
            ${activeImage === index
                      ? "w-5 bg-(--accent)"
                      : "w-1.5 bg-white/50"
                    }
          `}
                />
              ))}
            </div>

          </div>
        </div>


        {/* Quick Shopping Section */}

        <QuickPicks />

        {/* Small Brand Message */}

        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-(--muted)">
          <Heart size={12} className="text-(--accent-h)" />
          <span>Thoughtfully selected. Made for your style.</span>
        </div>

      </div>
    </section>
  );
}
