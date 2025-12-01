'use client';

import {useState} from 'react';

// Define the type for store images
type StoreImage = {
  id: number;
  src: string;
  alt: string;
  type?: 'image' | 'video';
  aspectRatio?: 'square' | 'tall' | 'video';
};

// Store images data
const storeImages: StoreImage[] = [
  {
    id: 1,
    src: "http://95.216.209.117/store/store1.jpg",
    alt: "Gift Card Design 1",
    type: 'image',
    aspectRatio: 'square'
  },
  {
    id: 3,
    src: "http://95.216.209.117/store/store.mov",
    alt: "Video of Gift Card",
    type: 'video',
    aspectRatio: 'video'
  },
  {
    id: 2,
    src: "http://95.216.209.117/store/store2.jpg",
    alt: "Gift Card Design 2",
    type: 'image',
    aspectRatio: 'square'
  },
];

export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<StoreImage | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    window.location.href = 'https://buy.stripe.com/00wcN56QscW9foRaav2Fa02'
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen">
      {/* Using site-wide background from bg.png */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-8 text-center">GIFT CARDS</h1>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-light-gray">
              I also offer gift cards. Give the gift of art with a tattoo gift card - perfect
              for someone special who's been thinking about getting inked. Gift cards are in sum of 100, or 250.
            </p>
          </div>

          {/* Gift Card Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {storeImages.map((image) => (
              <div
                key={image.id}
                className={`border-2 border-accent overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(230,161,68,0.5)] ${
                  image.aspectRatio === 'video' ? 'md:col-span-1' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className={`relative aspect-square max-w-xs mx-auto aspect-square'}`}>
                  {image.type === 'video' ? (
                    <video
                      src={image.src}
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            {/* Payment Methods Section */}
            <div className="border-2 border-accent bg-dark-gray bg-opacity-20 p-6 rounded-sm font-bold">
              <h2 className="text-2xl text-accent mb-4 text-center">Payment Methods</h2>
              <p className="text-light-gray text-center mb-6">
                Choose your preferred payment method to complete your purchase
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Payment Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Wise Payment Option */}
                  <div
                    className="border-2 border-accent p-4 hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-sm">
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center text-center"
                    >
                      <div className="text-2xl text-accent mb-2">Wise</div>
                      <div className="text-sm text-light-gray mb-4">International</div>
                      <div
                        className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-2">
                        <span className="text-accent text-2xl">W</span>
                      </div>
                      <span className="text-accent hover:underline mt-2">Select</span>
                    </button>
                  </div>

                  {/* Venmo Payment Option */}
                  <div
                    className="border-2 border-accent p-4 hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-sm">
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center text-center"
                    >
                      <div className="text-2xl text-accent mb-2">Venmo</div>
                      <div className="text-sm text-light-gray mb-4">US</div>
                      <div
                        className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-2">
                        <span className="text-accent text-2xl">V</span>
                      </div>
                      <span className="text-accent hover:underline mt-2">Select</span>
                    </button>
                  </div>

                  {/* Twint Payment Option */}
                  <div
                    className="border-2 border-accent p-4 hover:bg-accent hover:bg-opacity-10 transition-all duration-300 rounded-sm">
                    <button
                      type="submit"
                      className="w-full flex flex-col items-center text-center"
                    >
                      <div className="text-2xl text-accent mb-2">Twint</div>
                      <div className="text-sm text-light-gray mb-4">Swiss</div>
                      <div
                        className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-2">
                        <span className="text-accent text-2xl">T</span>
                      </div>
                      <span className="text-accent hover:underline mt-2">Select</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-100 z-50 flex items-center justify-center p-4"
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
              className="absolute top-2 right-2 text-light-gray hover:text-accent bg-dark-gray bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div
              className="bg-black border-2 border-accent relative flex items-center justify-center overflow-hidden">
              {selectedImage.type === 'video' ? (
                <video
                  src={selectedImage.src}
                  className="w-full object-contain"
                  style={{maxHeight: '90vh'}}
                  autoPlay
                />
              ) : (
                <img
                  className="relative max-h-[90vh]"
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
