import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import InlineTechSection from "@/sections/TechSection";
import ProductsSection from "@/sections/Products/ProductsSection";
import AboutUsSection from "@/sections/AboutUs";
import ContactSection from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <InlineTechSection />
        <ProductsSection />
        <AboutUsSection />
        <ContactSection />
        {}
      </main>
      {}
        <Footer />
    </>
  );
}