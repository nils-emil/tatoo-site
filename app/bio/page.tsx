import Image from 'next/image';

export default function BioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center">BIO</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Portrait Photo (Optional) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-96 border-2 border-accent overflow-hidden">
            <Image 
              src="/tarvo.jpg" 
              alt="Portrait of Tattoo Artist" 
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="border-2 border-accent p-6 bg-dark-gray bg-opacity-50">
          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">About Me</h2>
            <p className="text-light-gray">
              I am a professional tattoo artist with a passion for creating dark, moody, nature-inspired designs. 
              My work is characterized by intricate linework and a deep connection to natural elements.
              I believe that each tattoo should tell a story and be as unique as the person wearing it.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">Tattoo Style</h2>
            <p className="text-light-gray">
              My style combines elements of blackwork, fine linework, and nature-inspired imagery.
              I specialize in creating designs that flow with the body's natural contours,
              creating pieces that look like they've always been a part of you.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">Experience & Education</h2>
            <p className="text-light-gray">
              With over 8 years of professional experience, I've developed a unique approach to tattooing.
              I've trained under master artists in both Europe and Asia, and continue to evolve my craft
              through ongoing education and artistic exploration.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-3 text-accent">Basel ↔ Tallinn</h2>
            <p className="text-light-gray">
              I split my time between my studios in Basel, Switzerland and Tallinn, Estonia.
              Check my booking page for my current location and availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-3 text-accent">Guest Spots & Travel</h2>
            <p className="text-light-gray">
              I occasionally do guest spots at select studios around Europe.
              Follow my Instagram for announcements about upcoming travel dates and guest appearances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
