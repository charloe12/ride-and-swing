import { Mail, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      href: "https://wa.me/664085328", // Replace with actual number
      description: t('contact.whatsappDesc')
    },
    {
      icon: Instagram,
      label: t('contact.instagram'),
      href: "https://instagram.com/yourhandle", // Replace with actual handle
      description: t('contact.instagramDesc')
    },
    {
      icon: Mail,
      label: t('contact.email'),
      href: "mailto:Julienmauro12@gmail.com", // Replace with actual email
      description: t('contact.emailDesc')
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-background px-4 md:px-8 lg:px-12 py-20 snap-start relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
            {t('contact.title')}
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight">
            {t('contact.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact.description')}
            <br />
            {t('contact.description2')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8 h-full rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                  {/* Icon container */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-accent/90 group-hover:bg-accent transition-colors duration-500">
                        <Icon className="w-8 h-8 text-accent-foreground transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {contact.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="text-sm text-muted-foreground font-medium">
              {t('contact.response')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
