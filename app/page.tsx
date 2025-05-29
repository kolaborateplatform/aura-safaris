"use client";

import Image from "next/image";
import TripSearchForm from "@/components/TripSearchForm";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const tours = useQuery(api.tours.list);
  const destinations = useQuery(api.destinations.list);

  return (
    <>
      {/* HERO SECTION */}
      <section
        aria-label="Hero Section"
        className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-primary">Let's Explore</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg font-secondary">Would you like to discover East Africa?</p>
          <TripSearchForm />
          <button className="px-8 py-4 bg-secondary text-primary font-bold rounded shadow-lg hover:bg-primary hover:text-secondary transition text-lg mt-8">
            Get Started
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 font-secondary mb-2">Our Story</p>
            <h2 className="text-5xl font-bold mb-6 text-primary font-primary leading-tight">Crafting Unforgettable Experiences</h2>
            <p className="text-gray-700 mb-6 font-secondary">
              Hutland Travel is the culmination of Martin Grey's lifelong pursuit of discovery. From the misty forests of the Pacific
              Northwest to sprawling deserts in Asia and historic cities in Europe, Martin's childhood rucksack carried a single mission: to
              understand the world and its people. Yet it was in East Africa—where Uganda's kaleidoscope of cultures, lush hills, and
              teeming wildlife forged an unbreakable bond—that he found his true calling.
            </p>
            <p className="text-gray-700 mb-8 font-secondary">
              Fueled by the conviction that travel can be a catalyst for positive change, Martin teamed up with local guides,
              dedicated conservationists, and community leaders to create Hutland Travel. Our itineraries blend off-the-beaten-path
              adventures with authentic cultural exchanges, all designed to uplift local economies, protect fragile ecosystems, and leave a
              meaningful legacy. Ready to embark on a journey that transforms both traveler and destination?
            </p>
            <button className="px-8 py-4 bg-secondary text-primary font-bold rounded shadow-lg hover:bg-primary hover:text-secondary transition text-lg">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.webp"
                alt="Woman relaxing in a safari tent"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary font-primary">Destination Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
              Discover Amazing Locations
            </p>
          </div>

          {!destinations ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div 
                  key={destination._id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {destination.imageUrl && (
                    <div className="relative h-64">
                      <Image
                        src={destination.imageUrl}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-primary">{destination.name}</h3>
                    <p className="text-sm font-secondary line-clamp-2">{destination.description}</p>
                    <button className="mt-4 bg-secondary text-primary font-bold py-2 px-6 rounded hover:bg-primary hover:text-secondary transition-colors">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURED TOURS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary font-primary">Featured Tours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
              Explore our most popular safari packages, designed to give you the ultimate African experience
            </p>
          </div>

          {!tours ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <div key={tour._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {tour.imageUrl && (
                    <div className="relative h-48">
                      <Image
                        src={tour.imageUrl}
                        alt={tour.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary font-primary">{tour.name}</h3>
                    <p className="text-gray-600 mb-4 font-secondary">{tour.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-500 font-secondary">{tour.duration}</span>
                      <span className="text-secondary font-bold">${tour.price}</span>
                    </div>
                    <button className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-primary hover:text-secondary transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
