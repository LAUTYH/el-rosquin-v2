import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/Nosotros";
import Nosotros2 from "@/components/Nosotros2";
import Nosotros3 from "@/components/Nosotros3";
import OurProducts from "@/components/OurProducts";
import ContactHome from "@/components/ContactHome";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <NosotrosSection />
      <Nosotros2 />
      <Nosotros3 />
      <OurProducts />
      <ContactHome />
    </div>
  );
}
