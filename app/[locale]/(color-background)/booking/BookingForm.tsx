'use client';

import {useState} from 'react';

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
    message: "Message",
    placement: "Placement",
    size: "Approximate Size",
    // Changed prompt to reflect file upload
    location: "Picture of placement (your skin)",
    photoRef1: "Photo reference",
    placementTooltip: "Please be specific as possible. \"Inner forearm\" rather than just \"forearm\".",
    submit: "Submit",
    fileInstruction: "Upload photo(s) here (Max size 10MB per file)"
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
    message: "Sõnum",
    placement: "Paigutus",
    size: "Umbkaudne suurus",
    location: "Paigutuse pilt (sinu nahk)",
    photoRef1: "Foto viide",
    placementTooltip: "Palun ole võimalikult täpne. „Küünarvarre sisekülg“ mitte lihtsalt „küünarvars“.",
    submit: "Saada",
    fileInstruction: "Laadi foto(d) siia (Maksimaalne suurus 10MB faili kohta)"
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
    message: "Nachricht",
    placement: "Platzierung",
    size: "Ungefähre Größe",
    // Changed prompt to reflect file upload
    location: "Bild der Platzierung (deine Haut)",
    photoRef1: "Foto Referenz",
    placementTooltip: "Bitte seien Sie so konkret wie möglich. \"Innenseite des Unterarms\" statt nur \"Unterarm\".",
    submit: "Absenden",
    fileInstruction: "Foto(s) hier hochladen (Max. Größe 10MB pro Datei)"
  }
};

export default function BookingForm({locale}: { locale: string }) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  const [bookingType, setBookingType] = useState<'calendar' | 'form'>('calendar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    placement: '',
    size: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    if (e.target.type !== 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const RequiredAsterisk = () => (
    <span className="text-red-500 ml-1">*</span>
  );

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
            className={`px-6 py-3 text-sm font-medium border-2 border-accent transition-colors ${bookingType === 'calendar' ? 'bg-accent text-dark-gray rounded-l-lg' : 'bg-transparent text-accent hover:bg-accent hover:bg-opacity-20 rounded-l-lg'}`}
            onClick={() => setBookingType('calendar')}
          >
            {t.bookingBtn}
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium border-2 border-accent transition-colors ${bookingType === 'form' ? 'bg-accent text-dark-gray rounded-r-lg' : 'bg-transparent text-accent hover:bg-accent hover:bg-opacity-20 rounded-r-lg'}`}
            onClick={() => setBookingType('form')}
          >
            {t.contactBtn}
          </button>
        </div>
      </div>

      {bookingType === 'calendar' && (
        <div className="max-w-2xl mx-auto">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4"
                encType="multipart/form-data">
            <input type="hidden" name="access_key" value="4edfb1a2-3a27-4f92-8454-314f3569efd2"/>

            <div>
              <label htmlFor="cal-name" className="block mb-2 text-accent">
                {t.name}
                <RequiredAsterisk/>
              </label>
              <input type="text" id="cal-name" name="name" value={formData.name} onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-email" className="block mb-2 text-accent">
                {t.email}
                <RequiredAsterisk/>
              </label>
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
              <label htmlFor="cal-description" className="block mb-2 text-accent">
                {t.description}
                <RequiredAsterisk/>
              </label>
              <textarea id="cal-description" name="message" value={formData.message} onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                        required></textarea>
            </div>

            <div>
              <label htmlFor="cal-placement" className="block mb-2 text-accent flex items-center">
                {t.placement}
                <RequiredAsterisk/>
              </label>
              <input type="text" id="cal-placement" name="placement" value={formData.placement}
                     onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
              <p className="text-xs text-light-gray mt-1">{t.placementTooltip}</p>
            </div>

            <div>
              <label htmlFor="cal-size" className="block mb-2 text-accent">
                {t.size}
                <RequiredAsterisk/>
              </label>
              <input type="text" id="cal-size" name="size" value={formData.size} onChange={handleInputChange}
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="cal-location" className="block mb-2 text-accent">{t.location}</label>
              <input
                type="file"
                id="cal-location"
                name="placement_photo"
                accept="image/*"
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-dark-gray hover:file:bg-opacity-90 transition duration-150"
              />
              <p className="text-xs text-light-gray mt-1">{t.fileInstruction}</p>
            </div>

            <div>
              <label htmlFor="cal-photoref1" className="block mb-2 text-accent">{t.photoRef1}</label>
              <input
                type="file"
                id="cal-photoref1"
                name="reference_photo_1"
                accept="image/*"
                multiple
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-dark-gray hover:file:bg-opacity-90 transition duration-150"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      )}

      {bookingType === 'form' && (
        <div className="max-w-2xl mx-auto">
          {/* General contact form - only Name, Email, and Message are required */}
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="4edfb1a2-3a27-4f92-8454-314f3569efd2"/>
            {/* NAME (Required) */}
            <div>
              <label htmlFor="name" className="block mb-2 text-accent">
                {t.name}
              </label>
              <input type="text" id="name" name="name"
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-accent">
                {t.email}
              </label>
              <input type="email" id="email" name="email"
                     className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                     required/>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-accent">
                {t.message}
              </label>
              <textarea id="message" name="message" rows={5}
                        className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                        required></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
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