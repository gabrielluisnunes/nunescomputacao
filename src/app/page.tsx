import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        {/* Aqui entrarão as próximas seções (ServicesSection, TechSection, etc.) */}
      </main>
      {/* O Footer pode ir aqui, dependendo se ele é parte do main ou não */}
    </>
  );
}