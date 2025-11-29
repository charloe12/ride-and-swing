import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import surfGallery1 from "@/assets/image00028.jpeg";
import surfGallery2 from "@/assets/image00013.jpeg";
import surfGallery3 from "@/assets/image00016.jpeg";
import surfGallery4 from "@/assets/image00009.jpeg";
import surfGallery5 from "@/assets/image00007.jpeg";
import surfGallery6 from "@/assets/surf-gallery-6.jpg";
import surfGallery7 from "@/assets/surf-gallery-7.jpg";

const SurfGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    { src: surfGallery1, alt: "Professional surfing in crystal clear waves" },
    { src: surfGallery2, alt: "Surfer riding through a barrel wave" },
    { src: surfGallery3, alt: "Aerial surfing maneuver at sunset" },
    { src: surfGallery4, alt: "Carving through turquoise ocean waves" },
    { src: surfGallery5, alt: "Surfer walking on beach at golden hour" },
    { src: surfGallery6, alt: "Beach picnic setup with umbrellas" },
    { src: surfGallery7, alt: "Beach picnic setup with food and drinks" },
  ];

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="surf-gallery" className="relative h-screen w-full flex flex-col overflow-hidden snap-start snap-always bg-background">
      {/* Thumbnail Navigation - Top */}
      <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative flex-shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden transition-all duration-300 ${selectedIndex === index
              ? "ring-2 ring-background shadow-lg scale-110"
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

      {/* Main Image Display - Full Screen */}
      <div className="relative flex-1 w-full h-screen">
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="w-full h-full object-cover"
          loading={selectedIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60 pointer-events-none" />

        {/* Navigation Controls */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground rounded-full p-3 transition-all hover:scale-110 shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground rounded-full p-3 transition-all hover:scale-110 shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Counter - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-6 py-2 rounded-full text-base font-medium shadow-lg">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  );
};

export default SurfGallery;
