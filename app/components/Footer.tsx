import DotPattern from "@/app/components/DotPatterns";

export default function Footer() {
  return (
    <footer className="bg-dark-gray py-8 border-t border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          <div></div>
          <div className="flex justify-center">
            <DotPattern size={30} distance={12} dotRadius={2.5}></DotPattern>
          </div>

          <div className="flex justify-end space-x-4">
            <a 
              href="https://www.instagram.com/tarvokerves"
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
              href="mailto:tarvo.kerves@gmail.com"
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
      </div>
    </footer>
  );
}
