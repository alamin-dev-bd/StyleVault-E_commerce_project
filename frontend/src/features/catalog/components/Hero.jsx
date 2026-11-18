
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { images } from "@/assets/images";
import Headers from "@/components/layout/Header/Headers";

export default function Hero() {
  const [activeZoom, setActiveZoom] = useState(null);

  const handleMouseMove = (e, id) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setActiveZoom({ id, x, y, clientX: e.clientX, clientY: e.clientY });
  };

  const clothingItems = [
    {
      id: "green",
      name: "Olive Sweatshirt",
      price: 1350,
      img: images.green,
      link: "/products/olive-premium-sweatshirt",
      positionClass:
        "absolute top-[20%] right-[30%] w-[16%] lg:w-[18%] z-20 hover:z-30 hidden md:inline-block",
    },
    {
      id: "grey",
      name: "Grey Sweatshirt",
      price: 1350,
      img: images.gray,
      link: "/products/grey-essential-sweatshirt",
      positionClass:
        "absolute top-[19%] right-[.5%] w-[17%] lg:w-[19%] z-20 hover:z-30 hidden md:inline-block",
    },
    {
      id: "beige",
      name: "Beige Sweatshirt",
      price: 1350,
      img: images.brown,
      link: "/products/beige-classic-sweatshirt",
      positionClass:
        "absolute top-[20%] right-[12%] w-[17%] lg:w-[24%] z-20 hover:z-30 hidden md:inline-block",
    },
  ];

  const zoomedItem = clothingItems.find(
    (item) => item.id === activeZoom?.id
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover mt-10 bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${images.HeroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Giant Fashion Typography */}
      <div className="absolute bottom-[-1%] left-0 w-full z-5 pointer-events-none select-none overflow-hidden">
        <h2 className="text-center text-[19vw] lg:text-[17vw] font-black uppercase leading-[0.75] tracking-[-0.06em] text-white/15 whitespace-nowrap">
          FASHION
        </h2>
      </div>

      {/* Separated Clothing Items */}
      {clothingItems.map((item) => (
        <div key={item.id} className={`${item.positionClass} group`}>
          <Link to={item.link} className="block relative">
            <img
              src={item.img}
              alt={item.name}
              onMouseMove={(e) => handleMouseMove(e, item.id)}
              onMouseLeave={() => setActiveZoom(null)}
              className="w-full h-auto object-contain cursor-crosshair drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] brightness-75 contrast-105 transition-all duration-300 group-hover:scale-105 group-hover:brightness-100"
            />
          </Link>
        </div>
      ))}

      {/* Solid Top Header Bar */}
      <div
        data-theme="dark"
        className="absolute top-0 left-0 right-0 z-50 shadow-md border-b border-white/10"
      >
        <div className="bg-black/25 backdrop-blur-sm">
          <Headers />
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-8 lg:pt-10 pb-16 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pointer-events-auto">

          {/* Left Content */}
          <div className="text-white max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-(--accent)" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-(--accent)">
                Premium Collection
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
              Elevate Your{" "}
              <span className="text-(--accent)">Everyday Style.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-6 max-w-md">
              Modern fashion. Timeless comfort. Hover over any clothing item to
              explore fabric details.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-(--accent) hover:bg-(--accent-h) text-(--primary) font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:gap-4 shadow-xl hover:shadow-[0_0_25px_var(--accent-h)] hover:scale-105"
            >
              Explore Collection
              <ArrowRight size={20} />
            </Link>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-(--accent)" />
                <span>
                  Free Shipping
                  <br />
                  All Over Bangladesh
                </span>
              </div>

              <div className="w-px h-8 bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-(--accent)" />
                <span>
                  Secure Payment
                  <br />
                  100% Safe
                </span>
              </div>

              <div className="w-px h-8 bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <Headphones size={18} className="text-(--accent)" />
                <span>
                  24/7 Support
                  <br />
                  All Over Bangladesh
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-125"></div>
        </div>
      </div>

      {/* Floating Product Magnifier */}
      {activeZoom && zoomedItem && (
        <div
          className="fixed w-72 h-80 rounded-2xl border-2 border-(--accent) shadow-2xl pointer-events-none z-50 overflow-hidden hidden lg:block bg-black/60 backdrop-blur-md"
          style={{
            left: `${activeZoom.clientX - 310}px`,
            top: `${activeZoom.clientY - 120}px`,
          }}
        >
          {/* Zoomed Image */}
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${zoomedItem.img})`,
              backgroundPosition: `${activeZoom.x}% ${activeZoom.y}%`,
              backgroundSize: "250% 250%",
            }}
          />

          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

          {/* Zoom Badge */}
          <div className="absolute top-3 right-3 bg-(--accent) text-(--primary) text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Click to see details
          </div>

          {/* Product Information */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[9px] text-(--accent) font-semibold uppercase tracking-[0.2em] mb-1">
              Premium Collection
            </p>

            <h3 className="text-white text-base font-bold leading-tight mb-2">
              {zoomedItem.name}
            </h3>

            <div className="flex items-center justify-between border-t border-white/20 pt-3">
              <div>
                <p className="text-[9px] text-white/60 mb-0.5">Price</p>
                <p className="text-(--accent) text-lg font-bold">
                  ৳{zoomedItem.price?.toLocaleString("en-BD") ?? "Contact us"}
                </p>
              </div>

              <span className="text-[9px] text-white/80 border border-white/30 rounded-full px-3 py-1.5">
                Available Now
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Banner Stack */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col">

        {/* Yellow Scrolling Marquee */}
        <div className="relative overflow-hidden bg-(--accent) py-3 border-t border-(--accent-h)">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center gap-12 px-6">
                {[
                  "LIMITED TIME OFFER",
                  "UP TO 50% OFF",
                  "CASH ON DELIVERY",
                  "FREE SHIPPING ACROSS BANGLADESH",
                  "DISCOVER NEW ARRIVALS",
                  "PREMIUM QUALITY FASHION",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-8">
                    <span className="text-xs md:text-sm font-bold tracking-wider text-(--primary) uppercase">
                      {text}
                    </span>
                    <span className="text-(--primary-h) text-lg">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
