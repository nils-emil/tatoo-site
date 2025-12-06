'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ locale }: { locale: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(locale)

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

  // Helper to build localized links
  const link = (path: string) => `/${locale}${path}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-gray bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href={link("/")} className="flex items-center">
          <img
            src="http://95.216.209.117/bird.png"
            alt="Tattoo Artist Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center text-base tracking-widest">
          <Link href={link("/bio")} className="text-foreground hover:text-accent transition-colors flex items-center pt-1">BIO</Link>
          {dots}
          <Link href={link("/gallery")} className="text-foreground hover:text-accent transition-colors flex items-center pt-1">GALLERY</Link>
          {dots}
          <Link href={link("/booking")} className="text-foreground hover:text-accent transition-colors flex items-center pt-1">BOOKING</Link>
          {dots}
          <Link href={link("/aftercare")} className="text-foreground hover:text-accent transition-colors flex items-center pt-1">AFTERCARE</Link>
          {dots}
          <Link href={link("/store")} className="text-foreground hover:text-accent transition-colors flex items-center pt-1">STORE</Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-accent transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-accent transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-accent transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 bg-dark-gray bg-opacity-95 border-t border-accent">
          <Link href={link("/bio")} className="text-foreground hover:text-accent transition-colors py-2 text-center" onClick={() => setIsMenuOpen(false)}>BIO</Link>
          <Link href={link("/gallery")} className="text-foreground hover:text-accent transition-colors py-2 text-center" onClick={() => setIsMenuOpen(false)}>GALLERY</Link>
          <Link href={link("/booking")} className="text-foreground hover:text-accent transition-colors py-2 text-center" onClick={() => setIsMenuOpen(false)}>BOOKING</Link>
          <Link href={link("/aftercare")} className="text-foreground hover:text-accent transition-colors py-2 text-center" onClick={() => setIsMenuOpen(false)}>AFTERCARE</Link>
          <Link href={link("/store")} className="text-foreground hover:text-accent transition-colors py-2 text-center" onClick={() => setIsMenuOpen(false)}>STORE</Link>
        </div>
      </div>
    </nav>
  );
}
