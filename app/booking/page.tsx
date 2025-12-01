'use client';

import {useState} from 'react';
import {useSearchParams} from 'next/navigation';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const inspirationId = searchParams.get('inspiration');

  const [bookingType, setBookingType] = useState<'calendar' | 'form'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    placement: '',
    size: '',
    location: '',
    pinterestRefs: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Booking request submitted! We will contact you soon.');
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
        <p
          className="text-light-gray">You can also always contact me on <a href="https://www.instagram.com/tarvokerves/"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           className="text-accent hover:underline">Instagram</a>
        </p>
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
            <h2 className="text-xl mb-4 text-center">Booking Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="cal-name" className="block mb-2 text-accent">Name</label>
                <input
                  type="text"
                  id="cal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="cal-email" className="block mb-2 text-accent">Email</label>
                <input
                  type="email"
                  id="cal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="cal-phone" className="block mb-2 text-accent">Phone (Optional)</label>
                <input
                  type="tel"
                  id="cal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="cal-description" className="block mb-2 text-accent">Tattoo Description</label>
                <textarea
                  id="cal-description"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="cal-placement" className="block mb-2 text-accent">Placement</label>
                <input
                  type="text"
                  id="cal-placement"
                  name="placement"
                  value={formData.placement}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="cal-size" className="block mb-2 text-accent">Approximate Size</label>
                <input
                  type="text"
                  id="cal-size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="cal-location" className="block mb-2 text-accent">Location</label>
                <input
                  type="text"
                  id="cal-location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="cal-pinterest" className="block mb-2 text-accent">Pinterest References</label>
                <textarea
                  id="cal-pinterest"
                  name="pinterestRefs"
                  value={formData.pinterestRefs}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Paste your Pinterest links or describe your reference images here..."
                  className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                ></textarea>
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
        </div>
      )}

      {/* General Contact Form */}
      {bookingType === 'form' && (
        <div className="max-w-2xl mx-auto">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="4edfb1a2-3a27-4f92-8454-314f3569efd2"/>
            <div>
              <label htmlFor="name" className="block mb-2 text-accent">Name</label>
              <input
                type="text"
                id="name"
                name="name"
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
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-accent">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 bg-dark-gray border-2 border-accent focus:border-accent focus:ring-0 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-colors shadow-[0_0_10px_rgba(230,161,68,0.2)] hover:shadow-[0_0_15px_rgba(230,161,68,0.5)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
