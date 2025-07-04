import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main>
      <Breadcrumb 
        title="About Us"
      />
      
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-8 md:gap-12">
          {/* Images Section - First on mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="flex md:hidden overflow-x-auto gap-4 pb-4 -mx-4 px-4">
              <div className="flex-none w-[250px]">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/woman-with-binnocular.webp"
                    alt="woman with binnocular"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex-none w-[250px]">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/masai-dance.webp"
                    alt="Masai dance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-none w-[250px]">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/tourist.webp"
                    alt="tourist"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-row gap-8 justify-center items-center">
              <div className="flex flex-col gap-8 w-1/2 items-center">
                <div className="relative w-full aspect-[4/5] max-w-[205px] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/woman-with-binnocular.webp"
                    alt="woman with binnocular"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative w-full aspect-[4/5] max-w-[205px] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/masai-dance.webp"
                    alt="Masai dance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] max-w-[205px] overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/tourist.webp"
                    alt="tourist"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section - Second on mobile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-base md:text-lg text-gray-600 font-secondary mb-2">Our Story</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary font-primary leading-tight break-words">A Lifelong Passion for East Africa</h2>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-secondary">
              Aura Safaris is the realization of a lifelong passion for African travel, born
              from the experiences of its founder, Laura. Though raised in Uganda, Laura's early years were marked by
              extensive journeys across Asia, Africa, and Europe. Immersed in diverse
              cultures and breathtaking landscapes, shee developed a deep appreciation for
              the transformative power of travel.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-secondary">
              Aura Safaris is the realization of a lifelong passion for African travel, born
              from the experiences of its founder, Laura. Though raised in Uganda, Laura's early years were marked by
              extensive journeys across Asia, Africa, and Europe. Immersed in diverse
              cultures and breathtaking landscapes, shee developed a deep appreciation for
              the transformative power of travel.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 font-secondary">
              Aura Safaris is the realization of a lifelong passion for African travel, born
              from the experiences of its founder, Laura. Though raised in Uganda, Laura's early years were marked by
              extensive journeys across Asia, Africa, and Europe. Immersed in diverse
              cultures and breathtaking landscapes, shee developed a deep appreciation for
              the transformative power of travel.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Image Section - First on mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full aspect-[3/4] max-w-[587px] mx-auto overflow-hidden rounded-lg">
              <Image
                src="/images/lions.webp"
                alt="Lioness"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text Section - Second on mobile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-base md:text-lg text-gray-600 font-secondary mb-2">Product Philosophy</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary font-primary leading-tight break-words">Journeys that are more than just vacations</h2>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-secondary">
              At Aura Safaris, our product philosophy is centered on crafting
              journeys that are more than just vacations; they are transformative
              experiences that leave a positive and lasting impact.
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-3 font-secondary">
              <li>
                <span className="font-semibold">Authentic Exploration:</span> We go beyond the surface, seeking genuine
                encounters with the people, cultures, and landscapes of East Africa.
                We prioritize experiences that offer a deeper understanding and
                appreciation of the region.
              </li>
              <li>
                <span className="font-semibold">Responsible Adventure:</span> We are committed to sustainable tourism
                practices that minimize our environmental footprint and contribute
                to the well-being of local communities. We carefully select partners
                and activities that align with our ethical principles.
              </li>
              <li>
                <span className="font-semibold">Tailored Experiences:</span> We recognize that every traveler is unique.
                We design personalized itineraries that cater to individual interests,
                preferences, and travel styles, ensuring a bespoke and unforgettable
                journey.
              </li>
              <li>
                <span className="font-semibold">Expert Guidance:</span> Our team of passionate and knowledgeable
                guides are the heart of our product. They bring the region to life,
                sharing their expertise and ensuring the safety and comfort of our
                guests.
              </li>
              <li>
                <span className="font-semibold">Creating Lasting Memories:</span> We strive to create moments that
                resonate long after the journey ends, fostering a sense of wonder,
                connection, and respect for the world around us.
              </li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-6 md:mt-8 font-secondary">
              Our tours are designed to not only showcase the iconic attractions of
              East Africa but also to offer opportunities for meaningful interaction and
              responsible exploration, creating a travel experience that is both
              enriching and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Image Section - First on mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full aspect-[3/4] max-w-[587px] mx-auto overflow-hidden rounded-lg">
              <Image
                src="/images/monkey.webp"
                alt="Monkey"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text Section - Second on mobile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-base md:text-lg text-gray-600 font-secondary mb-2">Why Aura Safaris</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary font-primary leading-tight break-words">Expertise and Personalized Service</h2>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-secondary">
              Aura Safaris distinguishes itself through a deep-rooted passion for
              Uganda and East Africa, combined with a strong commitment to
              sustainable and responsible tourism. Based locally, our expertise
              provides authentic, off-the-beaten-path experiences alongside iconic
              wildlife encounters. We pride ourselves on crafting personalized
              itineraries that cater to individual needs, ensuring each journey is unique
              and unforgettable. Furthermore, our dedication to supporting local
              communities and minimizing our environmental impact means that when
              you travel with Hutland Tours, you're not just exploring, you're
              contributing to a positive future for this remarkable region.
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-3 font-secondary">
              <li>
                <span className="font-semibold">Our Expertise:</span> Aura Safaris is more than a tour operator; we are a
                team of passionate African travel specialists. With years of
                experience and deep roots in East Africa, we possess an intimate
                understanding of the region's diverse landscapes, abundant wildlife,
                and vibrant cultures. Our local knowledge allows us to craft unique
                and authentic experiences that go beyond the typical tourist trail.
              </li>
              <li>
                <span className="font-semibold">Our Commitment to Sustainability:</span> We believe that travel has the
                power to transform lives and protect our planet. Hutland Travel is
                dedicated to responsible tourism practices that minimize our
                environmental impact and maximize the positive contributions to
                local communities. We work closely with our partners to ensure that
                tourism benefits conservation efforts, supports local economies, and
                preserves cultural heritage.
              </li>
              <li>
                <span className="font-semibold">Our Personalized Approach:</span> We understand that every traveler is
                unique. That's why we take the time to listen to your individual needs,
                interests, and preferences. Our travel designers work closely with you
                to create a tailor-made itinerary that perfectly matches your vision
                of an African adventure. We handle all the details, so you can relax
                and immerse yourself in the journey.
              </li>
              <li>
                <span className="font-semibold">Our Passion for Africa:</span> At the heart of Aura Safaris is a genuine
                love for Africa. We are driven by a desire to share the beauty, wonder,
                and transformative power of this incredible continent with our
                guests. We are committed to creating journeys that foster a deeper
                appreciation for the people, wildlife, and landscapes of East Africa.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CHECK NOW SECTION */}
      <section className="py-8 md:py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary font-primary leading-tight break-words">Ready To Explore Our Packages & Book Your Trip?</h2>
          <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 font-secondary">
            Explore our trips and packages. Kindly use the button below to check them out now!
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-primary font-bold rounded shadow-lg hover:bg-primary hover:text-secondary transition text-base md:text-lg">
            Check Now
          </button>
        </div>
      </section>
    </main>
  );
}
