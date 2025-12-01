import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="flex-1 flex items-center justify-center"
      >
        <div className="flex items-center justify-center w-full">
          {/* Basel Text */}
          <div className="text-2xl md:text-4xl tracking-[.4em] mr-8 md:mr-16 color-tarvo">
            BASEL
          </div>

          {/* Hexagon Logo */}
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="/bird.png"
                alt="Tattoo Artist Logo" 
                width={200} 
                height={200}
                className="w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Tallinn Text */}
          <div className="text-2xl md:text-4xl tracking-[.4em] ml-8 md:ml-16 color-tarvo">
            TALLINN
          </div>
        </div>
      </div>
    </div>
  );
}
