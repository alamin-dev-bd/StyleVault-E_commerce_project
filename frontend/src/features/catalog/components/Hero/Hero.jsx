
import DesktopHero from "@/features/catalog/components/Hero/DesktopHero";
import MobileHero from "@/features/catalog/components/Hero/MobileHero";

export default function Hero() {
  return (
    <>
      {/* Desktop Hero: 768px and above */}
      <div className="hidden sm:block">
        <DesktopHero />
      </div>

      {/* Mobile Hero: Below 768px */}
      <div className="block sm:hidden">
        <MobileHero />
      </div>
    </>
  );
}
