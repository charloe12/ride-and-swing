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

      {/* Hero Text - Top Right on Mobile, Center on Desktop */}
      <div className="absolute top-32 right-4 md:relative md:top-0 md:right-0 z-10 text-right md:text-center px-4 animate-fade-in md:mb-32">
        <h2 className="hero-text text-neon mb-0 select-none leading-[0.75]">
          {t('golf.title')}
        </h2>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide">
          {t('golf.subtitle')}
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-28 md:bottom-44 left-1/2 -translate-x-1/2 z-30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button variant="hero" size="lg" className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-medium">
          BOOK NOW
        </Button>
      </div>



      {/* Bottom Info */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-12 z-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {/* Golf Icon - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <svg className="w-12 h-12 text-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 18v-5m0 0V4l8 4-8 4z" />
            <circle cx="12" cy="20" r="2" />
          </svg>
        </div>

        {/* Location & Time Info */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-6 text-xs text-foreground/80 md:ml-auto">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">+18°C / +12°C</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">Scottish Highlands</div>
              <div className="text-foreground/60 text-[10px] md:text-xs hidden md:block">56.4907° N / 4.2026° W</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">GMT +1</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">10:30:15 AM</div>
              <div className="text-foreground/60 text-[10px] md:text-xs hidden md:block">Date: August 10, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GolfHero;
