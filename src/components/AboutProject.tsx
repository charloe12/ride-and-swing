import { Button } from "@/components/ui/button";
import waveImage from "@/assets/image00025.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutProject = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative h-screen flex items-start justify-center overflow-hidden snap-start snap-always pt-24 md:pt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${waveImage})` }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Header Content - Top */}
      <div className="relative z-10 text-center px-4 animate-fade-in max-w-4xl">
        <h2 className="text-[clamp(3rem,15vw,10rem)] md:text-[clamp(6rem,15vw,10rem)] text-neon mb-0 select-none leading-[0.75] drop-shadow-lg font-normal uppercase tracking-tight">
          {t('vision.title')}
        </h2>
        <p className="text-foreground text-sm md:text-2xl italic mt-2 md:mt-4 tracking-wide drop-shadow-md font-medium">
          {t('vision.subtitle')}
        </p>
      </div>

      {/* Description - Center */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 max-w-2xl w-full" style={{ animationDelay: "0.2s" }}>
        <p className="text-foreground/80 text-xs md:text-base leading-relaxed text-center animate-fade-in">
          <span style={{
            backgroundColor: 'hsl(64, 100%, 68%)',
            color: 'black',
            padding: '6px 12px',
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone'
          }}>
            {t('vision.description')}

          </span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-28 md:bottom-44 left-1/2 -translate-x-1/2 z-30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button
          variant="hero"
          size="lg"
          className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-medium"
          onClick={() => document.getElementById('surf-gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('vision.discover')}
        </Button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-12 z-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {/* Wave Icon - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <svg className="w-12 h-12 text-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12c0-2.5 2-4 4-4s4 1.5 4 4-2 4-4 4-4-1.5-4-4zm8 0c0-2.5 2-4 4-4s4 1.5 4 4-2 4-4 4-4-1.5-4-4z" />
          </svg>
        </div>

        {/* Project Info */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-6 text-xs text-foreground/80 md:ml-auto">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">{t('vision.global')}</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">{t('vision.premium')}</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div>
              <div className="font-medium text-xs md:text-sm">{t('vision.elite')}</div>
              <div className="text-foreground/60 text-[10px] md:text-xs">{t('vision.curated')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
