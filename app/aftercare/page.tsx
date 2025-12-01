import Link from 'next/link';

export default function AftercarePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center">AFTERCARE</h1>

      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <div className="mb-8 p-6 border border-accent bg-dark-gray bg-opacity-50">
          <p className="text-light-gray">
            It's important to remember everyone heals differently. Don't hesitate to reach out to your artist with any questions you may have. If your artist gives you instructions different from the instructions below, follow your artist's instructions.
          </p>
        </div>

        {/* Day 1-3 */}
        <div className="mb-12">
          <h2 className="text-2xl text-accent mb-6">Day 1-3</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-accent mb-3">WHAT TO DO:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Leave the second skin on for 48-72 hours (follow artist instructions). No need to wash or put ointment on the tattoo during this period.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid strenuous activities, sweating, water, and sunlight during this period.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>If the bandage becomes damaged and the tattoo gets exposed, remove it and wash with antibacterial soap. Contact your artist for further instructions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>If you experience excessive "weeping", send a picture to your artist and they will advise.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Don't take Advil or anything that thins your blood.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Remove the bandage on the last day (see below for instructions).</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-accent mb-3">WHAT TO EXPECT:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The second skin will protect the tattoo from infection and prevent scabbing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Some redness, swelling, and heat around the tattooed area are normal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>A clear or ink colored liquid may leak from the tattoo. This is known as "Weeping".</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>A bit of weeping is ok and the liquid will be absorbed back into the body. However if you have a sac of liquid, contact your artist.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-accent mb-3">MOST IMPORTANT:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid hot water and sweating. Sweat contains bacteria and can cause an infection. Heat/sweat also make removing the bandage more difficult resulting in a bad heal due to irritation from adhesive residue.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Do not remove the second skin early as it may damage the tattoo and increase the risk of infection. If you have excessive weeping, contact your artist.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Day 4-6 */}
        <div className="mb-12">
          <h2 className="text-2xl text-accent mb-6">Day 4-6</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-accent mb-3">WHAT TO DO:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Gently wash the tattooed area 2-3 times/day (follow artist instructions). Use antibacterial soap such as Dial or SoftSoap.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Pat the area dry with a clean towel immediately after washing. Let it air dry for 5-10 minutes before applying ointment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Apply a thin layer of Aquaphor Healing Ointment to the tattoo 2-3 times/day (follow artist instructions). Rub the ointment in with light pressure and remove any excess ointment from the surface with your hand.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid sun exposure.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-accent mb-3">WHAT TO EXPECT:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The tattoo may feel itchy as it begins to peel (If it isn't peeling at this point, don't worry, everyone's different).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The tattooed skin will dry out, this is normal. Be careful to not over-moisturize.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The tattoo will generally look darker and fuzzier during this period. Don't worry, it will go back to normal in 1-2 weeks.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-accent mb-3">MOST IMPORTANT:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid water, sweating, picking at skin, and sun exposure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Take short showers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid wearing tight or restrictive clothing that may rub against the tattooed area.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Day 7-14 */}
        <div className="mb-12">
          <h2 className="text-2xl text-accent mb-6">Day 7-14</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-accent mb-3">WHAT TO DO:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Continue to gently wash with antibacterial soap 2-3 times per day (follow artist instructions).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Apply unscented lotion or tattoo-specific aftercare product as needed to keep the skin moisturized. Gentle lotions such as Nivea, Aveeno, Cera Ve, or Cetaphil should be used. Tattoo products such as Tat-Fat, Hustle Butter, or H2Ocean can be used in place of lotion during this period.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid sun exposure.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-accent mb-3">WHAT TO EXPECT:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The tattoo will continue to heal and the skin will become smoother and shiny.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The color/contrast of the tattoo may look more vibrant as the healing process progresses. This is because the top layer of your skin has not regenerated yet.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Peeling/flaking of the skin should subside.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-accent mb-3">MOST IMPORTANT:</h3>
              <ul className="space-y-4 text-light-gray">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Avoid water, and sun exposure.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Removing the Second Skin Bandage */}
        <div className="mb-12 p-6 border border-accent bg-dark-gray bg-opacity-50">
          <h2 className="text-2xl text-accent mb-6">Removing the Second Skin Bandage</h2>
          <p className="text-light-gray mb-4">
            Sun, water, and over-moisturizing are the main causes of bad tattoo heals.
          </p>
          <p className="text-light-gray">
            Don't apply sunscreen on your new tattoo for 6 weeks. This means it's important to keep it covered from the sun during this period when it's most vulnerable to UV.
          </p>
        </div>

        {/* Contact for Questions */}
        <div className="text-center border-t border-accent pt-8">
          <h2 className="text-xl text-accent mb-4">Questions About Your Healing?</h2>
          <p className="text-light-gray mb-4">
            If you have any concerns about how your tattoo is healing, please don't hesitate to contact me.
          </p>
          <Link 
            href="/booking" 
            className="inline-block px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-foreground transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
