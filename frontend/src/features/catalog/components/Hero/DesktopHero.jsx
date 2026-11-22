
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ShieldCheck,
    Headphones,
} from "lucide-react";
import { HeroImages } from "@/assets/Images/image";
import BrandBanner from "@/components/layout/BrandBanner";

export default function DesktopHero() {
    const [activeProduct, setActiveProduct] = useState(null);

    // =====================================
    // CLOTHING PRODUCTS
    // Product widths remain unchanged.
    // =====================================

    const clothingItems = [
        {
            id: "green",
            name: "Olive Sweatshirt",
            price: 1350,
            img: HeroImages.green,
            previewImg: HeroImages.greenPreview || HeroImages.green,
            link: "/products/olive-premium-sweatshirt",
            position: "left-[5%]",
            width: "w-[35%]",
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: "grey",
            name: "Grey Sweatshirt",
            price: 1350,
            img: HeroImages.gray,
            previewImg: HeroImages.grayPreview || HeroImages.gray,
            link: "/products/grey-essential-sweatshirt",
            position: "left-[59%]",
            width: "w-[37%]",
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: "beige",
            name: "Beige Sweatshirt",
            price: 1350,
            img: HeroImages.brown,
            previewImg: HeroImages.brownPreview || HeroImages.brown,
            link: "/products/beige-classic-sweatshirt",
            position: "left-[29%]",
            width: "w-[45%]",
            sizes: ["S", "M", "L", "XL"],
        },
    ];

    // =====================================
    // PRODUCT CARD POSITION
    // Position the card beside the hovered
    // sweatshirt instead of following mouse.
    // =====================================

    const handleProductHover = (e, item) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const cardWidth = 288;
        const cardHeight = 270;
        const gap = 16;

        let left = rect.right + gap;

        // If there isn't enough room on the right,
        // show the card on the left.
        if (left + cardWidth > window.innerWidth - 12) {
            left = rect.left - cardWidth - gap;
        }

        // Keep the card inside the viewport.
        left = Math.max(
            12,
            Math.min(left, window.innerWidth - cardWidth - 12)
        );

        const top = Math.max(
            12,
            Math.min(
                rect.top + rect.height / 2 - cardHeight / 2,
                window.innerHeight - cardHeight - 12
            )
        );

        setActiveProduct({
            ...item,
            left,
            top,
        });
    };

    return (
        <>
            <section className="relative isolate flex h-[80vh] min-h-145 max-h-205 items-start overflow-hidden">

                {/* BACKGROUND IMAGE */}

                <div
                    className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${HeroImages.HeroImg})`,
                    }}
                />

                <div className="absolute inset-0 z-[-1] bg-black/45" />

                {/* GIANT FASHION TYPOGRAPHY */}

                <div className="pointer-events-none absolute bottom-[-1%] left-0 z-0 w-full select-none overflow-hidden">
                    <h2 className="whitespace-nowrap text-center text-[19vw] font-black uppercase leading-[0.75] tracking-[-0.06em] text-white/15 lg:text-[17vw]">
                        FASHION
                    </h2>
                </div>

                {/* =====================================
            PRODUCT DISPLAY STAGE
        ====================================== */}

                <div
                    className="
            pointer-events-none
            absolute right-[2%] top-0
            z-20 hidden
            h-[78%] w-[54%]
            lg:block
            xl:right-[3%] xl:w-[53%]
          "
                >

                    {/* HANGER — ABOVE CLOTHING */}

                    <div className="pointer-events-none absolute left-[3%] top-0 z-30 w-[94%]">
                        <img
                            src={HeroImages.hanger}
                            alt=""
                            draggable="false"
                            className="block h-auto w-full object-contain"
                        />
                    </div>

                    {/* INDIVIDUAL CLOTHING ITEMS */}

                    <div className="pointer-events-none absolute inset-0 z-20">

                        {clothingItems.map((item) => (
                            <div
                                key={item.id}
                                className={`
                  group pointer-events-auto
                  absolute ${item.position}
                  top-[9%] ${item.width}
                  ${item.id === "beige" ? "z-10" : "z-30"}
                `}
                                onMouseLeave={() => setActiveProduct(null)}
                            >
                                <Link
                                    to={item.link}
                                    className="relative block"
                                    onMouseEnter={(e) =>
                                        handleProductHover(e, item)
                                    }
                                    onFocus={() => setActiveProduct(null)}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        draggable="false"
                                        className="
                      block h-auto w-full
                      cursor-pointer object-contain
                      drop-shadow-[0_15px_15px_rgba(0,0,0,0.65)]
                      brightness-90 contrast-105
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:brightness-110
                    "
                                    />
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>

                {/* =====================================
            HERO TEXT CONTENT
        ====================================== */}

                <div className="container pointer-events-none relative z-30 mx-auto self-start px-4 pb-20 pt-8 lg:px-8 lg:pt-4">

                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">

                        {/* LEFT CONTENT */}

                        <div className="pointer-events-auto max-w-xl text-white">

                            {/* LABEL */}

                            <div className="mb-3 flex items-center gap-3">
                                <span className="h-px w-8 bg-(--accent)" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent) sm:text-sm">
                                    Premium Collection
                                </span>
                            </div>

                            {/* HEADING */}

                            <h1 className="mb-4 text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
                                Elevate Your{" "}
                                <span className="text-(--accent)">
                                    Everyday Style.
                                </span>
                            </h1>

                            {/* DESCRIPTION */}

                            <p className="mb-6 max-w-md text-base text-white/90 sm:text-lg">
                                Modern fashion. Timeless comfort. Hover over any
                                clothing item to explore fabric details.
                            </p>

                            {/* CTA */}

                            <Link
                                to="/products"
                                className="
                  inline-flex items-center gap-2
                  rounded-full bg-(--accent)
                  px-8 py-3.5 font-bold text-(--primary)
                  shadow-xl
                  transition-all duration-300
                  hover:gap-4
                  hover:bg-(--accent-h)
                  hover:scale-105
                  hover:shadow-[0_0_25px_var(--accent-h)]
                "
                            >
                                Explore Collection
                                <ArrowRight size={20} />
                            </Link>

                            {/* TRUST BADGES */}

                            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70 sm:mt-10">

                                <div className="flex items-center gap-2">
                                    <ShieldCheck
                                        size={18}
                                        className="shrink-0 text-(--accent)"
                                    />

                                    <span>
                                        Secure Payment
                                        <br />
                                        100% Safe
                                    </span>
                                </div>

                                <div className="hidden h-8 w-px bg-white/20 sm:block" />

                                <div className="flex items-center gap-2">
                                    <Headphones
                                        size={18}
                                        className="shrink-0 text-(--accent)"
                                    />

                                    <span>
                                        24/7 Support
                                        <br />
                                        All Over Bangladesh
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* EMPTY RIGHT COLUMN */}

                        <div className="pointer-events-none hidden h-125 lg:block" />

                    </div>
                </div>

                {/* =====================================
            BOTTOM MARQUEE
        ====================================== */}

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-40">

                    <div className="relative overflow-hidden border-t border-(--accent-h) bg-(--accent) py-3">

                        <div className="flex w-max animate-marquee whitespace-nowrap">

                            {[...Array(2)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-12 px-6"
                                >
                                    {[
                                        "LIMITED TIME OFFER",
                                        "UP TO 50% OFF",
                                        "CASH ON DELIVERY",
                                        "FREE SHIPPING ACROSS BANGLADESH",
                                        "DISCOVER NEW ARRIVALS",
                                        "PREMIUM QUALITY FASHION",
                                    ].map((text, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-8"
                                        >
                                            <span className="text-xs font-bold uppercase tracking-wider text-(--primary) md:text-sm">
                                                {text}
                                            </span>

                                            <span className="text-lg text-(--primary-h)">
                                                ✦
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </section>

            <BrandBanner />

            {/* =====================================
    FLOATING PRODUCT PREVIEW CARD
====================================== */}

            {activeProduct && (
                <div
                    className="
      pointer-events-none fixed z-100
      hidden w-65 overflow-hidden
      rounded-4xl
      border border-(--border)
      bg-(--surface)
      p-2
      shadow-[0_12px_40px_rgba(0,0,0,0.25)]
      lg:block
      animate-in fade-in zoom-in-95 duration-200
    "
                    style={{
                        left: `${activeProduct.left}px`,
                        top: `${activeProduct.top}px`,
                        color: "var(--text)",
                    }}
                >
                    {/* ============ PRODUCT IMAGE BOX ============ */}

                    {/*
      OUTER WRAPPER
      - Its background is the DARK strip color (--primary-h).
      - The light image panel sits on top of it and stops 32px (h-8)
        short of the bottom, so the dark color shows through as the strip.
      - overflow-hidden + rounded-3xl clips everything to one clean shape.
    */}
                    <div className="relative h-64 overflow-hidden rounded-3xl bg-(--accent-h)">

                        {/*
        IMAGE PANEL (the light rounded area)
        - bottom-8 = leaves 32px for the strip (must match the strip's h-8).
        - rounded-3xl on ALL corners is what creates the curved
          overlap above the strip, like in your reference.
      */}
                        <div className="absolute inset-x-0 top-0 bottom-8 overflow-hidden rounded-3xl bg-(--surface-2)">
                            <img
                                src={activeProduct.previewImg}
                                alt={activeProduct.name}
                                draggable="false"
                                className="
            h-full w-full
            object-contain
            p-3
            drop-shadow-[0_12px_12px_rgba(0,0,0,0.2)]
          "
                            />
                        </div>

                        {/*
        PRICE BADGE (notched corner)
        - This container is NOT overflow-hidden, because the two
          "fillets" must be able to sit outside the badge box.
        - Badge color = card color (--surface), so it looks like a
          bite taken out of the image panel.
        - The badge has a fixed height (h-11 = 44px) so fillet #2 can
          sit exactly below it.
      */}
                        <div className="absolute right-0 top-0 z-20 flex items-start">

                            {/* FILLET #1: concave curve to the LEFT of the badge.
            The radial-gradient is transparent inside a 20px circle
            (anchored bottom-left) and --surface outside it. */}
                            <div
                                className="h-5 w-5"
                                style={{
                                    background:
                                        "radial-gradient(circle at 0 100%, transparent 19.5px, var(--surface) 20px)",
                                }}
                            />

                            {/* BADGE BODY (relative so fillet #2 can hang below it) */}
                            <div
                                className="
            relative flex h-11 items-center
            rounded-bl-2xl
            bg-(--surface)
            px-2
            text-lg font-semibold text-(--text)
          "
                            >
                                ৳{activeProduct.price.toLocaleString("en-BD")}

                                {/* FILLET #2: concave curve BELOW the badge, right edge.
              top-full = starts exactly where the badge ends. */}
                                <div
                                    className="absolute right-0 top-full h-5 w-5"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 0 100%, transparent 19.5px, var(--surface) 20px)",
                                    }}
                                />
                            </div>
                        </div>

                        {/*
        BOTTOM STRIP TEXT
        - Sits in the dark area that the image panel left uncovered.
        - h-8 must equal the image panel's bottom-8 offset.
      */}
                        <div className="absolute inset-x-0 bottom-0 z-10 flex h-8 items-center justify-center">
                            <span className="text-sm font-semibold tracking-wide text-(--text)">
                                Click to see details 
                            </span>
                        </div>
                    </div>

                    {/* ============ PRODUCT DETAILS ============ */}
                    <div className="px-3 pb-3 pt-3">

                        {/* PRODUCT NAME */}
                        <div className="mb-4 flex items-center justify-between gap-2">
                            <h3 className="text-xl font-semibold tracking-tight text-(--text)">
                                {activeProduct.name}
                            </h3>
                        </div>

                        {/* PRODUCT TAGS */}
                        <div className="flex flex-wrap gap-2">
                            {activeProduct.sizes.map((size) => (
                                <span
                                    key={size}
                                    className="
              rounded-full
              bg-(--surface-2)
              px-3 py-1.5
              text-[10px] font-medium
              text-(--text-2)
            "
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}
