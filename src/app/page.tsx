import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/Nosotros";
import Nosotros2 from "@/components/Nosotros2";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <NosotrosSection />
      <Nosotros2 />
    </div>
  );
}
