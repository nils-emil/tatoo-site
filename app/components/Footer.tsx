import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-gray py-8 border-t border-accent">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4">
            <Image 
              src="/hexagon-bird-logo.svg" 
              alt="Tattoo Artist Logo" 
              width={60} 
              height={60}
              className="h-12 w-12 mb-4"
            />
          </div>
          
          {/* Studio Addresses */}
          <div className="mb-4 text-sm">
            <p className="text-light-gray mb-1">Basel Studio: Example Street 123, 4000 Basel, Switzerland</p>
            <p className="text-light-gray">Tallinn Studio: Example Street 456, 10115 Tallinn, Estonia</p>
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-4 text-xs text-light-gray mb-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/imprint" className="hover:text-accent transition-colors">
              Imprint
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-xs text-light-gray">
            © {new Date().getFullYear()} Tattoo Artist. All rights reserved.
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-dark-accent transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="text-accent hover:text-dark-accent transition-colors"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}