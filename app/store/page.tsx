'use client';

import { useState } from 'react';
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
    e.preventDefault();
    // In a real application, this would process the payment and send the gift card
    alert('Gift card purchase successful! An email has been sent with the details.');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/forest-river-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-8 text-center">GIFT CARDS</h1>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-light-gray">
              We offer gift cards for all our tattoo services. Give the gift of art with a tattoo gift card - perfect for someone special who's been thinking about getting inked.
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
            <div className="border-2 border-accent p-6 bg-dark-gray bg-opacity-70">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-accent">Select Amount</label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <button
                      type="button"
                      className={`py-3 border-2 ${selectedAmount === 50 ? 'bg-accent text-dark-gray' : 'border-accent text-accent hover:bg-accent hover:bg-opacity-20'}`}
                      onClick={() => setSelectedAmount(50)}
                    >
                      €50
                    </button>
                    <button
                      type="button"
                      className={`py-3 border-2 ${selectedAmount === 100 ? 'bg-accent text-dark-gray' : 'border-accent text-accent hover:bg-accent hover:bg-opacity-20'}`}
                      onClick={() => setSelectedAmount(100)}
                    >
                      €100
                    </button>
                    <button
                      type="button"
                      className={`py-3 border-2 ${selectedAmount === 200 ? 'bg-accent text-dark-gray' : 'border-accent text-accent hover:bg-accent hover:bg-opacity-20'}`}
                      onClick={() => setSelectedAmount(200)}
                    >
                      €200
                    </button>
                    <button
                      type="button"
                      className={`py-3 border-2 ${selectedAmount === 'custom' ? 'bg-accent text-dark-gray' : 'border-accent text-accent hover:bg-accent hover:bg-opacity-20'}`}
                      onClick={() => setSelectedAmount('custom')}
                    >
                      Custom
                    </button>
                  </div>

                  {selectedAmount === 'custom' && (
                    <div className="mb-4">
                      <label htmlFor="customAmount" className="block mb-2 text-accent">Enter Amount (€)</label>
                      <input
                        type="number"
                        id="customAmount"
                        min="20"
                        max="500"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                        required
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="recipientEmail" className="block mb-2 text-accent">Sender's Email</label>
                  <input
                    type="email"
                    id="recipientEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="recipientName" className="block mb-2 text-accent">Recipient's Name</label>
                  <input
                    type="text"
                    id="recipientName"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-accent">Personal Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  ></textarea>
                </div>

                {/* Removed printable PDF checkbox as per requirements */}

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
                  >
                    Purchase Gift Card
                  </button>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-light-gray text-sm">Payment Method:</div>
                  <div className="text-accent">Stripe</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
