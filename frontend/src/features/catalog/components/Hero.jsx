
import DesktopHero from "@/components/layout/Hero/DesktopHero";
import MobileHero from "@/components/layout/Hero/MobileHero";

export default function Hero() {
  return (
    <>
      {/* Desktop Hero: 768px and above */}
      <div className="hidden md:block">
        <DesktopHero />
      </div>

      {/* Mobile Hero: Below 768px */}
      <div className="block md:hidden">
        <MobileHero />
      </div>
    </>
  );
}
