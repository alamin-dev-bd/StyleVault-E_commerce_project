
import Hero from "@/features/catalog/components/Hero";
import CategorySection from "@/features/catalog/components/CategoryCards";
import Headers from "@/components/layout/Header/Headers";

export default function HomePage() {
  return (
    <>
    <main >
      <Headers />
      <Hero />
      <CategorySection />
    </main>
    </>
  )
}