// components/BookingForm.tsx
'use client';

import {useState} from 'react';

// You can keep translations here or move them to a separate file
const translations = {
  en: {
    title: "BOOKING",
    instagramText: "You can also always contact me on",
    instagramLinkText: "Instagram",
    bookingBtn: "Booking",
    contactBtn: "General Contact",
    name: "Name",
    email: "Email",
    phone: "Phone (Optional)",
    description: "Tattoo Description",
    placement: "Placement",
    size: "Approximate Size",
    location: "Location",
    pinterestRefs: "Pinterest References",
    pinterestPlaceholder: "Paste your Pinterest links or describe your reference images here...",
    submit: "Submit"
  },
  et: {
    title: "BRONEERIMINE",
    instagramText: "Võid mind alati ka Instagramis kontakteerida",
    instagramLinkText: "Instagram",
    bookingBtn: "Broneering",
    contactBtn: "Üldkontakt",
    name: "Nimi",
    email: "E-post",
    phone: "Telefon (valikuline)",
    description: "Tätoveeringu kirjeldus",
    placement: "Paigutus",
    size: "Umbkaudne suurus",
    location: "Asukoht",
    pinterestRefs: "Pinteresti viited",
    pinterestPlaceholder: "Kleebi siia Pinteresti lingid või kirjuta oma viidetest...",
    submit: "Saada"
  },
  de: {
    title: "BUCHUNG",
    instagramText: "Du kannst mich auch jederzeit auf",
    instagramLinkText: "Instagram",
    bookingBtn: "Buchung",
    contactBtn: "Allgemeiner Kontakt",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon (Optional)",
    description: "Tattoo Beschreibung",
    placement: "Platzierung",
    size: "Ungefähre Größe",
    location: "Ort",
    pinterestRefs: "Pinterest Referenzen",
    pinterestPlaceholder: "Füge hier deine Pinterest-Links ein oder beschreibe deine Referenzbilder...",
    submit: "Absenden"
  }
};

export default function BookingForm({locale}: { locale: string }) {
  // Ensure locale matches one of your keys, fallback to 'en' if not
  const t = translations[locale as keyof typeof translations] || translations.en;

  const [bookingType, setBookingType] = useState<'calendar' | 'form'>('calendar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    placement: '',
    size: '',
    location: '',
    pinterestRefs: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.submit + '! We will contact you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center text-accent">{t.title}</h1>

      <div className="max-w-2xl mx-auto mb-8 text-center">
        <p className="text-light-gray">
          {t.instagramText}{" "}
          <a href="https://www.instagram.com/tarvokerves/" target="_blank" rel="noopener noreferrer"
             className="text-accent hover:underline">{t.instagramLinkText}</a>
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium border-2 border-accent rounded-l-lg ${bookingType === 'calendar' ? 'bg-accent text-dark-gray' : 'bg-transparent text-accent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => setBookingType('calendar')}
          >
            {t.bookingBtn}
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium border-2 border-accent rounded-r-lg ${bookingType === 'form' ? 'bg-accent text-dark-gray' : 'bg-transparent text-accent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => setBookingType('form')}
          >
            {t.contactBtn}
          </button>
        </div>
      </div>

      {bookingType === 'calendar' && (
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cal-name" className="block mb-2 text-accent">{t.name}</label>
              <input type="text" id="cal-name" name="name" value={formData.name} onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-email" className="block mb-2 text-accent">{t.email}</label>
              <input type="email" id="cal-email" name="email" value={formData.email} onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-phone" className="block mb-2 text-accent">{t.phone}</label>
              <input type="tel" id="cal-phone" name="phone" value={formData.phone} onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"/>
            </div>

            <div>
              <label htmlFor="cal-description" className="block mb-2 text-accent">{t.description}</label>
              <textarea id="cal-description" name="message" value={formData.message} onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                        required></textarea>
            </div>

            <div>
              <label htmlFor="cal-placement" className="block mb-2 text-accent">{t.placement}</label>
              <input type="text" id="cal-placement" name="placement" value={formData.placement}
                     onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-size" className="block mb-2 text-accent">{t.size}</label>
              <input type="text" id="cal-size" name="size" value={formData.size} onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-location" className="block mb-2 text-accent">{t.location}</label>
              <input type="text" id="cal-location" name="location" value={formData.location}
                     onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-pinterest" className="block mb-2 text-accent">{t.pinterestRefs}</label>
              <textarea id="cal-pinterest" name="pinterestRefs" value={formData.pinterestRefs}
                        onChange={handleInputChange} rows={4} placeholder={t.pinterestPlaceholder}
                        className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      )}

      {bookingType === 'form' && (
        <div className="max-w-2xl mx-auto">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="4edfb1a2-3a27-4f92-8454-314f3569efd2"/>
            <div>
              <label htmlFor="name" className="block mb-2 text-accent">{t.name}</label>
              <input type="text" id="name" name="name"
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-accent">{t.email}</label>
              <input type="email" id="email" name="email"
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-accent">{t.description}</label>
              <textarea id="message" name="message" rows={5}
                        className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                        required></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}