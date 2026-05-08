import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "bs" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  bs: {
    "nav.services": "Usluge",
    "nav.about": "O nama",
    "nav.process": "Proces",
    "nav.contact": "Kontakt",
    "nav.cta": "Zatraži ponudu",

    "hero.eyebrow": "Web Studio",
    "hero.title": "Moderne web stranice koje donose rezultate.",
    "hero.subtitle":
      "A&V Web Studio dizajnira i razvija brze, elegantne i skalabilne web stranice za ambiciozne brendove.",
    "hero.cta1": "Započni projekat",
    "hero.cta2": "Pogledaj usluge",

    "services.title": "Šta radimo",
    "services.subtitle": "Sveobuhvatna rješenja za vaše digitalno prisustvo.",
    "services.1.title": "Web Dizajn",
    "services.1.desc":
      "Čist, moderan dizajn fokusiran na korisničko iskustvo i konverziju.",
    "services.2.title": "Web Razvoj",
    "services.2.desc":
      "Brze, sigurne i skalabilne web aplikacije sa najnovijim tehnologijama.",
    "services.3.title": "SEO & Optimizacija",
    "services.3.desc":
      "Tehnička optimizacija i SEO za bolju vidljivost na Google-u.",

    "about.eyebrow": "O nama",
    "about.title": "Mali tim. Velika posvećenost.",
    "about.desc":
      "Mi smo A&V — dvojica zaljubljenika u dizajn i kod. Vjerujemo da svaki brend zaslužuje web stranicu koja izgleda jednako dobro koliko i radi. Radimo blisko sa klijentima, transparentno i sa fokusom na dugoročne rezultate.",

    "process.title": "Naš proces",
    "process.subtitle": "Jednostavan, transparentan i učinkovit.",
    "process.1.title": "Razgovor",
    "process.1.desc":
      "Upoznajemo vaš brend, ciljeve i publiku kroz detaljan razgovor.",
    "process.2.title": "Dizajn",
    "process.2.desc":
      "Kreiramo prototipe i dizajn koji odražava vašu viziju.",
    "process.3.title": "Razvoj",
    "process.3.desc":
      "Pretvaramo dizajn u brzu, responzivnu i sigurnu web stranicu.",
    "process.4.title": "Lansiranje",
    "process.4.desc":
      "Objavljujemo, mjerimo i nastavljamo podršku nakon lansiranja.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Imate ideju? Razgovarajmo.",
    "contact.desc":
      "Pošaljite nam poruku i odgovorit ćemo u roku od 24 sata.",
    "contact.name": "Ime",
    "contact.email": "Email",
    "contact.message": "Poruka",
    "contact.send": "Pošalji poruku",
    "contact.sent": "Hvala! Javit ćemo vam se uskoro.",

    "footer.tagline": "Dizajniramo digitalna iskustva koja ostavljaju utisak.",
    "footer.rights": "Sva prava zadržana.",
  },
  en: {
    "nav.services": "Services",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Get a quote",

    "hero.eyebrow": "Web Studio",
    "hero.title": "Modern websites that drive results.",
    "hero.subtitle":
      "A&V Web Studio designs and builds fast, elegant and scalable websites for ambitious brands.",
    "hero.cta1": "Start a project",
    "hero.cta2": "View services",

    "services.title": "What we do",
    "services.subtitle": "Comprehensive solutions for your digital presence.",
    "services.1.title": "Web Design",
    "services.1.desc":
      "Clean, modern design focused on user experience and conversion.",
    "services.2.title": "Web Development",
    "services.2.desc":
      "Fast, secure and scalable web apps using the latest technologies.",
    "services.3.title": "SEO & Optimization",
    "services.3.desc":
      "Technical optimization and SEO for better Google visibility.",

    "about.eyebrow": "About",
    "about.title": "Small team. Big commitment.",
    "about.desc":
      "We are A&V — two craftsmen passionate about design and code. We believe every brand deserves a website that looks as good as it performs. We work closely with our clients, transparently and focused on long-term results.",
    "about.stat2": "Happy clients",
    "about.stat3": "Years of experience",

    "process.title": "Our process",
    "process.subtitle": "Simple, transparent and effective.",
    "process.1.title": "Discovery",
    "process.1.desc":
      "We learn about your brand, goals and audience through a detailed conversation.",
    "process.2.title": "Design",
    "process.2.desc": "We create prototypes and visuals that match your vision.",
    "process.3.title": "Development",
    "process.3.desc":
      "We turn design into a fast, responsive and secure website.",
    "process.4.title": "Launch",
    "process.4.desc":
      "We launch, measure and continue support after going live.",

    "contact.eyebrow": "Contact",
    "contact.title": "Got an idea? Let's talk.",
    "contact.desc": "Send us a message and we'll reply within 24 hours.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sent": "Thanks! We'll get back to you soon.",

    "footer.tagline": "We design digital experiences that leave a mark.",
    "footer.rights": "All rights reserved.",
  },
};

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "bs", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("bs");
  const t = (key: string) => translations[lang][key] ?? key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
