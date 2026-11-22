
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
} from "lucide-react";
import { logo,PaymentPartner } from "@/assets/Images/image";

const footerLinks = {
  shop: [
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Men's Collection", path: "/products?category=men" },
    { name: "Women's Collection", path: "/products?category=women" },
    { name: "Modest Wear", path: "/products?category=modest-wear" },
    { name: "Accessories", path: "/products?category=accessories" },
    { name: "Sale & Offers", path: "/sale" },
  ],

  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Shipping Information", path: "/shipping" },
    { name: "Returns & Exchanges", path: "/returns" },
    { name: "Track Your Order", path: "/track-order" },
  ],

  company: [
    { name: "About StyleVault", path: "/about" },
    { name: "Our Collections", path: "/products" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
  ],
};

function FooterLink({ children, to }) {
  return (
    <Link
      to={to}
      className="
        group inline-flex items-center gap-1
        text-sm text-(--text-2)
        transition-colors duration-300
        hover:text-(--accent-h)
      "
    >
      {children}

      <ArrowUpRight
        size={13}
        className="
          opacity-0 -translate-y-0.5
          transition-all duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-(--text)">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <FooterLink to={link.path}>
              {link.name}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-(--border) bg-(--surface)">

      {/* Subtle Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-(--accent)/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">

          {/* BRAND INFORMATION */}

          <div className="lg:col-span-4">

            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 auth-logo"
            >
              {/* Light mode logo */}
              <img
                src={logo.logodarkSvg}
                alt="StyleVault"
                className="logo-light h-12 sm:h-14 w-auto object-contain"
              />

              {/* Dark mode logo */}
              <img
                src={logo.logolightSvg}
                alt=""
                aria-hidden="true"
                className="logo-dark h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-(--text-2)">
              Discover a world of timeless fashion and everyday comfort.
              Carefully selected styles to help you express your
              personality with confidence.
            </p>

            {/* BRAND PROMISE */}

            <div className="mt-6 flex items-center gap-2 text-sm text-(--text-2)">
              <Heart size={15} className="text-(--accent-h)" />
              <span>Made for your style. Made for you.</span>
            </div>
          </div>

          {/* SHOP LINKS */}

          <div className="lg:col-span-2">
            <FooterColumn
              title="Shop"
              links={footerLinks.shop}
            />
          </div>

          {/* CUSTOMER SUPPORT */}

          <div className="lg:col-span-2">
            <FooterColumn
              title="Support"
              links={footerLinks.support}
            />
          </div>

          {/* COMPANY LINKS */}

          <div className="lg:col-span-2">
            <FooterColumn
              title="Company"
              links={footerLinks.company}
            />
          </div>

          {/* CONTACT INFORMATION */}

          <div className="lg:col-span-2">

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-(--text)">
              Get in Touch
            </h3>

            <div className="space-y-5">

              <a
                href="tel:+880247120404"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-(--accent-h)"
                />

                <span className="text-sm text-(--text-2) transition-colors group-hover:text-(--accent-h)">
                  +880 2 4712 0404
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-(--accent-h)"
                />

                <span className="text-sm leading-6 text-(--text-2)">
                  Bangladesh
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* =========================
            Payment Partners
        ========================== */}

<div
    className="
        grid grid-cols-1 gap-5
        border-y border-(--border)
        py-7
        sm:grid-cols-3
    "
>
    <img
        src={PaymentPartner.PaymentPartnerImg}
        alt="Payment Partners"
        className="
            col-span-full
            hidden md:block w-full h-auto
            object-contain object-left
        "
    />
        <img
        src={PaymentPartner.PaymentPartnermobile}
        alt="Payment Partners"
        className="
            col-span-full
            block md:hidden w-full h-auto
            object-contain object-left
        "
    />
</div>

        {/* =========================
            COPYRIGHT
        ========================== */}

        <div className="
          flex flex-col items-center justify-between
          gap-4 py-6
          text-center
          sm:flex-row sm:text-left
        ">

          <p className="text-xs text-(--muted)">
            © {currentYear} StyleVault. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-(--text-2)">
            Premium Fashion, Everyday Comfort.
          </p>

          <div className="flex items-center gap-2 text-xs text-(--muted)">
            <ShieldCheck size={14} className="text-(--accent-h)" />
            <span>Shopping made simple.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
