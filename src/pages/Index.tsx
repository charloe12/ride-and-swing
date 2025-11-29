import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutJulian from "@/components/AboutJulian";
import AboutProject from "@/components/AboutProject";
import GolfHero from "@/components/GolfHero";
import SurfGallery from "@/components/SurfGallery";
import GolfGallery from "@/components/GolfGallery";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      <AboutJulian />
      <AboutProject />
      <Hero />
      <SurfGallery />

      <GolfHero />
      <GolfGallery />
      <BookingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
