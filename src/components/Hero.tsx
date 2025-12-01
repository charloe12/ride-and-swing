import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import surfImage1 from "@/assets/image00017.webp";
import surfImage2 from "@/assets/image00028.webp";
import surfImage3 from "@/assets/image00013.webp";
import surfImage4 from "@/assets/image00016.webp";
import surfImage5 from "@/assets/image00009.webp";
import surfImage6 from "@/assets/image00007.webp";

const Hero = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    { src: surfImage1, alt: "Professional surfing in crystal clear waves" },
    { src: surfImage2, alt: "Surfer riding through a barrel wave" },
    { src: surfImage3, alt: "Aerial surfing maneuver at sunset" },
    { src: surfImage4, alt: "Carving through turquoise ocean waves" },
    { src: surfImage5, alt: "Surfer at golden hour" },
    { src: surfImage6, alt: "Surfing action shot" },
  ];

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[selectedIndex].src})` }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Thumbnail Navigation - Top */}
      <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative flex-shrink-0 w-12 h-9 md:w-20 md:h-14 rounded-md overflow-hidden transition-all duration-300 ${selectedIndex === index
              ? "ring-2 ring-foreground shadow-lg scale-110"
              : "opacity-70 hover:opacity-100"
              }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground rounded-full p-3 transition-all hover:scale-110 shadow-lg z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground rounded-full p-3 transition-all hover:scale-110 shadow-lg z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Text - Top Right */}
      <div className="absolute top-32 right-16 md:right-32 text-right z-10 animate-fade-in">
        <h1 className="hero-text text-neon mb-0 select-none leading-[0.75]">
          {t('hero.surfing')}
        </h1>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Description - Bottom Right with Yellow Background */}
      <div className="absolute bottom-16 md:bottom-32 left-4 right-4 md:left-auto md:right-12 z-30 animate-fade-in max-w-full md:max-w-md" style={{ animationDelay: "0.3s" }}>
        <div className="bg-[hsl(64,100%,68%)] text-black px-6 py-4 rounded">
          <p className="text-xs md:text-sm leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>



    </section>
  );
};

export default Hero;
