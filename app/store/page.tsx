'use client';

import {useState} from 'react';
import Image from 'next/image';
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

// Store items data
const storeItems: StoreItem[] = [
  {
    id: 1,
    name: "Gift Card",
    description: "Give the gift of art with a tattoo gift card - perfect for someone special who's been thinking about getting inked.",
    imageSrc: "/store/store1.jpg",
    price: "",
    url: "/store/giftcard"
  }
  // More items can be added here in the future
];

export default function StorePage() {
  // No modal functionality needed

  return (
    <div className="relative min-h-screen">
      {/* Using site-wide background from bg.png */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-8 text-center">STORE</h1>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-light-gray">
              Welcome to our store. Browse our selection of products and services below.
            </p>
          </div>

          {/* Store Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {storeItems.map((item) => (
              <div
                key={item.id}
                className="border border-accent overflow-hidden"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-dark-gray bg-opacity-80">
                  <h3 className="text-xl text-accent mb-2">{item.name}</h3>
                  <p className="text-light-gray text-sm mb-3">{item.description}</p>
                  <div className="flex w-full items-center">
                    <span className="text-accent">{item.price}</span>
                    <Link
                      href={item.url}
                      className="px-4 w-full py-2 border-2 hover:bg-accent"
                    >
                      <p className="text-bla">
                        Details
                      </p>
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
