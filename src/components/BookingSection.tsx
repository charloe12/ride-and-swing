import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import taghazoutBeach from "@/assets/taghazout-beach.jpg";
import { MapPin, Palmtree, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const BookingSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    lessonType: "",
    package: "",
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
    agreedToTerms: false,
  });

  const surfPackages = [
    { value: "surf-group", label: t('booking.surfGroup'), price: 350 },
    { value: "surf-private", label: t('booking.surfPrivate'), price: 600 },
    { value: "surf-picknik", label: t('booking.surfPicknik'), price: 1000 },
  ];

  const golfPackages = [
    { value: "golf-practice", label: t('booking.golfPractice'), price: 500 },
    { value: "golf-guiding-9", label: t('booking.golfGuiding9'), price: 1400 },
    { value: "golf-guiding-18", label: t('booking.golfGuiding18'), price: 1800 },
  ];

  const comboPackages = [
    { value: "combo-surf-golf-practice", label: t('booking.comboSurfPractice'), price: 800 },
    { value: "combo-surf-guiding-9", label: t('booking.comboSurfGuiding9'), price: 1750 },
    { value: "combo-surf-guiding-18", label: t('booking.comboSurfGuiding18'), price: 2150 },
    { value: "combo-picknik-practice", label: t('booking.comboPicknikPractice'), price: 1450 },
    { value: "combo-picknik-guiding-9", label: t('booking.comboPicknikGuiding9'), price: 2350 },
    { value: "combo-picknik-guiding-18", label: t('booking.comboPicknikGuiding18'), price: 2700 },
  ];

  const currentPackages = formData.lessonType === "surf" ? surfPackages :
    formData.lessonType === "golf" ? golfPackages :
      formData.lessonType === "combo" ? comboPackages : [];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey ||
        serviceId === 'your_service_id_here' ||
        templateId === 'your_template_id_here' ||
        publicKey === 'your_public_key_here') {
        console.error("EmailJS Configuration Error: Missing or default environment variables.");
        console.log("Service ID:", serviceId);
        console.log("Template ID:", templateId);
        console.log("Public Key:", publicKey ? "Present" : "Missing");
        toast.error("Configuration Error", {
          description: "EmailJS keys are missing or incorrect. Check console for details.",
          duration: 5000,
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        lesson_type: formData.lessonType,
        package: formData.package,
        dates: formData.dates,
        message: formData.message || "No message provided",
        to_email: "Julienmauro12@gmail.com",
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS Success:", response);

      // Show success toast
      toast.success("Booking request sent successfully!", {
        description: "We'll get back to you soon via email or phone.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        lessonType: "surf",
        package: "",
        name: "",
        email: "",
        phone: "",
        dates: "",
        message: "",
        agreedToTerms: false,
      });

    } catch (error) {
      console.error("Booking submission error:", error);
      if (error && typeof error === 'object' && 'text' in error) {
        console.error("EmailJS Error Details:", (error as any).text);
      }
      toast.error("Failed to send booking request", {
        description: "Please try again or contact us via WhatsApp.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
      <div className="grid md:grid-cols-2 w-full h-full">
        {/* Left side - Image */}
        <div className="relative min-h-[400px] md:min-h-screen">
          <img
            src={taghazoutBeach}
            alt="Taghazout Beach Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
          <div className="absolute bottom-8 left-8 text-white z-10 hidden md:block drop-shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5" />
              <span className="text-lg font-medium">{t('booking.location')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Palmtree className="h-5 w-5" />
              <span className="text-sm opacity-90">{t('booking.paradise')}</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-[hsl(45,40%,90%)] dark:bg-background/95 p-8 md:p-12 lg:p-16 overflow-y-auto">
          <div className="max-w-xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
                {t('booking.title')}
              </h2>
              <p className="text-foreground/70 text-sm md:text-base">
                {t('booking.subtitle')}
                <br />
                {t('booking.subtitle2')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <Select onValueChange={(value) => setFormData({ ...formData, lessonType: value, package: "" })}>
                  <SelectTrigger className="h-12 bg-background/50">
                    <SelectValue placeholder={t('booking.lessonType')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm z-50">
                    <SelectItem value="surf">{t('booking.surf')}</SelectItem>
                    <SelectItem value="golf">{t('booking.golf')}</SelectItem>
                    <SelectItem value="combo">{t('booking.combo')}</SelectItem>
                  </SelectContent>
                </Select>

                {formData.lessonType && (
                  <Select
                    value={formData.package}
                    onValueChange={(value) => setFormData({ ...formData, package: value })}
                  >
                    <SelectTrigger className="h-12 bg-background/50">
                      <SelectValue placeholder={t('booking.package')} />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-sm z-50 max-h-[400px] w-[95vw] md:min-w-[500px]">
                      {currentPackages.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="py-3 min-h-[60px]">
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="space-y-3 md:space-y-4 mt-6">
                <Input
                  type="text"
                  placeholder={t('booking.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-background/50 placeholder:text-foreground/50"
                  required
                />
                <Input
                  type="email"
                  placeholder={t('booking.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-background/50 placeholder:text-foreground/50"
                  required
                />
                <Input
                  type="tel"
                  placeholder={t('booking.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-background/50 placeholder:text-foreground/50"
                  required
                />
                <Input
                  type="text"
                  placeholder={t('booking.dates')}
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="h-12 bg-background/50 placeholder:text-foreground/50"
                  required
                />
                <Input
                  type="text"
                  placeholder={t('booking.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="h-12 bg-background/50 placeholder:text-foreground/50"
                />
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, agreedToTerms: checked as boolean })
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-xs md:text-sm text-foreground/70 leading-relaxed cursor-pointer"
                >
                  {t('booking.terms')}
                </label>
              </div>

              <Button
                type="submit"
                disabled={!formData.agreedToTerms || isSubmitting}
                className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : t('booking.submit')}
              </Button>

              <div className="relative flex items-center justify-center my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-foreground/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[hsl(45,40%,90%)] dark:bg-background px-2 text-foreground/50">
                    Or
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full h-12 md:h-14 text-base md:text-lg font-bold border-2 hover:bg-foreground/5 gap-2"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                {t('booking.whatsapp')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
