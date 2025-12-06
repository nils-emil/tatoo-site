import React from 'react';

const translations = {
  en: {
    title: "BIO",
    aboutTitle: "About Me",
    aboutText: "I am a professional tattoo artist with a passion for creating dark, moody, nature-inspired designs. My work is characterized by intricate linework and a deep connection to natural elements. I believe that each tattoo should tell a story and be as unique as the person wearing it.",
    styleTitle: "Tattoo Style",
    styleText: "My style combines elements of blackwork, fine linework, and nature-inspired imagery. I specialize in creating designs that flow with the body's natural contours, creating pieces that look like they've always been a part of you.",
    expTitle: "Experience & Education",
    expText: "With over 20 years of professional experience, I've developed a unique approach to tattooing. I've trained under master artists in both Europe and Asia, and continue to evolve my craft through ongoing education and artistic exploration.",
    locTitle: "Basel ↔ Tallinn",
    locText: "I split my time between my studios in Basel, Switzerland and Tallinn, Estonia.",
    guestTitle: "Guest Spots & Travel",
    guestText: "I occasionally do guest spots at select studios around Europe. Follow my Instagram for announcements about upcoming travel dates and guest appearances."
  },
  et: {
    title: "BIO",
    aboutTitle: "Minust",
    aboutText: "Olen professionaalne tätoveerija, kelle kireks on luua tumedaid, atmosfäärilisi ja loodusest inspireeritud kavandeid. Minu töid iseloomustab peen joonegraafika ja sügav side looduselementidega. Usun, et iga tätoveering peaks rääkima loo ja olema sama ainulaadne kui selle kandja.",
    styleTitle: "Stiil",
    styleText: "Minu stiil ühendab *blackwork*'i, peene joonegraafika ja loodusmotiivid. Spetsialiseerun disainidele, mis järgivad keha loomulikke kumerusi, luues teoseid, mis tunduvad justkui oleksid need alati olnud osa sinust.",
    expTitle: "Kogemus ja haridus",
    expText: "Üle 20-aastase töökogemusega olen välja töötanud unikaalse lähenemise tätoveerimisele. Olen õppinud meistrite käe all nii Euroopas kui ka Aasias ning arendan oma oskusi pideva õppe ja kunstiliste katsetuste kaudu.",
    locTitle: "Basel ↔ Tallinn",
    locText: "Jagan oma aega stuudiote vahel Baselis (Šveits) ja Tallinnas (Eesti).",
    guestTitle: "Külalisesinemised ja reisimine",
    guestText: "Teen aeg-ajalt külalisesinemisi valitud stuudiotes üle Euroopa. Jälgi minu Instagrami, et olla kursis tulevaste reisikuupäevade ja esinemistega."
  },
  de: {
    title: "BIO",
    aboutTitle: "Über mich",
    aboutText: "Ich bin ein professioneller Tätowierer mit einer Leidenschaft für dunkle, stimmungsvolle und von der Natur inspirierte Designs. Meine Arbeit zeichnet sich durch feine Linienführung und eine tiefe Verbindung zu natürlichen Elementen aus. Ich glaube, dass jedes Tattoo eine Geschichte erzählen und so einzigartig sein sollte wie die Person, die es trägt.",
    styleTitle: "Tätowierstil",
    styleText: "Mein Stil kombiniert Elemente von Blackwork, feiner Linienführung und naturinspirierter Bildsprache. Ich spezialisiere mich auf Designs, die den natürlichen Konturen des Körpers folgen und so wirken, als wären sie schon immer ein Teil von Ihnen gewesen.",
    expTitle: "Erfahrung & Ausbildung",
    expText: "Mit über 20 Jahren Berufserfahrung habe ich einen einzigartigen Ansatz zum Tätowieren entwickelt. Ich wurde von Meisterkünstlern in Europa und Asien ausgebildet und entwickle mein Handwerk durch ständige Weiterbildung und künstlerische Forschung weiter.",
    locTitle: "Basel ↔ Tallinn",
    locText: "Ich teile meine Zeit zwischen meinen Studios in Basel (Schweiz) und Tallinn (Estland) auf.",
    guestTitle: "Gastauftritte & Reisen",
    guestText: "Ich mache gelegentlich Gastauftritte in ausgewählten Studios in ganz Europa. Folgen Sie mir auf Instagram für Ankündigungen zu kommenden Reisedaten und Gastauftritten."
  }
};

export default async function BioPage({params}: { params: any }) {
  const {locale} = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center text-accent">{t.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-96 border-2 border-accent overflow-hidden">
            <img
              src="/tarvo.jpg"
              alt="Portrait of Tattoo Artist"
              style={{objectFit: 'cover', objectPosition: 'center'}}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="border-2 border-accent p-6 bg-dark-gray bg-opacity-50">
          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">{t.aboutTitle}</h2>
            <p className="text-light-gray">
              {t.aboutText}
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">{t.styleTitle}</h2>
            <p className="text-light-gray">
              {t.styleText}
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">{t.expTitle}</h2>
            <p className="text-light-gray">
              {t.expText}
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">{t.locTitle}</h2>
            <p className="text-light-gray">
              {t.locText}
            </p>
          </div>
          <div>
            <h2 className="text-xl mb-3 text-accent">{t.guestTitle}</h2>
            <p className="text-light-gray">
              {t.guestText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}