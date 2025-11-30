import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import golfImage from "@/assets/golf-hero.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const GolfHero = () => {
  const { t } = useLanguage();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={golfImage}
          alt="Golfing in Taghazout"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h2 className="hero-text text-neon mb-0 select-none leading-[0.75] drop-shadow-lg">
          {t('golf.title')}
        </h2>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide drop-shadow-md font-medium">
          {t('golf.subtitle')}
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-24 md:bottom-40 left-1/2 -translate-x-1/2 z-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button
          variant="hero"
          size="lg"
          className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-medium"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('hero.bookNow')}
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
              <div className="font-medium text-xs md:text-sm">+22°C / +16°C</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">Taghazout Bay</div>
              <div className="text-foreground/60 text-[10px] md:text-xs hidden md:block">30.5427° N / 9.7112° W</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">GMT +1</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">
                {time.toLocaleTimeString('en-US', { timeZone: 'Africa/Casablanca', hour12: true })}
              </div>
              <div className="text-foreground/60 text-[10px] md:text-xs hidden md:block">
                Date: {time.toLocaleDateString('en-US', { timeZone: 'Africa/Casablanca', month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GolfHero;
