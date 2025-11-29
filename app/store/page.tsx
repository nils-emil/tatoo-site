'use client';

import {useState} from 'react';
import Image from 'next/image';

type GiftCardAmount = 50 | 100 | 200 | 'custom';

export default function StorePage() {
  const [selectedAmount, setSelectedAmount] = useState<GiftCardAmount>(100);
  const [customAmount, setCustomAmount] = useState<number>(150);
  const [email, setEmail] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  // Removed printable PDF option as per requirements

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setCustomAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    window.location.href = 'https://buy.stripe.com/00wcN56QscW9foRaav2Fa02'
    e.preventDefault();
  };

  const handleTip = (e: React.MouseEvent) => {
    window.location.href = 'https://buy.stripe.com/00wcN56QscW9foRaav2Fa02'
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen">
      {/* Using site-wide background from bg.png */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-8 text-center">GIFT CARDS</h1>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-light-gray">
              We offer gift cards for all our tattoo services. Give the gift of art with a tattoo gift card - perfect
              for someone special who's been thinking about getting inked.
              Our gift cards are delivered instantly via email and can be used for any tattoo service at our studios.
            </p>
          </div>

          {/* Gift Card Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-accent overflow-hidden">
              <Image
                src="/store/store1.jpg"
                alt="Gift Card Design 1"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="border border-accent overflow-hidden">
              <Image
                src="/store/store2.jpg"
                alt="Gift Card Design 2"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="border border-accent overflow-hidden">
              <Image
                src="/store/store3.jpg"
                alt="Gift Card Design 3"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            {/* Gift Card Form - Preview removed as per requirements */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
                >
                  Purchase
                </button>
                <button
                  type="button"
                  onClick={handleTip}
                  className="py-3 px-4 bg-transparent border border-accent text-accent hover:bg-accent hover:text-foreground hover:bg-opacity-20 hover:text-accent transition-colors text-sm"
                >
                  Tip
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
