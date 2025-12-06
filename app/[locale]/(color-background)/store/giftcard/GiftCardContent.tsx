'use client';

import {useState} from 'react';

type StoreImage = {
  id: number;
  src: string;
  alt: string;
  type?: 'image' | 'video';
  aspectRatio?: 'square' | 'tall' | 'video';
};

const storeImages: StoreImage[] = [
  {
    id: 1,
    src: "/store/store1.jpg",
    alt: "Gift Card Design 1",
    type: 'image',
    aspectRatio: 'square'
  },
  {
    id: 3,
    src: "/store/store.mov",
    alt: "Video of Gift Card",
    type: 'video',
    aspectRatio: 'video'
  },
  {
    id: 2,
    src: "/store/store2.jpg",
    alt: "Gift Card Design 2",
    type: 'image',
    aspectRatio: 'square'
  },
];

const translations = {
  en: {
    title: "GIFT CARDS",
    intro: "I also offer gift cards. Give the gift of art with a tattoo gift card - perfect for someone special who's been thinking about getting inked. Gift cards are in sum of 100, or 250.",
    paymentTitle: "Payment Methods",
    paymentDesc: "Choose your preferred payment method to complete your purchase",
    regions: {
      intl: "International",
      us: "US",
      swiss: "Swiss"
    },
    select: "Select"
  },
  et: {
    title: "KINKEKAARDID",
    intro: "Pakun ka kinkekaarte. Kingi kunsti tätoveeringu kinkekaardiga – ideaalne kingitus kellelegi erilisele, kes on mõelnud tätoveeringu peale. Kinkekaardid on väärtuses 100 või 250.",
    paymentTitle: "Maksemeetodid",
    paymentDesc: "Ostu lõpuleviimiseks vali eelistatud makseviis",
    regions: {
      intl: "Rahvusvaheline",
      us: "USA",
      swiss: "Šveits"
    },
    select: "Vali"
  },
  de: {
    title: "GESCHENKGUTSCHEINE",
    intro: "Ich biete auch Geschenkgutscheine an. Verschenken Sie Kunst mit einem Tattoo-Gutschein – perfekt für jemanden, der schon lange über ein Tattoo nachdenkt. Gutscheine gibt es im Wert von 100 oder 250.",
    paymentTitle: "Zahlungsmethoden",
    paymentDesc: "Wählen Sie Ihre bevorzugte Zahlungsmethode, um den Kauf abzuschließen",
    regions: {
      intl: "International",
      us: "USA",
      swiss: "Schweiz"
    },
    select: "Auswählen"
  }
};

type Locale = 'en' | 'et' | 'de';

export default function GiftCardContent({locale}: { locale: string }) {
  const t = translations[locale as keyof typeof translations] || translations.en;
  const [selectedImage, setSelectedImage] = useState<StoreImage | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://buy.stripe.com/00wcN56QscW9foRaav2Fa02';
  };

  return (
    <div className="relative min-h-screen">
      {selectedImage && (
        <button
          type="button"
          aria-label="Close"
          className="fixed top-10 right-10 z-1500 bg-black border-2 border-accent text-white hover:bg-accent hover:text-black rounded-full w-10 h-10 flex items-center justify-center text-xl"
          onClick={() => setSelectedImage(null)}
        >
          ✕
        </button>
      )}

      <div className="container mx-auto px-4 py-16">

        <h1 className="text-3xl md:text-4xl mb-8 text-center text-accent">{t.title}</h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-light-gray">
              {t.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {storeImages.map((image) => (
              <div
                key={image.id}
                className={`border-2 border-accent overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                  image.aspectRatio === 'video' ? 'md:col-span-1' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square mx-auto">
                  {image.type === 'video' ? (
                    <video
                      src={image.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <div className="border-2 border-accent bg-dark-gray bg-opacity-20 p-6 rounded-sm font-bold">
              <h2 className="text-2xl text-accent mb-4 text-center">{t.paymentTitle}</h2>
              <p className="text-light-gray text-center mb-6">
                {t.paymentDesc}
              </p>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    className="border-2 border-accent p-4 hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-sm">
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center text-center"
                    >
                      <div className="text-2xl text-accent mb-2">Wise</div>
                      <div className="text-sm text-light-gray mb-4">{t.regions.intl}</div>
                      <div
                        className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-2">
                        <span className="text-accent text-2xl">W</span>
                      </div>
                      <span className="text-accent hover:underline mt-2">{t.select}</span>
                    </button>
                  </div>
                  <div
                    className="border-2 border-accent p-4 hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-sm">
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center text-center"
                    >
                      <div className="text-2xl text-accent mb-2">Venmo</div>
                      <div className="text-sm text-light-gray mb-4">{t.regions.us}</div>
                      <div
                        className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-2">
                        <span className="text-accent text-2xl">V</span>
                      </div>
                      <span className="text-accent hover:underline mt-2">{t.select}</span>
                    </button>
                  </div>

                  <div
                    className="border-2 border-accent p-4 hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-sm">
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center text-center"
                    >
                      <div className="text-2xl text-accent mb-2">Twint</div>
                      <div className="text-sm text-light-gray mb-4">{t.regions.swiss}</div>
                      <div
                        className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-2">
                        <span className="text-accent text-2xl">T</span>
                      </div>
                      <span className="text-accent hover:underline mt-2">{t.select}</span>
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-1000 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-[90vw] relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <button
              className="absolute -top-12 right-0 md:top-2 md:right-2 text-light-gray hover:text-accent bg-dark-gray bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="bg-black border-2 border-accent relative flex items-center justify-center overflow-hidden">
              {selectedImage.type === 'video' ? (
                <video
                  src={selectedImage.src}
                  className="w-full object-contain"
                  style={{maxHeight: '80vh'}}
                  controls
                  autoPlay
                />
              ) : (
                <img
                  className="relative max-h-[80vh] w-auto"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}