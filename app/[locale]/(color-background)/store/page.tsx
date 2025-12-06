import Link from 'next/link';

// Define the type for store items
type StoreItem = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  price: string;
  url: string;
};

// Define the type for the full translation object
type TranslationData = {
  title: string;
  intro: string;
  detailsBtn: string;
  items: StoreItem[];
};

const translations: Record<string, TranslationData> = {
  en: {
    title: "STORE",
    intro: "Welcome to our store. Browse our selection of products and services below.",
    detailsBtn: "Details",
    items: [
      {
        id: 1,
        name: "Gift Card",
        description: "Give the gift of art with a tattoo gift card - perfect for someone special who's been thinking about getting inked.",
        imageSrc: "http://95.216.209.117/store/store1.jpg",
        price: "",
        url: "/en/store/giftcard"
      }
    ]
  },
  et: {
    title: "POOD",
    intro: "Tere tulemast meie poodi. Sirvige meie tooteid ja teenuseid allpool.",
    detailsBtn: "Vaata lähemalt",
    items: [
      {
        id: 1,
        name: "Kinkekaart",
        description: "Kingi kunsti tätoveeringu kinkekaardiga – ideaalne kingitus kellelegi erilisele, kes on mõelnud tätoveeringu peale.",
        imageSrc: "http://95.216.209.117/store/store1.jpg",
        price: "",
        url: "/et/store/giftcard"
      }
    ]
  },
  de: {
    title: "SHOP",
    intro: "Willkommen in unserem Shop. Stöbern Sie unten in unserer Auswahl an Produkten und Dienstleistungen.",
    detailsBtn: "Details",
    items: [
      {
        id: 1,
        name: "Geschenkgutschein",
        description: "Verschenken Sie Kunst mit einem Tattoo-Gutschein – perfekt für jemanden, der schon lange über ein Tattoo nachdenkt.",
        imageSrc: "http://95.216.209.117/store/store1.jpg",
        price: "",
        url: "/de/store/giftcard"
      }
    ]
  }
};

export default async function StoreContent({params}: { params: any }) {
  const {locale} = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-8 text-center text-accent">{t.title}</h1>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-light-gray">
              {t.intro}
            </p>
          </div>

          {/* Store Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t.items.map((item) => (
              <div
                key={item.id}
                className="border-2 border-accent overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 bg-dark-gray bg-opacity-80 flex flex-col flex-grow">
                  <h3 className="text-xl text-accent mb-2">{item.name}</h3>
                  <p className="text-light-gray text-sm mb-4 flex-grow">{item.description}</p>

                  <div className="flex w-full items-center mt-auto">
                    {item.price && <span className="text-accent mr-4">{item.price}</span>}
                    <Link
                      href={item.url}
                      className="group w-full block"
                    >
                      <div className="px-4 py-2 border-2 border-accent text-center transition-all hover:bg-accent">
                        <p className="text-accent group-hover:text-dark-gray font-medium transition-colors">
                          {t.detailsBtn}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}