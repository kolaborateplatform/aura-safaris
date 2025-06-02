import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Services() {
  return (
    <main>
      <Breadcrumb 
        title="Our Services"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary font-primary">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary font-primary">Tailored Safaris</h3>
              <p className="text-gray-700 font-secondary">
                Custom-designed itineraries to match your unique interests and preferences, ensuring an unforgettable adventure.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary font-primary">Expert Guides</h3>
              <p className="text-gray-700 font-secondary">
                Experienced local guides with in-depth knowledge of wildlife, culture, and the region's hidden gems.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary font-primary">Sustainable Tourism</h3>
              <p className="text-gray-700 font-secondary">
                Commitment to responsible travel practices that benefit local communities and preserve natural heritage.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary font-primary">Luxury Accommodations</h3>
              <p className="text-gray-700 font-secondary">
                Handpicked lodges and camps offering comfort, elegance, and an authentic safari experience.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary font-primary">Cultural Experiences</h3>
              <p className="text-gray-700 font-secondary">
                Immersive encounters with local communities, traditions, and vibrant cultures of East Africa.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary font-primary">24/7 Support</h3>
              <p className="text-gray-700 font-secondary">
                Dedicated customer support throughout your journey, ensuring a seamless and worry-free trip.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
