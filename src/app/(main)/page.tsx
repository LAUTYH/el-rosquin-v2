import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/Nosotros";
import Nosotros2 from "@/components/Nosotros2";
import Nosotros3 from "@/components/Nosotros3";
import OurProducts from "@/components/OurProducts";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import ContactHome from "@/components/ContactHome";
import AnimatedPanelsWrapper from "@/components/AnimatedPanelsWrapper";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />

      <AnimatedPanelsWrapper>
        <NosotrosSection />
        <Nosotros2 />
        <Nosotros3 />
        <OurProducts />
      </AnimatedPanelsWrapper>

      <HorizontalCarousel />

      <ContactHome />
    </main>
  );
}
