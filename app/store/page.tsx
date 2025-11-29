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
  const [printable, setPrintable] = useState<boolean>(false);

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
              Give the gift of art with a tattoo gift card. Perfect for someone special who's been thinking about getting inked.
              Our gift cards are delivered instantly via email and can be used for any tattoo service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Gift Card Preview */}
            <div className="border-2 border-accent p-6 bg-dark-gray bg-opacity-70 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-[1.618/1] max-w-md mx-auto border border-accent">
                <div className="absolute inset-0 bg-dark-gray p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Image 
                      src="/hexagon-bird-logo.svg" 
                      alt="Tattoo Artist Logo" 
                      width={60} 
                      height={60}
                      className="h-12 w-12"
                    />
                    <div className="text-right">
                      <div className="text-accent text-xl">GIFT CARD</div>
                      <div className="text-2xl font-bold">
                        €{selectedAmount === 'custom' ? customAmount : selectedAmount}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center items-center text-center">
                    <div className="text-light-gray mb-2">
                      {recipientName ? `For: ${recipientName}` : 'For: [Recipient Name]'}
                    </div>
                    <div className="text-light-gray text-sm italic mb-4">
                      {message || 'Personal message will appear here'}
                    </div>
                    <div className="text-xs text-light-gray">
                      Valid at Basel and Tallinn studios
                    </div>
                  </div>
                  
                  <div className="text-xs text-light-gray text-center mt-4">
                    Gift Card ID: SAMPLE-XXXX-XXXX
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-light-gray text-sm">
                  This is a preview of how your gift card will look.
                  {printable && " A printable PDF version will also be included in the email."}
                </p>
              </div>
            </div>
            
            {/* Gift Card Form */}
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
                  <label htmlFor="recipientEmail" className="block mb-2 text-accent">Recipient's Email</label>
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
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="printable"
                    checked={printable}
                    onChange={(e) => setPrintable(e.target.checked)}
                    className="mr-2 h-4 w-4 border-accent"
                  />
                  <label htmlFor="printable" className="text-light-gray">
                    Include printable PDF version
                  </label>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
                  >
                    Purchase Gift Card
                  </button>
                </div>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-light-gray text-sm">Payment Methods:</div>
                  <div className="text-accent">Stripe</div>
                  <div className="text-accent">PayPal</div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50 text-center">
              <h3 className="text-xl text-accent mb-3">Instant Delivery</h3>
              <p className="text-light-gray">
                Gift cards are delivered instantly to the recipient's email address.
                They'll receive a unique code that can be used to book an appointment.
              </p>
            </div>
            
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50 text-center">
              <h3 className="text-xl text-accent mb-3">Valid for 1 Year</h3>
              <p className="text-light-gray">
                Gift cards are valid for one year from the date of purchase.
                They can be used for any tattoo service at either of our studios.
              </p>
            </div>
            
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50 text-center">
              <h3 className="text-xl text-accent mb-3">Secure Payment</h3>
              <p className="text-light-gray">
                All payments are processed securely through Stripe or PayPal.
                Your payment information is never stored on our servers.
              </p>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="border border-accent p-6 bg-dark-gray bg-opacity-50 mb-12">
            <h2 className="text-2xl text-accent mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-accent mb-2">Can I use a gift card for a deposit?</h3>
                <p className="text-light-gray">
                  Yes, gift cards can be used to pay for deposits when booking an appointment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl text-accent mb-2">What if the tattoo costs more than the gift card amount?</h3>
                <p className="text-light-gray">
                  The recipient can pay the difference using another payment method.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl text-accent mb-2">Can I use a gift card at both studios?</h3>
                <p className="text-light-gray">
                  Yes, gift cards are valid at both our Basel and Tallinn studios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}