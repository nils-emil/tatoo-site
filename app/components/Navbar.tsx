'use client';

import {useState} from 'react';
import Link from 'next/link';

const translations = {
  en: {
    bio: "BIO",
    gallery: "GALLERY",
    booking: "BOOKING",
    aftercare: "AFTERCARE",
    store: "STORE"
  },
  et: {
    bio: "BIO",
    gallery: "GALERII",
    booking: "BRONEERIMINE",
    aftercare: "JÄRELHOOLDUS",
    store: "POOD"
  },
  de: {
    bio: "BIO",
    gallery: "GALERIE",
    booking: "BUCHUNG",
    aftercare: "NACHSORGE",
    store: "SHOP"
  }
};

type Locale = 'en' | 'et' | 'de';

export default function Navbar({locale}: { locale: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[locale as Locale] || translations.en;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLink = (path: string) => `/${locale}${path}`;

  const navItems = [
    { label: t.bio, path: "/bio" },
    { label: t.gallery, path: "/gallery" },
    { label: t.booking, path: "/booking" },
    { label: t.aftercare, path: "/aftercare" },
    { label: t.store, path: "/store" },
  ];

  const dots = (
    <div className="mx-2 md:mx-3 flex items-center">
      <svg width="15" height="15" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="3" fill="currentColor" className="text-accent"/>
        <circle cx="20" cy="8" r="3" fill="currentColor" className="text-accent"/>
        <circle cx="32" cy="20" r="3" fill="currentColor" className="text-accent"/>
        <circle cx="20" cy="32" r="3" fill="currentColor" className="text-accent"/>
        <circle cx="8" cy="20" r="3" fill="currentColor" className="text-accent"/>
      </svg>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-gray bg-opacity-90 backdrop-blur-sm z-[100]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={getLink("/")} className="flex items-center">
          <img
            src="/bird.png"
            alt="Tattoo Artist Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </Link>

        <div className="hidden md:flex items-center text-base tracking-widest">
          {navItems.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <Link
                href={getLink(item.path)}
                className="text-foreground hover:text-accent transition-colors flex items-center pt-1"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && dots}
            </div>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-accent transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span
            className={`block w-6 h-0.5 bg-accent transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span
            className={`block w-6 h-0.5 bg-accent transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div
          className="container mx-auto px-4 py-4 flex flex-col space-y-4 bg-dark-gray bg-opacity-95 border-t border-accent">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={getLink(item.path)}
              className="text-foreground hover:text-accent transition-colors py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}