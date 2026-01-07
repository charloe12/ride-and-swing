import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contacts': 'Contact',

    // Hero
    'hero.surfing': 'SURFING',
    'hero.subtitle': 'TAGHAZOUT SURF LESSONS',
    'hero.bookNow': 'BOOK NOW',
    'hero.description': 'Choose from our surf packages: Group Sessions, Private Coaching, or Premium Surf & Picnic Experience. Expert instruction from beginner to advanced levels. All equipment included. Perfect waves in Taghazout await! Scroll down to book your unforgettable surf adventure.',

    // About Project
    'vision.title': 'THE VISION',
    'vision.subtitle': 'SURF & GOLF IN TAGHAZOUT',
    'vision.description': 'Merging the thrill of world-class waves in Taghazout with luxury leisure activities, including premium golf lessons. Authentic lifestyle destination where adventure meets elegance.',
    'vision.discover': 'DISCOVER MORE',
    'vision.global': 'Global Destinations',
    'vision.premium': 'Premium Locations Worldwide',
    'vision.elite': 'Elite Experience',
    'vision.curated': 'Curated Adventures',

    // About Julian
    'julian.title': 'MEET JULIEN',
    'julian.subtitle': 'YOUR GUIDE TO EXCELLENCE',
    'julian.intro': 'Professional Surfer & Golfer',
    'julian.description': 'From Riding world-class waves to offering premium golf lessons and creating unforgettable experiences, Julien brings decades of passion and expertise to every adventure. His vision merges the thrill of the ocean with an authentic lifestyle.',
    'julian.learnMore': 'MEET JULIEN',

    // Golf
    'golf.title': 'GOLFING',
    'golf.subtitle': 'TAGHAZOUT BAY GOLF',
    'golf.description': 'Choose from our golf packages: Practice Range Sessions, 9-Hole Course Guiding, or 18-Hole Championship Experience. Expert coaching for all skill levels. Premium equipment available. Stunning courses in Morocco await! Scroll down to book your perfect golf getaway.',

    // Booking
    'booking.title': 'BOOK YOUR LESSONS',
    'booking.subtitle': 'Choose between golf and surf lessons in Taghazout.',
    'booking.subtitle2': 'Fill out the form and we\'ll contact you to confirm your booking.',
    'booking.location': 'Taghazout, Morocco',
    'booking.paradise': 'Your Surf & Golf Paradise Awaits',
    'booking.lessonType': 'SELECT LESSON TYPE',
    'booking.surf': 'Surf Lessons',
    'booking.golf': 'Golf Lessons',
    'booking.combo': 'Surf & Golf',
    'booking.package': 'SELECT PACKAGE',

    // Surf Packages
    'booking.surfGroup': 'Group Class - 350 dhs/per person/2 hours',
    'booking.surfPrivate': 'Private Surf Class - 600 dhs/per person/2 hours',
    'booking.surfPicknik': 'Pick-nik/Surf Day - 1000 dhs/per person/4 hours',

    // Golf Packages
    'booking.golfPractice': 'Practice - 500 dhs per person/1 hours',
    'booking.golfGuiding9': 'Course Guiding (9 holes) - 1400 dhs (all included)/2 hours 30 mins',
    'booking.golfGuiding18': 'Course Guiding (18 holes) - 1800 dhs (all included)/4 hours',

    // Combo Packages
    'booking.comboSurfPractice': '1 Surf Session + 1 Golf Practice - 800 dhs',
    'booking.comboSurfGuiding9': '1 Surf Session + 1 Course Guiding (9 holes) - 1750 dhs',
    'booking.comboSurfGuiding18': '1 Surf Session + 1 Course Guiding (18 holes) - 2150 dhs',
    'booking.comboPicknikPractice': '1 Surf Pick-nik + 1 Golf Practice - 1450 dhs',
    'booking.comboPicknikGuiding9': '1 Surf Pick-nik + 1 Course Guiding (9 holes) - 2350 dhs',
    'booking.comboPicknikGuiding18': '1 Surf Pick-nik + 1 Course Guiding (18 holes) - 2700 dhs',

    'booking.name': 'FULL NAME',
    'booking.email': 'EMAIL',
    'booking.phone': 'PHONE',
    'booking.dates': 'PREFERRED DATES',
    'booking.message': 'MESSAGE (OPTIONAL)',
    'booking.terms': 'I agree to the terms and conditions and privacy policy',
    'booking.submit': 'BOOK NOW',
    'booking.whatsapp': 'BOOK VIA WHATSAPP',

    // Contact
    'contact.title': 'Contact Us',
    'contact.heading': 'Let\'s Connect',
    'contact.description': 'Ready to experience the perfect blend of surf and golf?',
    'contact.description2': 'Reach out and let\'s make it happen.',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsappDesc': 'Message us directly',
    'contact.instagram': 'Instagram',
    'contact.instagramDesc': 'Follow our journey',
    'contact.email': 'Email',
    'contact.emailDesc': 'Send us a message',
    'contact.response': 'Typically respond within 24 hours',
  },
  fr: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.contacts': 'Contact',

    // Hero
    'hero.surfing': 'SURF',
    'hero.subtitle': 'LEÇONS DE SURF TAGHAZOUT',
    'hero.bookNow': 'RÉSERVER',
    'hero.description': 'Choisissez parmi nos forfaits de surf : Sessions de Groupe, Coaching Privé ou Expérience Premium Surf & Pique-nique. Enseignement expert du niveau débutant au niveau avancé. Tout l\'équipement inclus. Les vagues parfaites de Taghazout vous attendent ! Faites défiler vers le bas pour réserver votre aventure de surf inoubliable.',

    // About Project
    'vision.title': 'LA VISION',
    'vision.subtitle': 'SURF & GOLF À TAGHAZOUT',
    'vision.description': 'Fusionner le frisson des vagues de classe mondiale à Taghazout avec des activités de loisirs de luxe, y compris des leçons de golf premium. Authentic lifestyle où l\'aventure rencontre l\'élégance.',
    'vision.discover': 'DÉCOUVRIR PLUS',
    'vision.global': 'Destinations Mondiales',
    'vision.premium': 'Emplacements Premium Mondiaux',
    'vision.elite': 'Expérience Élite',
    'vision.curated': 'Aventures Sélectionnées',

    // About Julian
    'julian.title': 'RENCONTREZ JULIEN',
    'julian.subtitle': 'VOTRE GUIDE VERS L\'EXCELLENCE',
    'julian.intro': 'Surfeur Professionnel & Golfeur',
    'julian.description': 'De la pratique de vagues de classe mondiale à l\'offre de leçons de golf premium et à la création d\'expériences inoubliables, Julien apporte des décennies de passion et d\'expertise à chaque aventure. Sa vision fusionne le frisson de l\'océan avec un style de vie authentic.',
    'julian.learnMore': 'RENCONTRER JULIEN',

    // Golf
    'golf.title': 'GOLF',
    'golf.subtitle': 'GOLF DE TAGHAZOUT BAY',
    'golf.description': 'Choisissez parmi nos forfaits de golf : Sessions Practice Range, Accompagnement 9 Trous ou Expérience Championship 18 Trous. Coaching expert pour tous les niveaux. Équipement premium disponible. De magnifiques parcours au Maroc vous attendent ! Faites défiler vers le bas pour réserver votre escapade golf parfaite.',

    // Booking
    'booking.title': 'RÉSERVEZ VOS LEÇONS',
    'booking.subtitle': 'Choisissez entre des leçons de golf et de surf à Taghazout.',
    'booking.subtitle2': 'Remplissez le formulaire et nous vous contacterons pour confirmer votre réservation.',
    'booking.location': 'Taghazout, Maroc',
    'booking.paradise': 'Votre Paradis Surf & Golf Vous Attend',
    'booking.lessonType': 'SÉLECTIONNER LE TYPE DE LEÇON',
    'booking.surf': 'Leçons de Surf',
    'booking.golf': 'Leçons de Golf',
    'booking.combo': 'Surf & Golf',
    'booking.package': 'SÉLECTIONNER LE FORFAIT',

    // Surf Packages
    'booking.surfGroup': 'Cours en Groupe - 350 dhs/par personne/2 heures',
    'booking.surfPrivate': 'Cours Privé de Surf - 600 dhs/par personne/2 heures',
    'booking.surfPicknik': 'Journée Pick-nik/Surf - 1000 dhs/par personne/4 heures',

    // Golf Packages
    'booking.golfPractice': 'Practice - 500 dhs par personne/1 heure',
    'booking.golfGuiding9': 'Accompagnement (9 trous) - 1400 dhs (tout inclus)/2 heures 30 mins',
    'booking.golfGuiding18': 'Accompagnement (18 trous) - 1800 dhs (tout inclus)',

    // Combo Packages
    'booking.comboSurfPractice': '1 Session Surf + 1 Practice Golf - 800 dhs',
    'booking.comboSurfGuiding9': '1 Session Surf + 1 accompagnement (9 trous) - 1750 dhs',
    'booking.comboSurfGuiding18': '1 Session Surf + 1 accompagnement (18 trous) - 2150 dhs',
    'booking.comboPicknikPractice': '1 Pick-nik Surf + 1 Practice Golf - 1450 dhs',
    'booking.comboPicknikGuiding9': '1 Pick-nik Surf + 1 accompagnement (9 trous) - 2350 dhs',
    'booking.comboPicknikGuiding18': '1 Pick-nik Surf + 1 accompagnement (18 trous) - 2700 dhs',

    'booking.name': 'NOM COMPLET',
    'booking.email': 'EMAIL',
    'booking.phone': 'TÉLÉPHONE',
    'booking.dates': 'DATES PRÉFÉRÉES',
    'booking.message': 'MESSAGE (OPTIONNEL)',
    'booking.terms': 'J\'accepte les termes et conditions et la politique de confidentialité',
    'booking.submit': 'RÉSERVER',
    'booking.whatsapp': 'RÉSERVER VIA WHATSAPP',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.heading': 'Connectons-nous',
    'contact.description': 'Prêt à découvrir le mélange parfait de surf et de golf?',
    'contact.description2': 'Contactez-nous et faisons-le.',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsappDesc': 'Envoyez-nous un message',
    'contact.instagram': 'Instagram',
    'contact.instagramDesc': 'Suivez notre voyage',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envoyez-nous un message',
    'contact.response': 'Nous répondons généralement dans les 24 heures',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};