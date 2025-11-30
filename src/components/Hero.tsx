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

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 animate-fade-in mb-32 md:mb-48">
        <h1 className="hero-text text-neon mb-0 select-none leading-[0.75]">
          {t('hero.surfing')}
        </h1>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-28 md:bottom-44 left-1/2 -translate-x-1/2 z-30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button variant="hero" size="lg" className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-medium">
          {t('hero.bookNow')}
        </Button>
      </div>


      {/* Bottom Info */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-12 z-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {/* Sound Wave Icon - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-foreground/60" />
            <div className="w-4 h-4 rounded-full bg-foreground/40" />
            <div className="w-5 h-5 rounded-full bg-foreground/20" />
          </div>
        </div>

        {/* Location & Time Info */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-6 text-xs text-foreground/80 md:ml-auto">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">+25°C / +17°C</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">Kamchatka Region</div>
              <div className="text-foreground/60 text-[10px] md:text-xs hidden md:block">58.3520° N / 180.1500° E</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">GMT +12</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">08:14:40 AM</div>
              <div className="text-foreground/60 text-[10px] md:text-xs hidden md:block">Date: August 10, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
