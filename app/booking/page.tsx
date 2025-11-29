'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const inspirationId = searchParams.get('inspiration');

  const [bookingType, setBookingType] = useState<'calendar' | 'form'>('form');
  const [location, setLocation] = useState<'Basel' | 'Tallinn' | ''>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    if (bookingType === 'calendar') {
      alert('Booking request submitted! We will contact you soon.');
    } else {
      alert('Message sent! We will get back to you shortly.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center">BOOKING</h1>

      {inspirationId && (
        <div className="mb-8 p-4 border border-accent  bg-opacity-50 text-center">
          <p className="text-light-gray">You're booking a tattoo inspired by gallery item #{inspirationId}</p>
        </div>
      )}

      {/* Instagram Booking Option */}
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <p className="text-light-gray">You can also always contact me on <a href="https://www.instagram.com/tarvokerves/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram</a>.</p>
      </div>

      {/* Booking Type Selection */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium border border-accent rounded-l-lg ${bookingType === 'calendar' ? 'bg-accent text-dark-gray' : 'bg-transparent text-accent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => setBookingType('calendar')}
          >
            Booking
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-sm font-medium border border-accent rounded-r-lg ${bookingType === 'form' ? 'bg-accent text-dark-gray' : 'bg-transparent text-accent hover:bg-accent hover:bg-opacity-20'}`}
            onClick={() => setBookingType('form')}
          >
            General Contact
          </button>
        </div>
      </div>

      {/* Calendar Booking */}
      {bookingType === 'calendar' && (
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl mb-4 text-center">Choose Location</h2>
            <div className="flex justify-center gap-4">
              <button
                className={`px-6 py-3 border-2 border-accent rounded-md ${location === 'Basel' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
                onClick={() => setLocation('Basel')}
              >
                Basel
              </button>
              <button
                className={`px-6 py-3 border-2 border-accent rounded-md ${location === 'Tallinn' ? 'bg-accent text-dark-gray' : 'bg-transparent hover:bg-accent hover:bg-opacity-20'}`}
                onClick={() => setLocation('Tallinn')}
              >
                Tallinn
              </button>
            </div>
          </div>

          {location && (
            <>
              <div className="mb-8">
                <h2 className="text-xl mb-4 text-center">Available Dates in {location}</h2>
                <div className="border-2 border-accent p-6 bg-dark-gray bg-opacity-50">
                  <p className="text-center text-light-gray">Calendar functionality would be implemented here.</p>
                  <p className="text-center text-light-gray mt-2">For this prototype, please use the contact form.</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl mb-4 text-center">Contact Details</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="cal-name" className="block mb-2 text-accent">Name</label>
                    <input
                      type="text"
                      id="cal-name"
                      className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cal-email" className="block mb-2 text-accent">Email</label>
                    <input
                      type="email"
                      id="cal-email"
                      className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cal-phone" className="block mb-2 text-accent">Phone</label>
                    <input
                      type="tel"
                      id="cal-phone"
                      className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="cal-description" className="block mb-2 text-accent">Tattoo Description</label>
                    <textarea
                      id="cal-description"
                      rows={4}
                      className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block mb-2 text-accent">Reference Images</label>
                    <div className="border-2 border-accent border-dashed p-8 text-center cursor-pointer hover:bg-accent hover:bg-opacity-10 transition-colors">
                      <p className="text-light-gray">Click to upload images</p>
                      <p className="text-xs text-light-gray mt-2">(Max 5 images, 5MB each)</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      )}

      {/* General Contact Form */}
      {bookingType === 'form' && (
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-accent">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-accent">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-accent">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
