import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  let dots = <div className="mx-2 md:mx-3 flex items-center">
    <svg width="15" height="15" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="3" fill="currentColor" className="text-accent"/>
      <circle cx="20" cy="8" r="3" fill="currentColor" className="text-accent"/>
      <circle cx="32" cy="20" r="3" fill="currentColor" className="text-accent"/>
      <circle cx="20" cy="32" r="3" fill="currentColor" className="text-accent"/>
      <circle cx="8" cy="20" r="3" fill="currentColor" className="text-accent"/>
    </svg>
  </div>;
  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-gray bg-opacity-90 backdrop-blur-sm z-50 border-b border-accent">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/hexagon-bird-logo.svg"
            alt="Tattoo Artist Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </Link>

        <div className="flex items-center text-sm md:text-base tracking-widest">
          <Link href="/bio" className="text-foreground hover:text-accent transition-colors flex items-center pt-1">
            BIO
          </Link>
          {dots}
          <Link href="/gallery" className="text-foreground hover:text-accent transition-colors flex items-center pt-1">
            GALLERY
          </Link>
          {dots}
          <Link href="/booking" className="text-foreground hover:text-accent transition-colors flex items-center pt-1">
            BOOKING
          </Link>
          {dots}
          <Link href="/aftercare" className="text-foreground hover:text-accent transition-colors flex items-center pt-1">
            AFTERCARE
          </Link>
          {dots}
          <Link href="/store" className="text-foreground hover:text-accent transition-colors flex items-center pt-1">
            STORE
          </Link>
        </div>
      </div>
    </nav>
  );
}
