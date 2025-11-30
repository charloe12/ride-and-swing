import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t('nav.services') },
    { href: "#about", label: t('nav.about') },
    { href: "#contact", label: t('nav.contacts') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-3 md:px-12 md:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
            >
              En
            </button>
            <span className="text-foreground/40">/</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`transition-colors ${language === 'fr' ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
            >
              Fr
            </button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background/90">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-foreground/80 hover:text-foreground transition-colors border-b border-border pb-3"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={() => { setLanguage('en'); setIsOpen(false); }}
                    className={`text-lg transition-colors ${language === 'en' ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
                  >
                    En
                  </button>
                  <span className="text-foreground/40">/</span>
                  <button
                    onClick={() => { setLanguage('fr'); setIsOpen(false); }}
                    className={`text-lg transition-colors ${language === 'fr' ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
                  >
                    Fr
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
