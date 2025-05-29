import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main>
      <Breadcrumb 
        title="About Us" 
        backgroundImage="/images/about-bg.jpg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
          {/* Left Section: Our Story */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 font-secondary mb-2">Our Story</p>
            <h2 className="text-5xl font-bold mb-6 text-primary font-primary leading-tight">A Lifelong Passion for East Africa</h2>
            <p className="text-gray-700 mb-6 font-secondary">
              Hutland Travel is the realization of a lifelong passion for African travel, born
              from the experiences of its founder, Martin Grey. Though raised in the Pacific
              Northwest of the United States, Martin's early years were marked by
              extensive journeys across Asia, Africa, and Europe. Immersed in diverse
              cultures and breathtaking landscapes, he developed a deep appreciation for
              the transformative power of travel.
            </p>
            <p className="text-gray-700 mb-6 font-secondary">
              It was in East Africa, however, that Martin found his heart's true home. The
              vibrant cultures, stunning scenery, and incredible wildlife of Uganda, in
              particular, captured his imagination and ignited a desire to share this passion
              with others. He was particularly struck by the region's potential for tourism
              to not only provide unforgettable experiences but also to contribute to
              sustainable development.
            </p>
            <p className="text-gray-700 mb-8 font-secondary">
              Driven by this vision, Martin dedicated himself to creating a travel company
              that would showcase the magic of East Africa while upholding the principles
              of responsible tourism. He sought out and collaborated with like-minded
              individuals – passionate local experts, conservationists, and community
              leaders – to build a team committed to delivering authentic, enriching, and
              sustainable travel experiences. Hutland Travel was thus founded on the belief
              that tourism could be a force for good, fostering cultural exchange,
              protecting natural heritage, and empowering local communities.
            </p>
          </div>

          {/* Right Section: Images */}
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/images/woman-with-binnocular.webp"
                  alt="woman with binnocular"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/images/masai-dance.webp"
                  alt="Masai dance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-64 overflow-hidden">
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
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Right Section: Image */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden" style={{ width: '587px', height: '838px' }}>
              <Image
                src="/images/lions.webp"
                alt="Lioness"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Left Section: Text Content */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 font-secondary mb-2">Product Philosophy</p>
            <h2 className="text-5xl font-bold mb-6 text-primary font-primary leading-tight">Journeys that are more than just vacations</h2>
            <p className="text-gray-700 mb-6 font-secondary">
              At Hutland Travel, our product philosophy is centered on crafting
              journeys that are more than just vacations; they are transformative
              experiences that leave a positive and lasting impact.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 font-secondary">
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
            <p className="text-gray-700 mt-8 font-secondary">
              Our tours are designed to not only showcase the iconic attractions of
              East Africa but also to offer opportunities for meaningful interaction and
              responsible exploration, creating a travel experience that is both
              enriching and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Right Section: Text Content */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 font-secondary mb-2">Why Hutland Travel</p>
            <h2 className="text-5xl font-bold mb-6 text-primary font-primary leading-tight">Expertise and Personalized Service</h2>
            <p className="text-gray-700 mb-6 font-secondary">
              Hutland Tours distinguishes itself through a deep-rooted passion for
              Uganda and East Africa, combined with a strong commitment to
              sustainable and responsible tourism. Based locally, our expertise
              provides authentic, off-the-beaten-path experiences alongside iconic
              wildlife encounters. We pride ourselves on crafting personalized
              itineraries that cater to individual needs, ensuring each journey is unique
              and unforgettable. Furthermore, our dedication to supporting local
              communities and minimizing our environmental impact means that when
              you travel with Hutland Tours, you’re not just exploring, you’re
              contributing to a positive future for this remarkable region.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 font-secondary">
              <li>
                <span className="font-semibold">Our Expertise:</span> Hutland Travel is more than a tour operator; we are a
                team of passionate African travel specialists. With years of
                experience and deep roots in East Africa, we possess an intimate
                understanding of the region’s diverse landscapes, abundant wildlife,
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
                unique. That’s why we take the time to listen to your individual needs,
                interests, and preferences. Our travel designers work closely with you
                to create a tailor-made itinerary that perfectly matches your vision
                of an African adventure. We handle all the details, so you can relax
                and immerse yourself in the journey.
              </li>
              <li>
                <span className="font-semibold">Our Passion for Africa:</span> At the heart of Hutland Travel is a genuine
                love for Africa. We are driven by a desire to share the beauty, wonder,
                and transformative power of this incredible continent with our
                guests. We are committed to creating journeys that foster a deeper
                appreciation for the people, wildlife, and landscapes of East Africa.
              </li>
            </ul>
          </div>

          {/* Left Section: Image */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden" style={{ width: '587px', height: '838px' }}>
              <Image
                src="/images/monkey.webp"
                alt="Monkey"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHECK NOW SECTION */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-primary font-primary leading-tight">Ready To Explore Our Packages & Book Your Trip?</h2>
          <p className="text-gray-700 mb-8 font-secondary">
            Explore our trips and packages. Kindly use the button below to check them out now!
          </p>
          <button className="px-8 py-4 bg-secondary text-primary font-bold rounded shadow-lg hover:bg-primary hover:text-secondary transition text-lg">
            Check Now
          </button>
        </div>
      </section>
    </main>
  );
}
