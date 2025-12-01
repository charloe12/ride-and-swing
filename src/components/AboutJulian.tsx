import { Button } from "@/components/ui/button";
import julianImage from "@/assets/julian-portrait.webp";
import julianDesktopImage from "@/assets/julian-desktop.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutJulian = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative h-screen flex items-start justify-center overflow-hidden snap-start snap-always pt-16 md:pt-32">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={julianImage}
          alt="Julian Portrait"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/30 to-background/10" />
      </div>

      {/* Background Image - Desktop */}
      <div className="hidden md:block absolute inset-0">
        <img
          src={julianDesktopImage}
          alt="Julian Coaching"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/30 to-background/10" />
      </div>

      {/* Header Content - Top */}
      <div className="relative z-10 text-center px-4 animate-fade-in max-w-5xl">
        <p className="text-foreground/80 text-xs md:text-sm uppercase tracking-widest mb-4 font-bold drop-shadow-md">
          {t('julian.title')}
        </p>
        <h2 className="hero-text text-neon mb-0 select-none leading-[0.75] drop-shadow-lg">
          JULIEN
        </h2>
        <p className="text-foreground text-base md:text-3xl italic mt-3 md:mt-6 tracking-wide font-light" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
          {t('julian.intro')}
        </p>
      </div>

      {/* Description - Center */}
      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 max-w-3xl w-full" style={{ animationDelay: "0.2s" }}>
        <div className="bg-[hsl(64,100%,68%)] text-black px-6 py-4 rounded animate-fade-in">
          <p className="text-sm md:text-lg leading-relaxed text-center">
            {t('julian.description')}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-28 md:bottom-44 left-1/2 -translate-x-1/2 z-30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button
          variant="hero"
          size="lg"
          className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-medium"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('julian.learnMore')}
        </Button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-12 z-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {/* Surfer Icon - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <svg className="w-12 h-12 text-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 18c.5-2.5 2-4 4-4s3.5 1.5 4 4M17 18c-.5-2.5-2-4-4-4s-3.5 1.5-4 4M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path d="M7 14s1-2 5-2 5 2 5 2" />
          </svg>
        </div>

        {/* Stats Info */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-6 text-xs text-foreground/80 md:ml-auto">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">20+ Years</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">Professional Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutJulian;
