import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/image00017.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 animate-fade-in mb-32 md:mb-48">
        <h1 className="hero-text text-neon mb-0 select-none leading-[0.75] drop-shadow-lg">
          {t('hero.surfing')}
        </h1>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide drop-shadow-md font-medium">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-28 md:bottom-44 left-1/2 -translate-x-1/2 z-30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
              <div className="font-medium text-xs md:text-sm">+24°C / +18°C</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">Taghazout, Morocco</div>
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

export default Hero;
