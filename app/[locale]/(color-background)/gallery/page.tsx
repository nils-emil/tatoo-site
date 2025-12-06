'use client';

import {useState} from 'react';

type GalleryItem = {
  id: number;
  imageSrc: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageSrc: "/gallery/1.jpg"
  },
  {
    id: 2,
    imageSrc: "/gallery/2.jpg"
  },
  {
    id: 3,
    imageSrc: "/gallery/3.jpg"
  },
  {
    id: 4,
    imageSrc: "/gallery/4.jpg"
  },
  {
    id: 5,
    imageSrc: "/gallery/5.jpg"
  },
  {
    id: 6,
    imageSrc: "/gallery/6.jpg"
  },
  {
    id: 7,
    imageSrc: "/gallery/7.jpg"
  },
  {
    id: 8,
    imageSrc: "/gallery/8.jpg"
  },
  {
    id: 9,
    imageSrc: "/gallery/9.jpg"
  },
  {
    id: 10,
    imageSrc: "/gallery/10.jpg"
  },
  {
    id: 11,
    imageSrc: "/gallery/11.jpg"
  },
  {
    id: 12,
    imageSrc: "/gallery/12.jpg"
  }
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
      {selectedItem && (
        <button
          type="button"
          aria-label="Close"
          className="fixed top-10 right-10 z-1500 bg-black border-2 border-accent text-white hover:bg-accent hover:text-black rounded-full w-10 h-10 flex items-center justify-center text-xl"
          onClick={() => setSelectedItem(null)}
        >
          ✕
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="aspect-square border-2 border-accent cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(230,161,68,0.5)]"
            onClick={(e) => {
              e.preventDefault();
              setSelectedItem(item);
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={item.imageSrc}
                alt="Tattoo Gallery Image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-100 z-1000 flex items-center justify-center p-4"
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem(null);
          }}
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
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem(null);
              }}
            >
              ✕
            </button>
            <div
              className="bg-black border-2 border-accent relative flex items-center justify-center overflow-hidden h-[90vh]">
              {selectedItem && (
                <img
                  src={selectedItem.imageSrc}
                  alt="Tattoo Gallery Large Image"
                  className="max-w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
