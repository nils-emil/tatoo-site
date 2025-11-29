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
  const [activeFilters, setActiveFilters] = useState<{
    category: string | null;
    bodyPart: string | null;
  }>({
    category: null,
    bodyPart: null,
  });

  // Filter gallery items based on active filters
  const filteredItems = galleryItems.filter(item => {
    if (activeFilters.category && !item.category.includes(activeFilters.category)) {
      return false;
    }
    if (activeFilters.bodyPart && item.bodyPart !== activeFilters.bodyPart) {
      return false;
    }
    return true;
  });

  // Toggle filter
  const toggleFilter = (type: 'category' | 'bodyPart', value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? null : value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center">GALLERY</h1>
      
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <h2 className="w-full text-center text-xl mb-2">Style</h2>
          <button 
            className={`px-4 py-2 border border-accent rounded-full transition-colors ${activeFilters.category === 'Blackwork' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => toggleFilter('category', 'Blackwork')}
          >
            Blackwork
          </button>
          <button 
            className={`px-4 py-2 border border-accent rounded-full transition-colors ${activeFilters.category === 'Linework' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => toggleFilter('category', 'Linework')}
          >
            Linework
          </button>
          <button 
            className={`px-4 py-2 border border-accent rounded-full transition-colors ${activeFilters.category === 'Flash' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => toggleFilter('category', 'Flash')}
          >
            Flash
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <h2 className="w-full text-center text-xl mb-2">Placement</h2>
          <button 
            className={`px-4 py-2 border border-accent rounded-full transition-colors ${activeFilters.bodyPart === 'Arms' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => toggleFilter('bodyPart', 'Arms')}
          >
            Arms
          </button>
          <button 
            className={`px-4 py-2 border border-accent rounded-full transition-colors ${activeFilters.bodyPart === 'Legs' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => toggleFilter('bodyPart', 'Legs')}
          >
            Legs
          </button>
          <button 
            className={`px-4 py-2 border border-accent rounded-full transition-colors ${activeFilters.bodyPart === 'Torso' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => toggleFilter('bodyPart', 'Torso')}
          >
            Torso
          </button>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredItems.map((item) => (
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
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-dark-gray border-2 border-accent max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl text-accent">{selectedItem.title}</h2>
              <button 
                className="text-light-gray hover:text-accent"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square bg-black border border-accent">
                {/* Placeholder for large tattoo image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-light-gray">Tattoo Image</span>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h3 className="text-xl text-accent mb-2">Description</h3>
                  <p className="text-light-gray">{selectedItem.description}</p>
                </div>
                
                {selectedItem.story && (
                  <div className="mb-6">
                    <h3 className="text-xl text-accent mb-2">Story</h3>
                    <p className="text-light-gray">{selectedItem.story}</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl text-accent mb-2">Details</h3>
                  <p className="text-light-gray">Style: {selectedItem.category.join(', ')}</p>
                  <p className="text-light-gray">Placement: {selectedItem.bodyPart}</p>
                </div>
                
                <Link 
                  href={`/booking?inspiration=${selectedItem.id}`}
                  className="inline-block px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors"
                >
                  Book Similar Tattoo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}