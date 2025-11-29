'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the types for our gallery items
type GalleryItem = {
  id: number;
  title: string;
  description: string;
  story?: string;
  category: string[];
  bodyPart: string;
  imageSrc: string;
};

// Sample gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Forest Raven",
    description: "Blackwork raven with forest elements",
    story: "Inspired by Nordic mythology and the connection between ravens and wisdom.",
    category: ["Blackwork", "Linework"],
    bodyPart: "Arms",
    imageSrc: "/placeholder-tattoo-1.jpg"
  },
  {
    id: 2,
    title: "Mountain River",
    description: "Fine linework landscape piece",
    category: ["Linework"],
    bodyPart: "Legs",
    imageSrc: "/placeholder-tattoo-2.jpg"
  },
  {
    id: 3,
    title: "Geometric Wolf",
    description: "Wolf design with geometric elements",
    category: ["Blackwork", "Flash"],
    bodyPart: "Torso",
    imageSrc: "/placeholder-tattoo-3.jpg"
  },
  {
    id: 4,
    title: "Tree of Life",
    description: "Detailed tree with roots and branches",
    story: "Represents the connection between earth and sky, past and future.",
    category: ["Linework"],
    bodyPart: "Arms",
    imageSrc: "/placeholder-tattoo-4.jpg"
  },
  {
    id: 5,
    title: "Moon Phases",
    description: "Lunar cycle with botanical elements",
    category: ["Blackwork", "Flash"],
    bodyPart: "Arms",
    imageSrc: "/placeholder-tattoo-5.jpg"
  },
  {
    id: 6,
    title: "Mountain Range",
    description: "Minimalist mountain landscape",
    category: ["Linework"],
    bodyPart: "Legs",
    imageSrc: "/placeholder-tattoo-6.jpg"
  },
  {
    id: 7,
    title: "Botanical Study",
    description: "Detailed plant and flower illustration",
    category: ["Linework"],
    bodyPart: "Arms",
    imageSrc: "/placeholder-tattoo-7.jpg"
  },
  {
    id: 8,
    title: "Geometric Fox",
    description: "Fox design with geometric patterns",
    category: ["Blackwork", "Flash"],
    bodyPart: "Torso",
    imageSrc: "/placeholder-tattoo-8.jpg"
  },
  {
    id: 9,
    title: "River Stones",
    description: "Balanced stone stack with flowing water",
    story: "Represents balance and tranquility in life's journey.",
    category: ["Linework"],
    bodyPart: "Legs",
    imageSrc: "/placeholder-tattoo-9.jpg"
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="aspect-square border border-accent cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(230,161,68,0.5)]"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative w-full h-full bg-dark-gray">
              {/* Placeholder for tattoo image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-accent text-sm md:text-base">{item.title}</h3>
                  <p className="text-light-gray text-xs md:text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-100 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-light-gray hover:text-accent bg-dark-gray bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            <div className="aspect-square bg-black border border-accent">
              {/* Placeholder for large tattoo image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-light-gray">Tattoo Image</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
