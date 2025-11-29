import Link from 'next/link';

export default function AftercarePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center">AFTERCARE</h1>
      
      <div className="max-w-3xl mx-auto">
        {/* Step-by-step instructions */}
        <div className="mb-12">
          <h2 className="text-2xl text-accent mb-6">Step-by-Step Aftercare</h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                <span className="text-dark-gray font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl mb-2">First 24 Hours</h3>
                <p className="text-light-gray">
                  Keep the bandage on for 2-4 hours. After removing, gently wash the tattoo with lukewarm water and fragrance-free soap. 
                  Pat dry with a clean paper towel – do not rub. Allow to air dry completely before applying a thin layer of aftercare ointment.
                </p>
              </div>
            </div>
            
            <div className="border-t border-accent pt-8"></div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                <span className="text-dark-gray font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl mb-2">Days 1-3</h3>
                <p className="text-light-gray">
                  Wash your tattoo 2-3 times daily with lukewarm water and fragrance-free soap. Apply a thin layer of aftercare ointment after each wash.
                  Do not re-bandage. Wear loose clothing to avoid friction on the tattooed area.
                </p>
              </div>
            </div>
            
            <div className="border-t border-accent pt-8"></div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                <span className="text-dark-gray font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl mb-2">Days 3-14</h3>
                <p className="text-light-gray">
                  Switch from ointment to a fragrance-free, alcohol-free moisturizer. Continue washing 2-3 times daily and applying moisturizer after each wash.
                  Your tattoo will begin to peel – this is normal. Do not pick or scratch at the peeling skin.
                </p>
              </div>
            </div>
            
            <div className="border-t border-accent pt-8"></div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                <span className="text-dark-gray font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl mb-2">Days 15-30</h3>
                <p className="text-light-gray">
                  Continue moisturizing daily. Your tattoo may still appear slightly dull or cloudy – this is normal and will clear up as the deeper layers heal.
                  Avoid sun exposure. If you must be in the sun, use SPF 50+ sunscreen on the healed tattoo.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Healing Stages */}
        <div className="mb-12">
          <h2 className="text-2xl text-accent mb-6">Healing Stages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50">
              <h3 className="text-xl text-accent mb-3">Days 1-6: Inflammation</h3>
              <p className="text-light-gray">
                Your tattoo may be red, swollen, and tender to the touch. It might ooze plasma and ink. 
                The area will feel warm and may look glossy. This is your body's natural response to the tattooing process.
              </p>
            </div>
            
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50">
              <h3 className="text-xl text-accent mb-3">Days 7-14: Peeling</h3>
              <p className="text-light-gray">
                The tattooed area will begin to peel and flake like a sunburn. The colors may appear dull or faded during this stage.
                This is temporary and part of the normal healing process.
              </p>
            </div>
            
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50">
              <h3 className="text-xl text-accent mb-3">Days 15-30: Surface Healing</h3>
              <p className="text-light-gray">
                The peeling will stop, but the tattoo may look cloudy or slightly dull. The skin may still be slightly dry or itchy.
                The surface is mostly healed at this point.
              </p>
            </div>
            
            <div className="border border-accent p-6 bg-dark-gray bg-opacity-50">
              <h3 className="text-xl text-accent mb-3">1-3 Months: Deep Healing</h3>
              <p className="text-light-gray">
                While the surface appears healed, the deeper layers of skin are still recovering. The tattoo will gradually become more vibrant
                as this healing completes. Full healing takes about 3 months.
              </p>
            </div>
          </div>
        </div>
        
        {/* What to Expect & Avoid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl text-accent mb-6">What to Expect</h2>
            <ul className="space-y-4 text-light-gray">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Mild redness and swelling for the first few days</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Peeling and flaking skin after 5-7 days</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Itchiness during the healing process</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Slightly cloudy appearance until fully healed</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>The tattoo will appear more vibrant after complete healing</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl text-accent mb-6">What to Avoid</h2>
            <ul className="space-y-4 text-light-gray">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Soaking in water (baths, pools, hot tubs, ocean) for at least 2 weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Direct sunlight and tanning beds for at least 4 weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Picking, scratching, or peeling the scabs</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Tight clothing or excessive friction on the tattooed area</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Heavy exercise or activities that cause excessive sweating for 3-5 days</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact for Questions */}
        <div className="text-center border-t border-accent pt-8">
          <h2 className="text-xl text-accent mb-4">Questions About Your Healing?</h2>
          <p className="text-light-gray mb-4">
            If you have any concerns about how your tattoo is healing, please don't hesitate to contact me.
          </p>
          <Link 
            href="/booking" 
            className="inline-block px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-dark-gray transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}