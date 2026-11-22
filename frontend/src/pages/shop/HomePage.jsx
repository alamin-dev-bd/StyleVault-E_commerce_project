
import Hero from "@/features/catalog/components/Hero/Hero";
import CategorySection from "@/features/catalog/components/CategorySection/CategorySection";
import BrandBanner from "@/components/layout/BrandBanner";

export default function HomePage() {
  return (

    <main>
      <Hero />
      {/* <BrandBanner /> */}
      <CategorySection />
    </main>

  );
}