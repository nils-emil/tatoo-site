import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex space-x-2 text-sm">
          <button className="text-accent hover:text-dark-accent transition-colors">EST</button>
          <span className="text-foreground">/</span>
          <button className="text-foreground hover:text-accent transition-colors">ENG</button>
          <span className="text-foreground">/</span>
          <button className="text-foreground hover:text-accent transition-colors">GER</button>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="flex-1 flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/forest-river-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center w-full">
          {/* Basel Text */}
          <div className="text-2xl md:text-4xl tracking-widest mr-8 md:mr-16">
            BASEL
          </div>

          {/* Hexagon Logo */}
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="/hexagon-bird-logo.svg" 
                alt="Tattoo Artist Logo" 
                width={200} 
                height={200}
                className="w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Tallinn Text */}
          <div className="text-2xl md:text-4xl tracking-widest ml-8 md:ml-16">
            TALLINN
          </div>
        </div>
      </div>
    </div>
  );
}
