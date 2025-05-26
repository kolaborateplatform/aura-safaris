import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

const tours = [
  {
    id: 1,
    title: 'Mountain Adventure',
    description: 'Experience the thrill of mountain climbing with our expert guides.',
    duration: '5 days',
    price: '$1,299',
    image: '/images/tours/mountain.jpg'
  },
  {
    id: 2,
    title: 'Beach Paradise',
    description: 'Relax and unwind on the most beautiful beaches around the world.',
    duration: '7 days',
    price: '$1,499',
    image: '/images/tours/beach.jpg'
  },
  {
    id: 3,
    title: 'City Explorer',
    description: 'Discover the hidden gems of major cities with local guides.',
    duration: '4 days',
    price: '$899',
    image: '/images/tours/city.jpg'
  },
  {
    id: 4,
    title: 'Cultural Journey',
    description: 'Immerse yourself in different cultures and traditions.',
    duration: '10 days',
    price: '$2,199',
    image: '/images/tours/cultural.jpg'
  }
];

export default function Tours() {
  return (
    <main>
      <Breadcrumb 
        title="Our Tours" 
        backgroundImage="/images/tours-bg.jpg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover Our Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of tours, designed to provide
              unforgettable experiences and create lasting memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{tour.duration}</span>
                    <span className="text-blue-600 font-bold">{tour.price}</span>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 