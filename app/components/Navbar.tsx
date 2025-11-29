import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 md:space-x-10 text-sm md:text-base tracking-widest">
          <Link href="/bio" className="text-foreground hover:text-accent transition-colors">
            BIO
          </Link>
          <Link href="/gallery" className="text-foreground hover:text-accent transition-colors">
            GALLERY
          </Link>
          <Link href="/booking" className="text-foreground hover:text-accent transition-colors">
            BOOKING
          </Link>
          <Link href="/aftercare" className="text-foreground hover:text-accent transition-colors">
            AFTERCARE
          </Link>
          <Link href="/store" className="text-foreground hover:text-accent transition-colors">
            STORE
          </Link>
        </div>
      </div>
    </nav>
  );
}