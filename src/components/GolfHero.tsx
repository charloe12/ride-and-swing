import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import golfImage from "@/assets/golf-hero.webp";
import golfGallery1 from "@/assets/golf-gallery-1.webp";
import golfGallery2 from "@/assets/golf-gallery-2.webp";
import golfGallery3 from "@/assets/golf-gallery-3.webp";

import golfGallery5 from "@/assets/golf-gallery-5.webp";

const GolfHero = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    { src: golfImage, alt: "Professional golf course with stunning landscape" },
    { src: golfGallery1, alt: "Luxury golf course with pristine greens" },
    { src: golfGallery2, alt: "Coastal golf course with ocean views" },
    { src: golfGallery3, alt: "Golfer teeing off at sunset" },
    { src: golfGallery5, alt: "Aerial view of dramatic coastal golf course" },
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
        className="absolute inset-0 bg-cover bg-center md:bg-top transition-all duration-500"
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
      <div className="absolute top-32 right-4 md:right-12 text-right z-10 animate-fade-in">
        <h2 className="hero-text text-neon mb-0 select-none leading-[0.75]">
          {t('golf.title')}
        </h2>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide">
          {t('golf.subtitle')}
        </p>
      </div>

      {/* Description - Bottom Right with Yellow Background */}
      <div className="absolute bottom-16 md:bottom-32 left-4 right-4 md:left-auto md:right-12 z-30 animate-fade-in max-w-full md:max-w-md" style={{ animationDelay: "0.3s" }}>
        <div className="bg-[hsl(64,100%,68%)] text-black px-6 py-4 rounded">
          <p className="text-xs md:text-sm leading-relaxed">
            {t('golf.description')}
          </p>
        </div>
      </div>




    </section>
  );
};

export default GolfHero;
